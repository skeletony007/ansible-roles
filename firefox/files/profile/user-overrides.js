/*** [SECTION OVERRIDES]: USER OVERRIDES ***/
/** ARKENFOX PART
 * See <a href="https://github.com/arkenfox/user.js/wiki/3.1-Overrides"></a>.
 */

/* 0801: disable location bar using search ***/
user_pref("keyword.enabled", false);
///* 0802: disable location bar contextual suggestions ***/
//user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", true); // [FF95+]
///* 0803: disable live search suggestions ***/
//user_pref("browser.search.suggest.enabled", true);
//user_pref("browser.urlbar.suggest.searches", true);
/* 2022: disable all DRM content (EME: Encryption Media Extension) ***/
user_pref("media.eme.enabled", true);
/* 4504: enable RFP letterboxing [FF67+] ***/
user_pref("privacy.resistFingerprinting.letterboxing", false);
///* 5003: disable saving passwords ***/
//user_pref("signon.rememberSignons", false);
/* 5010: disable location bar suggestion types ***/
user_pref("browser.urlbar.suggest.history", false);
///* 5014: disable Windows jumplist [WINDOWS] ***/
//user_pref("browser.taskbar.lists.enabled", false);
///* 5018: limit events that can cause a pop-up ***/
//user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");

/** OTHER PREFERENCES PART
 * Using some code from
 * <li><a href="https://github.com/yokoffing/Betterfox"></a></li>
 * <li><a href="https://gitlab.com/librewolf-community/settings/-/blob/master/librewolf.cfg"></a></li>
 */

/* disable swipe gestures back, forward, etc. ***/
user_pref("widget.disable-swipe-tracker", true);
/* disable Reader mode
 * Firefox will not have to parse webpage for Reader when navigating ***/
user_pref("reader.parse-on-load.enabled", false);
/* disable firefox view tab */
user_pref("browser.tabs.firefox-view", false);
/* full screen video player ***/
user_pref("full-screen-api.macos-native-full-screen", true);
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.delay", -1);
user_pref("full-screen-api.warning.timeout", 0);
/* choose what theme Firefox follows by default
 * Dark (0), Light (1), System (2), or Browser (3) (default) ***/
user_pref("layout.css.prefers-color-scheme.content-override", 0);
user_pref("extensions.activeThemeID", "firefox-compact-dark@mozilla.org");

/* enable userChrome.css and userContent.css and browser toolbox***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("devtools.chrome.enabled", true);
user_pref("devtools.debugger.remote-enabled", true);
