/* SystemJS module definition */
declare var module: NodeModule;
declare var cordova: any;
declare var Swiper: any;
declare var Ad: any;
declare var navigator: Navigator;
declare var require: any;
interface NodeModule {
  id: string;
}

interface Navigator {
  splashscreen: {
    hide(): void;
    show(): void;
  };

}
