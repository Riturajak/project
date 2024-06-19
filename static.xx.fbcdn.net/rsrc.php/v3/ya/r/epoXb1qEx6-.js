; /*FB_PKG_DELIM*/

__d("VideoFeedFastPreloadController", ["DOMQuery", "Run"], (function(a, b, c, d, e, f, g) {
    var h = 0;

    function b(b) {
        h < 2 && (b = d("DOMQuery").scry(b, "video")[0], b instanceof a.HTMLVideoElement && (h || d("Run").onBeforeUnload(function() {
            return i()
        }), b.preload = "auto", h += 1))
    }

    function i() {
        h = 0
    }
    i();
    g.preload = b;
    g.reset = i
}), 98);
__d("MaybeNativePromise", ["Promise"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    c = a.Promise || g || (g = b("Promise"));
    (g || b("Promise")).resolve();
    d = c;
    f["default"] = d
}), 66);
__d("VideoAkamaiRequestHelper", ["URI"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;

    function a(a) {
        return a.toLowerCase().indexOf("akamai") !== -1
    }

    function i(a) {
        var b = a.startByte;
        a = a.endByte;
        if (b != void 0 && !(b === 0 && a == void 0)) {
            b = "bytes=" + b + "-" + (a == void 0 ? "" : a);
            return {
                Range: b
            }
        }
        return null
    }

    function b(a) {
        var b = new(h || (h = c("URI")))(a);
        b = b.getQueryData();
        var d = b.startByte;
        b = b.endByte;
        return i({
            baseUrl: a,
            startByte: d,
            endByte: b
        })
    }
    g.isAkamai = a;
    g.getRequestHeaders = i;
    g.getRequestHeadersFromUrl = b
}), 98);
__d("VideoDashPrefetchCacheUtils", ["ConstUriUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        a = d("ConstUriUtils").getUri(a);
        a = a == null ? void 0 : a.getDomain();
        return a != null && a.endsWith("fbcdn.net") && !a.startsWith("interncache") && !a.endsWith("ak.fbcdn.net")
    }

    function b(a) {
        var b = d("ConstUriUtils").getUri(a);
        if (b == null ? void 0 : b.getDomain()) {
            var c = ["oh", "__gda__"],
                e = b == null ? void 0 : b.getQueryParams().keys();
            if (e != null)
                for (var e = e, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var h;
                    if (f) {
                        if (g >= e.length) break;
                        h = e[g++]
                    } else {
                        g = e.next();
                        if (g.done) break;
                        h = g.value
                    }
                    h = h;
                    h.startsWith("_nc") && c.push(h)
                }
            return (g = b == null ? void 0 : (h = b.removeQueryParams(c)) == null ? void 0 : h.toString()) != null ? g : a
        }
        return a
    }
    g.isFBCDN = a;
    g.stripNonCachingParams = b
}), 98);
__d("parseHeaders", [], (function(a, b, c, d, e, f) {
    var g = /\r?\n[\t]+/g,
        h = /\r?\n/;

    function a(a) {
        a = a.replace(g, " ");
        var b = {};
        a.split(h).forEach(function(a) {
            a = a.split(":");
            var c = a.shift().trim();
            if (c) {
                a = a.join(":").trim();
                b[c.toLowerCase()] = a
            }
        });
        return b
    }
    f["default"] = a
}), 66);
__d("VideoPlayerShakaError", ["parseHeaders"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, d) {
        var e = a.errorRawTransportStatus,
            f = null;
        a.errorRawResponseHeaders != null && (f = c("parseHeaders")(a.errorRawResponseHeaders));
        return {
            name: a.errorType,
            message: a.errorMsg,
            type: d,
            url: b,
            status: e,
            responseHeaders: f
        }
    }

    function b(a) {
        return {
            name: "timeout",
            message: "timeout",
            type: "net",
            url: a,
            status: 0,
            responseHeaders: null
        }
    }
    g.translateError = a;
    g.createTimeoutError = b
}), 98);
__d("VideoDashPrefetchCache", ["ConstUriUtils", "Deferred", "MaybeNativePromise", "ODS", "Promise", "VideoAkamaiRequestHelper", "VideoDashPrefetchCacheUtils", "VideoPlayerPrefetchExperiments", "VideoPlayerShakaError", "XHRRequest", "asyncToGeneratorRuntime", "clearTimeout", "cr:1209197", "cr:1209198", "getCrossOriginTransport", "recoverableViolation", "requireWeak", "setTimeout"], (function(a, b, c, d, e, f, g) {
    var h, i, j = 5e3,
        k = function(a) {
            b("cr:1209197") != null ? b("cr:1209197").onLeave(a) : b("cr:1209198") != null ? b("cr:1209198").onUnload(a) : c("recoverableViolation")("Dash prefetch cache onNavigatingAway handler was not properly set", "video")
        },
        l = null;
    c("requireWeak")("VideoPlayerShakaBandwidthEstimator", function(a) {
        return l = a
    });
    var m = null;
    c("requireWeak")("VideoStreamingTaskQueueProvider", function(a) {
        return m = a
    });

    function n(a) {
        return a.audio.length + a.video.length + a.manifest.length
    }

    function o(a, b) {
        (i || (i = d("ODS"))).bumpEntityKey(2966, "www_video_playback", "prefetch." + a, b)
    }

    function p(a) {
        var b = "aborted",
            c = {
                status: 0
            },
            d = new Error("Prefetch request aborted.");
        return Object.assign(d, {
            type: b,
            url: a,
            xhr: c
        })
    }

    function q(a) {
        var b = a.getURI(),
            c = b.toString();
        if (d("VideoAkamaiRequestHelper").isAkamai(c)) {
            var e = d("VideoAkamaiRequestHelper").getRequestHeadersFromUrl(c);
            c = b.removeQueryData(["bytestart", "byteend"]);
            a.setURI(c);
            e && Object.keys(e).forEach(function(b) {
                a.setRequestHeader(b, e[b])
            })
        }
        return a
    }
    var r = null,
        s = new Map();

    function t(a, b) {
        b === void 0 && (b = !1);
        return b && d("VideoDashPrefetchCacheUtils").isFBCDN(a) ? c("getCrossOriginTransport").withCredentials : c("getCrossOriginTransport")
    }

    function u(a) {
        return d("VideoDashPrefetchCacheUtils").isFBCDN(a.url)
    }

    function v(a, b, c) {
        return {
            response: a.slice(b.start + 0, b.end + 1),
            responseTime: c,
            initiator: "XHR_REQUEST"
        }
    }
    a = function() {
        function a() {
            this.$2 = new Map(), this.$9 = new Map(), this.$10 = new Map(), this.$1 = new Map(), this.$3 = [], this.$4 = [], this.$5 = 0, this.$6 = c("VideoPlayerPrefetchExperiments").maxPrefetchVideosNum, this.$7 = c("VideoPlayerPrefetchExperiments").consolidateFragmentedPrefetchRequest
        }
        var e = a.prototype;
        e.$11 = function(a, b) {
            var e = this;
            b === void 0 && (b = !1);
            var f = a,
                g = window.fetch,
                h = c("VideoPlayerPrefetchExperiments").useFetch;
            if (h && g && "AbortController" in window) {
                var i = new AbortController();
                h = i.signal;
                var j = g(f, {
                    signal: h,
                    credentials: b ? "include" : "same-origin"
                }).then(function(a) {
                    e.$12(j);
                    return {
                        initiator: "FETCH",
                        response: a
                    }
                });
                this.$13(a, j);
                this.$3.push(babelHelpers["extends"]({}, j, {
                    abort: function() {
                        i.abort()
                    }
                }));
                return j
            }
            var k = new(c("XHRRequest"))(f).setMethod("GET").setResponseType("arraybuffer").setTransportBuilder(t(f, b));
            q(k);
            g = new(c("MaybeNativePromise"))(function(b, c) {
                k.setErrorHandler(function(a) {
                    e.$12(k), c(d("VideoPlayerShakaError").translateError(a, f, "preload"))
                }), k.setResponseHandler(function(a) {
                    a = a;
                    var c = k;
                    e.$12(k);
                    b(babelHelpers["extends"]({}, c, {
                        response: a,
                        initiator: "XHR_REQUEST"
                    }))
                }), k.setAbortHandler(function() {
                    e.$12(k);
                    var b = p(a);
                    c(b)
                })
            });
            this.$13(a, g);
            this.$3.push(k);
            this.$8 ? this.$8.push(k) : k.send();
            return g
        };
        e.genPrefetchMpdNow = function() {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function*(a) {
                return this.has(a) ? null : this.$11(a)
            });

            function c(b) {
                return a.apply(this, arguments)
            }
            return c
        }();
        e.$14 = function(b, c, d) {
            c === void 0 && (c = !1);
            d === void 0 && (d = null);
            var e = [];
            for (var f = 0; f < b.length; f++) {
                var g = a.createQueryStringURL(b[f]);
                this.has(g) || (e.push(this.$11(g, c).then(function(a) {
                    o("received", 1);
                    return a
                })), d != null && this.$2.set(g, d))
            }
            o("sent", e.length);
            return e
        };
        e.$15 = function(e) {
            var f = this,
                g = a.getConsolidatedURL(e);
            if (g == null) return this.$14(e);
            var i = new(c("XHRRequest"))(g).setMethod("GET").setResponseType("arraybuffer").setTransportBuilder(t(g));
            q(i);
            var j = Date.now(),
                k = [];
            for (var l = 0; l < e.length; l++) {
                var m = a.createQueryStringURL(e[l]),
                    n = new(c("Deferred"))();
                this.has(m) || this.$13(m, n.getPromise());
                k.push(n)
            }
            i.setErrorHandler(function(a) {
                f.$12(i);
                for (var b = 0; b < k.length; b++) k[b].reject(d("VideoPlayerShakaError").translateError(a, g, "preload"))
            });
            i.setResponseHandler(function(a) {
                a = a;
                var b = Date.now() - j;
                for (var c = 0; c < e.length; c++) {
                    var d = k[c],
                        g = e[c];
                    d.resolve(v(a, g, b))
                }
                f.$12(i)
            });
            i.setAbortHandler(function() {
                for (var a = 0; a < e.length; a++) {
                    var b = k[a];
                    b.reject(new Error("Request aborted."))
                }
            });
            this.$3.push(i);
            i.send();
            o("consolidated.sent", 1);
            o("sent", k.length);
            m = k.map(function(a) {
                return a.getPromise().then(function(a) {
                    o("received", 1);
                    return a
                })
            });
            (h || (h = b("Promise"))).all(m).then(function() {
                return o("consolidated.received", 1)
            })["catch"](function() {});
            return m
        };
        e.$16 = function(a) {
            var b = this,
                d = a.useCredentials,
                e = a.connectionQualityLevel;
            this.$5++;
            var f = this.$7 && !d;
            c("VideoPlayerPrefetchExperiments").enableGlobalSchedulerForPrefetch && (this.$8 = []);
            var g = f ? this.$15(a.video) : this.$14(a.video, d, e);
            f = f ? this.$15(a.audio) : this.$14(a.audio, d, e);
            e = this.$14(a.manifest, d);
            d = g.concat(f, e);
            if (this.$8) {
                var h = this.$8 || [];
                this.$8 = null;
                var i = "" + a.videoID,
                    j = c("MaybeNativePromise").all(d).then(function() {
                        return void 0
                    }, function() {
                        return void 0
                    });
                g = {
                    cancel: function() {},
                    getPromise: function() {
                        return j
                    },
                    name: "prefetch task, " + i,
                    run: function() {
                        i && s["delete"](i);
                        h.forEach(function(a) {
                            return a.send()
                        });
                        return j
                    }
                };
                m ? (c("VideoPlayerPrefetchExperiments").switchPrefetchTaskToHighPriWhenPlayed && i && s.set(i, g), m.getQueue("video").enqueue(g, c("VideoPlayerPrefetchExperiments").prefetchPriority), this.$17()) : (g.run(), c("MaybeNativePromise").all(d).then(function() {
                    return b.$17()
                })["catch"](function() {
                    return b.$17()
                }))
            } else c("MaybeNativePromise").all(d).then(function() {
                return b.$17()
            })["catch"](function() {
                return b.$17()
            })
        };
        e.$13 = function(a, b) {
            var e = this;
            a = d("VideoDashPrefetchCacheUtils").stripNonCachingParams(a);
            this.$1.values().next().done && k(function() {
                for (var a = 0; a < e.$3.length; a++) e.$3[a].abort();
                e.$3 = [];
                e.$4 = [];
                e.$5 = 0;
                e.$1.clear();
                e.$10.forEach(function(a) {
                    c("clearTimeout")(a)
                });
                e.$10.clear()
            });
            this.$1.set(a, b);
            b = c("setTimeout")(function() {
                e.$1.has(a) && e.$1["delete"](a), e.$10["delete"](a)
            }, j);
            this.$10.set(a, b)
        };
        e.$12 = function(a) {
            a = this.$3.indexOf(a);
            a > -1 && this.$3.splice(a, 1)
        };
        e.$17 = function() {
            this.$5--;
            var a = this.$4.shift();
            a && this.$16(a)
        };
        e.has = function(a) {
            a = d("VideoDashPrefetchCacheUtils").stripNonCachingParams(a);
            return this.$1.has(a)
        };
        e.getConnectionQualityLevel = function(a) {
            return this.$2.get(a)
        };
        e.getAndDelete = function(a) {
            a = d("VideoDashPrefetchCacheUtils").stripNonCachingParams(a);
            var b = this.$1.get(a);
            if (b) {
                o("cache.hit", 1);
                var e = this.$10.get(a);
                e != null && (c("clearTimeout")(e), this.$10["delete"](a))
            } else o("cache.miss", 1);
            this.$1["delete"](a);
            o("retrieve", 1);
            return b
        };
        e.queueRequestBatch = function(a) {
            this.$6 === 0 || this.$5 < this.$6 ? this.$16(a) : (o("queued", n(a)), this.$4.push(a))
        };
        e.setCachedRepresentations = function(a, b) {
            this.$9.set(a, b)
        };
        e.getCachedRepresentations = function(a) {
            return this.$9.get(a)
        };
        a.getCachedRepresentations = function(b) {
            return a.getInstance().getCachedRepresentations(b)
        };
        a.getInstance = function() {
            r === null && (r = new a());
            return r
        };
        a.createQueryStringURL = function(a) {
            var b = a.start,
                c = a.end,
                e;
            if (b != null && c !== null && c !== void 0) {
                var f;
                e = (f = d("ConstUriUtils").getUri(a.url)) == null ? void 0 : (f = f.addQueryParam("bytestart", b)) == null ? void 0 : (b = f.addQueryParam("byteend", c)) == null ? void 0 : b.toString()
            }
            return (f = e) != null ? f : a.url
        };
        a.getConsolidatedURL = function(b) {
            var c = "",
                d = Infinity,
                e = 0;
            for (var f = 0; f < b.length; f++) {
                var g = b[f],
                    h = g.url,
                    i = g.start;
                g = g.end;
                if (h == null || i == null || g == null) return null;
                if (c === "") c = h;
                else if (c !== h) return null;
                d = Math.min(d, i);
                e = Math.max(e, g)
            }
            return a.createQueryStringURL({
                url: c,
                start: d,
                end: e
            })
        };
        a.getPrefetchInfoFromRepresentation = function(a) {
            return a.segments.map(function(b) {
                return {
                    url: a.url,
                    start: b.start,
                    end: b.end
                }
            })
        };
        a.getVideoRepresentationFromRepresentations = function(a, b) {
            var c = a.find(function(a) {
                return a.representation_id.endsWith("d")
            });
            !b && l && (b = l.getBandwidth());
            if (!b) return c;
            for (var d = 0; d < a.length; d++) {
                var e = a[d],
                    f = c && c.bandwidth || 0;
                if (f > e.bandwidth) continue;
                else b > e.bandwidth && (c = e)
            }
            return c
        };
        a.loadVideoGivenAllRepresentations = function(b, c, d) {
            if (a.isAutoplayBandwidthRestrained()) return;
            var e = [],
                f = [];
            c.audio.length > 0 && (e = a.getPrefetchInfoFromRepresentation(c.audio[0]), e.length > 0 && f.push(c.audio[0].representation_id));
            var g = [];
            c = a.getVideoRepresentationFromRepresentations(c.video, d);
            c && (g = a.getPrefetchInfoFromRepresentation(c), g.length > 0 && f.push(c.representation_id));
            d = a.getInstance();
            d.queueRequestBatch({
                audio: e,
                video: g,
                manifest: [],
                videoID: b,
                useCredentials: !1
            });
            d.setCachedRepresentations(b, f)
        };
        a.isAutoplayBandwidthRestrained = function() {
            return !!l && l.isAutoplayBandwidthRestrained()
        };
        a.loadVideo = function(b, d, e) {
            d = !!d;
            if (!c("VideoPlayerPrefetchExperiments").disableShakaBandwidthEstimator && l && l.isAutoplayBandwidthRestrained()) return;
            if (c("VideoPlayerPrefetchExperiments").disablePrefetchCache) return;
            var f = a.getInstance();
            Array.isArray(b.manifest) || (b.manifest = []);
            b.video || (b.video = []);
            b.audio || (b.audio = []);
            f.queueRequestBatch({
                manifest: b.manifest.filter(u),
                video: b.video.filter(u),
                audio: b.audio.filter(u),
                videoID: b.videoID,
                useCredentials: d,
                connectionQualityLevel: e
            })
        };
        a.getCacheValue = function(b) {
            return a.getInstance().getAndDelete(b)
        };
        a.getConnectionQualityLevel = function(b) {
            return a.getInstance().getConnectionQualityLevel(b)
        };
        a.hasCacheValue = function(b) {
            return a.getInstance().has(b)
        };
        a.getPrefetchTaskByID = function(a) {
            return s.get(a) || null
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("VideoDisplayTimePlayButton", ["CSS", "DataStore", "Event"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {},
        i = "_spinner";

    function a(a) {
        return d("DataStore").get(a, "clicked", !1)
    }

    function b(a, b) {
        var e = a.id;
        h[e] = c("Event").listen(a, "click", function() {
            b && (d("CSS").hide(a), d("CSS").show(b)), d("DataStore").set(a, "clicked", !0)
        });
        b && (h[e + i] = c("Event").listen(b, "click", function() {
            b && d("CSS").hide(b), d("CSS").show(a), d("DataStore").set(a, "clicked", !1)
        }))
    }

    function e(a) {
        a = a.id;
        Object.prototype.hasOwnProperty.call(h, a) && h[a].remove();
        a = a + i;
        Object.prototype.hasOwnProperty.call(h, a) && h[a].remove()
    }
    g.getClicked = a;
    g.register = b;
    g.unregister = e
}), 98);
__d("VideosRenderingInstrumentation", ["DataStore", "VideoPlayerHTML5Experiments", "performanceAbsoluteNow"], (function(a, b, c, d, e, f, g) {
    var h;

    function i(a) {
        var b = c("VideoPlayerHTML5Experiments").useMonotonicallyIncreasingTimers ? (h || (h = c("performanceAbsoluteNow")))() : Date.now();
        d("DataStore").set(a, "videos_rendering_instrumentation", b);
        return b
    }

    function a(a) {
        var b = d("DataStore").get(a, "videos_rendering_instrumentation", NaN);
        Number.isNaN(b) && (b = i(a));
        return b
    }
    g.storeRenderTime = i;
    g.retrieveRenderTime = a
}), 98);