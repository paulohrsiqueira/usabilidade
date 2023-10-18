// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const icon = flutter_sdk.src__widgets__icon;
  const framework = flutter_sdk.src__widgets__framework;
  const icon_data = flutter_sdk.src__widgets__icon_data;
  const text = flutter_sdk.src__widgets__text;
  const basic = flutter_sdk.src__widgets__basic;
  const flex = flutter_sdk.src__rendering__flex;
  const flutter_logo = flutter_sdk.src__material__flutter_logo;
  const curves = flutter_sdk.src__animation__curves;
  const flutter_logo$ = flutter_sdk.src__painting__flutter_logo;
  const alignment = flutter_sdk.src__painting__alignment;
  const box_fit = flutter_sdk.src__painting__box_fit;
  const image = flutter_sdk.src__widgets__image;
  const decoration_image = flutter_sdk.src__painting__decoration_image;
  const _network_image_web = flutter_sdk.src__painting___network_image_web;
  const text_style = flutter_sdk.src__painting__text_style;
  const colors = flutter_sdk.src__material__colors;
  const colors$ = flutter_sdk.src__painting__colors;
  const binding = flutter_sdk.src__widgets__binding;
  const app = flutter_sdk.src__material__app;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58136
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_shadows]: null,
        [Icon_color]: null,
        [Icon_opticalSize]: null,
        [Icon_grade]: null,
        [Icon_weight]: null,
        [Icon_fill]: null,
        [Icon_size]: null,
        [Icon_icon]: C[2] || CT.C2
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Página Inicial"
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.2,
        [Cubic_b]: 0,
        [Cubic_a]: 0.4
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 750000
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: flutter_logo$.FlutterLogoStyle.prototype,
        [_Enum__name]: "markOnly",
        [_Enum_index]: 0
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4285887861
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: flutter_logo.FlutterLogo.prototype,
        [Widget_key]: null,
        [FlutterLogo_curve]: C[8] || CT.C8,
        [FlutterLogo_duration]: C[9] || CT.C9,
        [FlutterLogo_style]: C[10] || CT.C10,
        [FlutterLogo_textColor]: C[11] || CT.C11,
        [FlutterLogo_size]: null
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: ui.Clip.prototype,
        [_Enum__name]: "none",
        [_Enum_index]: 0
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_Enum__name]: "contain",
        [_Enum_index]: 1
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: basic.FittedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[7] || CT.C7,
        [FittedBox_clipBehavior]: C[12] || CT.C12,
        [FittedBox_alignment]: C[13] || CT.C13,
        [FittedBox_fit]: C[14] || CT.C14
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: flex.FlexFit.prototype,
        [_Enum__name]: "tight",
        [_Enum_index]: 0
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: basic.Expanded.prototype,
        [Widget_key]: null,
        [ProxyWidget_child]: C[6] || CT.C6,
        [Flexible_fit]: C[15] || CT.C15,
        [Flexible_flex]: 1
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: decoration_image.ImageRepeat.prototype,
        [_Enum__name]: "noRepeat",
        [_Enum_index]: 3
      });
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: ui.FilterQuality.prototype,
        [_Enum__name]: "low",
        [_Enum_index]: 1
      });
    },
    get C20() {
      return C[20] = dart.const({
        __proto__: _network_image_web.NetworkImage.prototype,
        [NetworkImage_headers]: null,
        [NetworkImage_scale]: 1,
        [NetworkImage_url]: "https://picsum.photos/250?image=9"
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: image.Image.prototype,
        [Widget_key]: null,
        [Image_isAntiAlias]: false,
        [Image_excludeFromSemantics]: false,
        [Image_semanticLabel]: null,
        [Image_gaplessPlayback]: false,
        [Image_matchTextDirection]: false,
        [Image_centerSlice]: null,
        [Image_repeat]: C[18] || CT.C18,
        [Image_alignment]: C[13] || CT.C13,
        [Image_fit]: null,
        [Image_colorBlendMode]: null,
        [Image_filterQuality]: C[19] || CT.C19,
        [Image_opacity]: null,
        [Image_color]: null,
        [Image_height]: null,
        [Image_width]: null,
        [Image_errorBuilder]: null,
        [Image_loadingBuilder]: null,
        [Image_frameBuilder]: null,
        [Image_image]: C[20] || CT.C20
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: basic.Expanded.prototype,
        [Widget_key]: null,
        [ProxyWidget_child]: C[17] || CT.C17,
        [Flexible_fit]: C[15] || CT.C15,
        [Flexible_flex]: 1
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_value]: 700,
        [FontWeight_index]: 6
      });
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293128957
      });
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4290502395
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4287679225
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284790262
      });
    },
    get C32() {
      return C[32] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282557941
      });
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280391411
      });
    },
    get C34() {
      return C[34] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280191205
      });
    },
    get C35() {
      return C[35] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4279858898
      });
    },
    get C36() {
      return C[36] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4279592384
      });
    },
    get C37() {
      return C[37] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4279060385
      });
    },
    get C27() {
      return C[27] = dart.constMap(core.int, ui.Color, [50, C[28] || CT.C28, 100, C[29] || CT.C29, 200, C[30] || CT.C30, 300, C[31] || CT.C31, 400, C[32] || CT.C32, 500, C[33] || CT.C33, 600, C[34] || CT.C34, 700, C[35] || CT.C35, 800, C[36] || CT.C36, 900, C[37] || CT.C37]);
    },
    get C26() {
      return C[26] = dart.const({
        __proto__: colors.MaterialColor.prototype,
        [Color_value]: 4280391411,
        [ColorSwatch__swatch]: C[27] || CT.C27
      });
    },
    get C23() {
      return C[23] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C[24] || CT.C24,
        [TextStyle_fontSize]: 30,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: C[25] || CT.C25,
        [TextStyle_color]: C[26] || CT.C26,
        [TextStyle_inherit]: true
      });
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: C[23] || CT.C23,
        [Text_textSpan]: null,
        [Text_data]: "Google Flutter"
      });
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: basic.Expanded.prototype,
        [Widget_key]: null,
        [ProxyWidget_child]: C[22] || CT.C22,
        [Flexible_fit]: C[15] || CT.C15,
        [Flexible_flex]: 1
      });
    },
    get C4() {
      return C[4] = dart.constList([C[5] || CT.C5, C[16] || CT.C16, C[21] || CT.C21], framework.Widget);
    }
  }, false);
  var C = Array(38).fill(void 0);
  var I = ["file:///zapp/project/lib/main.dart"];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  var Widget_key = dart.privateName(framework, "Widget.key");
  var Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  var Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  var Icon_shadows = dart.privateName(icon, "Icon.shadows");
  var Icon_color = dart.privateName(icon, "Icon.color");
  var Icon_opticalSize = dart.privateName(icon, "Icon.opticalSize");
  var Icon_grade = dart.privateName(icon, "Icon.grade");
  var Icon_weight = dart.privateName(icon, "Icon.weight");
  var Icon_fill = dart.privateName(icon, "Icon.fill");
  var Icon_size = dart.privateName(icon, "Icon.size");
  var IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  var IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  var IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  var IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  var Icon_icon = dart.privateName(icon, "Icon.icon");
  var Text_selectionColor = dart.privateName(text, "Text.selectionColor");
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  var FlutterLogo_curve = dart.privateName(flutter_logo, "FlutterLogo.curve");
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var FlutterLogo_duration = dart.privateName(flutter_logo, "FlutterLogo.duration");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var FlutterLogo_style = dart.privateName(flutter_logo, "FlutterLogo.style");
  var Color_value = dart.privateName(ui, "Color.value");
  var FlutterLogo_textColor = dart.privateName(flutter_logo, "FlutterLogo.textColor");
  var FlutterLogo_size = dart.privateName(flutter_logo, "FlutterLogo.size");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var FittedBox_clipBehavior = dart.privateName(basic, "FittedBox.clipBehavior");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var FittedBox_alignment = dart.privateName(basic, "FittedBox.alignment");
  var FittedBox_fit = dart.privateName(basic, "FittedBox.fit");
  var ProxyWidget_child = dart.privateName(framework, "ProxyWidget.child");
  var Flexible_fit = dart.privateName(basic, "Flexible.fit");
  var Flexible_flex = dart.privateName(basic, "Flexible.flex");
  var Image_isAntiAlias = dart.privateName(image, "Image.isAntiAlias");
  var Image_excludeFromSemantics = dart.privateName(image, "Image.excludeFromSemantics");
  var Image_semanticLabel = dart.privateName(image, "Image.semanticLabel");
  var Image_gaplessPlayback = dart.privateName(image, "Image.gaplessPlayback");
  var Image_matchTextDirection = dart.privateName(image, "Image.matchTextDirection");
  var Image_centerSlice = dart.privateName(image, "Image.centerSlice");
  var Image_repeat = dart.privateName(image, "Image.repeat");
  var Image_alignment = dart.privateName(image, "Image.alignment");
  var Image_fit = dart.privateName(image, "Image.fit");
  var Image_colorBlendMode = dart.privateName(image, "Image.colorBlendMode");
  var Image_filterQuality = dart.privateName(image, "Image.filterQuality");
  var Image_opacity = dart.privateName(image, "Image.opacity");
  var Image_color = dart.privateName(image, "Image.color");
  var Image_height = dart.privateName(image, "Image.height");
  var Image_width = dart.privateName(image, "Image.width");
  var Image_errorBuilder = dart.privateName(image, "Image.errorBuilder");
  var Image_loadingBuilder = dart.privateName(image, "Image.loadingBuilder");
  var Image_frameBuilder = dart.privateName(image, "Image.frameBuilder");
  var NetworkImage_headers = dart.privateName(_network_image_web, "NetworkImage.headers");
  var NetworkImage_scale = dart.privateName(_network_image_web, "NetworkImage.scale");
  var NetworkImage_url = dart.privateName(_network_image_web, "NetworkImage.url");
  var Image_image = dart.privateName(image, "Image.image");
  var TextStyle_overflow = dart.privateName(text_style, "TextStyle.overflow");
  var TextStyle_fontVariations = dart.privateName(text_style, "TextStyle.fontVariations");
  var TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  var TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  var TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  var TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  var TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  var TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  var TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  var TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  var TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  var TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  var TextStyle_leadingDistribution = dart.privateName(text_style, "TextStyle.leadingDistribution");
  var TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  var TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  var TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  var TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  var TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  var FontWeight_value = dart.privateName(ui, "FontWeight.value");
  var FontWeight_index = dart.privateName(ui, "FontWeight.index");
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var ColorSwatch__swatch = dart.privateName(colors$, "ColorSwatch._swatch");
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  main.Home = class Home extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({leading: C[1] || CT.C1, title: C[3] || CT.C3}), body: new basic.Center.new({child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: C[4] || CT.C4})}), backgroundColor: new ui.Color.fromARGB(255, 0, 0, 0)});
    }
    static ['_#new#tearOff']() {
      return new main.Home.new();
    }
  };
  (main.Home.new = function() {
    main.Home.__proto__.new.call(this);
    ;
  }).prototype = main.Home.prototype;
  dart.addTypeTests(main.Home);
  dart.addTypeCaches(main.Home);
  dart.setMethodSignature(main.Home, () => ({
    __proto__: dart.getMethods(main.Home.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.Home, I[0]);
  main.main = function main$0() {
    return binding.runApp(new app.MaterialApp.new({home: new main.Home.new(), debugShowCheckedModeBanner: false}));
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;AACmB,UAAjB;;IAGvB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UC5C4B;AACxB,YAAO,oCACG,8EAIF,6BACG,oCACsB,0CACU,6EA6BlB,sBAAS,KAAK,GAAG,GAAG;IAE/C;;;;;;;;EACF;;;;;;;;;AAlDe,0BACT,+BACQ,iDACsB;EAE/B;;ECAmB","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant
  };
}));

//# sourceMappingURL=main.js.map
