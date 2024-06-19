; /*FB_PKG_DELIM*/

__d("LiveVideoRewindTypedLogger", ["Banzai", "GeneratedLoggerUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:LiveVideoRewindLoggerConfig", this.$1, b("Banzai").BASIC, a)
        };
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:LiveVideoRewindLoggerConfig", this.$1, b("Banzai").VITAL, a)
        };
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:LiveVideoRewindLoggerConfig", this.$1, {
                signal: !0
            }, a)
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setActionSequenceNumber = function(a) {
            this.$1.action_sequence_number = a;
            return this
        };
        c.setDeviceid = function(a) {
            this.$1.deviceid = a;
            return this
        };
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        };
        c.setPositionAfter = function(a) {
            this.$1.position_after = a;
            return this
        };
        c.setPositionBefore = function(a) {
            this.$1.position_before = a;
            return this
        };
        c.setSessionID = function(a) {
            this.$1.session_id = a;
            return this
        };
        c.setVideoDuration = function(a) {
            this.$1.video_duration = a;
            return this
        };
        c.setVideoID = function(a) {
            this.$1.video_id = a;
            return this
        };
        return a
    }();
    c = {
        action_sequence_number: !0,
        deviceid: !0,
        event: !0,
        position_after: !0,
        position_before: !0,
        session_id: !0,
        video_duration: !0,
        video_id: !0
    };
    f["default"] = a
}), 66);
__d("CenteredContainer.react", ["cx", "joinClasses", "react"], (function(a, b, c, d, e, f, g, h) {
    var i, j = i || d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var d = b.prototype;
        d.render = function() {
            var a = this.props,
                b = a.fullHeight,
                d = a.horizontal,
                e = a.vertical;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["fullHeight", "horizontal", "vertical"]);
            e = (e ? "_3bwv" : "") + (d ? " _3bww" : "");
            d = j.Children.map(this.props.children, function(a) {
                return j.jsx("div", {
                    className: "_3bwx",
                    children: a
                })
            });
            b = c("joinClasses")(this.props.className, b ? "_5bpf" : "");
            return j.jsx("div", babelHelpers["extends"]({}, a, {
                className: b,
                children: j.jsx("div", {
                    className: e,
                    children: j.jsx("div", {
                        className: "_3bwy",
                        children: d
                    })
                })
            }))
        };
        return b
    }(j.Component);
    a.defaultProps = {
        fullHeight: !1,
        vertical: !1,
        horizontal: !0
    };
    g["default"] = a
}), 98);
__d("FBLoadShimmer.react", ["cx", "LoadingMarker.react", "UserAgent", "joinClasses", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j = i || (i = d("react")),
        k = i.useRef;

    function a(a) {
        var b = a.className,
            d = a.height,
            e = a.style,
            f = a.width;
        a = a.disableAnimation;
        var g = c("UserAgent").isBrowser("Safari") && c("UserAgent").isPlatform("Mac OS X");
        a = "_1tt" + (a ? " _300z" : "") + (g ? " _72_f" : "");
        g = k(null);
        b = j.jsx("div", {
            className: c("joinClasses")(b, a),
            ref: g,
            style: babelHelpers["extends"]({
                height: d != null ? d + "px" : void 0,
                width: f != null ? f + "px" : void 0
            }, e)
        });
        return j.jsx(c("LoadingMarker.react"), {
            nodeRef: g,
            children: b
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("VideoChannelProgressCircle.react", ["cx", "ReactDOM", "Style", "react"], (function(a, b, c, d, e, f, g, h) {
    var i, j = i || d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.$2 = null, c.$3 = 0, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = b.prototype;
        e.componentDidMount = function() {
            this.drawProgressCircle(this.props), this.$1 = d("ReactDOM").findDOMNode(this)
        };
        e.componentWillUnmount = function() {
            window.clearInterval(this.$2)
        };
        e.UNSAFE_componentWillReceiveProps = function(a) {
            (a.makeProgress !== this.props.makeProgress || a.timeoutSec !== this.props.timeoutSec) && this.drawProgressCircle(a)
        };
        e.drawProgressCircle = function(a) {
            var b = this,
                e = d("ReactDOM").findDOMNode(this.refs.progressCircle),
                f = this.$3,
                g = f / 100;
            c("Style").set(e, "stroke-dashoffset", f + "px");
            window.clearInterval(this.$2);
            a.makeProgress && (this.$2 = window.setInterval(function() {
                f -= g, c("Style").set(e, "stroke-dashoffset", f + "px"), f <= 0 && (window.clearInterval(b.$2), c("Style").set(e, "stroke-dashoffset", "0px"), a.onProgressDone && a.onProgressDone())
            }, a.timeoutSec * 10))
        };
        e.render = function() {
            var a = this.props.watchAndScroll ? 34 : 80,
                b = this.props.watchAndScroll ? 2 : 4;
            a = a / 2;
            var c = a - b / 2;
            this.$3 = c * 2 * Math.PI;
            return j.jsxs("div", {
                className: "_955f",
                children: [j.jsxs("svg", {
                    className: "_20_8",
                    children: [j.jsx("circle", {
                        cx: a,
                        cy: a,
                        r: c,
                        stroke: "#ffffff",
                        strokeWidth: b,
                        strokeDasharray: this.$3,
                        fill: "transparent"
                    }), j.jsx("circle", {
                        ref: "progressCircle",
                        cx: a,
                        cy: a,
                        r: c,
                        stroke: "#5890ff",
                        strokeWidth: b,
                        strokeDasharray: this.$3,
                        fill: "transparent"
                    })]
                }), this.props.children]
            })
        };
        return b
    }(j.PureComponent);
    g["default"] = a
}), 98);
__d("VideoChannelReplayImage.react", ["cx", "Image.react", "react"], (function(a, b, c, d, e, f, g, h) {
    var i, j = i || d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var d = b.prototype;
        d.render = function() {
            return j.jsx(c("Image.react"), {
                onClick: this.props.onClick,
                className: "_4nxy" + (this.props.size === "small" ? " _4nxz" : ""),
                src: "/images/video/channel_view/replay.svg"
            })
        };
        return b
    }(j.Component);
    a.defaultProps = {
        size: "normal"
    };
    g["default"] = a
}), 98);
__d("XVideoChannelViewStoryAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/video/channel/view/story/async/{root_video_id}/", {
        root_video_id: {
            type: "String",
            required: !0
        },
        video_ids: {
            type: "StringVector",
            defaultValue: []
        },
        use_video_placeholder: {
            type: "Bool",
            defaultValue: !1
        },
        setup_interactions: {
            type: "Bool",
            defaultValue: !1
        },
        is_first_story: {
            type: "Bool",
            defaultValue: !1
        },
        feed_tracking_data: {
            type: "StringVector",
            defaultValue: []
        },
        caller: {
            type: "Enum",
            defaultValue: "channel_view_from_unknown",
            enumType: 1
        },
        channel_id: {
            type: "String"
        },
        ad_impression_token: {
            type: "String"
        },
        fetch_channel_pivots: {
            type: "Bool",
            defaultValue: !1
        }
    })
}), null);
__d("VideoChannelStoryFetcher", ["AsyncRequest", "HTML", "ThisControllerNoLongerExists", "XVideoChannelViewStoryAsyncController"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a, b, c, d, e, f, g) {
            this.$7 = a;
            this.$8 = b;
            this.$4 = c;
            this.$10 = 0;
            this.$2 = null;
            this.$3 = !0;
            this.$5 = [];
            this.$6 = [];
            this.$9 = {};
            if (e) {
                this.$5 = e.videoIDs;
                this.$6 = e.feedTrackingData;
                this.$2 = e.cursorInfo.cursor;
                this.$3 = e.cursorInfo.hasNextPage;
                a = this.$5.indexOf(this.$7);
                this.$9.start = a;
                this.$9.end = a + 1
            }
            if (f) {
                this.$5 = f;
                this.$3 = !!g;
                b = this.$5.indexOf(this.$7);
                this.$9.start = b;
                this.$9.end = b + 1
            }
            this.$11 = d;
            this.$12 = [];
            this.$13 = []
        }
        var b = a.prototype;
        b.reset = function(a, b) {
            this.$7 = a, this.$8 = b, this.$10 = 0, this.$2 = null, this.$3 = !0, this.$5 = [], this.$6 = [], this.$9 = {}, this.$12 = [], this.$13 = []
        };
        b.abandonRequest = function() {
            this.$1 && this.$1.abandon()
        };
        b.hasNext = function() {
            var a = this.$5.length - this.$9.end > 0;
            return this.$3 || a
        };
        b.$14 = function(a, b, c) {
            var d = {};
            d.event = a;
            d.request_status = b;
            d.perf_time_ms = Date.now() - c
        };
        b.fetchFirstStory = function(a, b, d) {
            var e = this;
            if (b === null && this.$5.length !== 0) {
                var f = this.$5.indexOf(this.$7);
                b = this.$6[f]
            }
            f = c("XVideoChannelViewStoryAsyncController").getURIBuilder().setEnum("caller", this.$4).setStringVector("video_ids", [this.$7]).setString("root_video_id", this.$7).setBool("is_first_story", !0).setBool("use_video_placeholder", a).setBool("setup_interactions", d).setString("channel_id", this.$8).setString("ad_impression_token", this.$11);
            b && f.setStringVector("feed_tracking_data", [JSON.stringify(b)]);
            var g = Date.now();
            a = new(c("AsyncRequest"))(f.getURI()).setAllowCrossPageTransition(!0).setHandler(function() {
                e.$14("fetch_first_story", "succeeded", g), e.$15()
            }).setErrorHandler(function() {
                e.$14("fetch_first_story", "failed", g), e.$15()
            }).setAbortHandler(function() {
                e.$14("fetch_first_story", "aborted", g), e.$15()
            });
            this.$1 = a;
            this.$10 = Date.now();
            a.send()
        };
        b.getPreloadedData = function() {
            return {
                stories: this.$12,
                thumbnails: this.$13
            }
        };
        b.$16 = function(a, b) {
            var e = this;
            if (!this.$8) return;
            a = d("ThisControllerNoLongerExists").__DEADBUILDER__("jp6s5648o").setString("id", this.$8).setEnum("caller", this.$4).setString("original_video_id", this.$7).setInt("story_count", a);
            this.$2 && a.setString("cursor", this.$2.toString());
            var f = Date.now();
            a = a.getURI();
            a = new(c("AsyncRequest"))(a).setAllowCrossPageTransition(!0).setHandler(function(a) {
                e.$14("fetch_stories_from_entquery", "succeeded", f), e.$2 = a.getPayload().cursor, e.$3 = a.getPayload().hasNextPage, e.$15(), e.$17(a, function(a, c) {
                    e.$12 = [].concat(e.$12, a);
                    e.$13 = [].concat(e.$13, c);
                    return b(a, c)
                })
            }).setErrorHandler(function() {
                e.$14("fetch_stories_from_entquery", "failed", f), e.$15()
            }).setAbortHandler(function() {
                e.$14("fetch_stories_from_entquery", "aborted", f), e.$15()
            });
            this.$1 = a;
            a.send()
        };
        b.$18 = function(a, b, d) {
            var e = this,
                f = this.$9.end,
                g = this.$5.length - f,
                h = f + Math.min(g, a);
            if (g > 0) {
                var i = this.$5.slice(f, h);
                f = this.$6.slice(f, h).map(function(a) {
                    return JSON.stringify(a)
                });
                i = c("XVideoChannelViewStoryAsyncController").getURIBuilder().setEnum("caller", this.$4).setString("channel_id", this.$8).setString("root_video_id", this.$7).setStringVector("video_ids", i).setStringVector("feed_tracking_data", f);
                var j = Date.now();
                this.$1 = new(c("AsyncRequest"))(i.getURI()).setAllowCrossPageTransition(!0).setErrorHandler(function() {
                    e.$14("fetch_stories_forward", "failed", j), e.$15()
                }).setAbortHandler(function() {
                    e.$14("fetch_stories_forward", "aborted", j), e.$15()
                }).setHandler(function(a) {
                    e.$14("fetch_stories_forward", "succeeded", j), e.$9.end = h, e.$15(), e.$17(a, function(a, c) {
                        e.$12 = [].concat(e.$12, a);
                        e.$13 = [].concat(e.$13, c);
                        return b(a, c)
                    })
                });
                this.$1.send();
                d && d(g)
            } else this.$3 && (this.$16(a, b), d && d(a))
        };
        b.$19 = function(a, b, d) {
            var e = this,
                f = this.$9.start;
            if (f > 0) {
                var g = Math.max(f - a, 0);
                a = this.$5.slice(g, f);
                var h = this.$6.slice(g, f).map(function(a) {
                    return JSON.stringify(a)
                });
                a = c("XVideoChannelViewStoryAsyncController").getURIBuilder().setEnum("caller", this.$4).setString("channel_id", this.$8).setString("root_video_id", this.$7).setStringVector("video_ids", a).setStringVector("feed_tracking_data", h);
                var i = Date.now();
                this.$1 = new(c("AsyncRequest"))(a.getURI()).setAllowCrossPageTransition(!0).setErrorHandler(function() {
                    e.$14("fetch_stories_backward", "failed", i), e.$15()
                }).setAbortHandler(function() {
                    e.$14("fetch_stories_backward", "aborted", i), e.$15()
                }).setHandler(function(a) {
                    e.$14("fetch_stories_backward", "succeeded", i), e.$9.start = g, e.$15(), e.$17(a, b)
                });
                this.$1.send();
                d && d(f - g)
            }
        };
        b.fetchStories = function(a, b, c) {
            var d = 3;
            if (this.$1) return;
            a ? this.$18(d, b, c) : this.$19(d, b, c)
        };
        b.$17 = function(a, b) {
            a = a.getPayload();
            var d = c("HTML").replaceJSONWrapper(a.stories).getNodes();
            a = a.thumbnails.map(function(a) {
                return c("HTML").replaceJSONWrapper(a).getRootNode()
            });
            b(d, a)
        };
        b.$15 = function() {
            this.$1 = null
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("AbstractVideoFullscreenControl.react", ["cx", "AbstractButton.react", "joinClasses", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j = i || d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
                awaitingUpdate: !1
            }, c.isFullscreen = function() {
                return c.state.awaitingUpdate ? c.state.isFullscreenOverride : !!c.props.isFullscreen
            }, c.onButtonClick = function() {
                c.props.onToggleFullscreen && c.props.onToggleFullscreen()
            }, b) || babelHelpers.assertThisInitialized(c)
        }
        var d = b.prototype;
        d.render = function() {
            var a = babelHelpers["extends"]({}, this.props);
            delete a.isFullscreen;
            delete a.onToggleFullscreen;
            return j.jsx(c("AbstractButton.react"), babelHelpers["extends"]({}, a, {
                className: c("joinClasses")(this.props.isFullscreen ? "uiContextualLayerParent" : "", this.props.className),
                disabled: this.props.disabled,
                image: this.props.image,
                label: this.props.label,
                onClick: this.onButtonClick
            }))
        };
        return b
    }(j.PureComponent);
    g["default"] = a
}), 98);
__d("VideoPlayButton", ["CSS", "EventListener", "VideoDisplayTimePlayButton"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a, b, e) {
            this.$1 = a;
            this.$2 = b;
            e && (this.$3 = e.hiddenAfterFinish, this.$4 = e.hiddenWhilePaused, this.$5 = !!e.hiddenInFallback, this.$5 = e.hiddenInFallback, this.$6 = e.spherical);
            b = d("VideoDisplayTimePlayButton").getClicked(this.$2);
            d("VideoDisplayTimePlayButton").unregister(this.$2);
            a.addListener("beginPlayback", this.$7.bind(this));
            a.addListener("finishPlayback", this.$8.bind(this));
            a.addListener("pausePlayback", this.$9.bind(this));
            a.addListener("buffering", this.$10.bind(this));
            a.addListener("buffered", this.$11.bind(this));
            a.addListener("stateChange", this.$12.bind(this));
            a.addListener("playRequested", this.$13.bind(this));
            a.addListener("VideoChannelController/exitChannel", this.$14.bind(this));
            a.addListener("clickVideo", this.$15.bind(this));
            a.addListener("TahoeController/enterTahoe", this.$16.bind(this));
            c("EventListener").listen(this.$2, "click", this.$17.bind(this));
            e && e.hiddenWhileJSLoading && !e.hiddenWhileVideoLoading && d("CSS").show(this.$2);
            b && this.$17()
        }
        var b = a.prototype;
        b.$12 = function() {
            this.$1.isState("fallback") && (this.$5 || this.$1.getIsInChannel() ? d("CSS").hide(this.$2) : d("CSS").show(this.$2))
        };
        b.$7 = function() {
            d("CSS").hide(this.$2)
        };
        b.$9 = function() {
            if (this.$4 || this.$1.getSource() === "inline") return;
            d("CSS").show(this.$2)
        };
        b.$13 = function(a) {
            if (this.$1.isState("fallback") || a === "autoplay_initiated") return;
            d("CSS").hide(this.$2)
        };
        b.$14 = function() {
            (this.$1.isState("paused") && (!this.$4 || this.$6) || this.$1.isState("finished") && !this.$3) && d("CSS").show(this.$2)
        };
        b.$16 = function() {
            this.$1.isState("playing") || d("CSS").show(this.$2)
        };
        b.$8 = function() {
            var a = this.$1.getOption("Looping", "isLooping");
            this.$3 || this.$1.getIsInChannel() || this.$1.getSource() === "tahoe" || a ? d("CSS").hide(this.$2) : d("CSS").show(this.$2)
        };
        b.$10 = function() {
            d("CSS").hide(this.$2)
        };
        b.$11 = function() {
            d("CSS").hide(this.$2)
        };
        b.$17 = function() {
            this.$1.clickVideo()
        };
        b.$15 = function() {
            if (this.$1.isState("fallback")) return;
            d("CSS").hide(this.$2)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("VideoSpinner", ["cx", "CSS", "EventListener", "ShakaConstants", "setTimeout"], (function(a, b, c, d, e, f, g, h) {
    a = function() {
        function a(a, b) {
            this.$2 = b, this.$1 = a, this.$3 = !1, a.addListener("beginPlayback", this.$5.bind(this)), a.addListener("finishPlayback", this.$6.bind(this)), a.addListener("pausePlayback", this.$7.bind(this)), a.addListener("playRequested", this.$8.bind(this)), a.addListener("buffering", this.$9.bind(this)), a.addListener("buffered", this.$10.bind(this)), a.addListener("networkInterrupted", this.$11.bind(this)), a.addListener("networkResumed", this.$12.bind(this)), a.addListener("stateChange", this.$13.bind(this)), a.addListener("clickVideo", this.$14.bind(this)), a.addListener("VideoSphericalOverlay/animationUpdate", this.$15.bind(this)), c("EventListener").listen(this.$2, "click", this.$16.bind(this))
        }
        var b = a.prototype;
        b.$15 = function(a, b) {
            a ? d("CSS").addClass(this.$2, "_1st9") : d("CSS").removeClass(this.$2, "_1st9")
        };
        b.$11 = function() {
            this.$4 = !0
        };
        b.$12 = function() {
            this.$4 = !1
        };
        b.$9 = function() {
            var a = this,
                b = c("ShakaConstants").numbers.buffering_spinner_delay_ms;
            this.$3 = !0;
            b === 0 ? d("CSS").show(this.$2) : c("setTimeout")(function() {
                a.$3 && d("CSS").show(a.$2)
            }, b)
        };
        b.$10 = function() {
            d("CSS").hide(this.$2), this.$3 = !1
        };
        b.$5 = function() {
            this.$3 ? d("CSS").show(this.$2) : d("CSS").hide(this.$2)
        };
        b.$7 = function() {
            d("CSS").hide(this.$2)
        };
        b.$8 = function() {
            d("CSS").hide(this.$2)
        };
        b.$6 = function() {
            d("CSS").hide(this.$2)
        };
        b.$13 = function() {
            this.$1.isState("fallback") && d("CSS").hide(this.$2)
        };
        b.$14 = function() {
            if (this.$1.isState("fallback")) return;
            (this.$3 || this.$1.isState("ready") || this.$1.isState("loading")) && d("CSS").show(this.$2)
        };
        b.$16 = function() {
            this.$1.clickVideo()
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("LiveVideoPlayerDispatcher", ["ExplicitRegistrationReactDispatcher"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            b = a.call(this, b) || this;
            b.dispatch = b.dispatch.bind(babelHelpers.assertThisInitialized(b));
            return b
        }
        return b
    }(c("ExplicitRegistrationReactDispatcher"));
    b = new a({
        strict: !0
    });
    g["default"] = b
}), 98);
__d("LiveVideoPlayerActions", ["LiveVideoPlayerDispatcher"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {
        b = {
            type: "SET_IS_REWOUND",
            isRewound: b,
            vpc: a
        };
        c("LiveVideoPlayerDispatcher").dispatch(b)
    }

    function b(a) {
        a = {
            type: "DISMISS_REWIND_COMMENT_OVERLAY",
            playerID: a
        };
        c("LiveVideoPlayerDispatcher").dispatch(a)
    }
    g.setIsRewound = a;
    g.dismissRewindCommentOverlay = b
}), 98);
__d("LiveRewindUtils", ["LiveVideoPlayerActions", "LiveVideoRewindTypedLogger", "uuidv4"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 5,
        h = new Map(),
        i = 250;

    function j(a) {
        var b = 0;
        for (var c = 0; c < a.length(); c++) b += a.end(c) - a.start(c);
        return b > g ? b - g : 0
    }

    function a(a, b) {
        var c = a;
        if (b.length() < 1) return 0;
        if (a <= 0) return b.start(0);
        for (a = 0; a < b.length(); a++) {
            var d = b.end(a) - b.start(a);
            if (c < d) return b.start(a) + c;
            c -= d
        }
        return b.end(b.length() - 1)
    }

    function k(a, b) {
        var c = a;
        if (b.length() < 1) return c;
        var d = 0;
        for (var e = 0; e < b.length(); e++) {
            var f = b.start(e),
                g = f - d;
            c -= g;
            if (a < f) {
                g = f - a;
                return c + g
            }
            if (a <= b.end(e)) return c;
            d = b.end(e)
        }
        return c
    }

    function l(a, b, c, d) {
        if (c.length() < 1) return 0;
        d == null && (d = n(a, c));
        a < c.start(d) && (a = c.start(d));
        a > c.end(d) && (a = c.end(d));
        var e = a + b,
            f = c.end(c.length() - 1),
            g = c.start(0);
        if (e <= g) return g;
        if (e >= f) return f;
        if (e >= c.start(d) && e <= c.end(d)) return e;
        if (e < c.start(d)) {
            if (d < 1) return g;
            g = a - c.start(d);
            g = b + g;
            var h = c.end(d - 1);
            return l(h, g, c, d - 1)
        }
        if (e > c.start(d)) {
            if (d >= c.length() - 1) return f;
            h = c.end(d) - a;
            g = b - h;
            e = c.start(d + 1);
            return l(e, g, c, d + 1)
        }
        return 0
    }

    function m(a, b) {
        b == null && (b = g);
        var c = a.end(a.length() - 1);
        return l(c, -1 * b, a)
    }

    function n(a, b) {
        if (b.length() < 1) return 0;
        var c = 0;
        while (c < b.length() - 1) {
            if (a < b.end(c)) return c;
            c++
        }
        return c
    }

    function c(a) {
        var c = h.get(a);
        if (c == null) {
            var d = b("uuidv4")();
            h.set(a, {
                sessionID: d,
                currentSequenceNumber: 0
            });
            return d
        }
        return c.sessionID
    }

    function d(a) {
        var c = h.get(a);
        if (c == null) {
            h.set(a, {
                sessionID: b("uuidv4")(),
                currentSequenceNumber: 0
            });
            return 0
        }
        return ++c.currentSequenceNumber
    }

    function f(a) {
        var c = a.getSeekableRanges();
        if (c) {
            var d = k(a.getCurrentTimePosition(), c);
            c = c.start(0);
            s(a, c);
            b("LiveVideoPlayerActions").setIsRewound(a, !0);
            r("go_to_beginning", a, d, null, 0, null)
        }
    }

    function o(a) {
        var c = a.getSeekableRanges();
        if (!c) return;
        var d = a.getCurrentTimePosition(),
            e = k(d, c);
        d = l(d, -10, c);
        s(a, d);
        b("LiveVideoPlayerActions").setIsRewound(a, !0);
        r("back_button", a, e, null, null, d)
    }

    function p(a) {
        var c = a.getSeekableRanges();
        if (!c) return;
        var d = a.getCurrentTimePosition(),
            e = k(d, c);
        d = l(d, 10, c);
        s(a, d);
        c = m(c);
        a.isState("playing") && c - d < 1 && b("LiveVideoPlayerActions").setIsRewound(a, !1);
        r("forward_button", a, e, null, null, d)
    }

    function q(a) {
        var c = a.getSeekableRanges();
        if (c) {
            var d = a.getCurrentTimePosition();
            d = k(d, c);
            c = c.end(c.length() - 1);
            s(a, c);
            a.isState("paused") && a.play("user_initiated");
            b("LiveVideoPlayerActions").setIsRewound(a, !1);
            r("go_to_live", a, d, null, null, c)
        }
    }

    function r(a, c, d, e, f, g) {
        var h = c.getSeekableRanges(),
            i = h ? j(h) : 0;
        d == null && e != null && h != null && (d = k(e, h));
        f == null && g != null && h != null && (f = k(g, h));
        new(b("LiveVideoRewindTypedLogger"))().setEvent(a).setPositionBefore(d).setPositionAfter(f).setVideoDuration(i).setVideoID(c.getVideoID()).setSessionID(t.getLoggingSessionID(c.getVideoPlayerID())).setActionSequenceNumber(t.getLoggingSequenceNumber(c.getVideoPlayerID())).log()
    }

    function s(a, b) {
        var c = a.getState() === "paused";
        a.pause("seek_initiated");
        setTimeout(function() {
            a.seek(b), c || a.play("seek_initiated")
        }, i)
    }
    var t = {
        getSeekTime: l,
        getAbsolutePosition: a,
        getLiveHeadTimestamp: m,
        getLoggingSessionID: c,
        getLoggingSequenceNumber: d,
        getRelativePosition: k,
        getTotalDuration: j,
        goToBeginning: f,
        goToLive: q,
        logLiveRewindEvent: r,
        seekBack: o,
        seekForward: p,
        LIVE_HEAD_BUFFER_S: g
    };
    e.exports = t
}), null);
__d("VideoClipButton.react", ["cx", "fbt", "ix", "AbstractButton.react", "Arbiter", "Image.react", "TooltipData", "XUISpinner.react", "XUIText.react", "react"], (function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k, l = k || d("react"),
        m = i._("Generating clip...");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
                isClipping: !1
            }, c.$1 = null, c.$2 = function() {
                c.setState({
                    isClipping: !1
                })
            }, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = b.prototype;
        e.componentDidMount = function() {
            this.$1 = c("Arbiter").subscribe("GamesVideoClipping/clipReady", this.$2)
        };
        e.componentWillUnmount = function() {
            this.$1 && c("Arbiter").unsubscribe(this.$1)
        };
        e.render = function() {
            var a, b = this,
                e = i._("Create a clip from the last {num_seconds} seconds", [i._param("num_seconds", this.props.defaultLengthInSec)]);
            return this.state.isClipping ? l.jsx(c("XUIText.react"), {
                className: "_zbd _25cu",
                "data-hover": "tooltip",
                "data-tooltip-content": m,
                children: l.jsx(c("XUISpinner.react"), {
                    className: "_rwt",
                    background: "light",
                    size: "small",
                    paused: !1
                })
            }) : l.jsx(c("AbstractButton.react"), babelHelpers["extends"]({}, d("TooltipData").propsFor(e, "above"), {
                className: "_zbd _8z3u",
                image: l.jsx(c("Image.react"), {
                    className: "_rwt",
                    src: this.props.iconSrc
                }),
                label: (a = this.props.buttonLabel) != null ? a : e,
                labelIsHidden: this.props.buttonLabel === null,
                onClick: function() {
                    b.setState({
                        isClipping: !0
                    }), b.props.onClipVideo()
                },
                tabIndex: "0"
            }))
        };
        return b
    }(l.Component);
    a.defaultProps = {
        buttonLabel: null,
        iconSrc: j("468574")
    };
    g["default"] = a
}), 98);
__d("VideoFBIconControl.react", ["cx", "fbt", "ix", "AbstractButton.react", "Image.react", "TooltipData", "URI", "react"], (function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k, l, m = l || d("react"),
        n = 2;
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var e = b.prototype;
        e.render = function() {
            var a = new(k || (k = c("URI")))(this.props.permalinkURL).addQueryData("t", Math.max(0, Math.floor(this.props.playbackPosTimestamp) - n));
            return m.jsx(c("AbstractButton.react"), babelHelpers["extends"]({}, d("TooltipData").propsFor(this.props.label, "above"), {
                className: "_zbd",
                href: a,
                image: m.jsx(c("Image.react"), {
                    className: "_rwt",
                    src: j("804741")
                }),
                label: this.props.label,
                labelIsHidden: this.props.labelIsHidden,
                ref: "button",
                tabIndex: "0",
                target: "_blank",
                type: "button"
            }))
        };
        return b
    }(m.Component);
    a.defaultProps = {
        label: i._("Click to watch on Facebook"),
        labelIsHidden: !0
    };
    g["default"] = a
}), 98);
__d("VideoFullscreenControl.react", ["cx", "fbt", "ix", "AbstractVideoFullscreenControl.react", "Image.react", "ReactDOM", "VideoPlayerExperiments", "react", "shallowCompare"], (function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k, l = k || d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var e = b.prototype;
        e.shouldComponentUpdate = function(a, b) {
            return c("shallowCompare")(this, a, b)
        };
        e.onMouseOut = function(a) {
            d("ReactDOM").findDOMNode(this.refs.button).blur()
        };
        e.render = function() {
            var a;
            !c("VideoPlayerExperiments").fourArrowFullScreen ? a = this.props.isFullscreen ? j("463022") : j("407577") : a = this.props.isFullscreen ? j("463031") : j("412613");
            a = l.jsx(c("Image.react"), {
                className: "_rwt",
                src: a
            });
            var b = this.props.isFullscreen ? i._("Exit full screen") : i._("Enter fullscreen");
            return l.jsx(c("AbstractVideoFullscreenControl.react"), babelHelpers["extends"]({}, this.props, {
                className: "_zbd" + (this.props.disabled ? " _132h" : "") + " _39ip",
                "data-testid": void 0,
                disabled: this.props.disabled,
                image: a,
                onMouseOut: this.onMouseOut.bind(this),
                ref: "button",
                tabIndex: this.props.tabIndex,
                type: "button",
                label: b,
                labelIsHidden: !0
            }))
        };
        return b
    }(l.Component);
    g["default"] = a
}), 98);
__d("VideoPlaybackControl.react", ["cx", "fbt", "ix", "AbstractButton.react", "Image.react", "ReactDOM", "TooltipData", "react", "shallowCompare"], (function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k, l = k || d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            b = a.call(this, b) || this;
            b.state = {
                awaitingUpdate: !1,
                isPlayingOverwrite: !1
            };
            return b
        }
        var e = b.prototype;
        e.shouldComponentUpdate = function(a, b) {
            return c("shallowCompare")(this, a, b)
        };
        e.isPlaying = function() {
            return this.state.awaitingUpdate ? this.state.isPlayingOverwrite : this.props.isPlaying
        };
        e.onButtonClick = function() {
            var a = this.isPlaying();
            this.setState({
                awaitingUpdate: !0,
                isPlayingOverwrite: !a
            });
            a ? this.props.onPause && this.props.onPause() : this.props.onPlay && this.props.onPlay()
        };
        e.UNSAFE_componentWillReceiveProps = function() {
            this.setState({
                awaitingUpdate: !1
            })
        };
        e.onMouseOut = function(a) {
            d("ReactDOM").findDOMNode(this.refs.button).blur()
        };
        e.render = function() {
            var a = null,
                b = "";
            this.props.finishedPlaying ? (this.props.useDarkTheme ? a = j("463014") : a = j("463019"), b = i._("Replay")) : this.props.isLiveVideo ? a = this.isPlaying() ? j("463008") : j("431972") : (this.props.useDarkTheme ? a = this.isPlaying() ? j("463003") : j("462853") : a = this.isPlaying() ? j("463005") : j("374088"), b = this.isPlaying() ? i._("Pause") : i._("Play"));
            a = l.jsx(c("Image.react"), {
                className: "_rwt",
                src: a
            });
            var e = (this.props.isLiveVideo ? "" : "_zbd") + (this.props.isLiveVideo ? " _rx5" : "") + " _2sm1";
            return l.jsx(c("AbstractButton.react"), babelHelpers["extends"]({}, d("TooltipData").propsFor(b, "above"), {
                className: e,
                "data-testid": void 0,
                image: a,
                label: b,
                labelIsHidden: !0,
                onClick: this.onButtonClick.bind(this),
                onMouseOut: this.onMouseOut.bind(this),
                ref: "button",
                tabIndex: this.props.tabIndex,
                type: "button"
            }))
        };
        return b
    }(l.Component);
    a.defaultProps = {
        useDarkTheme: !1
    };
    g["default"] = a
}), 98);
__d("VideoPlaybackRateControl.react", ["cx", "fbt", "AbstractButton.react", "PlaybackSpeedExperiments", "VideoPlayerExperiments", "react", "shallowCompare"], (function(a, b, c, d, e, f, g, h, i) {
    var j, k = j || d("react");

    function l(a) {
        return a.toFixed(2).replace(/\.0+/, ".0") + "x"
    }
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
                isMenuOpen: !1,
                isFocusTriggeredByMouse: !1,
                rate: 1
            }, c.onFocus = function() {
                c.state.isFocusTriggeredByMouse || c.setState({
                    isMenuOpen: !0
                })
            }, c.onBlur = function() {
                c.state.isFocusTriggeredByMouse ? c.setState({
                    isFocusTriggeredByMouse: !1
                }) : c.setState({
                    isMenuOpen: !1
                })
            }, c.onMouseDown = function() {
                return c.setState({
                    isFocusTriggeredByMouse: !0
                })
            }, c.onMouseOverButton = function() {
                return c.setState({
                    isMenuOpen: !0
                })
            }, c.onMouseLeave = function() {
                return c.setState({
                    isMenuOpen: !1
                })
            }, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = b.prototype;
        e.shouldComponentUpdate = function(a, b) {
            return c("shallowCompare")(this, a, b)
        };
        e.createRateItem = function(a, b, c) {
            var d = function(a) {
                    c(), a.preventDefault()
                },
                e = null;
            b && (e = k.jsx("div", {
                className: "_2iw1"
            }));
            b = k.jsx("div", {
                className: "_2iw3",
                style: {
                    backgroundColor: "inherit"
                },
                children: e
            });
            return k.jsxs("a", {
                href: "#",
                className: "_2iw4",
                onClick: d,
                tabIndex: this.props.tabIndex,
                children: [b, k.jsx("div", {
                    className: "_2iw5 _2iw6",
                    children: a
                })]
            }, a)
        };
        e.render = function() {
            var a = this,
                b = l(this.state.rate),
                e = null;
            if (!this.props.disabled) {
                var f = d("PlaybackSpeedExperiments").enableWwwPlaybackSpeedControl() ? [.5, .75, 1, 1.25, 1.5, 1.75, 2] : [.5, 1, 1.25, 1.5, 1.75, 2, 2.5, 3, 3.5, 4, 5];
                f = f.map(function(b) {
                    return a.createRateItem(l(b), a.state.rate == b, function() {
                        a.props.onSelectPlaybackRate && a.props.onSelectPlaybackRate(b), a.setState({
                            rate: b
                        })
                    })
                });
                e = k.jsx("div", {
                    className: "_67bw" + (this.state.isMenuOpen ? " _2iw8" : ""),
                    children: k.jsx("div", {
                        className: "_2i_w",
                        children: k.jsxs("div", {
                            className: "_2i_x",
                            children: [k.jsx("div", {
                                className: "_2iw5",
                                children: i._("Play speed")
                            }), f, k.jsx("div", {
                                className: "_ukl"
                            })]
                        })
                    })
                })
            }
            f = "_zbd _66_y" + (!c("VideoPlayerExperiments").embeddedPlayerEnhancements || !this.props.isEmbedded ? " _66_z" : "");
            f = k.jsx(c("AbstractButton.react"), {
                className: f,
                label: b,
                onMouseDown: this.onMouseDown,
                onMouseOver: this.onMouseOverButton,
                ref: "button",
                tabIndex: this.props.tabIndex,
                type: "button"
            });
            return k.jsxs("div", {
                className: "_2j04",
                onFocus: this.onFocus,
                onBlur: this.onBlur,
                onMouseLeave: this.onMouseLeave,
                children: [f, e]
            })
        };
        return b
    }(k.Component);
    a.defaultProps = {
        tabIndex: "-1"
    };
    g["default"] = a
}), 98);
__d("VideoPlaybackTimer.react", ["cx", "DateConsts", "ShimButton.react", "VideoPlayerExperiments", "joinClasses", "react", "shallowCompare"], (function(a, b, c, d, e, f, g, h) {
    var i, j = i || d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            b = a.call(this, b) || this;
            b.state = {
                displayRemainingTime: !b.props.displayElapsedTime,
                displayPreferenceSet: !1
            };
            return b
        }
        var e = b.prototype;
        e.shouldComponentUpdate = function(a, b) {
            return c("shallowCompare")(this, a, b)
        };
        e.UNSAFE_componentWillReceiveProps = function(a) {
            this.state.displayPreferenceSet || this.setState({
                displayRemainingTime: !a.displayElapsedTime
            })
        };
        e.getClock = function(a) {
            var b = "";
            isNaN(a) ? a = 0 : a < 0 && (a *= -1, b = "-");
            var c = Math.floor(a / d("DateConsts").SEC_PER_HOUR),
                e = Math.floor((a - c * d("DateConsts").SEC_PER_HOUR) / d("DateConsts").SEC_PER_MIN),
                f = null;
            !this.props.displayMilliseconds ? f = Math.round(a - c * d("DateConsts").SEC_PER_HOUR - e * d("DateConsts").SEC_PER_MIN) : f = Math.floor(a - c * d("DateConsts").SEC_PER_HOUR - e * d("DateConsts").SEC_PER_MIN);
            f === d("DateConsts").SEC_PER_MIN && (f = 0, e++);
            e === d("DateConsts").MIN_PER_HOUR && (e = 0, c++);
            a = a - c * d("DateConsts").SEC_PER_HOUR - e * d("DateConsts").SEC_PER_MIN - f;
            a = Math.round(a * d("DateConsts").MS_PER_SEC);
            var g = ("0" + e).slice(-2);
            f = ("0" + f).slice(-2);
            a = ("00" + a).slice(-3);
            b = b;
            c === 0 ? b += e + ":" + f : b += c + ":" + g + ":" + f;
            this.props.displayMilliseconds && (b += "." + a);
            return b
        };
        e.onButtonClick = function() {
            this.setState({
                displayRemainingTime: !this.state.displayRemainingTime,
                displayPreferenceSet: !0
            })
        };
        e.render = function() {
            var a = this.state.displayPreferenceSet ? this.state.displayRemainingTime : !this.props.displayElapsedTime;
            a = a ? this.props.remainingTimestamp : this.props.playbackPosTimestamp;
            var b = "_66_y" + ((!c("VideoPlayerExperiments").embeddedPlayerEnhancements || !this.props.isEmbedded) && !this.props.displayBothTimes ? " _66_z" : "");
            this.props.isInScrubberPreview && (b = "_66_-");
            var d = babelHelpers["extends"]({}, this.props);
            delete d.displayElapsedTime;
            delete d.displayMilliseconds;
            delete d.isInScrubberPreview;
            delete d.playbackPosTimestamp;
            delete d.remainingTimestamp;
            delete d.isEmbedded;
            return this.props.displayBothTimes ? j.jsxs("div", babelHelpers["extends"]({}, d, {
                className: c("joinClasses")(this.props.className, b),
                children: [j.jsx("span", {
                    className: "_66_z",
                    children: this.getClock(this.props.playbackPosTimestamp)
                }), j.jsx("span", {
                    children: " / "
                }), j.jsx("span", {
                    children: this.getClock(this.props.playbackDurationTimestamp)
                })]
            })) : j.jsx(c("ShimButton.react"), babelHelpers["extends"]({}, d, {
                className: c("joinClasses")(this.props.className, b),
                onClick: this.props.isLiveVideo ? void 0 : this.onButtonClick.bind(this),
                children: this.getClock(a)
            }))
        };
        return b
    }(j.Component);
    a.defaultProps = {
        isInScrubberPreview: !1,
        playbackDurationTimestamp: 0,
        playbackPosTimestamp: 0,
        remainingTimestamp: 0,
        displayElapsedTime: !1,
        displayMilliseconds: !1,
        displayBothTimes: !1,
        useDarkTheme: !1
    };
    g["default"] = a
}), 98);
__d("VideoPollCardDispatcher", ["ExplicitRegistrationDispatcher"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = new(c("ExplicitRegistrationDispatcher"))({
        strict: !1
    });
    g["default"] = a
}), 98);
__d("VideoPollCardActionTypes", ["keyMirror"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("keyMirror")({
        MARK_POLL_CARD_ACTIVE: "",
        MARK_POLL_CARD_INACTIVE: ""
    });
    b = a;
    g["default"] = b
}), 98);
__d("VideoPollCardStore", ["FluxReduceStore", "ImmutableRecordWithV4Types", "VideoPollCardActionTypes", "VideoPollCardDispatcher", "immutable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("ImmutableRecordWithV4Types").Record({
        pollCardsActiveForVPC: {}
    });
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
            return (b = d = a.call.apply(a, [this].concat(f)) || this, d.reduce = function(a, b) {
                var d = b.pollEventID,
                    e = b.vpcID;
                switch (b.type) {
                    case c("VideoPollCardActionTypes").MARK_POLL_CARD_ACTIVE:
                        if (a.pollCardsActiveForVPC[e] === null) {
                            b = a.pollCardsActiveForVPC;
                            var f = c("immutable").List();
                            b[e] = f.push(d);
                            a = a.set("pollCardsActiveForVPC", b)
                        } else {
                            f = a.pollCardsActiveForVPC;
                            b = (b = a.pollCardsActiveForVPC[e]) != null ? b : c("immutable").List();
                            f[e] = b.push(d);
                            a = a.set("pollCardsActiveForVPC", f)
                        }
                        return a;
                    case c("VideoPollCardActionTypes").MARK_POLL_CARD_INACTIVE:
                        if (a.pollCardsActiveForVPC[e] !== null) {
                            b = a.pollCardsActiveForVPC;
                            f = (f = b[e]) != null ? f : c("immutable").List();
                            f = f.filter(function(a) {
                                return a !== d
                            });
                            b[e] = f;
                            a = a.set("pollCardsActiveForVPC", b)
                        }
                        return a;
                    default:
                        return a
                }
            }, b) || babelHelpers.assertThisInitialized(d)
        }
        var d = b.prototype;
        d.getInitialState = function() {
            return h()
        };
        return b
    }(c("FluxReduceStore"));
    a.__moduleID = f.id;
    b = new a(c("VideoPollCardDispatcher"));
    g["default"] = b
}), 98);
__d("VideoInstreamUtils", ["fbt", "DateConsts", "VideoInstreamAdsConstants"], (function(a, b, c, d, e, f, g, h) {
    function a(a) {
        var b = 0;
        a = a.split(".");
        if (a.length > 2) return null;
        if (a.length === 2) {
            if (a[1].length === 0) return null;
            var c = a[1];
            while (c.length < 3) c += "0";
            c = Number(c);
            if (isNaN(c) || c < 0 || c >= d("DateConsts").MS_PER_SEC) return null;
            b += c / d("DateConsts").MS_PER_SEC
        }
        c = a[0].split(":");
        if (c.length > 3) return null;
        for (a = 0; a < c.length; a++) {
            if (c[a].length === 0) return null;
            var e = Number(c[a]);
            if (isNaN(e) || e < 0 || e >= 60) return null;
            b += e * Math.pow(60, c.length - a - 1)
        }
        return b
    }

    function b(a) {
        var b;
        a = Math.round(a * (b = d("DateConsts")).MS_PER_SEC) / b.MS_PER_SEC;
        var c = Math.floor(a / b.SEC_PER_HOUR);
        a = a - c * b.SEC_PER_HOUR;
        var e = Math.floor(a / b.SEC_PER_MIN),
            f = Math.floor(a - e * b.SEC_PER_MIN);
        a = Math.round(a * b.MS_PER_SEC);
        b = ("0" + c).slice(-2);
        e = ("0" + e).slice(-2);
        f = ("0" + f).slice(-2);
        a = ("00" + a).slice(-3);
        var g = "";
        c > 0 && (g += b + ":");
        return g += e + ":" + f + "." + a
    }

    function i(a, b) {
        a = Math.ceil(a) * d("DateConsts").MS_PER_SEC;
        if (a < c("VideoInstreamAdsConstants").AD_INSERTION_MINIMUM_VIDEO_LENGTH_MS) return 0;
        if (!b) return c("VideoInstreamAdsConstants").AD_INSERTION_MAXIMUM_NUMBER_OF_AD_BREAKS;
        b = (a - c("VideoInstreamAdsConstants").AD_INSERTION_END_TIME_OFFSET_MS - c("VideoInstreamAdsConstants").AD_INSERTION_START_TIME_OFFSET_MS) / c("VideoInstreamAdsConstants").AD_INSERTION_INTERVAL_MS;
        return Math.max(0, Math.floor(b) + 1)
    }

    function j(a, b, e) {
        var f = i(b, e);
        if (f === 0 || !e && a.length >= f) return [];
        var g = c("VideoInstreamAdsConstants").AD_INSERTION_START_TIME_OFFSET_MS / d("DateConsts").MS_PER_SEC,
            h = b - c("VideoInstreamAdsConstants").AD_INSERTION_END_TIME_OFFSET_MS / d("DateConsts").MS_PER_SEC,
            j = c("VideoInstreamAdsConstants").AD_INSERTION_INTERVAL_MS / d("DateConsts").MS_PER_SEC;
        if (a.length === 0 || !e) return [{
            start: g,
            end: h
        }];
        var k = [];
        a.forEach(function(b, c) {
            if (c === 0) {
                var d = b.timeOffset - j;
                d >= g && k.push({
                    start: g,
                    end: d
                })
            }
            if (c - 1 >= 0) {
                d = a[c - 1].timeOffset + j;
                var e = b.timeOffset - j;
                d <= e && k.push({
                    start: d,
                    end: e
                })
            }
            if (c === a.length - 1) {
                d = b.timeOffset + j;
                d <= h && k.push({
                    start: d,
                    end: h
                })
            }
        });
        return k
    }

    function e(a, b, c, d) {
        if (a == null) return !1;
        c = j(c, b, d);
        for (b = 0; b < c.length; b++)
            if (a >= c[b].start && a <= c[b].end) return !0;
        return !1
    }

    function f(a, b, e, f) {
        var g = a[b];
        if (g.timeOffset * d("DateConsts").MS_PER_SEC < c("VideoInstreamAdsConstants").AD_INSERTION_START_TIME_OFFSET_MS) return !0;
        if ((e - g.timeOffset) * d("DateConsts").MS_PER_SEC < c("VideoInstreamAdsConstants").AD_INSERTION_END_TIME_OFFSET_MS) return !0;
        if (f)
            for (e = 0; e < a.length; e++) {
                if (e === b || a[e].timeOffset >= g.timeOffset) continue;
                if ((g.timeOffset - a[e].timeOffset) * d("DateConsts").MS_PER_SEC < c("VideoInstreamAdsConstants").AD_INSERTION_INTERVAL_MS) return !0
            }
        return !1
    }

    function k(a, b, c, d) {
        a = new Set(a);
        i(c, d) === 0 && a.add("video_too_short");
        b && a.add("branded_content");
        return l(a)
    }

    function l(a) {
        if (a.size === 0) return {
            disabled: !1,
            errorMessageHeader: null,
            errorMessageContent: null
        };
        else if (a.has("video_too_short")) return {
            disabled: !0,
            errorMessageHeader: h._({
                "*": "Videos must be {insertion interval} seconds or longer"
            }, [h._param("insertion interval", c("VideoInstreamAdsConstants").AD_INSERTION_MINIMUM_VIDEO_LENGTH, [0])]),
            errorMessageContent: h._("Your video is too short to include in-stream ads.")
        };
        else if (a.has("not_organic_upload")) return {
            disabled: !0,
            errorMessageHeader: h._("In-stream ads not available"),
            errorMessageContent: h._("In-stream ads can only be placed in original videos, not crossposted or reshared videos.")
        };
        else if (a.has("broadcast")) return {
            disabled: !0,
            errorMessageHeader: h._("In-stream ads not available"),
            errorMessageContent: h._("Live videos are not eligible for in-stream ads, even if they are no longer live.")
        };
        else if (a.has("branded_content")) return {
            disabled: !0,
            errorMessageHeader: h._("In-stream ads not available"),
            errorMessageContent: h._("In-stream ads can't be used in this video because it contains tagged business partners.")
        };
        else if (a.has("asset_not_owned_by_page") || a.has("unowned_asset_crosspost")) return {
            disabled: !0,
            errorMessageHeader: h._("In-stream ads not available"),
            errorMessageContent: h._("You can only modify in-stream ads in videos that belong to Pages that you manage.")
        };
        return {
            disabled: !0,
            errorMessageHeader: h._("In-stream ads not available"),
            errorMessageContent: null
        }
    }
    g.convertFormattedTimeToSeconds = a;
    g.convertTimestampToFormattedString = b;
    g.getMaxPossibleAdBreaks = i;
    g.getEligibleTimeSegments = j;
    g.isInEligibleTimeSegments = e;
    g.isAdBreakViolatingInsertionRules = f;
    g.getAdBreakTabState = k;
    g._getAdBreakTabStateFromDisabledReasons = l
}), 98);
__d("VideoScrubberPointOfInterestBar.react", ["cx", "ShimButton.react", "VideoPlaybackTimer.react", "react"], (function(a, b, c, d, e, f, g, h) {
    var i, j = i || d("react"),
        k = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                var a, c;
                for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
                return (a = c = b.call.apply(b, [this].concat(e)) || this, c.state = {
                    visibility: "hidden"
                }, a) || babelHelpers.assertThisInitialized(c)
            }
            var d = a.prototype;
            d.render = function() {
                var a = this,
                    b = this.props.timestamp,
                    d = b * 100 / this.props.playbackDuration + "%",
                    e = j.jsx(c("VideoPlaybackTimer.react"), {
                        className: "_zs-",
                        isInScrubberPreview: !0,
                        playbackPosTimestamp: 0,
                        remainingTimestamp: b,
                        style: {
                            left: d,
                            visibility: this.state.visibility
                        }
                    });
                return j.jsxs("div", {
                    children: [j.jsx(c("ShimButton.react"), {
                        className: "_zt2" + (this.props.isActive ? " _zt3" : ""),
                        onClick: function(c) {
                            return a.props.onPointOfInterestSelect(b)
                        },
                        onMouseEnter: function(b) {
                            return a.setState({
                                visibility: "visible"
                            })
                        },
                        onMouseLeave: function(b) {
                            return a.setState({
                                visibility: "hidden"
                            })
                        },
                        style: {
                            left: d
                        }
                    }), this.props.showPointOfInterestTimestamps && e]
                })
            };
            return a
        }(j.PureComponent);
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.$1 = function(a) {
                return j.jsx(k, {
                    playbackDuration: c.props.playbackDuration,
                    timestamp: a,
                    isActive: a === c.props.currentPointOfInterest,
                    onPointOfInterestSelect: c.props.onPointOfInterestSelect,
                    showPointOfInterestTimestamps: !!c.props.showPointOfInterestTimestamps
                }, "poi" + a)
            }, b) || babelHelpers.assertThisInitialized(c)
        }
        var c = b.prototype;
        c.shouldComponentUpdate = function(a, b) {
            var c = this;
            return a.tabIndex != this.props.tabIndex || a.currentPointOfInterest !== this.props.currentPointOfInterest || a.playbackDuration != this.props.playbackDuration || a.pointsOfInterest.length != this.props.pointsOfInterest.length || a.pointsOfInterest.some(function(a, b) {
                return c.props.pointsOfInterest[b] != a
            })
        };
        c.render = function() {
            return j.jsx("div", {
                className: "_zud",
                tabIndex: this.props.tabIndex,
                children: j.jsx("div", {
                    className: "_zue",
                    children: this.props.pointsOfInterest.map(this.$1, this)
                })
            })
        };
        return b
    }(j.Component);
    g["default"] = a
}), 98);
__d("VideoScrubberPreviewSpriteCalculation", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        var c = g(b.maxImagesPerSprite, b.timeIntervalBetweenImages);
        a = Math.floor(a % c / b.timeIntervalBetweenImages);
        c = Math.floor(a / b.imagesPerRow);
        a = a % b.imagesPerRow;
        return {
            x: a * b.previewScrubberWidth,
            y: c * b.previewScrubberHeight
        }
    }

    function b(a, b, c) {
        b = g(b, c);
        return Math.floor(a / b) + 1
    }

    function g(a, b) {
        return a * b
    }
    f.getImageCoordinatesInSpriteByTime = a;
    f.getSpriteIndex = b;
    f.getTotalTimeInSprite = g
}), 66);
__d("VideoScrubber.react", ["cx", "ix", "Arbiter", "ClickableArea.react", "DateConsts", "EventListener", "Image.react", "Keys", "ProfileTile.react", "ReactDOM", "Tooltip.react", "VideoInstreamAdsConstants", "VideoInstreamUtils", "VideoPlaybackTimer.react", "VideoScrubberPointOfInterestBar.react", "VideoScrubberPreviewSpriteCalculation", "emptyFunction", "getElementPosition", "joinClasses", "react", "shallowCompare"], (function(a, b, c, d, e, f, g, h, i) {
    var j, k = j || d("react");

    function l(a, b) {
        a = a - b.x;
        a = a / b.width;
        return Math.min(Math.max(0, a), 1)
    }

    function m(a, b) {
        if (a == null) return null;
        if (b == null) return null;
        for (var c = 0; c < a.length; ++c) {
            var d = a[c];
            if (d.identifier === b) return d
        }
        return null
    }
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var c;
            c = a.call(this, b) || this;
            c.$7 = null;
            c.$8 = null;
            c.$9 = null;
            c.$11 = null;
            c.onMouseEnterScrubberNub = function() {
                c.props.showVideoSliderWarningTooltip && c.setState({
                    hoverNub: !0
                })
            };
            c.onMouseLeaveScrubberNub = function() {
                c.props.showVideoSliderWarningTooltip && c.setState({
                    hoverNub: !1
                })
            };
            c.$6 = new Map([
                [0, ""]
            ]);
            c.$10 = 0;
            c.state = {
                awaitingUpdate: !1,
                hoverNub: !1,
                mouseOver: !1,
                nubEngaged: !1,
                previewRatio: 0,
                scrubRatio: 0,
                timecodeRatio: 0,
                timecodeTimestamp: 0,
                scrubberPreviewSpriteIndex: 0,
                scrubberPreviewBackgroundPosition: {
                    x: 0,
                    y: 0
                },
                previewThumbnailInformation: {
                    timeIntervalBetweenImages: 0,
                    maxImagesPerSprite: 0,
                    imagesPerRow: 0,
                    imagesPerColumn: 0,
                    previewScrubberWidth: 0,
                    previewScrubberHeight: 0,
                    stereoMode: null,
                    scrubberVideoURI: null,
                    useScrubberVideo: !1
                },
                lastSpriteDimension: {
                    numRow: 0,
                    numColumn: 0
                },
                shouldIgnoreClipStartTS: !1
            };
            return c
        }
        var e = b.prototype;
        e.shouldComponentUpdate = function(a, b) {
            return c("shallowCompare")(this, a, b)
        };
        e.onDragNubBeginImpl = function(a, b) {
            var c = this.$12();
            this.setState({
                nubEngaged: !0,
                scrubRatio: l(b, c)
            });
            this.props.onScrubBegin && this.props.onScrubBegin();
            a.stopPropagation();
            a.preventDefault()
        };
        e.onDragNubBeginClick = function(a) {
            if (a.button !== 0) return;
            this.onDragNubBeginImpl(a, a.clientX)
        };
        e.onDragNubBeginTouch = function(a) {
            if (this.props.alwaysShowThumbnail) return;
            var b = a.changedTouches;
            if (b == null) return;
            b = b[0];
            if (b == null) return;
            this.$11 = b.identifier;
            this.onDragNubBeginImpl(a, b.clientX)
        };
        e.UNSAFE_componentWillReceiveProps = function(a) {
            this.setState({
                awaitingUpdate: !1
            });
            if (this.props.alwaysShowThumbnail) {
                this.$9 = null;
                this.$8 = null;
                var b = this.$12();
                a = b.x + b.width * this.getPlayedRatio(a.playbackDuration, a.playbackPosition);
                this.$13(a, b)
            }
        };
        e.componentDidUpdate = function(a, b) {
            var d = this;
            if (!b.nubEngaged && this.state.nubEngaged) {
                this.$1 = (a = c("EventListener")).listen(document, "mousemove", function(a) {
                    var b = a.clientX;
                    d.onDragNubUpdate(b);
                    a.preventDefault();
                    a.stopPropagation()
                });
                this.$2 = a.listen(document, "mouseup", function(a) {
                    var b = a.clientX;
                    d.onDragNubRelease(b);
                    a.preventDefault();
                    a.stopPropagation()
                });
                this.$4 = a.listen(document, "touchmove", function(a) {
                    var b = m(a.changedTouches, d.$11);
                    if (b == null) return;
                    d.onDragNubUpdate(b.clientX);
                    a.preventDefault();
                    a.stopPropagation()
                });
                this.$3 = a.listen(document, "touchend", function(a) {
                    var b = m(a.changedTouches, d.$11);
                    if (b == null) return;
                    d.$11 = null;
                    d.onDragNubRelease(b.clientX);
                    a.preventDefault();
                    a.stopPropagation()
                })
            } else b.nubEngaged && !this.state.nubEngaged && (this.$1 && this.$1.remove(), this.$2 && this.$2.remove(), this.$4 && this.$4.remove(), this.$3 && this.$3.remove());
            !b.mouseOver && this.state.mouseOver ? this.$5 = c("EventListener").listen(document, "mousemove", function(a) {
                var b = d.$12();
                d.$13(a.clientX, b);
                a.preventDefault();
                a.stopPropagation()
            }) : b.mouseOver && !this.state.mouseOver && (this.$5 && this.$5.remove())
        };
        e.$13 = function(a, b) {
            var c = this,
                e = this.props.playbackDuration;
            if (!e) return;
            var f = l(a, b) * e,
                g = (e = this.$8) != null ? e : this.$14();
            if (!this.props.hasScrubberPreview) {
                e = l(a, b) - Math.ceil(g.width / 2) / b.width;
                this.setState({
                    timecodeTimestamp: f,
                    timecodeRatio: e
                })
            } else this.props.previewThumbnailInformation && (this.state.previewThumbnailInformation.previewScrubberWidth === 0 && this.retrievePreviewThumbnailInfo(), d("ReactDOM").unstable_batchedUpdates(function() {
                c.state.previewThumbnailInformation.useScrubberVideo && c.state.previewThumbnailInformation.scrubberVideoURI !== null ? c.updatePreviewThumbnailVideo(f, g, a) : c.props.scrubberPreviewSprites && c.updatePreviewThumbnail(c.props.scrubberPreviewSprites, f, g, a)
            }))
        };
        e.updatePreviewThumbnail = function(a, b, c, d) {
            this.setState({
                timecodeTimestamp: b
            });
            b = Math.floor(b);
            this.isSpriteMapURIFetched() || (this.$6 = a);
            if (this.state.previewThumbnailInformation) {
                a = this.state.previewThumbnailInformation;
                this.updatePreviewThumbnailImage(b, a)
            }
            this.updatePreviewThumbnailLocation(c, d)
        };
        e.updatePreviewThumbnailVideo = function(a, b, c) {
            this.setState({
                timecodeTimestamp: a
            });
            var e = d("ReactDOM").findDOMNode(this.refs.previewThumbnailVideo);
            e.currentTime = a / 30;
            this.updatePreviewThumbnailLocation(b, c)
        };
        e.updatePreviewThumbnailLocation = function(a, b) {
            var c, d;
            c = (c = this.$9) != null ? c : this.$15();
            d = (d = this.$7) != null ? d : this.$12();
            b = l(b, d) - Math.ceil(c.width / 2) / d.width;
            d = (c.width - a.width) / (2 * c.width);
            this.setState({
                timecodeRatio: d,
                previewRatio: b
            })
        };
        e.updatePreviewThumbnailImage = function(a, b) {
            var c = d("VideoScrubberPreviewSpriteCalculation").getImageCoordinatesInSpriteByTime(a, b);
            a = d("VideoScrubberPreviewSpriteCalculation").getSpriteIndex(a, b.maxImagesPerSprite, b.timeIntervalBetweenImages);
            if (a == this.getNumberOfSprites() && this.state.lastSpriteDimension.numRow == 0 && this.$6) {
                b = this.$6.get(a);
                var e = new Image(),
                    f = this.onLastImageLoad.bind(this);
                e.onload = function() {
                    f(this.width, this.height)
                };
                e.src = b
            }
            this.setState({
                scrubberPreviewSpriteIndex: a,
                scrubberPreviewBackgroundPosition: c
            })
        };
        e.onLastImageLoad = function(a, b) {
            this.setState({
                lastSpriteDimension: {
                    numRow: b / this.state.previewThumbnailInformation.previewScrubberHeight,
                    numColumn: a / this.state.previewThumbnailInformation.previewScrubberWidth
                }
            })
        };
        e.retrievePreviewThumbnailInfo = function() {
            this.setState({
                previewThumbnailInformation: this.props.previewThumbnailInformation
            })
        };
        e.isSpriteMapURIFetched = function() {
            if (this.$6) return this.$6.size > 1;
            else return !1
        };
        e.$12 = function() {
            var a = c("getElementPosition")(d("ReactDOM").findDOMNode(this.refs.bar));
            this.$7 = a;
            return a
        };
        e.$14 = function() {
            var a = c("getElementPosition")(d("ReactDOM").findDOMNode(this.refs.timecode));
            this.$8 = a;
            return a
        };
        e.$15 = function() {
            var a = c("getElementPosition")(d("ReactDOM").findDOMNode(this.refs.previewThumbnailContainer));
            this.$9 = a;
            return a
        };
        e.onDragNubUpdate = function(a) {
            var b = this.$12();
            this.$13(a, b);
            this.setState({
                scrubRatio: l(a, b)
            })
        };
        e.onDragNubRelease = function(a) {
            var b = this.$12();
            this.$13(a, b);
            var c = this.props.playbackDuration;
            a = l(a, b);
            b = this.state.awaitingUpdate;
            if (c) {
                c = a * c;
                this.props.onScrubEnd && (this.props.onScrubEnd(c), b = !0);
                var e = this.props.videoClipInfo;
                e && e.start_time_in_ms !== null && (c <= e.start_time_in_ms / d("DateConsts").MS_PER_SEC && this.setState({
                    shouldIgnoreClipStartTS: !0
                }))
            } else this.props.onScrubEnd && this.props.onScrubEnd(0);
            this.setState({
                nubEngaged: !1,
                awaitingUpdate: b,
                scrubRatio: a
            })
        };
        e.renderNub = function() {
            var a = k.jsx("div", {
                ref: "nub",
                className: "_2yua _4sxb" + (this.props.showVideoSliderWarningTooltip ? " _83lq" : ""),
                onMouseEnter: this.onMouseEnterScrubberNub,
                onMouseLeave: this.onMouseLeaveScrubberNub
            });
            return this.props.showVideoSliderWarningTooltip ? k.jsx(c("Tooltip.react"), {
                className: "_83lm _4sxb",
                tooltip: "Rewinding, pausing or skipping ahead in the video will be seen by all viewers.",
                children: a
            }) : a
        };
        e.getPlayedRatio = function(a, b) {
            if (this.state.nubEngaged || this.state.awaitingUpdate) return this.state.scrubRatio;
            if (!a || !b) return 0;
            b = b / a;
            return this.getRangeLimitedRatio(b)
        };
        e.getBufferedRatio = function() {
            var a = this.props.playbackDuration,
                b = this.props.bufferedPosition;
            if (!a || !b) return 0;
            b = b / a;
            return this.getRangeLimitedRatio(b)
        };
        e.getRangeLimitedRatio = function(a) {
            return isNaN(a) || a < 0 || a > 1 ? 0 : a
        };
        e.getNumberOfSprites = function() {
            return this.$6 ? this.$6.size : 0
        };
        e.getAdBreakIndicators = function() {
            if (!this.props.playbackDuration || !this.props.adBreaks) return null;
            var a = [];
            for (var b = 0; b < this.props.adBreaks.length; b++) {
                var e = this.props.adBreaks[b],
                    f = e.getTimeOffsetInMs();
                if (f == null) continue;
                f /= d("DateConsts").MS_PER_SEC;
                var g = this.props.playbackDuration;
                if (f < 0 || f > g) continue;
                f = {
                    left: f / g * 100 + "%"
                };
                g = [];
                this.props.adBreaksDisableReasons && (g = this.props.adBreaksDisableReasons[b]);
                var h = "[FB Only] The in-stream ad is disabled for " + g.join(", ") + ".";
                a.push(k.jsx("div", {
                    style: f,
                    className: (g.length === 0 ? "_1p4l" : "") + (g.length > 0 ? " _1p4m" : "") + (e.getIsAdBreakAutoInserted() && g.length === 0 ? " _1p4n" : "") + (e.getIsAdBreakAutoInserted() && g.length > 0 ? " _1p4o" : ""),
                    children: g.length > 0 ? k.jsx(c("Tooltip.react"), {
                        tooltip: h,
                        children: "X"
                    }) : null
                }, "ad_break_indicator_" + b))
            }
            return k.jsx("div", {
                children: a
            })
        };
        e.getInsertedAdBreaks = function() {
            var a = this;
            if (!this.props.playbackDuration || !this.props.insertedAdBreaks) return null;
            var b = [];
            this.props.insertedAdBreaks.map(function(c, d) {
                c = c.timeOffset;
                var e = a.props.playbackDuration;
                c = {
                    left: "calc(" + c / e * 100 + "% - 2px)"
                };
                b.push(k.jsx("div", {
                    style: c,
                    className: (a.props.isAdBreakInsertionWithoutGapRule ? "" : "_1p4q") + (a.props.isAdBreakInsertionWithoutGapRule ? " _1p4r" : "") + (a.props.isAdBreakDisabled ? " _1p4s" : ""),
                    children: a.props.isAdBreakInsertionWithoutGapRule ? null : d + 1
                }, "inserted_ad_break" + d))
            });
            return k.jsx("div", {
                children: b
            })
        };
        e.getEligibleAdBreaksTimeSegments = function() {
            var a = this;
            if (!this.props.playbackDuration || !this.props.insertedAdBreaks) return null;
            if (this.props.isAdBreakInsertionWithoutGapRule && this.props.insertedAdBreaks && this.props.insertedAdBreaks.length >= c("VideoInstreamAdsConstants").AD_INSERTION_MAXIMUM_NUMBER_OF_AD_BREAKS) return null;
            var b = 0;
            this.state.awaitingUpdate ? b = this.$10 : b = this.props.playbackPosition;
            var e = this.props.playbackDuration,
                f = d("VideoInstreamUtils").getEligibleTimeSegments(this.props.insertedAdBreaks, e, !this.props.isAdBreakInsertionWithoutGapRule);
            this.state.nubEngaged ? this.$10 = this.state.timecodeTimestamp : this.$10 = b;
            var g = [];
            f.forEach(function(b, c) {
                var d = (b.end - b.start) / e * 100,
                    f = a.$10 >= b.start && a.$10 <= b.end;
                b = {
                    left: "calc(" + b.start / e * 100 + "% - 2px)",
                    width: d + "%"
                };
                g.push(k.jsx("span", {
                    className: "_1p4t" + (f ? " _1p4u" : ""),
                    style: b
                }, "time_segment" + c))
            });
            return k.jsx("div", {
                className: "_1p50",
                children: g
            })
        };
        e.getInsertedStarsCues = function() {
            var a = this.props.selectedStarsCueTimestamp;
            if (!this.props.playbackDuration || a == null) return null;
            var b = this.props.playbackDuration,
                d = {
                    left: "calc(" + a / b * 100 + "% - 10px)"
                };
            a = {
                left: "calc(" + a / b * 100 + "% - 3px)"
            };
            return k.jsxs("div", {
                children: [k.jsx(c("Image.react"), {
                    src: i("1198335"),
                    style: d,
                    className: "_9evr"
                }), k.jsx("div", {
                    style: a,
                    className: "_9evs"
                })]
            })
        };
        e.getEligibleStarsCueTimeSegments = function() {
            var a = this,
                b = 10;
            if (!this.props.playbackDuration || this.props.showEligibleStarsCueTimeSegments !== !0) return null;
            var c;
            this.state.awaitingUpdate ? c = this.$10 : c = this.props.playbackPosition;
            var d = this.props.playbackDuration;
            b = [{
                start: b,
                end: d
            }];
            this.state.nubEngaged ? this.$10 = this.state.timecodeTimestamp : this.$10 = c;
            var e = [];
            b.forEach(function(b, c) {
                var f = (b.end - b.start) / d * 100,
                    g = a.$10 >= b.start && a.$10 <= b.end;
                b = {
                    left: "calc(" + b.start / d * 100 + "% - 2px)",
                    width: f + "%"
                };
                e.push(k.jsx("span", {
                    className: "_9evt" + (g ? " _1p4u" : ""),
                    style: b
                }, "time_segment" + c))
            });
            return k.jsx("div", {
                className: "_9evu",
                children: e
            })
        };
        e.getPollTimeSegments = function() {
            var a, b = this;
            if (!this.props.playbackDuration) return null;
            var d;
            if (!this.props.showPollCard) return null;
            this.state.awaitingUpdate ? d = this.$10 : d = this.props.playbackPosition;
            var e = this.props.playbackDuration;
            a = (a = this.props.pollTimestamps) != null ? a : [];
            this.state.nubEngaged ? this.$10 = this.state.timecodeTimestamp : this.$10 = d;
            var f = [];
            a.forEach(function(a, d) {
                var g = {
                        left: "calc(" + a / e * 100 + "%)"
                    },
                    h = b.$10 >= a;
                f.push(k.jsx(c("ClickableArea.react"), {
                    onClick: function(d) {
                        d.stopPropagation(), d.persist(), b.props.onScrubEnd(a), c("Arbiter").inform("PollIconClicked")
                    },
                    children: k.jsx("span", {
                        className: "_80r-",
                        style: g,
                        children: k.jsx(c("Image.react"), {
                            className: "_80rd",
                            src: h ? i("936893") : i("936896")
                        })
                    }, "poll_segment" + d)
                }, d));
                f.push(k.jsx("span", {
                    className: "_80re",
                    style: g
                }, "time_segment" + d))
            });
            return k.jsx("div", {
                className: "_80rf",
                children: f
            })
        };
        e.onMouseEnter = function(a) {
            if (this.props.alwaysShowThumbnail) return;
            this.$12();
            this.setState({
                mouseOver: !0
            })
        };
        e.onMouseLeave = function(a) {
            var b = this;
            if (this.props.alwaysShowThumbnail) return;
            d("ReactDOM").findDOMNode(this.refs.bar).blur();
            d("ReactDOM").unstable_batchedUpdates(function() {
                b.setState({
                    mouseOver: !1
                }), b.state.nubEngaged || b.setState({
                    scrubberPreviewSpriteIndex: 0,
                    scrubberPreviewBackgroundPosition: {
                        x: 0,
                        y: 0
                    }
                })
            });
            this.$9 = null;
            this.$8 = null
        };
        e.onMouseEnterOnThumbnailOrTimecode = function(a) {
            if (this.state.nubEngaged || this.props.alwaysShowThumbnail) return;
            this.props.hasScrubberPreview ? a = this.refs.previewThumbnailContainer : a = this.refs.timecode;
            a = d("ReactDOM").findDOMNode(a);
            a.style.visibility = "hidden"
        };
        e.onMouseLeaveOnThumbnailOrTimecode = function(a) {
            if (this.state.nubEngaged || this.props.alwaysShowThumbnail) return;
            this.props.hasScrubberPreview ? a = this.refs.previewThumbnailContainer : a = this.refs.timecode;
            a = d("ReactDOM").findDOMNode(a);
            a.style.visibility = "visible"
        };
        e.onKeyDown = function(a) {
            var b = this.props.playbackDuration,
                d = this.props.playbackPosition;
            if (!b || !d) return;
            d = d;
            if (a.keyCode === c("Keys").RIGHT) {
                a.preventDefault();
                a.stopPropagation();
                if (this.props.isLiveVideo && this.props.onLiveRewindSeekForward) {
                    this.props.onLiveRewindSeekForward();
                    return
                }
                d += 5;
                d >= b && (d = b - .01)
            } else if (a.keyCode === c("Keys").LEFT) {
                a.preventDefault();
                a.stopPropagation();
                if (this.props.isLiveVideo && this.props.onLiveRewindSeekBack) {
                    this.props.onLiveRewindSeekBack();
                    return
                }
                d -= 5;
                d < 0 && (d = 0)
            } else if (a.keyCode === c("Keys").HOME) {
                a.preventDefault();
                a.stopPropagation();
                if (this.props.isLiveVideo && this.props.onLiveRewindToBeginning) {
                    this.props.onLiveRewindToBeginning();
                    return
                }
                d = 0
            } else if (a.keyCode === c("Keys").END) {
                a.preventDefault();
                a.stopPropagation();
                if (this.props.isLiveVideo && this.props.onLiveRewindToLive) {
                    this.props.onLiveRewindToLive();
                    return
                }
                d = b - .01
            } else return;
            this.props.onScrubEnd && this.props.onScrubEnd(d)
        };
        e.render = function() {
            var a = c("joinClasses")(this.props.className, "_2yu5" + (this.state.nubEngaged ? " _2yu6" : "")),
                b = (this.props.hasScrubberPreview ? "_3iit" : "") + (this.props.hasScrubberPreview ? "" : " _3iiu"),
                e = {
                    width: this.getPlayedRatio(this.props.playbackDuration, this.props.playbackPosition) * 100 + "%"
                },
                f = {
                    width: this.getBufferedRatio() * 100 + "%"
                },
                g = this.props.videoClipInfo,
                h = "0%";
            if (g) {
                var i = this.getRangeLimitedRatio(g.start_time_in_ms / d("DateConsts").MS_PER_SEC / this.props.playbackDuration);
                h = i * 100 + "%";
                this.state.shouldIgnoreClipStartTS || (e = {
                    width: this.getRangeLimitedRatio(this.getPlayedRatio(this.props.playbackDuration, this.props.playbackPosition) - i) * 100 + "%",
                    marginLeft: h
                }, f = {
                    width: this.getRangeLimitedRatio(this.getBufferedRatio() - i) * 100 + "%",
                    marginLeft: h
                })
            }
            i = {
                left: this.state.timecodeRatio * 100 + "%",
                display: this.state.hoverNub ? "none" : "block"
            };
            var j;
            ({});
            var l = {},
                m = null,
                n = null,
                o = null;
            if (this.state.mouseOver || this.state.nubEngaged || this.props.alwaysShowThumbnail) {
                o = k.jsx(c("VideoPlaybackTimer.react"), {
                    className: b,
                    isInScrubberPreview: !0,
                    onMouseEnter: this.onMouseEnterOnThumbnailOrTimecode.bind(this),
                    onMouseLeave: this.onMouseLeaveOnThumbnailOrTimecode.bind(this),
                    playbackPosTimestamp: 0,
                    ref: "timecode",
                    remainingTimestamp: this.state.timecodeTimestamp,
                    style: i
                });
                if (this.props.hasScrubberPreview && this.state.previewThumbnailInformation) {
                    b = this.state.previewThumbnailInformation.previewScrubberWidth;
                    i = this.state.previewThumbnailInformation.previewScrubberHeight;
                    var p = 100,
                        q = 100;
                    this.getNumberOfSprites() !== this.state.scrubberPreviewSpriteIndex ? (p *= this.state.previewThumbnailInformation.imagesPerRow, q *= this.state.previewThumbnailInformation.imagesPerColumn) : this.state.lastSpriteDimension.numRow && (p *= this.state.lastSpriteDimension.numRow, q *= this.state.lastSpriteDimension.numColumn);
                    var r = this.state.previewThumbnailInformation.stereoMode;
                    r === "left-right" ? (b /= 2, p *= 2) : r === "top-bottom" && (i /= 2, q *= 2);
                    r = 1;
                    this.props.isFullscreen ? r = 1.5 : this.props.isInTahoe && (r = 1.2);
                    if (this.state.previewThumbnailInformation.useScrubberVideo && this.state.previewThumbnailInformation.scrubberVideoURI !== null) j = {
                        width: b * r + "px",
                        height: i * r + "px"
                    }, n = k.jsx("video", {
                        muted: "true",
                        preload: "auto",
                        ref: "previewThumbnailVideo",
                        src: this.state.previewThumbnailInformation.scrubberVideoURI,
                        style: j
                    });
                    else if (this.$6) {
                        var s = "";
                        if (this.state.scrubberPreviewSpriteIndex) {
                            var t = this.$6.get(this.state.scrubberPreviewSpriteIndex);
                            t != null && t !== "" && (s = "url(" + t + ")")
                        }
                        var u;
                        p > 100 ? u = p + "% " + q + "%" : s = "";
                        j = {
                            width: b * r + "px",
                            height: i * r + "px",
                            backgroundImage: s,
                            backgroundPosition: "-" + this.state.scrubberPreviewBackgroundPosition.x * r + "px -" + this.state.scrubberPreviewBackgroundPosition.y * r + "px",
                            backgroundSize: u
                        };
                        n = k.jsx("div", {
                            className: "_3iiw",
                            ref: "previewThumbnail",
                            style: j
                        })
                    }
                    l = {
                        left: this.state.previewRatio * 100 + "%",
                        display: this.props.alwaysShowThumbnail ? "block" : void 0
                    };
                    m = k.jsxs("div", {
                        onMouseEnter: this.onMouseEnterOnThumbnailOrTimecode.bind(this),
                        onMouseLeave: this.onMouseLeaveOnThumbnailOrTimecode.bind(this),
                        className: "_3iiv",
                        ref: "previewThumbnailContainer",
                        style: l,
                        children: [n, o]
                    })
                }
            }
            t = null;
            this.props.pointsOfInterest.length > 0 && (t = k.jsx(c("VideoScrubberPointOfInterestBar.react"), {
                tabIndex: this.props.tabIndex,
                playbackDuration: this.props.playbackDuration,
                onPointOfInterestSelect: this.props.onPointOfInterestSelect,
                currentPointOfInterest: this.props.currentPointOfInterest,
                pointsOfInterest: this.props.pointsOfInterest,
                showPointOfInterestTimestamps: this.props.showPointOfInterestTimestamps
            }));
            p = null;
            q = this.getAdBreakIndicators();
            b = this.props.playbackDuration > 500 ? 10 : 1;
            i = Math.round(this.getPlayedRatio(this.props.playbackDuration, this.props.playbackPosition) * 100 * b) / b;
            s = "Current position is " + i + "%";
            r = this.props.isFullscreen || this.props.isInTahoe;
            j = k.jsx("div", {
                className: a,
                onKeyDown: this.onKeyDown.bind(this),
                onMouseDown: this.onDragNubBeginClick.bind(this),
                onMouseEnter: this.onMouseEnter.bind(this),
                onMouseLeave: this.onMouseLeave.bind(this),
                onTouchStart: this.onDragNubBeginTouch.bind(this),
                children: k.jsxs("div", {
                    tabIndex: this.props.tabIndex,
                    role: "slider",
                    "aria-orientation": "horizontal",
                    "aria-valuemin": "0",
                    "aria-valuemax": this.props.playbackDuration,
                    "aria-valuenow": this.props.playbackPosition,
                    "aria-valuetext": s,
                    className: "_2yu7",
                    ref: "bar",
                    children: [k.jsx("div", {
                        className: "_2yu8",
                        style: f
                    }), k.jsx("div", {
                        style: e,
                        className: (this.props.isLiveVideo ? "" : "_2yu9") + (this.props.isLiveVideo && !this.props.isLiveRewound ? " _1p51" : "") + (this.props.isLiveRewound ? " _1p52" : ""),
                        children: this.renderNub()
                    }), g ? k.jsx("div", {
                        className: "_355j",
                        style: {
                            width: h
                        },
                        children: k.jsx(c("ProfileTile.react"), {
                            id: g.sharer_id,
                            size: r ? 32 : 24,
                            imageProps: {
                                className: "_355k"
                            },
                            tileProps: {
                                className: "_355n",
                                style: {
                                    marginTop: r ? -16 : -10
                                }
                            }
                        })
                    }) : null, this.props.hasScrubberPreview ? m : o, q, this.getInsertedAdBreaks(), this.getInsertedStarsCues(), this.getEligibleAdBreaksTimeSegments(), this.getEligibleStarsCueTimeSegments(), this.getPollTimeSegments()]
                })
            });
            return k.jsxs("div", {
                children: [p, j, t]
            })
        };
        return b
    }(k.Component);
    a.defaultProps = {
        alwaysShowThumbnail: !1,
        annotatedMomentsOfInterest: {},
        hasScrubberPreview: !1,
        isAdBreakInsertionWithoutGapRule: !1,
        isFullscreen: !1,
        isInTahoe: !1,
        isLiveRewound: !1,
        isLiveVideo: !1,
        isPlaying: !1,
        pointsOfInterest: [],
        onAnnotatedMomentOfInterestSelect: c("emptyFunction"),
        onPointOfInterestSelect: c("emptyFunction"),
        onScrubBegin: c("emptyFunction"),
        onScrubEnd: c("emptyFunction"),
        showEligibleStarsCueTimeSegments: !1,
        showPointOfInterestTimestamps: !1,
        showPollCard: !1,
        showVideoSliderWarningTooltip: !1,
        selectedStarsCueTimestamp: null
    };
    g["default"] = a
}), 98);
__d("VideoSidepaneToggleControl.react", ["cx", "fbt", "ix", "AbstractButton.react", "Image.react", "TooltipData", "react"], (function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k, l = k || d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.onButtonClick = function() {
                c.props.onSidePaneToggle()
            }, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = b.prototype;
        e.render = function() {
            var a = this.props.isSidePaneOpen ? i._("Click to hide details") : i._("Click to show details"),
                b = this.props.isSidePaneOpen ? j("114795") : j("114783");
            return l.jsx(c("AbstractButton.react"), babelHelpers["extends"]({
                className: "_zbd"
            }, d("TooltipData").propsFor(a, "above"), {
                image: l.jsx(c("Image.react"), {
                    className: "_23j0",
                    src: b
                }),
                label: this.props.label,
                labelIsHidden: this.props.labelIsHidden,
                onClick: this.onButtonClick,
                ref: "button",
                tabIndex: this.props.tabIndex,
                type: "button"
            }))
        };
        return b
    }(l.PureComponent);
    a.defaultProps = {
        label: i._("Toggle Details"),
        labelIsHidden: !0
    };
    g["default"] = a
}), 98);
__d("SpatialAudioFeedNUX.react", ["cx", "fbt", "ix", "AsyncRequest", "Image.react", "XBasicFBNuxDismissController", "XUIAmbientNUX.react", "XUIText.react", "react"], (function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k, l = k || d("react"),
        m = i._("Experience more with 360 audio"),
        n = i._("Hear sound from all directions when you wear headphones"),
        o = 4576;
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var d;
            d = a.call(this, b) || this;
            d.$1 = function() {
                d.setState({
                    showNux: !1
                });
                var a = c("XBasicFBNuxDismissController").getURIBuilder().setInt("nux_id", o).getURI();
                new(c("AsyncRequest"))().setURI(a).send()
            };
            d.state = {
                showNux: !0
            };
            return d
        }
        var d = b.prototype;
        d.render = function() {
            return l.jsx(c("XUIAmbientNUX.react"), {
                contextRef: this.props.contextRef,
                shown: this.state.showNux,
                position: "below",
                alignment: "right",
                onCloseButtonClick: this.$1,
                width: "auto",
                children: l.jsxs("div", {
                    className: "_4r0v",
                    children: [l.jsx("div", {
                        className: "_4r0w",
                        children: l.jsx("div", {
                            className: "_4r0x",
                            children: l.jsx(c("Image.react"), {
                                src: j("114375")
                            })
                        })
                    }), l.jsxs("div", {
                        className: "_4r0y",
                        children: [l.jsx(c("XUIText.react"), {
                            size: "header4",
                            className: "_4r0z",
                            children: m
                        }), l.jsx(c("XUIText.react"), {
                            size: "meta1",
                            className: "_4r0-",
                            children: n
                        })]
                    })]
                })
            })
        };
        return b
    }(l.Component);
    g["default"] = a
}), 98);
__d("VideoVolumeSlider.react", ["cx", "EventListener", "ReactDOM", "getElementPosition", "react", "shallowCompare"], (function(a, b, c, d, e, f, g, h) {
    var i, j = i || d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var c;
            c = a.call(this, b) || this;
            c.state = {
                awaitingUpdate: !1,
                engaged: !1,
                volume: b.volume
            };
            return c
        }
        var e = b.prototype;
        e.shouldComponentUpdate = function(a, b) {
            return c("shallowCompare")(this, a, b)
        };
        e.UNSAFE_componentWillReceiveProps = function(a) {
            this.setState({
                awaitingUpdate: !1
            })
        };
        e.componentDidUpdate = function(a, b) {
            if (!this.state.engaged && b.engaged) this.$2 && this.$2.remove(), this.$1 && this.$1.remove(), this.$3 && this.$3.remove(), this.$4 && this.$4.remove();
            else if (this.state.engaged && !b.engaged) {
                this.$1 = (a = c("EventListener")).listen(document, "mousemove", this.onMouseMove.bind(this));
                this.$2 = a.listen(document, "mouseup", this.onMouseUpImpl.bind(this));
                this.$3 = a.listen(document, "touchmove", this.onTouchMove.bind(this));
                this.$4 = a.listen(document, "touchend", this.onMouseUpImpl.bind(this))
            }
        };
        e.onMouseDownImpl = function(a, b, c) {
            this.props.onVolumeChangeBegin && this.props.onVolumeChangeBegin(this.state.volume), this.props.isHorizontal ? this.setState({
                engaged: !0,
                volume: this.getClampedClickPositionVolume(b)
            }) : this.setState({
                engaged: !0,
                volume: this.getClampedClickPositionVolume(c)
            }), a.preventDefault(), a.stopPropagation()
        };
        e.onMouseDown = function(a) {
            if (a.button !== 0) return;
            this.onMouseDownImpl(a, a.clientX, a.clientY)
        };
        e.onTouchDown = function(a) {
            this.onMouseDownImpl(a, a.touches[0].clientX, a.touches[0].clientY)
        };
        e.getClampedClickPositionVolume = function(a) {
            var b = c("getElementPosition")(d("ReactDOM").findDOMNode(this.refs.slider)),
                e = c("getElementPosition")(d("ReactDOM").findDOMNode(this.refs.nub)).height;
            if (this.props.isHorizontal) {
                var f = a + e / 2 - b.x;
                return Math.max(0, Math.min(1, f / b.width))
            } else {
                f = b.y - a + b.height + e / 2;
                return Math.max(0, Math.min(1, f / b.height))
            }
        };
        e.onMouseUpImpl = function(a) {
            this.props.onVolumeChangeEnd && this.props.onVolumeChangeEnd(this.state.volume), this.setState({
                engaged: !1,
                awaitingUpdate: !0
            }), a.preventDefault(), a.stopPropagation()
        };
        e.onMouseMoveImpl = function(a, b, c) {
            this.props.isHorizontal ? this.setState({
                volume: this.getClampedClickPositionVolume(b)
            }) : this.setState({
                volume: this.getClampedClickPositionVolume(c)
            }), this.props.onVolumeChange && this.props.onVolumeChange(this.state.volume), a.preventDefault(), a.stopPropagation()
        };
        e.onMouseMove = function(a) {
            this.onMouseMoveImpl(a, a.clientX, a.clientY)
        };
        e.onTouchMove = function(a) {
            this.onMouseMoveImpl(a, a.touches[0].clientX, a.touches[0].clientY)
        };
        e.getVolume = function() {
            return this.state.engaged || this.state.awaitingUpdate ? this.state.volume : this.props.volume
        };
        e.render = function() {
            var a = this.props.isHorizontal || !1,
                b = a ? {
                    width: Math.round(this.getVolume() * 100) + "%"
                } : {
                    height: Math.round(this.getVolume() * 100) + "%"
                };
            a = "_3pao" + (a ? " _4sx9" : "") + (this.state.engaged ? " _2yu6" : "");
            return j.jsxs("div", {
                className: a,
                onMouseDown: this.onMouseDown.bind(this),
                onTouchStart: this.onTouchDown.bind(this),
                children: [j.jsx("div", {
                    className: "_4sxa",
                    children: j.jsx("div", {
                        className: "_3paq",
                        ref: "slider",
                        children: j.jsx("div", {
                            className: "_3par",
                            style: b,
                            children: j.jsx("div", {
                                className: "_3pas _4sxb",
                                ref: "nub"
                            })
                        })
                    })
                }), j.jsx("div", {
                    className: "_3pat"
                })]
            })
        };
        return b
    }(j.Component);
    a.defaultProps = {
        volume: 0,
        onVolumeChange: function(a) {},
        onVolumeChangeBegin: function(a) {},
        onVolumeChangeEnd: function(a) {}
    };
    g["default"] = a
}), 98);
__d("VideoVolumeControl.react", ["cx", "fbt", "invariant", "ix", "AbstractButton.react", "Image.react", "Keys", "ReactDOM", "SpatialAudioFeedNUX.react", "TooltipData", "VideoPlayerVolumeSettings", "VideoVolumeSlider.react", "react", "shallowCompare"], (function(a, b, c, d, e, f, g, h, i, j, k) {
    var l, m = l || d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            b = a.call(this, b) || this;
            b.state = {
                nubEngaged: !1,
                focused: !1,
                lastVolumeBeforeMute: 1
            };
            return b
        }
        var e = b.prototype;
        e.shouldComponentUpdate = function(a, b) {
            return c("shallowCompare")(this, a, b)
        };
        e.onButtonClick = function() {
            this.checkLastVolumeBeforeMuteInvariant();
            if (this.props.volume === 0) return this.onSliderVolumeChange(this.state.lastVolumeBeforeMute);
            this.props.onToggleMuted && this.props.onToggleMuted()
        };
        e.onButtonFocus = function() {
            this.setState({
                focused: !0
            })
        };
        e.onButtonBlur = function() {
            this.setState({
                focused: !1
            })
        };
        e.onKeyDown = function(a) {
            var b = this.props.volume;
            if (a.keyCode === c("Keys").UP) a.preventDefault(), a.stopPropagation(), b += .05, b > 1 && (b = 1);
            else if (a.keyCode === c("Keys").DOWN) a.preventDefault(), a.stopPropagation(), b -= .05, b < 0 && (b = 0);
            else return;
            this.onSliderVolumeChangeEnd(b)
        };
        e.onMouseOut = function(a) {
            d("ReactDOM").findDOMNode(this.refs.button).blur()
        };
        e.getVolume = function() {
            return this.props.isMuted ? 0 : this.props.volume
        };
        e.onSliderVolumeChangeBegin = function() {
            var a = this.props.volume;
            a > 0 && (this.setState({
                nubEngaged: !0,
                lastVolumeBeforeMute: a
            }), c("VideoPlayerVolumeSettings").saveLastVolumeBeforeMute(a))
        };
        e.onSliderVolumeChangeEnd = function(a) {
            a > 0 ? (this.setState({
                lastVolumeBeforeMute: a
            }), c("VideoPlayerVolumeSettings").saveLastVolumeBeforeMute(a), this.onSliderVolumeChange(a)) : (this.props.onVolumeChange(this.state.lastVolumeBeforeMute), this.props.isMuted || this.props.onToggleMuted && this.props.onToggleMuted()), this.setState({
                nubEngaged: !1
            })
        };
        e.onSliderVolumeChange = function(a) {
            (a > 0 && this.props.isMuted || a === 0 && !this.props.isMuted) && (this.props.onToggleMuted && this.props.onToggleMuted()), this.props.onVolumeChange && this.props.onVolumeChange(a)
        };
        e.checkLastVolumeBeforeMuteInvariant = function() {
            this.state.lastVolumeBeforeMute > 0 && this.state.lastVolumeBeforeMute <= 1 || j(0, 2385)
        };
        e.render = function() {
            var a = this,
                b = Math.round(this.getVolume() * 100),
                e = null,
                f = "";
            if (this.props.isAudioBlocked) f = i._("Audio unavailable"), e = m.jsx("div", {
                children: m.jsx(c("Image.react"), {
                    className: "_rwt",
                    src: this.props.useDarkTheme ? k("797748") : k("660433")
                })
            });
            else if (b == 0) e = m.jsx(c("Image.react"), {
                className: "_rwt",
                src: this.props.useDarkTheme ? k("462991") : k("462993")
            });
            else {
                var g = null;
                b <= 33 ? g = this.props.useDarkTheme ? k("462983") : k("462984") : b <= 66 ? g = this.props.useDarkTheme ? k("462987") : k("462988") : g = this.props.useDarkTheme ? k("462971") : k("443962");
                e = m.jsx("div", {
                    className: "_1age",
                    children: m.jsx("div", {
                        className: "_1agf",
                        children: m.jsx(c("Image.react"), {
                            className: "_rwt",
                            src: g
                        })
                    })
                })
            }
            b = "_2swo" + (this.state.nubEngaged ? " _2yu6" : "") + (this.state.focused ? " _2iw8" : "");
            g = "_zbd _1agg";
            var h = this.getVolume() ? i._("Mute") : i._("Unmute"),
                j = this.props.isAudioBlocked ? null : m.jsx(c("VideoVolumeSlider.react"), {
                    onVolumeChangeBegin: this.onSliderVolumeChangeBegin.bind(this),
                    onVolumeChangeEnd: this.onSliderVolumeChangeEnd.bind(this),
                    onVolumeChange: this.onSliderVolumeChange.bind(this),
                    isHorizontal: this.props.isHorizontal || !1,
                    volume: this.getVolume()
                });
            f = m.jsx(c("AbstractButton.react"), babelHelpers["extends"]({}, d("TooltipData").propsFor(f, "above"), {
                className: g,
                "data-testid": void 0,
                image: e,
                label: h,
                labelIsHidden: !0,
                onBlur: this.onButtonBlur.bind(this),
                onClick: this.onButtonClick.bind(this),
                onFocus: this.onButtonFocus.bind(this),
                onKeyDown: this.onKeyDown.bind(this),
                onMouseOut: this.onMouseOut.bind(this),
                ref: "button",
                tabIndex: this.props.tabIndex,
                type: "button"
            }));
            g = this.props.showSpatialAudioNUX ? m.jsx(c("SpatialAudioFeedNUX.react"), {
                contextRef: function() {
                    return a.refs.button
                }
            }) : null;
            return this.props.isHorizontal ? m.jsxs("div", {
                className: b,
                children: [f, j, g]
            }) : m.jsxs("div", {
                className: b,
                children: [j, f, g]
            })
        };
        return b
    }(m.Component);
    a.defaultProps = {
        isAudioBlocked: !1,
        useDarkTheme: !1
    };
    g["default"] = a
}), 98);
__d("VideoControls.react", ["cx", "fbt", "ix", "AbstractButton.react", "BootloadedComponent.react", "FluxContainer", "Image.react", "JSResource", "LiveVideoRewindTypedLogger", "TooltipData", "VideoClipButton.react", "VideoFBIconControl.react", "VideoFullscreenControl.react", "VideoPlaybackControl.react", "VideoPlaybackRateControl.react", "VideoPlaybackTimer.react", "VideoPlayerExperiments", "VideoPollCardDispatcher", "VideoPollCardStore", "VideoScrubber.react", "VideoSidepaneToggleControl.react", "VideoVolumeControl.react", "emptyFunction", "immutable", "joinClasses", "lazyLoadComponent", "react", "shallowCompare"], (function(a, b, c, d, e, f, g, h, i, j) {
    var k, l = k || d("react"),
        m = c("lazyLoadComponent")(c("JSResource")("VideoActionsControl.react").__setRef("VideoControls.react")),
        n = 36;
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
                pollCardsActiveForVPC: {}
            }, b) || babelHelpers.assertThisInitialized(c)
        }
        b.getStores = function() {
            return [c("VideoPollCardStore")]
        };
        b.calculateState = function() {
            var a = c("VideoPollCardStore").getState();
            a = a.pollCardsActiveForVPC;
            return {
                pollCardsActiveForVPC: a
            }
        };
        var e = b.prototype;
        e.UNSAFE_componentWillMount = function() {
            c("VideoPollCardDispatcher").explicitlyRegisterStores(b.getStores())
        };
        e.shouldComponentUpdate = function(a, b) {
            return c("shallowCompare")(this, a, b)
        };
        e.componentDidUpdate = function() {
            var a;
            a = !this.props.finishedPlaying && (this.props.vpcID !== void 0 ? this.state.pollCardsActiveForVPC[(a = this.props.vpcID) != null ? a : ""] !== null ? ((a = this.state.pollCardsActiveForVPC[(a = this.props.vpcID) != null ? a : ""]) != null ? a : c("immutable").List()).size === 0 : !0 : !1);
            if (a && (this.props.pollTimestamps ? this.props.pollTimestamps.length > 0 : null)) this.props.drawer && this.props.drawer.setHeight(55);
            else {
                a = this.props.isInWatchAndScroll ? 55 : n;
                this.props.drawer && this.props.drawer.setHeight(a)
            }
        };
        e.isHidden = function() {
            return this.props.hidden
        };
        e.isTransparent = function() {
            return this.props.transparent
        };
        e.render = function() {
            var a = c("VideoPlayerExperiments").inlineSoundVisible,
                b = "_1c7d" + (this.isHidden() ? " _1c7e" : "") + (this.isTransparent() && !a ? " _2oy-" : ""),
                e = "_2w_u" + (this.props.showSidePaneToggle ? " _vr5" : "") + (this.props.useDarkTheme ? " _vr6" : "") + "",
                f = "_1c7f _1c7g" + (this.isTransparent() && a ? " _2oy-" : ""),
                g = "_1c7f _2pvx" + (this.isTransparent() && a ? " _2oy-" : ""),
                h = "_1c7f _1c7h" + (this.isTransparent() && a ? " _2oy-" : ""),
                k = "_1c7f _w7o" + (this.isTransparent() && (!this.props.isInline || this.props.isFullscreen || !this.props.isPlaying) ? " _2oy-" : ""),
                n = "_2w_w",
                o = !1;
            this.props.isLive && this.props.isInTahoe && (o = !0);
            o = "_1otk _3t1r _4ubd" + (o ? " _w7y" : "");
            var p = "_3t1r _4ubd _3t1s" + (this.props.isCommentAttachment ? "" : " hidden_elem"),
                q = null;
            if (!(this.props.isLive || this.props.isFBWasLive) && !this.props.hideRemainingTime && !this.props.isInWatchAndScroll) {
                var r = this.props.playbackPosition - this.props.playbackDuration;
                q = l.jsx(c("VideoPlaybackTimer.react"), {
                    className: "_5qsr" + (this.props.displayMilliseconds ? " _w7-" : ""),
                    isEmbedded: this.props.isEmbedded,
                    playbackPosTimestamp: this.props.playbackPosition,
                    playbackDurationTimestamp: this.props.playbackDuration,
                    remainingTimestamp: r,
                    displayElapsedTime: this.props.displayElapsedTime,
                    displayMilliseconds: this.props.displayMilliseconds,
                    displayBothTimes: !1
                })
            }
            r = null;
            var s = null,
                t = null,
                u = null,
                v = null,
                w = this.props,
                x = w.showInlineCopyLinkOption;
            w = w.showInlineVideoReportOption;
            var y = w || x;
            !this.props.hideSettings && !this.props.isInWatchAndScroll && !this.props.isEmbedded && y && (u = l.jsx(l.Suspense, {
                fallback: l.jsx("span", {}),
                children: l.jsx(m, {
                    disabled: this.props.isCasting,
                    onActionsClicked: this.props.onActionsClick,
                    permalinkURL: this.props.permalinkURL,
                    showCopyLink: x,
                    showReportVideo: w,
                    tabIndex: "0"
                })
            }));
            var z;
            this.props.isInTahoe && this.props.isLive && !this.props.isFullscreen && (z = l.jsx(c("BootloadedComponent.react"), {
                bootloadLoader: c("JSResource")("VideoQuietModeControl.react").__setRef("VideoControls.react"),
                bootloadPlaceholder: l.jsx("span", {}),
                videoID: this.props.videoID
            }));
            if ((!this.props.isLive || this.props.hasHD) && (!this.props.hideSettings && !this.props.isInWatchAndScroll && c("VideoPlayerExperiments").redesign)) {
                t = l.jsx(c("BootloadedComponent.react"), {
                    bootloadLoader: c("JSResource")("VideoSettingsControl.react").__setRef("VideoControls.react"),
                    bootloadPlaceholder: l.jsx("span", {}),
                    disabled: this.props.isCasting,
                    hasHD: this.props.hasHD,
                    hasCaptions: this.props.hasCaptions,
                    isHD: this.props.isHD,
                    isInline: this.props.isInline,
                    isLive: this.props.isLive,
                    isSphericalVideo: this.props.isSphericalVideo,
                    areCaptionsActive: this.props.areCaptionsActive,
                    areCaptionsAutogenerated: this.props.areCaptionsAutogenerated,
                    onSettingsClick: this.props.onSettingsClick,
                    onToggleHD: this.props.onToggleHD,
                    onToggleCaptions: this.props.onToggleCaptions,
                    tabIndex: "0",
                    availableQualities: this.props.availableQualities,
                    selectedQuality: (y = this.props.selectedQuality) != null ? y : null,
                    preferredQuality: (x = this.props.preferredQuality) != null ? x : null,
                    canAutoSelectVideoQuality: this.props.canAutoSelectVideoQuality,
                    onSelectQuality: this.props.onSelectQuality,
                    showQualitySelector: this.props.showQualitySelector,
                    qualitySelectorMinStreams: this.props.qualitySelectorMinStreams,
                    streamingFormat: this.props.streamingFormat,
                    videoID: this.props.videoID
                })
            }
            this.props.isLive && (c("VideoPlayerExperiments").hlsButton && (v = l.jsx(c("BootloadedComponent.react"), {
                bootloadPlaceholder: l.jsx("span", {}),
                bootloadLoader: c("JSResource")("VideoToHLSControl.react").__setRef("VideoControls.react"),
                areHLSActive: this.props.areHLSActive,
                onToggleHLS: this.props.onToggleHLS,
                tabIndex: "0"
            })));
            w = this.props.gamesVideoCreatorClipping && (this.props.isInTahoe || this.props.isInline || this.props.gamesVideoClipButtonEnabled) && this.props.gamesDefaultClipLengthInSec != null && this.props.gamesDefaultClipLengthInSec > 0 ? l.jsx(c("VideoClipButton.react"), {
                onClipVideo: this.props.onClipVideo,
                defaultLengthInSec: this.props.gamesDefaultClipLengthInSec
            }) : null;
            y = null;
            if (this.props.allowFullscreen)
                if (this.props.doesFullscreenEnterTahoe && (this.props.isInline || this.props.isInWatchAndScroll)) {
                    x = l.jsx(c("Image.react"), {
                        className: "_rwt",
                        src: j("407577")
                    });
                    var A = i._("Click to enlarge");
                    y = l.jsx(c("AbstractButton.react"), babelHelpers["extends"]({}, d("TooltipData").propsFor(A, "above"), {
                        className: "_zbd _400z _1vek",
                        image: x,
                        label: A,
                        labelIsHidden: !0,
                        onClick: this.props.onEnterTahoe,
                        tabIndex: "0"
                    }))
                } else {
                    x = this.props.isFullscreen ? i._("Click to exit fullscreen") : i._("Click to enter fullscreen");
                    y = l.jsx(c("VideoFullscreenControl.react"), babelHelpers["extends"]({}, d("TooltipData").propsFor(x, "above"), {
                        disabled: this.props.isCasting && !this.props.isFullscreen,
                        isFullscreen: this.props.isFullscreen,
                        onToggleFullscreen: this.props.onToggleFullscreen,
                        tabIndex: "0"
                    }))
                }
            A = null;
            this.props.hasWatchAndScroll && !this.props.isFullscreen && !this.props.isInWatchAndScroll && (A = l.jsx(c("BootloadedComponent.react"), {
                bootloadPlaceholder: l.jsx("span", {}),
                bootloadLoader: c("JSResource")("VideoWatchAndScrollControl.react").__setRef("VideoControls.react"),
                disabled: this.props.isCasting,
                onEnterWatchAndScroll: this.props.onEnterWatchAndScroll,
                isSlidingWNSEligible: this.props.isSlidingWNSEligible,
                onWNSNUXClose: this.props.onWNSNUXClose,
                showWNSNUX: this.props.showWNSNUX
            }));
            x = null;
            this.props.allowCasting && this.props.hasFoundReceiver && (x = l.jsx(c("BootloadedComponent.react"), {
                bootloadPlaceholder: l.jsx("span", {}),
                bootloadLoader: c("JSResource")("VideoCastingControl.react").__setRef("VideoControls.react"),
                hasFoundReceiver: this.props.hasFoundReceiver,
                isCasting: this.props.isCasting,
                isCastingSupported: this.props.isCastingSupported,
                onStartCast: this.props.onStartCast,
                onStopCast: this.props.onStopCast
            }));
            var B = null;
            if (this.props.isEmbeddedPlayerRedesignEnabled) B = this.props.permalinkURL && this.props.showPermalinkButton ? l.jsx(c("VideoFBIconControl.react"), {
                permalinkURL: this.props.permalinkURL,
                playbackPosTimestamp: this.props.playbackPosition
            }) : null;
            else {
                var C = null,
                    D = this.props.isWatchIconEligible ? j("909284") : j("804741");
                if (this.props.permalinkURL && this.props.showPermalinkButton) {
                    C = l.jsx(c("Image.react"), {
                        className: "_rwt",
                        src: D
                    });
                    D = i._("Open in a new tab");
                    B = l.jsx(c("AbstractButton.react"), babelHelpers["extends"]({}, d("TooltipData").propsFor(D, "above"), {
                        className: "_zbd",
                        href: this.props.permalinkURL,
                        image: C,
                        label: D,
                        labelIsHidden: !0,
                        ref: "button",
                        tabIndex: "0",
                        target: "_blank",
                        type: "button"
                    }))
                }
            }
            C = null;
            D = null;
            var E = null,
                F = null,
                G = null;
            if ((this.props.isLive || this.props.isFBWasLive) && this.props.showPlayButtonForLive && !this.props.isLiveRewindEnabled) D = l.jsx(c("VideoPlaybackControl.react"), {
                finishedPlaying: this.props.finishedPlaying,
                isPlaying: this.props.isPlaying,
                onPause: this.props.onPause,
                onPlay: this.props.onPlay,
                useDarkTheme: this.props.useDarkTheme,
                tabIndex: "0"
            });
            else if (!(this.props.isLive || this.props.isFBWasLive) && !this.props.hidePlaybackControl) {
                D = l.jsx(c("VideoPlaybackControl.react"), {
                    finishedPlaying: this.props.finishedPlaying,
                    isPlaying: this.props.isPlaying,
                    onPause: this.props.onPause,
                    onPlay: this.props.onPlay,
                    useDarkTheme: this.props.useDarkTheme,
                    tabIndex: "0"
                });
                if (this.props.showPlaybackRateControl && this.props.onSetVideoPlaybackRate) {
                    var H = i._("Playback rate");
                    E = l.jsx(c("VideoPlaybackRateControl.react"), babelHelpers["extends"]({}, d("TooltipData").propsFor(H, "above"), {
                        isEmbedded: this.props.isEmbedded,
                        tabIndex: "0",
                        onSelectPlaybackRate: this.props.onSetVideoPlaybackRate
                    }))
                }
                if (!this.props.hidePlaybackScrubber) {
                    H = !this.props.finishedPlaying && (this.props.vpcID !== void 0 ? this.state.pollCardsActiveForVPC[(H = this.props.vpcID) != null ? H : ""] !== null ? ((H = this.state.pollCardsActiveForVPC[(H = this.props.vpcID) != null ? H : ""]) != null ? H : c("immutable").List()).size === 0 : !0 : !1);
                    C = l.jsx(c("VideoScrubber.react"), {
                        adBreaks: this.props.adBreaks,
                        adBreaksDisableReasons: this.props.adBreaksDisableReasons,
                        annotatedMomentsOfInterest: this.props.annotatedMomentsOfInterest,
                        bufferedPosition: this.props.bufferedPosition,
                        controlsHidden: this.props.hidden,
                        hasScrubberPreview: this.props.hasScrubberPreview,
                        interestLevels: this.props.interestLevels,
                        drawer: this.props.drawer,
                        insertedAdBreaks: this.props.insertedAdBreaks,
                        isAdBreakDisabled: this.props.isAdBreakDisabled,
                        isAdBreakInsertionWithoutGapRule: this.props.isAdBreakInsertionWithoutGapRule,
                        isFullscreen: this.props.isFullscreen,
                        isPlaying: this.props.isPlaying,
                        onScrubBegin: this.props.onScrubBegin,
                        onScrubEnd: this.props.onScrubEnd,
                        playbackDuration: this.props.playbackDuration,
                        playbackPosition: this.props.playbackPosition,
                        pollTimestamps: this.props.pollTimestamps,
                        showPollCard: H,
                        onAnnotatedMomentOfInterestSelect: this.props.onAnnotatedMomentOfInterestSelect,
                        previewThumbnailInformation: this.props.previewThumbnailInformation,
                        scrubberPreviewSprites: this.props.scrubberPreviewSprites,
                        showEligibleStarsCueTimeSegments: this.props.showEligibleStarsCueTimeSegments,
                        selectedStarsCueTimestamp: this.props.selectedStarsCueTimestamp,
                        onPointOfInterestSelect: this.props.onPointOfInterestSelect,
                        currentPointOfInterest: this.props.currentPointOfInterest,
                        pointsOfInterest: this.props.pointsOfInterest,
                        showPointOfInterestTimestamps: this.props.showPointOfInterestTimestamps,
                        showVideoSliderWarningTooltip: (H = this.props.showVideoSliderWarningTooltip) != null ? H : !1,
                        tabIndex: "0",
                        isInTahoe: this.props.isInTahoe,
                        videoClipInfo: this.props.videoClipInfo
                    })
                }
            }
            H = null;
            this.props.showSidePaneToggle && (H = l.jsx(c("VideoSidepaneToggleControl.react"), {
                isSidePaneOpen: this.props.isSidePaneOpen,
                onSidePaneToggle: this.props.onSidePaneToggle,
                tabIndex: "0"
            }));
            var I = null;
            this.props.hideGradient || (I = l.jsx("div", {
                className: "_w80" + (this.isTransparent() ? " _2oy-" : "") + (this.props.useLargerGradient ? " _8y-6" : "")
            }));
            var J = l.jsx(c("VideoVolumeControl.react"), {
                    isAudioBlocked: this.props.isAudioBlocked,
                    isMuted: this.props.isMuted,
                    onToggleMuted: this.props.onToggleMuted,
                    onVolumeChange: this.props.onVolumeChange,
                    volume: this.props.volume,
                    tabIndex: "0",
                    showSpatialAudioNUX: this.props.showSpatialAudioNUX,
                    useDarkTheme: this.props.useDarkTheme
                }),
                K, L, M, N, O, P, Q, R, S = this.props,
                T = S.onLiveRewindToBeginning,
                U = S.onLiveRewindSeekBack,
                V = S.onLiveRewindSeekForward;
            S = S.onLiveRewindToLive;
            if (this.props.isLiveRewindEnabled && !this.props.isEmbedded) {
                if (this.props.liveRelativePlaybackPosition != null) {
                    var W = this.props.liveRelativePlaybackPosition > this.props.playbackDuration ? this.props.playbackDuration : this.props.liveRelativePlaybackPosition;
                    Q = this.props.isInWatchAndScroll ? null : l.jsx(c("VideoPlaybackTimer.react"), {
                        className: "_3ek9 _5qsr" + (this.props.displayMilliseconds ? " _w7-" : ""),
                        displayElapsedTime: !0,
                        displayMilliseconds: this.props.displayMilliseconds,
                        isEmbedded: this.props.isEmbedded,
                        isLiveVideo: !0,
                        playbackPosTimestamp: W,
                        playbackDurationTimestamp: this.props.isFBWasLive ? this.props.playbackDuration : void 0,
                        displayBothTimes: this.props.isFBWasLive,
                        remainingTimestamp: -1 * (this.props.playbackDuration - W)
                    });
                    P = l.jsx(c("VideoScrubber.react"), {
                        adBreaks: this.props.adBreaks,
                        adBreaksDisableReasons: this.props.adBreaksDisableReasons,
                        bufferedPosition: this.props.bufferedPosition,
                        className: "_3ek9",
                        controlsHidden: this.props.hidden,
                        currentPointOfInterest: this.props.currentPointOfInterest,
                        drawer: this.props.drawer,
                        hasScrubberPreview: this.props.hasScrubberPreview,
                        interestLevels: this.props.interestLevels,
                        insertedAdBreaks: this.props.insertedAdBreaks,
                        isAdBreakDisabled: this.props.isAdBreakDisabled,
                        isAdBreakInsertionWithoutGapRule: this.props.isAdBreakInsertionWithoutGapRule,
                        isFullscreen: this.props.isFullscreen,
                        isInTahoe: this.props.isInTahoe,
                        isLiveRewound: this.props.isLiveRewound,
                        isLiveVideo: !0,
                        isPlaying: this.props.isPlaying,
                        playbackDuration: this.props.playbackDuration,
                        playbackPosition: this.props.isLiveRewound ? W : this.props.playbackDuration,
                        pointsOfInterest: this.props.pointsOfInterest,
                        previewThumbnailInformation: this.props.previewThumbnailInformation,
                        scrubberPreviewSprites: this.props.scrubberPreviewSprites,
                        showEligibleStarsCueTimeSegments: this.props.showEligibleStarsCueTimeSegments,
                        selectedStarsCueTimestamp: this.props.selectedStarsCueTimestamp,
                        showPointOfInterestTimestamps: this.props.showPointOfInterestTimestamps,
                        tabIndex: "0",
                        onLiveRewindToBeginning: this.props.onLiveRewindToBeginning,
                        onLiveRewindSeekBack: this.props.onLiveRewindSeekBack,
                        onLiveRewindSeekForward: this.props.onLiveRewindSeekForward,
                        onLiveRewindToLive: this.props.onLiveRewindToLive,
                        onPointOfInterestSelect: this.props.onPointOfInterestSelect,
                        onScrubBegin: this.props.onScrubBegin,
                        onScrubEnd: this.props.onScrubEnd
                    });
                    if (this.props.showPlaybackRateControl && this.props.onSetVideoPlaybackRate && this.props.isLiveRewound) {
                        W = i._("Playback rate");
                        E = l.jsx(c("VideoPlaybackRateControl.react"), babelHelpers["extends"]({}, d("TooltipData").propsFor(W, "above"), {
                            isEmbedded: this.props.isEmbedded,
                            tabIndex: "0",
                            onSelectPlaybackRate: this.props.onSetVideoPlaybackRate
                        }))
                    }
                    new(c("LiveVideoRewindTypedLogger"))().setEvent("render_rewind_controls").setVideoID(this.props.videoID).log()
                }
                K = T && !this.props.isInWatchAndScroll && !this.props.isInline ? l.jsx(c("BootloadedComponent.react"), {
                    bootloadLoader: c("JSResource")("VideoLiveRewindControl.react").__setRef("VideoControls.react"),
                    bootloadPlaceholder: l.jsx("span", {}),
                    asset: j("465766"),
                    tooltip: i._("Go to beginning"),
                    onButtonClick: T
                }) : null;
                R = this.props.isFBWasLive && S && !this.props.isInWatchAndScroll && !this.props.isInline ? l.jsx(c("BootloadedComponent.react"), {
                    bootloadLoader: c("JSResource")("VideoLiveRewindControl.react").__setRef("VideoControls.react"),
                    bootloadPlaceholder: l.jsx("span", {}),
                    asset: j("465765"),
                    tooltip: i._("Go to end"),
                    onButtonClick: S
                }) : null;
                L = U && !this.props.isInWatchAndScroll ? l.jsx(c("BootloadedComponent.react"), {
                    bootloadLoader: c("JSResource")("VideoLiveRewindControl.react").__setRef("VideoControls.react"),
                    bootloadPlaceholder: l.jsx("span", {}),
                    asset: j("465767"),
                    tooltip: i._("Skip back"),
                    onButtonClick: U
                }) : null;
                W = this.props.isLiveRewound ? i._("Skip ahead") : void 0;
                M = V && !this.props.isInWatchAndScroll && !this.props.isInline ? l.jsx(c("BootloadedComponent.react"), {
                    bootloadLoader: c("JSResource")("VideoLiveRewindControl.react").__setRef("VideoControls.react"),
                    bootloadPlaceholder: l.jsx("span", {}),
                    asset: j("465768"),
                    disabled: !this.props.isLiveRewound,
                    tooltip: W,
                    onButtonClick: V
                }) : null;
                T = this.props.isLiveRewound ? j("467224") : j("467223");
                U = this.props.isLiveRewound ? i._("Live view") : void 0;
                N = S ? l.jsx(c("BootloadedComponent.react"), {
                    bootloadLoader: c("JSResource")("VideoLiveRewindControl.react").__setRef("VideoControls.react"),
                    bootloadPlaceholder: l.jsx("span", {}),
                    asset: T,
                    tooltip: U,
                    onButtonClick: S
                }) : null;
                O = this.props.isInWatchAndScroll ? null : l.jsx(c("VideoPlaybackControl.react"), {
                    finishedPlaying: this.props.finishedPlaying,
                    isLiveVideo: !0,
                    isPlaying: this.props.isPlaying,
                    onPause: this.props.onPause,
                    onPlay: this.props.onPlay,
                    useDarkTheme: this.props.useDarkTheme,
                    tabIndex: "0"
                })
            }
            W = null;
            if (this.props.useTwoRows) {
                V = l.jsx(c("VideoVolumeControl.react"), {
                    isAudioBlocked: this.props.isAudioBlocked,
                    isMuted: this.props.isMuted,
                    onToggleMuted: this.props.onToggleMuted,
                    onVolumeChange: this.props.onVolumeChange,
                    volume: this.props.volume,
                    isHorizontal: !0,
                    tabIndex: "0"
                });
                W = l.jsxs("div", {
                    className: p,
                    children: [l.jsx("div", {
                        className: n,
                        children: l.jsxs("div", {
                            className: b,
                            children: [l.jsx("div", {
                                className: f
                            }), l.jsx("div", {
                                className: g,
                                children: C
                            }), l.jsx("div", {
                                className: h,
                                children: q
                            })]
                        })
                    }), l.jsx("div", {
                        className: n,
                        children: l.jsxs("div", {
                            className: b,
                            children: [l.jsxs("div", {
                                className: f,
                                children: [D, E, V]
                            }), l.jsx("div", {
                                className: g
                            }), l.jsxs("div", {
                                className: h,
                                children: [s, v, r, t, A, x, y, B, w, u]
                            })]
                        })
                    })]
                })
            }
            if (c("VideoPlayerExperiments").embeddedPlayerEnhancements && this.props.isEmbedded) {
                T = c("joinClasses")(b, c("VideoPlayerExperiments").embeddedPlayerEnhancements ? "_w83" : "");
                U = c("joinClasses")(b, "_w86");
                S = l.jsx("div", {
                    className: T,
                    children: l.jsxs("div", {
                        className: n,
                        children: [l.jsxs("div", {
                            className: U,
                            children: [l.jsxs("div", {
                                className: f,
                                children: [D, E]
                            }), l.jsx("div", {
                                className: g,
                                children: C
                            }), l.jsx("div", {
                                className: h,
                                children: q
                            })]
                        }), l.jsxs("div", {
                            className: b,
                            children: [l.jsx("div", {
                                className: f
                            }), l.jsx("div", {
                                className: g
                            }), l.jsxs("div", {
                                className: h,
                                children: [a || J, s, v, r, z, t, A, x, H, y, B, w, u]
                            }), l.jsx("div", {
                                className: k,
                                children: !a || J
                            })]
                        })]
                    })
                })
            } else S = !this.props.useTwoRows || !this.props.isCommentAttachment ? l.jsx("div", {
                className: o,
                "data-testid": void 0,
                children: l.jsx("div", {
                    className: n,
                    children: l.jsxs("div", {
                        className: b,
                        children: [l.jsxs("div", {
                            className: f,
                            children: [G, D, E, F, K, L, O, M, this.props.isFBWasLive ? R : N, Q]
                        }), l.jsxs("div", {
                            className: g,
                            children: [C, P]
                        }), l.jsxs("div", {
                            className: h,
                            children: [q, a || J, s, v, r, z, t, A, x, H, y, B, w, u]
                        }), l.jsx("div", {
                            className: k,
                            children: this.props.allowAudioButton === !1 ? l.jsx("div", {}) : !a || J
                        })]
                    })
                })
            }) : null;
            return l.jsxs("div", {
                className: e,
                children: [I, S, W]
            })
        };
        return b
    }(l.Component);
    a.defaultProps = {
        allowCasting: !1,
        allowAudioButton: !0,
        bufferedPosition: 0,
        displayElapsedTime: !1,
        displayMilliseconds: !1,
        gamesVideoClipButtonEnabled: !1,
        gamesVideoCreatorClipping: !1,
        gamesDefaultClipLengthInSec: void 0,
        hasFoundReceiver: !1,
        hidden: !1,
        hideGradient: !1,
        hidePlaybackControl: !1,
        hidePlaybackScrubber: !1,
        hideRemainingTime: !1,
        hideSettings: !1,
        isAudioBlocked: !1,
        isCasting: !1,
        isCastingSupported: !1,
        isCommentAttachment: !1,
        isFBWasLive: !1,
        isInTahoe: !1,
        isLiveRewound: !1,
        isMuted: !1,
        isPlaying: !1,
        isSphericalVideo: !1,
        isWatchIconEligible: !1,
        onSidePaneToggle: c("emptyFunction"),
        onStartCast: c("emptyFunction"),
        onStopCast: c("emptyFunction"),
        playbackDuration: 0,
        playbackPosition: 0,
        showInlineCopyLinkOption: !1,
        showInlineVideoReportOption: !1,
        showPermalinkButton: !1,
        showPlaybackRateControl: !1,
        showPlayButtonForLive: !1,
        showSidePaneToggle: !1,
        showVideoSliderWarningTooltip: !1,
        showWNSNUX: !1,
        transparent: !1,
        useDarkTheme: !1,
        useLargerGradient: !1,
        useTwoRows: !1,
        volume: 0
    };
    b = c("FluxContainer").create(a);
    g["default"] = b
}), 98);
__d("Tahoe", [], (function(a, b, c, d, e, f) {
    var g = null;
    a = {
        get: function() {
            return g
        },
        set: function(a) {
            g = a
        }
    };
    b = a;
    f["default"] = b
}), 66);
__d("ReactCSSTransitionGroupChild", ["React", "ReactDOM", "ReactTransitionEvents", "createReactClass_DEPRECATED", "fbjs/lib/CSSCore", "prop-types"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React"),
        h = 17;
    c = b("createReactClass_DEPRECATED")({
        displayName: "ReactCSSTransitionGroupChild",
        propTypes: {
            name: (a = b("prop-types")).oneOfType([a.string, a.shape({
                enter: a.string,
                leave: a.string,
                active: a.string
            }), a.shape({
                enter: a.string,
                enterActive: a.string,
                leave: a.string,
                leaveActive: a.string,
                appear: a.string,
                appearActive: a.string
            })]).isRequired,
            appear: a.bool,
            enter: a.bool,
            leave: a.bool,
            appearTimeout: a.number,
            enterTimeout: a.number,
            leaveTimeout: a.number
        },
        transition: function(a, c, d) {
            var e = b("ReactDOM").findDOMNode(this);
            if (!e) {
                c && c();
                return
            }
            var f = this.props.name[a] || this.props.name + "-" + a,
                g = this.props.name[a + "Active"] || f + "-active",
                h = null;
            a = function a(d) {
                if (d && d.target !== e) return;
                clearTimeout(h);
                b("fbjs/lib/CSSCore").removeClass(e, f);
                b("fbjs/lib/CSSCore").removeClass(e, g);
                b("ReactTransitionEvents").removeEndEventListener(e, a);
                c && c()
            };
            b("fbjs/lib/CSSCore").addClass(e, f);
            this.queueClassAndNode(g, e);
            d ? (h = setTimeout(a, d), this.transitionTimeouts.push(h)) : b("ReactTransitionEvents").addEndEventListener(e, a)
        },
        queueClassAndNode: function(a, b) {
            this.classNameAndNodeQueue.push({
                className: a,
                node: b
            }), this.timeout || (this.timeout = setTimeout(this.flushClassNameAndNodeQueue, h))
        },
        flushClassNameAndNodeQueue: function() {
            this.isMounted() && this.classNameAndNodeQueue.forEach(function(a) {
                b("fbjs/lib/CSSCore").addClass(a.node, a.className)
            }), this.classNameAndNodeQueue.length = 0, this.timeout = null
        },
        UNSAFE_componentWillMount: function() {
            this.classNameAndNodeQueue = [], this.transitionTimeouts = []
        },
        componentWillUnmount: function() {
            this.timeout && clearTimeout(this.timeout), this.transitionTimeouts.forEach(function(a) {
                clearTimeout(a)
            }), this.classNameAndNodeQueue.length = 0
        },
        componentWillAppear: function(a) {
            this.props.appear ? this.transition("appear", a, this.props.appearTimeout) : a()
        },
        componentWillEnter: function(a) {
            this.props.enter ? this.transition("enter", a, this.props.enterTimeout) : a()
        },
        componentWillLeave: function(a) {
            this.props.leave ? this.transition("leave", a, this.props.leaveTimeout) : a()
        },
        render: function() {
            return g.Children.only(this.props.children)
        }
    });
    e.exports = c
}), null);
__d("ReactTransitionChildMapping", ["React", "emptyFunction", "warning"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = b("emptyFunction");
    c = {
        getChildMapping: function(a) {
            if (!a) return a;
            var b = {};
            g.Children.toArray(a).forEach(function(a) {
                var c = a.key,
                    d = b[c] === void 0;
                d && (b[c] = a)
            });
            return b
        },
        mergeChildMappings: function(a, b) {
            a = a || {};
            b = b || {};

            function c(c) {
                if (Object.prototype.hasOwnProperty.call(b, c)) return b[c];
                else return a[c]
            }
            var d = {},
                e = [];
            for (var f in a) Object.prototype.hasOwnProperty.call(b, f) ? e.length && (d[f] = e, e = []) : e.push(f);
            var g;
            f = {};
            for (var h in b) {
                if (Object.prototype.hasOwnProperty.call(d, h))
                    for (g = 0; g < d[h].length; g++) {
                        var i = d[h][g];
                        f[d[h][g]] = c(i)
                    }
                f[h] = c(h)
            }
            for (g = 0; g < e.length; g++) f[e[g]] = c(e[g]);
            return f
        }
    };
    e.exports = c
}), null);
__d("ReactTransitionGroup", ["React", "ReactTransitionChildMapping", "fbjs/lib/emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this, d.currentlyTransitioningKeys = {}, d.keysToEnter = [], d.keysToLeave = [], d.state = {
                children: b("ReactTransitionChildMapping").getChildMapping(d.props.children)
            }, d.performEnter = function(a) {
                d.currentlyTransitioningKeys[a] = !0;
                var b = d.refs[a];
                b.componentWillEnter ? b.componentWillEnter(d.$2.bind(babelHelpers.assertThisInitialized(d), a)) : d.$2(a)
            }, d.performLeave = function(a) {
                d.currentlyTransitioningKeys[a] = !0;
                var b = d.refs[a];
                b.componentWillLeave ? b.componentWillLeave(d.$3.bind(babelHelpers.assertThisInitialized(d), a)) : d.$3(a)
            }, c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.UNSAFE_componentWillMount = function() {
            this.currentlyTransitioningKeys = {}, this.keysToEnter = [], this.keysToLeave = []
        };
        d.componentDidMount = function() {
            var a = this.state.children;
            for (var b in a) a[b] && this.performAppear(b)
        };
        d.UNSAFE_componentWillReceiveProps = function(a) {
            a = b("ReactTransitionChildMapping").getChildMapping(a.children);
            var c = this.state.children;
            this.setState({
                children: b("ReactTransitionChildMapping").mergeChildMappings(c, a)
            });
            var d;
            for (d in a) {
                var e = c && Object.prototype.hasOwnProperty.call(c, d);
                a[d] && !e && !this.currentlyTransitioningKeys[d] && this.keysToEnter.push(d)
            }
            for (d in c) {
                e = a && Object.prototype.hasOwnProperty.call(a, d);
                c[d] && !e && !this.currentlyTransitioningKeys[d] && this.keysToLeave.push(d)
            }
        };
        d.componentDidUpdate = function() {
            var a = this.keysToEnter;
            this.keysToEnter = [];
            a.forEach(this.performEnter);
            a = this.keysToLeave;
            this.keysToLeave = [];
            a.forEach(this.performLeave)
        };
        d.performAppear = function(a) {
            this.currentlyTransitioningKeys[a] = !0;
            var b = this.refs[a];
            b.componentWillAppear ? b.componentWillAppear(this.$1.bind(this, a)) : this.$1(a)
        };
        d.$1 = function(a) {
            var c = this.refs[a];
            c.componentDidAppear && c.componentDidAppear();
            delete this.currentlyTransitioningKeys[a];
            c = b("ReactTransitionChildMapping").getChildMapping(this.props.children);
            (!c || !Object.prototype.hasOwnProperty.call(c, a)) && this.performLeave(a)
        };
        d.$2 = function(a) {
            var c = this.refs[a];
            c.componentDidEnter && c.componentDidEnter();
            delete this.currentlyTransitioningKeys[a];
            c = b("ReactTransitionChildMapping").getChildMapping(this.props.children);
            (!c || !Object.prototype.hasOwnProperty.call(c, a)) && this.performLeave(a)
        };
        d.$3 = function(a) {
            var c = this.refs[a];
            c.componentDidLeave && c.componentDidLeave();
            delete this.currentlyTransitioningKeys[a];
            c = b("ReactTransitionChildMapping").getChildMapping(this.props.children);
            c && Object.prototype.hasOwnProperty.call(c, a) ? this.performEnter(a) : this.setState(function(b) {
                b = babelHelpers["extends"]({}, b.children);
                delete b[a];
                return {
                    children: b
                }
            })
        };
        d.render = function() {
            var a = [];
            for (var b in this.state.children) {
                var c = this.state.children[b];
                c && a.push(g.cloneElement(this.props.childFactory(c), {
                    ref: b,
                    key: b
                }))
            }
            c = babelHelpers["extends"]({}, this.props);
            delete c.transitionLeave;
            delete c.transitionName;
            delete c.transitionAppear;
            delete c.transitionEnter;
            delete c.childFactory;
            delete c.transitionLeaveTimeout;
            delete c.transitionEnterTimeout;
            delete c.transitionAppearTimeout;
            delete c.component;
            return g.createElement(this.props.component, c, a)
        };
        return c
    }(g.Component);
    a.displayName = "ReactTransitionGroup";
    a.defaultProps = {
        children: null,
        component: "span",
        childFactory: b("fbjs/lib/emptyFunction").thatReturnsArgument
    };
    e.exports = a
}), null);
__d("ReactCSSTransitionGroup", ["React", "ReactCSSTransitionGroupChild", "ReactTransitionGroup", "prop-types"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");

    function a(a) {
        var b = "transition" + a + "Timeout",
            c = "transition" + a;
        return function(a, d, e) {
            if (a[c])
                if (a[b] == null) return new Error(b + " wasn't supplied to ReactCSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");
                else if (typeof a[b] !== "number") return new Error(b + " must be a number (in milliseconds)")
        }
    }
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++) f[h] = arguments[h];
            return (c = d = a.call.apply(a, [this].concat(f)) || this, d.$1 = function(a) {
                return g.createElement(b("ReactCSSTransitionGroupChild"), {
                    name: d.props.transitionName,
                    appear: d.props.transitionAppear,
                    enter: d.props.transitionEnter,
                    leave: d.props.transitionLeave,
                    appearTimeout: d.props.transitionAppearTimeout,
                    enterTimeout: d.props.transitionEnterTimeout,
                    leaveTimeout: d.props.transitionLeaveTimeout
                }, a)
            }, c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            return g.createElement(b("ReactTransitionGroup"), babelHelpers["extends"]({}, this.props, {
                childFactory: this.$1
            }))
        };
        return c
    }(g.Component);
    c.displayName = "ReactCSSTransitionGroup";
    c.propTypes = {
        transitionName: b("ReactCSSTransitionGroupChild").propTypes.name,
        transitionAppear: b("prop-types").bool,
        transitionEnter: b("prop-types").bool,
        transitionLeave: b("prop-types").bool,
        transitionAppearTimeout: a("Appear"),
        transitionEnterTimeout: a("Enter"),
        transitionLeaveTimeout: a("Leave")
    };
    c.defaultProps = {
        transitionAppear: !1,
        transitionEnter: !0,
        transitionLeave: !0
    };
    e.exports = c
}), null);
__d("VideoWatchAndScrollDrawer.react", ["csx", "cx", "fbt", "AsyncRequest", "DOM", "DOMContainer.react", "FBLoadShimmer.react", "ThisControllerNoLongerExists", "react"], (function(a, b, c, d, e, f, g, h, i, j) {
    var k, l = k || d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
                fetching: !0,
                upNext: null
            }, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = b.prototype;
        e.componentDidMount = function() {
            this.props.videoID && this.$2(this.props.videoID)
        };
        e.componentWillUnmount = function() {
            this.$1 && this.$1.abort()
        };
        e.$2 = function(a) {
            var b = this;
            a = d("ThisControllerNoLongerExists").__DEADBUILDER__("algda5tzx").setFBID("video_id", a).setFBIDSet("viewed_videos", this.props.viewedVideos);
            this.$1 = new(c("AsyncRequest"))(a.getURI());
            this.$1.setHandler(function(a) {
                a = a.getPayload();
                var d = a.upNextUnit && a.upNextUnit.markup;
                if (d) {
                    d = c("DOM").create("div", {}, d);
                    var e = c("DOM").scry(d, "._3iqr");
                    e.length && (b.setState({
                        upNext: d
                    }), b.props.onLoadUpNext(d, a.canAutoplay))
                }
                b.setState({
                    fetching: !1
                })
            }).send()
        };
        e.render = function() {
            var a = null;
            if (this.state.upNext) a = l.jsx(c("DOMContainer.react"), {
                children: this.state.upNext
            });
            else if (this.state.fetching) {
                var b;
                a = l.jsxs("div", {
                    className: "_2685",
                    children: [l.jsx(b = c("FBLoadShimmer.react"), {
                        height: 70,
                        width: 124
                    }), l.jsxs("div", {
                        className: "_63-r",
                        children: [l.jsx(b, {
                            height: 14,
                            width: 140,
                            className: "_3-94"
                        }), l.jsx(b, {
                            height: 14,
                            width: 140,
                            className: "_3-94"
                        }), l.jsx(b, {
                            height: 14,
                            width: 70,
                            className: "_3-94"
                        }), l.jsx(b, {
                            height: 14,
                            width: 70
                        })]
                    })]
                })
            } else return null;
            return l.jsxs("div", {
                className: "_3rq1 _60a7 _2tyk",
                children: [l.jsx("div", {
                    className: "_3652",
                    children: l.jsx("div", {
                        className: "_3653",
                        children: j._("Up next")
                    })
                }), a]
            })
        };
        return b
    }(l.Component);
    g["default"] = a
}), 98);
__d("VideoWatchAndScrollEndScreen.react", ["cx", "fbt", "ix", "Image.react", "PopoverMenu.react", "ReactXUIMenu", "ShimButton.react", "TooltipData", "VideoChannelProgressCircle.react", "VideoChannelReplayImage.react", "VideoPlayerExperiments", "react"], (function(a, b, c, d, e, f, g, h, i, j) {
    var k, l = k || d("react"),
        m = function(a) {
            a = a.onClose;
            return l.jsx(c("ShimButton.react"), {
                className: "_3r7h",
                onClick: a,
                children: l.jsx(c("Image.react"), {
                    src: j("114710")
                })
            })
        },
        n = function(a) {
            a = a.onCollapse;
            return l.jsx("div", babelHelpers["extends"]({
                className: "_1dtq",
                onClick: a,
                role: "button",
                tabIndex: "1"
            }, d("TooltipData").propsFor(i._("Collapse Video")), {
                children: l.jsx(c("Image.react"), {
                    src: j("115705")
                })
            }))
        },
        o = function(a) {
            var b = a.onClose;
            a = l.jsx(c("ReactXUIMenu"), {
                onItemClick: function(a, c) {
                    a = c.item;
                    a.getValue() === "close" && b()
                },
                children: l.jsx(c("ReactXUIMenu").Item, {
                    value: "close",
                    children: "Close"
                })
            });
            return l.jsx(c("PopoverMenu.react"), {
                className: "_ivg",
                menu: a,
                children: l.jsx("a", {
                    href: "#",
                    children: l.jsx(c("Image.react"), {
                        src: j("114186")
                    })
                })
            })
        };
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var d = b.prototype;
        d.render = function() {
            return l.jsxs("div", {
                className: "_5qdn _2se8" + (this.props.fadeOut ? " _2gud" : "") + " _1s-2",
                children: [l.jsx("div", {
                    className: "_1szz _2se8",
                    children: l.jsx("div", {
                        className: "_1szy _ww8",
                        onClick: this.props.onReplay,
                        role: "presentation",
                        children: l.jsx(c("VideoChannelProgressCircle.react"), {
                            makeProgress: this.props.makeProgress,
                            timeoutSec: this.props.endScreenDuration,
                            watchAndScroll: !0,
                            children: l.jsx(c("VideoChannelReplayImage.react"), {
                                size: "small"
                            })
                        })
                    })
                }), l.jsxs("div", {
                    className: "_ivh",
                    children: [c("VideoPlayerExperiments").showWNSClose ? null : l.jsx(o, {
                        onClose: this.props.onClose
                    }), l.jsx(n, {
                        onCollapse: this.props.onCollapse
                    }), c("VideoPlayerExperiments").showWNSClose ? l.jsx(m, {
                        onClose: this.props.onClose
                    }) : null]
                })]
            })
        };
        return b
    }(l.Component);
    g["default"] = a
}), 98);
__d("shouldWNSRenderToRHC", ["ge"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        return !!c("ge")("fbRHCVideoWNS-container")
    }
    g["default"] = a
}), 98);
__d("VideoWatchAndScrollContainer.react", ["csx", "cx", "Arbiter", "CSS", "DOM", "DOMContainer.react", "DOMDimensions", "Event", "Locale", "Parent", "ReactCSSTransitionGroup", "Rect", "SubscriptionsHandler", "VideoChannelProgressCircle.react", "VideoChannelReplayImage.react", "VideoPlayerExperiments", "VideoWatchAndScrollDrawer.react", "VideoWatchAndScrollEndScreen.react", "cancelAnimationFrame", "clearTimeout", "getViewportDimensions", "react", "requestAnimationFrame", "setTimeoutAcrossTransitions", "shallowCompare", "shouldWNSRenderToRHC", "throttle"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j, k = j || d("react"),
        l = 10,
        m = 230,
        n = 476,
        o = 300,
        p = 2e3,
        q = Object.freeze({
            NW: "nw",
            NE: "ne",
            SE: "se",
            SW: "sw"
        });
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c) {
            b = a.call(this, b, c) || this;
            b.state = b.$3(b.props);
            return b
        }
        var e = b.prototype;
        e.$3 = function(a) {
            a = this.$4();
            var b = this.$5(this.props.initialPosition, a);
            return {
                channelVideoElements: [this.props.initialVideoElement],
                containerBoundingBox: a,
                dragging: !1,
                draggingStartHeight: 0,
                draggingStartLeft: 0,
                draggingStartMousePositionX: 0,
                draggingStartMousePositionY: 0,
                draggingStartTop: 0,
                draggingStartWidth: 0,
                endScreenFadeOut: !1,
                endScreenShown: !1,
                fadeOut: !1,
                fadeOutPlaceholder: null,
                hasDrawer: !1,
                height: b.height,
                left: b.left,
                playbackFinished: !1,
                resizeDirection: null,
                showDrawer: !1,
                timeUntilNext: 0,
                top: b.top,
                width: b.width,
                videoIndex: 0
            }
        };
        e.shouldComponentUpdate = function(a, b) {
            return !this.state.fadeOut && c("shallowCompare")(this, a, b)
        };
        e.componentDidUpdate = function(a, b) {
            var e = this;
            if (!b) return;
            !b.dragging && this.state.dragging ? (this.documentSubscriptions = new(c("SubscriptionsHandler"))(), this.documentSubscriptions.addSubscriptions(c("Event").listen(document, "mousemove", this.$6.bind(this)), c("Event").listen(document, "mouseup", this.$7.bind(this)))) : b.dragging && !this.state.dragging && this.documentSubscriptions.release();
            b.playbackFinished !== this.state.playbackFinished && this.state.playbackFinished && this.state.timeUntilNext && (c("clearTimeout")(this.$2), this.$8(), this.$2 = c("setTimeoutAcrossTransitions")(function() {
                e.props.onPlayNext()
            }, this.state.timeUntilNext * 1e3));
            var f = ["._23if", "._23ig", "._452w", "._2i7a"],
                g = b.channelVideoElements || [];
            this.state.channelVideoElements.forEach(function(a) {
                if (g.indexOf(a) !== -1) return;
                f.forEach(function(b) {
                    b = c("DOM").scry(a, b);
                    b = b[0];
                    b && d("CSS").hide(b)
                });
                var b = c("DOM").scry(a, "._3pay");
                b = b[0];
                b && (d("CSS").removeClass(b, "_3pay"), d("CSS").addClass(b, "_2337"))
            })
        };
        e.componentDidMount = function() {
            this.movementListeners = new(c("SubscriptionsHandler"))(), this.movementListeners.addSubscriptions(c("Event").listen(window, "resize", c("throttle")(this.$9.bind(this), 100)), c("Arbiter").subscribe("sidebar/visibility", c("throttle")(this.$9.bind(this), 100)))
        };
        e.componentWillUnmount = function() {
            this.documentSubscriptions && this.documentSubscriptions.release(), this.movementListeners && this.movementListeners.release(), this.$1 && c("clearTimeout")(this.$1), this.$2 && c("clearTimeout")(this.$2)
        };
        e.getFadeOutStatus = function() {
            return this.state.fadeOut
        };
        e.getChannelVideoElements = function() {
            return this.state.channelVideoElements
        };
        e.$9 = function() {
            var a = this.$4(),
                b = this.$5({
                    height: this.state.height,
                    left: this.state.left,
                    top: this.state.top,
                    width: this.state.width
                }, a);
            this.setState({
                containerBoundingBox: a,
                height: b.height,
                left: b.left,
                top: b.top,
                width: b.width
            })
        };
        e.$10 = function(a, b) {
            this.$11(b, a)
        };
        e.$12 = function(a) {
            if (d("Parent").bySelector(a.target, "._5-32") || !d("Parent").bySelector(a.target, "._3t-6")) return;
            this.$11(a, null)
        };
        e.$13 = function(a) {
            return a.button !== 0 || d("Parent").bySelector(a.target, "._3t-6") || d("Parent").bySelector(a.target, "._2se8")
        };
        e.$14 = function(a) {
            if (this.$13(a)) return;
            this.props.onClick && this.props.onClick()
        };
        e.$11 = function(a, b) {
            var c = a.button,
                e = a.target;
            if (c !== 0) return;
            if (d("Parent").bySelector(e, "._360f")) return;
            this.props.onGrab();
            this.setState({
                containerBoundingBox: this.$4(),
                dragging: !0,
                draggingStartHeight: this.state.height,
                draggingStartLeft: this.state.left,
                draggingStartMousePositionX: a.screenX,
                draggingStartMousePositionY: a.screenY,
                draggingStartTop: this.state.top,
                draggingStartWidth: this.state.width,
                resizeDirection: b
            });
            a.preventDefault()
        };
        e.$4 = function() {
            var a = 0,
                b = c("DOM").scry(document.body, ".fbChatSidebar");
            b.length === 1 && (a = d("DOMDimensions").getElementDimensions(b[0]).width);
            b = c("getViewportDimensions").withoutScrollbars();
            var e = 43 + l,
                f = b.height - l,
                g = l;
            b = b.width - l;
            d("Locale").isRTL() ? g += a : b -= a;
            return new(c("Rect"))(e, b, f, g)
        };
        e.$5 = function(a, b) {
            a = new(c("Rect"))(a.top, a.left + a.width, a.top + a.height, a.left);
            a = a.boundWithin(b);
            return {
                height: a.h(),
                left: a.getLeft(),
                top: a.getTop(),
                width: a.w()
            }
        };
        e.$15 = function(a, b, c) {
            var d = a.top,
                e = b.getTop();
            d = e - d;
            d > 0 && ((c === q.NE || c === q.NW) && (a.height -= d), a.top = e);
            d = a.left;
            e = b.getLeft();
            d = e - d;
            d > 0 && ((c === q.NW || c === q.SW) && (a.width -= d), a.left = e);
            c = a.top + a.height;
            d = b.getTop() + b.h();
            e = c - d;
            e > 0 && (a.height = d - a.top);
            c = a.left + a.width;
            e = b.getLeft() + b.w();
            d = c - e;
            d > 0 && (a.width = e - a.left)
        };
        e.$16 = function(a, b, c) {
            a.width < m && ((c === q.NW || c === q.SW) && (a.left -= m - a.width), a.width = m), a.height < m && ((c === q.NE || c === q.NW) && (a.top -= m - a.height), a.height = m)
        };
        e.$17 = function(a, b, c) {
            a.width > n && ((c === q.NW || c === q.SW) && (a.left += a.width - n), a.width = n), a.height > n && ((c === q.NE || c === q.NW) && (a.top += a.height - n), a.height = n)
        };
        e.$18 = function(a, b, c) {
            var d = a.width / a.height;
            b = b.width / b.height;
            if (d > b) {
                var e = a.height * b,
                    f = a.height;
                e < m && (f *= m / e, e = m, (c === q.NE || c === q.NW) && (a.top += a.height - f));
                (c === q.NW || c === q.SW) && (a.left += a.width - e);
                a.width = e;
                a.height = f
            } else if (d < b) {
                e = a.width / b;
                (c === q.NE || c === q.NW) && (a.top += a.height - e);
                a.height = e
            }
        };
        e.$19 = function(a, b, c, d) {
            this.$15(a, c, d);
            this.$16(a, b, d);
            this.$17(a, b, d);
            this.$18(a, b, d);
            return {
                height: a.height,
                left: a.left,
                top: a.top,
                width: a.width
            }
        };
        e.$6 = function(a) {
            c("cancelAnimationFrame")(this.dragUpdateRequestAnimationFrameID), this.dragUpdateRequestAnimationFrameID = c("requestAnimationFrame")(this.$20.bind(this, a))
        };
        e.$21 = function(a) {
            (a.height !== this.state.height || a.width !== this.state.width) && this.props.onInitialPositionUpdate(a)
        };
        e.$20 = function(a) {
            if (!this.state.dragging) return;
            var b = a.screenX - this.state.draggingStartMousePositionX,
                c = a.screenY - this.state.draggingStartMousePositionY,
                d = this.state.resizeDirection,
                e;
            if (!d) e = this.$5({
                height: this.state.draggingStartHeight,
                left: this.state.draggingStartLeft + b,
                top: this.state.draggingStartTop + c,
                width: this.state.draggingStartWidth
            }, this.state.containerBoundingBox), this.$21(e), this.setState({
                height: e.height,
                left: e.left,
                top: e.top,
                width: e.width
            });
            else {
                var f = this.state.draggingStartHeight,
                    g = this.state.draggingStartLeft,
                    h = this.state.draggingStartTop,
                    i = this.state.draggingStartWidth;
                (d === q.NE || d === q.SE) && (i += b);
                (d === q.NW || d === q.SW) && (g += b, i -= b);
                (d === q.SE || d === q.SW) && (f += c);
                (d === q.NE || d === q.NW) && (h += c, f -= c);
                e = this.$19({
                    height: f,
                    left: g,
                    top: h,
                    width: i
                }, {
                    height: this.state.draggingStartHeight,
                    left: this.state.draggingStartLeft,
                    top: this.state.draggingStartTop,
                    width: this.state.draggingStartWidth
                }, this.state.containerBoundingBox, d);
                this.$21(e);
                this.setState({
                    height: e.height,
                    left: e.left,
                    top: e.top,
                    width: e.width
                })
            }
            a.preventDefault()
        };
        e.$7 = function(a) {
            c("cancelAnimationFrame")(this.dragUpdateRequestAnimationFrameID), this.props.onDrop(), this.setState({
                dragging: !1,
                draggingStartHeight: 0,
                draggingStartLeft: 0,
                draggingStartMousePositionX: 0,
                draggingStartMousePositionY: 0,
                draggingStartTop: 0,
                draggingStartWidth: 0,
                resizeDirection: null
            }), a.preventDefault()
        };
        e.$22 = function() {
            this.$1 && (c("clearTimeout")(this.$1), this.$1 = null), this.setState({
                showDrawer: !0
            })
        };
        e.$23 = function() {
            this.state.showDrawer && this.$8()
        };
        e.$24 = function() {
            c("clearTimeout")(this.$2), this.setState({
                playbackFinished: !1
            }), this.props.onReplay()
        };
        e.$8 = function() {
            var a = this;
            this.$1 ? c("clearTimeout")(this.$1) : this.setState({
                showDrawer: !0
            });
            this.$1 = c("setTimeoutAcrossTransitions")(function() {
                a.setState({
                    showDrawer: !1
                }), a.$1 = null
            }, p)
        };
        e.$25 = function(a, b) {
            if (a > this.state.channelVideoElements.length) return null;
            a = this.state.channelVideoElements[a];
            return !a ? null : k.jsx("div", {
                className: "_2yq3" + (b === "left" ? " _2yq4" : "") + (b === "center" ? " _2yq5" : "") + (b === "right" ? " _2yq6" : ""),
                children: k.jsx(c("DOMContainer.react"), {
                    children: a
                })
            }, a.id)
        };
        e.$26 = function() {
            return c("shouldWNSRenderToRHC")() ? [] : [k.jsx("div", {
                className: "_52ua",
                onMouseDown: this.$10.bind(this, q.NW)
            }, q.NW), k.jsx("div", {
                className: "_52uc",
                onMouseDown: this.$10.bind(this, q.NE)
            }, q.NE), k.jsx("div", {
                className: "_52ui",
                onMouseDown: this.$10.bind(this, q.SE)
            }, q.SE), k.jsx("div", {
                className: "_52uj",
                onMouseDown: this.$10.bind(this, q.SW)
            }, q.SW)]
        };
        e.getWidth = function() {
            return this.state.width
        };
        e.onLoadUpNext = function(a, b) {
            this.props.onLoadUpNext(a, b), this.setState({
                hasDrawer: !0
            })
        };
        e.canPlayAnotherVideo = function() {
            var a = this.state.channelVideoElements;
            return this.state.videoIndex < a.length - 1
        };
        e.render = function() {
            var a = this,
                b = null;
            this.props.isDrawerEnabled || (b = {
                height: Math.round(this.state.height) + "px",
                left: this.state.left + "px",
                top: this.state.top + "px",
                width: Math.round(this.state.width) + "px"
            });
            var e = this.state.channelVideoElements,
                f = e[this.state.videoIndex];
            f && (d("CSS").addClass(f, "_1kfp"), d("CSS").conditionClass(f, "_1blk", this.state.width < o));
            this.state.endScreenShown && k.jsx(c("VideoWatchAndScrollEndScreen.react"), {
                endScreenDuration: c("VideoPlayerExperiments").endScreenDuration / 1e3,
                fadeOut: this.state.endScreenFadeOut,
                makeProgress: this.canPlayAnotherVideo(),
                onReplay: this.props.onReplay,
                onClose: function() {
                    c("clearTimeout")(a.$2), a.$2 = null, a.props.onClose()
                },
                onCollapse: this.props.onCollapse
            });
            f = null;
            this.state.fadeOutPlaceholder ? f = k.jsx(c("DOMContainer.react"), {
                children: this.state.fadeOutPlaceholder
            }) : f = k.jsx("ul", {
                className: "_2yq7",
                children: e.map(function(b, e) {
                    (e > a.state.videoIndex + 1 || e < a.state.videoIndex - 1) && d("CSS").removeClass(b, "_1kfp");
                    return e <= a.state.videoIndex + 1 ? null : k.jsx("li", {
                        children: k.jsx(c("DOMContainer.react"), {
                            children: b
                        })
                    }, b.id)
                })
            });
            e = null;
            this.state.playbackFinished && (e = k.jsx("div", {
                role: "presentation",
                onClick: this.$24.bind(this),
                className: "_1szy _ww8",
                children: k.jsx(c("VideoChannelProgressCircle.react"), {
                    makeProgress: !!this.state.timeUntilNext,
                    timeoutSec: this.state.timeUntilNext,
                    watchAndScroll: !0,
                    children: k.jsx(c("VideoChannelReplayImage.react"), {
                        size: "small"
                    })
                })
            }));
            var g = null;
            this.props.isDrawerEnabled && (g = k.jsx(c("VideoWatchAndScrollDrawer.react"), {
                videoID: this.props.videoID,
                viewedVideos: this.props.viewedVideos,
                onLoadUpNext: this.onLoadUpNext.bind(this)
            }));
            return k.jsx(c("ReactCSSTransitionGroup"), {
                transitionAppear: !0,
                transitionAppearTimeout: 500,
                transitionEnter: !1,
                transitionLeave: !1,
                transitionName: {
                    appear: "_tie",
                    appearActive: "_tik"
                },
                children: k.jsxs("div", {
                    className: "_360g" + (this.state.showDrawer ? " _hzi" : "") + (this.state.fadeOut ? " _473b" : "") + (this.state.hasDrawer ? " _60a6" : "") + (this.props.isLiveVideo() ? " _29mh" : ""),
                    onMouseLeave: this.$23.bind(this),
                    onMouseMove: this.$22.bind(this),
                    style: b,
                    children: [k.jsxs("div", {
                        className: "_52u8",
                        onClick: this.$14.bind(this),
                        onMouseDown: this.$12.bind(this),
                        role: "presentation",
                        children: [k.jsxs("div", {
                            className: "_hzj",
                            children: [this.$25(this.state.videoIndex - 1, "left"), this.$25(this.state.videoIndex, "center"), this.$25(this.state.videoIndex + 1, "right"), e]
                        }), g]
                    }), this.$26(), f]
                })
            })
        };
        return b
    }(k.Component);
    g["default"] = a
}), 98);
__d("VideoWatchAndScrollController", ["csx", "cx", "invariant", "Arbiter", "CSS", "DOM", "DOMDimensions", "Event", "EventListener", "Locale", "ReactDOM", "SubscriptionsHandler", "Tahoe", "VideoAutoplayControllerX", "VideoChannelStoryFetcher", "VideoFrameBuffer", "VideoPlayerExperiments", "VideoPlayerVolumeSettings", "VideoWatchAndScrollContainer.react", "VideoWatchAndScrollVariables", "ViewportBounds", "cancelAnimationFrame", "clearTimeout", "destroyOnUnload", "getViewportDimensions", "ifRequired", "react", "setTimeoutAcrossTransitions", "shouldWNSRenderToRHC", "throttle"], (function(a, b, c, d, e, f, g, h, i, j) {
    var k, l = k || d("react"),
        m = 158,
        n = 280,
        o = 10,
        p = 42,
        q = p + o,
        r = 476,
        s = 230,
        t = ["autoplay_initiated", "page_visibility_initiated"],
        u = 750,
        v = 308,
        w = 3,
        x = null;

    function y() {
        return Math.max(c("getViewportDimensions")().height, 400) - p - 80
    }
    a = function() {
        function a(a, b, d, e, f) {
            var g = this;
            this.$30 = new(c("SubscriptionsHandler"))();
            this.$31 = new(c("SubscriptionsHandler"))();
            this.$1 = !1;
            this.$2 = null;
            this.$3 = null;
            this.$4 = !1;
            this.$34 = d;
            this.$37 = !1;
            this.$29 = !1;
            this.$47 = e;
            this.$48 = e;
            this.$52 = f;
            this.$33 = new(c("VideoChannelStoryFetcher"))(b, a, this.$34, null);
            this.$35 = [];
            this.$36 = 0;
            this.$38 = [];
            this.$39 = [];
            this.$5 = m;
            this.$6 = n;
            this.$10 = window.document.getElementById("leftCol");
            this.$11 = window.document.getElementById("rightCol");
            this.$12 = window.document.getElementById("pagelet_bluebar");
            this.$43 = {};
            this.$46 = null;
            this.$53();
            (d = this.$30).addSubscriptions.apply(d, this.$54());
            c("VideoPlayerExperiments").persistentWNSEnabled || c("destroyOnUnload")(function() {
                g.$55(), g.$4 && g.$56(), g.$30 && g.$30.release(), g === x && (x = null)
            })
        }
        var b = a.prototype;
        b.$54 = function() {
            var a = this,
                b = [];
            b.push(c("Arbiter").subscribe("VideoChannelView/opened", function(b, c) {
                a.$4 && (!c.controller || a.$16 !== c.controller) && a.$56()
            }));
            b.push(c("Arbiter").subscribe("fbVideoWatchAndScroll/closeWNS", function() {
                if (!a.$4) return;
                var b = a.$16,
                    c = b.getOption("CommercialBreakVideoAdOverlay", "videoController");
                c && (b = c);
                b.logEvent("watch_and_scroll_exited");
                a.$57()
            }));
            c("VideoPlayerExperiments").rhcWNSEnabled && (b.push(c("Arbiter").subscribe("RHCVideoWNSController/collapseStart", function() {
                var b = a.$14;
                if (!b || !c("shouldWNSRenderToRHC")()) return;
                b.setState({
                    endScreenFadeOut: !0,
                    endScreenShown: !1
                })
            }), c("Arbiter").subscribe("RHCVideoWNSController/collapseEnd", function() {
                var b = a.$14;
                if (!b || !c("shouldWNSRenderToRHC")()) return;
                a.pauseActiveVideo("user_initiated");
                b.setState({
                    endScreenFadeOut: !1
                })
            }), c("Arbiter").subscribe("RHCVideoWNSController/expandStart", function() {
                var b = a.$14;
                if (!b || !a.isActiveVideoDonePlaying() || !c("shouldWNSRenderToRHC")()) return;
                b.setState({
                    endScreenShown: !0
                })
            })), c("VideoPlayerExperiments").persistentWNSEnabled && b.push(c("Arbiter").subscribe("RHCVideoWNSController/eject", function(b, d) {
                if (!c("shouldWNSRenderToRHC")()) return;
                a.$2 = d;
                c("DOM").appendContent(document.body, d);
                a.$16.isState("playing") && a.playActiveVideo("user_initiated")
            }), c("Arbiter").subscribe("RHCVideoWNSController/dock", function() {
                if (!c("shouldWNSRenderToRHC")()) return;
                a.$16.isState("playing") && a.playActiveVideo("user_initiated")
            }), c("Event").listen(window, "resize", c("throttle")(function() {
                if (!c("shouldWNSRenderToRHC")()) return;
                a.$58()
            })), c("Arbiter").subscribe("RHCVideoWNSController/mount", function() {
                a.$58()
            })));
            return b
        };
        b.$58 = function() {
            var a = this.$14;
            if (!a || this.$37) return;
            var b = this.$16.getVideoNode();
            b = this.$59(b);
            this.$16.removeOffsetStylings();
            this.$16.setDimensions(b.width, b.height);
            a.setState({
                width: b.width,
                height: b.height
            });
            this.$46 = b;
            c("Arbiter").inform("VideoWatchAndScrollController/resize")
        };
        b.isActiveVideoDonePlaying = function() {
            var a = this.$16.getState();
            return a === "finished"
        };
        a.isActiveVideoDonePlaying = function() {
            return x ? x.isActiveVideoDonePlaying() : !1
        };
        b.$60 = function(a, b, d) {
            var e = this;
            a || j(0, 3963);
            b.length || j(0, 3964);
            this.$47 = !0;
            this.$37 = !1;
            this.$31 = new(c("SubscriptionsHandler"))();
            this.$36 = d;
            this.$33 = a;
            this.$38 = a.getPreloadedData().thumbnails || [];
            this.$39 = [];
            this.$35 = b.slice(0);
            this.$35.forEach(function(a) {
                e.$61(a), e.$62(a), a.updateSource("watch_scroll")
            });
            d = this.$35.shift();
            this.$63(d, "user_initiated")
        };
        b.$64 = function(a, b, c, d, e) {
            var f = this;
            this.$9 = e;
            this.$46 = this.$59(e.videoRootNode);
            this.$60(a, b, c);
            this.$14 && this.$14.setState({
                channelVideoElements: d
            }, function() {
                f.$65()
            });
            this.$9 = null
        };
        a.registerVideoController = function(b, c, d, e, f) {
            x == null && (x = new a(b.getVideoChannelID(), b.getVideoID(), c, e, f));
            x.$30.addSubscriptions(b.addListener("enterWatchAndScroll", function() {
                x && x.$66(b)
            }), b.addListener("crossfadeWatchAndScroll", function() {
                if (x) {
                    x.$67();
                    var a = b.getVideoNode();
                    x.$46 = x.$59(a);
                    x.$63(b, "user_initiated", !1, !0);
                    b.unmute()
                }
            }), b.addListener("exitWatchAndScroll", function() {
                x && x.$4 && x.$56()
            }), b.addListener("VideoChannelController/enterChannel", function() {
                x && (x.$37 = !0)
            }), b.addListener("VideoChannelController/exitChannel", function() {
                x && (x.$37 = !1)
            }));
            c === "wns" && x.$35.push(b);
            if (!d) return;
            e = ["beginPlayback", "changeVolume", "muteVideo", "toggleFullscreen", "unmuteVideo", "VideoChannelController/enterChannel"];
            e.forEach(function(a) {
                x && x.$30.addSubscriptions(b.addListener(a, function(c) {
                    x && x.$68(b, a, c)
                }))
            })
        };
        a.isActive = function() {
            return !x ? !1 : x.$4 && !x.$37
        };
        a.updateSlidingCalculations = function() {
            if (!x) return;
            x.$19 && x.$69(x.$19)
        };
        a.registerChannelVideoController = function(a) {
            if (!x) return;
            a.updateSource("watch_scroll");
            x.$61(a);
            x.$62(a);
            x.$35.push(a)
        };
        a.getStoryFetcherData = function() {
            return x && x.$70()
        };
        b.$70 = function() {
            return {
                storyFetcher: this.$33,
                videoPlayerControllers: this.$35,
                channelVideoIndex: this.$36,
                rootVideoPlayerController: this.$17,
                channelInteractionsToRegister: this.$39,
                isFromWNS: !0
            }
        };
        a.getVideoPlaceholder = function() {
            return !x ? null : x.$18
        };
        a.getReactContainer = function() {
            return !x ? null : x.$14
        };
        a.registerChannelInteraction = function(a) {
            x && x.$39.push(a)
        };
        a.onEnterTahoe = function() {
            if (!x) return;
            x.$71()
        };
        b.$71 = function() {
            this.$37 = !0, this.$33.abandonRequest()
        };
        a.onEnterChannel = function() {
            if (!x) return;
            x.$72()
        };
        b.$72 = function() {
            this.$37 = !0;
            this.$33.abandonRequest();
            var a = this.$14;
            if (!a) return;
            var b = ["._23if", "._23ig", "._452w", "._2i7a"];
            a.getChannelVideoElements().forEach(function(a) {
                b.forEach(function(b) {
                    b = c("DOM").scry(a, b);
                    b = b[0];
                    b && d("CSS").show(b)
                });
                var e = c("DOM").scry(a, "._2337");
                e = e[0];
                e && (d("CSS").removeClass(e, "_2337"), d("CSS").addClass(e, "_3pay"))
            })
        };
        a.resetFromChannelView = function(a, b, c) {
            if (!x) return;
            x.$60(a, b, c)
        };
        a.startFromChannelView = function(a, b, c, d, e) {
            if (!x) return;
            x.$64(a, b, c, d, e)
        };
        b.$68 = function(a, b, c) {
            if (this.$4) {
                if (this.$16 === a) return;
                if (c && t.includes(c.reason)) return;
                if (!a.isIntentionallyViewing()) return;
                var d = this.$16.getOption("VideoWithLiveBroadcast", "isLive");
                d ? this.$16.mute() : this.$16.pause("user_initiated")
            }
            if (b === "toggleFullscreen" && a.isFullscreen() || b === "VideoChannelController/enterChannel") this.$19 && this.$55();
            else if ((b !== "beginPlayback" || c && c.reason === "user_initiated" || a.getSource() === "permalink") && a.isIntentionallyViewing() && !a.isFullscreen() && !a.getIsInChannel()) {
                d = this.$73(a.getVideoNode());
                d = d.top;
                (d > window.scrollY || b === "beginPlayback" && c && c.reason === "autoplay_initiated") && this.$69(a)
            }
        };
        b.$74 = function(a) {
            if (this.$37 || a !== this.$16) return;
            this.$14 && this.$14.setState({
                endScreenShown: !0,
                playbackFinished: !0,
                timeUntilNext: this.$50 ? w : 0
            })
        };
        b.$75 = function(a) {
            var b = this;
            return a.addListener("finishPlayback", function() {
                return b.$74(a)
            })
        };
        b.$69 = function(a) {
            var b = a.getVideoNode();
            if (!b.offsetParent) return;
            this.$19 = a;
            this.$25 = c("throttle")(this.$76.bind(this), 100);
            window.addEventListener("resize", this.$25);
            this.$77(b);
            c("VideoPlayerExperiments").enableClickOnlyWatchAndScroll || this.$78()
        };
        b.$76 = function() {
            this.$19 && (this.$77(this.$18 || this.$19.getVideoNode()), this.$26 && this.$26())
        };
        b.$79 = function(a) {
            var b = this.$73(a),
                c = a.scrollWidth;
            a = a.scrollHeight;
            var d = s,
                e = r;
            c < a && (d *= c / a, e *= c / a);
            c = d;
            if (this.$10 && this.$10.children.length) {
                a = this.$73(this.$10);
                if (a.left <= b.left) c = Math.min(a.left - 2 * o, e);
                else if (this.$11 && this.$11.children.length) {
                    b = this.$73(this.$11);
                    c = Math.min(b.left - 2 * o, e)
                }
            } else {
                a = document.getElementById("timeline_tab_content");
                if (a) {
                    b = this.$73(a).left;
                    c = Math.min(b - 2 * o, e)
                }
            }
            return Math.max(c, d)
        };
        b.$73 = function(a) {
            var b = {
                left: 0,
                top: 0
            };
            do b.top += a.offsetTop, b.left += a.offsetLeft; while (a = a.offsetParent);
            return b
        };
        b.$80 = function() {
            if (c("VideoPlayerExperiments").rhcWNSEnabled) return v;
            var a = 0;
            if (this.$10 && this.$10.children.length) {
                var b = this.$73(this.$10),
                    d = window.getComputedStyle(this.$10);
                d = parseInt(d.width, 10);
                c("VideoPlayerExperiments").persistentWNSEnabled && (d = d || n);
                a = d + b.left - o
            } else {
                d = document.getElementById("timeline_tab_content");
                if (!d) {
                    b = document.getElementById("pagelet_timeline_main_column");
                    b ? d = b.parentNode : d = document.getElementById("contentArea")
                }
                if (d) {
                    b = this.$73(d).left;
                    a = b - 2 * o
                }
            }
            return a
        };
        b.$59 = function(a) {
            var b = !a && this.$9;
            ({
                left: 0
            });
            var e = 16,
                f = 9;
            if (!b) {
                this.$73(a);
                f = 1;
                e = parseFloat(a.getAttribute("data-original-aspect-ratio"));
                a = a.parentElement;
                (!e || f === 0) && a && (this.$73(a), e = a.scrollWidth, f = a.scrollHeight)
            }
            a = s;
            var g = r;
            e < f && (a *= e / f, g *= e / f);
            var h = this.$80(),
                i = o;
            this.$12 && (i += this.$12.scrollHeight);
            i = Math.max(i, q);
            var j = c("VideoPlayerExperiments").rhcWNSEnabled ? h : Math.max(Math.min(h, g), s),
                k;
            c("VideoPlayerExperiments").rhcWNSEnabled ? k = d("Locale").isRTL() ? o + c("ViewportBounds").getRight() : c("getViewportDimensions")().width - j - o : (k = h > g ? h - g + o : o, k = Math.max(k, o));
            g = j * f / e;
            c("VideoPlayerExperiments").rhcWNSEnabled && (g = Math.min(g, y()));
            return {
                hasEnoughSpace: !!b || h >= a,
                height: g,
                left: k,
                top: i,
                width: j
            }
        };
        a.hasEnoughSpaceToEnter = function(a) {
            if (!x || !a || !a.getVideoNode()) return !1;
            a = a.getVideoNode();
            var b = 1,
                c = parseFloat(a.getAttribute("data-original-aspect-ratio"));
            a = a.parentElement;
            (!c || b === 0) && a && (c = a.scrollWidth, b = a.scrollHeight);
            a = s;
            c < b && (a *= c / b);
            return x.$80() > a
        };
        b.$77 = function(a) {
            this.$22 = this.$73(a);
            this.$27 = a.scrollWidth;
            this.$28 = a.scrollHeight;
            var b = Math.max(this.$27, this.$28);
            if (b < s) {
                b = s / b;
                this.$27 *= b;
                this.$28 *= b
            }
            this.$21 = this.$22.top + this.$28 * .5 - p;
            this.$20 = this.$22.top + this.$28 * .5 - window.innerHeight;
            this.$46 = this.$59(a);
            this.$29 = !this.$46.hasEnoughSpace
        };
        b.$78 = function() {
            this.$19.isIntentionallyViewing() ? (this.$81(this.$82.bind(this)), this.$82()) : this.$55()
        };
        a.isVideoAlmostFinished = function(a) {
            var b = a.getPlaybackDuration();
            a = a.getCurrentTimePosition();
            var d = c("VideoWatchAndScrollVariables").noWNSRemainingTime;
            if (b * .2 < d) return a / b > .8;
            else return b - a < d
        };
        a.isSlidingEnabled = function(b) {
            var c = x;
            if (c == null) return !1;
            var d = c.$19;
            if (d == null || d !== b) return !1;
            if (c.$29 || !b.isIntentionallyViewing() || !b.getVideoNode().offsetParent || a.isVideoAlmostFinished(b) || b.getSource() === "tahoe" || b.hasLooped()) {
                c.$55();
                return !1
            }
            return !0
        };
        b.$82 = function() {
            var b = this.$19;
            if (b == null) return;
            if (!b.isIntentionallyViewing() || !b.getVideoNode().offsetParent) {
                this.$55();
                return
            }(window.scrollY > this.$21 || window.scrollY < this.$20) && a.isSlidingEnabled(b) && b !== this.$16 && !b.isFullscreen() && !this.$37 && (this.$67(), c("VideoPlayerExperiments").fixFeedVideosPlayOffscreen && b.emit("enterWatchAndScroll"), this.$63(b, "autoplay_initiated", !1, !0), this.$55())
        };
        b.$67 = function() {
            this.$47 = this.$48
        };
        b.$81 = function(a) {
            window.removeEventListener("scroll", this.$26), this.$26 = a || null, window.addEventListener("scroll", this.$26), c("cancelAnimationFrame")(this.$32), delete this.$32
        };
        b.$55 = function() {
            window.removeEventListener("resize", this.$25), this.$81(), delete this.$19, this.$29 = !1
        };
        b.$66 = function(a) {
            this.$55(), this.$4 && this.$16 !== a ? this.$83(a) : (this.$46 = this.$59(a.getVideoNode()), this.$67(), this.$63(a, "user_initiated"))
        };
        b.$83 = function(a) {
            this.$23 = a, this.$84()
        };
        b.$63 = function(a, b, e, g) {
            var h, i = this;
            if (a.getSource() === "tahoe") {
                this.$37 = !1;
                var j = c("Tahoe").get();
                j && j.onExit("wns")
            }
            j = !!this.$45;
            this.$45 && (c("clearTimeout")(this.$45), this.$45 = null, d("ReactDOM").unmountComponentAtNode(this.$85(), f.id), this.$86());
            g = this.$1 && (e || g) && !!this.$17 && this.$17 !== a;
            g && (this.$36 = 0, this.$35 = [], this.$38 = [], this.$41 = this.$17, this.$43 = babelHelpers["extends"]({}, this.$8), this.$44 = this.$18, this.$40 = this.$14, this.$42 = this.$2, this.$2 = null, this.$13 && this.$13.remove(), this.$31.release(), this.$31 = new(c("SubscriptionsHandler"))());
            this.$17 = a;
            this.$87(this.$14 && this.$36 > 0 ? this.$88(this.$36) : a);
            this.$49 ? this.$49.add(a.getVideoID()) : this.$49 = new Set([a.getVideoID()]);
            this.$14 && this.$35.length > this.$36 && this.$88(this.$36 + 1).preload();
            this.$15 = this.$16.getRootNode();
            h = !this.$1 && !((h = this.$52) == null ? void 0 : h.disableAlwaysStartMuted) || !this.$16.isMuted();
            var k = !this.$1 || this.$16.isState("playing"),
                l = this.$1 && this.$16.isState("finished");
            if (!this.$1 || g) {
                (!e || j) && (j && (this.$46 = this.$59(this.$15)), this.$53(this.$15));
                if (this.$9) {
                    this.$8 = this.$9;
                    if (this.$8.videoRootNode) {
                        this.$18 = this.$89(this.$8.dimensions, this.$17.getVideoNode());
                        c("DOM").appendContent(this.$8.videoRootNode, this.$18);
                        e = c("DOM").scry(this.$8.videoRootNode, "._344x");
                        j = e[0];
                        j && c("DOM").remove(j)
                    }
                } else this.$8 = {
                    videoRootNode: this.$15.parentNode,
                    dimensions: d("DOMDimensions").getElementDimensions(this.$15),
                    source: this.$16.getSource()
                }, this.$18 = this.$89(this.$8.dimensions, this.$16.getVideoNode()), c("DOM").insertAfter(this.$15, this.$18);
                e = null;
                this.$9 && (e = this.$9.videoRootNode);
                !e && this.$15 && (e = this.$15.parentNode);
                e && (this.$13 = c("EventListener").listen(e, "click", function() {
                    i.$57(), a.play("user_initiated"), c("setTimeoutAcrossTransitions")(function() {
                        i.$68(a, "beginPlayback", {
                            reason: "user_initiated"
                        })
                    }, u)
                }));
                this.$16.pause("user_initiated");
                this.$16.isPlayerVersion("silvercity") && this.$16.detachRootNode();
                j = this.$7 ? this.$7.width : this.$6;
                e = this.$7 ? this.$7.height : this.$5;
                this.$16.removeOffsetStylings();
                this.$16.setDimensions(j, e);
                this.$4 = !0;
                g && this.$90();
                this.$14 = this.$91();
                !this.$1 && c("shouldWNSRenderToRHC")() && c("Arbiter").inform("VideoWatchAndScrollController/init");
                l && this.$74(this.$16)
            } else this.$16.pause("user_initiated"), this.$65();
            k && this.$16.play(b);
            if (h) {
                this.$16.unmute();
                if (this.$16.getVolume() === 0) {
                    j = c("VideoPlayerVolumeSettings").getLastVolumeBeforeMute() || 1;
                    this.$16.setVolume(j);
                    this.$16.emit("unmuteVideo")
                }
            }
            this.$16.updateSource("watch_scroll");
            e = this.$33;
            (!this.$1 || g) && e && (e.abandonRequest(), this.$9 || e.reset(a.getVideoID(), a.getVideoChannelID()), this.$92(), this.$61(a), this.$62(a));
            this.$1 = !0;
            c("shouldWNSRenderToRHC")() && c("Arbiter").inform("VideoWatchAndScrollController/start")
        };
        b.$61 = function(b) {
            b.hasOption("WatchAndScroll", "isActive") || b.registerOption("WatchAndScroll", "isActive", a.isActive)
        };
        b.$62 = function(a) {
            var b = this;
            this.$31.addSubscriptions(this.$75(a), a.addListener("VideoChannelController/enterChannel", function() {
                b.$31.release()
            }), a.addListener("WatchAndScroll/close", function() {
                b.$57()
            }))
        };
        b.$93 = function() {
            if (!this.$14) return;
            this.$14.setState({
                endScreenShown: !1
            });
            this.$16 && this.$16.play("user_initiated")
        };
        b.$92 = function() {
            var a = this;
            if (!this.$47) return;
            this.$33.fetchStories(!0, function(b, d) {
                var e = a.$14;
                if (!b || !b.length || !e) return;
                b = e.getChannelVideoElements().concat(b);
                e.setState({
                    channelVideoElements: b
                }, function() {
                    c("setTimeoutAcrossTransitions")(function() {
                        a.$88(a.$36 + 1).preload()
                    })
                });
                a.$38 = a.$38.concat(d)
            })
        };
        b.$88 = function(a) {
            var b = this.$14 ? this.$14.getChannelVideoElements() : [],
                c = [this.$17].concat(this.$35),
                d = null;
            c.forEach(function(c) {
                b[a].contains(c.getRootNode()) && (d = c)
            });
            d || j(0, 3965);
            return d
        };
        b.$94 = function() {
            if (x && x.$50)
                for (var a = 0; a < x.$35.length; a++) {
                    var b = x.$35[a];
                    if (x.$50.contains(b.getRootNode())) return b
                }
            return null
        };
        b.$65 = function() {
            var a = this.$16.isMuted();
            this.$16.pause("user_initiated");
            this.$16 !== this.$17 && this.$16.abortLoading();
            this.$87(this.$88(this.$36));
            this.$15 = this.$16.getRootNode();
            var b = this.$16.getVideoNode(),
                d = parseFloat(b.getAttribute("data-original-aspect-ratio"));
            d || (d = 16 / 9);
            var e = this.$46;
            e || (e = this.$59(b));
            this.$14 && (e.width = this.$14.getWidth());
            e.height = e.width / d;
            c("VideoPlayerExperiments").rhcWNSEnabled ? e.height = Math.min(e.height, y()) : e.height > r && (e.height = r, e.width = e.height * d);
            this.$16.removeOffsetStylings();
            this.$16.setDimensions(e.width, e.height);
            this.$53(b);
            this.$14 && this.$14.setState({
                playbackFinished: !1,
                videoIndex: this.$36,
                width: e.width,
                height: e.height
            }, function() {
                c("shouldWNSRenderToRHC")() && c("Arbiter").inform("VideoWatchAndScrollController/resize")
            });
            this.$46 = e;
            this.$16.play("autoplay_initiated");
            a && this.$16.mute();
            this.$35.length <= this.$36 ? this.$92() : this.$88(this.$36 + 1).preload()
        };
        b.$95 = function() {
            var a = o;
            this.$12 && (a += this.$12.scrollHeight);
            return Math.max(a, q)
        };
        b.$53 = function(a) {
            if (this.$46) {
                this.$7 = {
                    height: this.$46.height,
                    left: this.$46.left,
                    top: this.$46.top,
                    width: this.$46.width
                };
                return
            }
            if (a) {
                var b = a.scrollWidth,
                    c = a.scrollHeight;
                a = this.$79(a);
                c = a * c / b;
                this.$7.height = c;
                this.$7.width = a
            } else this.$7 = {
                height: this.$5,
                left: o,
                top: this.$95(),
                width: this.$6
            }
        };
        b.$89 = function(a, b) {
            var d = c("DOM").create("canvas", {
                className: "_57n6"
            });
            d.height = a.height;
            d.width = a.width;
            if (d.getContext && d.getContext("2d"))
                if (b.scrollHeight === 0) {
                    a = c("DOM").scry(b.parentNode, "._3t5i");
                    a = a[0];
                    if (a) {
                        var e = d.getContext("2d");
                        e.drawImage(a, 0, 0)
                    }
                } else if (b instanceof window.HTMLVideoElement) {
                e = new(c("VideoFrameBuffer"))(d, b);
                e.updateFrameBuffer()
            }
            a = c("DOM").create("div");
            a.appendChild(d);
            b = c("DOM").create("i", {
                className: "_1jto _bsl _3htz"
            });
            a.appendChild(b);
            return a
        };
        b.$57 = function() {
            this.$19 && this.$55();
            this.$16.pause("user_initiated");
            var a = this.$94();
            a && a.pause("user_initiated");
            x && (x.$50 = null);
            this.$84()
        };
        b.$96 = function() {
            this.$16.emit("WatchAndScroll/collapse")
        };
        b.$97 = function() {
            var a = this.$89(this.$7, this.$16.getVideoNode(), !0);
            this.$14 && this.$14.setState({
                fadeOut: !0,
                fadeOutPlaceholder: a
            });
            this.$98(this.$17, this.$8);
            this.$18 && (c("DOM").remove(this.$18), this.$18 = null);
            this.$13 && (this.$13.remove(), this.$13 = null)
        };
        b.$98 = function(a, b, e) {
            var g;
            a.pause("user_initiated");
            a.isPlayerVersion("silvercity") && a.detachRootNode();
            e && d("ReactDOM").unmountComponentAtNode(e, f.id);
            b.dimensions && b.dimensions.width && b.dimensions.height && (a.addOffsetStylings(), a.setDimensions(b.dimensions.width, b.dimensions.height));
            b.videoRootNode && c("DOM").appendContent(b.videoRootNode, a.getRootNode());
            a.emit("WatchAndScroll/positionUpdated");
            a.updateSource(b.source || "inline");
            e = this.$73(a.getVideoNode());
            b = e.top;
            e = c("getViewportDimensions")().height;
            !((g = this.$52) == null ? void 0 : g.disableMuteOnExit) && a.getSource() !== "permalink" && a.mute();
            b < window.scrollY || b > window.scrollY + e || this.$51 === !1 ? (a.pause("autoplay_initiated"), a.emit("resumeAutoplay")) : a.play("user_initiated")
        };
        b.$90 = function() {
            var a = this;
            this.$4 || j(0, 3966);
            this.$40 || j(0, 3967);
            this.$40.setState({
                fadeOut: !0
            });
            this.$45 = c("setTimeoutAcrossTransitions")(function() {
                a.$41 || j(0, 3968), a.$42 || j(0, 3969), a.$98(a.$41, a.$43, a.$42), a.$44 && (c("DOM").remove(a.$44), a.$44 = null), a.$45 = null
            }, u)
        };
        b.$56 = function() {
            var a = this;
            this.$4 || j(0, 3966);
            this.$14 || j(0, 3970);
            !this.$23 && c("shouldWNSRenderToRHC")() && c("Arbiter").inform("VideoWatchAndScrollController/exit");
            this.$35.forEach(function(a) {
                return a.abortLoading()
            });
            this.$97();
            this.$45 = c("setTimeoutAcrossTransitions")(function() {
                d("ReactDOM").unmountComponentAtNode(a.$85(), f.id), a.$86()
            }, u)
        };
        b.$86 = function() {
            this.$4 || j(0, 3966), this.$33 && this.$33.abandonRequest(), this.$36 = 0, this.$1 = !1, this.$31.release(), this.$31 = new(c("SubscriptionsHandler"))(), this.$8 = {}, this.$16 = null, this.$17 = null, this.$4 = !1, this.$35 = [], this.$38 = [], this.$14 = null, c("clearTimeout")(this.$45), this.$45 = null, this.$41 && this.$42 && this.$43 && this.$98(this.$41, this.$43, this.$42), this.$41 = null, this.$43 = {}, this.$44 && (c("DOM").remove(this.$44), this.$44 = null), c("VideoAutoplayControllerX").setShouldAutoplay(!0), this.$2 = null, this.$23 && (this.$46 = this.$59(this.$23.getVideoNode()), this.$67(), this.$63(this.$23, "user_initiated"), this.$23 = null), this.$29 = !1, this.$46 = null
        };
        b.$91 = function() {
            var a = this;
            return d("ReactDOM").render(l.jsx(c("VideoWatchAndScrollContainer.react"), {
                isDrawerEnabled: c("VideoPlayerExperiments").rhcWNSDrawerEnabled && c("shouldWNSRenderToRHC")() && c("VideoPlayerExperiments").rhcWNSExpandToTahoe,
                isLiveVideo: function() {
                    return a.$16.isLiveVideo()
                },
                initialPosition: this.$7,
                initialVideoElement: this.$15,
                onChannelNavigation: this.$99.bind(this),
                onClick: this.$100.bind(this),
                onClose: this.$57.bind(this),
                onCollapse: this.$96.bind(this),
                onDrop: this.$101.bind(this),
                onGrab: this.$102.bind(this),
                onInitialPositionUpdate: this.$103.bind(this),
                onLoadUpNext: this.registerUpNextUnit.bind(this),
                onPlayNext: this.$104.bind(this),
                onReplay: this.$93.bind(this),
                viewedVideos: Array.from(this.$49),
                videoID: this.$16.getVideoID()
            }), this.$85(), "VideoWatchAndScrollController.js")
        };
        b.$84 = function() {
            this.$17 && this.$17.emit("exitWatchAndScroll");
            var a = this.$94();
            a && a.emit("exitWatchAndScroll")
        };
        b.$99 = function(a) {
            if (a > 0 && this.$35.length <= this.$36) {
                c("shouldWNSRenderToRHC")() || this.$57();
                return
            }
            this.$36 += a;
            this.$65()
        };
        b.$104 = function() {
            var a = this.$94();
            a && (this.$50 = null, a.emit("crossfadeWatchAndScroll"), this.$51 ? a.play("autoplay_initiated") : (a.preload(), a.emit("showOverlay")))
        };
        b.$102 = function() {
            this.$19 && this.$55();
            var a = this.$16.getOption("VideoWithLiveBroadcast", "isLive");
            if (a) return;
            this.$24 = this.$16.isState("playing");
            this.$16.pause("user_initiated")
        };
        b.$101 = function() {
            var a = this.$16.getOption("VideoWithLiveBroadcast", "isLive");
            if (a) return;
            this.$24 && this.$16.play("user_initiated");
            this.$24 = null
        };
        b.$100 = function() {
            var a = this.$16.getOption("VideoWithLiveBroadcast", "isLive");
            if (this.$19 || a) return;
            this.$16.isState("playing") ? this.$16.pause("user_initiated") : (this.$16.isState("paused") || this.$16.isState("finished") || this.$16.isState("ready")) && this.$16.play("user_initiated")
        };
        b.$87 = function(a) {
            var b = this;
            if (this.$16 === a) return;
            c("VideoPlayerExperiments").rhcWNSEnabled && a.addListener("WatchAndScroll/collapse", function() {
                if (a != b.$16) {
                    a.removeCurrentListener();
                    return
                }
                if (!c("shouldWNSRenderToRHC")()) return;
                c("Arbiter").inform("VideoWatchAndScrollController/collapse")
            });
            this.$16 = a
        };
        b.pauseActiveVideo = function(a) {
            if (!this.$16) return;
            this.$16.pause(a)
        };
        a.pauseActiveVideo = function(a) {
            a === void 0 && (a = "user_initiated");
            if (!x) return;
            x.pauseActiveVideo(a)
        };
        b.playActiveVideo = function(a) {
            if (!this.$16) return;
            this.$16.play(a)
        };
        b.registerUpNextUnit = function(a, b) {
            var d = c("DOM").find(a, "._3iqr");
            if (!x || !d) return;
            x.$50 = a;
            x.$51 = b;
            c("EventListener").listen(d, "click", function(a) {
                if (!x) return;
                var b = x.$94();
                b && (a.preventDefault(), a.stopPropagation(), x.$50 = null, b.emit("crossfadeWatchAndScroll"), b.play("user_initiated"))
            })
        };
        a.playActiveVideo = function(a) {
            a === void 0 && (a = "user_initiated");
            if (!x) return;
            x.playActiveVideo(a)
        };
        b.$103 = function(a) {
            this.$7 = a, this.$14 && !this.$14.getFadeOutStatus() && (this.$16.removeOffsetStylings(), this.$16.setDimensions(a.width, a.height), this.$16.emit("WatchAndScroll/positionUpdated"))
        };
        b.$105 = function() {
            var a = c("DOM").create("div");
            c("shouldWNSRenderToRHC")() ? c("ifRequired")("RHCVideoWNSController", function(b) {
                return b.mount(a)
            }) : c("DOM").appendContent(document.body, a);
            return a
        };
        b.$85 = function() {
            this.$2 || (this.$2 = this.$105());
            return this.$2
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("XBasicFBNuxGenShouldShowController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/ajax/megaphone/should_show_fbnux/", {
        nux_id: {
            type: "Int",
            required: !0
        },
        should_log_view: {
            type: "Bool",
            defaultValue: !0
        },
        dependencies: {
            type: "IntVector"
        }
    })
}), null);
__d("VideoControls", ["csx", "cx", "Arbiter", "AsyncRequest", "Bootloader", "CSS", "DeferredComponent.react", "EventListener", "FullScreen", "LiveRewindUtils", "LiveVideoPlayerActions", "Parent", "PlaybackSpeedExperiments", "ReactDOMComet", "SubscriptionsHandler", "VideoPlayerExperiments", "VideoPlayerUIComponentDrawer", "VideoWatchAndScrollController", "XBasicFBNuxGenShouldShowController", "cancelAnimationFrame", "containsNode", "destroyOnUnload", "getActiveElement", "gkx", "logVideosClickTracking", "react", "requestAnimationFrame", "shouldWNSRenderToRHC", "throttle"], (function(a, b, c, d, e, f, g, h, i) {
    var j, k = j || d("react"),
        l = new Set(["embedded", "embedded_video", "embedded_video_preview", "embedded_page_plugin", "embedded_video_from_ufi"]),
        m = 200,
        n = 4936,
        o = 36,
        p = 5e3;
    a = function() {
        function a(a, b, e) {
            var f = this;
            this.$16 = {
                current: null
            };
            this.$134 = function() {
                f.$11 = !1, f.scheduleRenderReactComponent()
            };
            this.$15 = a;
            this.$16.current = this.$15;
            this.$91 = b;
            this.$125 = d("ReactDOMComet").createRoot(b);
            this.$10 = 0;
            this.$84 = 0;
            this.$83 = 0;
            this.$28 = 0;
            this.$124 = !1;
            this.$92 = !1;
            this.$48 = e.hideOnEvents.autoplay;
            this.$49 = e.hideOnEvents.finish;
            this.$42 = e.hideOnEvents.pause;
            this.$105 = e.unhideOnHover;
            this.$43 = e.hidePlaybackControl;
            this.$44 = e.isWatchIconEligible;
            this.$45 = e.hidePlaybackScrubber;
            this.$106 = e.showPlaybackRateControl;
            this.$110 = e.showVideoSliderWarningTooltip;
            this.$46 = e.hideRemainingTime;
            this.$47 = e.hideSettings;
            this.$121 = e.useTwoRows;
            this.$55 = e.isCommentAttachment;
            this.$85 = e.pointsOfInterestConfig || {};
            this.$18 = e.displayElapsedTime || !1;
            this.$19 = e.displayMilliseconds || !1;
            this.$20 = e.displayDurationLimit;
            this.$21 = e.displayTimeOffset;
            this.$1 = e.adBreaks;
            this.$2 = e.adBreaksDisableReasons;
            this.$109 = e.showSpatialAudioNUX;
            this.$87 = (b = e.pollTimestamps) != null ? b : [];
            this.$69 = !1;
            this.$102 = e.shouldShowWNSNUX;
            this.$11 = !1;
            this.$37 = !1;
            this.$50 = e.insertedAdBreaks;
            this.$51 = e.isAdBreakDisabled;
            this.$52 = e.isAdBreakInsertionWithoutGapRule;
            this.$103 = (b = e.showEligibleStarsCueTimeSegments) != null ? b : !1;
            this.$104 = e.selectedStarsCueTimestamp;
            this.$63 = e.isLiveRewindEnabled || this.$15.isFBWasLive();
            this.$64 = this.$15.isFBWasLive();
            this.$76 = null;
            this.$107 = e.showPlayButtonForLive;
            this.$122 = e.videoClipInfo;
            this.$98 = !!e.videoClipInfo;
            this.$13 = null;
            this.$78 = e.mutedSegments;
            b = a.isHtml5Player();
            a = a.getPlayerSuborigin();
            this.$39 = e.showButtons.watchandscroll && b && a !== "topic_live";
            this.$3 = e.showButtons.casting;
            this.$4 = e.showButtons.fullscreen && !!c("FullScreen").isSupported();
            this.$5 = e.showButtons.audioButton;
            this.$81 = e.permalinkURL;
            this.$99 = e.shouldShowInlineCopyLinkOption;
            this.$100 = e.shouldShowInlineVideoReportOption;
            this.$101 = e.shouldShowPermalinkButton;
            this.$61 = e.isLive;
            this.$62 = e.isGamingVideo;
            this.$70 = e.isSphericalVideo;
            this.$29 = e.forceVisible || !1;
            this.$30 = e.forceVisibleOnMount || !1;
            this.$41 = e.hideGradient || !1;
            this.$119 = e.useDarkTheme || !1;
            this.$53 = !1;
            this.$56 = !1;
            this.$40 = !1;
            this.$67 = !1;
            this.$68 = !1;
            this.$108 = e.showQualitySelector;
            this.$88 = e.qualitySelectorMinStreams;
            this.$74 = this.liveRewindToBeginning.bind(this);
            this.$72 = this.liveRewindSeekBack.bind(this);
            this.$73 = this.liveRewindSeekForward.bind(this);
            this.$75 = this.liveRewindToLive.bind(this);
            this.$25 = this.enterWatchAndScroll.bind(this);
            this.$24 = this.enterTahoe.bind(this);
            this.$82 = this.play.bind(this);
            this.$80 = this.pause.bind(this);
            this.$93 = this.scrubBegin.bind(this);
            this.$94 = this.scrubEnd.bind(this);
            this.$111 = this.startCasting.bind(this);
            this.$112 = this.stopCasting.bind(this);
            this.$114 = this.toggleFullscreen.bind(this);
            this.$115 = this.toggleHD.bind(this);
            this.$116 = this.toggleHLS.bind(this);
            this.$117 = this.toggleMuted.bind(this);
            this.$118 = this.toggleCaptions.bind(this);
            this.$12 = this.changeVolume.bind(this);
            this.$97 = this.setVideoPlaybackRate.bind(this);
            this.$96 = this.setPreferredVideoQuality.bind(this);
            this.$23 = this.$15.registerDrawer(c("VideoPlayerUIComponentDrawer").priorities.EmbeddedControls, o);
            this.$79 = e.needsInitialVideoInfoUpdate;
            this.$17 = this.$15.getSource();
            this.$32 = e.gamesVideoClipButtonEnabled;
            this.$33 = !!e.gamesVideoCreatorClippingGK && !l.has(this.$17);
            this.$34 = e.gamesDefaultClipLengthInSec;
            this.$7 = e.annotatedMomentsOfInterest || {};
            this.$57 = e.isEmbeddedPlayerRedesignEnabled;
            this.$120 = e.useLargerGradient || !1;
            c("VideoPlayerExperiments").persistentWNSEnabled || c("destroyOnUnload")(function() {
                var a;
                (a = f.$125) == null ? void 0 : a.unmount()
            });
            b = this.$15.getRootNode();
            c("EventListener").listen(this.$91, "focusin", function() {
                f.$27 = !0, f.scheduleRenderReactComponent()
            });
            c("EventListener").listen(this.$91, "focusout", function() {
                c("containsNode")(f.$91, c("getActiveElement")()) || (f.$27 = !1, f.scheduleRenderReactComponent())
            });
            c("EventListener").listen(b, "click", function(a) {
                if (f.$27 && a.detail) {
                    a = c("getActiveElement")();
                    a && a.blur()
                }
            });
            c("EventListener").listen(b, "mouseleave", function() {
                f.$77 = !1, f.scheduleRenderReactComponent()
            });
            c("EventListener").listen(b, "mouseenter", function() {
                f.$77 = !0, f.scheduleRenderReactComponent()
            });
            this.$15.registerOption("VideoControls", "acquireForceHideLock", function() {
                f.$28++;
                return {
                    release: function() {
                        f.$28--, f.scheduleRenderReactComponent()
                    }
                }
            });
            this.$15.registerOption("VideoControls", "hideOnFinish", function() {
                return f.$49
            }, function(a) {
                f.$49 = a
            });
            this.$15.registerOption("VideoControls", "hideOnPause", function() {
                return f.$42
            }, function(a) {
                f.$42 = a
            });
            this.$15.registerOption("VideoControls", "unhideOnHover", function() {
                return f.$105
            }, function(a) {
                f.$105 = a
            });
            this.$15.registerOption("VideoControls", "hidePlaybackControl", function() {
                return f.$43
            }, function(a) {
                f.$43 = a, f.scheduleRenderReactComponent()
            });
            this.$15.registerOption("VideoControls", "available", function() {
                return !0
            });
            this.$15.registerOption("VideoControls", "areControlsVisible", this.areControlsVisible.bind(this));
            ["mousemove", "mousedown", "keydown"].forEach(function(a) {
                c("EventListener").listen(f.$15.getRootNode(), a, c("throttle")(f.flashControls.bind(f), 200))
            });
            this.$113 = new(c("SubscriptionsHandler"))();
            this.scheduleRenderReactComponent();
            a = ["changeVolume", "loadedSubtitles", "captionsAvailabilityChanged", "muteVideo", "pausePlayback", "stateChange", "toggleFullscreen", "toggleSubtitles", "updateMetadata", "unmuteVideo", "qualityChange", "casting/receiverStateChange", "casting/supportStateChange", "casting/castingStateChange", "casting/playStateChange"];
            a.forEach(function(a) {
                return f.$113.addSubscriptions(f.$15.addListener(a, function() {
                    return f.scheduleRenderReactComponentWithVideoInfoUpdate()
                }))
            });
            this.$113.addSubscriptions(this.$15.addListener("pauseRequested", function(a) {
                f.$126(a)
            }), this.$15.addListener("playRequested", function(a) {
                f.$127(a)
            }), this.$15.addListener("beginPlayback", function() {
                return f.$128()
            }), this.$15.addListener("updateStatus", function(a) {
                if (f.$63) {
                    var b = f.$15.getSeekableRanges();
                    if (f.$64 && d("PlaybackSpeedExperiments").enableWwwPlaybackSpeedControl()) {
                        var c, e;
                        c = (c = f.$15.getCurrentTimePosition()) != null ? c : 0;
                        e = b != null ? (e = b.end(b.length() - 1)) != null ? e : 0 : 0;
                        c > 0 && e > 0 && c >= e && f.liveRewindToLive()
                    }
                    b && (f.$71 = d("LiveRewindUtils").getRelativePosition(a.position, b))
                }
                f.$84 = a.position;
                f.$21 && (f.$84 -= f.$21);
                f.scheduleRenderReactComponent()
            }), this.$15.addListener("casting/updateStatus", function(a) {
                if (f.$63) {
                    var b = f.$15.getSeekableRanges();
                    b && (f.$71 = d("LiveRewindUtils").getRelativePosition(a.position, b))
                }
                f.$84 = a.position;
                f.scheduleRenderReactComponent()
            }), this.$15.addListener("seekRangeChanged", function(a) {
                if (f.$63) {
                    a = f.$15.getSeekableRanges();
                    a && (f.$83 = d("LiveRewindUtils").getTotalDuration(a))
                }
            }), this.$15.addListener("updateBuffer", function(a) {
                f.$10 = a.duration + a.offset, f.scheduleRenderReactComponent()
            }), this.$15.addListener("optionsChange", function(a) {
                f.$129()
            }), this.$15.addListener("resumeAutoplay", function(a) {
                f.$130(), f.scheduleRenderReactComponentWithVideoInfoUpdate()
            }), this.$15.addListener("turnOffAutoplay", function(a) {
                f.$54 = !1
            }), this.$15.addListener("LivePlayer/isRewoundChanged", function(a) {
                a = f.$15.getOption("LivePlayer", "isRewound");
                f.$64 !== a && (f.$64 = a, f.scheduleRenderReactComponent())
            }), this.$15.addListener("blockAudio", function(a) {
                a || (f.$53 = !0)
            }), this.$15.addListener("unblockAudio", function(a) {
                a || (f.$53 = !1)
            }));
            this.$102 && this.$113.addSubscriptions(this.$15.addListener("VideoWithStallRecovery/bufferingStateOn", function() {
                f.$37 || f.$131(n)
            }), this.$15.addListener("VideoWithStallRecovery/bufferingStateOff", function() {
                f.$11 = !1
            }));
            this.$113.addSubscriptions(this.$15.addListener("finishPlayback", function() {
                f.scheduleRenderReactComponent(!0)
            }));
            this.$129()
        }
        var b = a.prototype;
        b.$132 = function() {
            this.$95 = this.$15.getOption("VideoScrubberPreviewComponent", "scrubberPreviewSprites"), this.$36 = this.$15.getOption("VideoScrubberPreviewComponent", "hasPreviewThumbnails"), this.$86 = this.$15.getOption("VideoScrubberPreviewComponent", "previewThumbnailInformation")
        };
        b.$130 = function() {
            this.$54 = this.$15.getOption("FeedAutoplay", "isAutoplaying")
        };
        b.$129 = function() {
            this.$130(), this.$132()
        };
        b.$126 = function(a) {
            var b = this;
            this.scheduleRenderReactComponentWithVideoInfoUpdate();
            this.$61 && this.$63 && a === "user_initiated" && (!this.$64 && this.$76 === null && (this.$76 = window.setTimeout(function() {
                b.$76 = null, d("LiveVideoPlayerActions").setIsRewound(b.$15, !0)
            }, m)))
        };
        b.$127 = function(a) {
            this.$61 && this.$63 && a === "user_initiated" && this.$76 !== null && (window.clearTimeout(this.$76), this.$76 = null)
        };
        b.$128 = function() {
            this.flashControls(), this.$133(), this.$66 = !0, this.scheduleRenderReactComponentWithVideoInfoUpdate()
        };
        b.$131 = function(a) {
            var b = this;
            a = c("XBasicFBNuxGenShouldShowController").getURIBuilder().setInt("nux_id", a).getURI();
            new(c("AsyncRequest"))().setURI(a).setMethod("GET").setReadOnly(!0).setHandler(function(a) {
                a = a.getPayload();
                b.$11 = a.should_show_nux
            }).send()
        };
        b.updateConfig_DEPRECATED = function(a, b) {
            this.$81 = a.permalinkURL || null, this.$3 = a.showButtons ? a.showButtons.casting : !1, this.$61 = !!a.isLive, this.$1 = a.adBreaks || null, this.$120 = a.useLargerGradient || !1, this.$106 = a.showPlaybackRateControl || !1, this.scheduleRenderReactComponent()
        };
        b.updateAdBreaksConfig = function(a) {
            this.$50 = a.insertedAdBreaks, this.$51 = a.isAdBreakDisabled, this.$52 = a.isAdBreakInsertionWithoutGapRule, this.$29 = !a.isPreviewingAdBreak, this.scheduleRenderReactComponent()
        };
        b.updateStarsCueConfig = function(a) {
            this.$104 = a.selectedStarsCueTimestamp, this.scheduleRenderReactComponent()
        };
        b.updateTwoRowsConfig = function(a) {
            this.$121 = a.useTwoRows, this.$55 = a.isCommentAttachment, this.scheduleRenderReactComponent()
        };
        b.flashControls = function() {
            var a = this;
            this.$89 || (this.$89 = !0, this.scheduleRenderReactComponent());
            window.clearTimeout(this.$26);
            this.$26 = window.setTimeout(function() {
                a.$26 = null, a.$89 = !1, a.scheduleRenderReactComponent()
            }, 3e3)
        };
        b.$133 = function() {
            var a = this;
            this.$30 && (window.clearTimeout(this.$31), this.$31 = window.setTimeout(function() {
                a.$31 = null, a.$30 = !1, a.scheduleRenderReactComponent()
            }, p))
        };
        b.areControlsVisible = function() {
            var a = this;
            if (!this.areControlsEnabled()) return !1;
            if (this.$29 || this.$11 || this.$67 || this.$68 || this.$30) return !0;
            if (this.$15.isState("playing")) {
                if (this.$98) {
                    this.$13 || (this.$13 = window.setTimeout(function() {
                        a.$98 = !1
                    }, 5e3));
                    return !0
                } else if (this.$48 && this.$54) return !1;
                return this.$27 || this.$77 && this.$89
            } else if (this.$15.isState("finished")) {
                var b = this.$15.getSource() === "tahoe";
                return this.$15.isFullscreen() || b || !this.$49
            } else if (this.$15.isState("paused")) return this.$15.isFullscreen() || !this.$42 || this.$105 && (this.$27 || this.$77 && this.$89);
            return !1
        };
        b.areControlsEnabled = function() {
            var a = this.$15.getSource() === "tahoe";
            return this.$28 > 0 || this.$15.isState("loading") || this.$15.isState("fallback") || this.$15.getOption("SottoPaywall", "enable") || this.$15.isState("finished") && this.$49 && !this.$15.isFullscreen() && !a ? !1 : !0
        };
        b.scheduleRenderReactComponentWithVideoInfoUpdate = function() {
            this.$79 = !0, this.scheduleRenderReactComponent(!0)
        };
        b.shouldRenderComponent = function() {
            if (this.$15.isState("loading") || this.$15.isState("fallback")) return !1;
            if (this.areControlsVisible()) {
                this.$40 = !1;
                return !0
            }
            if (!this.$40) {
                this.$40 = !0;
                return !0
            }
            return !1
        };
        b.scheduleRenderReactComponent = function(a) {
            a === void 0 && (a = !1);
            if (!a && !this.shouldRenderComponent()) return;
            c("cancelAnimationFrame")(this.$90);
            this.$90 = c("requestAnimationFrame")(this.renderReactComponent.bind(this))
        };
        b.renderReactComponent = function() {
            var a = this;
            if (c("VideoPlayerExperiments").delayVideoControlRenderForApiReady && this.$15.getState() === "loading" && !this.$92) {
                this.$92 = !0;
                this.$15.runOnApiReady(function() {
                    a.scheduleRenderReactComponent()
                });
                return
            }
            this.$79 && this.$135();
            this.$56 = !1;
            if (this.$78)
                for (var b = this.$78, f = Array.isArray(b), g = 0, b = f ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var h;
                    if (f) {
                        if (g >= b.length) break;
                        h = b[g++]
                    } else {
                        g = b.next();
                        if (g.done) break;
                        h = g.value
                    }
                    h = h;
                    this.$84 >= h.mute_start_time_in_sec && this.$84 <= h.mute_end_time_in_sec && (this.$56 = !0)
                }
            h = this.areControlsVisible();
            this.$124 !== h && (this.$15.emit("VideoControls/visibilityUpdate", {
                areControlsVisible: h
            }), h ? this.$23.reserve() : this.$23.release(), this.$15.isState("destroyed") || d("CSS").conditionClass(this.$15.getRootNode(), "_302m", !h));
            this.$124 = h;
            g = this.$15.getAvailableVideoQualities();
            f = this.$15.getPreferredVideoQuality();
            b = this.$15.getSelectedVideoQuality();
            var i = this.$15.canAutoSelectVideoQuality(),
                j = this.$15.getStreamingFormat(),
                m = this.$69;
            this.$69 = c("VideoPlayerExperiments").slidingWNSv3 && this.$39 && c("VideoWatchAndScrollController").isSlidingEnabled(this.$15);
            m !== this.$69 && this.$15.logEvent(this.$69 ? "watch_and_scroll_icon_highlighted" : "watch_and_scroll_icon_unhighlighted");
            m = this.$15.getSource() === "tahoe";
            var n = this.$15.getSource() === "watch_scroll",
                o = this.$15.isFBIsLiveTemplated() || this.$15.isFBWasLive();
            o = this.$63 && o && (this.$15.isFBWasLive() || this.$15.getState() !== "finished");
            var p = k.jsx(c("DeferredComponent.react"), {
                deferredPlaceholder: k.jsx("span", {}),
                deferredComponent: function(a) {
                    return e(["VideoControls.react"], a)
                },
                allowCasting: this.$3,
                allowFullscreen: this.$4,
                allowAudioButton: this.$5,
                annotatedMomentsOfInterest: this.$7,
                areCaptionsActive: this.$8,
                areCaptionsAutogenerated: this.$9,
                areHLSActive: this.$6,
                bufferedPosition: this.$10,
                finishedPlaying: this.$15.isState("finished"),
                hasFoundReceiver: this.hasFoundReceiver(),
                hasHD: this.$35,
                hasCaptions: this.$38,
                hasWatchAndScroll: this.$39 && !this.getIsInChannel(),
                hidden: !this.areControlsEnabled(),
                hideGradient: this.$41,
                isAudioBlocked: this.$53 || this.$56 && c("gkx")("797757"),
                isCasting: this.isCasting(),
                isCastingSupported: this.isCastingSupported(),
                isCommentAttachment: this.$55,
                isEmbedded: l.has(this.$17),
                isEmbeddedPlayerRedesignEnabled: this.$57,
                isFullscreen: this.$58,
                isHD: this.$59,
                isInline: this.$60,
                isInTahoe: m,
                isInWatchAndScroll: n,
                isLive: this.$61,
                isLiveRewindEnabled: o,
                isLiveRewound: this.$64,
                isFBWasLive: this.$15.isFBWasLive(),
                isSphericalVideo: this.$70,
                isMuted: this.$65,
                isPlaying: this.$66,
                isSidePaneOpen: this.getIsInChannel() && !!d("Parent").bySelector(this.$91, "._57bj"),
                isSlidingWNSEligible: this.$69,
                interestLevels: null,
                liveRelativePlaybackPosition: this.$71,
                drawer: this.$23,
                onActionsClick: function() {
                    a.$68 = !a.$68
                },
                onAnnotatedMomentOfInterestSelect: function(b) {
                    a.$15.seek(b)
                },
                onEnterWatchAndScroll: this.$25,
                onEnterTahoe: this.$24,
                doesFullscreenEnterTahoe: this.$22,
                onLiveRewindToBeginning: this.$74,
                onLiveRewindSeekBack: this.$72,
                onLiveRewindSeekForward: this.$73,
                onLiveRewindToLive: this.$75,
                onWNSNUXClose: this.$134,
                onClipVideo: this.$14,
                onPause: this.$80,
                onPlay: this.$82,
                onScrubBegin: this.$93,
                onScrubEnd: this.$94,
                onSetVideoPlaybackRate: this.$97,
                onSettingsClick: function() {
                    a.$67 = !a.$67
                },
                onSidePaneToggle: function() {
                    c("Arbiter").inform("VideoChannelView/sidePaneToggle", {})
                },
                onStartCast: this.$111,
                onStopCast: this.$112,
                onToggleFullscreen: this.$114,
                onToggleHD: this.$115,
                onToggleHLS: this.$116,
                onToggleMuted: this.$117,
                onToggleCaptions: this.$118,
                onVolumeChange: this.$12,
                permalinkURL: this.$81,
                showInlineCopyLinkOption: this.$99,
                showInlineVideoReportOption: this.$100,
                showPermalinkButton: this.$101,
                playbackDuration: this.$83,
                playbackPosition: this.$84,
                transparent: !h,
                hidePlaybackControl: this.$43,
                isWatchIconEligible: this.$44,
                hidePlaybackScrubber: this.$45,
                showPlaybackRateControl: this.$106,
                showPlayButtonForLive: this.$107,
                showVideoSliderWarningTooltip: this.$110,
                hideRemainingTime: this.$46,
                hideSettings: this.$47,
                useTwoRows: this.$121,
                volume: this.$123,
                scrubberPreviewSprites: this.$95,
                hasScrubberPreview: this.$36 && !n,
                previewThumbnailInformation: this.$86,
                availableQualities: g,
                selectedQuality: b,
                preferredQuality: f,
                canAutoSelectVideoQuality: i,
                onSelectQuality: this.$96,
                showQualitySelector: this.$108,
                qualitySelectorMinStreams: this.$88,
                streamingFormat: j,
                showSpatialAudioNUX: this.$109,
                onPointOfInterestSelect: this.$85.onPointOfInterestSelect,
                currentPointOfInterest: this.$85.currentPointOfInterest,
                pointsOfInterest: this.$85.pointsOfInterest,
                showPointOfInterestTimestamps: this.$85.showPointOfInterestTimestamps,
                displayElapsedTime: this.$18,
                displayMilliseconds: this.$19,
                adBreaks: this.$1,
                pollTimestamps: this.$87.filter(function(b) {
                    return b <= a.$83
                }),
                vpcID: this.$15.getVideoPlayerID(),
                adBreaksDisableReasons: this.$2,
                showSidePaneToggle: !1,
                showWNSNUX: this.$11 && this.areControlsEnabled() && this.$102,
                insertedAdBreaks: this.$50,
                isAdBreakDisabled: this.$51,
                isAdBreakInsertionWithoutGapRule: this.$52,
                showEligibleStarsCueTimeSegments: this.$103,
                selectedStarsCueTimestamp: this.$104,
                useDarkTheme: this.$119,
                videoID: this.$15.getVideoID(),
                videoClipInfo: this.$122 ? this.$122 : void 0,
                gamesVideoClipButtonEnabled: this.$32,
                gamesVideoCreatorClipping: this.$33,
                gamesDefaultClipLengthInSec: this.$34,
                useLargerGradient: this.$120
            });
            d("ReactDOMComet").flushSync(function() {
                var b;
                (b = a.$125) == null ? void 0 : b.render(p)
            });
            this.$11 && this.areControlsEnabled() && this.$102 && (this.$37 = !0)
        };
        b.$135 = function() {
            var a = this.$15.getVideoInfo_DEPRECATED();
            if (a) {
                this.$8 = this.$15.areSubtitlesActive();
                this.$9 = this.$15.areSubtitlesAutogenerated();
                this.$38 = this.$15.hasSubtitles();
                this.$35 = a.hasHD;
                this.$59 = a.isHD;
                this.$65 = a.isMuted;
                this.$66 = a.isPlaying || this.isCastPlaying();
                if (this.$63) {
                    var b = this.$15.getSeekableRanges();
                    b && (this.$83 = d("LiveRewindUtils").getTotalDuration(b))
                } else this.$20 != null ? this.$83 = Math.min(a.playbackDuration, this.$20) : this.$83 = a.playbackDuration;
                this.$123 = a.volume;
                b = this.$15.getOption("CommercialBreakVideoAdOverlay", "videoController");
                b ? this.$58 = b.isFullscreen() : this.$58 = this.$15.isFullscreen();
                b = this.$15.getPlayerOrigin();
                switch (this.$15.getSource()) {
                    case "inline":
                    case "discover":
                    case "continue_watching_recommendation":
                    case "topic_live":
                    case "entry_point":
                        this.$60 = !0;
                        break;
                    case "permalink":
                        this.$60 = b === "video_home";
                        break;
                    case "games_video_home_hero":
                        this.$60 = b === "games_video_hub";
                        break;
                    default:
                        this.$60 = !1;
                        break
                }
                this.$61 = a.isLiveStream;
                this.$6 = a.areHLSActive;
                this.$79 = !1;
                this.$22 = this.$15.listeners("enterTahoe").length !== 0
            }
        };
        b.toggleHD = function() {
            this.$15.toggleHD()
        };
        b.setPreferredVideoQuality = function(a) {
            a ? this.$15.setPreferredVideoQuality(a) : this.$15.unsetPreferredVideoQuality()
        };
        b.toggleHLS = function() {
            this.$15.switchToStreamType("hls")
        };
        b.enterWatchAndScroll = function() {
            c("shouldWNSRenderToRHC")() ? this.$15.emit("crossfadeWatchAndScroll") : this.$15.emit("enterWatchAndScroll")
        };
        b.enterTahoe = function() {
            var a = this;
            this.$15.getSource() === "watch_scroll" ? (this.$15.logEvent("watch_and_scroll_channel_entered"), c("Bootloader").loadModules(["TahoeController", "URI"], function(b, d) {
                var e = new d(a.$15.getVideoURL());
                d = babelHelpers["extends"]({}, d.getRequestURI().getQueryData(), {
                    ref: "tahoe"
                });
                c("VideoWatchAndScrollController").onEnterTahoe();
                b.openFromVideoPlayer(a.$15, e.setQueryData(d), a.$15.getVideoChannelID(), "wns")
            }, "VideoControls")) : this.$15.emit("enterTahoe")
        };
        b.scrubBegin = function() {
            this.isCasting() || this.$15.pause("seek_initiated")
        };
        b.scrubEnd = function(a) {
            if (this.$63) {
                var b = this.$15.getSeekableRanges();
                if (b) {
                    var c = this.$71;
                    this.$71 = a;
                    a = d("LiveRewindUtils").getAbsolutePosition(a, b);
                    b = d("LiveRewindUtils").getLiveHeadTimestamp(b);
                    b = b - a < 1;
                    d("LiveVideoPlayerActions").setIsRewound(this.$15, !b);
                    d("LiveRewindUtils").logLiveRewindEvent("scrubber", this.$15, c, null, null, a)
                }
            }
            this.$21 && (a += this.$21);
            this.$15.seek(a, "user_initiated");
            this.$84 = a;
            b = this.$66 || this.$15.isState("finished") && !this.$49;
            !this.isCasting() && b && this.$15.play("seek_initiated")
        };
        b.toggleMuted = function() {
            this.$15.isMuted() ? (c("logVideosClickTracking")(this.$15.getVideoNode()), this.$15.unmute()) : this.$15.mute()
        };
        b.toggleFullscreen = function() {
            this.$15.isFullscreen() || c("logVideosClickTracking")(this.$15.getVideoNode()), this.$15.toggleFullscreen()
        };
        b.toggleCaptions = function() {
            this.$15.toggleSubtitles(), this.scheduleRenderReactComponent()
        };
        b.changeVolume = function(a) {
            this.$15.setVolume(a)
        };
        b.liveRewindToBeginning = function() {
            d("LiveRewindUtils").goToBeginning(this.$15)
        };
        b.liveRewindSeekBack = function() {
            d("LiveRewindUtils").seekBack(this.$15)
        };
        b.liveRewindSeekForward = function() {
            d("LiveRewindUtils").seekForward(this.$15)
        };
        b.liveRewindToLive = function() {
            d("LiveRewindUtils").goToLive(this.$15)
        };
        b.play = function() {
            c("logVideosClickTracking")(this.$15.getVideoNode()), this.isCasting() ? this.$15.setOption("casting", "isPlaying", !0) : this.$15.play("user_initiated"), this.$61 && this.$63 && d("LiveRewindUtils").logLiveRewindEvent("play", this.$15, this.$71, null, this.$71, null)
        };
        b.pause = function() {
            this.isCasting() ? this.$15.setOption("casting", "isPlaying", !1) : this.$15.pause("user_initiated"), this.$61 && this.$63 && (d("LiveVideoPlayerActions").setIsRewound(this.$15, !0), d("LiveRewindUtils").logLiveRewindEvent("pause", this.$15, this.$71, null, this.$71, null))
        };
        b.setVideoPlaybackRate = function(a) {
            this.$15.setPlaybackRate(a)
        };
        b.startCasting = function() {
            this.$15.setOption("casting", "isCasting", !0)
        };
        b.stopCasting = function() {
            this.$15.setOption("casting", "isCasting", !1)
        };
        b.isCastPlaying = function() {
            return this.$15.getOption("casting", "isPlaying")
        };
        b.hasFoundReceiver = function() {
            return this.$15.getOption("casting", "hasFoundReceiver")
        };
        b.isCasting = function() {
            return this.$15.getOption("casting", "isCasting")
        };
        b.isCastingSupported = function() {
            return this.$15.getOption("casting", "isSupported")
        };
        b.updatePointsOfInterestConfig = function(a) {
            Object.assign(this.$85, a), this.scheduleRenderReactComponent()
        };
        b.updateDisplayElapsedTime = function(a) {
            this.$18 = a, this.scheduleRenderReactComponent()
        };
        b.updateDisplayTimeRangeConfig = function(a) {
            this.$20 = a.displayDurationLimit, this.$21 = a.displayTimeOffset, this.scheduleRenderReactComponentWithVideoInfoUpdate()
        };
        b.getIsInChannel = function() {
            return this.$15.getIsInChannel()
        };
        b.$136 = function() {
            var a = [this.$13, this.$26, this.$31, this.$76];
            a.forEach(function(a) {
                return window.clearTimeout(a)
            });
            this.$13 = null;
            this.$26 = null;
            this.$31 = null;
            this.$76 = null
        };
        b.unregister = function() {
            c("cancelAnimationFrame")(this.$90), this.$113.release(), this.$16.current = null, this.$136()
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("AgnosticEmbeddedVideoApiComponent", ["EventEmitter"], (function(a, b, c, d, e, f, g) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c) {
            var d;
            d = a.call(this) || this;
            d.$AgnosticEmbeddedVideoApiComponent1 = b;
            c("Connect.Unsafe.play", function() {
                d.emit("play")
            });
            c("Connect.Unsafe.pause", function() {
                d.emit("pause")
            });
            c("Connect.Unsafe.seek", function(a, b) {
                d.emit("seek", a, b)
            });
            c("Connect.Unsafe.mute", function() {
                d.emit("mute")
            });
            c("Connect.Unsafe.unmute", function() {
                d.emit("unmute")
            });
            c("Connect.Unsafe.setVolume", function(a, b) {
                d.emit("setVolume", a, b)
            });
            return d
        }
        var c = b.prototype;
        c.notifyStartedPlaying = function() {
            this.$AgnosticEmbeddedVideoApiComponent2("startedPlaying")
        };
        c.notifyFinishedPlaying = function() {
            this.$AgnosticEmbeddedVideoApiComponent2("finishedPlaying")
        };
        c.notifyPaused = function() {
            this.$AgnosticEmbeddedVideoApiComponent2("paused")
        };
        c.notifyStartedBuffering = function() {
            this.$AgnosticEmbeddedVideoApiComponent2("startedBuffering")
        };
        c.notifyFinishedBuffering = function() {
            this.$AgnosticEmbeddedVideoApiComponent2("finishedBuffering")
        };
        c.notifyError = function() {
            this.$AgnosticEmbeddedVideoApiComponent2("error")
        };
        c.notifyStateUpdate = function(a) {
            this.$AgnosticEmbeddedVideoApiComponent1({
                type: "cachedStateUpdateRequest",
                data: JSON.stringify(a)
            })
        };
        c.notifyVideoAPIReady = function(a) {
            this.$AgnosticEmbeddedVideoApiComponent1({
                type: "onVideoAPIReady",
                data: JSON.stringify(a)
            })
        };
        c.$AgnosticEmbeddedVideoApiComponent2 = function(a) {
            this.$AgnosticEmbeddedVideoApiComponent1({
                type: "stateChange",
                state: a
            })
        };
        return b
    }(c("EventEmitter"));
    g["default"] = a
}), 98);
__d("WWWEmbeddedVideoAPIComponent", ["AgnosticEmbeddedVideoApiComponent", "Arbiter", "UnverifiedXD"], (function(a, b, c, d, e, f, g) {
    a = function(a) {
        var b = this;
        this.$1 = a;
        this.$2 = new(c("AgnosticEmbeddedVideoApiComponent"))(c("UnverifiedXD").send.bind(c("UnverifiedXD")), c("Arbiter").subscribe.bind(c("Arbiter")));
        this.$2.addListener("play", function() {
            b.$1.play("embedded_video_api_initiated")
        });
        this.$2.addListener("pause", function() {
            b.$1.pause("embedded_video_api_initiated")
        });
        this.$2.addListener("seek", function(a, c) {
            b.$1.seek(c.target)
        });
        this.$2.addListener("mute", function() {
            b.$1.mute()
        });
        this.$2.addListener("unmute", function() {
            b.$1.unmute()
        });
        this.$2.addListener("setVolume", function(a, c) {
            b.$1.setVolume(c.volume)
        });
        this.$1.addListener("stateChange", function() {
            if (b.$1.isState("ready")) {
                var a = {
                    isMuted: b.$1.isMuted(),
                    volume: b.$1.getVolume(),
                    timePosition: b.$1.getCurrentTimePosition(),
                    duration: b.$1.getPlaybackDuration()
                };
                b.$2.notifyVideoAPIReady(a)
            } else b.$1.isState("playing") ? b.$2.notifyStartedPlaying() : b.$1.isState("paused") ? b.$2.notifyPaused() : b.$1.isState("finished") && b.$2.notifyFinishedPlaying()
        });
        this.$1.addListener("updateStatus", function(a) {
            if (a.position !== void 0) {
                a = {
                    timePosition: a.position
                };
                b.$2.notifyStateUpdate(a)
            }
        });
        this.$1.addListener("buffering", function() {
            b.$2.notifyStartedBuffering()
        });
        this.$1.addListener("buffered", function() {
            b.$2.notifyFinishedBuffering()
        });
        this.$1.addListener("error", function() {
            b.$2.notifyError()
        });
        this.$1.addListener("updateMetadata", function(a) {
            a = {
                duration: b.$1.getPlaybackDuration()
            };
            b.$2.notifyStateUpdate(a)
        });
        this.$1.addListener("muteVideo", function() {
            var a = {
                isMuted: !0
            };
            b.$2.notifyStateUpdate(a)
        });
        this.$1.addListener("unmuteVideo", function() {
            var a = {
                isMuted: !1
            };
            b.$2.notifyStateUpdate(a)
        });
        this.$1.addListener("changeVolume", function(a) {
            a = {
                volume: a.volume,
                isMuted: a.volume === 0
            };
            b.$2.notifyStateUpdate(a)
        });
        if (!this.$1.isState("loading") && !this.$1.isState("fallback")) {
            a = {
                isMuted: this.$1.isMuted(),
                volume: this.$1.getVolume(),
                timePosition: this.$1.getCurrentTimePosition(),
                duration: this.$1.getPlaybackDuration()
            };
            this.$2.notifyVideoAPIReady(a)
        }
    };
    g["default"] = a
}), 98);
__d("SphericalVideoFallback", ["cx", "CSS"], (function(a, b, c, d, e, f, g, h) {
    function a(a, b) {
        var c = b.fallbackUriList,
            e = b.fallbackType,
            f = function() {
                a.emit("VideoPlayerFallbackEvents/enter");
                var b = a.getLastError();
                if (b && b.error !== "SPHERICAL_SETUP_FAILED" && b.error !== "SPHERICAL_RENDER_ERROR") return;
                var f = a.addListener("stateChange", function() {
                    a.isState("playing") && (a.logEvent("spherical_fallback_entered", {
                        spherical_fallback_type: e
                    }), f.remove())
                });
                a.setFallbackSources(c);
                d("CSS").removeClass(a.getRootNode(), "_3-n5");
                a.reset();
                a.emit("VideoPlayerFallbackEvents/recover")
            };
        if (a.isState("fallback")) f();
        else var g = a.addListener("stateChange", function() {
            a.isState("fallback") && (f(), g.remove())
        })
    }
    g.setup = a
}), 98);
__d("VideoErrorOverlay", ["SphericalVideoFallback"], (function(a, b, c, d, e, f, g) {
    function h(a, b) {
        "textContent" in a && (a.textContent = b), a.innerText = b
    }

    function i(a) {
        if ("textContent" in a) return a.textContent;
        return !a.innerText ? "" : a.innerText
    }
    a = function() {
        function a(a, b, c, e, f) {
            var g = this;
            this.$1 = b;
            this.$2 = c;
            this.$3 = e;
            a.registerOption("VideoErrorOverlay", "title", function() {
                return g.getTitle()
            }, function(a) {
                return g.setTitle(a)
            });
            a.registerOption("VideoErrorOverlay", "message", function() {
                return g.getMessage()
            }, function(a) {
                return g.setMessage(a)
            });
            a.registerOption("VideoErrorOverlay", "linkURL", function() {
                return g.getLinkURL()
            }, function(a) {
                return g.setLinkURL(a)
            });
            a.registerOption("VideoErrorOverlay", "linkTitle", function() {
                return g.getLinkTitle()
            }, function(a) {
                return g.setLinkTitle(a)
            });
            a.registerOption("VideoErrorOverlay", "available", function() {
                return !0
            });
            f && d("SphericalVideoFallback").setup(a, f)
        }
        var b = a.prototype;
        b.getTitle = function() {
            return this.$1 ? i(this.$1) : ""
        };
        b.setTitle = function(a) {
            this.$1 && h(this.$1, a)
        };
        b.getMessage = function() {
            return i(this.$2)
        };
        b.setMessage = function(a) {
            h(this.$2, a)
        };
        b.getLinkURL = function() {
            return this.$3.href
        };
        b.setLinkURL = function(a) {
            this.$3.href = a
        };
        b.getLinkTitle = function() {
            return i(this.$3)
        };
        b.setLinkTitle = function(a) {
            h(this.$3, a)
        };
        return a
    }();
    g["default"] = a
}), 98);