import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";
declare const tables: readonly [
  {
    readonly name: "Types";
    readonly columns: readonly [
      {
        readonly name: "type";
        readonly type: "string";
      }
    ];
    readonly revLinks: readonly [
      {
        readonly column: "types";
        readonly table: "Posts";
      }
    ];
  },
  {
    readonly name: "Brands";
    readonly columns: readonly [
      {
        readonly name: "brand";
        readonly type: "string";
      }
    ];
    readonly revLinks: readonly [
      {
        readonly column: "brands";
        readonly table: "Posts";
      }
    ];
  },
  {
    readonly name: "Posts";
    readonly columns: readonly [
      {
        readonly name: "title";
        readonly type: "string";
      },
      {
        readonly name: "released";
        readonly type: "string";
      },
      {
        readonly name: "os";
        readonly type: "string";
      },
      {
        readonly name: "display";
        readonly type: "string";
      },
      {
        readonly name: "camera";
        readonly type: "string";
      },
      {
        readonly name: "processor";
        readonly type: "string";
      },
      {
        readonly name: "battery";
        readonly type: "string";
      },
      {
        readonly name: "announced";
        readonly type: "string";
      },
      {
        readonly name: "status";
        readonly type: "string";
      },
      {
        readonly name: "technology";
        readonly type: "string";
      },
      {
        readonly name: "bands_2g";
        readonly type: "string";
      },
      {
        readonly name: "bands_3g";
        readonly type: "string";
      },
      {
        readonly name: "bands_4g";
        readonly type: "string";
      },
      {
        readonly name: "bands_5g";
        readonly type: "string";
      },
      {
        readonly name: "speed";
        readonly type: "string";
      },
      {
        readonly name: "gprs";
        readonly type: "string";
      },
      {
        readonly name: "edge";
        readonly type: "string";
      },
      {
        readonly name: "dimensions";
        readonly type: "string";
      },
      {
        readonly name: "weight";
        readonly type: "string";
      },
      {
        readonly name: "build";
        readonly type: "string";
      },
      {
        readonly name: "sim";
        readonly type: "string";
      },
      {
        readonly name: "type";
        readonly type: "string";
      },
      {
        readonly name: "size";
        readonly type: "string";
      },
      {
        readonly name: "resolution";
        readonly type: "string";
      },
      {
        readonly name: "multitouch";
        readonly type: "string";
      },
      {
        readonly name: "protection";
        readonly type: "string";
      },
      {
        readonly name: "display_features";
        readonly type: "string";
      },
      {
        readonly name: "chipset";
        readonly type: "string";
      },
      {
        readonly name: "cpu";
        readonly type: "string";
      },
      {
        readonly name: "gpu";
        readonly type: "string";
      },
      {
        readonly name: "card_slot";
        readonly type: "string";
      },
      {
        readonly name: "internal";
        readonly type: "string";
      },
      {
        readonly name: "ram";
        readonly type: "string";
      },
      {
        readonly name: "front_camera";
        readonly type: "string";
      },
      {
        readonly name: "back_camera";
        readonly type: "string";
      },
      {
        readonly name: "camera_features";
        readonly type: "string";
      },
      {
        readonly name: "video";
        readonly type: "string";
      },
      {
        readonly name: "alert_types";
        readonly type: "string";
      },
      {
        readonly name: "loudspeaker";
        readonly type: "string";
      },
      {
        readonly name: "headphone_jack";
        readonly type: "string";
      },
      {
        readonly name: "wlan";
        readonly type: "string";
      },
      {
        readonly name: "bluetooth";
        readonly type: "string";
      },
      {
        readonly name: "gps";
        readonly type: "string";
      },
      {
        readonly name: "nfc";
        readonly type: "string";
      },
      {
        readonly name: "fm_radio";
        readonly type: "string";
      },
      {
        readonly name: "usb";
        readonly type: "string";
      },
      {
        readonly name: "infrared_port";
        readonly type: "string";
      },
      {
        readonly name: "sensors";
        readonly type: "string";
      },
      {
        readonly name: "messaging";
        readonly type: "string";
      },
      {
        readonly name: "browser";
        readonly type: "string";
        readonly defaultValue: "HTML5";
      },
      {
        readonly name: "java";
        readonly type: "string";
        readonly defaultValue: "No";
      },
      {
        readonly name: "battery_types";
        readonly type: "string";
      },
      {
        readonly name: "battery_capacity";
        readonly type: "string";
      },
      {
        readonly name: "charging";
        readonly type: "string";
      },
      {
        readonly name: "made_by";
        readonly type: "string";
      },
      {
        readonly name: "color";
        readonly type: "string";
      },
      {
        readonly name: "highlights";
        readonly type: "text";
      },
      {
        readonly name: "types";
        readonly type: "link";
        readonly link: {
          readonly table: "Types";
        };
      },
      {
        readonly name: "brands";
        readonly type: "link";
        readonly link: {
          readonly table: "Brands";
        };
      },
      {
        readonly name: "meta_description";
        readonly type: "text";
      },
      {
        readonly name: "meta_tags";
        readonly type: "text";
      },
      {
        readonly name: "visitors";
        readonly type: "int";
         readonly defaultValue: 0;
      },
      {
        readonly name: "pros";
        readonly type: "text";
      },
      {
        readonly name: "cons";
        readonly type: "text";
      },
      {
        readonly name: "ratings";
        readonly type: "string";
      },
      {
        readonly name: "body_others";
        readonly type: "string";
      },
      {
        readonly name: "images";
        readonly type: "string";
      },
      {
        readonly name: "official_price";
        readonly type: "string";
      },
      {
        readonly name: "unofficial_price";
        readonly type: "string";
      },
      {
        readonly name: "price_range";
        readonly type: "string";
      },
      {
        readonly name: "international_price";
        readonly type: "string";
      },
      {
        readonly name: "slug";
        readonly type: "string";
      }
    ];
  },
  {
    readonly name: "AdminTokens";
    readonly columns: readonly [
      {
        readonly name: "token";
        readonly type: "text";
      }
    ];
  },
  {
    readonly name: "TotalVisitors";
    readonly columns: readonly [
      {
        readonly name: "visitor";
        readonly type: "int";
      }
    ];
  },
  {
    readonly name: "DailyVisitors";
    readonly columns: readonly [
      {
        readonly name: "visitor";
        readonly type: "int";
      }
    ];
  }
];
export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;
export type Types = InferredTypes["Types"];
export type TypesRecord = Types & XataRecord;
export type Brands = InferredTypes["Brands"];
export type BrandsRecord = Brands & XataRecord;
export type Posts = InferredTypes["Posts"];
export type PostsRecord = Posts & XataRecord;
export type AdminTokens = InferredTypes["AdminTokens"];
export type AdminTokensRecord = AdminTokens & XataRecord;
export type TotalVisitors = InferredTypes["TotalVisitors"];
export type TotalVisitorsRecord = TotalVisitors & XataRecord;
export type DailyVisitors = InferredTypes["DailyVisitors"];
export type DailyVisitorsRecord = DailyVisitors & XataRecord;
export type DatabaseSchema = {
  Types: TypesRecord;
  Brands: BrandsRecord;
  Posts: PostsRecord;
  AdminTokens: AdminTokensRecord;
  TotalVisitors: TotalVisitorsRecord;
  DailyVisitors: DailyVisitorsRecord;
};
declare const DatabaseClient: any;
export declare class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions);
}
export declare const getXataClient: () => XataClient;
export {};
