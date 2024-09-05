// src/types/kakao.d.ts
declare const kakao: any;

// 카카오 맵 관련 타입을 정의할 수 있습니다. 예를 들어:
declare namespace kakao.maps {
  class Map {
    constructor(container: HTMLElement, options: any);
  }
  class LatLng {
    constructor(lat: number, lng: number);
  }
  class Marker {
    constructor(options: any);
    setMap(map: Map): void;
  }
  class MapTypeId {
    static ROADMAP: any;
    static SATELLITE: any;
  }
  class TileLayer {
    constructor(options: any);
  }
}
