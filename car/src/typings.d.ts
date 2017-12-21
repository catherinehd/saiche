/* SystemJS module definition */
declare var module: NodeModule;
declare var cordova: any;
declare var Swiper: any;
declare var Ad: any;
declare var navigator: Navigator;
interface NodeModule {
  id: string;
}

interface Navigator {
  splashscreen: {
    hide(): void;
    show(): void;
  }
}
