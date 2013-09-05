$(document).bind("pageinit", function () {
    if (window.localStorage.getItem("usedWBADtag") != "USED") {
        //用户没有用过本插件使用默认配置
        init();
    }
    function init(resource) {
        window.localStorage.clear();
        if (resource == "btnDefault") {//不清空usedWBADtag
            window.localStorage["usedWBADtag"] = "USED";//记录下用户已经使用过
        };
        window.localStorage["ads"] = "ads";
        window.localStorage["ads_"] = "ads_";
        window.localStorage["allinone"] = "allinone";
        window.localStorage["app"] = "app";
        window.localStorage["spread"] = "spread";
        window.localStorage["awardRetweet"] = "awardRetweet";
        window.localStorage["checkin"] = "checkin";
        window.localStorage["colorvalue"] = "#ff0097";
        window.localStorage["exSelf"] = "exSelf";
        window.localStorage["exwbadawardRetweet"] = "exwbadawardRetweet";
        window.localStorage["feed_list_recommend"] = "feed_list_recommend";
        window.localStorage["groupon"] = "groupon";
        window.localStorage["help"] = "help";
        window.localStorage["hotmblog"] = "hotmblog";
        window.localStorage["interest"] = "interest";
        window.localStorage["weiborecom"] = "weiborecom";
        window.localStorage["invalidWB"] = "invalidWB";
        window.localStorage["invite"] = "invite";
        window.localStorage["keyword"] = "$星座,星座,白羊座,金牛座,双子座,巨蟹,狮子座,处女座,天秤,天蝎,射手座,摩羯,水瓶座,双鱼座,$SB广告,姐妹们,鸡皮肤,$广告大主臭不要脸,上海煜宸,梦享家,欧尚坊,shopbop,大众点评客户端,谷卡名车广场,im8官网微博,折企业网站微博,上海麦丹,竹叶青茶,八客网,嫁伊,八阵电商,返利网-海淘返利,麦开网,沪江网外语学习,橡果国际旗舰店,返利网粉丝论坛,591结婚网,返利网淘宝返利,柏菲娜,捷贝网络,史泰博中国,优娅化妆品销售部,爱上淘创意,";
        window.localStorage["exkeyword"] = "流星雨";
        window.localStorage["medal"] = "medal";
        window.localStorage["micromsg"] = "micromsg";
        window.localStorage["mood"] = "mood";
        window.localStorage["moreList"] = "moreList";
        window.localStorage["music"] = "music";
        window.localStorage["oldUser"] = "oldUser";
        window.localStorage["photo"] = "photo";
        window.localStorage["photostyle"] = "photo_default";
        window.localStorage["pl_profile_giftBox"] = "pl_profile_giftBox";
        window.localStorage["promotionalAD"] = "promotionalAD";
        window.localStorage["rebate"] = "rebate";
        window.localStorage["recomendedkan"] = "recomendedkan";
        window.localStorage["recommblog"] = "recommblog";
        window.localStorage["recommendedFollowing"] = "recommendedFollowing";
        window.localStorage["recomperson"] = "recomperson";
        window.localStorage["showOrDelWBADInfo"] = "deleteWBAD";
        window.localStorage["noforward"] = "noforward";
        window.localStorage["topic"] = "topic";
        window.localStorage["trustPagelet_profile_openApplist"] = "trustPagelet_profile_openApplist";
        window.localStorage["weiba"] = "weiba";
        window.localStorage["zone"] = "zone";
		
		//我的微博（个人页面）
        window.localStorage["Pl_Core_RightUserGrid__7"] = "Pl_Core_RightUserGrid__7";//关注/粉丝、微关系
        window.localStorage["Pl_Core_RightPicMulti__8"] = "Pl_Core_RightPicMulti__8";//微相册
        window.localStorage["Pl_Core_RightTextSingle__12"] = "Pl_Core_RightTextSingle__12";//话题
        window.localStorage["Pl_Core_RightPicText__13"] = "Pl_Core_RightPicText__13";//热门微博
        window.localStorage["Pl_Official_RightGrow__15"] = "Pl_Official_RightGrow__15";//勋章信息
        window.localStorage["Pl_Core_RightRank__21"] = "Pl_Core_RightRank__21";//可能感兴趣的地方
        window.localStorage["Pl_Core_RightRank__24"] = "Pl_Core_RightRank__24";//最赞榜（音乐标签）
        window.localStorage["Pl_Core_RightRank__40"] = "Pl_Core_RightRank__40";//正在热映（电影标签）
		
		//XXXX的微博（微博详细内容页）
        window.localStorage["Pl_Core_LeftPicText__5"] = "Pl_Core_LeftPicText__5";//赞过
        window.localStorage["Pl_Core_RightUserGrid__8"] = "Pl_Core_RightUserGrid__8";//微关系（我们之间的共同关系）
        window.localStorage["Pl_Core_RightPicMulti__9"] = "Pl_Core_RightPicMulti__9";//微相册
        window.localStorage["Pl_Core_RightTextSingle__11"] = "Pl_Core_RightTextSingle__11";//话题
        window.localStorage["Pl_Core_RightPicText__12"] = "Pl_Core_RightPicText__12";//热门微博
        window.localStorage["Pl_Core_RightRank__20"] = "Pl_Core_RightRank__20";//可能感兴趣的地方
        window.localStorage["Pl_Core_RightUserList__21"] = "Pl_Core_RightUserList__21";//可能感兴趣的用户
        window.localStorage["Pl_Core_RightRank__23"] = "Pl_Core_RightRank__23";//最赞榜（音乐标签）
        window.localStorage["Pl_Core_RightRank__27"] = "Pl_Core_RightRank__27";//分类榜单（读书标签）
        window.localStorage["Pl_Third_Inline__29"] = "Pl_Third_Inline__29";//相关推荐
        window.localStorage["Pl_Third_Inline__30"] = "Pl_Third_Inline__30";//相关推荐(推荐给你更多更新更好的资讯)
        window.localStorage["Pl_Core_RightRank__36"] = "Pl_Core_RightRank__36";//最赞榜单（赞标签）
        window.localStorage["Pl_Core_RightRank__37"] = "Pl_Core_RightRank__37";//分类榜单/最赞榜(我的微博)
		
		//企业微博（蓝色大V微博详细内容页）
        window.localStorage["Pl_Core_RightUserGrid__14"] = "Pl_Core_RightUserGrid__14";//分类榜单/最赞榜(我的微博)
        window.localStorage["Pl_Core_RightTextMulti__15"] = "Pl_Core_RightTextMulti__15";//媒体标签
        window.localStorage["Pl_Core_RightTextMulti__16"] = "Pl_Core_RightTextMulti__16";//友情链接
        window.localStorage["Pl_Core_RightRank__17"] = "Pl_Core_RightRank__17";//预留广告位1
        window.localStorage["Pl_Core_RightPicText__18"] = "Pl_Core_RightPicText__18";//推荐文章
        window.localStorage["Pl_Core_RightPicMulti__19"] = "Pl_Core_RightPicMulti__19";//预留广告位3
        window.localStorage["Pl_Core_RightTextSingle__20"] = "Pl_Core_RightTextSingle__20";//话题(企业微博)
        window.localStorage["Pl_Core_UserGuide__21"] = "Pl_Core_UserGuide__21";//预留广告位4
        window.localStorage["pl_content_links"] = "pl_content_links";//友情链接（旧版）
        window.localStorage["pl_leftNav_profilePersonal"] = "pl_leftNav_profilePersonal";//头像区（旧版）
        window.localStorage["pl_leftNav_profileContent"] = "pl_leftNav_profileContent";//导航栏（旧版）
        window.localStorage["pl_content_contact"] = "pl_content_contact";//联系方式（旧版）
        window.localStorage["pl_common_relations"] = "pl_common_relations";//我们的微关系
        window.localStorage["widget_subscribe_pl_subscribe"] = "widget_subscribe_pl_subscribe";//VIP特权
        window.localStorage["pl_share_assistant"] = "pl_share_assistant";//助手板块/微客服
        window.localStorage["pl_content_leaders"] = "pl_content_leaders";//领导版块/创始人/推荐微博
        window.localStorage["pl_content_subbrands"] = "pl_content_subbrands";//部门版块/子部门
        window.localStorage["widget_myfans_pl_myfans"] = "widget_myfans_pl_myfans";//他的粉丝
        window.localStorage["pl_content_staffs"] = "pl_content_staffs";//员工版块/工作人员
        window.localStorage["pl_content_tags"] = "pl_content_tags";//自定义标签/企业标签
        window.localStorage["pl_common_feedback"] = "pl_common_feedback";//意见反馈/企业帮助
    }
    function loadProfile() {//遍历选定配置中已选定的项目
        $("input").attr("checked", false).checkboxradio("refresh");
        $("input").checkboxradio('enable').checkboxradio("refresh");
        $("textarea").val("");

        var colortag = 0, deletetag = 0, styletag = 0;
        for (var i = 0; i < window.localStorage.length; i++) {
            var key = window.localStorage.key(i);
            var value = window.localStorage.getItem(key);
            console.log("value=" + value);
            if (key == "Box_right") {
                if (value == "Box_right") {//勾选本项，其他项目失效
                    $("#mainWb,#myWb,#etprsWb,#xxxxWb,#oldver").find("input[type='checkbox']").checkboxradio('disable').checkboxradio("refresh");
                    $("#Box_right").checkboxradio('enable').attr("checked", true).checkboxradio("refresh");
                } else {
                    $("#mainWb,#myWb,#etprsWb,#xxxxWb,#oldver").find("input[type='checkbox']").checkboxradio('enable').checkboxradio("refresh");
                    $("#Box_right").checkboxradio('disable').attr("checked", false).checkboxradio("refresh");
                }
                continue;
            }
            if (key == "all__") {
                if (value == "all__") {//勾选本项，其他项目失效
                    $("#mainWb,#myWb,#etprsWb,#xxxxWb,#oldver").find("input[type='checkbox']").checkboxradio('disable').checkboxradio("refresh");
                    $("#all__").checkboxradio('enable').attr("checked", true).checkboxradio("refresh");
                } else {
                    $("#mainWb,#myWb,#etprsWb,#xxxxWb,#oldver").find("input[type='checkbox']").checkboxradio('enable').checkboxradio("refresh");
                    $("#all__").checkboxradio('disable').attr("checked", false).checkboxradio("refresh");
                }
                continue;
            }
            if (key == "keyword") {
                $("#keyword").val(value);
                continue;
            }
            if (key == "exkeyword") {
                $("#exkeyword").val(value);
                continue;
            }
            if (key == "showOrDelWBADInfo") {
                deletetag = 1;
                $("#infosett input[type='radio'][value='" + value + "']").attr("checked", true).checkboxradio("refresh");
                if (value == "showWBAD") {
                    $("#collsett input[type='radio']").checkboxradio('enable').checkboxradio("refresh");
                } else if (value == "deleteWBAD") {
                    $("#collsett input[type='radio']").checkboxradio('disable').checkboxradio("refresh");
                }
                continue;
            }
            if (key == "photostyle") {
                styletag = 1;
                $("#photo_style input[type='radio'][value='" + value + "']").attr("checked", true).checkboxradio("refresh");
                continue;
            }
            if (key == "colorvalue") {
                colortag = 1;
                $("#collsett input[type='radio'][value='" + value + "']").attr("checked", true).checkboxradio("refresh");
                continue;
            }
            $("#" + value).attr("checked", true).checkboxradio("refresh");
        }
        if (deletetag == 0) {//没有勾选，默认显示
            window.localStorage["showOrDelWBADInfo"] = "showWBAD";
            $("input[type='radio'][value='showWBAD']").attr("checked", true).checkboxradio("refresh");
        }
        if (colortag == 0) {//没有勾选，默认颜色
            window.localStorage["colorvalue"] = "#00aba9";
            $("input[type='radio'][value='#00aba9']").attr("checked", true).checkboxradio("refresh");
        }
        if (styletag == 0) {//没有勾选，默认颜色
            window.localStorage["photostyle"] = "photo_default";
            $("input[type='radio'][value='photo_default']").attr("checked", true).checkboxradio("refresh");
        }
    }
    loadProfile();
    $("input[type='checkbox']").bind("click", function (event, ui) {
        var id = $(this).attr("id");
        if ($(this).attr("checked") == "checked") {
            window.localStorage[id] = id;
            //alert("id=" + window.localStorage[id]);
        } else {
            window.localStorage.removeItem(id);
        }
        window.localStorage["usedWBADtag"] = "USED";//记录下用户已经使用过
    });
    $("#btnDefault").bind("click", function (event, ui) {
        init("btnDefault");
        loadProfile();
        history.back();
    });
    $("#Box_right").bind("click", function (event, ui) {
        if ($(this).attr("checked") == "checked") {//勾选本项，其他项目失效
            window.localStorage["Box_right"] = "Box_right";
            $("#mainWb,#myWb,#etprsWb,#xxxxWb,#oldver").find("input[type='checkbox']").checkboxradio('disable').checkboxradio("refresh");
            $("#Box_right").attr("checked", true).checkboxradio("refresh");
        } else if($("#all__").attr("checked") != "checked"){
            window.localStorage.removeItem("Box_right");
            $("#mainWb,#myWb,#etprsWb,#xxxxWb,#oldver").find("input[type='checkbox']").checkboxradio('enable').checkboxradio("refresh");
            $("#Box_right").attr("checked", false).checkboxradio("refresh");
        }
        $("#Box_right").checkboxradio('enable').checkboxradio("refresh");
        window.localStorage["usedWBADtag"] = "USED";//记录下用户已经使用过
    });
    $("#all__").bind("click", function (event, ui) {
        if ($(this).attr("checked") == "checked") {//勾选本项，其他项目失效
            window.localStorage["all__"] = "all__";
            $("#mainWb,#myWb,#etprsWb,#xxxxWb,#oldver").find("input[type='checkbox']").checkboxradio('disable').checkboxradio("refresh");
            $("#all__").attr("checked", true).checkboxradio("refresh");
        } else if($("#Box_right").attr("checked") != "checked") {
            window.localStorage.removeItem("all__");
            $("#mainWb,#myWb,#etprsWb,#xxxxWb,#oldver").find("input[type='checkbox']").checkboxradio('enable').checkboxradio("refresh");
            $("#all__").attr("checked", false).checkboxradio("refresh");
        }
        $("#all__").checkboxradio('enable').checkboxradio("refresh");
        window.localStorage["usedWBADtag"] = "USED";//记录下用户已经使用过
    });
    $("#photo_style input[type='radio']").bind("click", function (event, ui) {
        var stylevalue = $(this).attr("value");
        if ($(this).attr("checked") == "checked") {
            window.localStorage["photostyle"] = stylevalue;
        } else {
            window.localStorage.removeItem(stylevalue);
        }
        window.localStorage["usedWBADtag"] = "USED";//记录下用户已经使用过
    });
    $("#collsett input[type='radio']").bind("click", function (event, ui) {
        var colorvalue = $(this).attr("value");
        if ($(this).attr("checked") == "checked") {
            window.localStorage["colorvalue"] = colorvalue;
        }
        else {
            window.localStorage.removeItem(colorvalue);
        }
        window.localStorage["usedWBADtag"] = "USED";//记录下用户已经使用过
    });
    $("#infosett input[type='radio']").bind("click", function (event, ui) {
        var colorvalue = $(this).attr("value");
        if ($(this).attr("checked") == "checked") {
            window.localStorage["showOrDelWBADInfo"] = colorvalue;
        } else {
            window.localStorage.removeItem(colorvalue);
        }

        if (colorvalue == "showWBAD") {
            $("#collsett input[type='radio']").checkboxradio('enable').checkboxradio("refresh");
        } else if (colorvalue == "deleteWBAD") {
            $("#collsett input[type='radio']").checkboxradio('disable').checkboxradio("refresh");
        }
        window.localStorage["usedWBADtag"] = "USED";//记录下用户已经使用过
        //选中：$("input[type='checkbox']").attr("checked", true).checkboxradio("refresh");
        //不选：$("input[type='checkbox']").attr("checked", false).checkboxradio("refresh");
    });
    $("textarea").bind("blur", function (event, ui) {
        var id = $(this).attr("id");
        var val = $(this).val();
        window.localStorage[id] = val;
        window.localStorage["usedWBADtag"] = "USED";//记录下用户已经使用过
    });
});