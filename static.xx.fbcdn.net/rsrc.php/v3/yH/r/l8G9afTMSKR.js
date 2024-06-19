; /*FB_PKG_DELIM*/

__d("VideoQualityClassInternal", [], (function(a, b, c, d, e, f) {
    e.exports = {
        orderedValues: ["sd", "hd", "uhd"]
    }
}), null);
__d("VideoViewabilityKeyEvents", [], (function(a, b, c, d, e, f) {
    e.exports = {
        Events: ["entered_fs", "exited_fs", "finished_playing", "paused", "player_format_changed", "started_playing", "unpaused"]
    }
}), null);
__d("LiveVideoCopyrightActionSubscription_facebookRelayOperation", [], (function(a, b, c, d, e, f) {
    e.exports = "5170008176396928"
}), null);
__d("LiveVideoCopyrightActionSubscription.graphql", ["LiveVideoCopyrightActionSubscription_facebookRelayOperation"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }],
            c = [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "data",
                    variableName: "input"
                }],
                concreteType: "LiveVideoCopyrightActionSubscribeResponsePayload",
                kind: "LinkedField",
                name: "live_video_copyright_action_subscribe",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "action",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "timestamp",
                    storageKey: null
                }],
                storageKey: null
            }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "LiveVideoCopyrightActionSubscription",
                selections: c,
                type: "Subscription",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "LiveVideoCopyrightActionSubscription",
                selections: c
            },
            params: {
                id: b("LiveVideoCopyrightActionSubscription_facebookRelayOperation"),
                metadata: {
                    subscriptionName: "live_video_copyright_action_subscribe"
                },
                name: "LiveVideoCopyrightActionSubscription",
                operationKind: "subscription",
                text: null
            }
        }
    }();
    e.exports = a
}), null);
__d("LiveVideoCopyrightActionSubscription", ["BaseGraphQLSubscription", "LiveVideoCopyrightActionSubscription.graphql"], (function(a, b, c, d, e, f, g) {
    var h;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.getTopic = function(a) {
            return "gqls/" + this.getSubscriptionName() + "/video_id_" + a
        };
        d.getQuery = function() {
            return h !== void 0 ? h : h = b("LiveVideoCopyrightActionSubscription.graphql")
        };
        d.getQueryParameters = function(a) {
            return {
                input: {
                    video_id: a
                }
            }
        };
        return c
    }(c("BaseGraphQLSubscription"));
    g["default"] = a
}), 98);
__d("dispatchEvent", [], (function(a, b, c, d, e, f) {
    function b(b, c) {
        var d;
        typeof a.Event === "function" ? d = new a.Event(c) : (d = a.document.createEvent("Event"), d.initEvent(c, !0, !0));
        b.dispatchEvent(d)
    }
    f["default"] = b
}), 66);
__d("SRTVideoData", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = null;
    a = function() {
        function a() {
            this.$1 = null, this.$2 = null
        }
        a.getInstance = function() {
            g || (g = new a());
            return g
        };
        var b = a.prototype;
        b.setJobID = function(a) {
            this.$1 = a
        };
        b.setJobTrackingID = function(a) {
            this.$2 = a
        };
        b.unsetJobID = function() {
            this.$1 = null
        };
        b.getJobID = function() {
            return this.$1
        };
        b.getJobTrackingID = function() {
            return this.$2
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("VideoCaptionsBackgroundOpacity", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        OPAQUE: 100,
        DARK: 75,
        DEFAULT: 45,
        LIGHT: 25,
        TRANSPARENT: -1
    });
    f["default"] = a
}), 66);
__d("CaptionSettings", ["VideoCaptionsBackgroundOpacity"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        enabled: !1,
        text: {
            size: 175,
            color: "White",
            opacity: 100,
            edge: "",
            typeface: ""
        },
        background: {
            color: "Black",
            opacity: c("VideoCaptionsBackgroundOpacity").DEFAULT
        }
    };
    g.DefaultCaptionSettings = a
}), 98);
__d("StaleVideoMonitor", ["EventEmitter", "EventListener", "SubscriptionsHandler", "clearTimeout", "performanceNow", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    var h, i = 1500;
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var d;
            d = a.call(this) || this;
            d.$StaleVideoMonitor4 = null;
            d.$StaleVideoMonitor1 = new(c("SubscriptionsHandler"))();
            d.$StaleVideoMonitor2 = b.currentTime;
            d.$StaleVideoMonitor3 = (h || (h = c("performanceNow")))();
            d.$StaleVideoMonitor5 = b;
            d.$StaleVideoMonitor1.addSubscriptions(c("EventListener").listen(b, "playing", function() {
                return d.$StaleVideoMonitor6()
            }), c("EventListener").listen(b, "play", function() {
                return d.$StaleVideoMonitor6()
            }), c("EventListener").listen(b, "timeupdate", function() {
                return d.$StaleVideoMonitor6()
            }));
            return d
        }
        var d = b.prototype;
        d.$StaleVideoMonitor7 = function() {
            if (this.$StaleVideoMonitor5) {
                if (this.$StaleVideoMonitor5.paused || this.$StaleVideoMonitor5.playbackRate <= 0) return;
                var a = this.$StaleVideoMonitor5.currentTime,
                    b = this.$StaleVideoMonitor5.buffered,
                    d = !1,
                    e;
                for (e = 0; e < b.length; ++e) {
                    var f = b.start(e),
                        g = b.end(e);
                    if (f > a) break;
                    if (f <= a && g >= a + 1) {
                        d = !0;
                        break
                    }
                }
                d && (a === this.$StaleVideoMonitor2 ? this.emit("stale", (h || (h = c("performanceNow")))() - this.$StaleVideoMonitor3, (a - this.$StaleVideoMonitor2) * 1e3) : this.$StaleVideoMonitor8())
            }
        };
        d.$StaleVideoMonitor9 = function(a) {
            var b = this;
            this.$StaleVideoMonitor10();
            this.$StaleVideoMonitor4 = c("setTimeoutAcrossTransitions")(function() {
                return b.$StaleVideoMonitor7()
            }, a)
        };
        d.$StaleVideoMonitor10 = function() {
            this.$StaleVideoMonitor4 !== null && (c("clearTimeout")(this.$StaleVideoMonitor4), this.$StaleVideoMonitor4 = null)
        };
        d.$StaleVideoMonitor8 = function() {
            this.$StaleVideoMonitor6()
        };
        d.$StaleVideoMonitor6 = function() {
            this.$StaleVideoMonitor5 && (this.$StaleVideoMonitor2 = this.$StaleVideoMonitor5.currentTime, this.$StaleVideoMonitor3 = (h || (h = c("performanceNow")))(), this.$StaleVideoMonitor9(i))
        };
        d.$StaleVideoMonitor11 = function() {
            this.$StaleVideoMonitor1 && this.$StaleVideoMonitor1.release()
        };
        d.notifyBuffering = function() {
            this.$StaleVideoMonitor10()
        };
        d.notifyBuffered = function() {
            this.$StaleVideoMonitor9(i)
        };
        d.destroy = function() {
            this.$StaleVideoMonitor11(), this.$StaleVideoMonitor10(), this.$StaleVideoMonitor5 = null
        };
        return b
    }(c("EventEmitter"));
    g["default"] = a
}), 98);
__d("TimeRanges", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    a = function() {
        function a(a) {
            this.$1 = [], this.$1 = a
        }
        var b = a.prototype;
        b.start = function(a) {
            this.$1[a] || h(0, 2205);
            return this.$1[a].startTime
        };
        b.end = function(a) {
            this.$1[a] || h(0, 2205);
            return this.$1[a].endTime
        };
        b.length = function() {
            return this.$1.length
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("VideoQualityClasses", ["VideoQualityClassInternal"], (function(a, b, c, d, e, f, g) {
    g["default"] = c("VideoQualityClassInternal").orderedValues
}), 98);
__d("VideoVisibilityObserver", ["EventEmitter", "IntersectionObserver", "VideoPlayerExperiments", "intersectionObserverEntryIsIntersecting"], (function(a, b, c, d, e, f, g) {
    var h = [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1];
    a = 44;
    var i = "-" + a + "px 0px 0px";
    b = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var d;
            d = a.call(this) || this;
            d.$VideoVisibilityObserver4 = function(a) {
                a = a[a.length - 1];
                var b = d.$VideoVisibilityObserver1,
                    e = d.$VideoVisibilityObserver2;
                d.$VideoVisibilityObserver1 = a.intersectionRatio;
                d.$VideoVisibilityObserver2 = c("intersectionObserverEntryIsIntersecting")(a);
                (b !== d.$VideoVisibilityObserver1 || e !== d.$VideoVisibilityObserver2) && d.emit("visibilityChanged", d.$VideoVisibilityObserver1)
            };
            d.$VideoVisibilityObserver1 = 0;
            d.$VideoVisibilityObserver2 = !1;
            var e = h,
                f = c("VideoPlayerExperiments").videoVisibilityObserverUseMinimumThreshold;
            f && (e = [.5]);
            d.$VideoVisibilityObserver3 = new(c("IntersectionObserver"))(d.$VideoVisibilityObserver4, {
                threshold: e,
                rootMargin: i
            });
            d.$VideoVisibilityObserver3.observe(b);
            return d
        }
        var d = b.prototype;
        d.destroy = function() {
            this.$VideoVisibilityObserver3 && (this.$VideoVisibilityObserver3.disconnect(), this.$VideoVisibilityObserver3 = null)
        };
        d.getIsIntersecting = function() {
            return this.$VideoVisibilityObserver2
        };
        d.getCurrentIntersectionRatio = function() {
            return this.$VideoVisibilityObserver1
        };
        return b
    }(c("EventEmitter"));
    g["default"] = b
}), 98);
__d("VideoWithFallbackMode", ["Event", "SubscriptionsHandler", "TimeSlice", "VideoPlayerExperiments", "VideoPlayerLoggerFallbackReasons", "Visibility"], (function(a, b, c, d, e, f) {
    a = function() {
        "use strict";

        function a(a, c) {
            var d = this;
            this.$1 = !1;
            this.$2 = !1;
            this.$5 = function() {
                d.$1 = !0, b("VideoPlayerExperiments").disableFallbackModeForInactiveTab && d.$2 && (d.$6.play("fallback_mode"), d.$2 = !1)
            };
            this.$8 = function() {
                d.$1 = !1
            };
            this.$3 = new(b("SubscriptionsHandler"))();
            c || (c = a, a = null);
            this.$4 = c;
            a && this.enable(a)
        }
        var c = a.prototype;
        c.enable = function(a) {
            var c = this;
            this.$3.engage();
            this.$6 = a;
            if (this.$6.isImplementationUnavailable() || this.$6.getOption("SphericalVideoPlayer", "isUnavailable")) {
                this.$7(b("VideoPlayerLoggerFallbackReasons").FLASH_UNAVAILABLE);
                return
            }
            this.$3.addSubscriptions(b("Event").listen(window, "blur", this.$8), b("Event").listen(window, "focus", this.$5), b("Visibility").addListener(b("Visibility").HIDDEN, this.$8), b("Visibility").addListener(b("Visibility").VISIBLE, this.$5), a.addListener("error", this.$9.bind(this)));
            if (this.$4.fallbackTimeoutMs) {
                a = this.$4.fallbackTimeoutMs;
                this.$10 = setTimeout(b("TimeSlice").guard(function() {
                    c.$6.isState("loading") && (c.$6.pause("fallback_mode"), c.$7(b("VideoPlayerLoggerFallbackReasons").TIMEOUT), c.$2 = !0)
                }, "VideoWithFallbackMode fallbackTimeout", {
                    propagationType: b("TimeSlice").PropagationType.EXECUTION
                }), a)
            }
        };
        c.disable = function() {
            this.$3.release(), clearTimeout(this.$10), this.$10 = null, this.$6 = null
        };
        c.$9 = function(a) {
            if (this.$6.isState("fallback")) return;
            this.$6.isState("playing") && this.$6.pause("fallback_mode");
            this.$6.abortLoading();
            a ? this.$7(a) : (this.$7(b("VideoPlayerLoggerFallbackReasons").FLASH_ERROR), this.$2 = !0)
        };
        c.$7 = function(a) {
            if (b("VideoPlayerExperiments").disableFallbackModeForInactiveTab && !this.$1) return;
            this.$6.setState("fallback");
            a === b("VideoPlayerLoggerFallbackReasons").TIMEOUT && this.$6.emit("VideoWithStallRecoveryOverlay/timeout");
            this.$6.logEvent("entered_fallback", {
                debug_reason: a
            })
        };
        return a
    }();
    e.exports = a
}), null);
__d("AbstractVideoPlayerApi", ["invariant", "EventEmitter", "VideoPlayerApiEvents"], (function(a, b, c, d, e, f, g, h) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.addListener = function() {
            for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
            return a.prototype.addListener.apply(this, c)
        };
        c.emit = function() {
            for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
            return a.prototype.emit.apply(this, c)
        };
        c.setRelativeSphericalOrientation = function(a, b) {};
        b.isImplementationUnavailable = function() {
            return !0
        };
        c.isDrm = function() {
            return !1
        };
        c.setup = function() {};
        return b
    }(c("EventEmitter"));
    g["default"] = a
}), 98);
__d("VideoConfig", [], (function(a, b, c, d, e, f) {
    function a(a) {
        Object.assign(this, a)
    }
    e.exports = a
}), null);
__d("VideoData", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    a = function() {
        function a(a) {
            this.$1 = a || {
                aspect_ratio: 0,
                original_height: 0,
                original_width: 0,
                video_id: ""
            }
        }
        var b = a.prototype;
        b.hasHD = function() {
            return !!this.$1.hd_src
        };
        b.getP2PSettings = function() {
            return this.$1.p2p_settings
        };
        b.getEncodingTag = function() {
            return this.$1.encoding_tag
        };
        b.getContentCategory = function() {
            return this.$1.content_category
        };
        b.getVideoID = function() {
            return this.$1.video_id
        };
        b.getVideoURL = function() {
            return this.$1.video_url
        };
        b.getAspectRatio = function() {
            return this.$1.aspect_ratio
        };
        b.getRotation = function() {
            return this.$1.rotation || 0
        };
        b.getCaptionsAutogeneratedIndicatorConfig = function() {
            return this.$1.captions_autogenerated_indicator_config
        };
        b.hasSubtitles = function() {
            return !!this.$1.subtitles_src
        };
        b.hasDashManifest = function() {
            return !!this.$1.dash_manifest
        };
        b.getDashManifest = function() {
            return this.$1.dash_manifest
        };
        b.getDashPrefetchedRepresentationIDs = function() {
            return this.$1.dash_prefetched_representation_ids
        };
        b.getSubtitlesSrc = function() {
            this.$1.subtitles_src || h(0, 1109);
            return this.$1.subtitles_src
        };
        b.getPlayableSrcSD = function() {
            return this.$1.sd_src_no_ratelimit ? this.$1.sd_src_no_ratelimit : this.getPlayableSrcRateLimitedSD()
        };
        b.getPlayableSrcHD = function() {
            return this.$1.hd_src_no_ratelimit ? this.$1.hd_src_no_ratelimit : this.getPlayableSrcRateLimitedHD()
        };
        b.getPlayableSrcRateLimitedSD = function() {
            return this.$1.sd_src
        };
        b.getPlayableSrcRateLimitedHD = function() {
            return this.$1.hd_src
        };
        b.getLiveManifestUrl = function() {
            this.isLiveStream() || h(0, 1110);
            return this.getPlayableSrcRateLimitedSD()
        };
        b.hasRateLimit = function() {
            return !!this.$1.sd_src_no_ratelimit
        };
        b.getStreamType = function() {
            this.$1.stream_type || h(0, 1111);
            return this.$1.stream_type
        };
        b.isBroadcast = function() {
            return !!this.$1.is_broadcast
        };
        b.isServableViaFbms = function() {
            return !!this.$1.is_servable_via_fbms
        };
        b.isLiveStream = function() {
            return !!this.$1.is_live_stream
        };
        b.isHls = function() {
            return !!this.$1.is_hls
        };
        b.isGaming = function() {
            return this.$1.content_category === "gaming"
        };
        b.isLowLatency = function() {
            return !!this.$1.is_low_latency
        };
        b.getDesiredLatencyMs = function() {
            return this.$1.desired_latency_ms
        };
        b.getLatencyToleranceMs = function() {
            return this.$1.latency_tolerance_ms
        };
        b.isFacecastAudio = function() {
            return !!this.$1.is_facecast_audio
        };
        b.liveRoutingToken = function() {
            return this.$1.live_routing_token
        };
        b.getHDTag = function() {
            return this.$1.hd_tag
        };
        b.getSDTag = function() {
            return this.$1.sd_tag
        };
        b.getProjection = function() {
            return this.$1.projection
        };
        b.getPlayerVersionOverwrite = function() {
            return this.$1.player_version_overwrite
        };
        b.getFalloverData = function() {
            var b = this.$1.fallover_data;
            return b ? b.map(function(b) {
                return new a(b)
            }) : []
        };
        b.getSphericalConfig = function() {
            return this.$1.spherical_config
        };
        b.isSpherical = function() {
            return !!this.$1.is_spherical
        };
        b.getOriginalHeight = function() {
            return this.$1.original_height
        };
        b.getOriginalWidth = function() {
            return this.$1.original_width
        };
        b.getOverrideConfig = function() {
            return this.$1.override_config
        };
        b.getRawData = function() {
            return this.$1
        };
        b.getPrefetchCache = function() {
            return this.$1.prefetch_cache
        };
        b.getWidevineCert = function() {
            return this.$1.widevine_cert
        };
        b.getFairplayCert = function() {
            return this.$1.fairplay_cert
        };
        b.getDRMHelper = function() {
            var a;
            return (a = this.$1) == null ? void 0 : (a = a.extra_drm_info) == null ? void 0 : a.drm_helper
        };
        b.getGraphApiVideoLicenseUri = function() {
            var a;
            return (a = this.$1) == null ? void 0 : (a = a.extra_drm_info) == null ? void 0 : a.graph_api_video_license_uri
        };
        b.getVideoLicenseUriMap = function() {
            var a;
            return (a = this.$1) == null ? void 0 : (a = a.extra_drm_info) == null ? void 0 : a.video_license_uri_map
        };
        b.isLiveTraceEnabledOnPlayer = function() {
            return !!this.$1.is_live_trace_enabled_on_player
        };
        b.getManifestServiceParam = function() {
            var a;
            return (a = this.$1) == null ? void 0 : a.ms_param
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("dangerouslyOverrideMediaElementEndedProperty", [], (function(a, b, c, d, e, f) {
    function a(a) {
        a === void 0 && (a = {});
        a.dangerouslyOverrideMediaElementEndedProperty = !0;
        return a
    }
    a.isEnded = function(a) {
        return !!(a && a.detail && a.detail.dangerouslyOverrideMediaElementEndedProperty)
    };
    f["default"] = a
}), 66);
__d("getHTMLMediaElementMutedState", ["HTMLMediaElementReadyStates"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        if (a.readyState >= c("HTMLMediaElementReadyStates").HAVE_METADATA) return a.muted;
        else return a.hasAttribute("muted") || a.muted
    }
    g["default"] = a
}), 98);
__d("getVideoBrowserTabId", ["guid"], (function(a, b, c, d, e, f, g) {
    var h = c("guid")().slice(-8);

    function a() {
        return h
    }
    g["default"] = a
}), 98);
__d("HVideoPlayerMixin", ["EventListener", "UserAgent", "VideoPlayerHTML5Experiments", "dangerouslyOverrideMediaElementEndedProperty", "getHTMLMediaElementMutedState", "getVideoBrowserTabId"], (function(a, b, c, d, e, f) {
    var g = -1,
        h = !!(window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart);

    function i(a, b) {
        a.time_ms = Date.now();
        b = b.timeStamp;
        if (b && h) {
            var c = Math.floor(b).toString().length,
                d = Date.now().toString().length,
                e = window.performance.now();
            if (c === d + 3) b = Math.floor(b / 1e3), a.time_ms = b;
            else if (c === d) a.time_ms = b;
            else if (b <= e) {
                c = window.performance.timing.navigationStart;
                a.time_ms = c + Math.floor(b)
            }
        }
        return a
    }
    a = {
        initLogger: function(a, c, d, e, f, h, i) {
            var j = this;
            this._loggedEvents = {};
            this._logFunction = a;
            this._fixOverwrittenGetVideoCurrentTime = e;
            this._fireSeekEvents = f;
            this._useEventTime = c;
            this._recentPausedTime = null;
            this._audioOnly = !1;
            this._enablePlaybackSpeedLogging = i;
            var k = this.getVideoElement();
            if (h) {
                var l = k.pause;
                k.pause = function() {
                    j._recentPausedTime = k.currentTime;
                    return l.apply(k)
                }
            }
            d && (this._overwriteVideoCurrentTimeProperty(k), this._didOverwriteVideoCurrentTimeProperty || (this.preventSeekLoggingInMixin = !0));
            this._lastStartTimePosition = g;
            this._muted = b("getHTMLMediaElementMutedState")(k);
            this._pausedPosition = g;
            this._seeking = !1;
            this._seekSourceTimePosition = g;
            this._currentTimeAtSeekStart = g;
            this._volume = k.volume;
            this._hasBlockedPausedRepresentationEnded = !1;
            this._logNextPlayingEvent = !0;
            this._lastLoggedPlaybackSpeed = null;
            this._lastPlayedTime = g;
            a = !1;
            k.readyState >= k.HAVE_FUTURE_DATA ? this._logReadyToPlay() : a = !0;
            if (this.skipSubscriptions()) return;
            e = this.getSubscriptions();
            a && e.addSubscriptions(b("EventListener").listen(k, "canplay", this._logReadyToPlay.bind(this)));
            e.addSubscriptions(b("EventListener").listen(k, "ended", this.onEnded.bind(this)), b("EventListener").listen(k, "pause", this.onPause.bind(this)), b("EventListener").listen(k, "playing", this.onPlaying.bind(this)), b("EventListener").listen(k, "seeked", this.onSeeked.bind(this)), b("EventListener").listen(k, "seeking", this.onSeeking.bind(this)), b("EventListener").listen(k, "play", this.onPlay.bind(this)), b("EventListener").listen(k, "loadedmetadata", this.onLoadedMetadata.bind(this)), b("EventListener").listen(k, "timeupdate", this.onTimeUpdate.bind(this)), b("EventListener").listen(k, "volumechange", this.onVolumeChange.bind(this)));
            this._enablePlaybackSpeedLogging && e.addSubscriptions(b("EventListener").listen(k, "ratechange", this.onPlaybackRateChange.bind(this)))
        },
        skipSubscriptions: function() {
            return !1
        },
        onCanPlay: function(a) {
            this._logReadyToPlay(a)
        },
        onPlay: function(a) {
            this._logNextPlayingEvent = !0, this._ignoreNextPlaying = !1, this._pendingPlayRequest = !0
        },
        logHeartbeat: function() {
            if (b("VideoPlayerHTML5Experiments").heartbeatUpdateWatchTime) {
                this._logEvent("heart_beat", this._getWatchTimeClosingLogData({}));
                var a = this._getVideoCurrentTime();
                this._lastStartTimePosition = a;
                this._lastPlayedTime = a
            } else this._logEvent("heart_beat")
        },
        _getWatchTimeClosingLogData: function(a) {
            this._lastPlayedTime = this._getVideoCurrentTime();
            return this._amendEventTime(babelHelpers["extends"]({
                video_last_start_time_position: this._lastStartTimePosition === g ? this._lastPlayedTime : this._lastStartTimePosition,
                video_time_position: this._lastPlayedTime
            }, a))
        },
        _logOnce: function(a, b) {
            if (this._loggedEvents[a]) return;
            this._logEvent(a, b)
        },
        setAudioOnly: function(a) {
            this._audioOnly = a
        },
        _logEvent: function(a, c) {
            this._loggedEvents[a] = !0;
            c = c ? c : {};
            c.video_id = this.getVideoID();
            c.browser_tab_id = b("getVideoBrowserTabId")();
            this._audioOnly && (c.audio_only = !0);
            c.has_blocked_paused_representation_ended = this._hasBlockedPausedRepresentationEnded;
            Object.prototype.hasOwnProperty.call(c, "video_time_position") || (c.video_time_position = this._getVideoCurrentTime());
            c.time_ms || (c.time_ms = Date.now());
            c.time = Math.round(c.time_ms / 1e3);
            if (this.getAdClientToken) {
                var d = this.getAdClientToken();
                d && (c.ad_client_token = d)
            }
            this.getPlayerFormat && (c.player_format = this.getPlayerFormat());
            this.getPlayerOrigin && (c.player_origin = this.getPlayerOrigin());
            this.getPlayerSuborigin && (c.player_suborigin = this.getPlayerSuborigin());
            if (this._enablePlaybackSpeedLogging) {
                d = this.getVideoElement().playbackRate;
                d = d !== 0 ? d : this._lastLoggedPlaybackSpeed;
                c.current_playback_speed = d;
                this._lastLoggedPlaybackSpeed = d
            }
            this._logFunction(a, c)
        },
        _logReadyToPlay: function() {
            return
        },
        __setPendingPlayRequest: function(a) {
            this._pendingPlayRequest = a
        },
        onPause: function(a) {
            this._logNextPlayingEvent = !0;
            var c = this.getVideoElement();
            if (this._pendingPlayRequest) {
                var d = {
                    debug_reason: this.getLastPlayReason()
                };
                this._pendingPlayRequest = !1;
                this._logEvent("cancelled_requested_playing", d);
                return
            }
            d = !!this._getVideoPlayerShakaConfig();
            d = c.ended || d && b("dangerouslyOverrideMediaElementEndedProperty").isEnded(a) ? "finished_playing" : "paused";
            var e = this._recentPausedTime == null ? this._getVideoCurrentTime() : this._recentPausedTime;
            this._recentPausedTime = null;
            e && (this._lastPlayedTime = e);
            e = this._lastPlayedTime;
            var f = this._lastStartTimePosition === g ? this._lastPlayedTime : this._lastStartTimePosition;
            b("VideoPlayerHTML5Experiments").preventNegativeTimePositions && (this._lastPlayedTime < 0 && (e = 0, this._lastStartTimePosition < 0 && (f = 0)));
            var h = a.lastPauseReason;
            if (d === "finished_playing") e = Math.max(e, c.duration);
            else if (this.preventPauseLoggingInMixin === !0) return;
            else this.preventPauseLoggingInMixin === !1 && (h = h || "unloaded");
            this._logEvent(d, this._amendEventTime({
                video_last_start_time_position: f,
                video_time_position: e,
                debug_reason: h
            }, a));
            this._lastStartTimePosition = g
        },
        onEnded: function() {
            this._logNextPlayingEvent = !0, this._lastStartTimePosition !== g && b("UserAgent").isBrowser("IE") && this.onPause({})
        },
        onBlockedPausedRepresentationEnded: function() {
            this._hasBlockedPausedRepresentationEnded = !0
        },
        logRepresentationEnded: function(a) {
            if (a) {
                a = {
                    representation_id: a.representationID,
                    next_representation_id: a.nextRepresentationID,
                    stream_switch_reason: a.streamSwitchReason
                };
                b("VideoPlayerHTML5Experiments").newStateChangeCalculation && (a = this._getWatchTimeClosingLogData(a));
                this._logEvent("representation_ended", a);
                if (b("VideoPlayerHTML5Experiments").newStateChangeCalculation) {
                    a = this._getVideoCurrentTime();
                    this._lastStartTimePosition = a;
                    this._lastPlayedTime = a
                }
            }
        },
        addWatchTimeData: function(a) {
            this._lastStartTimePosition != g && this._lastPlayedTime != g && (a.video_last_start_time_position = this._lastStartTimePosition, a.video_time_position = this._lastPlayedTime, this._lastStartTimePosition = g);
            return a
        },
        getLastPlayReason: function() {
            return null
        },
        getVideoPlayReason: function() {
            return null
        },
        onPlaying: function(a) {
            if (!this._logNextPlayingEvent) return;
            b("VideoPlayerHTML5Experiments").superficialUnpauseEventsFix && (this._logNextPlayingEvent = !1);
            if (this._ignoreNextPlaying) {
                this._ignoreNextPlaying = !1;
                return
            }
            var c = this.getLastPlayReason();
            this._pendingPlayRequest = !1;
            var d = this._loggedEvents.started_playing ? "unpaused" : "started_playing";
            c = this._amendEventTime({
                debug_reason: c,
                video_play_reason: this.getVideoPlayReason()
            }, a);
            a = this._getVideoCurrentTime();
            if (b("VideoPlayerHTML5Experiments").useCurrentTimeAdjustment) {
                var e = this.getVideoElement().currentTime;
                e = e - a;
                c.time_ms -= Math.round(e * 1e3)
            }
            this._logEvent(d, c);
            this._lastStartTimePosition = a;
            this._lastPlayedTime = a;
            this._currentTimeAtLoadedMetadataCache = null
        },
        allowNextSeekInMixin: function() {
            this._allowNextSeek = !0
        },
        onSeeked: function(a) {
            this._seeking = !1;
            var b = this._seekSourceTimePosition;
            this._seekSourceTimePosition = g;
            var c = this._currentTimeAtSeekStart;
            this._currentTimeAtSeekStart = g;
            if (this.preventSeekLoggingInMixin && !this._allowNextSeek) {
                this._pendingPlayRequest || (this._ignoreNextPlaying = !0);
                return
            }
            this._allowNextSeek = !1;
            this._ignoreNextPlaying = !1;
            var d = {
                video_seek_source_time_position: b,
                video_last_start_time_position: b
            };
            this._fixOvewrittenGetVideoCurrentTime && (d.video_seek_source_time_position = c);
            this.preventSeekLoggingInMixin && (this._lastStartTimePosition !== g ? d.video_last_start_time_position = this._lastStartTimePosition : d.video_last_start_time_position = b);
            b = "scrubbed";
            this._fireSeekEvents && (b = "seeked", d = {
                seek_from_video_time_position: c
            });
            this._logEvent(b, this._amendEventTime(d, a));
            c = this.getVideoElement();
            c.paused ? this._lastStartTimePosition = g : this._lastStartTimePosition = this._getVideoCurrentTime()
        },
        onSeeking: function(a) {
            this._currentTimeAtLoadedMetadataCache = null;
            this._seeking || (this._seekSourceTimePosition = this._getVideoCurrentTime(), this._seeking = !0);
            if (this._fixOverwrittenGetVideoCurrentTime) return;
            this._currentTimeAtSeekStart = g
        },
        onTimeUpdate: function(a) {
            this._currentTimeAtLoadedMetadataCache = null;
            a = this.getVideoElement();
            a.paused || (this._lastPlayedTime = this._getVideoCurrentTime())
        },
        onPlaybackRateChange: function(a) {
            var b = this.getVideoElement();
            b = b.playbackRate;
            this._lastLoggedPlaybackSpeed != null && b !== 0 && b !== this._lastLoggedPlaybackSpeed && this._logEvent("playback_speed_changed", this._amendEventTime({}, a))
        },
        onVolumeChange: function(a) {
            var c = this.getVideoElement(),
                d = {},
                e = null;
            if (b("VideoPlayerHTML5Experiments").useFixedVolumeLogging) {
                var f = c.muted,
                    g = this._muted,
                    h = c.volume,
                    i = this._volume;
                d.current_volume = Math.round(h * 100);
                this._volume = h;
                this._muted = f;
                f = f || h == 0;
                g = g || i == 0;
                if (g && f) return;
                if (g != f) f ? e = "muted" : e = "unmuted";
                else {
                    if (i == h) return;
                    h < i ? e = "volume_decrease" : e = "volume_increase"
                }
            } else c.muted !== this._muted && c.volume === this._volume && c.volume > 0 ? e = c.muted ? "muted" : "unmuted" : (e = c.volume > this._volume ? "volume_increase" : "volume_decrease", d.current_volume = Math.round(c.volume * 100)), this._muted = c.muted, this._volume = c.volume;
            this._logEvent(e, this._amendEventTime(d, a))
        },
        _amendEventTime: function(a, c) {
            var d = this._useEventTime;
            b("VideoPlayerHTML5Experiments").fixEventTimeLogging && (d = d && c);
            if (d) return i(a, c);
            else a.time_ms = Date.now();
            return a
        },
        _getVideoCurrentTime: function() {
            var a;
            this._fixOverwrittenGetVideoCurrentTime ? a = this.getVideoElement().currentTime : a = this._currentTimeAtSeekStart === g ? this.getVideoElement().currentTime : this._currentTimeAtSeekStart;
            a = a.toFixed(2);
            b("VideoPlayerHTML5Experiments").useCurrentTimeAdjustment && (this._currentTimeAtLoadedMetadataCache != null && (a = this._currentTimeAtLoadedMetadataCache.toFixed(2)));
            return b("VideoPlayerHTML5Experiments").fixCurrentTimeType ? +a : a
        },
        _getVideoPlayerShakaConfig: function() {
            return this.getVideoPlayerShakaConfig && typeof this.getVideoPlayerShakaConfig === "function" ? this.getVideoPlayerShakaConfig() : null
        },
        onLoadedMetadata: function(a) {
            this._currentTimeAtLoadedMetadataCache = this.getVideoElement().currentTime
        },
        _overwriteVideoCurrentTimeProperty: function(a) {
            var b = this;
            this._didOverwriteVideoCurrentTimeProperty = !1;
            try {
                var c = Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, "currentTime");
                if (!c) return;
                if (typeof c.get !== "function" || typeof c.set !== "function") return;
                Object.defineProperty && Object.defineProperty(a, "currentTime", {
                    get: function() {
                        return c.get.call(this)
                    },
                    set: function(d) {
                        b._currentTimeAtSeekStart === g && (b._currentTimeAtSeekStart = c.get.call(a)), c.set.call(a, d)
                    },
                    configurable: !0,
                    enumerable: !0
                });
                this._didOverwriteVideoCurrentTimeProperty = !0
            } catch (a) {}
        }
    };
    e.exports = a
}), null);
__d("MediaBufferingDetector", ["Event", "EventEmitter", "SubscriptionsHandler", "VideoPlayerExperiments", "VideoPlayerHTML5Experiments", "VideoPlayerShakaGlobalConfig", "clearInterval", "performanceNow", "setInterval"], (function(a, b, c, d, e, f, g) {
    var h;
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, d) {
            var e;
            e = a.call(this) || this;
            e.$MediaBufferingDetector1 = b;
            e.$MediaBufferingDetector2 = new(c("SubscriptionsHandler"))();
            e.$MediaBufferingDetector1.paused || e.$MediaBufferingDetector8();
            e.$MediaBufferingDetector2.addSubscriptions(c("Event").listen(e.$MediaBufferingDetector1, "playing", function() {
                return e.$MediaBufferingDetector9()
            }), c("Event").listen(e.$MediaBufferingDetector1, "pause", function() {
                return e.$MediaBufferingDetector10()
            }), c("Event").listen(e.$MediaBufferingDetector1, "ended", function() {
                return e.$MediaBufferingDetector11()
            }), c("Event").listen(e.$MediaBufferingDetector1, "timeupdate", function() {
                return e.$MediaBufferingDetector12()
            }));
            e.$MediaBufferingDetector13("drop_buffering_detection_from_html5_api", !1) && e.$MediaBufferingDetector2.addSubscriptions(c("Event").listen(e.$MediaBufferingDetector1, "waiting", function() {
                return e.$MediaBufferingDetector14()
            }));
            return e
        }
        var e = b.prototype;
        e.$MediaBufferingDetector15 = function() {
            var a = (h || (h = c("performanceNow")))(),
                b = this.$MediaBufferingDetector1.currentTime;
            a = a - this.$MediaBufferingDetector5;
            b = b - this.$MediaBufferingDetector6;
            b = b * 1e3;
            b = a - b;
            var d = c("VideoPlayerHTML5Experiments").disableBufferAtEndOfPlayback && this.$MediaBufferingDetector1.currentTime === this.$MediaBufferingDetector1.duration;
            a * .2 < Math.abs(b) && !d ? this.$MediaBufferingDetector16() : this.$MediaBufferingDetector17();
            this.$MediaBufferingDetector18()
        };
        e.$MediaBufferingDetector18 = function() {
            this.$MediaBufferingDetector5 = (h || (h = c("performanceNow")))(), this.$MediaBufferingDetector6 = this.$MediaBufferingDetector1.currentTime
        };
        e.$MediaBufferingDetector8 = function() {
            var a = this;
            if (this.$MediaBufferingDetector4) return;
            this.$MediaBufferingDetector18();
            this.$MediaBufferingDetector4 = c("setInterval")(function() {
                return a.$MediaBufferingDetector15()
            }, 500)
        };
        e.$MediaBufferingDetector19 = function() {
            c("clearInterval")(this.$MediaBufferingDetector4), this.$MediaBufferingDetector4 = null
        };
        e.$MediaBufferingDetector16 = function() {
            if (this.$MediaBufferingDetector3) return;
            this.$MediaBufferingDetector3 = !0;
            this.emit("bufferingStart")
        };
        e.$MediaBufferingDetector17 = function() {
            if (!this.$MediaBufferingDetector3) return;
            this.$MediaBufferingDetector3 = !1;
            this.emit("bufferingEnd")
        };
        e.$MediaBufferingDetector9 = function() {
            this.$MediaBufferingDetector17(), this.$MediaBufferingDetector8()
        };
        e.$MediaBufferingDetector10 = function() {
            this.$MediaBufferingDetector17(), this.$MediaBufferingDetector19()
        };
        e.$MediaBufferingDetector11 = function() {
            this.$MediaBufferingDetector17(), this.$MediaBufferingDetector19()
        };
        e.$MediaBufferingDetector12 = function() {
            this.$MediaBufferingDetector1.paused || (this.$MediaBufferingDetector17(), this.$MediaBufferingDetector19(), this.$MediaBufferingDetector8())
        };
        e.$MediaBufferingDetector14 = function() {
            this.$MediaBufferingDetector19(), this.$MediaBufferingDetector16()
        };
        e.$MediaBufferingDetector13 = function(a, b) {
            return this.$MediaBufferingDetector7 ? this.$MediaBufferingDetector7.getBool(a, b) : d("VideoPlayerShakaGlobalConfig").getBool(a, b)
        };
        e.destroy = function() {
            c("VideoPlayerExperiments").fireBufferingEndEventOnDestroy && this.$MediaBufferingDetector17(), this.$MediaBufferingDetector19(), this.$MediaBufferingDetector2.release()
        };
        return b
    }(c("EventEmitter"));
    g["default"] = a
}), 98);
__d("VideoPlaybackQuality", [], (function(a, b, c, d, e, f) {
    function a(a) {
        if (typeof a.getVideoPlaybackQuality === "function") return a.getVideoPlaybackQuality().droppedVideoFrames;
        a = a.webkitDroppedFrameCount;
        return typeof a === "number" ? a : 0
    }

    function b(a) {
        if (typeof a.getVideoPlaybackQuality === "function") return a.getVideoPlaybackQuality().totalVideoFrames;
        a = a.webkitDecodedFrameCount;
        return typeof a === "number" ? a : 0
    }
    f.getDroppedFrames = a;
    f.getTotalFrames = b
}), 66);
__d("VideoPlayerHTML5ApiCea608State", ["Bootloader", "Deferred", "FBLogger"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            var b = this,
                d = a.onReady,
                e = a.onCaptionsLoaded,
                f = a.captionsDisplay;
            this.$1 = null;
            this.$2 = [];
            this.$3 = null;
            this.$4 = {
                changedCount: 0,
                dequeuedCount: 0,
                erroredCount: 0,
                processedCount: 0,
                processStartedCount: 0,
                queuedCount: 0
            };
            this.source = null;
            this.captionsDisplay = null;
            this.$1 = c("Bootloader").loadModules(["VideoPlayerCea608CaptionsSource"], function(a) {
                a = new a({
                    onCaptionsLoaded: e,
                    onCaptionsChanged: function(a, c) {
                        b.$4.changedCount++, b.captionsDisplay && b.captionsDisplay.handleCaptionsChanged(a, c)
                    }
                });
                b.source = a;
                b.captionsDisplay = f;
                d(b)
            }, "VideoPlayerHTML5ApiCea608State")
        }
        var b = a.prototype;
        b.enqueueBytes = function(a) {
            this.$4.queuedCount++, this.$2.push(a), this.$5()
        };
        b.processQueue = function() {
            this.$5()
        };
        b.getStats = function() {
            return this.$4
        };
        b.getCurrentScreenRepresentation = function() {
            return this.source ? this.source.getCurrentScreenRepresentation() : null
        };
        b.destroy = function() {
            this.$1 && (this.$1.remove(), this.$1 = null), this.captionsDisplay && (this.captionsDisplay.destroy(), this.captionsDisplay = null), this.source && (this.source.destroy(), this.source = null), this.$4 = {
                changedCount: 0,
                dequeuedCount: 0,
                erroredCount: 0,
                processedCount: 0,
                processStartedCount: 0,
                queuedCount: 0
            }
        };
        b.$5 = function() {
            var a = this,
                b = this.source;
            if (!b) return;
            var d = this.$2,
                e = this.$3,
                f = function() {
                    var f = d.shift();
                    if (!e) {
                        var g = new(c("Deferred"))();
                        g.resolve();
                        e = g.getPromise()
                    }
                    a.$4.dequeuedCount++;
                    a.$3 = e = e.then(function() {
                        a.$4.processStartedCount++;
                        return b.processBytes(f).then(function() {
                            a.$4.processedCount++
                        })["catch"](function(b) {
                            a.$4.erroredCount++, c("FBLogger")("video").catching(b).mustfix("[VideoPlayerHTML5ApiCea608State] Caught error from CEA-608 source processBytes")
                        })
                    })
                };
            while (d.length) f()
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("VideoPlayerHTML5ApiWebVttState", ["Bootloader", "unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            var b = this,
                d = a.onReady,
                e = a.onCaptionsLoaded,
                f = a.captionsDisplay;
            this.$1 = null;
            this.source = null;
            this.captionsDisplay = null;
            this.$1 = c("Bootloader").loadModules(["VideoPlayerWebVttCaptionsSource"], function(a) {
                a = new a({
                    onCaptionsLoaded: e,
                    onCaptionsChanged: function(a, c) {
                        b.captionsDisplay && b.captionsDisplay.handleCaptionsChanged(a, c)
                    }
                });
                b.source = a;
                b.captionsDisplay = f;
                d(b)
            }, "VideoPlayerHTML5ApiWebVttState")
        }
        var b = a.prototype;
        b.loadFromUrl = function(a) {
            var b = this.source;
            if (!b) throw c("unrecoverableViolation")("[VideoPlayerHTML5ApiWebVttState] Called loadFromUrl when not ready; call from onReady callback.", "video_captions");
            b.loadFromUrl(a)
        };
        b.getCurrentScreenRepresentation = function() {
            return this.source ? this.source.getCurrentScreenRepresentation() : null
        };
        b.destroy = function() {
            this.$1 && (this.$1.remove(), this.$1 = null), this.captionsDisplay && (this.captionsDisplay.destroy(), this.captionsDisplay = null), this.source && (this.source.destroy(), this.source = null)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("VideoCaptionsTextSize", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        BIGGEST: 200,
        BIGGER: 175,
        BIG: 150,
        MEDIUM: 125,
        DEFAULT: 100,
        SMALL: 75,
        SMALLEST: 50
    });
    f["default"] = a
}), 66);
__d("VideoPlayerHTML5CaptionsDisplayStyle", ["cx", "CSS", "VideoCaptionsBackgroundOpacity", "VideoCaptionsTextSize", "isTruthy"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = {
            Black: "20, 22, 26",
            Blue: "0, 0, 255",
            Green: "0, 255, 0",
            Cyan: "0, 255, 255",
            Red: "255, 0, 0",
            Magenta: "255, 0, 255",
            White: "255, 255, 255",
            Yellow: "255, 255, 0"
        },
        j = {
            DEFAULT_BACKGROUND_COLOR: "Black",
            DEFAULT_BACKGROUND_OPACITY: c("VideoCaptionsBackgroundOpacity").DEFAULT,
            DEFAULT_TEXT_COLOR: "White",
            DEFAULT_TEXT_SIZE: c("VideoCaptionsTextSize").DEFAULT,
            DEFAULT_TEXT_OPACITY: 100
        };
    a = function() {
        function a(a, b, c, d) {
            this.$5 = "center", this.$1 = a, this.$2 = b, this.setBackgroundColor(c.background.color), this.setBackgroundOpacity(c.background.opacity), this.setTextColor(c.text.color), this.setTextSize(c.text.size), this.setTextOpacity(c.text.opacity), this.setTextTypeface(c.text.typeface), this.setTextEdge(c.text.edge), this.setTextAlignment(d), this.updateStyle()
        }
        var b = a.prototype;
        b.setBackgroundColor = function(a) {
            a != null && Object.prototype.hasOwnProperty.call(i, a) ? this.$3 = a : this.$3 = j.DEFAULT_BACKGROUND_COLOR
        };
        b.setBackgroundOpacity = function(a) {
            c("isTruthy")(a) && a >= c("VideoCaptionsBackgroundOpacity").TRANSPARENT && a <= c("VideoCaptionsBackgroundOpacity").OPAQUE ? this.$4 = a : this.$4 = j.DEFAULT_BACKGROUND_OPACITY
        };
        b.setTextColor = function(a) {
            a != null && Object.prototype.hasOwnProperty.call(i, a) ? this.$6 = a : this.$6 = j.DEFAULT_TEXT_COLOR
        };
        b.setTextSize = function(a) {
            a != null && a >= c("VideoCaptionsTextSize").SMALLEST && a <= c("VideoCaptionsTextSize").BIGGEST ? this.$7 = a : this.$7 = j.DEFAULT_TEXT_SIZE
        };
        b.setTextOpacity = function(a) {
            a != null && a >= c("VideoCaptionsBackgroundOpacity").LIGHT && a <= c("VideoCaptionsBackgroundOpacity").OPAQUE ? this.$8 = a : this.$8 = j.DEFAULT_TEXT_OPACITY
        };
        b.setTextTypeface = function(a) {
            this.$9 = a
        };
        b.setTextEdge = function(a) {
            this.$10 = a
        };
        b.setTextAlignment = function(a) {
            this.$5 = (a = a) != null ? a : "center"
        };
        b.updateStyle = function() {
            var a, b = this.$4;
            this.$4 === c("VideoCaptionsBackgroundOpacity").TRANSPARENT && (b = 0);
            b = (a = b) != null ? a : j.DEFAULT_BACKGROUND_OPACITY;
            a = (a = this.$3) != null ? a : j.DEFAULT_BACKGROUND_COLOR;
            b = b / 100;
            b = "rgba(" + i[a] + ", " + b + ")";
            this.$1.style.backgroundColor = b;
            this.$1.style.color = (b = this.$6) != null ? b : j.DEFAULT_TEXT_COLOR;
            b = "0 0 10px rgb(" + i[a] + "), 0 0 5px rgba(" + i[a] + ", .8)";
            this.$1.style.textShadow = b;
            a = this.$7 != null && this.$7 != null ? this.$7 : c("VideoCaptionsTextSize").DEFAULT;
            d("CSS").conditionClass(this.$2, "_5z64", a <= c("VideoCaptionsTextSize").SMALLEST);
            d("CSS").conditionClass(this.$2, "_5z65", a > c("VideoCaptionsTextSize").SMALLEST && a <= c("VideoCaptionsTextSize").SMALL);
            d("CSS").conditionClass(this.$2, "_5z66", a > c("VideoCaptionsTextSize").DEFAULT && a <= c("VideoCaptionsTextSize").MEDIUM);
            d("CSS").conditionClass(this.$2, "_5z67", a > c("VideoCaptionsTextSize").MEDIUM && a <= c("VideoCaptionsTextSize").BIG);
            d("CSS").conditionClass(this.$2, "_5z68", a > c("VideoCaptionsTextSize").BIG && a <= c("VideoCaptionsTextSize").BIGGER);
            d("CSS").conditionClass(this.$2, "_5z69", a > c("VideoCaptionsTextSize").BIGGER);
            d("CSS").conditionClass(this.$2, "_6mk2", this.$5 === "left");
            d("CSS").conditionClass(this.$1, "_6mk2", this.$5 === "left")
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("VideoPlayerHTML5CaptionsDisplay", ["csx", "cx", "CSS", "CaptionSettings", "DOM", "DOMQuery", "VideoPlayerHTML5CaptionsDisplayStyle", "clearTimeout", "setTimeout"], (function(a, b, c, d, e, f, g, h, i) {
    a = function() {
        function a(a) {
            var b, e = a.append,
                f = a.drawer,
                g = a.existingNodesContainer,
                h = a.boundingBox;
            a = a.areCaptionsAutogenerated;
            this.$4 = null;
            this.$5 = null;
            this.$6 = "";
            this.$7 = null;
            this.$8 = null;
            this.$9 = !1;
            this.$10 = null;
            this.$12 = null;
            g = (g = d("DOMQuery").scry(g, "._30vn")[0]) != null ? g : null;
            b = g ? (b = d("DOMQuery").find(g, "._30vo")) != null ? b : null : null;
            g || (g = c("DOM").create("div", {
                className: "_30vn hidden_elem"
            }));
            b || (b = c("DOM").create("span", {
                className: "_30vo hidden_elem"
            }), c("DOM").setContent(g, b));
            this.$1 = a;
            this.$4 = g;
            this.$5 = b;
            this.$12 = e(g);
            this.$7 = f;
            this.$8 = f.addListener("reposition", this.$13.bind(this));
            this.$11 = h;
            this.$14()
        }
        var b = a.prototype;
        b.handleBoundingBoxChanged = function(a) {
            this.$11 = a, this.$14()
        };
        b.handleCaptionsChanged = function(a, b) {
            if (this.$9) return;
            this.$15(a);
            this.$16(b)
        };
        b.setAutogeneratedCaptionsOptions = function(a) {
            this.$2 = a
        };
        b.setCaptionsStyle = function(a) {
            var b = this.$10;
            a = a ? a : d("CaptionSettings").DefaultCaptionSettings;
            if (b) b.setBackgroundColor(a.background.color), b.setBackgroundOpacity(a.background.opacity), b.setTextColor(a.text.color), b.setTextSize(a.text.size), b.setTextOpacity(a.text.opacity), b.setTextTypeface(a.text.typeface), b.setTextEdge(a.text.edge), b.updateStyle();
            else {
                b = this.$5;
                var e = this.$4;
                b && e && (this.$10 = new(c("VideoPlayerHTML5CaptionsDisplayStyle"))(b, e, a, "center"))
            }
        };
        b.showCaptions = function() {
            var a = this,
                b = this.$4;
            b && d("CSS").removeClass(b, "hidden_elem");
            b = this.$7;
            b && (b.reposition(), b.reserve());
            b = this.$2;
            b != null && this.$1 && (this.$17(), c("clearTimeout")(this.$3), this.$3 = c("setTimeout")(function() {
                a.$3 = null, a.$18()
            }, b.duration))
        };
        b.hideCaptions = function() {
            var a = this.$4;
            a && d("CSS").addClass(a, "hidden_elem");
            a = this.$7;
            a && a.release();
            this.$3 && (c("clearTimeout")(this.$3), this.$3 = null)
        };
        b.destroy = function() {
            var a = this.$8;
            a && (a.remove(), this.$8 = null);
            a = this.$7;
            a && (a.release(), a.removeAllListeners(), this.$7 = null);
            a = this.$12;
            a && a();
            this.$4 = null;
            this.$5 = null;
            this.$3 && (c("clearTimeout")(this.$3), this.$3 = null)
        };
        b.$14 = function() {
            var a = this.$11,
                b = this.$4;
            b && (a.width < 350 ? (d("CSS").removeClass(b, "_30vp"), d("CSS").addClass(b, "_30vq")) : a.width < 800 ? (d("CSS").removeClass(b, "_30vp"), d("CSS").removeClass(b, "_30vq")) : (d("CSS").removeClass(b, "_30vq"), d("CSS").addClass(b, "_30vp")))
        };
        b.$18 = function() {
            this.$9 = !1, this.handleCaptionsChanged([], {
                textAlignment: "center"
            })
        };
        b.$17 = function() {
            var a = this.$2;
            a != null && (this.handleCaptionsChanged([a.text], {
                textAlignment: "center"
            }), this.$9 = !0)
        };
        b.$13 = function(a) {
            var b = this.$4;
            b && c("DOM").setAttributes(b, {
                style: "bottom:" + a + "px;"
            })
        };
        b.$16 = function(a) {
            a = a.textAlignment;
            var b = this.$10;
            if (b) b.setTextAlignment(a), b.updateStyle();
            else {
                b = this.$5;
                var e = this.$4;
                b && e && (this.$10 = new(c("VideoPlayerHTML5CaptionsDisplayStyle"))(b, e, d("CaptionSettings").DefaultCaptionSettings, a))
            }
        };
        b.$15 = function(a) {
            a = a.map(function(a) {
                return a.trim()
            }).filter(function(a) {
                return !!a
            }).join("\n").trim();
            var b = this.$6;
            this.$6 = a;
            var e = this.$4,
                f = this.$5,
                g = this.$7;
            if (!e || !f || !g) return;
            this.$14();
            a !== b && c("DOM").setContent(f, a);
            a ? (d("CSS").removeClass(f, "hidden_elem"), g.setHeight(e.offsetHeight)) : (d("CSS").addClass(f, "hidden_elem"), g.setHeight(0))
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("VideoPlayerHTML5TrackNodeManager", ["BlobFactory", "DOM"], (function(a, b, c, d, e, f, g) {
    var h = a.URL || a.webkitURL;
    b = function() {
        function a(a) {
            var b = a.videoEl;
            a = a.parsedSubRipText;
            this.$1 = null;
            this.$2 = null;
            this.$3 = null;
            this.$2 = b;
            this.$3 = a;
            this.$4()
        }
        var b = a.prototype;
        b.$4 = function() {
            if (!h || !c("BlobFactory").isSupported()) return;
            if (this.$3) {
                var a = c("BlobFactory").getBlob([this.$3.renderVTT()], {
                    type: "text/vtt"
                });
                a = h.createObjectURL(a);
                this.$1 = c("DOM").create("track", {
                    kind: "captions",
                    src: a
                });
                c("DOM").appendContent(this.$2, this.$1)
            }
            this.$2 && Array.prototype.forEach.call(this.$2.textTracks, function(a) {
                a.mode = "hidden"
            })
        };
        b.destroy = function() {
            this.$1 && (c("DOM").remove(this.$1), this.$1 = null)
        };
        return a
    }();
    g["default"] = b
}), 98);
__d("VideoPlayerQualitiesArray", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 720,
        h = 2160;

    function a(a) {
        return a
    }

    function i(a) {
        return a.length > 0 ? a[a.length - 1] : void 0
    }

    function j(a) {
        return a.length > 0 ? a[0] : void 0
    }

    function b(a) {
        return a.length > 1
    }

    function k(a, b) {
        a = i(a);
        return a != null && b != null && b === a
    }

    function c(a) {
        return a != null && (a === "HD" || parseInt(a, 10) >= g)
    }

    function d(a) {
        return a != null && parseInt(a, 10) >= h
    }

    function e(a, b) {
        var c = j(a),
            d = i(a);
        if (k(a, b)) {
            if (c != null) return c
        } else if (d != null) return d;
        return void 0
    }
    f.ensureVideoPlayerQualitiesArray = a;
    f.getHighestVideoQuality = i;
    f.getLowestVideoQuality = j;
    f.hasHDVideoQuality = b;
    f.isHDSelectedVideoQuality = k;
    f.isVideoQualityTypicallyConsideredHD = c;
    f.isVideoQualityTypicallyConsideredHD4K = d;
    f.getPreferredVideoQualityForToggleHD = e
}), 66);
__d("getErrorMessageFromMediaErrorCode", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        switch (a) {
            case 1:
                return "The fetching process for the media resource was aborted by the user agent at the users request.";
            case 2:
                return "A network error of some description caused the user agent to stop fetching the media resource, after the resource was established to be usable.";
            case 3:
                return "An error of some description occurred while decoding the media resource, after the resource was established to be usable.";
            case 4:
                return "The media resource indicated by the src attribute was not suitable."
        }
        return null
    }
    f["default"] = a
}), 66);
__d("getErrorNameFromMediaErrorCode", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        switch (a) {
            case 1:
                return "MEDIA_ERR_ABORTED";
            case 2:
                return "MEDIA_ERR_NETWORK";
            case 3:
                return "MEDIA_ERR_DECODE";
            case 4:
                return "MEDIA_ERR_SRC_NOT_SUPPORTED";
            default:
                return "MEDIA_ERR_UNKNOWN_" + ((a = a) != null ? a : "UNDEFINED")
        }
    }
    f["default"] = a
}), 66);
__d("VideoMimeTypes", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        return a + '; codecs="' + b + ", " + c + '"'
    }
    e = "mp4a.40.2";

    function b(a) {
        return "avc1.42E0" + a.toString(16).toUpperCase()
    }

    function c(a) {
        return "avc1.4D40" + a.toString(16).toUpperCase()
    }

    function d(a) {
        return "avc1.6400" + a.toString(16).toUpperCase()
    }
    var g = "video/mp4";
    b = a(g, b(30), e);
    var h = a(g, c(30), e);
    c = a(g, c(31), e);
    var i = a(g, d(50), e);
    a = a(g, d(51), e);
    g = {
        h264baseline: b,
        h264main30avc: h,
        h264main31avc: c,
        h264high50avc: i,
        h264high51avc: a
    };
    f["default"] = g
}), 66);
__d("canVideoPlayType", [], (function(a, b, c, d, e, f) {
    var g = null;

    function a(a) {
        g = g || document.createElement("video");
        return !("canPlayType" in g) ? "" : g.canPlayType(a)
    }
    f["default"] = a
}), 66);
__d("supportsHTML5Video", ["DOM", "memoize"], (function(a, b, c, d, e, f, g) {
    a = c("memoize")(function() {
        return !!c("DOM").create("video").canPlayType
    });
    g["default"] = a
}), 98);
__d("isHTML5VideoImplementationUnavailable", ["VideoMimeTypes", "canVideoPlayType", "supportsHTML5Video"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        if (a) {
            a = c("canVideoPlayType")(c("VideoMimeTypes").h264main30avc);
            return a !== "probably"
        }
        return !c("supportsHTML5Video")()
    }
    g["default"] = a
}), 98);
__d("onCanPlayHTMLMediaElement", ["invariant", "EventListener", "HTMLMediaElementReadyStates", "setImmediate"], (function(a, b, c, d, e, f, g, h) {
    function i(a) {
        return a >= c("HTMLMediaElementReadyStates").HAVE_FUTURE_DATA
    }

    function j(a, b) {
        a instanceof window.HTMLMediaElement || h(0, 4493);
        i(a.readyState) && c("setImmediate")(b);
        return c("EventListener").listen(a, "canplay", b)
    }
    j.once = function(a, b) {
        var c = this,
            d = j(a, function() {
                if (!d) return;
                d.remove();
                d = null;
                for (var a = arguments.length, e = new Array(a), f = 0; f < a; f++) e[f] = arguments[f];
                b.apply(c, e)
            })
    };
    g["default"] = j
}), 98);
__d("onLoadedMetadataHTMLMediaElement", ["EventListener", "HTMLMediaElementReadyStates", "setImmediate"], (function(a, b, c, d, e, f, g) {
    function h(a) {
        return a >= c("HTMLMediaElementReadyStates").HAVE_METADATA
    }

    function i(a, b) {
        h(a.readyState) && c("setImmediate")(b);
        return c("EventListener").listen(a, "loadedmetadata", b)
    }
    i.once = function(a, b) {
        var c = this,
            d = i(a, function() {
                d.remove();
                for (var a = arguments.length, e = new Array(a), f = 0; f < a; f++) e[f] = arguments[f];
                b.apply(c, e)
            })
    };
    g["default"] = i
}), 98);
__d("seekHTMLMediaElementTo", ["EventListener", "onLoadedMetadataHTMLMediaElement", "setImmediate"], (function(a, b, c, d, e, f, g) {
    function a(a, b, d) {
        if (a.currentTime == b) return d && c("setImmediate")(d);
        try {
            a.currentTime = b
        } catch (a) {}
        if (a.currentTime) var e = c("EventListener").listen(a, "seeked", function() {
            e.remove(), d && d()
        });
        else c("onLoadedMetadataHTMLMediaElement")(a, function() {
            a.currentTime = b;
            var e = c("EventListener").listen(a, "seeked", function() {
                e.remove(), d && d()
            })
        })
    }
    g["default"] = a
}), 98);
__d("VideoPlayerHTML5Api", ["cx", "invariant", "AbstractVideoPlayerApi", "Arbiter", "CSS", "DOM", "DOMDimensions", "Deferred", "Event", "EventListener", "FBLogger", "HVideoPlayerMixin", "MediaBufferingDetector", "PlaybackSpeedExperiments", "Promise", "Run", "ShakaConstants", "StaleVideoMonitor", "SubscriptionsHandler", "TimeRanges", "URI", "VideoData", "VideoFrameBuffer", "VideoPlaybackQuality", "VideoPlayerExperiments", "VideoPlayerHTML5ApiCea608State", "VideoPlayerHTML5ApiWebVttState", "VideoPlayerHTML5CaptionsDisplay", "VideoPlayerHTML5Experiments", "VideoPlayerHTML5TrackNodeManager", "VideoPlayerMemLeakExperiments", "VideoPlayerQualitiesArray", "VideoPlayerShakaGlobalConfig", "VideoPlayerUIComponentDrawer", "VideoQualityClasses", "asyncToGeneratorRuntime", "classWithMixins", "cr:1061104", "cr:936794", "dangerouslyOverrideMediaElementEndedProperty", "dispatchEvent", "getErrorMessageFromMediaErrorCode", "getErrorNameFromMediaErrorCode", "getHTMLMediaElementMutedState", "gkx", "isHTML5VideoImplementationUnavailable", "mixin", "onCanPlayHTMLMediaElement", "recoverableViolation", "seekHTMLMediaElementTo", "setTimeout", "unrecoverableViolation"], (function(a, b, c, d, e, f, g, h) {
    var i, j, k = b("VideoPlaybackQuality").getDroppedFrames,
        l = b("VideoPlaybackQuality").getTotalFrames,
        m = b("VideoPlayerQualitiesArray").ensureVideoPlayerQualitiesArray,
        n = b("VideoPlayerQualitiesArray").hasHDVideoQuality,
        o = b("VideoPlayerQualitiesArray").isHDSelectedVideoQuality,
        p = -1,
        q = .05,
        r = 476,
        s = 476;

    function t(a) {
        if (a == null) return null;
        if (Array.isArray(a)) return a.map(function(a) {
            if (typeof a === "string") return a;
            b("recoverableViolation")("The Oz player expects the initial representation ids to be an array of strings.", "blue_video_player");
            return null
        }).filter(Boolean);
        b("recoverableViolation")("The Oz player expects the initial representation ids to be an array of strings.", "blue_video_player");
        return null
    }
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);

        function c(c, d) {
            var e;
            e = a.call(this) || this;
            e.$VideoPlayerHTML5Api1 = null;
            e.$VideoPlayerHTML5Api6 = null;
            e.$VideoPlayerHTML5Api8 = null;
            e.$VideoPlayerHTML5Api12 = null;
            e.$VideoPlayerHTML5Api16 = null;
            e.$VideoPlayerHTML5Api17 = !1;
            e.$VideoPlayerHTML5Api18 = !1;
            e.$VideoPlayerHTML5Api21 = !1;
            e.$VideoPlayerHTML5Api38 = null;
            e.$VideoPlayerHTML5Api46 = !1;
            e.$VideoPlayerHTML5Api51 = null;
            e.$VideoPlayerHTML5Api52 = !1;
            e.$VideoPlayerHTML5Api56 = null;
            e.$VideoPlayerHTML5Api57 = null;
            e.$VideoPlayerHTML5Api58 = null;
            e.$VideoPlayerHTML5Api59 = null;
            e.$VideoPlayerHTML5Api60 = null;
            e.$VideoPlayerHTML5Api61 = null;
            e.$VideoPlayerHTML5Api35 = c;
            e.$VideoPlayerHTML5Api41 = d ? d.shakaConfig : null;
            e.$VideoPlayerHTML5Api15 = e.$VideoPlayerHTML5Api35.id;
            e.preventSeekLoggingInMixin = !0;
            e.$VideoPlayerHTML5Api62("allow_seek_logging_in_mixin", !1) && (e.preventSeekLoggingInMixin = !1);
            c = e.$VideoPlayerHTML5Api63();
            e.$VideoPlayerHTML5Api47 = c.width;
            e.$VideoPlayerHTML5Api14 = c.height;
            if (d) e.$VideoPlayerHTML5Api7 = d;
            else {
                c = e.$VideoPlayerHTML5Api35.getAttribute("data-config");
                if (c == null || c === "") throw b("unrecoverableViolation")("Empty data-config attribute", "blue_video_player");
                try {
                    e.$VideoPlayerHTML5Api7 = JSON.parse(c)
                } catch (a) {
                    throw b("unrecoverableViolation")("Unable to parse data-config attribute as JSON", "blue_video_player", {
                        error: a
                    })
                }
            }
            e.$VideoPlayerHTML5Api42 = new(b("SubscriptionsHandler"))();
            e.$VideoPlayerHTML5Api5 = new(b("MediaBufferingDetector"))(e.$VideoPlayerHTML5Api35, e.$VideoPlayerHTML5Api41);
            b("VideoPlayerMemLeakExperiments").www_videos_memleak_on_tv ? e.$VideoPlayerHTML5Api42.addSubscriptions(e.$VideoPlayerHTML5Api5.addListener("bufferingStart", function() {
                return e.$VideoPlayerHTML5Api64()
            }), e.$VideoPlayerHTML5Api5.addListener("bufferingEnd", function() {
                return e.$VideoPlayerHTML5Api65()
            })) : (e.$VideoPlayerHTML5Api5.addListener("bufferingStart", function() {
                return e.$VideoPlayerHTML5Api64()
            }), e.$VideoPlayerHTML5Api5.addListener("bufferingEnd", function() {
                return e.$VideoPlayerHTML5Api65()
            }));
            e.$VideoPlayerHTML5Api25 = p;
            e.$VideoPlayerHTML5Api27 = b("getHTMLMediaElementMutedState")(e.$VideoPlayerHTML5Api35);
            e.$VideoPlayerHTML5Api45 = e.$VideoPlayerHTML5Api35.volume;
            e.$VideoPlayerHTML5Api26 = !1;
            e.$VideoPlayerHTML5Api23 = null;
            e.$VideoPlayerHTML5Api30 = !1;
            e.$VideoPlayerHTML5Api3 = !1;
            e.$VideoPlayerHTML5Api32 = e.$VideoPlayerHTML5Api35.getAttribute("preload") == "auto";
            e.$VideoPlayerHTML5Api33 = null;
            e.$VideoPlayerHTML5Api37 = new(b("StaleVideoMonitor"))(e.$VideoPlayerHTML5Api35);
            b("VideoPlayerMemLeakExperiments").www_videos_memleak_on_tv ? e.$VideoPlayerHTML5Api42.addSubscriptions(e.$VideoPlayerHTML5Api37.addListener("stale", function(a, b) {
                return e.$VideoPlayerHTML5Api66(a, b)
            })) : e.$VideoPlayerHTML5Api37.addListener("stale", function(a, b) {
                return e.$VideoPlayerHTML5Api66(a, b)
            });
            e.$VideoPlayerHTML5Api11 = !1;
            e.$VideoPlayerHTML5Api40 = !1;
            e.$VideoPlayerHTML5Api7.lazyPreload && (e.$VideoPlayerHTML5Api7.onafterloadRegister ? b("Run").onAfterLoad(function() {
                return e.$VideoPlayerHTML5Api35.setAttribute("preload", e.$VideoPlayerHTML5Api7.lazyPreload)
            }) : e.$VideoPlayerHTML5Api35.setAttribute("preload", e.$VideoPlayerHTML5Api7.lazyPreload));
            e.$VideoPlayerHTML5Api9 = e.$VideoPlayerHTML5Api7.disableNativeControls;
            e.$VideoPlayerHTML5Api53 = e.$VideoPlayerHTML5Api7.subtitlesActive;
            e.$VideoPlayerHTML5Api54 = e.$VideoPlayerHTML5Api7.captionSettings;
            e.$VideoPlayerHTML5Api67();
            e.preventPauseLoggingInMixin = !1;
            e.$VideoPlayerHTML5Api68();
            e.$VideoPlayerHTML5Api16 = e.$VideoPlayerHTML5Api7.customLiveManifestUrlParams;
            e.$VideoPlayerHTML5Api20 = e.$VideoPlayerHTML5Api7.useRateLimited;
            e.$VideoPlayerHTML5Api69(!1);
            d = b("VideoQualityClasses").indexOf("hd");
            e.$VideoPlayerHTML5Api19 = e.$VideoPlayerHTML5Api7.minQuality !== null && b("VideoQualityClasses").indexOf(e.$VideoPlayerHTML5Api7.minQuality) >= d;
            e.$VideoPlayerHTML5Api28 = e.$VideoPlayerHTML5Api7.minQuality;
            e.$VideoPlayerHTML5Api29 = e.$VideoPlayerHTML5Api7.maxQuality;
            e.$VideoPlayerHTML5Api2 = e.$VideoPlayerHTML5Api7.accessToken;
            e.$VideoPlayerHTML5Api38 = e.$VideoPlayerHTML5Api7.startTimestamp;
            e.$VideoPlayerHTML5Api34 = q;
            e.$VideoPlayerHTML5Api4 = !!e.$VideoPlayerHTML5Api7.autoFullscreenHD;
            e.$VideoPlayerHTML5Api31 = null;
            e.$VideoPlayerHTML5Api48 = !1;
            e.$VideoPlayerHTML5Api49 = !1;
            e.$VideoPlayerHTML5Api50 = !!e.$VideoPlayerHTML5Api7.unloadShouldCancelPendingRequest;
            e.$VideoPlayerHTML5Api44 = e.$VideoPlayerHTML5Api41 ? null : null;
            e.$VideoPlayerHTML5Api51 = null;
            return e
        }
        var d = c.prototype;
        d.setup = function() {
            var a;
            this.switchVideo(0);
            this.initLogger(this.$VideoPlayerHTML5Api70.bind(this), this.$VideoPlayerHTML5Api7.useEventTime, this.$VideoPlayerHTML5Api62("overwrite_video_current_time_property", !1), this.$VideoPlayerHTML5Api62("fix_overwritten_get_video_current_time", !1), this.$VideoPlayerHTML5Api62("fire_seek_events", !1), this.$VideoPlayerHTML5Api62("fix_pause_current_time_in_mixin", !1), (a = b("PlaybackSpeedExperiments").enablePlaybackSpeedLogging()) != null ? a : !1)
        };
        d.getAdClientToken = function() {
            this.$VideoPlayerHTML5Api7.ad_client_token
        };
        d.$VideoPlayerHTML5Api66 = function(a, c) {
            this.$VideoPlayerHTML5Api70("stale", {
                stale_detect_time_delta: a,
                stale_video_current_time_delta: c
            });
            if (this.$VideoPlayerHTML5Api7.nudgeStaleVideo && typeof this.$VideoPlayerHTML5Api7.staleVideoNudgeAmountMs === "number") {
                a = this.getCurrentTimePosition();
                this.seek(((c = a) != null ? c : 0) + this.$VideoPlayerHTML5Api7.staleVideoNudgeAmountMs / 1e3)
            }
            b("VideoPlayerExperiments").showStaleOverlayOnVideoNodeStaled && this.emit("videoNodeStaled")
        };
        d.$VideoPlayerHTML5Api64 = function() {
            this.emit("buffering"), this.$VideoPlayerHTML5Api37.notifyBuffering(), this.$VideoPlayerHTML5Api44 && this.$VideoPlayerHTML5Api44.bufferingStart(Date.now())
        };
        d.$VideoPlayerHTML5Api65 = function() {
            this.emit("buffered"), this.$VideoPlayerHTML5Api37.notifyBuffered(), this.$VideoPlayerHTML5Api44 && this.$VideoPlayerHTML5Api44.bufferingEnd(Date.now())
        };
        d.$VideoPlayerHTML5Api71 = function(a) {
            this.emit("bufferingProgress", a)
        };
        d.$VideoPlayerHTML5Api72 = function(a) {
            this.emit("initialLiveManifestRequestFailure", a)
        };
        d.$VideoPlayerHTML5Api73 = function(a) {
            this.emit("replicaSwitch", a)
        };
        d.$VideoPlayerHTML5Api74 = function() {
            this.emit("networkInterrupted")
        };
        d.$VideoPlayerHTML5Api75 = function() {
            this.emit("networkResumed")
        };
        d.$VideoPlayerHTML5Api76 = function() {
            this.emit("streamInterrupted"), this.$VideoPlayerHTML5Api48 = !0, this.$VideoPlayerHTML5Api77()
        };
        d.$VideoPlayerHTML5Api78 = function() {
            this.emit("seekRangeChanged")
        };
        d.$VideoPlayerHTML5Api79 = function() {
            this.emit("streamResumed"), this.$VideoPlayerHTML5Api48 = !1
        };
        d.$VideoPlayerHTML5Api62 = function(a, c) {
            return this.$VideoPlayerHTML5Api41 ? this.$VideoPlayerHTML5Api41.getBool(a, c) : b("VideoPlayerShakaGlobalConfig").getBool(a, c)
        };
        d.getVideoPlayerShakaConfig = function() {
            return this.$VideoPlayerHTML5Api41 || b("VideoPlayerShakaGlobalConfig")
        };
        d.isStreamInterrupted = function() {
            return this.$VideoPlayerHTML5Api48
        };
        d.getVideoID = function() {
            return this.$VideoPlayerHTML5Api8 ? this.$VideoPlayerHTML5Api8.getVideoID() : this.$VideoPlayerHTML5Api7.video_id
        };
        d.getDroppedFrames = function() {
            return k(this.$VideoPlayerHTML5Api35)
        };
        d.getTotalFrames = function() {
            return l(this.$VideoPlayerHTML5Api35)
        };
        d.isDrm = function() {
            return this.$VideoPlayerHTML5Api36 ? this.$VideoPlayerHTML5Api36.isDrm() : !1
        };
        d.getDebug = function() {
            return {
                VideoPlayerHTML5DashPlayer: this.$VideoPlayerHTML5Api36,
                VideoPlayerHTML5ApiCea608StateDebug: this.$VideoPlayerHTML5Api58
            }
        };
        d.getDOMElement = function() {
            return this.$VideoPlayerHTML5Api35
        };
        d.getVideoElement = function() {
            return this.$VideoPlayerHTML5Api35
        };
        d.getSubscriptions = function() {
            return this.$VideoPlayerHTML5Api42
        };
        c.onImplementationReady = function(a, b) {
            b()
        };
        d.destroy = function(a) {
            var c = this;
            a === void 0 && (a = {});
            if (this.$VideoPlayerHTML5Api11) return this.$VideoPlayerHTML5Api12 ? this.$VideoPlayerHTML5Api12 : (i || (i = b("Promise"))).resolve();
            this.$VideoPlayerHTML5Api36 && this.$VideoPlayerHTML5Api36.disableP2PPlayback();
            this.$VideoPlayerHTML5Api11 = !0;
            b("VideoPlayerMemLeakExperiments").clear_handlers_on_destroy && this.$VideoPlayerHTML5Api5.destroy();
            var d = null;
            a.renderStillFrame === !0 ? d = this.abortLoading(a) : (b("VideoPlayerHTML5Experiments").destroyWithoutStillFrame ? d = this.abortLoadingWithoutStillFrame() : d = this.abortLoading(a), this.$VideoPlayerHTML5Api80(), this.$VideoPlayerHTML5Api81 && b("DOM").remove(this.$VideoPlayerHTML5Api81));
            this.$VideoPlayerHTML5Api12 = d.then(function() {
                c.$VideoPlayerHTML5Api12 = null
            }, function() {
                c.$VideoPlayerHTML5Api12 = null
            });
            b("VideoPlayerMemLeakExperiments").clear_handlers_on_destroy && this.$VideoPlayerHTML5Api42.release();
            return this.$VideoPlayerHTML5Api12
        };
        d.getVideoInfo = function() {
            var a = this.$VideoPlayerHTML5Api8;
            if (!a) return null;
            var b = this.$VideoPlayerHTML5Api36,
                c = this.getAvailableVideoQualities();
            return {
                isHD: o(c, this.getSelectedVideoQuality()),
                streamType: a.getStreamType(),
                hasHD: n(c),
                areSubtitlesActive: this.areSubtitlesActive(),
                areSubtitlesAutogenerated: this.areSubtitlesAutogenerated(),
                isMuted: this.isMuted(),
                isPlaying: this.$VideoPlayerHTML5Api18,
                playbackDuration: this.getPlaybackDuration(),
                volume: this.getVolume(),
                resourceUrl: b ? "DASH manifest" : this.$VideoPlayerHTML5Api82(),
                hasSubtitles: this.hasSubtitles(),
                hasUnlimitedSrc: a.hasRateLimit(),
                useUnlimitedSrc: !this.$VideoPlayerHTML5Api20,
                projection: this.getVideoProjection(),
                tagSD: a.getSDTag(),
                tagHD: a.getHDTag(),
                isLiveStream: a.isLiveStream(),
                liveManifestUrl: a.isLiveStream() ? b ? (c = b.getManifestUrl()) != null ? c : null : (b = a.getLiveManifestUrl()) != null ? b : null : null
            }
        };
        c.isImplementationUnavailable = function(a) {
            return b("isHTML5VideoImplementationUnavailable")(a)
        };
        d.pause = function(a) {
            this.$VideoPlayerHTML5Api23 = a;
            if (a === "unloaded" && !this.isPaused()) {
                a = this.$VideoPlayerHTML5Api50 || b("VideoPlayerHTML5Experiments").unloadShouldCancelPendingRequest;
                a && this.$VideoPlayerHTML5Api17 ? this.$VideoPlayerHTML5Api70("cancelled_requested_playing", this.addWatchTimeData({
                    reason: "unloaded"
                })) : this.$VideoPlayerHTML5Api70("paused", this.addWatchTimeData({
                    reason: "unloaded"
                }));
                this.$VideoPlayerHTML5Api49 = !0;
                this.preventPauseLoggingInMixin = !0
            }
            this.$VideoPlayerHTML5Api83();
            this.$VideoPlayerHTML5Api36 ? this.$VideoPlayerHTML5Api36.pause() : this.$VideoPlayerHTML5Api35.pause()
        };
        d.$VideoPlayerHTML5Api69 = function(a) {
            this.$VideoPlayerHTML5Api17 = a
        };
        d.preload = function() {
            this.$VideoPlayerHTML5Api32 || (this.$VideoPlayerHTML5Api1 && this.$VideoPlayerHTML5Api84(), this.$VideoPlayerHTML5Api32 = !0, this.$VideoPlayerHTML5Api35.setAttribute("preload", "auto"))
        };
        d.isPreloading = function() {
            return this.$VideoPlayerHTML5Api32
        };
        d.play = function(a) {
            var c = this;
            this.$VideoPlayerHTML5Api43 || (this.$VideoPlayerHTML5Api43 = a);
            this.$VideoPlayerHTML5Api24 = a;
            if (!this.isPaused()) {
                b("VideoPlayerHTML5Experiments").shouldDispatchPlayingEvent ? (b("dispatchEvent")(this.$VideoPlayerHTML5Api35, "play"), b("setTimeout")(function() {
                    return b("dispatchEvent")(c.$VideoPlayerHTML5Api35, "playing")
                }, 0)) : this.$VideoPlayerHTML5Api85();
                return
            }
            this.$VideoPlayerHTML5Api30 = !0;
            this.$VideoPlayerHTML5Api69(!0);
            if (this.$VideoPlayerHTML5Api1) {
                b("dispatchEvent")(this.$VideoPlayerHTML5Api35, "play");
                this.$VideoPlayerHTML5Api84();
                this.$VideoPlayerHTML5Api3 = !0;
                return
            }
            this.$VideoPlayerHTML5Api86()
        };
        d.$VideoPlayerHTML5Api83 = function() {
            this.$VideoPlayerHTML5Api3 && this.isPaused() && b("dispatchEvent")(this.$VideoPlayerHTML5Api35, "pause"), this.$VideoPlayerHTML5Api69(!1), this.$VideoPlayerHTML5Api87()
        };
        d.$VideoPlayerHTML5Api87 = function() {
            this.$VideoPlayerHTML5Api30 = !1, this.$VideoPlayerHTML5Api3 = !1
        };
        d.$VideoPlayerHTML5Api88 = function() {
            this.$VideoPlayerHTML5Api35.setAttribute("preload", "auto"), this.$VideoPlayerHTML5Api32 = !0, this.$VideoPlayerHTML5Api35.load(), this.$VideoPlayerHTML5Api35.muted = this.$VideoPlayerHTML5Api27
        };
        d.seek = function(a) {
            var c = this.$VideoPlayerHTML5Api62("clear_buffer_on_seek_back", !1),
                d = this.$VideoPlayerHTML5Api41 && b("ShakaConstants").numbers.clear_buffer_on_seek_back_delta;
            this.$VideoPlayerHTML5Api36 && c && typeof d === "number" && this.$VideoPlayerHTML5Api35.currentTime - a >= d && this.$VideoPlayerHTML5Api36.clearBufferAfterSeekingIfLowerQuality(a);
            this.$VideoPlayerHTML5Api44 && this.$VideoPlayerHTML5Api44.seekStart();
            this.allowNextSeekInMixin();
            if (this.$VideoPlayerHTML5Api62("current_time_during_ready_state_zero_throws", !1)) this.$VideoPlayerHTML5Api35.readyState !== 0 && (this.$VideoPlayerHTML5Api35.currentTime = a);
            else try {
                this.$VideoPlayerHTML5Api35.currentTime = a
            } catch (a) {}
            this.$VideoPlayerHTML5Api44 && this.$VideoPlayerHTML5Api44.seekEnd()
        };
        d.removeRotation = function() {
            b("CSS").removeClass(this.$VideoPlayerHTML5Api35, "_56jr"), b("CSS").removeClass(this.$VideoPlayerHTML5Api35, "_56js"), b("CSS").removeClass(this.$VideoPlayerHTML5Api35, "_56jt"), this.$VideoPlayerHTML5Api35.style.marginLeft = "", this.$VideoPlayerHTML5Api35.style.marginTop = "", this.$VideoPlayerHTML5Api35.style.width = "", this.$VideoPlayerHTML5Api35.style.height = ""
        };
        d.applyRotation = function(a) {
            if (!a) return;
            b("CSS").conditionClass(this.$VideoPlayerHTML5Api35, "_56jr", a == 90);
            b("CSS").conditionClass(this.$VideoPlayerHTML5Api35, "_56js", a == 180);
            b("CSS").conditionClass(this.$VideoPlayerHTML5Api35, "_56jt", a == 270);
            if (a == 180) return;
            a = this.$VideoPlayerHTML5Api14;
            var c = this.$VideoPlayerHTML5Api47,
                d = (a - c) / 2,
                e = (c - a) / 2;
            this.$VideoPlayerHTML5Api35.style.marginLeft = e + "px";
            this.$VideoPlayerHTML5Api35.style.marginTop = d + "px";
            this.$VideoPlayerHTML5Api35.style.height = c + "px";
            this.$VideoPlayerHTML5Api35.style.width = a + "px"
        };
        d.$VideoPlayerHTML5Api89 = function(a) {
            this.$VideoPlayerHTML5Api41 && this.$VideoPlayerHTML5Api41.setContext("content_category", a.getContentCategory() || "content_category"), this.$VideoPlayerHTML5Api41 && a.isLowLatency() && this.$VideoPlayerHTML5Api41.setContext("latency_level", "low"), this.$VideoPlayerHTML5Api41 && a.isServableViaFbms() && this.$VideoPlayerHTML5Api41.setContext("servable_via_fmbs", a.isServableViaFbms())
        };
        d.switchVideo = function(a) {
            var c = this;
            if (!this.$VideoPlayerHTML5Api7.videoData || this.$VideoPlayerHTML5Api7.videoData.length <= a) return;
            var d = new(b("VideoData"))(this.$VideoPlayerHTML5Api7.videoData[a]);
            this.$VideoPlayerHTML5Api8 = d;
            a = d.getFairplayCert();
            b("cr:936794") != null && a != null && (this.$VideoPlayerHTML5Api51 = b("cr:936794").newIfSupported(a, this.getVideoElement(), d.getVideoID(), this.$VideoPlayerHTML5Api7.videoLicenseUriMap));
            d.getOverrideConfig() && this.$VideoPlayerHTML5Api41 && this.$VideoPlayerHTML5Api41.setOverrideConfig(d.getOverrideConfig());
            this.$VideoPlayerHTML5Api89(d);
            a = d.isLiveStream() && d.isHls();
            if (!a && (d.hasDashManifest() || d.isLiveStream()) && this.$VideoPlayerHTML5Api7.VideoPlayerHTML5Shaka && this.$VideoPlayerHTML5Api7.VideoPlayerHTML5Shaka.isSupported(d) && !this.$VideoPlayerHTML5Api7.fallbackSources) {
                this.$VideoPlayerHTML5Api5.destroy();
                a = d.getDashManifest();
                var e;
                if (d.isLiveStream()) {
                    e = d.getLiveManifestUrl();
                    var f = this.$VideoPlayerHTML5Api16;
                    if (e != null && f != null) {
                        var g = new(j || (j = b("URI")))(e);
                        f = Object.entries(f);
                        f.forEach(function(a) {
                            var b = a[0];
                            a = a[1];
                            b = b;
                            if (b === "msx") {
                                var c;
                                b = (c = d.getManifestServiceParam()) != null ? c : b
                            }
                            g.addQueryData(b, a)
                        });
                        e = g.toString()
                    }
                }
                f = t(this.$VideoPlayerHTML5Api7.initialRepresentationIds) || d.getDashPrefetchedRepresentationIDs();
                var i = this.$VideoPlayerHTML5Api7.seekHandler,
                    k = i;
                i && (k = function(a) {
                    !c.getCurrentTimePosition() ? c.$VideoPlayerHTML5Api35.currentTime = a : c.$VideoPlayerHTML5Api17 ? c.seek(a) : i(a)
                });
                f = new this.$VideoPlayerHTML5Api7.VideoPlayerHTML5Shaka(this.$VideoPlayerHTML5Api35, f, {
                    accessToken: this.$VideoPlayerHTML5Api2,
                    config: this.$VideoPlayerHTML5Api7.shakaConfig,
                    minPlayQuality: this.$VideoPlayerHTML5Api28,
                    maxPlayQuality: this.$VideoPlayerHTML5Api29,
                    width: this.$VideoPlayerHTML5Api47,
                    height: this.$VideoPlayerHTML5Api14,
                    manifest: a,
                    manifestUrl: e,
                    isLive: d.isLiveStream(),
                    isServableViaFbms: d.isServableViaFbms(),
                    startTimestamp: this.$VideoPlayerHTML5Api38,
                    videoID: this.getVideoID(),
                    playerInstanceKey: this.$VideoPlayerHTML5Api7.playerInstanceKey,
                    disableStreaming: this.$VideoPlayerHTML5Api7.disableStreaming,
                    playerOrigin: this.$VideoPlayerHTML5Api7.playerOrigin,
                    playerSuborigin: this.$VideoPlayerHTML5Api7.playerSuborigin,
                    resolutionConstraintMaxHeight: this.$VideoPlayerHTML5Api7.resolutionConstraintMaxHeight,
                    resolutionConstraintMaxWidth: this.$VideoPlayerHTML5Api7.resolutionConstraintMaxWidth,
                    isSpherical: this.$VideoPlayerHTML5Api7.isSpherical,
                    getSource: this.$VideoPlayerHTML5Api7.getSource,
                    vpcPlayingStateEmitter: this.$VideoPlayerHTML5Api7.vpcPlayingStateEmitter,
                    seekHandler: k,
                    streamPriorityAdjuster: this.$VideoPlayerHTML5Api7.streamPriorityAdjuster,
                    videoLiveTrace: this.$VideoPlayerHTML5Api7.videoLiveTrace ? this.$VideoPlayerHTML5Api7.videoLiveTrace : null,
                    videoLicenseUriMap: this.$VideoPlayerHTML5Api7.videoLicenseUriMap ? this.$VideoPlayerHTML5Api7.videoLicenseUriMap : {},
                    prefetchCache: d.getPrefetchCache(),
                    graphApiVideoLicenseUri: this.$VideoPlayerHTML5Api7.graphApiVideoLicenseUri,
                    widevineCert: d.getWidevineCert(),
                    OzDrmHelper: this.$VideoPlayerHTML5Api7.OzDrmHelper,
                    videoWatchTimeTracker: this.$VideoPlayerHTML5Api44,
                    desiredLatencyMs: d.getDesiredLatencyMs(),
                    latencyToleranceMs: d.getLatencyToleranceMs(),
                    disableAbr: this.$VideoPlayerHTML5Api7.isSpherical === !0 && this.$VideoPlayerHTML5Api62("disable_360_abr", !1),
                    p2pModuleLoader: this.$VideoPlayerHTML5Api7.p2pModuleLoader,
                    p2pSettings: d.getP2PSettings(),
                    disableLogging: this.$VideoPlayerHTML5Api7.disableLogging
                });
                b("VideoPlayerMemLeakExperiments").www_videos_memleak_on_tv ? this.$VideoPlayerHTML5Api42.addSubscriptions(f.addListener("seekRangeChanged", function() {
                    return c.$VideoPlayerHTML5Api78()
                }), f.addListener("bufferingStart", function() {
                    return c.$VideoPlayerHTML5Api64()
                }), f.addListener("bufferingEnd", function() {
                    return c.$VideoPlayerHTML5Api65()
                }), f.addListener("bufferingProgress", this.$VideoPlayerHTML5Api71.bind(this)), f.addListener("tracksChanged", function() {
                    return c.emit("qualityChange")
                }), f.addListener("streamInterrupted", function() {
                    return c.$VideoPlayerHTML5Api76()
                }), f.addListener("streamResumed", function() {
                    return c.$VideoPlayerHTML5Api79()
                }), f.addListener("initialLiveManifestRequestFailure", this.$VideoPlayerHTML5Api72.bind(this)), f.addListener("replicaSwitch", this.$VideoPlayerHTML5Api73.bind(this)), f.addListener("networkInterrupted", function() {
                    return c.$VideoPlayerHTML5Api74()
                }), f.addListener("networkResumed", function() {
                    return c.$VideoPlayerHTML5Api75()
                }), f.addListener("adaptation", function(a) {
                    a = a.reason;
                    b("VideoPlayerHTML5Experiments").dropQualityChange || c.$VideoPlayerHTML5Api70("quality_change", {
                        reason: a
                    });
                    c.emit("qualityChange")
                }), f.addListener("representation_ended", function(a) {
                    c.logRepresentationEnded(a)
                }), f.addListener("blocked_paused_representation_ended", function() {
                    c.onBlockedPausedRepresentationEnded()
                }), f.addListener("debug/dashPlayerEvent", function(a) {
                    return c.emit("debug/dashPlayerEvent", a)
                }), f.addListener("error", function(a) {
                    return c.$VideoPlayerHTML5Api90(a)
                }), f.addListener("cea608AvailabilityChanged", function() {
                    var a = c.$VideoPlayerHTML5Api36;
                    a && a.areInbandCaptionsExpected() ? c.$VideoPlayerHTML5Api53 = !0 : (c.$VideoPlayerHTML5Api53 = !1, c.$VideoPlayerHTML5Api77());
                    c.$VideoPlayerHTML5Api91();
                    c.emit("captionsAvailabilityChanged")
                }), f.addListener("cea608CaptionsBytesReceived", function(a) {
                    var d = a.timescale;
                    a = a.videoBytes;
                    d != null && !isNaN(d) || h(0, 18732);
                    a != null || h(0, 18733);
                    d = {
                        timescale: d,
                        videoBytes: a
                    };
                    a = c.$VideoPlayerHTML5Api57;
                    a || (a = c.$VideoPlayerHTML5Api92());
                    a.enqueueBytes(d);
                    if (b("cr:1061104")) {
                        a = c.$VideoPlayerHTML5Api58;
                        a || (a = new(b("cr:1061104"))(), c.$VideoPlayerHTML5Api58 = a);
                        a.recordBytes(d)
                    }
                }), f.addListener("p2pPluginReady", function() {
                    c.p2pPluginReady()
                })) : (f.addListener("seekRangeChanged", function() {
                    return c.$VideoPlayerHTML5Api78()
                }), f.addListener("bufferingStart", function() {
                    return c.$VideoPlayerHTML5Api64()
                }), f.addListener("bufferingEnd", function() {
                    return c.$VideoPlayerHTML5Api65()
                }), f.addListener("bufferingProgress", this.$VideoPlayerHTML5Api71.bind(this)), f.addListener("tracksChanged", function() {
                    return c.emit("qualityChange")
                }), f.addListener("streamInterrupted", function() {
                    return c.$VideoPlayerHTML5Api76()
                }), f.addListener("streamResumed", function() {
                    return c.$VideoPlayerHTML5Api79()
                }), f.addListener("initialLiveManifestRequestFailure", this.$VideoPlayerHTML5Api72.bind(this)), f.addListener("replicaSwitch", this.$VideoPlayerHTML5Api73.bind(this)), f.addListener("networkInterrupted", function() {
                    return c.$VideoPlayerHTML5Api74()
                }), f.addListener("networkResumed", function() {
                    return c.$VideoPlayerHTML5Api75()
                }), f.addListener("adaptation", function(a) {
                    a = a.reason;
                    b("VideoPlayerHTML5Experiments").dropQualityChange || c.$VideoPlayerHTML5Api70("quality_change", {
                        reason: a
                    });
                    c.emit("qualityChange")
                }), f.addListener("representation_ended", function(a) {
                    c.logRepresentationEnded(a)
                }), f.addListener("blocked_paused_representation_ended", function() {
                    c.onBlockedPausedRepresentationEnded()
                }), f.addListener("debug/dashPlayerEvent", function(a) {
                    return c.emit("debug/dashPlayerEvent", a)
                }), f.addListener("error", function(a) {
                    return c.$VideoPlayerHTML5Api90(a)
                }), f.addListener("cea608AvailabilityChanged", function() {
                    var a = c.$VideoPlayerHTML5Api36;
                    a && a.areInbandCaptionsExpected() ? c.$VideoPlayerHTML5Api53 = !0 : (c.$VideoPlayerHTML5Api53 = !1, c.$VideoPlayerHTML5Api77());
                    c.$VideoPlayerHTML5Api91();
                    c.emit("captionsAvailabilityChanged")
                }), f.addListener("cea608CaptionsBytesReceived", function(a) {
                    var d = a.timescale;
                    a = a.videoBytes;
                    d != null && !isNaN(d) || h(0, 18732);
                    a != null || h(0, 18733);
                    d = {
                        timescale: d,
                        videoBytes: a
                    };
                    a = c.$VideoPlayerHTML5Api57;
                    a || (a = c.$VideoPlayerHTML5Api92());
                    a.enqueueBytes(d);
                    if (b("cr:1061104")) {
                        a = c.$VideoPlayerHTML5Api58;
                        a || (a = new(b("cr:1061104"))(), c.$VideoPlayerHTML5Api58 = a);
                        a.recordBytes(d)
                    }
                }), f.addListener("p2pPluginReady", function() {
                    c.p2pPluginReady()
                }));
                f.setup();
                this.$VideoPlayerHTML5Api36 = f
            } else {
                a = this.$VideoPlayerHTML5Api82();
                typeof a === "string" && a !== "" && (this.$VideoPlayerHTML5Api35.src = a);
                this.$VideoPlayerHTML5Api38 != null && this.$VideoPlayerHTML5Api38 !== 0 && this.seek(this.$VideoPlayerHTML5Api38)
            }
            this.$VideoPlayerHTML5Api77();
            this.hasSubtitles() && d.hasSubtitles() && this.$VideoPlayerHTML5Api93(d.getSubtitlesSrc());
            this.removeRotation();
            this.applyRotation(d.getRotation())
        };
        d.switchToStreamType = function(a) {};
        d.replaceVideoDataFromURL = function(a) {};
        d.getDashAudioConfiguration = function() {
            return this.$VideoPlayerHTML5Api36 ? this.$VideoPlayerHTML5Api36.getDashAudioConfiguration() : "none"
        };
        d.getAudioStreamInfoIDDebug = function() {
            if (this.$VideoPlayerHTML5Api36) {
                var a = this.$VideoPlayerHTML5Api36.getDebug();
                if (a.VideoSource) {
                    a = a.VideoSource.getAudioTracks();
                    for (a of a)
                        if (a.active) return a.streamInfoID
                }
            }
            return null
        };
        d.getVideoTracksDebug = function() {
            if (this.$VideoPlayerHTML5Api36) {
                var a = this.$VideoPlayerHTML5Api36.getDebug();
                if (a.VideoSource) return a.VideoSource.getVideoTracks()
            }
            return null
        };
        d.getCurrentlyPlayingVideoStreamInfoID = function() {
            var a = this.getCurrentTimePosition();
            if (this.$VideoPlayerHTML5Api36) return a != null ? this.$VideoPlayerHTML5Api36.getVideoStreamInfoIDForTimePosition(a) : null;
            else if (!this.$VideoPlayerHTML5Api8) return null;
            else return this.$VideoPlayerHTML5Api19 ? this.$VideoPlayerHTML5Api8.getHDTag() : this.$VideoPlayerHTML5Api8.getSDTag()
        };
        d.getCurrentlyPlayingAudioStreamInfoID = function() {
            var a = this.getCurrentTimePosition();
            return this.$VideoPlayerHTML5Api36 && a != null ? this.$VideoPlayerHTML5Api36.getAudioStreamInfoIDForTimePosition(a) : null
        };
        d.getLocalEstimator = function() {
            return this.$VideoPlayerHTML5Api36 ? this.$VideoPlayerHTML5Api36.getLocalEstimator() : null
        };
        d.unmute = function() {
            if (this.$VideoPlayerHTML5Api1) {
                this.$VideoPlayerHTML5Api1.mutedState = !1;
                this.$VideoPlayerHTML5Api27 = !1;
                this.emit("unmuteVideo");
                return
            }
            this.$VideoPlayerHTML5Api35.muted = !1
        };
        d.mute = function() {
            if (this.$VideoPlayerHTML5Api1) {
                this.$VideoPlayerHTML5Api1.mutedState = !0;
                this.$VideoPlayerHTML5Api27 = !0;
                this.emit("muteVideo");
                return
            }
            this.$VideoPlayerHTML5Api35.muted = !0
        };
        d.setRotation = function(a) {
            this.removeRotation(), this.applyRotation(a)
        };
        d.setDimensions = function(a, b) {
            var c;
            this.removeRotation();
            this.$VideoPlayerHTML5Api47 = a;
            this.$VideoPlayerHTML5Api14 = b;
            this.$VideoPlayerHTML5Api8 && this.applyRotation(this.$VideoPlayerHTML5Api8.getRotation());
            this.$VideoPlayerHTML5Api39 && this.$VideoPlayerHTML5Api39.updateDimensions(a, b);
            this.$VideoPlayerHTML5Api36 && this.$VideoPlayerHTML5Api36.setDimensions(a, b);
            c = (c = this.$VideoPlayerHTML5Api59) != null ? c : this.$VideoPlayerHTML5Api61;
            if (c) {
                var d = this.$VideoPlayerHTML5Api94();
                c.handleBoundingBoxChanged(d)
            }
            this.emit("dimensionsChange", a, b)
        };
        d.setVideoStreamOffset = function(a) {
            this.$VideoPlayerHTML5Api36 && this.$VideoPlayerHTML5Api36.setVideoStreamOffset(a)
        };
        d.$VideoPlayerHTML5Api95 = function() {
            this.$VideoPlayerHTML5Api35.controls = !this.$VideoPlayerHTML5Api9
        };
        d.$VideoPlayerHTML5Api67 = function() {
            this.$VideoPlayerHTML5Api35.controls = this.$VideoPlayerHTML5Api35.controls && !this.$VideoPlayerHTML5Api9
        };
        d.$VideoPlayerHTML5Api68 = function() {
            this.$VideoPlayerHTML5Api13 = b("EventListener").listen(this.$VideoPlayerHTML5Api35, "error", this.$VideoPlayerHTML5Api96.bind(this)), b("VideoPlayerMemLeakExperiments").clear_html5_error_handler || this.$VideoPlayerHTML5Api42.addSubscriptions(this.$VideoPlayerHTML5Api13), this.$VideoPlayerHTML5Api42.addSubscriptions(b("EventListener").listen(this.$VideoPlayerHTML5Api35, "playing", this.$VideoPlayerHTML5Api97.bind(this)), b("EventListener").listen(this.$VideoPlayerHTML5Api35, "play", this.$VideoPlayerHTML5Api85.bind(this)), b("EventListener").listen(this.$VideoPlayerHTML5Api35, "ended", this.$VideoPlayerHTML5Api98.bind(this)), b("EventListener").listen(this.$VideoPlayerHTML5Api35, "waiting", this.$VideoPlayerHTML5Api99.bind(this)), b("EventListener").listen(this.$VideoPlayerHTML5Api35, "pause", this.$VideoPlayerHTML5Api100.bind(this)), b("EventListener").listen(this.$VideoPlayerHTML5Api35, "volumechange", this.$VideoPlayerHTML5Api101.bind(this)), b("EventListener").listen(this.$VideoPlayerHTML5Api35, "mousedown", this.$VideoPlayerHTML5Api102.bind(this)), b("EventListener").listen(this.$VideoPlayerHTML5Api35, "mouseup", this.$VideoPlayerHTML5Api103.bind(this)), b("EventListener").listen(this.$VideoPlayerHTML5Api35, "timeupdate", this.$VideoPlayerHTML5Api104.bind(this)), b("EventListener").listen(this.$VideoPlayerHTML5Api35, "click", this.$VideoPlayerHTML5Api105.bind(this)), b("EventListener").listen(this.$VideoPlayerHTML5Api35, "loadedmetadata", this.$VideoPlayerHTML5Api106.bind(this)), b("EventListener").listen(this.$VideoPlayerHTML5Api35, "progress", this.$VideoPlayerHTML5Api107.bind(this)), b("EventListener").listen(this.$VideoPlayerHTML5Api35, "seeked", this.$VideoPlayerHTML5Api108.bind(this)), b("EventListener").capture(this.$VideoPlayerHTML5Api35.parentNode, "pause", this.$VideoPlayerHTML5Api109.bind(this)))
        };
        d.$VideoPlayerHTML5Api110 = function(a) {
            this.preventPauseLoggingInMixin = !1, a.preventDefault(), a.stopPropagation()
        };
        d.$VideoPlayerHTML5Api109 = function(a) {
            if (a.target !== this.$VideoPlayerHTML5Api35) return;
            this.$VideoPlayerHTML5Api35.ended || (this.$VideoPlayerHTML5Api49 && this.$VideoPlayerHTML5Api110(a), a.lastPauseReason = this.$VideoPlayerHTML5Api23);
            this.$VideoPlayerHTML5Api49 = !1;
            this.$VideoPlayerHTML5Api44 && this.$VideoPlayerHTML5Api44.pause()
        };
        d.$VideoPlayerHTML5Api107 = function() {
            var a = this.$VideoPlayerHTML5Api35.buffered,
                b = 0,
                c = 0,
                d = a.length;
            while (d-- > 0) {
                var e = a.end(d),
                    f = a.start(d);
                if (f <= this.$VideoPlayerHTML5Api35.currentTime) {
                    c = f;
                    b = e - f;
                    break
                }
            }
            this.$VideoPlayerHTML5Api111("flash/updateBuffer", {
                duration: b,
                offset: c
            })
        };
        d.$VideoPlayerHTML5Api104 = function() {
            var a, b;
            this.$VideoPlayerHTML5Api1 ? b = this.$VideoPlayerHTML5Api1.currentTime : b = this.$VideoPlayerHTML5Api35.currentTime;
            a = (a = (a = this.$VideoPlayerHTML5Api56) == null ? void 0 : a.source) != null ? a : (a = this.$VideoPlayerHTML5Api57) == null ? void 0 : a.source;
            a && a.handleTimeUpdate(b);
            this.$VideoPlayerHTML5Api111("flash/updateStatus", {
                position: +b.toFixed(3)
            })
        };
        d.$VideoPlayerHTML5Api105 = function(a) {
            if (a.button !== 0) return;
            this.emit("clickVideo");
            a.preventDefault()
        };
        d.isPaused = function() {
            return b("VideoPlayerHTML5Experiments").fixIE11EndedPausedState ? this.$VideoPlayerHTML5Api35.paused || this.$VideoPlayerHTML5Api35.ended : this.$VideoPlayerHTML5Api35.paused
        };
        d.$VideoPlayerHTML5Api112 = function() {
            var a = this.$VideoPlayerHTML5Api35.buffered;
            return a.length > 0 && a.start(0) === 0 && a.end(0) === this.$VideoPlayerHTML5Api35.duration
        };
        d.$VideoPlayerHTML5Api99 = function() {
            if (this.$VideoPlayerHTML5Api62("drop_buffering_detection_from_html5_api", !1)) return;
            this.$VideoPlayerHTML5Api112() || (this.$VideoPlayerHTML5Api46 = !0, this.$VideoPlayerHTML5Api111("flash/buffering"))
        };
        d.setVolume = function(a) {
            this.$VideoPlayerHTML5Api35.volume = a
        };
        d.$VideoPlayerHTML5Api101 = function() {
            this.$VideoPlayerHTML5Api35.muted !== this.$VideoPlayerHTML5Api27 && this.$VideoPlayerHTML5Api35.volume === this.$VideoPlayerHTML5Api45 && this.$VideoPlayerHTML5Api35.volume > 0 ? (this.$VideoPlayerHTML5Api27 = this.$VideoPlayerHTML5Api35.muted, this.$VideoPlayerHTML5Api45 = this.$VideoPlayerHTML5Api35.volume, !this.$VideoPlayerHTML5Api35.muted ? this.$VideoPlayerHTML5Api111("flash/unmuteVideo") : this.$VideoPlayerHTML5Api111("flash/muteVideo")) : (this.$VideoPlayerHTML5Api27 = this.$VideoPlayerHTML5Api35.muted, this.$VideoPlayerHTML5Api45 = this.$VideoPlayerHTML5Api35.volume, this.$VideoPlayerHTML5Api111("flash/changeVolume", {
                volume: this.$VideoPlayerHTML5Api35.volume
            })), this.$VideoPlayerHTML5Api35.muted || this.$VideoPlayerHTML5Api111("flash/turnOffAutoplay", {
                reason: "unmuted"
            })
        };
        d.$VideoPlayerHTML5Api102 = function(a) {
            a.button === 0 && (this.$VideoPlayerHTML5Api26 = !0)
        };
        d.$VideoPlayerHTML5Api103 = function(a) {
            a.button === 0 && (this.$VideoPlayerHTML5Api26 = !1)
        };
        d.$VideoPlayerHTML5Api97 = function() {
            this.$VideoPlayerHTML5Api69(!1), this.$VideoPlayerHTML5Api46 && (this.$VideoPlayerHTML5Api46 = !1, this.$VideoPlayerHTML5Api111("flash/buffered")), this.$VideoPlayerHTML5Api44 && this.$VideoPlayerHTML5Api44.playing()
        };
        d.$VideoPlayerHTML5Api85 = function() {
            this.$VideoPlayerHTML5Api18 = !0, this.$VideoPlayerHTML5Api95(), this.$VideoPlayerHTML5Api91(), this.$VideoPlayerHTML5Api111("flash/beginPlayback", {
                position: +this.$VideoPlayerHTML5Api35.currentTime.toFixed(2),
                reason: this.$VideoPlayerHTML5Api24
            })
        };
        d.$VideoPlayerHTML5Api100 = function(a) {
            var c = this.$VideoPlayerHTML5Api62("abort_loading_decisioning_logic", !1);
            if (this.$VideoPlayerHTML5Api35.ended || c && b("dangerouslyOverrideMediaElementEndedProperty").isEnded(a)) {
                this.$VideoPlayerHTML5Api18 = !1;
                this.$VideoPlayerHTML5Api69(!1);
                return
            }
            if (this.$VideoPlayerHTML5Api35.seeking && this.$VideoPlayerHTML5Api23 === "seek_initiated") return;
            if (!this.$VideoPlayerHTML5Api62("ignore_left_button_when_pausing", !0) && this.$VideoPlayerHTML5Api26) return;
            if (this.$VideoPlayerHTML5Api23 === "seek_initiated" || this.$VideoPlayerHTML5Api23 === "hive_reload") {
                this.$VideoPlayerHTML5Api23 = null;
                return
            }(this.$VideoPlayerHTML5Api23 === null || this.$VideoPlayerHTML5Api23 === "user_initiated") && this.$VideoPlayerHTML5Api111("flash/turnOffAutoplay", {
                reason: "manually_paused"
            });
            this.$VideoPlayerHTML5Api23 = null;
            this.$VideoPlayerHTML5Api18 = !1;
            this.$VideoPlayerHTML5Api69(!1);
            this.$VideoPlayerHTML5Api67();
            this.$VideoPlayerHTML5Api111("flash/pausePlayback", {
                position: this.$VideoPlayerHTML5Api35.currentTime.toFixed(2)
            })
        };
        d.$VideoPlayerHTML5Api98 = function() {
            var a;
            if (this.$VideoPlayerHTML5Api1) return;
            this.$VideoPlayerHTML5Api67();
            this.$VideoPlayerHTML5Api18 = !1;
            this.$VideoPlayerHTML5Api69(!1);
            this.$VideoPlayerHTML5Api111("flash/finishPlayback");
            a = (a = this.$VideoPlayerHTML5Api59) != null ? a : this.$VideoPlayerHTML5Api61;
            a && a.hideCaptions()
        };
        d.$VideoPlayerHTML5Api108 = function() {
            this.emit("seekEnd", {
                position: +this.$VideoPlayerHTML5Api35.currentTime.toFixed(3)
            })
        };
        d.getEstimatedBandwidth = function() {
            return this.$VideoPlayerHTML5Api36 && this.$VideoPlayerHTML5Api7.VideoPlayerHTML5Shaka ? this.$VideoPlayerHTML5Api7.VideoPlayerHTML5Shaka.getEstimatedBandwidth() : null
        };
        d.$VideoPlayerHTML5Api106 = function() {
            this.$VideoPlayerHTML5Api111("flash/updateMetadata")
        };
        d.$VideoPlayerHTML5Api90 = function(a) {
            this.emit("error", babelHelpers["extends"]({}, a, {
                isPlayback: this.$VideoPlayerHTML5Api30
            }))
        };
        d.$VideoPlayerHTML5Api96 = function() {
            if (this.$VideoPlayerHTML5Api1) return;
            if (!this.$VideoPlayerHTML5Api35.error) return;
            var a = this.$VideoPlayerHTML5Api35.error,
                c = a.message;
            (c == null || c === "") && (c = b("getErrorMessageFromMediaErrorCode")(a.code));
            this.emit("error", {
                error: b("getErrorNameFromMediaErrorCode")(a.code),
                isPlayback: this.$VideoPlayerHTML5Api30,
                message: c
            })
        };
        d.$VideoPlayerHTML5Api70 = function(a, b) {
            b = babelHelpers["extends"]({
                event: a
            }, b);
            a === "started_playing" && this.$VideoPlayerHTML5Api36 && (b.longest_init_response_time = this.$VideoPlayerHTML5Api36.getLongestInitResponseTime());
            b.projection = this.getVideoProjection();
            this.$VideoPlayerHTML5Api111("flash/logEvent", {
                logData: b
            })
        };
        d.$VideoPlayerHTML5Api111 = function(a, c) {
            b("Arbiter").inform(a, babelHelpers["extends"]({
                divID: this.$VideoPlayerHTML5Api15
            }, c)), this.emit(a.substr("flash/".length), c)
        };
        d.getLastPlayReason = function() {
            return this.$VideoPlayerHTML5Api24
        };
        d.getVideoPlayReason = function() {
            return this.$VideoPlayerHTML5Api43
        };
        d.isMuted = function() {
            return this.$VideoPlayerHTML5Api27
        };
        d.setPlaybackRate = function(a) {
            this.$VideoPlayerHTML5Api36 ? this.$VideoPlayerHTML5Api36.setPlaybackRate(a) : this.$VideoPlayerHTML5Api35.playbackRate = a
        };
        d.getPlaybackRate = function() {
            if (this.$VideoPlayerHTML5Api36) return this.$VideoPlayerHTML5Api36.getPlaybackRate();
            else return this.$VideoPlayerHTML5Api35.playbackRate
        };
        d.getPlaybackDuration = function() {
            return this.$VideoPlayerHTML5Api1 ? this.$VideoPlayerHTML5Api1.playbackDuration : this.$VideoPlayerHTML5Api35.duration || 0
        };
        d.getVolume = function() {
            return this.$VideoPlayerHTML5Api35.volume
        };
        d.getCurrentTimePosition = function() {
            return this.$VideoPlayerHTML5Api35.currentTime
        };
        d.getBufferEndPosition = function() {
            var a = this.$VideoPlayerHTML5Api35.buffered;
            if (a && a.length > 0) {
                var b = a.length - 1;
                return a.end(b)
            }
            return null
        };
        d.$VideoPlayerHTML5Api82 = function() {
            if (this.$VideoPlayerHTML5Api7.fallbackSources) return this.$VideoPlayerHTML5Api19 && this.$VideoPlayerHTML5Api7.fallbackSources.HD ? this.$VideoPlayerHTML5Api7.fallbackSources.HD : this.$VideoPlayerHTML5Api7.fallbackSources.SD;
            var a = this.$VideoPlayerHTML5Api8;
            if (a)
                if (this.$VideoPlayerHTML5Api19 && a.hasHD()) return this.$VideoPlayerHTML5Api113();
                else return this.$VideoPlayerHTML5Api114();
            return null
        };
        d.$VideoPlayerHTML5Api113 = function() {
            var a = this.$VideoPlayerHTML5Api8;
            if (a)
                if (this.$VideoPlayerHTML5Api20) {
                    var b;
                    return (b = a.getPlayableSrcRateLimitedHD()) != null ? b : null
                } else {
                    return (b = a.getPlayableSrcHD()) != null ? b : null
                }
            return null
        };
        d.$VideoPlayerHTML5Api114 = function() {
            var a = this.$VideoPlayerHTML5Api8;
            if (a)
                if (this.$VideoPlayerHTML5Api20) {
                    var b;
                    return (b = a.getPlayableSrcRateLimitedSD()) != null ? b : null
                } else {
                    return (b = a.getPlayableSrcSD()) != null ? b : null
                }
            return null
        };
        d.toggleSubtitles = function() {
            this.$VideoPlayerHTML5Api53 = !this.$VideoPlayerHTML5Api53, this.$VideoPlayerHTML5Api91(), this.emit("toggleSubtitles")
        };
        d.$VideoPlayerHTML5Api115 = function() {
            return !1
        };
        d.hasSubtitles = function() {
            var a = this.$VideoPlayerHTML5Api8,
                b = this.$VideoPlayerHTML5Api36;
            if (this.$VideoPlayerHTML5Api115()) return !1;
            a = a ? a.hasSubtitles() : !1;
            if (a) return a;
            else if (b) return b.areInbandCaptionsExpected();
            else return !1
        };
        d.areSubtitlesActive = function() {
            return this.$VideoPlayerHTML5Api53
        };
        d.areSubtitlesAutogenerated = function() {
            return this.$VideoPlayerHTML5Api36 ? this.$VideoPlayerHTML5Api36.areInbandCaptionsAutogenerated() : !1
        };
        d.areHLSActive = function() {
            return !1
        };
        d.setAutogeneratedCaptionsOptions = function(a) {
            this.$VideoPlayerHTML5Api55 = a;
            a = (a = this.$VideoPlayerHTML5Api59) != null ? a : this.$VideoPlayerHTML5Api61;
            a && a.setAutogeneratedCaptionsOptions(this.$VideoPlayerHTML5Api55)
        };
        d.setSubtitlesStyle = function(a) {
            this.$VideoPlayerHTML5Api54 = a;
            a = (a = this.$VideoPlayerHTML5Api59) != null ? a : this.$VideoPlayerHTML5Api61;
            a && a.setCaptionsStyle(this.$VideoPlayerHTML5Api54)
        };
        d.$VideoPlayerHTML5Api91 = function() {
            var a = this.$VideoPlayerHTML5Api36;
            a && a.areInbandCaptionsExpected() && (this.$VideoPlayerHTML5Api115() ? a.setEnableInbandCaptionsParsing(!1) : a.setEnableInbandCaptionsParsing(this.$VideoPlayerHTML5Api54.enabled));
            a = (a = this.$VideoPlayerHTML5Api59) != null ? a : this.$VideoPlayerHTML5Api61;
            a && (this.$VideoPlayerHTML5Api53 ? a.showCaptions() : a.hideCaptions())
        };
        d.$VideoPlayerHTML5Api116 = function() {
            var a;
            a = (a = (a = this.$VideoPlayerHTML5Api56) == null ? void 0 : a.source) != null ? a : (a = this.$VideoPlayerHTML5Api57) == null ? void 0 : a.source;
            a && a.handleTimeUpdate(this.$VideoPlayerHTML5Api35.currentTime);
            this.$VideoPlayerHTML5Api18 && this.$VideoPlayerHTML5Api91();
            this.emit("loadedSubtitles")
        };
        d.$VideoPlayerHTML5Api117 = function() {
            var a = this,
                c = this.$VideoPlayerHTML5Api7.subtitleDrawer;
            if (!c || !(c instanceof b("VideoPlayerUIComponentDrawer"))) return null;
            c = new(b("VideoPlayerHTML5CaptionsDisplay"))({
                append: function(c) {
                    if (!a.$VideoPlayerHTML5Api35.parentNode) {
                        b("FBLogger")("video").info("Missing video player parent element to append the captions display");
                        return function() {}
                    }
                    b("DOM").insertAfter(a.$VideoPlayerHTML5Api35, c);
                    return function() {
                        b("DOM").remove(c)
                    }
                },
                areCaptionsAutogenerated: this.areSubtitlesAutogenerated(),
                drawer: c,
                existingNodesContainer: this.$VideoPlayerHTML5Api35.parentNode,
                boundingBox: this.$VideoPlayerHTML5Api94()
            });
            c.setCaptionsStyle(this.$VideoPlayerHTML5Api54);
            c.setAutogeneratedCaptionsOptions(this.$VideoPlayerHTML5Api55);
            return c
        };
        d.$VideoPlayerHTML5Api94 = function() {
            var a = this.$VideoPlayerHTML5Api35.getBoundingClientRect();
            return {
                width: a.width,
                height: a.height
            }
        };
        d.$VideoPlayerHTML5Api93 = function(a) {
            var c = this;
            this.$VideoPlayerHTML5Api77();
            this.$VideoPlayerHTML5Api59 = this.$VideoPlayerHTML5Api117();
            this.$VideoPlayerHTML5Api56 = new(b("VideoPlayerHTML5ApiWebVttState"))({
                onReady: function(b) {
                    c.$VideoPlayerHTML5Api60 && (c.$VideoPlayerHTML5Api60.destroy(), c.$VideoPlayerHTML5Api60 = null), b.loadFromUrl(a)
                },
                onCaptionsLoaded: function(a) {
                    c.$VideoPlayerHTML5Api116(), c.$VideoPlayerHTML5Api60 = new(b("VideoPlayerHTML5TrackNodeManager"))({
                        videoEl: c.$VideoPlayerHTML5Api35,
                        parsedSubRipText: a
                    })
                },
                captionsDisplay: this.$VideoPlayerHTML5Api59
            });
            return this.$VideoPlayerHTML5Api56
        };
        d.$VideoPlayerHTML5Api92 = function() {
            var a = this;
            this.$VideoPlayerHTML5Api77();
            this.$VideoPlayerHTML5Api61 = this.$VideoPlayerHTML5Api117();
            this.$VideoPlayerHTML5Api57 = new(b("VideoPlayerHTML5ApiCea608State"))({
                onReady: function(a) {
                    a.processQueue()
                },
                onCaptionsLoaded: function() {
                    a.$VideoPlayerHTML5Api116()
                },
                captionsDisplay: this.$VideoPlayerHTML5Api61
            });
            return this.$VideoPlayerHTML5Api57
        };
        d.$VideoPlayerHTML5Api77 = function() {
            this.$VideoPlayerHTML5Api57 && (this.$VideoPlayerHTML5Api57.destroy(), this.$VideoPlayerHTML5Api57 = null);
            var a = this.$VideoPlayerHTML5Api58;
            a && (b("cr:1061104") && (b("gkx")("1063360") && a.download()), this.$VideoPlayerHTML5Api58 = null);
            this.$VideoPlayerHTML5Api56 && (this.$VideoPlayerHTML5Api56.destroy(), this.$VideoPlayerHTML5Api56 = null);
            this.$VideoPlayerHTML5Api60 && (this.$VideoPlayerHTML5Api60.destroy(), this.$VideoPlayerHTML5Api60 = null)
        };
        d.setStillFrameEnabled = function(a) {
            this.$VideoPlayerHTML5Api40 = !a
        };
        d.$VideoPlayerHTML5Api63 = function() {
            if (this.$VideoPlayerHTML5Api62("use_dimensions_fallbacks", !0)) {
                var a = b("DOMDimensions").getElementDimensions(this.$VideoPlayerHTML5Api35);
                if (a.width !== 0 && a.height !== 0) return a;
                else {
                    a = this.$VideoPlayerHTML5Api35.getAttribute("data-video-width");
                    var c = this.$VideoPlayerHTML5Api35.getAttribute("data-video-height");
                    return {
                        width: Number(a) || this.$VideoPlayerHTML5Api35.width || r,
                        height: Number(c) || this.$VideoPlayerHTML5Api35.height || s
                    }
                }
            } else return b("DOMDimensions").getElementDimensions(this.$VideoPlayerHTML5Api35)
        };
        d.getDimensionsForDevice = function() {
            var a = window.devicePixelRatio || 1,
                b = this.$VideoPlayerHTML5Api63();
            return {
                width: b.width * a,
                height: b.height * a
            }
        };
        d.$VideoPlayerHTML5Api118 = function() {
            if (this.$VideoPlayerHTML5Api40) return;
            if (!this.$VideoPlayerHTML5Api39) {
                var a = this.$VideoPlayerHTML5Api63();
                a = b("DOM").create("canvas", {
                    width: a.width,
                    height: a.height,
                    className: "_3t5i"
                });
                b("DOM").insertAfter(this.$VideoPlayerHTML5Api35, a);
                this.$VideoPlayerHTML5Api39 = a = new(b("VideoFrameBuffer"))(a, this.$VideoPlayerHTML5Api35)
            } else a = this.$VideoPlayerHTML5Api39;
            b("CSS").show(a.getDOMNode());
            a.updateFrameBuffer();
            b("CSS").hide(this.$VideoPlayerHTML5Api35)
        };
        d.$VideoPlayerHTML5Api80 = function() {
            if (!this.$VideoPlayerHTML5Api39) return;
            b("CSS").hide(this.$VideoPlayerHTML5Api39.getDOMNode());
            b("CSS").show(this.$VideoPlayerHTML5Api35)
        };
        d.$VideoPlayerHTML5Api84 = function(a) {
            var c = this;
            a === void 0 && (a = null);
            var d = this.$VideoPlayerHTML5Api1;
            if (!d) return (i || (i = b("Promise"))).resolve();
            if (this.$VideoPlayerHTML5Api21) return this.$VideoPlayerHTML5Api22 || (i || (i = b("Promise"))).resolve();
            var e = [];
            this.$VideoPlayerHTML5Api21 = !0;
            this.emit("restoringAfterAbort");
            this.allowNextSeekInMixin();
            var f = a == null ? d.currentTime : a;
            if (this.$VideoPlayerHTML5Api36) {
                a = function() {
                    return c.$VideoPlayerHTML5Api36 && c.$VideoPlayerHTML5Api36.reload(f) || (i || (i = b("Promise"))).resolve()
                };
                a = this.$VideoPlayerHTML5Api10 ? this.$VideoPlayerHTML5Api10.then(a) : a();
                e.push(a)
            } else {
                a = (a = this.$VideoPlayerHTML5Api82()) != null ? a : "";
                a !== "" && (this.$VideoPlayerHTML5Api35.src = a);
                this.$VideoPlayerHTML5Api35.preload = d.preload
            }
            var g = new(b("Deferred"))();
            e.push(g.getPromise());
            var h = function() {
                var a = c.$VideoPlayerHTML5Api86();
                c.$VideoPlayerHTML5Api62("create_restore_abort_loading_promise", !1) ? g.resolve(a) : g.resolve()
            };
            b("seekHTMLMediaElementTo")(this.$VideoPlayerHTML5Api35, f, function() {
                c.$VideoPlayerHTML5Api80(), c.$VideoPlayerHTML5Api1 && (c.$VideoPlayerHTML5Api35.muted = c.$VideoPlayerHTML5Api1.mutedState, c.$VideoPlayerHTML5Api1 = null, c.emit("restoredAfterAbort")), c.$VideoPlayerHTML5Api21 = !1, c.$VideoPlayerHTML5Api22 = null, b("onCanPlayHTMLMediaElement").once(c.$VideoPlayerHTML5Api35, h)
            });
            this.$VideoPlayerHTML5Api22 = (i || (i = b("Promise"))).all(e).then(function() {});
            return this.$VideoPlayerHTML5Api22
        };
        d.abortLoadingWithoutStillFrame = function() {
            var a = this;
            if (this.$VideoPlayerHTML5Api1) return this.$VideoPlayerHTML5Api10 ? this.$VideoPlayerHTML5Api10 : (i || (i = b("Promise"))).resolve();
            var c = this.$VideoPlayerHTML5Api35.currentTime,
                d = this.isMuted(),
                e = this.$VideoPlayerHTML5Api35.duration,
                f = this.isPaused(),
                g = this.$VideoPlayerHTML5Api35.preload;
            this.$VideoPlayerHTML5Api32 = !1;
            this.$VideoPlayerHTML5Api1 = {
                mutedState: d,
                currentTime: c,
                playbackDuration: e,
                preload: g
            };
            f && this.$VideoPlayerHTML5Api18 && b("dispatchEvent")(this.$VideoPlayerHTML5Api35, "pause");
            this.emit("abortedLoading");
            this.$VideoPlayerHTML5Api77();
            if (this.$VideoPlayerHTML5Api36) {
                this.$VideoPlayerHTML5Api10 = this.$VideoPlayerHTML5Api36.unload().then(function() {
                    a.$VideoPlayerHTML5Api10 = null
                })["catch"](function() {
                    a.$VideoPlayerHTML5Api10 = null
                });
                return this.$VideoPlayerHTML5Api10
            }
            this.$VideoPlayerHTML5Api35.preload = "none";
            this.$VideoPlayerHTML5Api35.removeAttribute("src");
            this.$VideoPlayerHTML5Api35.load();
            return (i || (i = b("Promise"))).resolve()
        };
        d.abortLoading = function(a) {
            a === void 0 && (a = {});
            if (this.$VideoPlayerHTML5Api1) return this.$VideoPlayerHTML5Api10 ? this.$VideoPlayerHTML5Api10 : (i || (i = b("Promise"))).resolve();
            a.disableStillFrame !== !0 && this.$VideoPlayerHTML5Api118();
            return this.abortLoadingWithoutStillFrame()
        };
        d.setPreferredVideoQuality = function(a) {
            var c = this;
            this.$VideoPlayerHTML5Api31 = a;
            if (!this.$VideoPlayerHTML5Api8) return;
            if (this.$VideoPlayerHTML5Api36) {
                this.$VideoPlayerHTML5Api36.setPreferredVideoQuality(a);
                return
            }
            b("VideoPlayerHTML5Experiments").newStateChangeCalculation || (this.$VideoPlayerHTML5Api70("paused", this.addWatchTimeData({
                reason: "toggle_hd"
            })), this.$VideoPlayerHTML5Api70("requested_playing", {
                reason: "user_initiated"
            }));
            this.$VideoPlayerHTML5Api19 = !this.$VideoPlayerHTML5Api19;
            var d = this.$VideoPlayerHTML5Api35.currentTime,
                e = this.$VideoPlayerHTML5Api35.muted,
                f = this.$VideoPlayerHTML5Api35.volume;
            a = (a = this.$VideoPlayerHTML5Api82()) != null ? a : "";
            a !== "" && (this.$VideoPlayerHTML5Api35.src = a);
            b("onCanPlayHTMLMediaElement").once(this.$VideoPlayerHTML5Api35, function() {
                c.$VideoPlayerHTML5Api35.currentTime = d, c.$VideoPlayerHTML5Api35.muted = e, c.$VideoPlayerHTML5Api35.volume = f, c.$VideoPlayerHTML5Api86(), c.emit("qualityChange")
            });
            this.$VideoPlayerHTML5Api30 = !0;
            this.$VideoPlayerHTML5Api69(!0);
            this.$VideoPlayerHTML5Api88()
        };
        d.unsetPreferredVideoQuality = function() {
            this.$VideoPlayerHTML5Api31 = null, this.$VideoPlayerHTML5Api36 && this.$VideoPlayerHTML5Api36.unsetPreferredVideoQuality()
        };
        d.getPreferredVideoQuality = function() {
            return this.$VideoPlayerHTML5Api31
        };
        d.getSelectedVideoQuality = function() {
            return this.$VideoPlayerHTML5Api36 ? this.$VideoPlayerHTML5Api36.getSelectedVideoQuality() : this.$VideoPlayerHTML5Api19 ? "HD" : "SD"
        };
        d.getAvailableVideoQualities = function() {
            if (this.$VideoPlayerHTML5Api7.fallbackSources) return m(this.$VideoPlayerHTML5Api7.fallbackSources.HD ? ["SD", "HD"] : ["SD"]);
            if (!this.$VideoPlayerHTML5Api8) return m([]);
            return this.$VideoPlayerHTML5Api36 ? this.$VideoPlayerHTML5Api36.getAvailableVideoQualities() : m(this.$VideoPlayerHTML5Api8.hasHD() ? ["SD", "HD"] : ["SD"])
        };
        d.getIsAbrEnabled = function() {
            return this.$VideoPlayerHTML5Api36 ? this.$VideoPlayerHTML5Api36.getIsAbrEnabled() : !1
        };
        d.canAutoSelectVideoQuality = function() {
            return this.$VideoPlayerHTML5Api36 ? this.$VideoPlayerHTML5Api36.canAutoSelectVideoQuality() : !1
        };
        d.setPreloadDisabled = function(a) {
            this.$VideoPlayerHTML5Api36 && this.$VideoPlayerHTML5Api36.setPreloadDisabled(a)
        };
        d.restoreStreamBufferSize = function() {
            this.$VideoPlayerHTML5Api36 && this.$VideoPlayerHTML5Api36.restoreStreamBufferSize()
        };
        c.getPlayerVersion = function() {
            return "pleasantville"
        };
        d.getUpdatedPlayerVersion = function() {
            return this.$VideoPlayerHTML5Api36 ? this.$VideoPlayerHTML5Api36.getPlayerVersion() || c.getPlayerVersion() : c.getPlayerVersion()
        };
        d.getVideoNodeSource = function() {
            return this.$VideoPlayerHTML5Api35.src || ""
        };
        d.getVideoProjection = function() {
            if (this.$VideoPlayerHTML5Api33) return this.$VideoPlayerHTML5Api33;
            var a = this.$VideoPlayerHTML5Api36;
            if (a) {
                this.$VideoPlayerHTML5Api33 = (a = a.getVideoProjection()) != null ? a : null;
                if (this.$VideoPlayerHTML5Api33) return this.$VideoPlayerHTML5Api33
            }
            a = this.$VideoPlayerHTML5Api8;
            if (a) {
                this.$VideoPlayerHTML5Api33 = (a = a.getProjection()) != null ? a : null
            }
            return this.$VideoPlayerHTML5Api33
        };
        d.$VideoPlayerHTML5Api119 = function() {
            var a = this.getCurrentTimePosition();
            a != null && (this.$VideoPlayerHTML5Api6 = a)
        };
        d.$VideoPlayerHTML5Api120 = function() {
            this.$VideoPlayerHTML5Api6 != null && this.$VideoPlayerHTML5Api6 !== 0 ? (this.$VideoPlayerHTML5Api34 = this.$VideoPlayerHTML5Api6, this.$VideoPlayerHTML5Api6 = null) : this.$VideoPlayerHTML5Api34 = q
        };
        d.reloadDashManifest = function() {
            var a = this.$VideoPlayerHTML5Api36;
            if (a) {
                this.$VideoPlayerHTML5Api119();
                this.abortLoading();
                return this.$VideoPlayerHTML5Api121(function() {
                    return a.refreshDashManifest()
                }, this.$VideoPlayerHTML5Api34)
            }
            return (i || (i = b("Promise"))).reject()
        };
        d.$VideoPlayerHTML5Api121 = function(a, b) {
            var c = this;
            return a().then(function() {
                c.$VideoPlayerHTML5Api84(b), c.$VideoPlayerHTML5Api120()
            })
        };
        d.switchReplicaSet = function(a, b) {
            var c = this,
                d = this.$VideoPlayerHTML5Api36,
                e = {
                    failover_response_code: b.status,
                    original_url: "",
                    replica: a
                },
                f = "";
            if (d) {
                f = d.getManifestUrl() || f;
                e.original_url = f;
                this.$VideoPlayerHTML5Api70("replica_switch", {
                    error_code: b.status,
                    error_user_info: {
                        failover_response_code: b.status,
                        url: b.url || "",
                        replica: a
                    }
                });
                try {
                    this.abortLoading(), d.switchReplicaSet(a)
                } catch (a) {
                    this.$VideoPlayerHTML5Api70("replica_switch_failed", {
                        reason: a.toString(),
                        error_user_info: e
                    });
                    return
                }
                this.$VideoPlayerHTML5Api84().then(function() {
                    c.$VideoPlayerHTML5Api70("replica_switch_success", {
                        error_code: b.status,
                        error_user_info: e
                    })
                })["catch"](function(a) {
                    c.$VideoPlayerHTML5Api70("replica_switch_failed", {
                        reason: a.toString(),
                        error_user_info: e
                    })
                })
            }
        };
        d.p2pPluginReady = function() {
            var a = this;
            this.$VideoPlayerHTML5Api70("live_p2p_playback_reloading", {});
            var b = function(b) {
                a.$VideoPlayerHTML5Api21 = !1, a.$VideoPlayerHTML5Api1 = null, a.$VideoPlayerHTML5Api70("live_p2p_playback_plugin_failed", {
                    reason: b.toString()
                }), a.$VideoPlayerHTML5Api36 && a.$VideoPlayerHTML5Api36.disableP2PPlayback(), a.abortLoading(), a.$VideoPlayerHTML5Api84().then(function() {
                    a.$VideoPlayerHTML5Api36 && (a.$VideoPlayerHTML5Api30 || a.$VideoPlayerHTML5Api18) && a.$VideoPlayerHTML5Api36.play()
                })["catch"](a.$VideoPlayerHTML5Api96.bind(a))
            };
            try {
                this.$VideoPlayerHTML5Api23 = "hive_reload";
                this.abortLoading();
                var c = function() {
                    a.$VideoPlayerHTML5Api36 && (a.$VideoPlayerHTML5Api30 || a.$VideoPlayerHTML5Api18) && a.$VideoPlayerHTML5Api36.play(), a.$VideoPlayerHTML5Api70("live_p2p_playback_plugin_loaded", {})
                };
                this.$VideoPlayerHTML5Api84().then(c)["catch"](b)
            } catch (a) {
                b(a)
            }
        };
        d.$VideoPlayerHTML5Api86 = function() {
            var a = this,
                c = (i || (i = b("Promise"))).resolve();
            if (this.$VideoPlayerHTML5Api30) {
                if (this.$VideoPlayerHTML5Api3) var d = b("EventListener").capture(this.$VideoPlayerHTML5Api35.parentNode, "play", function(a) {
                    b("Event").kill(a), d.remove()
                });
                this.$VideoPlayerHTML5Api35.ended && !this.$VideoPlayerHTML5Api35.paused && b("dispatchEvent")(this.$VideoPlayerHTML5Api35, "play");
                if (this.$VideoPlayerHTML5Api36) {
                    var e = this.$VideoPlayerHTML5Api36;
                    c = e.play()
                } else b("VideoPlayerHTML5Experiments").preloadOnPlay && (this.$VideoPlayerHTML5Api35.preload = "auto"), c = this.$VideoPlayerHTML5Api35.play();
                c && c["catch"] && c["catch"](function(c) {
                    if (c != null && c.name === "NotAllowedError") a.$VideoPlayerHTML5Api70("cancelled_requested_playing", {
                        reason: "not_allowed"
                    }), a.$VideoPlayerHTML5Api111("flash/playbackNotAllowed");
                    else if (!(c != null && c.name === "AbortError")) {
                        var d;
                        c = new Error("Unexpected .play() promise rejection: " + (c != null ? ((d = c.name) != null ? d : "(no name)") + ": " + ((d = c.message) != null ? d : "(no message)") : "(unknown)"));
                        b("FBLogger")("video").catching(c).info(c.message)
                    }
                    a.$VideoPlayerHTML5Api69(!1)
                })
            }
            this.$VideoPlayerHTML5Api87();
            return c
        };
        d.setEnableLiveheadCatchup = function(a) {
            this.$VideoPlayerHTML5Api36 && this.$VideoPlayerHTML5Api36.setEnableLiveheadCatchup(a)
        };
        d.setIsLiveRewindActive = function(a) {
            this.$VideoPlayerHTML5Api52 = a, b("PlaybackSpeedExperiments").enableWwwPlaybackSpeedControl() && !a && this.setPlaybackRate(1), this.setEnableLiveheadCatchup(!a)
        };
        d.isFBWasLive = function() {
            return !!(this.$VideoPlayerHTML5Api36 && this.$VideoPlayerHTML5Api36.isFBWasLive())
        };
        d.isFBIsLiveTemplated = function() {
            return !!(this.$VideoPlayerHTML5Api36 && this.$VideoPlayerHTML5Api36.isFBIsLiveTemplated())
        };
        d.getFbManifestIdentifier = function() {
            return this.$VideoPlayerHTML5Api36 ? this.$VideoPlayerHTML5Api36.getFbManifestIdentifier() : ""
        };
        d.isFBMS = function() {
            return !!(this.$VideoPlayerHTML5Api36 && this.$VideoPlayerHTML5Api36.isFBMS())
        };
        d.ispDASH = function() {
            return !!(this.$VideoPlayerHTML5Api36 && this.$VideoPlayerHTML5Api36.ispDASH())
        };
        d.isLiveheadCatchupEnabled = function() {
            return this.$VideoPlayerHTML5Api36 ? this.$VideoPlayerHTML5Api36.isLiveheadCatchupEnabled() : !1
        };
        d.getBandwidthEstimate = function() {
            return this.$VideoPlayerHTML5Api36 ? this.$VideoPlayerHTML5Api36.getBandwidthEstimate() : null
        };
        d.getSeekableRanges = function() {
            if (this.$VideoPlayerHTML5Api36) return this.$VideoPlayerHTML5Api36.getSeekableRanges();
            var a = [];
            if (this.$VideoPlayerHTML5Api35) {
                var c = this.$VideoPlayerHTML5Api35.seekable;
                for (var d = 0; d < c.length; ++d) a.push({
                    startTime: c.start(d),
                    endTime: c.end(d)
                })
            }
            a.length === 0 && a.push({
                startTime: 0,
                endTime: 0
            });
            return new(b("TimeRanges"))(a)
        };
        d.isDashPerfLoggingEnabled = function() {
            return this.$VideoPlayerHTML5Api36 ? this.$VideoPlayerHTML5Api36.isDashPerfLoggingEnabled() : null
        };
        d.$VideoPlayerHTML5Api122 = function() {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                var a = 3;
                while (!this.$VideoPlayerHTML5Api11 && this.$VideoPlayerHTML5Api36) {
                    if (this.$VideoPlayerHTML5Api35.buffered.length > 0) {
                        var c = this.$VideoPlayerHTML5Api35.buffered.start(0),
                            d = this.$VideoPlayerHTML5Api35.buffered.end(0);
                        d = Math.round(d - c) >= a;
                        if (d && this.$VideoPlayerHTML5Api36) return this.$VideoPlayerHTML5Api36.play()
                    }
                    yield new(i || (i = b("Promise")))(function(a) {
                        return b("setTimeout")(a, 100)
                    })
                }
            });

            function c() {
                return a.apply(this, arguments)
            }
            return c
        }();
        c.getStartMutedFromConfig = function(a) {
            return a.muted
        };
        c.getStreamTypeFromConfig = function(a) {
            a = new(b("VideoData"))(a.videoData[0]);
            return a.getStreamType()
        };
        c.getIsServableViaFbmsFromConfig = function(a) {
            a = new(b("VideoData"))(a.videoData[0]);
            return a.isServableViaFbms()
        };
        c.getIsPlayingLiveFromConfig = function(a) {
            a = new(b("VideoData"))(a.videoData[0]);
            return a.isLiveStream()
        };
        c.getIsGamingFromConfig = function(a) {
            a = new(b("VideoData"))(a.videoData[0]);
            return a.isGaming()
        };
        c.getIsFacecastAudioFromConfig = function(a) {
            a = new(b("VideoData"))(a.videoData[0]);
            return a.isFacecastAudio()
        };
        c.getIsSpherical = function(a) {
            a = new(b("VideoData"))(a.videoData[0]);
            return a.isSpherical()
        };
        c.getIsLiveTraceEnabledOnPlayer = function(a) {
            a = new(b("VideoData"))(a.videoData[0]);
            return a.isLiveTraceEnabledOnPlayer()
        };
        return c
    }(b("classWithMixins")(b("AbstractVideoPlayerApi"), b("mixin")(b("HVideoPlayerMixin"))));
    a.networkTimeout = 5e3;
    e.exports = a
}), null);
__d("CVCv3DisabledPlayerOrigins", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        BEEPER: "beeper",
        FB_STORIES: "fb_stories"
    });
    f["default"] = a
}), 66);
__d("CVCv3DisabledPlayerSubOrigins", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        LIVE_BEEPER: "live_beeper"
    });
    f["default"] = a
}), 66);
__d("CvcV3HttpEventFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1856513");
    b = d("FalcoLoggerInternal").create("cvc_v3_http_event", a);
    e = b;
    g["default"] = e
}), 98);
__d("CVCv3SubscriptionHelper", ["CvcV3HttpEventFalcoEvent", "DateConsts", "guid"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b, d) {
            this.$1 = a;
            this.$2 = c("guid")();
            this.$3 = ((a = b) != null ? a : "null") + "::" + ((b = d) != null ? b : "null");
            this.$4 = null;
            this.$5 = null
        }
        var b = a.prototype;
        b.isValidSubscription = function() {
            return !!this.$1
        };
        b.makeCVCv3StateUpdate = function(a, b, c, e) {
            var f = null;
            a != null && !Number.isNaN(a) && b != null && !Number.isNaN(b) && (f = {
                m: e,
                pf: Math.floor((b - a) * d("DateConsts").MS_PER_SEC),
                s: c,
                sa: Math.floor(a * d("DateConsts").MS_PER_SEC)
            });
            e = {
                pps: this.$4,
                ps: f,
                si: this.$2,
                so: this.$3,
                vi: this.$1
            };
            this.$4 = f;
            return e
        };
        b.makeUnifiedVideoCVCUpdate = function(a, b, c, d, e) {
            a = this.makeCVCv3StateUpdate(a, b, c, d);
            this.$5 != null && (a.tk = this.$5);
            return babelHelpers["extends"]({}, a, e)
        };
        b.processUnifiedResponse = function(a) {
            a = a;
            this.$5 = a.tk;
            return a
        };
        b.clearAnyPreviousContext = function() {
            this.$4 = null
        };
        b.logHttpRequestSuccess = function(a) {
            var b = this;
            c("CvcV3HttpEventFalcoEvent").log(function() {
                return {
                    name: "http_request_success",
                    duration_ms: a != null ? a.toString() : null,
                    countable_id: b.$1
                }
            })
        };
        b.logHttpRequestFailure = function(a, b) {
            var d = this;
            c("CvcV3HttpEventFalcoEvent").log(function() {
                return {
                    name: "http_request_failed",
                    error_msg: a,
                    duration_ms: b != null ? b.toString() : null,
                    countable_id: d.$1
                }
            })
        };
        b.logHttpRequestTimeout = function(a) {
            var b = this;
            c("CvcV3HttpEventFalcoEvent").log(function() {
                return {
                    name: "http_request_timeout",
                    duration_ms: a != null ? a.toString() : null,
                    countable_id: b.$1
                }
            })
        };
        b.logHttpResponseBad = function(a, b) {
            var d = this;
            c("CvcV3HttpEventFalcoEvent").log(function() {
                return {
                    name: "http_response_bad",
                    error_msg: a,
                    duration_ms: b != null ? b.toString() : null,
                    countable_id: d.$1
                }
            })
        };
        b.logDebugInfo = function(a) {
            var b = this;
            c("CvcV3HttpEventFalcoEvent").log(function() {
                return {
                    name: a,
                    countable_id: b.$1
                }
            })
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("XVideoUnifiedCVCController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/video/unified_cvc/", {})
}), null);
__d("CVCv3VideoControllerHelper", ["AsyncRequest", "CVCv3DisabledPlayerOrigins", "CVCv3DisabledPlayerSubOrigins", "CVCv3SubscriptionHelper", "DateConsts", "Run", "SubscriptionsHandler", "XVideoUnifiedCVCController", "clearTimeout", "gkx", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 10,
        i = Object.values(c("CVCv3DisabledPlayerOrigins")),
        j = Object.values(c("CVCv3DisabledPlayerSubOrigins"));
    a = function() {
        function a(a) {
            var b = this;
            this.$13 = !1;
            this.$3 = new(c("CVCv3SubscriptionHelper"))(a.getVideoID(), a.getPlayerOrigin(), a.getPlayerSuborigin());
            this.$2 = a;
            this.$4 = null;
            this.$5 = !1;
            this.$7 = null;
            this.$1 = null;
            this.$11 = !this.$3.isValidSubscription();
            this.$6 = new(c("SubscriptionsHandler"))();
            this.$6.addSubscriptions(a.addListener("beginPlayback", this.$14.bind(this)), a.addListener("pausePlayback", this.$15.bind(this)), a.addListener("finishPlayback", this.$16.bind(this)), a.addListener("updateStatus", this.$17.bind(this)));
            a.registerOption("UnifiedCVC", "cvcData", function() {
                return b.$12
            });
            this.$6.addSubscriptions(d("Run").onLeave(function() {
                return b.leave()
            }))
        }
        var b = a.prototype;
        b.leave = function() {
            this.$6.release(), this.$2.hasOption("UnifiedCVC", "cvcData") && this.$2.unregisterOption("UnifiedCVC", "cvcData")
        };
        b.disable = function() {
            this.$13 = !0
        };
        b.$14 = function() {
            if (!this.$2.isState("playing")) return;
            this.$4 = null;
            this.$5 = !1
        };
        b.$15 = function() {
            this.$4 = null, this.$5 = !1
        };
        b.$16 = function() {
            this.$4 = null, this.$5 = !1
        };
        b.$17 = function(a) {
            this.$2.isState("playing") && (this.$4 == null && (this.$4 = a.position), !this.$5 && this.$4 + 3 < a.position && (this.$2.logEvent("played_for_three_seconds"), this.$5 = !0))
        };
        b.setLinearChannelID = function(a) {
            this.$7 = a
        };
        b.startUnifiedCVC = function() {
            if (this.$13 || this.$18() || this.$19()) return;
            var a = !1;
            a || (a = this.$2.isLiveVideo() ? !0 : !c("gkx")("1353007"));
            if (!a) return;
            this.$20(0)
        };
        b.stopUnifiedCVC = function() {
            this.$21()
        };
        b.$18 = function() {
            return i.includes(this.$2.getPlayerOrigin())
        };
        b.$19 = function() {
            return j.includes(this.$2.getPlayerSuborigin())
        };
        b.$21 = function() {
            c("clearTimeout")(this.$9), c("clearTimeout")(this.$8), this.$9 = null, this.$8 = null, this.$3.clearAnyPreviousContext(), this.$10 != null && (this.$10.abandon(), this.$10 = null)
        };
        b.$22 = function() {
            c("clearTimeout")(this.$8), this.$8 = null
        };
        b.$23 = function() {
            this.$10 = null, this.$22(), this.$20(0)
        };
        b.$20 = function(a) {
            var b = this;
            if (this.$9 != null || this.$10 != null || this.$11) return;
            this.$9 = c("setTimeout")(function() {
                b.$9 = null;
                var a = b.$24(),
                    e = Date.now(),
                    f = !1;
                a.setHandler(function(a) {
                    b.$25(a, e)
                });
                a.setErrorHandler(function(a) {
                    f = !0;
                    b.$3.logHttpRequestFailure(((a = a.errorSummary) != null ? a : "").toString(), Date.now() - e)
                });
                b.$10 = a;
                a.send();
                b.$8 = c("setTimeout")(function() {
                    f || b.$3.logHttpRequestTimeout(Date.now() - e), b.$23()
                }, h * d("DateConsts").MS_PER_SEC)
            }, a)
        };
        b.$25 = function(a, b) {
            if (a.getRequest() !== this.$10) return;
            b = Date.now() - b;
            this.$10 = null;
            a = this.$3.processUnifiedResponse(a.payload);
            if (a != null) {
                this.$22();
                this.$12 = a.d;
                a.d != null ? (this.$2.emit("unifiedCVC/update", a.d), this.$3.logHttpRequestSuccess(b)) : this.$3.logHttpResponseBad("no data field", b);
                if (a.a != null) {
                    b = a.a.t;
                    switch (b) {
                        case "p":
                            b = a.a.pi;
                            b == null && (b = h);
                            this.$20(b * d("DateConsts").MS_PER_SEC);
                            break;
                        case "s":
                            this.$11 = !0;
                            break
                    }
                }
            }
        };
        b.$24 = function() {
            var a = {};
            this.$7 != null && (a.lc = this.$7);
            this.$2.isLiveVideo() && (a.ls = !0, a.pc = !0);
            var b = 0,
                d = 0;
            this.$4 != null && (b = this.$4, d = this.$2.getCurrentTimePosition());
            b = this.$3.makeUnifiedVideoCVCUpdate(b, d, this.$2.getVideoState(), this.$2.isMuted(), a);
            d = {
                d: JSON.stringify(b)
            };
            this.$1 != null && (d.access_token = this.$1);
            return new(c("AsyncRequest"))().setMethod("POST").setURI(c("XVideoUnifiedCVCController").getURIBuilder().getURI()).setData(d)
        };
        b.setAccessToken = function(a) {
            this.$1 = a
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("VideoAsyncLoggerHelper", ["SubscriptionsHandler"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, d) {
        var e, f = new(c("SubscriptionsHandler"))(),
            g = !1,
            h = function() {
                g || (a(), g = !0), e && (clearTimeout(e), e = null), f.release()
            };
        e = setTimeout(h, 0);
        b.forEach(function(a) {
            f.addSubscriptions(d.addListener(a, h))
        })
    }
    g.operateAsync = a
}), 98);
__d("XPlatReactEnvironment", ["gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        return c("gkx")("3422")
    }

    function b() {
        return c("gkx")("1902661")
    }

    function d() {
        return c("gkx")("5868")
    }

    function e() {
        return !0
    }
    g.isFRLEnvironment = a;
    g.isInstagramEnvironment = b;
    g.isMWAEnvironment = d;
    g.isWeb = e
}), 98);
__d("isSSR", ["ExecutionEnvironment", "XPlatReactEnvironment"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = d("XPlatReactEnvironment").isWeb() && !(h || (h = c("ExecutionEnvironment"))).canUseDOM;
    b = a;
    g["default"] = b
}), 98);
__d("VideoPlayerConnectionQuality", ["isSSR"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
            POOR: "POOR",
            MODERATE: "MODERATE",
            GOOD: "GOOD",
            EXCELLENT: "EXCELLENT"
        },
        i = [{
            bandwidth: 5e5,
            connectionQuality: h.POOR
        }, {
            bandwidth: 2e6,
            connectionQuality: h.MODERATE
        }, {
            bandwidth: 1e7,
            connectionQuality: h.GOOD
        }],
        j = 100,
        k = null,
        l = null;
    a = function(a) {
        if (c("isSSR")) return "MODERATE";
        if (k !== null && l !== null && k >= Date.now() - j) return l;
        a = a();
        var b = null;
        if (a != null)
            for (var d = 0; d < i.length; d++)
                if (a < i[d].bandwidth) {
                    b = i[d].connectionQuality;
                    break
                }
        b === null && (b = h.EXCELLENT);
        k = Date.now();
        l = b;
        return b
    };
    g.evaluate = a
}), 98);
__d("DelegatedVideoPriorityAdjuster", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = function() {}, this.$2 = 0
        }
        var b = a.prototype;
        b.setOnPriorityChanged = function(a) {
            this.$1 = a
        };
        b.getPriorityAdjustment = function() {
            return this.$2
        };
        b.notifyAdjustment = function(a) {
            if (this.$2 === a) return;
            this.$2 = a;
            this.$1(this.$2)
        };
        b.cleanup = function() {
            this.$1 = function() {}
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("MediaController", ["EventEmitter", "Style"], (function(a, b, c, d, e, f, g) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var d = b.prototype;
        d.getRootNode = function() {
            return this.$MediaController1
        };
        d.setDimensions = function(a, b) {
            var d = this.getRootNode();
            c("Style").apply(d, {
                width: a + "px",
                height: b + "px"
            })
        };
        d.getMediaID = function() {
            return this.$MediaController2
        };
        d.isLiveVideo = function() {
            return !1
        };
        d.isVideo = function() {
            return !1
        };
        return b
    }(c("EventEmitter"));
    g["default"] = a
}), 98);
__d("SphericalVideoPlayerEvents", [], (function(a, b, c, d, e, f) {
    a = "setRelativeSphericalOrientation";
    b = "setAbsoluteSphericalOrientation";
    c = "setFieldOfView";
    d = "setVideoProjection";
    e = "setStereoMode";
    var g = "setPartialLimits",
        h = "setViewportControlConfig";
    f.SET_RELATIVE_SPHERICAL_ORIENTATION = a;
    f.SET_ABSOLUTE_SPHERICAL_ORIENTATION = b;
    f.SET_FIELD_OF_VIEW = c;
    f.SET_VIDEO_PROJECTION = d;
    f.SET_STEREO_MODE = e;
    f.SET_PARTIAL_LIMITS = g;
    f.SET_VIEWPORT_CONTROL_CONFIG = h
}), 66);
__d("VideoChannelViewChainLengthManager", ["guid"], (function(a, b, c, d, e, f, g) {
    var h = function() {
            function a(a) {
                this.$2 = 0, this.$5 = {}, this.$1 = c("guid")(), this.$3 = a, this.$5[a] = 0, this.$4 = a
            }
            var b = a.prototype;
            b.registerVideoID = function(a) {
                this.$5[a] === void 0 && (this.$2++, this.$5[a] = this.$2), this.$4 = a
            };
            b.getSessionID = function() {
                return this.$1
            };
            b.getCurrentChainLength = function() {
                return this.$5[this.$4] !== void 0 ? this.$5[this.$4] : null
            };
            return a
        }(),
        i = {};

    function j(a) {
        a = a.toString();
        i[a] || (i[a] = new h(a))
    }

    function a(a) {
        a = a && a.toString();
        a = i[a];
        return !a ? {
            video_chaining_depth_level: null,
            video_chaining_session_id: null
        } : {
            video_chaining_depth_level: a.getCurrentChainLength(),
            video_chaining_session_id: a.getSessionID()
        }
    }

    function k(a, b) {
        a = a.toString();
        j(a);
        i[a].registerVideoID(b)
    }

    function b(a, b) {
        var c = a;
        if (b) {
            b = b.decode();
            b.root_id && (c = b.root_id)
        }
        c && (c = c.toString());
        k(c, a)
    }
    g.getLoggingData = a;
    g.registerChainingInfos = b
}), 98);
__d("VideoControllerPlayingStateEmitter", ["EventEmitter", "SubscriptionsHandler"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var c;
            c = a.call(this) || this;
            c.$VideoControllerPlayingStateEmitter2 = null;
            c.$VideoControllerPlayingStateEmitter3 = b;
            return c
        }
        var d = b.prototype;
        d.enable = function() {
            var a = this;
            this.$VideoControllerPlayingStateEmitter4().addSubscriptions(this.$VideoControllerPlayingStateEmitter3.addListener("stateChange", function() {
                var b = a.$VideoControllerPlayingStateEmitter2;
                a.$VideoControllerPlayingStateEmitter2 = a.$VideoControllerPlayingStateEmitter3.getState();
                if (a.$VideoControllerPlayingStateEmitter2 === b) return;
                a.$VideoControllerPlayingStateEmitter5(a.$VideoControllerPlayingStateEmitter2)
            }));
            this.$VideoControllerPlayingStateEmitter2 = this.$VideoControllerPlayingStateEmitter3.getState();
            this.$VideoControllerPlayingStateEmitter5(this.$VideoControllerPlayingStateEmitter2)
        };
        d.setOnPlaying = function(a) {
            this.$VideoControllerPlayingStateEmitter4().addSubscriptions(this.addListener("play", a))
        };
        d.setOnPaused = function(a) {
            this.$VideoControllerPlayingStateEmitter4().addSubscriptions(this.addListener("pause", a))
        };
        d.disable = function() {
            this.$VideoControllerPlayingStateEmitter2 = null, this.$VideoControllerPlayingStateEmitter1 && (this.$VideoControllerPlayingStateEmitter1.release(), this.$VideoControllerPlayingStateEmitter1 = null)
        };
        d.$VideoControllerPlayingStateEmitter4 = function() {
            this.$VideoControllerPlayingStateEmitter1 || (this.$VideoControllerPlayingStateEmitter1 = new(c("SubscriptionsHandler"))());
            return this.$VideoControllerPlayingStateEmitter1
        };
        d.$VideoControllerPlayingStateEmitter5 = function(a) {
            a === "playing" ? this.emit("play") : a === "paused" && this.emit("pause")
        };
        return b
    }(c("EventEmitter"));
    g["default"] = a
}), 98);
__d("DataViewReader", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = 0, this.$2 = a
        }
        var b = a.prototype;
        b.seek = function(a) {
            this.$1 = a
        };
        b.skip = function(a) {
            var b = this.$1;
            this.$1 += a;
            return b
        };
        b.readUint8 = function() {
            return this.$2.getUint8(this.skip(8 / 8))
        };
        b.readUint16 = function(a) {
            a === void 0 && (a = !1);
            return this.$2.getUint16(this.skip(16 / 8), a)
        };
        b.readUint32 = function(a) {
            a === void 0 && (a = !1);
            return this.$2.getUint32(this.skip(32 / 8), a)
        };
        b.readUint64 = function(a) {
            a === void 0 && (a = !1);
            var b;
            a ? (a = this.$2.getUint32(this.skip(32 / 8), !0), b = this.$2.getUint32(this.skip(32 / 8), !0)) : (b = this.$2.getUint32(this.skip(32 / 8)), a = this.$2.getUint32(this.skip(32 / 8)));
            if (b > 2097151) throw new RangeError("Overflow reading 64-bit value.");
            return Math.pow(2, 32) * b + a
        };
        b.readInt64 = function(a) {
            a === void 0 && (a = !1);
            var b;
            a ? (a = this.$2.getInt32(this.skip(32 / 8), !0), b = this.$2.getInt32(this.skip(32 / 8), !0)) : (b = this.$2.getInt32(this.skip(32 / 8)), a = this.$2.getInt32(this.skip(32 / 8)));
            if (b > 2097151) throw new RangeError("Overflow reading 64-bit value.");
            return Math.pow(2, 32) * (b | 0) + a
        };
        b.readInt16 = function(a) {
            a === void 0 && (a = !1);
            return this.$2.getInt16(this.skip(16 / 8), a)
        };
        b.readInt32 = function(a) {
            a === void 0 && (a = !1);
            return this.$2.getInt32(this.skip(32 / 8), a)
        };
        b.readZeroTerminatedString = function(a) {
            var b = "",
                c = 0,
                d;
            while (c++ < a && (d = this.readUint8())) b += String.fromCharCode(d);
            return b
        };
        b.readChars = function(a) {
            var b = "";
            while (a-- > 0) b += String.fromCharCode(this.$2.getUint8(this.skip(8 / 8)));
            return b
        };
        b.readBytes = function(a) {
            var b = [];
            while (a-- > 0) b.push(this.$2.getUint8(this.skip(8 / 8)));
            return b
        };
        b.getDataView = function() {
            return this.$2
        };
        b.getCursor = function() {
            return this.$1
        };
        b.hasMoreData = function() {
            return this.$2.byteLength - this.getCursor() > 0
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("LiveTraceWwwVideoPlayerFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1743810");
    b = d("FalcoLoggerInternal").create("live_trace_www_video_player", a);
    e = b;
    g["default"] = e
}), 98);
__d("Mp4DASHEventMessageBox", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a, b) {
            this.$1 = b, this.$2 = null, b.getVersion() == 0 ? this.$2 = {
                version: 0,
                schemeIdUri: a.readZeroTerminatedString(this.$4(a, b)),
                value: a.readZeroTerminatedString(this.$4(a, b)),
                timescale: a.readUint32(),
                presentationTimeDelta: a.readUint32(),
                eventDuration: a.readUint32(),
                id: a.readUint32()
            } : b.getVersion() == 1 && (this.$2 = {
                version: 1,
                timescale: a.readUint32(),
                presentationTime: a.readUint64(),
                eventDuration: a.readUint32(),
                id: a.readUint32(),
                schemeIdUri: a.readZeroTerminatedString(this.$4(a, b)),
                value: a.readZeroTerminatedString(this.$4(a, b))
            }), this.$3 = new DataView(a.getDataView().buffer, a.getCursor())
        }
        var b = a.prototype;
        b.getFullBox = function() {
            return this.$1
        };
        b.getEmsgFields = function() {
            return this.$2
        };
        b.getMessageData = function() {
            return this.$3
        };
        b.getStartTime = function() {
            var a = this.$2;
            if (a == null) return null;
            switch (a.version) {
                case 0:
                    return null;
                case 1:
                    return this.$5(a)
            }
        };
        b.getDuration = function() {
            var a = this.$2;
            if (a == null) return null;
            var b = a.eventDuration;
            a = a.timescale;
            return a !== 0 ? b / a : b
        };
        b.$5 = function(a) {
            var b = a.timescale;
            a = a.presentationTime;
            return b !== 0 ? a / b : a
        };
        b.$4 = function(a, b) {
            return b.getBox().getSize() - (a.getCursor() - b.getBox().getStart())
        };
        return a
    }();
    a.canonicalType = "emsg";
    f["default"] = a
}), 66);
__d("Mp4Box", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$4 = a.getCursor(), this.$1 = a.readUint32(), this.$2 = a.readChars(4), this.$1 === 1 ? this.$1 = a.readUint64() : this.$1 === 0 && (this.$1 = a.getDataView().byteLength - this.$4), this.$2 === "uuid" && (this.$3 = a.readChars(16)), this.$5 = a.getCursor()
        }
        var b = a.prototype;
        b.getBodyStart = function() {
            return this.$5
        };
        b.getBodySize = function() {
            var a = this.$5 - this.$4;
            return this.getSize() - a
        };
        b.getSize = function() {
            return this.$1
        };
        b.getType = function() {
            return this.$2
        };
        b.getUuid = function() {
            return this.$3
        };
        b.getStart = function() {
            return this.$4
        };
        b.inspect = function() {
            return "{ size: " + this.$1 + ", type: " + this.$2 + " }"
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("Mp4FullBox", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$2 = a.readUint8(), this.$1 = a.readUint8(), this.$1 = a.readUint8() + (this.$1 << 8), this.$1 = a.readUint8() + (this.$1 << 8), this.$3 = b
        }
        var b = a.prototype;
        b.getVersion = function() {
            return this.$2
        };
        b.getFlags = function() {
            return this.$1
        };
        b.getBox = function() {
            return this.$3
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("Mp4Demuxer", ["DataViewReader", "Mp4Box", "Mp4FullBox"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = new(c("DataViewReader"))(a)
        }
        var b = a.prototype;
        b.parseBox = function() {
            return new(c("Mp4Box"))(this.$1)
        };
        b.parseFullBox = function(a) {
            return new(c("Mp4FullBox"))(this.$1, a)
        };
        b.parseCanonicalBox = function(a, b) {
            return new a(this.$1, b)
        };
        b.skipBox = function(a) {
            this.$1.seek(a.getStart() + a.getSize())
        };
        b.withinBox = function(a) {
            var b = this.$1.getCursor();
            return b >= a.getStart() && b < a.getStart() + a.getSize()
        };
        b.atEnd = function() {
            return this.$1.getCursor() >= this.$1.getDataView().byteLength
        };
        b.reset = function() {
            this.$1.seek(0)
        };
        b.readBoxBodyText = function(a) {
            this.$1.seek(a.getBodyStart());
            var b = new TextDecoder();
            a = new Uint8Array(this.$1.readBytes(a.getBodySize()));
            return b.decode(a)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("VideoLiveTrace", ["DataViewReader", "LiveTraceWwwVideoPlayerFalcoEvent", "Mp4DASHEventMessageBox", "Mp4Demuxer", "throttle"], (function(a, b, c, d, e, f, g) {
    var h = "x-fb-video-livetrace-ids",
        i = "x-fb-video-livetrace-parentsource",
        j = "x-fb-video-livetrace-streamtype",
        k = "x-fb-origin-hit",
        l = "x-fb-edge-hit",
        m = "PLY:WWW:",
        n = m + "DL:",
        o = m + "DIS:",
        p = 1e3,
        q = /[\r\n]+/;
    a = function() {
        function a(a, b, d) {
            var e = this;
            this.$6 = [];
            this.$1 = a;
            this.$2 = null;
            a = d + ":" + b.substring(0, 5);
            this.$3 = m + a;
            this.$4 = n + a;
            this.$5 = o + a;
            this.$7 = c("throttle")(function(a) {
                return e.$8(a)
            }, p)
        }
        var b = a.prototype;
        b.setStreamType = function(a) {
            this.$2 = a
        };
        b.$9 = function(a, b, d, e, f, g) {
            var h, i = this,
                j = Date.now(),
                k = (h = this.$2) != null ? h : 0;
            c("LiveTraceWwwVideoPlayerFalcoEvent").log(function() {
                return {
                    stream_id: i.$1,
                    stream_type: k,
                    event_name: b,
                    event_severity: f,
                    event_creation_time: j,
                    source: a,
                    trace_id: d,
                    parent_source: e,
                    metadata: g
                }
            })
        };
        b.onUpdateStatus = function(a) {
            this.$7(a)
        };
        b.$8 = function(a) {
            a = a.position * 1e3;
            for (var b = this.$6.length - 1; b >= 0; b--) {
                var c = this.$6[b];
                if (c.presentationTimestamp > a) continue;
                if (c.displayTimestamp == null) c.displayTimestamp = Date.now();
                else continue;
                this.$9(this.$5, "FRAME", c.traceId, this.$4, "SUCCESS", null)
            }
        };
        b.getAndFlushTracedFrames = function() {
            var a, b = {
                    currentTimeMs: Date.now(),
                    streamId: this.$1
                },
                c = {
                    dl: [],
                    dis: []
                },
                d = [];
            this.$6.forEach(function(a) {
                a.hasBeenFlushedAsDownloaded || (c.dl.push({
                    id: a.traceId,
                    timeMs: a.downloadTimestamp
                }), a.hasBeenFlushedAsDownloaded = !0), a.displayTimestamp != null ? c.dis.push({
                    id: a.traceId,
                    timeMs: a.displayTimestamp
                }) : d.push(a)
            });
            this.$6 = d;
            b[(a = this.$2) != null ? a : 0] = c;
            return c.dl.length > 0 || c.dis.length > 0 ? b : null
        };
        b.handleHeadersString = function(a, b) {
            a = a.trim().split(q);
            this.$10(a.map(function(a) {
                a = a.split(": ");
                return [a.shift().toLowerCase(), a.shift()]
            }), b)
        };
        b.handleHeaders = function(a, b) {
            this.$10(this.$11(a), b)
        };
        b.handleHeadersAndBody = function(a, b, c) {
            this.$12(this.$11(a), b, c)
        };
        b.$11 = function(a) {
            var b = [];
            for (var a = a.entries(), c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= a.length) break;
                    e = a[d++]
                } else {
                    d = a.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                b.push(e)
            }
            return b
        };
        b.$13 = function(a) {
            var b = Date.now(),
                d = new Map(),
                e = a.reduce(function(a, b) {
                    return a + b.byteLength
                }, 0),
                f = new Uint8Array(e),
                g = 0;
            a.forEach(function(a) {
                f.set(a, g), g += a.byteLength
            });
            e = new(c("Mp4Demuxer"))(new DataView(f.buffer, f.byteOffset, f.byteLength));
            while (!e.atEnd()) {
                a = e.parseBox();
                if (a.getType() === c("Mp4DASHEventMessageBox").canonicalType) {
                    var h = e.parseCanonicalBox(c("Mp4DASHEventMessageBox"), e.parseFullBox(a));
                    if (h instanceof c("Mp4DASHEventMessageBox")) {
                        var i;
                        i = (i = h.getEmsgFields()) == null ? void 0 : i.schemeIdUri;
                        if (i == null ? void 0 : i.startsWith("livedash:trace:")) {
                            i = h.getMessageData();
                            h = new(c("DataViewReader"))(i).readZeroTerminatedString(i.byteLength);
                            try {
                                i = JSON.parse(h);
                                Array.isArray(i) && i.filter(function(a) {
                                    return Array.isArray(a) && a.length === 2
                                }).forEach(function(a) {
                                    var c = a[0];
                                    a = a[1];
                                    d.set(c, {
                                        displayTimestamp: null,
                                        downloadTimestamp: b,
                                        hasBeenFlushedAsDownloaded: !1,
                                        presentationTimestamp: a,
                                        traceId: c
                                    })
                                })
                            } catch (a) {}
                        }
                    }
                }
                e.skipBox(a)
            }
            return d
        };
        b.$14 = function(a, b) {
            var c = this,
                d = "null",
                e = Date.now(),
                f = new Map(),
                g = "";
            a.forEach(function(a) {
                var b = a[0].toLowerCase();
                a = a[1];
                if (b === h && a) {
                    var m = a.split(",");
                    m.forEach(function(a) {
                        a = a.split(":");
                        var b = +a[0];
                        a = +a[1];
                        f.set(b, {
                            displayTimestamp: null,
                            downloadTimestamp: e,
                            hasBeenFlushedAsDownloaded: !1,
                            presentationTimestamp: a,
                            traceId: b
                        })
                    })
                }
                b === i && (g = a);
                c.$2 === null && b === j && (c.$2 = parseInt(a, 10));
                (b === k || b === l) && parseInt(a, 10) && (d = b === k ? "origin" : "edge")
            });
            a = b || {};
            a.hit = d;
            return g !== "" ? {
                tracedFrames: f,
                eventMetaData: a,
                parentSource: g,
                streamType: this.$2
            } : null
        };
        b.$12 = function(a, b, c) {
            var d = this.$14(a, c);
            if (d == null || d.parentSource === "") return;
            if (b == null ? void 0 : b.length) {
                a = this.$13(b);
                a.forEach(function(a, b) {
                    d.tracedFrames.set(b, a)
                })
            }
            this.$6 = this.$6.concat(Array.from(d.tracedFrames.values()));
            c = d.tracedFrames.keys();
            for (b = c, a = Array.isArray(b), c = 0, b = a ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (a) {
                    if (c >= b.length) break;
                    e = b[c++]
                } else {
                    c = b.next();
                    if (c.done) break;
                    e = c.value
                }
                e = e;
                this.$9(this.$4, "SEGMENT", e, d.parentSource, "SUCCESS", d.eventMetaData)
            }
        };
        b.$10 = function(a, b) {
            this.$12(a, null, b)
        };
        b.handleXHR = function(a, b) {
            this.handleHeadersString(a.getAllResponseHeaders(), b)
        };
        b.getLiveTraceContext = function() {
            return this.$2 != null ? {
                streamId: this.$1,
                streamType: this.$2,
                sourceId: this.$3
            } : null
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("VideoPlayerABRQualityTracker", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a) {
            this.$1 = a, this.$2 = null
        }
        var b = a.prototype;
        b.setLastQualitySwitchReason = function(a) {
            this.$2 = a
        };
        b.getABREvaluation = function() {
            var a = [];
            this.$1 && (a = this.$1.flushABREvaluationSet());
            var b = 0,
                c = 0,
                d = 0,
                e = 0,
                f = this.$2;
            for (var g = 0; g < a.length; g++) switch (a[g]) {
                case "ideal":
                    b++;
                    break;
                case "conservative":
                    c++;
                    break;
                case "aggressive":
                    d++;
                    break;
                case "conservative_resolution_constrained":
                    e++;
                    break
            }
            return {
                idealSamples: b,
                conservativeSamples: c,
                aggressiveSamples: d,
                conservativeResolutionConstrainedSamples: e,
                lastQualitySwitchReason: f
            }
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("VideoPlayerLoggerPlayerStates", [], (function(a, b, c, d, e, f) {
    a = "started";
    b = "unpaused";
    c = {
        STARTED: a,
        UNPAUSED: b
    };
    f["default"] = c
}), 66);
__d("VideoPlayerLoggerSource", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        AD_LIBRARY: "ad_library",
        ADS: "ads",
        ADS_PREVIEW: "ads_preview",
        ANIMATED_IMAGE_SHARE: "animated_image_share",
        ANIMATED_SATP: "animated_satp",
        ASSET: "asset",
        ASSET_MANAGER: "asset_manager",
        AUDIO_HOME: "audio_home",
        AUDIO_HOME_ORION_CTA: "audio_home_orion_cta",
        AYMT: "aymt",
        BALLOT: "ballot",
        BILLING_HUB: "billing_hub",
        BIZ_ART: "biz_art",
        BIZ_MENTIONS_AND_TAGS: "biz_mentions_and_tags",
        BIZ_STORIES_COMPOSER: "biz_stories_composer",
        BLOKS_EMULATOR: "bloks_emulator",
        BROADCAST_REQUEST_ATTACHMENT: "broadcast_request_attachment",
        BULLETIN_AUDIO_PLAYER: "bulletin_audio_player",
        BUSINESS_FEED: "business_feed",
        CAMERA_POST: "camera_post",
        CANDIDATE_PORTAL: "candidate_portal",
        CANDIDATE_VIDEOS: "candidate_videos",
        CATALOG_MANAGER: "catalog_manager",
        CHAINED: "chained",
        CHAINED_SUGGESTION: "chained_suggestion",
        CHANNEL: "channel",
        CHANNEL_TAB: "channel_tab",
        CHANNEL_TAB_LIVE_CARD: "channel_tab_live_card",
        CHANNEL_TAB_VIDEOS_CARD: "channel_tab_videos_card",
        CHAT_LLAMA: "chat_llama",
        CMS: "cms",
        COMMERCE_MANAGER: "commerce_manager",
        COMPASS_CURATION: "compass_curation",
        CONTINUE_WATCHING_RECOMMENDATION: "continue_watching_recommendation",
        CORPORATE_CARD_APPLICATION: "corporate_card_application",
        COWATCH: "cowatch",
        CREATOR_STUDIO_INSPIRATION_HUB: "creator_studio_inspiration_hub",
        CREATOR_STUDIO_MIX_INSIGHTS_TRENDS: "creator_studio_mix_insights_trends",
        CREATOR_STUDIO_STARS_CUE_INSERTION_PREVIEW: "creator_studio_stars_cue_insertion_preview",
        CRICKET_MATCHES_AGGREGATION: "cricket_matches_aggregation",
        CROWDSOURCING_VIDEO_PREVIEW: "crowdsourcing_video_preview",
        CS_VIDEO_COMPOSER_CROSSPOSTING_REVIEW: "cs_video_composer_crossposting_review",
        CURATION: "curation",
        CURATION_QP: "curation_qp",
        DIM_SUM: "dim_sum",
        DISCOVERY_HUBS_HEADER: "discovery_hubs_header",
        DOLLY_DISCOVERY_PAGE: "dolly_discovery_page",
        EMBEDDED: "embedded",
        EMBEDDED_PAGE_PLUGIN: "embedded_page_plugin",
        EMBEDDED_VIDEO: "embedded_video",
        EMBEDDED_VIDEO_FROM_UFI: "embedded_video_from_ufi",
        EMBEDDED_VIDEO_PREVIEW: "embedded_video_preview",
        ENTRY_POINT: "entry_point",
        ENTRY_POINT_NOTIFICATIONS: "entry_point_notifications",
        EP_TAKEDOWN_REQUEST_MANAGER: "ep_takedown_request_manager",
        EVENTS_COVER: "events_cover",
        EVENTS_LIVE_CTA: "events_live_cta",
        EVENTS_LIVE_VIDEO_SECTION: "events_live_video_section",
        EXTERNAL_DEEPLINK: "external_deeplink",
        FACEBOOK_DESIGN: "facebook_design",
        FB_REELS_AUDIO: "fb_reels_audio",
        FB_REELS_VIDEO_PREVIEW: "fb_reels_video_preview",
        FB_SHORTS_CREATION_FEED_UNIT: "fb_shorts_creation_feed_unit",
        FB_SHORTS_NATIVE_IN_FEED_UNIT: "fb_shorts_native_in_feed_unit",
        FB_SHORTS_NATIVE_WATCH_IN_FEED_UNIT: "fb_shorts_native_watch_in_feed_unit",
        FB_SHORTS_PROFILE_VIEWER: "fb_shorts_profile_viewer",
        FB_SHORTS_RESHARE_FEED_UNIT: "fb_shorts_reshare_feed_unit",
        FB_SHORTS_UNIFIED_TOFU: "fb_shorts_unified_tofu",
        FB_SHORTS_VIEWER: "fb_shorts_viewer",
        FEED: "feed",
        FEED_STORY: "feed_story",
        FUNDRAISER_COVER: "fundraiser_cover",
        GALLERY_CATALOG: "gallery_catalog",
        GALLERY_SGC: "gallery_sgc",
        GALLERY_UGC: "gallery_ugc",
        GAMEROOM_LIVE_VIDEO_HERO_BANNER: "gameroom_live_video_hero_banner",
        GAMEROOM_LIVE_VIDEO_TAB: "gameroom_live_video_tab",
        GAMEROOM_LIVE_VIDEO_THUMBNAIL: "gameroom_live_video_thumbnail",
        GAMES_ARENA_HERO: "games_arena_hero",
        GAMES_ARENA_VIDEOS_TAB: "games_arena_videos_tab",
        GAMES_AUDIENCE_NETWORK_ADS: "games_audience_network_ads",
        GAMES_FEATURED_HERO_BANNER: "games_featured_hero_banner",
        GAMES_FEED: "games_feed",
        GAMES_FEED_STORY_HEADER: "games_feed_story_header",
        GAMES_FEED_VOD_UNIT: "games_feed_vod_unit",
        GAMES_GAME_DETAILS: "games_game_details",
        GAMES_INSTANT_GAME_QUICK_PROMOTION: "games_instant_game_quick_promotion",
        GAMES_PROFILE: "games_profile",
        GAMES_STREAMER_DASHBOARD: "games_streamer_dashboard",
        GAMES_VERSE_DESTINATION: "games_verse_destination",
        GAMES_VIDEO_CLIPS_HOME: "games_video_clips_home",
        GAMES_VIDEO_CLIPS_HOME_IMMERSIVE_PLAYER: "games_video_clips_home_immersive_player",
        GAMES_VIDEO_CLIPS_HOME_MY_CLIPS: "games_video_clips_home_my_clips",
        GAMES_VIDEO_CLIPS_HOME_TOP_CLIPS: "games_video_clips_home_top_clips",
        GAMES_VIDEO_CLIPS_LIBRARY_PREVIEW_MODAL: "games_video_clips_library_preview_modal",
        GAMES_VIDEO_COMMUNITY_FEED: "games_video_community_feed",
        GAMES_VIDEO_COSTREAMERS_LIST: "games_video_costreamers_list",
        GAMES_VIDEO_EXPLORE_HOME: "games_video_explore_home",
        GAMES_VIDEO_HIGHLIGHT_VIDEO_PREVIEW: "games_video_highlight_video_preview",
        GAMES_VIDEO_HIGHLIGHT_VIDEO_TRANSITION: "games_video_highlight_video_transition",
        GAMES_VIDEO_HIGHLIGHTED_CLIPS_STREAMER_PAGE: "games_video_highlighted_clips_streamer_page",
        GAMES_VIDEO_HOME: "games_video_home",
        GAMES_VIDEO_HOME_HERO: "games_video_home_hero",
        GAMES_VIDEO_HOME_LEFT_RAIL: "games_video_home_left_rail",
        GAMES_VIDEO_HOME_SEE_ALL: "games_video_home_see_all",
        GAMES_VIDEO_HOME_STREAMER_HUB: "games_video_home_streamer_hub",
        GAMES_VIDEO_HOME_STREAMER_HUB_HERO: "games_video_home_streamer_hub_hero",
        GAMES_VIDEO_HOME_STREAMER_HUB_SCHEDULE: "games_video_home_streamer_hub_schedule",
        GAMES_VIDEO_HUB: "games_video_hub",
        GAMES_VIDEO_HUB_REDIRECT_NOTIFICATION: "games_video_hub_redirect_notification",
        GAMES_VIDEO_HUB_REDIRECT_UNKNOWN: "games_video_hub_redirect_unknown",
        GAMES_VIDEO_LIVE_RECOMMENDATION: "games_video_live_recommendation",
        GAMES_VIDEO_MIXER_US_QP_RECOMMENDED_LIVE: "games_video_mixer_us_qp_recommended_live",
        GAMES_VIDEO_PLAY_WITH_STREAMERS_LIVE: "games_video_play_with_streamers_live",
        GAMES_VIDEO_QP_RECOMMENDED_LIVE: "games_video_qp_recommended_live",
        GAMES_VIDEO_QP_US_RECOMMENDED_LIVE: "games_video_qp_us_recommended_live",
        GAMES_VIDEO_SEARCH_UNIT: "games_video_search_unit",
        GAMES_VIDEO_SINGLE_GAME: "games_video_single_game",
        GAMES_VIDEO_SOCIAL_PLUGIN: "games_video_social_plugin",
        GAMES_VIDEO_STREAMER_HUB: "games_video_streamer_hub",
        GAMES_VIDEO_STREAMER_SEARCH_UNIT: "games_video_streamer_unit",
        GAMES_VIDEO_THUMBNAIL_PREVIEW: "games_video_thumbnail_preview",
        GAMES_VIDEO_TOP_WEEKLY_CLIPS_STREAMER_PAGE: "games_video_top_weekly_clips_streamer_page",
        GAMES_VIDEO_VIEW_HIGHLIGHTS_CUE: "games_video_view_highlights_cue",
        GAMING_FOLLOWED_GAME_AGGREGATION: "gaming_followed_game_aggregation",
        GAMING_TOP_VIDEOS_AGGREGATION: "gaming_top_videos_aggregation",
        GET_CAUGHT_UP_QP: "get_caught_up_qp",
        GOODWILL_PRODUCT_SYSTEM: "goodwill_product_system",
        GROUP_HIGHLIGHT_LIVE_AFFILIATE_PLAYER: "group_highlight_live_affiliate_player",
        GROUP_LIVE_VIDEO_MODULE: "group_live_video_module",
        GROUP_VIDEOS_AGGREGATION: "group_videos_aggregation",
        GROUPS_COVER: "groups_cover",
        GROUPS_FEATURED: "groups_featured",
        GROUPS_LATEST_VIDEOS: "groups_latest_videos",
        GROUPS_WATCH_ALL: "groups_watch_all",
        GROUPS_WATCH_POPULAR: "groups_watch_popular",
        GUIDANCE_HUB: "guidance_hub",
        HASHTAG_DESTINATION: "hashtag_destination",
        HERO_CATALOG: "hero_catalog",
        HERO_SGC: "hero_sgc",
        HERO_UGC: "hero_ugc",
        HORIZON_WEB_LEARN_MORE: "horizon_web_learn_more",
        HTML5: "html5",
        IGD_THREAD: "igd_thread",
        INLINE: "inline",
        INLINE_END_SCREEN: "inline_end_screen",
        INLINE_PAUSE_SCREEN: "inline_pause_screen",
        INLINE_QP: "inline_qp",
        INSIGHTS: "insights",
        INSTANT_GAMES: "instant_games",
        INTERACTIVE_PLUGINS: "interactive_plugins",
        INTERESTS_BLING_STRING: "interests_bling_string",
        INTERESTS_CUE_LISTPACK: "interests_cue_listpack",
        INTERESTS_FIXED_ENTRYPOINT: "interests_fixed_entrypoint",
        INTERESTS_FIXED_LISTPACK: "interests_fixed_listpack",
        INTERESTS_FOLLOW_CUE: "interests_follow_cue",
        INTERESTS_FOLLOW_EDGE_HEADER: "interests_follow_edge_header",
        INTERESTS_MANAGER: "interests_manager",
        INTERESTS_MULTIPLE_SUBTOPIC_CUE: "interests_multiple_subtopic_cue",
        INTERESTS_SPRING_BOARD: "interests_spring_board",
        INTERESTS_SUBTOPIC_AGGREGATION: "interests_subtopic_aggregation",
        INTERESTS_SUGGESTED_FOLLOW: "interests_suggested_follow",
        INTERESTS_WARION_BELT: "interests_warion_belt",
        INTERN_API_UNLABELLED_DATASETS: "intern_api_unlabelled_datasets",
        INTERN_CRM_CALL_RECORDING: "intern_crm_call_recording",
        INTERN_CURATION: "intern_curation",
        INTERN_EXAMPLE: "intern_example",
        INTERN_NEW_HIRE_ORIENTATION: "intern_new_hire_orientation",
        INTERVIEW_TRAINING_QUIZ: "interview_training_quiz",
        ISSUES_MODULE: "issues_module",
        JOBS_VISUAL_INTRO: "jobs_visual_intro",
        LANCELET: "lancelet",
        LIGHTWEIGHT_STATUS: "lightweight_status",
        LIGHTWEIGHT_STATUS_CONSUMPTION: "lightweight_status_consumption",
        LIGHTWEIGHT_STATUS_SELF_VIEW: "lightweight_status_self_view",
        LINEAR_CHANNEL: "linear_channel",
        LIVE_AUTOPLAY_WATCH_AND_SCROLL: "live_autoplay_watch_and_scroll",
        LIVE_BEEPER: "live_beeper",
        LIVE_CLIP: "live_clip",
        LIVE_CLIPS_CREATOR: "live_clips_creator",
        LIVE_CONTROL_PANEL: "live_control_panel",
        LIVE_DESTINATION_SCHEDULED_LIVES_QP: "live_destination_scheduled_lives_qp",
        LIVE_DESTINATION_THEMATIC_UPSELL_QP: "live_destination_thematic_upsell_qp",
        LIVE_DESTINATION_UPSELL_QP: "live_destination_upsell_qp",
        LIVE_EVERGREEN_QP: "live_evergreen_qp",
        LIVE_GAMING_RHC: "live_gaming_rhc",
        LIVE_HERO: "live_hero",
        LIVE_LINEAR: "live_linear",
        LIVE_MAP: "live_map",
        LIVE_MAP_LISTVIEW: "live_map_listview",
        LIVE_MAP_SIDEBAR: "live_map_sidebar",
        LIVE_MAP_TOOLTIP: "live_map_tooltip",
        LIVE_MAP_TOOLTIP_FROM_LISTVIEW: "live_map_tooltip_from_listview",
        LIVE_MAP_TOOLTIP_FROM_MAP: "live_map_tooltip_from_map",
        LIVE_MAP_TOOLTIP_FROM_WEBGL: "live_map_tooltip_from_webgl",
        LIVE_MSITE: "live_msite",
        LIVE_MUSIC_DESTINATION: "live_music_destination",
        LIVE_PAGE_UPCOMING_NEXT_UNIT: "live_page_upcoming_next_unit",
        LIVE_PRODUCER: "live_producer",
        LIVE_PYML: "live_pyml",
        LIVE_QP: "live_qp",
        LIVE_RHC: "live_rhc",
        LIVE_RING: "live_ring",
        LIVE_SHOPPING: "live_shopping",
        LIVE_SHOPPING_EVERGREEN_QP: "live_shopping_buyer_qp",
        LIVE_STUDIO: "live_studio",
        LIVE_VIDEO_BROADCAST: "live_video_broadcast",
        LIVE_VIDEO_PREVIEW: "live_video_preview",
        LIVING_ROOM: "living_room",
        LIVING_ROOM_COMMENTATING: "living_room_commentating",
        LIVING_ROOM_RECAP_FULLSCREEN: "living_room_recap_fullscreen",
        LIVING_ROOM_RECAP_INLINE: "living_room_recap_inline",
        LOGIN_CHALLENGES_LANDING: "login_challenges_landing",
        LOOKBACK: "lookback",
        MARKETPLACE_PROMOTIONAL_VIDEO: "marketplace_promotional_video",
        MBS_INSPIRATION_HUB: "mbs_inspiration_hub",
        MEDIA_COLLAGE: "media_collage",
        MEDIA_MATCH_SERVICE: "media_match_service",
        MEDIA_SYNC: "media_sync",
        MEDIA_VIEWER: "media_viewer",
        MEMORY_LEAK_TEST: "memory_leak_test",
        MESSAGING: "messaging",
        MESSENGER_COWATCH: "messenger_cowatch",
        MESSENGER_KIDS_CHALLENGES_INTERNAL_TOOL: "messenger_kids_challenges_internal_tool",
        MESSENGER_KIDS_DOT_COM: "messenger_kids_dot_com",
        MESSENGER_THREAD: "messenger_thread",
        META_DOT_COM_CMS_PAGE: "meta_dot_com_cms_page",
        META_DOT_COM_UNKNOWN: "meta_dot_com_unknown",
        META_FAMILY_CENTER: "meta_family_center",
        MISC: "misc",
        MOBILE: "mobile",
        MORC_CONSOLE: "morc_console",
        MOVIES_RECOMMENDED_MOVIES_QP: "movies_recommended_movies_qp",
        MUSIC_HOME: "music_home",
        MUSIC_HOME_DEEPLINK: "music_home_deeplink",
        MUSIC_HOME_ENTRY_AGGREGATION: "music_home_entry_aggregation",
        MUSIC_HOME_INTERNAL_BOOKMARK: "music_home_internal_bookmark",
        MUSIC_HOME_NEWSFEED_ATTACHMENT: "music_home_newsfeed_attachment",
        MUSIC_HOME_NEWSFEED_ATTACHMENT_TRENDING: "music_home_newsfeed_attachment_trending",
        MUSIC_HOME_NOTIFICATION: "music_home_notification",
        MUSIC_HOME_QP: "music_home_qp",
        MUSIC_HOME_QP_OVERLAY_HEADER: "music_home_qp_overlay_header",
        MUSIC_HOME_RICH_TILE: "music_home_rich_tile",
        MUSIC_HOME_SEARCH_SHORTCUT: "music_home_search_shortcut",
        MUSIC_HOME_SERP: "music_home_serp",
        MUSIC_HOME_SPRINGBOARD_UNIT: "music_home_springboard_unit",
        MUSIC_HOME_STATIONS_QP: "music_home_stations_qp",
        MUSIC_HOME_TAPPABLE_EDGE_HEADER: "music_home_tappable_edge_header",
        MUSIC_HOME_THIRD_PARTY_PIVOT: "music_home_third_party_pivot",
        MUSIC_HOME_UGC_CTA: "music_home_ugc_cta",
        MUSIC_HOME_UNKNOWN: "music_home_unknown",
        MUSIC_HOME_WATCH_CUE: "music_home_watch_cue",
        MUSIC_HOME_WATCH_CUE_ARTIST: "music_home_watch_cue_artist",
        MUSIC_HOME_WATCH_CUE_TRENDING: "music_home_watch_cue_trending",
        MUSIC_HOME_WATCH_PILL: "music_home_watch_pill",
        MUSIC_HOME_WATCH_PILL_FIX: "music_home_watch_pill_fix",
        MUSIC_HOME_WATCH_SEARCH: "music_home_watch_search",
        MUSIC_HOME_WATCH_SPOTLIGHT_UNIT: "music_home_watch_spotlight_unit",
        MUSIC_HOME_WATCH_STATIONS_UNIT: "music_home_watch_stations_unit",
        MUSIC_HOME_WATCH_SURFACE_PROMOTION_PILL: "music_home_watch_surface_promotion_pill",
        MUSIC_VIDEOS_FEATURING_ARTIST_CARD: "music_videos_featuring_artist_card",
        MUSIC_VIDEOS_PLAYLISTS_CARD: "music_videos_playlists_card",
        MUSIC_WEEKLY_CHART: "music_weekly_chart",
        NEWSFEED_QP: "newsfeed_qp",
        NOT_SPECIFIED_PLEASE_FIX: "not_specified_please_fix",
        NOTIFICATIONS: "notifications",
        NPR_QP: "npr_qp",
        OCULUS: "oculus",
        OCULUS_GAMES: "oculus_games",
        OCULUS_HUB: "oculus_hub",
        OCULUS_RECOMMENDED_VIDEO_UNIT: "oculus_recommended_video_unit",
        OFFERS_DETAIL: "offers_detail",
        PAGE_ADMIN_THINGS_YOU_SHOULD_DO_TIP: "page_admin_things_you_should_do_tip",
        PAGE_AUTOLOAD_WATCH_AND_SCROLL: "page_autoload_watch_and_scroll",
        PAGE_LIVE_TAB: "page_live_tab",
        PAGE_LIVE_VIDEO_MODULE: "page_live_video_module",
        PAGE_ROLES: "page_roles",
        PAGE_TIMELINE_LIVE_CARD: "page_timeline_live_card",
        PAGE_TIMELINE_LIVE_NOW_DIALOG: "page_timeline_live_now_dialog",
        PAGES_COVER: "pages_cover",
        PAGES_COVER_HOVER: "pages_cover_hover",
        PAGES_FINCH_MAIN_VIDEO: "pages_finch_main_video",
        PAGES_FINCH_THUMBNAIL_VIDEO: "pages_finch_thumbnail_video",
        PAGES_FINCH_TRAILER: "pages_finch_trailer",
        PAGES_HOME_HERO: "pages_home_hero",
        PAGES_HOME_PMV_UNIT: "pages_home_pmv_unit",
        PAGES_MESSAGING_VIDEO: "pages_messaging_video",
        PAGES_TIMELINE_INLINE: "pages_timeline_inline",
        PAGES_TIMELINE_PAGES_COVER: "pages_timeline_pages_cover",
        PAGES_VIDEO_SET: "pages_video_set",
        PAID_CONTENT_PACKAGE_PERMALINK_COVER: "paid_content_package_permalink_cover",
        PDP_VIDEO: "pdp_video",
        PEOPLE_PORTAL: "people_portal",
        PERMALINK: "permalink",
        PIXELCLOUD_POST: "pixelcloud_post",
        PIXELCLOUD_POST_INBOX_PREVIEW: "pixelcloud_post_inbox_preview",
        PIXELCLOUD_PROJECT_POST_WIDGET: "pixelcloud_project_post_widget",
        PIXELCLOUD_PROJECT_PRESENTATION_SLIDE: "pixelcloud_project_presentation_slide",
        PLAYLIST_PAGE: "playlist_page",
        PLAYLISTS_CARD: "playlists_card",
        PLAYLISTS_TAB: "playlists_tab",
        PMV_BACK_CATALOG_QP: "pmv_back_catalog_qp",
        PMV_NEW_RELEASE_DIGEST: "pmv_new_release_digest",
        PMV_NEW_RELEASE_DIGEST_CHANNEL_VIEW: "pmv_new_release_digest_channel_view",
        PMV_NEW_RELEASE_QP: "pmv_new_release_qp",
        PMV_THIRD_PARTY_TRIGGERED_CTA: "pmv_third_party_triggered_cta",
        PMV_TOP_CHART_CTA: "pmv_top_chart_cta",
        PMV_UGC_CTA: "pmv_ugc_cta",
        PMV_YOUTUBE_STORY_LEVEL_CTA: "pmv_youtube_story_level_cta",
        POE_QP: "poe_qp",
        PROFILE_COVER: "profile_cover",
        PROFILE_FEATURED_SECTION: "profile_featured_section",
        PROFILE_OVERVIEW: "profile_overview",
        PROFILE_PLUS_LIVE_CARD: "profile_plus_live_card",
        PROFILE_PLUS_LIVE_VIDEOS_TAB: "profile_plus_live_videos_tab",
        PROFILE_PLUS_PINNED_POPULAR_VIDEO_CARD: "profile_plus_pinned_popular_video_card",
        PROFILE_PLUS_POPULAR_VIDEO_CARD: "profile_plus_popular_video_card",
        PROFILE_PLUS_PRODUCT_TOUR: "profile_plus_product_tour",
        PROFILE_PLUS_VIDEO_TAB: "profile_plus_video_tab",
        PROFILE_PLUS_VIDEOS_CARD: "profile_plus_videos_card",
        PROFILE_SWITCHER_ILLUSTRATION: "profile_switcher_illustration",
        PROFILE_VIDEO: "profile_video",
        PROFILE_VIDEO_HOVERCARD: "profile_video_hovercard",
        PROFILE_VIDEO_THUMB: "profile_video_thumb",
        PROTON: "proton",
        PUSH: "push",
        QUICK_PROMOTION: "quick_promotion",
        REDIRECTED_WATCH_SERP: "redirected_watch_serp",
        REMOTE_LEARNING_INSTRUCTOR_HOME: "remote_learning_instructor_home",
        REPORT_FLOW: "report_flow",
        RESULTS: "results",
        REVIEW: "review",
        RL_HUB: "rl_hub",
        ROBOTICS_RTC_PAGE: "robotics_rtc_page",
        ROBOTICS_TOUR_GUIDE_PAGE: "robotics_tour_guide_page",
        ROOMS_TRAY: "rooms_tray",
        SAVED_VIDEOS_QP: "saved_videos_qp",
        SEARCH_LIVE_VIDEO_MODULE: "search_live_video_module",
        SERIES_CARD: "series_card",
        SERP_INLINE_PLAYER: "serp_inline_player",
        SERP_THUMBNAIL_PREVIEW: "serp_thumbnail_preview",
        SERP_VIDEOS_TAB: "serp_videos_tab",
        SHORT_VIDEOS_SPOTLIGHT: "short_videos_spotlight",
        SHOWS_CATALOG: "shows_catalog",
        SINGLE_PAGE_CHANNEL: "single_page_channel",
        SLIDESHOW: "slideshow",
        SNOWLIFT: "snowlift",
        SOTTO_CATALOG: "sotto_catalog",
        SOTTO_CONSIDERATION_PAGE: "sotto_consideration_page",
        SPOTLIGHT_FEATURED: "spotlight_featured",
        SPOTLIGHT_LIVE: "spotlight_live",
        SPOTLIGHT_POPULAR: "spotlight_popular",
        SPOTLIGHT_UNKNOWN: "spotlight_unknown",
        SRT_REVIEW: "srt_review",
        STAGES_WAITING_ROOM_ONDEMAND: "stages_waiting_room_ondemand",
        STARS_ELIGIBLE_CREATOR_ONBOARDING_UPSELL_VIDEO: "stars_eligible_creator_onboarding_upsell_video",
        STARS_INELIGIBLE_CREATOR_ONBOARDING_UPSELL_VIDEO: "stars_ineligible_creator_onboarding_upsell_video",
        STORIES_VIDEO_PREVIEW: "stories_video_preview",
        STORY_TRAY_LIVE_DROPDOWN: "story_tray_live_dropdown",
        STORY_VIEWER_LIVE_CTA: "story_viewer_live_cta",
        STORY_VIEWER_LIVE_DROPDOWN: "story_viewer_live_dropdown",
        STORY_VIEWER_LIVE_STICKER: "story_viewer_live_sticker",
        STORY_VIEWER_LIVE_VIDEO_VIEW: "story_viewer_live_video_view",
        SUBS_SHARE_PROMOTIONAL_VIDEO_PREVIEW: "subs_share_promotional_video_preview",
        SUGGESTED_PAGES_TO_FOLLOW_AGG: "suggested_pages_to_follow_agg",
        TAHOE: "tahoe",
        TAHOE_COSTREAMING_THUMBNAIL: "tahoe_costreaming_thumbnail",
        TEXT_BASED_VIDEO_EDITOR_ON_COMET: "text_based_video_editor_on_comet",
        TIMEPASS: "timepass",
        TOPIC_ANIMALS: "topic_animals",
        TOPIC_BEAUTY: "topic_beauty",
        TOPIC_CHANNEL_LIVING_ROOM: "topic_channel_living_room",
        TOPIC_CRICKET: "topic_cricket",
        TOPIC_FEED: "topic_feed",
        TOPIC_FOLLOWING: "topic_following",
        TOPIC_FOLLOWING_CONTINUE_WATCHING: "topic_following_continue_watching",
        TOPIC_FOLLOWING_LATEST: "topic_following_latest",
        TOPIC_FOLLOWING_NOT_WATCHED: "topic_following_not_watched",
        TOPIC_FOOD: "topic_food",
        TOPIC_GAMING: "topic_gaming",
        TOPIC_INTEREST: "topic_interest",
        TOPIC_LIVE: "topic_live",
        TOPIC_MUSIC: "topic_music",
        TOPIC_NEWS: "topic_news",
        TOPIC_SAVED_VIDEOS: "topic_saved_videos",
        TOPIC_SHOWS: "topic_shows",
        TOPIC_SPORTS: "topic_sports",
        TOPICS: "topics",
        TPFC: "tpfc",
        TRAILER_OG_ATTACHMENT: "trailer_og_attachment",
        TRAILER_TIMELINE_COLLECTIONS: "trailer_timeline_collections",
        TRAILER_TIMELINE_UNIT: "trailer_timeline_unit",
        TRANSPARENCY_CONTENT_LIBRARY: "transparency_content_library",
        TRIVIA_GAME_ADMIN_DASHBOARD: "trivia_game_admin_dashboard",
        TV: "tv",
        UFI_COMMENT_ATTACHMENT: "ufi_comment_attachment",
        UNIFIED_EDITOR: "unified_editor",
        UNIFIED_TOFU: "unified_tofu",
        USER_VIDEO_TAB: "user_video_tab",
        VEP_SESSION: "vep_session",
        VEP_WAITING_ROOM: "vep_waiting_room",
        VIDEO_COMPOSER_CROSSPOSTING_REVIEW: "video_composer_crossposting_review",
        VIDEO_COPYRIGHT_PREVIEW: "video_copyright_preview",
        VIDEO_COPYRIGHT_SEGMENT_PREVIEW: "video_copyright_segment_preview",
        VIDEO_HOME_CATALOG: "video_home_catalog",
        VIDEO_HOME_CHANNEL: "video_home_channel",
        VIDEO_HOME_CRICKET: "video_home_cricket",
        VIDEO_HOME_EXPLORE: "discover",
        VIDEO_HOME_EXPLORE_TAB: "explore",
        VIDEO_HOME_INLINE: "video_home_inline",
        VIDEO_HOME_NOTIF_HUB: "notif_hub",
        VIDEO_HOME_PINEAPPLE_HOME: "video_home_pineapple_home",
        VIDEO_HOME_RAINBOW_QP: "video_home_rainbow_qp",
        VIDEO_HOME_THUMBNAIL_PREVIEW: "video_home_thumbnail_preview",
        VIDEO_HOME_TOP_SEARCHED_TV_MOVIES_KEYWORDS: "video_home_top_searched_tv_movies_keywords",
        VIDEO_HOME_TV_MOVIES: "video_home_tv_movies",
        VIDEO_HOME_VIDEO_NOT_FOUND: "video_home_video_not_found",
        VIDEO_HOME_WATCHLIST: "watchlist",
        VIDEO_INFRA_PORTAL_STARFOX_PLAYGROUND: "video_infra_portal_starfox_playground",
        VIDEO_INLINE_CHAINING: "video_inline_chaining",
        VIDEO_INSIGHTS_METADATA_SUMMARY: "video_insights_metadata_summary",
        VIDEO_INSIGHTS_MULTIVIEWER: "video_insights_multiviewer",
        VIDEO_INSIGHTS_OPSVIEW: "video_insights_opsview",
        VIDEO_INSPECTOR: "video_inspector",
        VIDEO_LIST: "video_list",
        VIDEO_LIST_AGGREGATION: "video_list_aggregation",
        VIDEO_PAGE_SPOTLIGHT_UNIT: "video_page_spotlight_unit",
        VIDEO_PAGE_UNSPECIFIED: "video_page_unspecified",
        VIDEO_PAGE_VIDEO_LIST: "video_page_video_list",
        VIDEO_WALL: "video_wall",
        VIDEOHUB_FEATURED: "videohub_featured",
        VIDEOHUB_LIVE: "videohub_live",
        VIDEOHUB_PLAYLIST: "videohub_playlist",
        VIDEOS_CARD: "videos_card",
        VIDEOS_TAB: "videos_tab",
        VOICES_PODCAST: "voices_podcast",
        VOTING_INFORMATION_CENTER: "voting_information_center",
        WATCH: "watch",
        WATCH_CASTING_QP: "watch_casting_qp",
        WATCH_CONTINUE_WATCHING: "watch_continue_watching",
        WATCH_CONTINUE_WATCHING_QP: "watch_continue_watching_qp",
        WATCH_CREATOR_QP: "watch_creator_qp",
        WATCH_EXPLORE_SURFACE_GCU: "watch_explore_surface_gcu",
        WATCH_EXPLORE_SURFACE_INTEREST: "watch_explore_surface_interest",
        WATCH_EXPLORE_SURFACE_NEW_RELEASES_PMV: "watch_explore_surface_new_releases_pmv",
        WATCH_EXPLORE_SURFACE_PAGES: "watch_explore_surface_pages",
        WATCH_EXPLORE_SURFACE_POPULAR_PMV: "watch_explore_surface_popular_pmv",
        WATCH_EXPLORE_SURFACE_PYML: "watch_explore_surface_pyml",
        WATCH_EXPLORE_SURFACE_TRENDING: "watch_explore_surface_trending",
        WATCH_EXPLORE_SURFACE_TRENDING_AUDIO: "watch_explore_surface_trending_audio",
        WATCH_EXPLORE_SURFACE_TRENDING_SUBTOPIC: "watch_explore_surface_trending_subtopic",
        WATCH_EXPLORE_SURFACE_TVM: "watch_explore_surface_tv_movie",
        WATCH_EXPLORE_TRENDING_REELS_CREATORS: "watch_explore_trending_reels_creators",
        WATCH_EXPLORE_TRENDING_UNIT: "watch_explore_trending_unit",
        WATCH_HISTORY: "watch_history",
        WATCH_LIKED_VIDEOS: "watch_liked_videos",
        WATCH_NULLSTATE_DISCOVERY_GCU: "watch_nullstate_discovery_gcu",
        WATCH_NULLSTATE_DISCOVERY_INTEREST: "watch_nullstate_discovery_interest",
        WATCH_NULLSTATE_DISCOVERY_PYML: "watch_nullstate_discovery_pyml",
        WATCH_ORIGINALS_QP: "watch_originals_qp",
        WATCH_PREMIUM_CONTENT_QP: "watch_premium_content_qp",
        WATCH_RACIAL_INJUSTICE_QP: "watch_racial_injustice_qp",
        WATCH_RAINBOW_QP: "watch_rainbow_qp",
        WATCH_SCROLL: "watch_scroll",
        WATCH_SEARCH_DISCOVER: "watch_search_discover",
        WATCH_SUBTOPIC_CHANNEL: "watch_subtopic_channel",
        WATCH_TOPIC_PILLS_TO_CHANNEL: "watch_topic_pills_to_channel",
        WATCH_VIDEO_HIGHLIGHTS_QP: "watch_video_highlights_qp",
        WATCHLIST_AGGREGATION: "watchlist_aggregation",
        WISP_WEBSITE: "wisp_website",
        WOODHENGE_COMET_SIGNUP: "woodhenge_comet_signup",
        WORK_CAPTIONS_REVIEW: "work_captions_review",
        WORK_CHAPTERS_EDITOR: "work_chapters_editor",
        WORK_EVENTS_BROADCASTS_TAB: "work_events_broadcasts_tab",
        WORK_TOP_OF_FEED_UNIT: "work_top_of_feed_unit",
        WORK_VIDEO_QP: "work_video_qp",
        WORK_WATCH_COLLECTIONS: "work_watch_collections",
        WORK_WATCH_COLLECTIONS_OFFICIAL: "work_watch_collections_official",
        WORK_WATCH_GROUPS: "work_watch_groups",
        WORK_WATCH_GROUPS_ALL: "work_watch_groups_all",
        WORK_WATCH_GROUPS_OUTER: "work_watch_groups_outer",
        WORK_WATCH_GROUPS_POPULAR: "work_watch_groups_popular",
        WORK_WATCH_HOME: "work_watch_home",
        WORK_WATCH_HOME_CAROUSEL: "work_watch_home_carousel",
        WORK_WATCH_HOME_CONTINUE_WATCHING: "work_watch_home_continue_watching",
        WORK_WATCH_HOME_EXPLORE_OTHER_GROUPS: "work_watch_home_explore_other_groups",
        WORK_WATCH_HOME_HEAR_ABOUT_LEADERS: "work_watch_home_hear_about_leaders",
        WORK_WATCH_HOME_POPULAR: "work_watch_home_popular",
        WORK_WATCH_HOME_RECENT_FROM_GROUPS: "work_watch_home_recent_from_groups",
        WORK_WATCH_HOME_RECENT_OTHER_GROUPS: "work_watch_home_recent_other_groups",
        WORK_WATCH_HOME_RECENTLY_LIVE: "work_watch_home_recently_live",
        WORK_WATCH_HOME_RECENTLY_WATCHED: "work_watch_home_recently_watched",
        WORK_WATCH_HOME_SAVED_VIDEOS: "work_watch_home_saved_videos",
        WORK_WATCH_LIVE: "work_watch_live",
        WORK_WATCH_LIVE_ALL: "work_watch_live_all",
        WORK_WATCH_LIVE_POPULAR: "work_watch_live_popular",
        WORKPLACE_INSIGHTS: "workplace_insights"
    });
    f["default"] = a
}), 66);
__d("VideoPlayerWwwFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1914651");
    b = d("FalcoLoggerInternal").create("video_player_www", a);
    e = b;
    g["default"] = e
}), 98);
__d("VideoPlayerLogger", ["invariant", "FBLogger", "VideoPlayerExperiments", "VideoPlayerHTML5Experiments", "VideoPlayerLoggerErrorStates", "VideoPlayerLoggerErrors", "VideoPlayerLoggerFallbackReasons", "VideoPlayerLoggerPlayerStates", "VideoPlayerLoggerSource", "VideoPlayerWwwFalcoEvent", "getVideoBrowserTabId", "performanceAbsoluteNow"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = 200,
        j = b("VideoPlayerHTML5Experiments").useBanzaiVitalForLive,
        k = b("VideoPlayerHTML5Experiments").discerningAbandonStallLogging;

    function l(a, b, c, d) {
        return babelHelpers["extends"]({
            event_name: a,
            source: c,
            scriptPath: d
        }, b)
    }
    var m = 5e3,
        n = function() {
            return b("VideoPlayerHTML5Experiments").useMonotonicallyIncreasingTimers ? (h || (h = b("performanceAbsoluteNow")))() : Date.now()
        };
    a = function() {
        function a(a, b) {
            this.$28 = [], this.$29 = null, this.$30 = 0, this.$31 = !1, this.$2 = a, this.$3 = null, this.$5 = {}, this.$4 = b, this.$7 = 0, this.$8 = 0, this.$9 = 0, this.$10 = 0, this.$6 = [], this.$19 = 0, this.$20 = 0, this.$11 = 0, this.$27 = !1, this.$16 = !1, this.$32(), this.$33()
        }
        var c = a.prototype;
        c.updateSource = function(a) {
            this.$2 = a
        };
        c.getSource = function() {
            return this.$2
        };
        c.disable = function() {
            this.$31 = !0
        };
        c.isDisabled = function() {
            return this.$31
        };
        c.logEvent = function(a, c) {
            var d = this;
            c = babelHelpers["extends"]({}, c, this.$4);
            c.initial_event = !Object.prototype.hasOwnProperty.call(this.$5, a);
            Object.prototype.hasOwnProperty.call(c, "time_ms") || (c.time_ms = n());
            Object.prototype.hasOwnProperty.call(c, "browser_tab_id") || (c.browser_tab_id = b("getVideoBrowserTabId")());
            Object.prototype.hasOwnProperty.call(c, "time") || (c.time = Math.round(c.time_ms / 1e3));
            c.is_stalling = this.$34();
            c.error_user_info = this.$35(c.error_user_info);
            this.$3 && Object.assign(c, this.$3);
            b("VideoPlayerExperiments").logVideoFramesInfo && this.$36();
            switch (a) {
                case "paused":
                case "finished_playing":
                    if (this.$24) {
                        var e = this.$24,
                            f = e.getABREvaluation();
                        c.ideal_samples = f.idealSamples;
                        c.conservative_samples = f.conservativeSamples;
                        c.aggressive_samples = f.aggressiveSamples;
                        c.conservative_resolution_constrained_samples = f.conservativeResolutionConstrainedSamples;
                        c.last_quality_switch_reason = f.lastQualitySwitchReason;
                        c.reason && e.setLastQualitySwitchReason(c.reason)
                    }
                    f = typeof this.$25 === "function" && this.$25();
                    e = typeof this.$26 === "function" && this.$26();
                    typeof e === "number" && typeof f === "number" && (c.dropped_frame_count = f, c.total_frame_count = e);
                    break
            }
            switch (a) {
                case "started_playing":
                case "unpaused":
                    this.$27 = !0;
                    break;
                case "finished_playing":
                case "error":
                case "paused":
                    this.$27 = !1;
                    break
            }
            switch (a) {
                case "requested_playing":
                    this.$32();
                    this.$37();
                    this.$5.started_playing ? c.state = b("VideoPlayerLoggerPlayerStates").UNPAUSED : c.state = b("VideoPlayerLoggerPlayerStates").STARTED;
                    break;
                case "started_playing":
                case "unpaused":
                case "finished_playing":
                case "cancelled_requested_playing":
                case "error":
                case "paused":
                case "representation_ended":
                case "heart_beat":
                    a === "error" && c.state === b("VideoPlayerLoggerErrorStates").PLAYER_FAILURE && !this.$5.started_playing && (c.state = b("VideoPlayerLoggerPlayerStates").STARTED);
                    if (a === "error" && b("VideoPlayerExperiments").disableStallLoggingForError) break;
                    if (a == "representation_ended" && !this.$5.started_playing) break;
                    if (a === "heart_beat" && (!this.$5.started_playing || !b("VideoPlayerHTML5Experiments").heartbeatUpdateWatchTimeV2 || this.$34())) break;
                    a === "heart_beat" && (c.v2_heart_beat = !0);
                    (a === "started_playing" || a === "unpaused") && (this.$11 = c.time_ms, this.$38());
                    if (a === "error" && c.state !== b("VideoPlayerLoggerErrorStates").PLAYBACK_FAILURE) break;
                    a === "cancelled_requested_playing" && (this.$5.started_playing ? c.state = b("VideoPlayerLoggerPlayerStates").UNPAUSED : c.state = b("VideoPlayerLoggerPlayerStates").STARTED);
                    this.$39();
                    this.$40();
                    (a === "paused" || a === "finished_playing") && (k && a === "finished_playing" && this.$38(), c.recent_stalls_count = this.$41());
                    this.$42();
                    this.$43(c);
                    this.$44(c);
                    this.$33();
                    k && this.$38();
                    this.$32();
                    break
            }
            if (b("VideoPlayerExperiments").logVideoFramesInfo) switch (a) {
                case "started_playing":
                case "unpaused":
                case "finished_playing":
                case "paused":
                case "heart_beat":
                    f = this.$45();
                    f && (c.video_frames_info = f);
                    break
            }
            e = {
                logData: c,
                event: a,
                scriptPath: this.$1,
                source: this.$2
            };
            a || b("FBLogger")("video").warn("Missing event name");
            this.$5[a] = !0;
            if (this.$2 === "animated_image_share") return null;
            if (this.isDisabled()) return null;
            c.ad_client_token || b("VideoPlayerHTML5Experiments").useVitalForEverything || j && c.playback_is_live_streaming || b("VideoPlayerHTML5Experiments").useVitalForClosing && (a === "paused" || a === "finished_playing" || a === "heart_beat") || b("VideoPlayerHTML5Experiments").useVitalForOpening && (a === "unpaused" || a === "started_playing") ? b("VideoPlayerWwwFalcoEvent").logImmediately(function() {
                return l(a, c, d.$2, d.$1)
            }) : b("VideoPlayerWwwFalcoEvent").log(function() {
                return l(a, c, d.$2, d.$1)
            });
            return e
        };
        c.setScriptPath = function(a) {
            this.$1 = a
        };
        c.setFTData = function(a) {
            this.$3 = a
        };
        c.setABRQualityTracker = function(a) {
            this.$24 = a
        };
        c.setFrameCountGetters = function(a, b) {
            this.$25 = a, this.$26 = b
        };
        c.startBuffering = function(a) {
            if (b("VideoPlayerHTML5Experiments").disableBufferingBeforeStartedPlaying && !this.$5.started_playing) return;
            this.$37(a)
        };
        c.endBuffering = function() {
            if (b("VideoPlayerHTML5Experiments").disableBufferingBeforeStartedPlaying && !this.$5.started_playing) return;
            this.$40();
            this.$46();
            this.$39();
            this.$42()
        };
        c.startInterrupt = function() {
            this.$47()
        };
        c.endInterrupt = function() {
            this.$40(), this.$46()
        };
        c.$34 = function() {
            return this.$15 > 0
        };
        c.$37 = function(a) {
            if (this.$34()) return;
            this.$16 = this.$27;
            this.$15 = Date.now();
            a !== void 0 && this.$5.started_playing && (this.$17 = a)
        };
        c.$47 = function() {
            if (this.$48()) return;
            this.$21 = Date.now()
        };
        c.$48 = function() {
            return this.$21 > 0
        };
        c.$49 = function() {
            return !this.$48() ? 0 : Date.now() - this.$21
        };
        c.$50 = function() {
            return this.$34() ? Date.now() - this.$15 : 0
        };
        c.$40 = function() {
            if (this.$48()) {
                var a = this.$49();
                this.$22 += a;
                this.$20 += a;
                this.$23 += 1;
                this.$19 += 1
            }
        };
        c.$46 = function() {
            this.$48() && (this.$21 = 0)
        };
        c.$33 = function() {
            this.$22 = 0, this.$23 = 0, this.$46()
        };
        c.$39 = function() {
            if (this.$34()) {
                var a = this.$50();
                this.$17 !== null && (this.$18 = a);
                this.$14 += a;
                this.$8 += a;
                this.$12++;
                a > 200 && this.$13++;
                this.$7++;
                this.$16 && (this.$10 += a, this.$9++, this.$16 = !1);
                k && this.$6.push(n())
            }
        };
        c.$42 = function() {
            this.$34() && (this.$15 = 0)
        };
        c.$35 = function(a) {
            return a && typeof a === "object" ? JSON.stringify(a) : a
        };
        c.$36 = function() {
            var a = this;
            this.$29 || (this.$29 = setInterval(function() {
                return a.$51()
            }, i))
        };
        c.$51 = function() {
            var a = typeof this.$26 === "function" && this.$26(),
                b = typeof this.$25 === "function" && this.$25();
            typeof a === "number" && typeof b === "number" && (a !== this.$30 || b !== 0) && (this.$28.push({
                time_stamp: n(),
                total_frames: a,
                dropped_frames: b
            }), this.$30 = a)
        };
        c.$45 = function() {
            if (!this.$28.length) return null;
            var a = [];
            for (var b = this.$28, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= b.length) break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                a.push([e.time_stamp, e.total_frames, e.dropped_frames])
            }
            this.$28 = [];
            return JSON.stringify(a)
        };
        c.stopCollectingVideoFramesInfo = function() {
            clearInterval(this.$29), this.$29 = null, this.$28 = []
        };
        c.getCumulativeStallCount = function() {
            return this.$7
        };
        c.getCumulativeInPlayStallCount = function() {
            return this.$9
        };
        c.getStallCount = function() {
            return this.$12
        };
        c.getCumulativeStallTime = function() {
            return this.$8 + this.$50()
        };
        c.getCumulativeInPlayStallTime = function() {
            return this.$10 + (this.$16 ? this.$50() : 0)
        };
        c.getCumulativeInterruptCount = function() {
            return this.$19
        };
        c.getCumulativeInterruptTime = function() {
            return this.$20 + this.$49()
        };
        c.$43 = function(a) {
            a.stall_time = Math.max(0, this.$14), a.stall_count = this.$12, a.stall_count_200_ms = this.$13, this.$18 && (a.first_stall_time = this.$18, a.first_stall_start_position = this.$17)
        };
        c.$44 = function(a) {
            a.interrupt_time = Math.max(0, this.$22), a.interrupt_count = this.$23
        };
        c.$41 = function() {
            var a = n(),
                b = a - m;
            this.$6 = this.$6.filter(function(a) {
                return a >= b
            });
            k || this.$12 > 0 && this.$6.push(a);
            return this.$6.length
        };
        c.$32 = function() {
            this.$14 = 0, this.$15 = 0, this.$12 = 0, this.$13 = 0, this.$17 = null, this.$18 = 0
        };
        c.$38 = function() {
            this.$6 = []
        };
        c.getFTdata = function() {
            return this.$3
        };
        return a
    }();
    a.Sources = b("VideoPlayerLoggerSource");
    a.Errors = b("VideoPlayerLoggerErrors");
    a.FallbackReasons = b("VideoPlayerLoggerFallbackReasons");
    a.ErrorStates = b("VideoPlayerLoggerErrorStates");
    a.PlayerStates = b("VideoPlayerLoggerPlayerStates");
    e.exports = a
}), null);
__d("VideoPlayerReasonTransitionHelper", ["VideoPlayerReasonTransitionExperiment"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.getReason = function() {
            return !c("VideoPlayerReasonTransitionExperiment").provideReason ? null : this.$1
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("VideoPlayerShakaBandwidthEstimator", ["CacheStorage", "Run", "requireWeak"], (function(a, b, c, d, e, f, g) {
    var h;
    c("requireWeak")("Shaka", function(a) {
        h = a.util.EWMACacheBandwidthEstimator
    });
    var i = null,
        j = !1,
        k = 30,
        l = 2e6,
        m = 25e4,
        n = 123034;
    a = function() {
        function a() {
            var a = this,
                b = new(c("CacheStorage"))("localstorage", "_video_"),
                e = b.get("bandwidthEstimate");
            this.$1 = {
                isMockObject: !0,
                getBandwidth: function(a) {
                    return e
                },
                getFastMovingBandwidth: function() {
                    return e
                }
            };
            h && (this.$1 = new h(k, l, function() {}, e), this.$1.isMockObject = !1);
            d("Run").onUnload(function() {
                b.set("bandwidthEstimate", a.$1.getBandwidth())
            })
        }
        var b = a.prototype;
        b.getEstimator = function() {
            return this.$1
        };
        a.getInstance = function() {
            (i === null || i.getEstimator().isMockObject && h) && (i = new a());
            return i
        };
        a.getEstimator = function() {
            return a.getInstance().getEstimator()
        };
        a.getBandwidth = function(b) {
            var c = a.getEstimator();
            return c.getBandwidth(b)
        };
        a.getBandwidthByVideoType = function(b) {
            return a.getBandwidth(a.getBandwidthModel(b))
        };
        a.getBandwidthModel = function(a) {
            return a ? "aggressive" : "conservative"
        };
        a.isAutoplayBandwidthRestrained = function(b) {
            var c = a.getEstimator(),
                d;
            j ? d = c.getFastMovingBandwidth() : d = c.getBandwidth();
            c = b ? m : n;
            d === null || d >= c ? j = !1 : j = !0;
            return j
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("VideoPlayerShakaConfigContextProvider", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var b = a.prototype;
        b.setContext = function(a, b) {
            if (this.$1[a] !== b) {
                var c;
                this.$1 = babelHelpers["extends"]({}, this.$1, (c = {}, c[a] = b, c))
            }
        };
        b.setAllContexts = function(a) {
            this.$1 = a
        };
        b.getAllContexts = function() {
            return this.$1
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("VideoPlayerShakaConfig", ["VideoPlayerContextSensitiveConfigResolver", "VideoPlayerShakaConfigContextProvider"], (function(a, b, c, d, e, f, g) {
    var h = {};
    a = function() {
        function a(a, b, d) {
            this.$1 = new(c("VideoPlayerShakaConfigContextProvider"))(), this.$2 = b || null, this.$3 = new(c("VideoPlayerContextSensitiveConfigResolver"))(d), this.$3.setContexts(a || {}), a && this.$1.setAllContexts(a)
        }
        a.setGlobalOverrideConfig = function(a) {
            h = a
        };
        var b = a.prototype;
        b.setContext = function(a, b) {
            var c = this.$1.getAllContexts();
            this.$1.setContext(a, b);
            a = this.$1.getAllContexts();
            c !== a && this.$3.setContexts(a)
        };
        b.setOverrideConfig = function(a) {
            this.$2 = a
        };
        b.getBool = function(a, b) {
            a = this.$4(a, b);
            return typeof a === "boolean" ? a : b
        };
        b.getNumber = function(a, b) {
            a = this.$4(a, b);
            return typeof a === "number" ? a : b
        };
        b.getString = function(a, b) {
            a = this.$4(a, b);
            return typeof a === "string" ? a : b
        };
        b.getAllContexts = function() {
            return this.$1.getAllContexts()
        };
        b.$4 = function(a, b) {
            if (!!h && typeof h[a] === typeof b) return h[a];
            if (typeof this.$3.getValue(a) === typeof b) return this.$3.getValue(a);
            return !!this.$2 && typeof this.$2[a] === typeof b ? this.$2[a] : null
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("VideoPlayerUIComponentDrawerController", ["VideoPlayerUIComponentDrawer"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a, b) {
        return a.getPriority() - b.getPriority()
    };
    a = function() {
        function a() {
            this.$1 = []
        }
        var b = a.prototype;
        b.register = function(a, b) {
            var d = this;
            b = new(c("VideoPlayerUIComponentDrawer"))(a, b);
            b.addListener("reserve", function() {
                return d.$2(a)
            });
            b.addListener("release", function() {
                return d.$2(a)
            });
            b.addListener("heightChange", function() {
                return d.$2(a)
            });
            this.$1.push(b);
            this.$1.sort(h);
            return b
        };
        b.$2 = function(a) {
            var b = 0;
            this.$1.forEach(function(c) {
                c.getPriority() > a && c.emit("reposition", b), c.isReserved() && (b += c.getHeight())
            })
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("ViewabilityVideoElement", ["UITinyViewportAction", "getElementPosition", "getViewportDimensions"], (function(a, b, c, d, e, f, g) {
    var h = 42;
    a = function() {
        function a(a, b, c, d) {
            d === void 0 && (d = !1), this.$1 = a, this.$2 = b, this.$3 = c, this.$4 = d
        }
        var b = a.prototype;
        b.feedViewabilityPercentage = function() {
            var a = c("UITinyViewportAction").isTinyHeight();
            return this.$5(!a)
        };
        b.viewabilityPercentage = function() {
            return this.$5(!1)
        };
        b.isTopElement = function(a, b, c) {
            b = document.elementFromPoint(b, c);
            return b === a || !!a && a.contains(b) || !!b && b.contains(a)
        };
        b.$5 = function(a) {
            var b = c("getViewportDimensions")(),
                d = b.width;
            b = b.height;
            var e = this.$4 && this.$3 ? this.$3 : this.$1;
            e = c("getElementPosition")(e);
            if (e.width === 0 || e.height === 0) return 0;
            var f = e.x,
                g = e.x + e.width,
                i = e.y,
                j = e.y + e.height;
            a = a ? h : 0;
            if (g <= 0 || f >= d || j <= a || i >= b) return 0;
            g = Math.min(g, d) - Math.max(f, 0);
            d = Math.min(j, b) - Math.max(i, a);
            return g * d * 100 / (e.width * e.height)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("VideoViewabilityLogging", ["VideoPlayerExperiments", "ViewabilityVideoElement", "performanceNow"], (function(a, b, c, d, e, f, g) {
    var h, i = new Map([
        [0, 0],
        [25, 25],
        [50, 50],
        [75, 75],
        [100, 100]
    ]);
    a = function() {
        function a(a, b, d, e) {
            var f = this;
            this.$14 = function(a) {
                if (!f.$8()) return;
                a = (h || (h = c("performanceNow")))();
                a - f.$1 > c("VideoPlayerExperiments").viewabilityPollingRate && (f.$12(), f.$1 = a);
                f.$13()
            };
            this.$11 = function() {
                f.$16()
            };
            this.$10 = function() {
                f.setLastLoggedViewability(f.getViewability()), f.$15()
            };
            this.$1 = 0;
            this.$5 = a;
            this.$6 = new(c("ViewabilityVideoElement"))(b, d, e, this.$5.isSpherical());
            this.$7()
        }
        var b = a.prototype;
        b.getViewability = function() {
            var a;
            this.$5.isInline() ? a = this.$6.feedViewabilityPercentage() : a = this.$6.viewabilityPercentage();
            c("VideoPlayerExperiments").pauseVideosOnViewability && a < 50 && this.$8() && this.$5.pause();
            return this.$9(a)
        };
        b.setLastLoggedViewability = function(a) {
            this.$4 = a
        };
        b.$7 = function() {
            this.$5.addListener("beginPlayback", this.$10), this.$5.addListener("pausePlayback", this.$11)
        };
        b.$12 = function() {
            var a = this.getViewability();
            a != this.$4 && (this.$5.logEvent("viewability_changed", {
                current_viewability_percentage: a,
                last_viewability_percentage: this.$4
            }), this.$4 = a)
        };
        b.$13 = function() {
            var a = this,
                b = c("VideoPlayerExperiments").organicViewabilityLoggingUseSetTimeout,
                d = c("VideoPlayerExperiments").organicViewabilityLoggingPollingTimeMs;
            b = !this.$5.isAd() && b ? function() {
                a.$3 = window.setTimeout(function() {
                    return a.$14((h || (h = c("performanceNow")))())
                }, d)
            } : function() {
                a.$2 = window.requestAnimationFrame(a.$14)
            };
            b()
        };
        b.$15 = function() {
            this.$13()
        };
        b.$16 = function() {
            this.$17()
        };
        b.$17 = function() {
            var a = this,
                b = c("VideoPlayerExperiments").organicViewabilityLoggingUseSetTimeout;
            b = !this.$5.isAd() && b ? function() {
                return window.clearTimeout(a.$3)
            } : function() {
                return window.cancelAnimationFrame(a.$2)
            };
            b()
        };
        b.$8 = function() {
            return this.$5.getVideoAPI().isPaused() !== void 0 ? !this.$5.getVideoAPI().isPaused() : this.$5.getState() === "playing"
        };
        b.$9 = function(a) {
            var b = -2;
            if (a <= 0) return b;
            for (var c = i, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var f;
                if (d) {
                    if (e >= c.length) break;
                    f = c[e++]
                } else {
                    e = c.next();
                    if (e.done) break;
                    f = e.value
                }
                f = f;
                var g = f[0];
                f = f[1];
                a >= g && (b = f)
            }
            return b
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("WebSessionExtender", ["WebSession", "clearInterval", "cr:913", "setInterval"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 2e4,
        i = new Set(),
        j = null;

    function a(a, e) {
        e === void 0 && (e = "extender"), i.add(a), j == null && (d("WebSession").extend(Date.now() + h + 2e3), j = c("setInterval")(function() {
            d("WebSession").extend(Date.now() + h + 2e3), b("cr:913") && new(b("cr:913"))().setClientTime(Date.now()).setWebsessionID(d("WebSession").getId()).setReason(e).log()
        }, h))
    }

    function e(a) {
        i["delete"](a);
        a = i.size;
        a === 0 && j != null && (c("clearInterval")(j), j = null)
    }
    g.subscribe = a;
    g.unsubscribe = e
}), 98);
__d("XVideoDataController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/video/video_data/", {
        video_id: {
            type: "String",
            required: !0
        },
        width: {
            type: "Int"
        },
        height: {
            type: "Int"
        },
        scrubbing_preference: {
            type: "Int"
        },
        source: {
            type: "String"
        },
        preferred_projection: {
            type: "Enum",
            enumType: 1
        },
        supports_html5_video: {
            type: "Bool",
            defaultValue: !0
        },
        is_ad: {
            type: "Bool",
            defaultValue: !1
        },
        force_flash: {
            type: "Bool",
            defaultValue: !1
        },
        is_omnistab_preview_select_revert: {
            type: "Bool",
            defaultValue: !1
        }
    })
}), null);
__d("enumerate", [], (function(a, b, c, d, e, f) {
    "use strict";
    b = function(b) {
        return b.FB_enumerate
    }(a);
    f["default"] = b
}), 66);
__d("forwardEvent", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        return a.addListener(c, function() {
            for (var a = arguments.length, d = new Array(a), e = 0; e < a; e++) d[e] = arguments[e];
            return b.emit.apply(b, [c].concat(d))
        })
    }
    f["default"] = a
}), 66);
__d("getVideoComponentName", [], (function(a, b, c, d, e, f) {
    function a(a) {
        if (a != null) {
            var b = null;
            a.prototype && a.prototype.constructor ? b = a.prototype.constructor : a.constructor && (b = a.constructor);
            if (b && b.name) return b.name;
            if (typeof a.toString === "function") return a.toString()
        }
        return null
    }
    f["default"] = a
}), 66);
__d("VideoPlayerController", ["csx", "cx", "invariant", "Arbiter", "Banzai", "Bootloader", "CSS", "CVCv3VideoControllerHelper", "CaptionSettings", "CurrentUser", "DOM", "DOMDimensions", "DOMQuery", "DelegatedVideoPriorityAdjuster", "ErrorUtils", "EventEmitter", "FBLogger", "FullScreen", "LiveVideoCopyrightActionSubscription", "MediaController", "Parent", "Promise", "Run", "SRTVideoData", "ScriptPath", "ShakaConstants", "SphericalVideoPlayerEvents", "SubscriptionsHandler", "TahoeVariables", "URI", "VideoAsyncLoggerHelper", "VideoChannelViewChainLengthManager", "VideoControllerPlayingStateEmitter", "VideoLiveTrace", "VideoMimeTypes", "VideoPermalinkURI", "VideoPlaybackQuality", "VideoPlayerABRQualityTracker", "VideoPlayerApiEvents", "VideoPlayerConnectionQuality", "VideoPlayerExperiments", "VideoPlayerFormatsMap", "VideoPlayerHTML5Experiments", "VideoPlayerLogger", "VideoPlayerLoggerErrorStates", "VideoPlayerLoggerFallbackReasons", "VideoPlayerMemLeakExperiments", "VideoPlayerQualitiesArray", "VideoPlayerReasonTransitionHelper", "VideoPlayerResizeSettings", "VideoPlayerShakaBandwidthEstimator", "VideoPlayerShakaConfig", "VideoPlayerStateBasedLoggingEvents", "VideoPlayerUIComponentDrawer", "VideoPlayerUIComponentDrawerController", "VideoPlayerVolumeSettings", "VideoViewabilityKeyEvents", "VideoViewabilityLogging", "VideoVisibilityObserver", "VideosRenderingInstrumentation", "ViewportTrackingHelper", "Visibility", "WebSessionExtender", "XVideoDataController", "canVideoPlayType", "clearInterval", "clearTimeout", "collectDataAttributes", "cr:4225", "enumerate", "forwardEvent", "getContextualParent", "getElementPosition", "getFullScreenElement", "getVideoComponentName", "getViewportDimensions", "gkx", "guid", "ifRequired", "logVideosClickTracking", "mapObject", "performanceAbsoluteNow", "requireWeak", "setInterval", "setTimeout", "uniqueID"], (function(a, b, c, d, e, f, g, h, i, j) {
    var k, l, m, n, o, p = null;
    c("requireWeak")("LiveVideoPlayerStore", function(a) {
        return p = a
    });
    var q = 1;

    function r() {
        return c("VideoPlayerHTML5Experiments").useMonotonicallyIncreasingTimers ? (l || (l = c("performanceAbsoluteNow")))() : Date.now()
    }
    a = function(a) {
        babelHelpers.inheritsLoose(e, a);

        function e(b, e) {
            var f, g = b.video_id,
                h = b.video_ids,
                i = b.video_url,
                j = b.video_urls,
                k = b.chaining_token,
                l = b.video_channel_id,
                n = b.video_list_id,
                p = b.reaction_video_channel_type,
                q = b.reaction_video_channel_subtype,
                s = b.source,
                t = b.ad_client_token,
                u = b.should_autoplay,
                v = b.immediateplay_reason,
                w = b.player_version,
                x = b.autoplay_setting,
                y = b.apiModule,
                z = b.apiConfig,
                A = b.useInlineFallback,
                B = b.accessToken,
                C = b.permalinkShareID,
                D = b.projection,
                E = b.playerOrigin,
                F = b.playerSuborigin,
                G = b.playerSuboriginDerived,
                H = b.isBroadcast,
                I = b.isInstreamAd,
                J = b.customLiveManifestUrlParams,
                K = b.components,
                L = b.trackingCodes,
                M = b.alwaysShowCaptions,
                N = b.disableLogging,
                O = b.captionSettings,
                P = b.captionsAutogeneratedIndicatorConfig,
                Q = b.video_path,
                R = b.customLoggingProps,
                S = b.broadcasterOrigin,
                T = b.allowCrossPageTransition,
                U = b.isReactPlayer,
                V = b.offsettype,
                W = b.offsetvalue,
                aa = b.upstreamPlayerSource,
                ba = b.shouldLogVideoViewability,
                ca = b.broadcastId,
                da = b.isAdsPreview,
                ea = b.isInjectedAds,
                fa = b.isBroadcaster,
                ga = b.keepPlayingOnDialog,
                X = b.liveLinearChannelId,
                Y = b.device_id,
                Z = b.iframeEmbedReferrer;
            b = b.positionInUnit;
            var ha = e.root_element,
                ia = e.container_element;
            e = e.video_element;
            f = a.call(this) || this;
            f.$VideoPlayerController22 = !1;
            f.$VideoPlayerController40 = !1;
            f.$VideoPlayerController78 = new Set(c("VideoPlayerStateBasedLoggingEvents").StateBasedLoggingEventNames);
            f.$VideoPlayerController79 = 0;
            f.$VideoPlayerController111 = [];
            f.$VideoPlayerController117 = null;
            f.$VideoPlayerController118 = null;
            f.$VideoPlayerController119 = new(c("EventEmitter"))();
            f.$VideoPlayerController123 = null;
            f.$VideoPlayerController125 = !1;
            f.emitHeartbeat = function() {
                if (!f.isState("playing") || !f.getVideoNode()) {
                    f.stopHeartbeat();
                    f.$VideoPlayerController20.stopUnifiedCVC();
                    return
                }
                if (c("VideoPlayerHTML5Experiments").heartbeatSkipOnBuffering && f.isBuffering()) return;
                f.getVideoAPI().logHeartbeat()
            };
            f.$VideoPlayerController165 = function() {
                if (!c("VideoPlayerExperiments").allowBufferingErrorForHiddenTab && c("Visibility").isHidden()) {
                    f.$VideoPlayerController164();
                    f.$VideoPlayerController99 = c("setTimeout")(f.$VideoPlayerController165, f.$VideoPlayerController163());
                    return
                }
                var a = f.getVideoAPI().isPaused() !== void 0 ? !f.getVideoAPI().isPaused() : f.getState() === "playing";
                a && (f.logError({
                    error: "BUFFERING_TIMEOUT",
                    message: "video has been in buffering state for over " + f.$VideoPlayerController163() + "ms.",
                    isPlayback: f.isPlayRequestPending()
                }), f.$VideoPlayerController164(), f.emit("error", d("VideoPlayerLoggerFallbackReasons").TIMEOUT))
            };
            f.$VideoPlayerController114 = c("guid")();
            f.$VideoPlayerController48 = 0;
            f.$VideoPlayerController26 = 0;
            f.$VideoPlayerController25 = new Map();
            f.$VideoPlayerController81 = {};
            R && f.setLogEntryPropertyGetters(R);
            if (u === void 0) throw new Error("Must pass should_autoplay to " + f.constructor.name + "!");
            f.$VideoPlayerController125 = (R = N) != null ? R : !1;
            f.$VideoPlayerController124 = Z;
            f.$VideoPlayerController115 = b;
            f.$VideoPlayerController24 = new(c("VideoPlayerUIComponentDrawerController"))();
            f.$VideoPlayerController13 = new Map();
            f.$VideoPlayerController61 = D;
            f.$VideoPlayerController1 = B;
            f.$VideoPlayerController71 = !!u;
            f.$VideoPlayerController72 = v;
            f.$VideoPlayerController8 = x;
            f.$VideoPlayerController2 = t;
            f.$VideoPlayerController55 = !1;
            f.$VideoPlayerController91 = e;
            f.$VideoPlayerController70 = ha;
            f.$VideoPlayerController15 = ia;
            f.$VideoPlayerController35 = !1;
            f.$VideoPlayerController36 = !1;
            f.$VideoPlayerController60 = w;
            f.$VideoPlayerController90 = g || h && h[0] || "";
            f.$VideoPlayerController93 = i || j && j[0];
            f.$VideoPlayerController92 = Q;
            f.$VideoPlayerController11 = k;
            f.$VideoPlayerController87 = l;
            f.$VideoPlayerController88 = n;
            f.$VideoPlayerController56 = C;
            f.$VideoPlayerController57 = E;
            f.$VideoPlayerController58 = F || s;
            f.$VideoPlayerController59 = (N = G) != null ? N : null;
            f.$VideoPlayerController33 = H;
            f.$VideoPlayerController41 = I;
            f.$VideoPlayerController19 = (R = J) != null ? R : null;
            f.$VideoPlayerController83 = L;
            f.$VideoPlayerController3 = M;
            f.$VideoPlayerController75 = O == null ? d("CaptionSettings").DefaultCaptionSettings : O;
            f.$VideoPlayerController76 = P;
            f.$VideoPlayerController31 = c("uniqueID")();
            f.$VideoPlayerController67 = p;
            f.$VideoPlayerController68 = q;
            f.$VideoPlayerController118 = ca;
            f.$VideoPlayerController120 = da;
            f.$VideoPlayerController121 = ea;
            f.$VideoPlayerController122 = ga;
            f.$VideoPlayerController5 = y;
            f.$VideoPlayerController4 = z;
            f.$VideoPlayerController77 = f.$VideoPlayerController5.getStartMutedFromConfig(f.$VideoPlayerController4);
            f.$VideoPlayerController45 = f.$VideoPlayerController5.getStreamTypeFromConfig(f.$VideoPlayerController4);
            f.$VideoPlayerController44 = f.$VideoPlayerController5.getIsServableViaFbmsFromConfig(f.$VideoPlayerController4);
            f.$VideoPlayerController42 = f.$VideoPlayerController5.getIsPlayingLiveFromConfig(f.$VideoPlayerController4);
            f.$VideoPlayerController43 = f.$VideoPlayerController5.getIsGamingFromConfig(f.$VideoPlayerController4);
            f.isLiveVideo() && f.$VideoPlayerController5.getIsLiveTraceEnabledOnPlayer(f.$VideoPlayerController4) && f.$VideoPlayerController118 && (f.$VideoPlayerController117 = new(c("VideoLiveTrace"))(f.$VideoPlayerController118, f.$VideoPlayerController114, c("CurrentUser").getAccountID()));
            f.$VideoPlayerController113 = !!ba;
            f.$VideoPlayerController38 = f.$VideoPlayerController5.getIsSpherical(f.$VideoPlayerController4);
            Z = {
                is_ad: f.isAd(),
                is_live: f.$VideoPlayerController42,
                player_format: f.$VideoPlayerController126(f.isFullscreen(), s) || "unknown",
                connection_quality: d("VideoPlayerConnectionQuality").evaluate(c("VideoPlayerShakaBandwidthEstimator").getBandwidth),
                is_spherical: f.$VideoPlayerController38,
                content_category: "general",
                latency_level: "normal",
                servable_via_fbms: void 0,
                servable_via_fmbs: void 0
            };
            Z.servable_via_fmbs = !1;
            f.$VideoPlayerController14 = new(c("VideoPlayerShakaConfig"))(Z);
            f.$VideoPlayerController123 = X;
            f.$VideoPlayerController20 = new(c("CVCv3VideoControllerHelper"))(babelHelpers.assertThisInitialized(f));
            f.$VideoPlayerController125 && f.$VideoPlayerController20.disable();
            B && f.$VideoPlayerController20.setAccessToken(B);
            f.$VideoPlayerController20.setLinearChannelID(X);
            f.$VideoPlayerController45 === "progressive" ? f.$VideoPlayerController105 = c("VideoPlayerExperiments").progressiveBufferingErrorTimeout : f.isLiveVideo() ? f.$VideoPlayerController105 = c("VideoPlayerExperiments").liveBufferingErrorTimeout : f.$VideoPlayerController105 = c("VideoPlayerExperiments").bufferingErrorTimeout;
            f.$VideoPlayerController106 = f.$VideoPlayerController105;
            c("VideoPlayerExperiments").createVideoVisibilityObserver && f.$VideoPlayerController127();
            f.$VideoPlayerController37 = f.$VideoPlayerController5.getIsFacecastAudioFromConfig(f.$VideoPlayerController4);
            f.$VideoPlayerController85 = !!A;
            f.$VideoPlayerController97 = new Set();
            f.$VideoPlayerController98 = S;
            f.$VideoPlayerController99 = null;
            f.$VideoPlayerController100 = !!T;
            f.$VideoPlayerController101 = !!U;
            f.$VideoPlayerController102 = f.getContainerNode().style.paddingBottom;
            f.$VideoPlayerController103 = V;
            f.$VideoPlayerController104 = W;
            f.$VideoPlayerController107 = !1;
            f.$VideoPlayerController108 = !1;
            f.$VideoPlayerController84 = aa;
            f.$VideoPlayerController23 = c("Arbiter").subscribe("DOM/destroy", function(a, b) {
                if (!d("Parent").bySelector(f.getVideoNode(), b)) return;
                f.pause("unloaded");
                f.destroy()
            });
            f.$VideoPlayerController18 = 0;
            b = (m || (m = c("URI"))).getRequestURI();
            D = d("VideoPermalinkURI").parse(b);
            u = parseFloat(b.getQueryData().t);
            v = D ? D.video_id == f.$VideoPlayerController90 : !1;
            u && v && f.$VideoPlayerController4 && (f.$VideoPlayerController4.startTimestamp = u);
            c("VideoPlayerHTML5Experiments").useVpcPlayingStateForPrioritization && f.$VideoPlayerController4 && (f.$VideoPlayerController4.vpcPlayingStateEmitter = new(c("VideoControllerPlayingStateEmitter"))(babelHelpers.assertThisInitialized(f)));
            f.$VideoPlayerController14.getBool("oz_www_safely_log_player_seeks", !1) && f.$VideoPlayerController4 && (f.$VideoPlayerController4.seekHandler = function(a) {
                f.isState("playing") ? (f.pause(), f.seek(a), f.play("seek_initiated")) : f.seek(a)
            });
            f.$VideoPlayerController112 = new(c("DelegatedVideoPriorityAdjuster"))();
            c("VideoPlayerExperiments").adjustPriorityBasedOnAutoplayIndex && f.$VideoPlayerController4 && (f.$VideoPlayerController4.streamPriorityAdjuster = f.$VideoPlayerController112);
            f.$VideoPlayerController17 = null;
            f.$VideoPlayerController53 = null;
            f.$VideoPlayerController73 = s;
            f.$VideoPlayerController50 = Y ? new(c("VideoPlayerLogger"))(s, {
                device_id: Y
            }) : new(c("VideoPlayerLogger"))(s);
            f.$VideoPlayerController125 && f.$VideoPlayerController50.disable();
            f.$VideoPlayerController73 === "tahoe" && f.focusOnContainerNode();
            f.collectFeedTrackingData();
            f.$VideoPlayerController50.setScriptPath(d("ScriptPath").getScriptPath());
            f.$VideoPlayerController50.setFrameCountGetters(function() {
                return f.$VideoPlayerController91 != null ? d("VideoPlaybackQuality").getDroppedFrames(f.$VideoPlayerController91) : null
            }, function() {
                return f.$VideoPlayerController91 != null ? d("VideoPlaybackQuality").getTotalFrames(f.$VideoPlayerController91) : null
            });
            f.$VideoPlayerController63 = d("VideosRenderingInstrumentation").retrieveRenderTime(f.getRootNode());
            f.$VideoPlayerController62 = r() - f.$VideoPlayerController63;
            z && (z.subtitleDrawer = f.registerDrawer(c("VideoPlayerUIComponentDrawer").priorities.Subtitles, 0));
            f.$VideoPlayerController74 = "loading";
            f.$VideoPlayerController128(!1);
            if (f.$VideoPlayerController5.isImplementationUnavailable(f.$VideoPlayerController85)) {
                f.$VideoPlayerController129();
                return babelHelpers.assertThisInitialized(f)
            } else f.$VideoPlayerController130();
            f.$VideoPlayerController7 = new(c("SubscriptionsHandler"))();
            c("VideoPlayerMemLeakExperiments").www_videos_memleak_on_tv ? f.$VideoPlayerController7.addSubscriptions(c("Banzai").subscribe(c("Banzai").SHUTDOWN, function() {
                f.pause("unloaded"), f.destroy()
            })) : c("Banzai").subscribe(c("Banzai").SHUTDOWN, function() {
                f.pause("unloaded"), f.destroy()
            });
            f.$VideoPlayerController71 && (c("VideoPlayerExperiments").delayAutoplayUntilAfterLoad ? f.$VideoPlayerController7.addSubscriptions(d("Run").onAfterLoad(function() {
                return f.$VideoPlayerController131()
            })) : f.$VideoPlayerController131());
            f.$VideoPlayerController21 = 0;
            f.$VideoPlayerController69 = !1;
            f.$VideoPlayerController27 = f.$VideoPlayerController132();
            f.$VideoPlayerController7.addSubscriptions(c("Banzai").subscribe(c("Banzai").SHUTDOWN, function() {
                f.pause("unloaded"), f.destroy()
            }));
            if (!f.$VideoPlayerController133()) {
                var $ = new Set(["DialogX", "PhotoSnowlift", "Spotlight"]);
                f.$VideoPlayerController7.addSubscriptions(c("Arbiter").subscribe("layer_shown", function(a, b) {
                    if ($.has(b.type)) {
                        b.type !== "Spotlight" && c("Bootloader").loadModules(["VideoAutoplayControllerX"], function(a) {
                            a.setShouldAutoplay(!1)
                        }, "VideoPlayerController");
                        f.$VideoPlayerController21 = f.$VideoPlayerController21 + 1;
                        if (c("VideoPlayerExperiments").ignoreDialogCounter || f.$VideoPlayerController21 > 0) {
                            a = f.$VideoPlayerController73 === "tahoe" && f.isLiveVideo();
                            f.isState("playing") && !(a && c("TahoeVariables").neverAutoPauseLive) && !f.$VideoPlayerController122 && (f.pause("page_visibility_initiated"), f.$VideoPlayerController69 = !0)
                        }
                    }
                }), c("Arbiter").subscribe("layer_hidden", function(a, b) {
                    $.has(b.type) && (c("VideoPlayerExperiments").addViewabilityFixEnabled ? f.$VideoPlayerController21 = Math.max(0, f.$VideoPlayerController21 - 1) : f.$VideoPlayerController21 = f.$VideoPlayerController21 - 1, f.$VideoPlayerController21 === 0 && (b.type !== "Spotlight" && c("Bootloader").loadModules(["VideoAutoplayControllerX"], function(a) {
                        a.setShouldAutoplay(!0)
                    }, "VideoPlayerController"), f.$VideoPlayerController69 && (f.play("page_visibility_initiated"), f.$VideoPlayerController69 = !1)))
                }))
            }
            f.$VideoPlayerController7.addSubscriptions(c("Arbiter").subscribe("share_dialog_closed", function(a, b) {
                if (!b.root) return;
                if (!f.$VideoPlayerController70) return;
                d("ViewportTrackingHelper").isDescendantOf(f.$VideoPlayerController70, b.root) && f.mute()
            }));
            c("VideoPlayerMemLeakExperiments").www_videos_memleak_on_tv ? f.$VideoPlayerController7.addSubscriptions(d("Run").onLeave(function() {
                if (f.$VideoPlayerController100 || c("VideoPlayerExperiments").persistentWNSEnabled && f.$VideoPlayerController73 === "watch_scroll") return;
                f.cleanOnLeave()
            })) : d("Run").onLeave(function() {
                if (f.$VideoPlayerController100 || c("VideoPlayerExperiments").persistentWNSEnabled && f.$VideoPlayerController73 === "watch_scroll") return;
                f.cleanOnLeave()
            });
            f.$VideoPlayerController12 = K || [];
            f.$VideoPlayerController12.forEach(function(a) {
                var b = c("getVideoComponentName")(a) || "<MalformedComponent>";
                a && typeof a.enable === "function" ? c("VideoPlayerExperiments").enableComponentGuards ? (o || (o = c("ErrorUtils"))).applyWithGuard(a.enable, a, [babelHelpers.assertThisInitialized(f)], null, "VideoPlayerController Component Enable Guard: " + b) : a.enable(babelHelpers.assertThisInitialized(f)) : c("FBLogger")("video").warn("no_enable_method_on_component: %s", b)
            });
            f.$VideoPlayerController52 = 1;
            f.$VideoPlayerController94 = !1;
            f.$VideoPlayerController91 && (f.shouldCalculateViewability() ? (f.$VideoPlayerController94 = c("VideoPlayerExperiments").enableViewabilityLogging || c("VideoPlayerExperiments").enableVideoSampledViewabilityLogging && !!f.$VideoPlayerController113, f.isInstreamAd() && (f.$VideoPlayerController94 = f.$VideoPlayerController94 && (c("VideoPlayerExperiments").enableInstreamAdViewabilityLogging || c("VideoPlayerExperiments").enableVideoSampledViewabilityLogging && !!f.$VideoPlayerController113))) : f.$VideoPlayerController94 = c("VideoPlayerExperiments").enableViewabilityLoggingForOrganic);
            f.$VideoPlayerController94 && f.$VideoPlayerController91 && (f.$VideoPlayerController95 = new(c("VideoViewabilityLogging"))(babelHelpers.assertThisInitialized(f), f.$VideoPlayerController91, f.$VideoPlayerController70, f.$VideoPlayerController15));
            f.$VideoPlayerController32 = !1;
            f.$VideoPlayerController34 = fa;
            f.isLiveVideo() && (f.$VideoPlayerController16 = c("LiveVideoCopyrightActionSubscription").subscribe(f.getVideoID(), function(a) {
                if (a.live_video_copyright_action_subscribe == null) return;
                var b = a.live_video_copyright_action_subscribe.action.toLowerCase();
                switch (b) {
                    case "block":
                        if (f.$VideoPlayerController34) break;
                        f.emit("blockVideo");
                        f.destroy();
                        break;
                    case "mute":
                        f.emit("blockAudio", f.$VideoPlayerController34);
                        f.$VideoPlayerController32 = !0;
                        f.$VideoPlayerController34 || f.mute();
                        break;
                    case "unmute":
                        f.emit("unblockAudio", f.$VideoPlayerController34);
                        f.$VideoPlayerController32 = !1;
                        f.$VideoPlayerController34 || f.unmute();
                        break
                }
                f.$VideoPlayerController134(a.live_video_copyright_action_subscribe.action, a.live_video_copyright_action_subscribe.timestamp)
            }));
            f.$VideoPlayerController135();
            return f
        }
        var f = e.prototype;
        f.$VideoPlayerController135 = function() {
            var a = "v:" + this.$VideoPlayerController31;
            this.addListener("beginPlayback", function() {
                d("WebSessionExtender").subscribe(a, "video-on-blue")
            });
            this.addListener("pausePlayback", function() {
                d("WebSessionExtender").unsubscribe(a)
            });
            this.addListener("finishPlayback", function() {
                d("WebSessionExtender").unsubscribe(a)
            })
        };
        f.setVideoPriorityAdjustment = function(a) {
            this.$VideoPlayerController112.notifyAdjustment(a)
        };
        f.addListener = function() {
            var b;
            for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++) d[e] = arguments[e];
            var f = (b = a.prototype.addListener).call.apply(b, [this].concat(d));
            d[0] === "visibilityChanged" && this.$VideoPlayerController127();
            return f
        };
        f.setOverrideConfig = function(a) {
            this.$VideoPlayerController14.setOverrideConfig(a)
        };
        f.$VideoPlayerController127 = function() {
            var a = this;
            if (this.$VideoPlayerController109) return;
            this.$VideoPlayerController91 || j(0, 3694);
            this.$VideoPlayerController109 = new(c("VideoVisibilityObserver"))(this.$VideoPlayerController91);
            this.$VideoPlayerController109.addListener("visibilityChanged", function(b) {
                return a.emit("visibilityChanged", b)
            })
        };
        f.setAutoScrollIntoView = function(a) {
            this.$VideoPlayerController22 = !a
        };
        f.setDetectionID = function(a) {
            this.$VideoPlayerController116 = a
        };
        f.destroy = function(a) {
            a = a || {};
            if (this.isState("destroyed") || this.$VideoPlayerController36) return;
            this.$VideoPlayerController36 = !0;
            this.$VideoPlayerController109 && (this.$VideoPlayerController109.destroy(), this.$VideoPlayerController109 = null);
            var b = this.$VideoPlayerController12 || [];
            for (var d = b.length - 1; d >= 0; d--) {
                var e = b[d],
                    f = c("getVideoComponentName")(e) || "<MalformedComponent>";
                e && typeof e.disable === "function" ? c("VideoPlayerExperiments").enableComponentGuards ? (o || (o = c("ErrorUtils"))).applyWithGuard(e.disable, e, [this], null, "VideoPlayerController Component Disable Guard: " + f) : e.disable(this) : c("FBLogger")("video").warn("no_disable_method_on_component: %s", f)
            }
            this.$VideoPlayerController86 && this.getVideoAPI().destroy(a);
            this.$VideoPlayerController50.stopCollectingVideoFramesInfo();
            this.setState("destroyed");
            this.$VideoPlayerController7.release();
            a.skipRemoveAllListeners || this.removeAllListeners();
            this.$VideoPlayerController23 && (this.$VideoPlayerController23.unsubscribe(), this.$VideoPlayerController23 = null);
            this.stopHeartbeat();
            c("VideoPlayerMemLeakExperiments").www_videos_memleak_on_tv ? (this.$VideoPlayerController20.stopUnifiedCVC(), this.$VideoPlayerController20.leave()) : this.$VideoPlayerController20.stopUnifiedCVC();
            this.$VideoPlayerController16 && (this.$VideoPlayerController16.unsubscribe(), this.$VideoPlayerController16 = null);
            c("VideoPlayerMemLeakExperiments").www_videos_memleak_on_tv && (this.$VideoPlayerController6 && this.$VideoPlayerController6.release())
        };
        f.collectFeedTrackingData = function() {
            if (this.$VideoPlayerController83) {
                var a = {
                        tn: "",
                        "tn-debug": ","
                    },
                    b = {};
                for (var e = 0; e < this.$VideoPlayerController83.length; e++) {
                    var f = JSON.parse(this.$VideoPlayerController83[e]);
                    if (!Array.isArray(f))
                        for (var g in f) a[g] !== void 0 ? (b[g] === void 0 && (b[g] = []), b[g].push(f[g])) : b[g] === void 0 && (b[g] = f[g])
                }
                for (g in a) b[g] !== void 0 && (b[g] = b[g].join(a[g]));
                f = {
                    ft: b
                }
            } else {
                e = !1;
                g = this.getRootNode();
                while (g) {
                    if (g instanceof Element && d("CSS").matchesSelector(g, "._4oep")) {
                        e = !0;
                        break
                    }
                    g = c("getContextualParent")(g)
                }!e ? this.isState("replayed") ? f = c("collectDataAttributes")(window.event.target, ["ft"]) : f = c("collectDataAttributes")(this.getRootNode(), ["ft"]) : f = {}
            }
            this.$VideoPlayerController50.setFTData(f)
        };
        f.setStillFrameEnabled = function(a) {
            var b = this.getVideoAPI();
            b.setStillFrameEnabled && b.setStillFrameEnabled(a)
        };
        f.isFallbackRecoverable = function() {
            return !!this.$VideoPlayerController80
        };
        f.setFallbackSources = function(a) {
            this.$VideoPlayerController80 = a
        };
        f.setRelativeSphericalOrientation = function(a, b) {
            this.emit(d("SphericalVideoPlayerEvents").SET_RELATIVE_SPHERICAL_ORIENTATION, a, b)
        };
        f.setSphericalOrientation = function(a, b) {
            this.emit(d("SphericalVideoPlayerEvents").SET_ABSOLUTE_SPHERICAL_ORIENTATION, a, b)
        };
        f.setSphericalFieldOfView = function(a) {
            this.emit(d("SphericalVideoPlayerEvents").SET_FIELD_OF_VIEW, a)
        };
        f.isSpherical = function() {
            return this.$VideoPlayerController38
        };
        f.getVideoPlayerID = function() {
            return this.$VideoPlayerController31
        };
        f.focusOnContainerNode = function() {
            this.$VideoPlayerController15 && this.$VideoPlayerController15.focus()
        };
        f.setLogEntryPropertyGetters = function(a) {
            var b = this;
            Object.keys(a).forEach(function(c) {
                var d = a[c];
                typeof d === "function" ? b.$VideoPlayerController25.set(c, d) : b.$VideoPlayerController81[c] = d
            })
        };
        f.removeLogEntryPropertyGetters = function(a) {
            var b = this;
            typeof a === "string" && (a = [a]);
            Array.isArray(a) || (a = Object.keys(a));
            a.forEach(function(a) {
                b.$VideoPlayerController25["delete"](a), delete b.$VideoPlayerController81[a]
            })
        };
        f.$VideoPlayerController130 = function() {
            var a = this;
            this.$VideoPlayerController5.onImplementationReady(this.getVideoNode(), function() {
                return a.onApiReady()
            })
        };
        f.isImplementationUnavailable = function() {
            return this.$VideoPlayerController5.isImplementationUnavailable(this.$VideoPlayerController85) && !this.$VideoPlayerController85
        };
        f.getIsInChannel = function() {
            return this.$VideoPlayerController73 === "channel"
        };
        f.updateSource = function(a) {
            if (!this.$VideoPlayerController73) return;
            var b = c("VideoPlayerFormatsMap")[this.$VideoPlayerController73],
                d = c("VideoPlayerFormatsMap")[a];
            this.$VideoPlayerController50.updateSource(a);
            this.$VideoPlayerController14.setContext("player_format", this.$VideoPlayerController126(this.isFullscreen(), a) || "unknown");
            b && b !== d && this.$VideoPlayerController96 && (c("VideoPlayerExperiments").delayFormatChangeEvent ? this.isState("playing") && !this.$VideoPlayerController39 ? (this.logEvent("player_format_changed"), this.$VideoPlayerController47 = d) : this.$VideoPlayerController47 = b : this.logEvent("player_format_changed"));
            this.$VideoPlayerController73 = a
        };
        f.getSource = function() {
            return this.$VideoPlayerController50.getSource()
        };
        f.getPlayerOrigin = function() {
            return this.$VideoPlayerController57
        };
        f.getPlayerSuborigin = function() {
            return this.$VideoPlayerController58
        };
        f.getUpstreamPlayerSource = function() {
            return this.$VideoPlayerController84
        };
        f.hasLooped = function() {
            return this.$VideoPlayerController52 > 1
        };
        f.$VideoPlayerController129 = function() {
            var a = {
                error: "IMPLEMENTATION_NOT_SUPPORTED",
                state: d("VideoPlayerLoggerErrorStates").PLAYER_FAILURE,
                error_description: "Implementation unavailable",
                error_user_info: this.getDebugInfo()
            };
            this.logEvent("error", a);
            this.$VideoPlayerController71 = !1
        };
        f.logError = function(a) {
            a = this.$VideoPlayerController46 = a;
            var b = a.error,
                e = a.message,
                f = a.isPlayback,
                g = a.httpStatus,
                h = a.url;
            a = a.stack;
            var i = this.getDebugInfo();
            a && (i.player.stack = a);
            a = g == null || g === "" ? b : g;
            delete i.player.loggedError;
            delete i.player.lastError;
            i = {
                error: b,
                error_description: e,
                error_user_info: i,
                error_code: a,
                error_domain: b,
                resource_url: h,
                state: f ? d("VideoPlayerLoggerErrorStates").PLAYBACK_FAILURE : d("VideoPlayerLoggerErrorStates").PLAYER_FAILURE
            };
            g === 410 || g === "410" || (this.$VideoPlayerController49 = this.logEvent("error", i), this.destroy());
            this.$VideoPlayerController38 && Math.random() < .01 && c("FBLogger")("360video").warn("360 video player error: %s %s", b, e);
            f && this.$VideoPlayerController55 && this.$VideoPlayerController128(!1)
        };
        f.setRotation = function(a) {
            this.getVideoAPI().setRotation(a)
        };
        f.setDimensions = function(a, b) {
            var d = this.getContainerNode();
            d.style.width = a + "px";
            d.style.height = b + "px";
            d = this.getVideoNode();
            d.style.width = a + "px";
            d.style.height = b + "px";
            if (this.isState("loading")) this.$VideoPlayerController64 = {
                width: a,
                height: b
            };
            else {
                if (this.isPlayerVersion("silvercity") && (this.$VideoPlayerController39 || c("VideoPlayerResizeSettings").disable_flash_set_dimensions)) return;
                this.setVideoPlayerAPIDimensions(a, b)
            }
        };
        f.isPlayRequestPending = function() {
            return this.$VideoPlayerController55
        };
        f.$VideoPlayerController128 = function(a) {
            if (this.$VideoPlayerController55 === a) return;
            this.$VideoPlayerController55 = a;
            this.emit("pendingPlayRequestChanged")
        };
        f.updateAutoplayRestrained = function() {
            var a = this;
            c("ifRequired")("VideoPlayerHTML5Shaka", function(b) {
                b = b.isAutoplayBandwidthRestrained(a.$VideoPlayerController42);
                a.$VideoPlayerController136(b)
            })
        };
        f.$VideoPlayerController136 = function(a) {
            a ? this.emit("turnOffAutoplay", {
                reason: "poor_network_quality"
            }) : this.emit("resumeAutoplay", {
                reason: "poor_network_quality"
            });
            var b = this.getVideoAPI();
            b && b.setPreloadDisabled(a)
        };
        f.restoreStreamBufferSize = function() {
            var a = this.getVideoAPI();
            a && a.restoreStreamBufferSize()
        };
        f.getDataInsertionPosition = function() {
            return this.$VideoPlayerController27 && this.$VideoPlayerController27.getAttribute("data-insertion-position")
        };
        f.getDataFt = function() {
            return this.$VideoPlayerController27 && this.$VideoPlayerController27.getAttribute("data-ft")
        };
        f.play = function(a) {
            var b = this,
                e = null;
            a instanceof c("VideoPlayerReasonTransitionHelper") ? e = a.getReason() : e = a;
            a = this.getVideoNodeNullable();
            if (a && a.scrollIntoView && e === "user_initiated" && !this.$VideoPlayerController22) {
                var f = this.getDOMPosition(),
                    g = f.y >= 0;
                f = f.y + f.height <= c("getViewportDimensions")().height;
                !g ? a.scrollIntoView(!0) : f || a.scrollIntoView(!1)
            }
            this.$VideoPlayerController137();
            this.$VideoPlayerController54 || (this.$VideoPlayerController54 = e);
            this.$VideoPlayerController110 = this.getOption("VideoWithCommercialBreak", "controller");
            if (this.$VideoPlayerController110 && this.$VideoPlayerController110.shouldPlayPreRollAds(e)) {
                this.$VideoPlayerController110.schedulePreRollAds();
                return
            }
            if (!this.$VideoPlayerController55) {
                this.$VideoPlayerController53 = this.$VideoPlayerController138();
                var h = this.$VideoPlayerController139({
                    debug_reason: e
                });
                g = this.$VideoPlayerController73;
                c("VideoPlayerExperiments").delayFormatChangeEvent && g && this.$VideoPlayerController96 && this.$VideoPlayerController47 && c("VideoPlayerFormatsMap")[g] !== this.$VideoPlayerController47 && !this.$VideoPlayerController39 && (this.logEvent("player_format_changed"), this.$VideoPlayerController47 = c("VideoPlayerFormatsMap")[g]);
                c("VideoPlayerExperiments").logRequestedPlayingAsync ? d("VideoAsyncLoggerHelper").operateAsync(function() {
                    b.logEvent("requested_playing", h)
                }, ["started_playing", "unpaused"], this.$VideoPlayerController119) : this.logEvent("requested_playing", h);
                this.$VideoPlayerController96 = !0
            }
            this.$VideoPlayerController140(e);
            this.emit("playRequested", e);
            this.sendPlayRequest(e);
            e === "loop_initiated" && this.$VideoPlayerController52++
        };
        f.sendPlayRequest = function(a) {
            var b = this;
            if (this.isState("fallback")) {
                this.emit("fallbackPlay");
                c("VideoPlayerExperiments").endBufferingOnFallbackPlay && this.$VideoPlayerController50.endBuffering();
                return
            }
            this.$VideoPlayerController128(!0);
            this.isState("loading") ? this.$VideoPlayerController65 = {
                reason: a
            } : (!this.getVideoAPI().isMuted() && this.$VideoPlayerController51 && (c("VideoPlayerExperiments").logUnmutedAsync ? d("VideoAsyncLoggerHelper").operateAsync(function() {
                b.logEvent("unmuted")
            }, ["started_playing", "unpaused"], this.$VideoPlayerController119) : this.logEvent("unmuted")), this.$VideoPlayerController51 = !1, this.$VideoPlayerController141(), this.getVideoAPI().play(a))
        };
        f.getOriginalPlayReason = function() {
            return this.$VideoPlayerController54
        };
        f.reset = function() {
            var a = this,
                c = (k || (k = b("Promise"))).resolve();
            if (this.isState("loading") || this.isState("fallback") && !this.isFallbackRecoverable()) return c;
            this.resetPositions();
            this.$VideoPlayerController142();
            var d = k.resolve();
            this.$VideoPlayerController86 && this.$VideoPlayerController86.destroy && (d = this.$VideoPlayerController86.destroy());
            this.$VideoPlayerController86 = null;
            this.setState("loading");
            c = d.then(function() {
                a.$VideoPlayerController130()
            });
            return c
        };
        f.detachRootNode = function() {
            var a = this;
            if (!this.$VideoPlayerController70) return;
            c("DOM").remove(this.$VideoPlayerController70);
            if (this.isState("fallback") || this.isState("loading")) return;
            this.setState("loading");
            this.$VideoPlayerController5.onImplementationReady(this.getVideoNode(), function() {
                return a.$VideoPlayerController143()
            })
        };
        f.getVideoAPI = function() {
            this.$VideoPlayerController86 || j(0, 3695);
            return this.$VideoPlayerController86
        };
        f.getVideoNodeNullable = function() {
            return this.$VideoPlayerController91
        };
        f.getVideoNode = function() {
            return this.getVideoNodeNullable()
        };
        f.getRootNodeNullable = function() {
            return this.$VideoPlayerController70
        };
        f.getRootNode = function() {
            return this.getRootNodeNullable()
        };
        f.getContainerNodeNullable = function() {
            return this.$VideoPlayerController15
        };
        f.getContainerNode = function() {
            return this.getContainerNodeNullable()
        };
        f.getVideoResolution = function() {
            var a = this.getVideoNode();
            return {
                height: a.videoHeight,
                width: a.videoWidth
            }
        };
        f.$VideoPlayerController143 = function() {
            this.setState("ready"), this.$VideoPlayerController51 = !this.getVideoAPI().isMuted(), this.$VideoPlayerController82 = !this.$VideoPlayerController3, this.getVideoAPI().setSubtitlesStyle && this.getVideoAPI().setSubtitlesStyle(this.$VideoPlayerController75), this.getVideoAPI().setAutogeneratedCaptionsOptions && this.getVideoAPI().setAutogeneratedCaptionsOptions(this.$VideoPlayerController76), this.$VideoPlayerController65 && (this.sendPlayRequest(this.$VideoPlayerController65.reason), this.$VideoPlayerController65 = null), this.$VideoPlayerController64 && (this.setDimensions(this.$VideoPlayerController64.width, this.$VideoPlayerController64.height), this.$VideoPlayerController64 = null), this.$VideoPlayerController66 && (this.getVideoAPI().unmute(), this.$VideoPlayerController66 = null)
        };
        f.onApiReady = function() {
            var a = this;
            this.$VideoPlayerController4 && (this.$VideoPlayerController4.id = this.$VideoPlayerController31, this.$VideoPlayerController4.customLiveManifestUrlParams = this.$VideoPlayerController19, this.$VideoPlayerController80 && (this.$VideoPlayerController4.fallbackSources = this.$VideoPlayerController80), this.$VideoPlayerController4.playerOrigin = this.$VideoPlayerController57, this.$VideoPlayerController4.playerSuborigin = this.$VideoPlayerController58, this.$VideoPlayerController4.getSource = function() {
                return a.getSource()
            }, this.$VideoPlayerController4.shakaConfig = this.$VideoPlayerController14, this.$VideoPlayerController4.playerInstanceKey = this.$VideoPlayerController114, this.$VideoPlayerController117 && (this.$VideoPlayerController4.videoLiveTrace = this.$VideoPlayerController117), this.$VideoPlayerController4.disableLogging = this.$VideoPlayerController125);
            this.$VideoPlayerController86 = new this.$VideoPlayerController5(this.getVideoNode(), this.$VideoPlayerController4);
            this.$VideoPlayerController144();
            this.getVideoAPI().setup();
            this.$VideoPlayerController143();
            var b = {
                is_auto_played: this.isAutoplayable()
            };
            this.logEvent("player_loaded", b);
            this.$VideoPlayerController86 && this.$VideoPlayerController50.setABRQualityTracker(new(c("VideoPlayerABRQualityTracker"))(this.$VideoPlayerController86.getLocalEstimator()));
            b = this.getVideoProjection();
            b && (this.$VideoPlayerController61 = b);
            this.emit("apiReady")
        };
        f.getLocalEstimator = function() {
            if (this.$VideoPlayerController86) return this.$VideoPlayerController86.getLocalEstimator();
            else return null
        };
        f.runOnApiReady = function(a) {
            a === void 0 && (a = function() {}), !this.isState("loading") ? a() : this.once("apiReady", a)
        };
        f.resetPositions = function() {
            this.$VideoPlayerController18 = 0
        };
        f.getCurrentTimePosition = function() {
            if (this.isState("playing")) {
                var a = this.getVideoAPI().getCurrentTimePosition();
                a != null && a !== void 0 && (this.$VideoPlayerController18 = a)
            }
            return this.$VideoPlayerController18
        };
        f.getBufferEndPosition = function() {
            if (this.isState("loading")) return 0;
            var a = this.getVideoAPI().getBufferEndPosition();
            return a != null ? a : this.getCurrentTimePosition()
        };
        f.$VideoPlayerController137 = function() {
            if (!this.$VideoPlayerController9) {
                d("VideoChannelViewChainLengthManager").registerChainingInfos(this.getVideoID(), this.$VideoPlayerController11);
                var a = this.getVideoID();
                if (this.$VideoPlayerController11) {
                    var b = this.$VideoPlayerController11.decode();
                    a = b.root_id
                }
                this.$VideoPlayerController9 = d("VideoChannelViewChainLengthManager").getLoggingData(a)
            }
        };
        f.$VideoPlayerController145 = function(a) {
            this.$VideoPlayerController128(!1);
            a = a.position;
            a !== void 0 && (this.$VideoPlayerController18 = a);
            this.setState("playing");
            this.areHLSActive() && this.$VideoPlayerController146();
            this.startHeartbeat();
            this.$VideoPlayerController20.startUnifiedCVC()
        };
        f.$VideoPlayerController147 = function(a) {
            var b = a.position;
            this.$VideoPlayerController117 && this.isState("playing") && this.$VideoPlayerController117.onUpdateStatus(a);
            b !== void 0 && (this.$VideoPlayerController18 = b);
            this.$VideoPlayerController17 = this.getVideoAPI().getCurrentlyPlayingVideoStreamInfoID()
        };
        f.$VideoPlayerController148 = function(a) {
            return this.$VideoPlayerController97.has(a)
        };
        f.runOnceOnApiEventLogged = function(a, b) {
            if (this.$VideoPlayerController148(a)) b();
            else var c = this.addListener("apiEventLogged", function(d) {
                d === a && (b(), c.remove())
            })
        };
        f.$VideoPlayerController149 = function(a) {
            var b = a.event;
            this.$VideoPlayerController97.add(b);
            delete a.event;
            this.logEvent(b, a);
            this.emit("apiEventLogged", b)
        };
        f.$VideoPlayerController150 = function() {
            this.isState("finished") || this.setState("paused"), this.stopHeartbeat(), this.$VideoPlayerController20.stopUnifiedCVC()
        };
        f.$VideoPlayerController151 = function(a) {
            a = a.position;
            a !== void 0 && (this.$VideoPlayerController18 = a)
        };
        f.$VideoPlayerController152 = function() {
            this.setState("finished"), this.$VideoPlayerController69 = !1, this.stopHeartbeat(), this.$VideoPlayerController20.stopUnifiedCVC()
        };
        f.getVolume = function() {
            return this.getVideoAPI().getVolume()
        };
        f.$VideoPlayerController153 = function() {
            this.$VideoPlayerController40 = !1;
            var a = this.getContainerNode(),
                b = this.isFullscreen();
            d("CSS").conditionClass(a, "_1hwh", b);
            b ? a.style.paddingBottom = "0" : (a.removeAttribute("data-fullscreen"), a.style.paddingBottom = this.$VideoPlayerController102);
            !b && this.$VideoPlayerController28 && (this.$VideoPlayerController28.unsubscribe(), this.$VideoPlayerController28 = null);
            if (this.$VideoPlayerController39 != b) {
                this.logFullscreenChanged(b);
                this.$VideoPlayerController14.setContext("player_format", this.$VideoPlayerController126(b, this.$VideoPlayerController73) || "unknown");
                a = d("DOMDimensions").getElementDimensions(a);
                this.isPlayerVersion("silvercity") || this.setVideoPlayerAPIDimensions(a.width, a.height);
                this.emit("toggleFullscreen");
                !b ? (this.addOffsetStylings(), c("Arbiter").inform("video_fullscreen_change", {})) : this.removeOffsetStylings()
            }
            this.$VideoPlayerController39 = b
        };
        f.$VideoPlayerController126 = function(a, b) {
            return a ? "full_screen" : b ? c("VideoPlayerFormatsMap")[b] : "inline"
        };
        f.logFullscreenChanged = function(a) {
            var b = {
                player_format: this.$VideoPlayerController126(a, this.$VideoPlayerController73)
            };
            c("VideoPlayerHTML5Experiments").enteredExitedFsLoggingFix ? this.logEvent(a ? "entered_fs" : "exited_fs", b) : this.logEvent(a ? "entered_fs" : "exited_fs")
        };
        f.setVideoPlayerAPIDimensions = function(a, b) {
            this.getVideoAPI().setDimensions && this.getVideoAPI().setDimensions(a, b)
        };
        f.removeOffsetStylings = function() {
            var a = this.$VideoPlayerController104;
            if (a == null) return;
            this.$VideoPlayerController103 === 1 ? (this.getVideoNode().style.setProperty("left", "0"), d("CSS").removeClass(this.getVideoNode(), "_blh")) : this.$VideoPlayerController103 === 0 && (this.getVideoNode().style.setProperty("top", "0"), d("CSS").removeClass(this.getVideoNode(), "_bli"))
        };
        f.addOffsetStylings = function() {
            var a = this.$VideoPlayerController104;
            if (a == null) return;
            this.$VideoPlayerController103 === 1 ? (this.getVideoNode().style.setProperty("left", a + "px"), d("CSS").addClass(this.getVideoNode(), "_blh")) : this.$VideoPlayerController103 === 0 && (this.getVideoNode().style.setProperty("top", a + "px"), d("CSS").addClass(this.getVideoNode(), "_bli"))
        };
        f.hasDialog = function() {
            return this.$VideoPlayerController21 > 0
        };
        f.isTahoe = function() {
            return this.$VideoPlayerController73 === "tahoe"
        };
        f.isFullscreen = function() {
            return this.$VideoPlayerController40 || c("FullScreen").isFullScreen() && this.$VideoPlayerController15 === c("getFullScreenElement")()
        };
        f.toggleFullscreen = function() {
            var a = this.isFullscreen(),
                b = this.getContainerNode();
            c("FullScreen").toggleFullScreen(b) && (a || (this.$VideoPlayerController40 = !0, b.setAttribute("data-fullscreen", "true")), d("CSS").addClass(b, "_1hwh"), this.$VideoPlayerController28 = c("FullScreen").subscribe("changed", this.$VideoPlayerController153.bind(this)))
        };
        f.instreamVideoStart = function() {
            d("CSS").addClass(this.getContainerNode(), "_24pm")
        };
        f.instreamVideoEnd = function() {
            d("CSS").removeClass(this.getContainerNode(), "_24pm")
        };
        f.unmute = function() {
            if (!this.$VideoPlayerController34 && this.$VideoPlayerController32) return;
            !this.isState("loading") ? (this.getVideoAPI().unmute(), c("VideoPlayerVolumeSettings").saveVolume(c("VideoPlayerVolumeSettings").getLastVolumeBeforeMute()), this.$VideoPlayerController82 && this.getVideoAPI().areSubtitlesActive() && this.$VideoPlayerController154()) : this.$VideoPlayerController66 = !0
        };
        f.isAudioBlocked = function() {
            return this.$VideoPlayerController32
        };
        f.isMuted = function() {
            return this.$VideoPlayerController86 ? this.getVideoAPI().isMuted() : this.$VideoPlayerController77
        };
        f.mute = function() {
            this.$VideoPlayerController82 && !this.getVideoAPI().areSubtitlesActive() && this.$VideoPlayerController154(), this.getVideoAPI().mute(), c("VideoPlayerVolumeSettings").saveVolume(0)
        };
        f.getMediaID = function() {
            return this.getVideoID()
        };
        f.getPlaybackDuration = function() {
            return this.getVideoAPI().getPlaybackDuration()
        };
        f.getPlayerFormat = function() {
            return this.$VideoPlayerController126(this.isFullscreen(), this.$VideoPlayerController73)
        };
        f.getVideoID = function() {
            return this.$VideoPlayerController90
        };
        f.getVideoChannelID = function() {
            return this.$VideoPlayerController87
        };
        f.getVideoListID = function() {
            return this.$VideoPlayerController88
        };
        f.getVideoURL = function() {
            return this.$VideoPlayerController93
        };
        f.$VideoPlayerController144 = function() {
            var a = this,
                b = this.getVideoAPI(),
                d = new(c("SubscriptionsHandler"))();
            this.$VideoPlayerController6 = d;
            var e = {
                buffered: function() {
                    return a.setBuffering(!1)
                },
                buffering: function() {
                    return a.setBuffering(!0)
                },
                bufferingProgress: function(b) {
                    return a.$VideoPlayerController155(b)
                },
                streamInterrupted: function() {
                    return a.$VideoPlayerController50.startInterrupt()
                },
                streamResumed: function() {
                    return a.$VideoPlayerController50.endInterrupt()
                },
                beginPlayback: function(b) {
                    return a.$VideoPlayerController145(b)
                },
                updateStatus: function(b) {
                    return a.$VideoPlayerController147(b)
                },
                logEvent: function(b) {
                    return a.$VideoPlayerController149(b.logData)
                },
                pausePlayback: function() {
                    return a.$VideoPlayerController150()
                },
                seekEnd: function(b) {
                    return a.$VideoPlayerController151(b)
                },
                clickForTracking: function() {
                    return c("logVideosClickTracking")(a.getVideoNode())
                },
                error: function(b) {
                    return a.logError(b)
                },
                finishPlayback: function() {
                    return a.$VideoPlayerController152()
                },
                networkInterrupted: function() {
                    return a.$VideoPlayerController156()
                },
                networkResumed: function() {
                    return a.$VideoPlayerController157()
                },
                replicaSwitch: function(b) {
                    return a.switchReplicaSet(b)
                }
            };
            d.addSubscriptions.apply(d, Object.keys(e).map(function(a) {
                return b.addListener(a, e[a])
            }));
            d.addSubscriptions.apply(d, c("VideoPlayerApiEvents").map(function(d) {
                return c("forwardEvent")(b, a, d)
            }))
        };
        f.$VideoPlayerController142 = function() {
            this.$VideoPlayerController6 && this.$VideoPlayerController6.release()
        };
        f.seek = function(a, b) {
            this.emit("seekRequested", a, b), this.getVideoAPI().seek(a)
        };
        f.pause = function(a) {
            this.isState("loading") ? this.$VideoPlayerController65 = null : this.isState("playing") ? this.getVideoAPI().pause(a) : this.$VideoPlayerController55 && this.getVideoAPI().pause(a), this.$VideoPlayerController128(!1), this.$VideoPlayerController69 = !1, this.$VideoPlayerController158(a), this.emit("pauseRequested", a)
        };
        f.stopHeartbeat = function() {
            c("clearInterval")(this.$VideoPlayerController30), this.$VideoPlayerController30 = null, this.$VideoPlayerController20.stopUnifiedCVC()
        };
        f.startHeartbeat = function() {
            if (this.$VideoPlayerController30 || !c("VideoPlayerHTML5Experiments").heartbeatIntervalMS) return;
            this.$VideoPlayerController30 = c("setInterval")(this.emitHeartbeat, c("VideoPlayerHTML5Experiments").heartbeatIntervalMS)
        };
        f.isPlayerVersion = function(a) {
            return this.getPlayerVersion() === a || this.$VideoPlayerController101 && this.$VideoPlayerController159(a) === this.getPlayerVersion()
        };
        f.isHtml5Player = function() {
            return this.isPlayerVersion("pleasantville") || this.isPlayerVersion("oz")
        };
        f.isAutoplayable = function() {
            return this.$VideoPlayerController71
        };
        f.getImmediatePlayReason = function() {
            return this.$VideoPlayerController72
        };
        f.$VideoPlayerController160 = function() {
            return d("ViewportTrackingHelper").isVisible(this.getVideoNode(), 0)
        };
        f.$VideoPlayerController131 = function() {
            var a = this;
            if (c("Visibility").isHidden()) {
                var b = c("Visibility").once(c("Visibility").VISIBLE, function() {
                    return a.$VideoPlayerController131()
                });
                c("VideoPlayerExperiments").unsubscribeImmediateplay && this.$VideoPlayerController7.addSubscriptions(b)
            } else {
                if (!this.$VideoPlayerController160() && this.$VideoPlayerController72 !== "watch_time_not_logged" && this.$VideoPlayerController72 !== "gbm_not_logged_autploay") {
                    c("FBLogger")("video").warn("immediateplay on a hidden video player: %s %s %s %s", this.getPlayerOrigin(), this.getPlayerSuborigin(), this.getSource(), d("ScriptPath").getScriptPath());
                    return
                }
                this.play("autoplay_initiated")
            }
        };
        f.isBuffering = function() {
            return this.$VideoPlayerController35
        };
        f.$VideoPlayerController161 = function() {
            var a = Math.floor(Date.now() / 1e3);
            this.$VideoPlayerController111 = this.$VideoPlayerController111.filter(function(b) {
                return b.time + 3 > a
            });
            this.$VideoPlayerController111.some(function(b) {
                if (b.time === a) {
                    b.count += 1;
                    return !0
                }
                return !1
            }) || this.$VideoPlayerController111.push({
                time: a,
                count: 1
            })
        };
        f.$VideoPlayerController162 = function() {
            var a = Math.floor(Date.now() / 1e3);
            return this.$VideoPlayerController111.reduce(function(b, c) {
                return (c.time + 3 > a ? c.count : 0) + b
            }, 0)
        };
        f.$VideoPlayerController155 = function(a) {
            this.emit("bufferingProgress", a)
        };
        f.setBuffering = function(a) {
            if (a !== this.$VideoPlayerController35) {
                this.$VideoPlayerController35 = a;
                if (this.$VideoPlayerController35) {
                    a = c("ShakaConstants").numbers.buffering_count_threshold;
                    if (a) {
                        this.$VideoPlayerController161();
                        if (this.$VideoPlayerController162() >= a) {
                            this.logError({
                                error: "EXCEED_BUFFER_FREQUENCY_THRESHOLD",
                                message: "video has entered buffering state " + a + " times in the last 3 seconds.",
                                isPlayback: this.isPlayRequestPending()
                            });
                            return this.emit("error", "EXCEED_BUFFER_FREQUENCY_THRESHOLD")
                        }
                    }
                    this.$VideoPlayerController50.startBuffering(this.getCurrentTimePosition());
                    this.$VideoPlayerController163() && (this.$VideoPlayerController164(), this.$VideoPlayerController99 = c("setTimeout")(this.$VideoPlayerController165, this.$VideoPlayerController163()));
                    this.$VideoPlayerController166()
                } else this.$VideoPlayerController50.endBuffering(), this.$VideoPlayerController164(), this.isState("paused") && this.$VideoPlayerController167();
                this.emit("bufferingChanged")
            }
        };
        f.setVideoStreamOffset = function(a) {
            var b = this.getVideoAPI();
            typeof b.setVideoStreamOffset === "function" && b.setVideoStreamOffset(a)
        };
        f.$VideoPlayerController164 = function() {
            this.$VideoPlayerController99 && (c("clearTimeout")(this.$VideoPlayerController99), this.$VideoPlayerController99 = null)
        };
        f.$VideoPlayerController167 = function() {
            this.$VideoPlayerController108 && this.play("network_resumed")
        };
        f.$VideoPlayerController166 = function() {
            this.$VideoPlayerController35 && this.$VideoPlayerController107 && this.isState("playing") && this.pause("network_interrupted")
        };
        f.$VideoPlayerController140 = function(a) {
            this.$VideoPlayerController108 = !1
        };
        f.$VideoPlayerController158 = function(a) {
            a === "network_interrupted" ? this.$VideoPlayerController108 = !0 : this.$VideoPlayerController108 = !1
        };
        f.$VideoPlayerController156 = function() {
            this.$VideoPlayerController107 = !0, this.$VideoPlayerController166()
        };
        f.$VideoPlayerController157 = function() {
            this.$VideoPlayerController107 = !1, this.$VideoPlayerController167()
        };
        f.isLiveVideo = function() {
            return this.$VideoPlayerController42
        };
        f.isGaming = function() {
            return this.$VideoPlayerController43
        };
        f.isVideo = function() {
            return !0
        };
        f.isBroadcast = function() {
            return !!this.$VideoPlayerController33
        };
        f.isInline = function() {
            return !!this.$VideoPlayerController73 && c("VideoPlayerFormatsMap")[this.$VideoPlayerController73] === "inline" && !this.isFullscreen()
        };
        f.isFacecastAudio = function() {
            return this.$VideoPlayerController37
        };
        f.isStreamInterrupted = function() {
            var a = this.$VideoPlayerController86;
            return !!(a && a.isStreamInterrupted && a.isStreamInterrupted())
        };
        f.setVolume = function(a) {
            if (!this.$VideoPlayerController34 && this.$VideoPlayerController32) return;
            c("VideoPlayerVolumeSettings").saveVolume(a);
            this.getVideoAPI().setVolume(a)
        };
        f.getDOMPosition = function() {
            var a = this.getRootNodeNullable();
            return a ? c("getElementPosition")(a) : {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }
        };
        f.clickVideo = function() {
            this.emit("clickVideo"), this.$VideoPlayerController29 = !0
        };
        f.mouseMove = function(a) {
            this.emit("mouseMove", a)
        };
        f.mouseUp = function(a) {
            this.emit("mouseUp", a)
        };
        f.mouseLeave = function(a) {
            this.emit("mouseLeave", a)
        };
        f.hasSeenClick = function() {
            return !!this.$VideoPlayerController29
        };
        f.isAd = function() {
            return !!this.$VideoPlayerController2
        };
        f.shouldCalculateViewability = function() {
            if (this.isAd()) return !0;
            var a = this.$VideoPlayerController50.getFTdata();
            if (a == null) return !1;
            a = a.ft;
            return a == null ? !1 : !!a.ei
        };
        f.isInstreamAd = function() {
            return !!this.$VideoPlayerController41
        };
        f.getAdClientToken = function() {
            return this.$VideoPlayerController2
        };
        f.getLastScrollDirection = function() {
            return this.getOption("VideoAutoplayControllerBase/VideoScrollTracker", "getLastScrollDirection") || null
        };
        f.$VideoPlayerController168 = function() {
            var a = this,
                b = null,
                e = null,
                f = !1,
                g = null,
                h = null,
                i = null,
                j = null,
                k = null;
            if (!this.isState("loading") && !this.isState("fallback")) {
                this.$VideoPlayerController17 === null && (this.$VideoPlayerController17 = this.getVideoAPI().getCurrentlyPlayingVideoStreamInfoID());
                b = this.getVideoAPI().getEstimatedBandwidth();
                e = this.getVideoAPI().getAvailableVideoQualities().length;
                f = this.getVideoAPI().getIsAbrEnabled();
                g = this.getPlaybackDuration();
                k = this.getAudioStreamId();
                var l = this.getVideoAPI().getDimensionsForDevice();
                i = l && l.height;
                h = l && l.width;
                j = d("VideoPlayerConnectionQuality").evaluate(function() {
                    return a.getVideoAPI().getEstimatedBandwidth()
                })
            }
            var m = babelHelpers["extends"]({}, this.$VideoPlayerController81);
            this.$VideoPlayerController25.forEach(function(b, c) {
                m[c] = b(c, a)
            });
            l = {};
            this.getOption("SphericalVideoSpatialAudioController", "hasSpatialAudio") && (l.audio_ch_conf = this.getOption("SphericalVideoSpatialAudioController", "getSpatialAudioChannelLayout"));
            var n = this.isLiveVideo() && !!p && p.getIsRewound(this.getVideoPlayerID());
            return babelHelpers["extends"]({
                ad_client_token: this.$VideoPlayerController2,
                available_qualities: e,
                access_token: this.$VideoPlayerController1,
                autoplay_eligible: this.isAutoplayable(),
                autoplay_setting: this.$VideoPlayerController8,
                broadcaster_origin: this.$VideoPlayerController98,
                projection: this.$VideoPlayerController61,
                player_version: this.getPlayerVersion(),
                flash_version: c("ifRequired")("Flash", function(a) {
                    return a.getVersionString()
                }),
                video_id: this.getVideoID(),
                permalink_share_id: this.$VideoPlayerController56,
                player_state: this.$VideoPlayerController74,
                player_origin: this.$VideoPlayerController57,
                player_suborigin: this.$VideoPlayerController58,
                player_suborigin_derived: this.$VideoPlayerController59,
                playback_is_broadcast: this.$VideoPlayerController33,
                player_instance_key: this.$VideoPlayerController114,
                playback_duration: g,
                referrer: document.referrer,
                streaming_format: this.getStreamingFormat(),
                video_time_position: this.getCurrentTimePosition(),
                video_buffer_end_position: this.$VideoPlayerController86 ? this.getBufferEndPosition() : 0,
                is_servable_via_fbms: this.$VideoPlayerController44,
                playback_is_live_streaming: this.$VideoPlayerController42,
                playback_is_drm: this.isDrm(),
                is_templated_manifest: this.isFBIsLiveTemplated() || this.isFBWasLive(),
                is_fbms: this.isFBMS(),
                is_predictive_playback: this.ispDASH(),
                is_live_video_rewound: n,
                last_scroll_direction: this.getLastScrollDirection(),
                video_channel_id: this.$VideoPlayerController87,
                video_list_id: this.$VideoPlayerController88,
                fb_manifest_identifier: this.getFbManifestIdentifier(),
                reaction_video_channel_type: this.$VideoPlayerController67,
                reaction_video_channel_subtype: this.$VideoPlayerController68,
                fbcdn_pop: this.$VideoPlayerController53,
                representation_id: this.$VideoPlayerController17,
                audio_representation_id: k,
                video_bandwidth: b,
                video_player_height: i,
                video_player_width: h,
                dash_perf_logging_enabled: this.$VideoPlayerController169(),
                data_connection_quality: j,
                is_abr_enabled: f,
                position_in_unit: this.$VideoPlayerController115,
                feed_position: this.getDataInsertionPosition(),
                upstream_player_source: this.$VideoPlayerController84,
                should_log_video_viewability: this.$VideoPlayerController113,
                detectionID: this.$VideoPlayerController116,
                is_ads_preview: this.$VideoPlayerController120,
                is_injected_ads: this.$VideoPlayerController121,
                live_linear_channel_id: this.$VideoPlayerController123
            }, this.$VideoPlayerController89, this.$VideoPlayerController9, m, l, {
                iframe_embed_referrer: this.$VideoPlayerController124
            })
        };
        f.$VideoPlayerController138 = function() {
            var a = this.getVideoInfo_DEPRECATED();
            if (!a) return null;
            a = a.resourceUrl;
            a = /scontent-([a-z]+)\./.exec(a);
            return !a ? null : a[1]
        };
        f.getVideoInfo_DEPRECATED = function() {
            return this.isState("loading") || this.isState("fallback") ? null : this.getVideoAPI().getVideoInfo()
        };
        f.getDebugInfo = function() {
            var a = this.getVideoInfo_DEPRECATED(),
                b = {
                    initializationTime: this.$VideoPlayerController62,
                    initializationTimestamp: this.$VideoPlayerController63,
                    version: this.getPlayerVersion(),
                    stallCount: this.$VideoPlayerController50.getCumulativeStallCount(),
                    stallTime: this.$VideoPlayerController50.getCumulativeStallTime(),
                    inPlayStallCount: this.$VideoPlayerController50.getCumulativeInPlayStallCount(),
                    inPlayStallTime: this.$VideoPlayerController50.getCumulativeInPlayStallTime(),
                    interruptCount: this.$VideoPlayerController50.getCumulativeInterruptCount(),
                    interruptTime: this.$VideoPlayerController50.getCumulativeInterruptTime(),
                    state: this.$VideoPlayerController74,
                    canPlayType: (n || (n = c("mapObject")))(c("VideoMimeTypes"), c("canVideoPlayType")),
                    loggedError: this.$VideoPlayerController49,
                    lastError: this.$VideoPlayerController46,
                    droppedFrames: !!this.$VideoPlayerController86 && this.$VideoPlayerController86.getDroppedFrames(),
                    totalFrames: !!this.$VideoPlayerController86 && this.$VideoPlayerController86.getTotalFrames(),
                    videoSource: !!this.$VideoPlayerController86 && this.$VideoPlayerController86.getVideoNodeSource(),
                    viewabilityPercentage: !!this.$VideoPlayerController95 && !(c("VideoPlayerExperiments").organicViewabilityLoggingNoOrganicLogging && !this.isAd()) && this.$VideoPlayerController95.getViewability(),
                    stack: void 0
                },
                d = {
                    videoID: this.getVideoID(),
                    isDrm: this.$VideoPlayerController86 && this.$VideoPlayerController86.isDrm()
                };
            if (!a) return {
                player: b,
                currentVideo: d
            };
            var e = this.getVideoAPI().getDimensionsForDevice();
            return {
                currentVideo: babelHelpers["extends"]({}, d, {
                    streamType: a.streamType,
                    isLiveStream: a.isLiveStream,
                    liveManifestUrl: a.liveManifestUrl,
                    isHD: a.isHD,
                    hasHD: a.hasHD,
                    resourceUrl: a.resourceUrl,
                    hasSubtitles: a.hasSubtitles,
                    hasRateLimit: !!a.hasUnlimitedSrc,
                    isRateLimited: a.hasUnlimitedSrc && !a.useUnlimitedSrc,
                    tagHD: a.tagHD,
                    tagSD: a.tagSD,
                    projection: this.$VideoPlayerController61,
                    streamId: this.$VideoPlayerController17,
                    audioStreamId: this.getVideoAPI().getAudioStreamInfoIDDebug(),
                    dashAudioFormat: this.getVideoAPI().getDashAudioConfiguration()
                }),
                player: babelHelpers["extends"]({}, b, {
                    dimensions: e
                })
            }
        };
        f.getLastError = function() {
            return this.$VideoPlayerController46
        };
        f.isAkamai = function() {
            var a = this.getVideoInfo_DEPRECATED();
            return a ? a.liveManifestUrl && a.liveManifestUrl.includes("akamaihd") : !1
        };
        f.getLoggedError = function() {
            return this.$VideoPlayerController49
        };
        f.getTotalFrames = function() {
            return this.$VideoPlayerController86 ? this.$VideoPlayerController86.getTotalFrames() : 0
        };
        f.getDroppedFrames = function() {
            return this.$VideoPlayerController86 ? this.$VideoPlayerController86.getDroppedFrames() : 0
        };
        f.getInterruptCount = function() {
            return this.$VideoPlayerController50.getCumulativeInterruptCount()
        };
        f.getInterruptTime = function() {
            return this.$VideoPlayerController50.getCumulativeInterruptTime()
        };
        f.getVideoStreamId = function() {
            return this.getVideoAPI().getCurrentlyPlayingVideoStreamInfoID()
        };
        f.getAudioStreamId = function() {
            return this.getVideoAPI().getCurrentlyPlayingAudioStreamInfoID() || this.getVideoAPI().getAudioStreamInfoIDDebug()
        };
        f.getVideoTracks = function() {
            return this.getVideoAPI().getVideoTracksDebug()
        };
        f.getAudioDashFormat = function() {
            return this.getVideoAPI().getDashAudioConfigurationDebug()
        };
        f.getCumulativeStallCount = function() {
            return this.$VideoPlayerController50.getCumulativeStallCount()
        };
        f.getCumulativeStallTime = function() {
            return this.$VideoPlayerController50.getCumulativeStallTime()
        };
        f.getStallCount = function() {
            return this.$VideoPlayerController50.getStallCount()
        };
        f.getStreamType = function() {
            var a = this.getVideoInfo_DEPRECATED();
            return a ? a.streamType : "n/a"
        };
        f.hasSubtitles = function() {
            return this.getVideoAPI().hasSubtitles()
        };
        f.getVideoState = function() {
            return this.$VideoPlayerController74
        };
        f.areSubtitlesActive = function() {
            return this.getVideoAPI().areSubtitlesActive()
        };
        f.areSubtitlesAutogenerated = function() {
            return this.getVideoAPI().areSubtitlesAutogenerated()
        };
        f.areHLSActive = function() {
            return this.getVideoAPI().areHLSActive()
        };
        f.toggleSubtitles = function() {
            this.$VideoPlayerController154(), this.logEvent("caption_change"), this.$VideoPlayerController82 = !1
        };
        f.updateSubtitleStyle = function(a) {
            this.$VideoPlayerController75 = a, this.getVideoAPI() && this.getVideoAPI().setSubtitlesStyle && this.getVideoAPI().setSubtitlesStyle(a)
        };
        f.$VideoPlayerController154 = function() {
            this.getVideoAPI().toggleSubtitles(), this.$VideoPlayerController141()
        };
        f.$VideoPlayerController141 = function() {
            this.hasSubtitles() && this.areSubtitlesActive() ? this.$VideoPlayerController10 = "on" : this.$VideoPlayerController10 = "off"
        };
        f.isHD = function() {
            return d("VideoPlayerQualitiesArray").isHDSelectedVideoQuality(this.getAvailableVideoQualities(), this.getSelectedVideoQuality())
        };
        f.hasHD = function() {
            var a = d("VideoPlayerQualitiesArray").getHighestVideoQuality(this.getAvailableVideoQualities());
            return a != null
        };
        f.toggleHD = function() {
            var a = d("VideoPlayerQualitiesArray").getPreferredVideoQualityForToggleHD(this.getAvailableVideoQualities(), this.getSelectedVideoQuality());
            a != null && this.setPreferredVideoQuality(a)
        };
        f.setPreferredVideoQuality = function(a) {
            this.getVideoAPI().setPreferredVideoQuality(a)
        };
        f.unsetPreferredVideoQuality = function() {
            this.getVideoAPI().unsetPreferredVideoQuality()
        };
        f.getPreferredVideoQuality = function() {
            var a;
            return (a = this.getVideoAPI().getPreferredVideoQuality()) != null ? a : null
        };
        f.getSelectedVideoQuality = function() {
            var a;
            return (a = this.getVideoAPI().getSelectedVideoQuality()) != null ? a : null
        };
        f.getAvailableVideoQualities = function() {
            return this.getVideoAPI().getAvailableVideoQualities()
        };
        f.getVideoProjection = function() {
            return this.getVideoAPI().getVideoProjection()
        };
        f.canAutoSelectVideoQuality = function() {
            return this.getVideoAPI().canAutoSelectVideoQuality()
        };
        f.switchToStreamType = function(a) {
            this.getVideoAPI().switchToStreamType(a)
        };
        f.$VideoPlayerController146 = function() {
            this.getVideoAPI().replaceVideoDataFromURL(c("XVideoDataController").getURIBuilder().setString("video_id", this.getVideoID()).setInt("scrubbing_preference", q).setString("source", this.$VideoPlayerController73).getURI().toString())
        };
        f.$VideoPlayerController139 = function(a) {
            var b = this.getVideoInfo_DEPRECATED();
            return b != null ? babelHelpers["extends"]({
                resource_url: b.resourceUrl,
                liveStream: b.isLiveStream,
                hd: b.isHD
            }, a) : a
        };
        f.$VideoPlayerController170 = function() {
            var a = this.getDOMPosition(),
                b = c("getViewportDimensions")().height,
                d;
            a.y <= 0 ? d = a.y : a.y + a.height < b ? d = 0 : d = a.y + a.height - b;
            return d
        };
        f.logEvent = function(a, d) {
            if (a === "displayed" && c("gkx")("1218754")) return void 0;
            if (a === "player_loaded" && c("gkx")("1218755")) return void 0;
            this.$VideoPlayerController48++;
            this.$VideoPlayerController119.emit(a);
            var e = c("ShakaConstants").numbers.logging_log_event_limit;
            e && this.$VideoPlayerController48 > e && (this.$VideoPlayerController125 = !0, this.$VideoPlayerController50 && this.$VideoPlayerController50.disable());
            e = ++this.$VideoPlayerController26;
            d = Object.assign(this.$VideoPlayerController168(), d);
            var f = this.getOriginalPlayReason();
            f && a !== "displayed" && (d.video_play_reason = f);
            a === "finished_playing" && (d.viewport_distance = this.$VideoPlayerController170());
            (a === "muted" || a === "unmuted" || a === "started_playing" || a === "caption_change" || a === "unpaused") && (d.caption_state = this.$VideoPlayerController10);
            this.$VideoPlayerController94 && !(c("VideoPlayerExperiments").organicViewabilityLoggingNoOrganicLogging && !this.isAd()) && c("VideoViewabilityKeyEvents").Events.includes(a) && (d.current_viewability_percentage = this.$VideoPlayerController95.getViewability(), this.$VideoPlayerController95.setLastLoggedViewability(d.current_viewability_percentage));
            d.event_seq_num = e;
            this.$VideoPlayerController78.has(a) && (c("VideoPlayerExperiments").logSBLVpts && (d.vpts = (l || (l = c("performanceAbsoluteNow")))()), d.seq_num = ++this.$VideoPlayerController79);
            a === "played_for_three_seconds" && (d.detection_id = this.$VideoPlayerController116, this.emit("videoView/runFraudDetector"));
            if (a === "requested_playing") {
                f = this.$VideoPlayerController117 ? this.$VideoPlayerController117.getLiveTraceContext() : null;
                f != null && (d.live_trace_stream_id = f.streamId, d.live_trace_stream_type = f.streamType, d.live_trace_source_id = f.sourceId)
            }
            if (this.$VideoPlayerController117 && (a === "paused" || a === "finished_playing" || a === "heart_beat")) {
                e = this.$VideoPlayerController117.getAndFlushTracedFrames();
                e != null && (d.frame_events = JSON.stringify(e))
            }
            f = c("SRTVideoData").getInstance();
            f != null && f.getJobID() && (d.srt_job_id = f.getJobID(), d.srt_job_tracking_id = f.getJobTrackingID());
            b("cr:4225") == null ? void 0 : b("cr:4225").logVPLEvent(a, d);
            e = this.$VideoPlayerController50.logEvent(a, d);
            this.emit("debug/vpcLogEvent", e);
            return e
        };
        f.getState = function() {
            return this.$VideoPlayerController74
        };
        f.getStreamingFormat = function() {
            var a = this.getVideoInfo_DEPRECATED() || {};
            return a.streamType || this.$VideoPlayerController45
        };
        f.setPlaybackRate = function(a) {
            this.getVideoAPI().setPlaybackRate && this.getVideoAPI().setPlaybackRate(a)
        };
        f.getPlaybackRate = function() {
            return this.getVideoAPI().getPlaybackRate ? this.getVideoAPI().getPlaybackRate() : 1
        };
        f.setState = function(a) {
            if (this.isState("destroyed") || this.isState("fallback") && !this.isFallbackRecoverable()) return;
            this.$VideoPlayerController74 = a;
            this.$VideoPlayerController74 === "fallback" && (d("CSS").addClass(this.getRootNode(), "_3-n5"), this.$VideoPlayerController142());
            this.emit("stateChange")
        };
        f.isState = function(a) {
            return this.$VideoPlayerController74 === a
        };
        f.isIntentionallyViewing = function() {
            return this.isState("playing") && !this.isMuted()
        };
        f.abortLoading = function(a) {
            if (this.isState("loading") || this.isState("fallback")) return;
            c("VideoPlayerExperiments").seekZeroWhenAbortLoadingFinishedVideos && !(c("VideoPlayerExperiments").seekZeroOnlyVodVideo && this.$VideoPlayerController42) && this.isState("finished") && this.seek(0);
            this.getVideoAPI().abortLoading(a || {});
            this.stopHeartbeat();
            this.$VideoPlayerController20.stopUnifiedCVC()
        };
        f.preload = function() {
            if (this.isState("loading") || this.isState("fallback")) return;
            this.getVideoAPI().preload()
        };
        f.getPlayerVersion = function() {
            var a;
            this.$VideoPlayerController86 && (a = this.getVideoAPI());
            var b = a && a.getUpdatedPlayerVersion ? a.getUpdatedPlayerVersion.bind(a) : this.$VideoPlayerController5.getPlayerVersion;
            b = b ? b() : this.$VideoPlayerController60;
            return this.$VideoPlayerController101 ? this.$VideoPlayerController159(b) : b
        };
        f.$VideoPlayerController159 = function(a) {
            switch (a) {
                case "silvercity":
                    return "react_silvercity";
                case "pleasantville":
                    return "react_pleasantville";
                case "oz":
                    return "react_oz";
                default:
                    return "react"
            }
        };
        f.registerOption = function(a, b, c, d) {
            var e = this.$VideoPlayerController13.get(a);
            e || (e = new Map(), this.$VideoPlayerController13.set(a, e));
            if (e.has(b)) throw new Error("An option can only be registered once for each component");
            e.set(b, {
                getter: c,
                setter: d
            });
            this.emit("optionsChange")
        };
        f.unregisterOption = function(a, b) {
            var c = this.$VideoPlayerController13.get(a);
            if (!c) throw new Error('The component "' + a + '" has no options registered');
            if (!c.has(b)) throw new Error('The component "' + a + '" has no option "' + b + '" registered');
            c["delete"](b);
            c.size || this.$VideoPlayerController13["delete"](a);
            this.emit("optionsChange")
        };
        f.getComponents = function() {
            return this.$VideoPlayerController13.keys()
        };
        f.getOptions = function(a) {
            a = this.$VideoPlayerController13.get(a);
            return a ? a.keys() : c("enumerate")([])
        };
        f.hasOption = function(a, b) {
            a = this.$VideoPlayerController13.get(a);
            return !!a && a.has(b)
        };
        f.getOption = function(a, b) {
            a = this.$VideoPlayerController13.get(a);
            if (!a) return void 0;
            a = a.get(b);
            return !a ? void 0 : a.getter()
        };
        f.setOption = function(a, b, c) {
            a = this.$VideoPlayerController13.get(a);
            if (!a) throw new Error("Component not registered");
            a = a.get(b);
            if (!a) throw new Error("Option not registered");
            b = a.setter;
            if (b) return b(c);
            throw new Error("Read-only option")
        };
        f.showDebugOverlayView = function(a) {
            this.emit("showDebugOverlay", a)
        };
        f.$VideoPlayerController132 = function() {
            var a = d("DOMQuery").scry(this.$VideoPlayerController70, "^._5pat");
            return a.length ? a[0] : null
        };
        f.registerDrawer = function(a, b) {
            return this.$VideoPlayerController24.register(a, b)
        };
        f.getVideoPath = function() {
            return this.$VideoPlayerController92
        };
        f.setAllowCrossPageTransition = function(a) {
            this.$VideoPlayerController100 = a
        };
        f.cleanOnLeave = function() {
            this.pause("unloaded"), this.destroy()
        };
        f.switchReplicaSet = function(a) {
            var b = this.isState("playing");
            this.getVideoAPI().switchReplicaSet(a.replica, {
                url: a.url,
                status: a.status,
                timestamp: a.timestamp
            });
            b && this.play("autoplay_initiated")
        };
        f.switchToFullVideo = function() {
            var a = this;
            this.pause("unloaded");
            this.getVideoAPI().reloadDashManifest().done(function() {
                a.play(new(c("VideoPlayerReasonTransitionHelper"))("user_initiated")), a.emit("switchedToFullVideo")
            })
        };
        f.$VideoPlayerController133 = function() {
            return this.getIsInChannel() || this.$VideoPlayerController73 === "living_room" || this.$VideoPlayerController73 === "topic_channel_living_room" || this.$VideoPlayerController57 === "intern_curation" || this.$VideoPlayerController57 === "games_video_hub"
        };
        f.getDashAudioConfiguration = function() {
            return this.getVideoAPI().getDashAudioConfiguration()
        };
        f.setEnableLiveheadCatchup = function(a) {
            var b = this.getVideoAPI();
            b && b.setEnableLiveheadCatchup(a)
        };
        f.setIsLiveRewindActive = function(a) {
            var b = this.getVideoAPI();
            b && b.setIsLiveRewindActive(a)
        };
        f.isFBWasLive = function() {
            var a = this.$VideoPlayerController86 && this.getVideoAPI();
            return !!(a && a.isFBWasLive())
        };
        f.isFBIsLiveTemplated = function() {
            var a = this.$VideoPlayerController86 && this.getVideoAPI();
            return !!(a && a.isFBIsLiveTemplated())
        };
        f.getFbManifestIdentifier = function() {
            var a = this.$VideoPlayerController86 && this.getVideoAPI();
            return a ? a.getFbManifestIdentifier() : ""
        };
        f.isDrm = function() {
            var a = this.$VideoPlayerController86 && this.getVideoAPI();
            return a && a.isDrm()
        };
        f.isFBMS = function() {
            var a = this.$VideoPlayerController86 && this.getVideoAPI();
            return !!(a && a.isFBMS())
        };
        f.ispDASH = function() {
            var a = this.$VideoPlayerController86 && this.getVideoAPI();
            return !!(a && a.ispDASH())
        };
        f.isLiveheadCatchupEnabled = function() {
            var a = this.getVideoAPI();
            return a ? a.isLiveheadCatchupEnabled() : !1
        };
        f.getBandwidthEstimate = function() {
            var a = this.getVideoAPI();
            return a ? a.getBandwidthEstimate() : null
        };
        f.getSeekableRanges = function() {
            var a = this.getVideoAPI();
            return a ? a.getSeekableRanges() : null
        };
        f.isBroadcaster = function() {
            return this.$VideoPlayerController34 || !1
        };
        f.isWatchAndScroll = function() {
            return this.$VideoPlayerController73 === "watch_scroll"
        };
        f.$VideoPlayerController169 = function() {
            var a = this.$VideoPlayerController86 && this.getVideoAPI();
            return a ? a.isDashPerfLoggingEnabled() : null
        };
        f.$VideoPlayerController134 = function(a, b) {
            j(0, 54449)
        };
        f.$VideoPlayerController163 = function() {
            return this.isPlayRequestPending() ? this.$VideoPlayerController105 : this.$VideoPlayerController106
        };
        return e
    }(c("MediaController"));
    g["default"] = a
}), 98);
__d("VideoCover", ["invariant", "Animation", "Bootloader", "CSS", "EventListener", "Promise", "SubscriptionsHandler", "promiseDone", "setTimeout"], (function(a, b, c, d, e, f, g, h) {
    var i;
    a = function() {
        function a(a, e, f, g, j, k) {
            var l = this;
            g === void 0 && (g = null);
            j === void 0 && (j = !1);
            k === void 0 && (k = 0);
            this.$7 = new(c("SubscriptionsHandler"))();
            this.$15 = function() {
                l.$5 && d("CSS").show(l.$1)
            };
            this.$16 = function() {
                l.$5 && d("CSS").hide(l.$1)
            };
            this.$11 = function() {
                l.$3 != null && l.$3.length > 0 ? c("Bootloader").loadModules(["PhotoSnowlift"], function(a) {
                    return a.bootstrap(l.$3)
                }, "VideoCover") : l.$8 && l.$8.clickVideo()
            };
            this.$12 = function() {
                l.$9 && l.$8 && !l.$8.hasSeenClick() ? c("promiseDone")(new(i || (i = b("Promise")))(function(a) {
                    return c("setTimeout")(a, l.$10)
                }), function(a) {
                    return l.$17()
                }, function(a) {
                    return l.$17()
                }) : d("CSS").hide(l.$1)
            };
            this.$14 = function() {
                if (l.$8) {
                    var a = l.$8.getOption("Looping", "isLooping");
                    if (l.$4 || a) return;
                    d("CSS").show(l.$1)
                }
            };
            this.$13 = function() {
                l.$8 && l.$8.isState("fallback") && l.$6 && d("CSS").show(l.$1)
            };
            a instanceof Element || h(0, 4829);
            this.$1 = a;
            e[0] instanceof Element || h(0, 4830);
            this.$2 = e[0];
            this.$3 = f;
            this.$9 = j;
            this.$10 = k;
            g && (this.$4 = g.hiddenAfterFinish, this.$5 = g.showWhileBuffering, this.$6 = g.showAfterFallback);
            c("EventListener").listen(this.$1, "click", this.$11)
        }
        var e = a.prototype;
        e.disable = function() {
            this.$7.release(), this.$8 && this.$8.unregisterOption("VideoCover", "coverElement"), this.$8 = null
        };
        e.enable = function(a) {
            var b = this;
            this.$8 = a;
            a.getState() === "playing" && this.$12();
            this.$7.addSubscriptions(a.addListener("stateChange", this.$13), a.addListener("beginPlayback", this.$12), a.addListener("finishPlayback", this.$14), a.addListener("buffering", this.$15), a.addListener("buffered", this.$16));
            a.registerOption("VideoCover", "coverElement", function() {
                return b.$1
            })
        };
        e.getCurrentCover = function() {
            return this.$2
        };
        e.setSnowLiftURI = function(a) {
            this.$3 = a
        };
        e.$17 = function() {
            new(c("Animation"))(this.$1).from("opacity", 1).to("opacity", 0).duration(1e3).hide().go()
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("VideoNodeStaledScreen", ["CSS", "EventListener", "SubscriptionsHandler"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a) {
            var b = this;
            this.$3 = new(c("SubscriptionsHandler"))();
            this.$5 = function() {
                d("CSS").show(b.$1)
            };
            this.$4 = function() {
                d("CSS").hide(b.$1)
            };
            this.$1 = a;
            this.$2 = null;
            c("EventListener").listen(this.$1, "click", this.$4)
        }
        var b = a.prototype;
        b.enable = function(a) {
            this.$2 = a, this.$3.addSubscriptions(this.$2.addListener("videoNodeStaled", this.$5))
        };
        b.disable = function() {
            this.$3.release(), this.$2 = null
        };
        return a
    }();
    g["default"] = a
}), 98);