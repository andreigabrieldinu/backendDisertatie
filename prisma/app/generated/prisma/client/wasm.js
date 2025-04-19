
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CompanieScalarFieldEnum = {
  idcompanie: 'idcompanie',
  datacreare: 'datacreare',
  nume: 'nume',
  status: 'status',
  focus: 'focus',
  notitedesprecompanie: 'notitedesprecompanie',
  tipsubscriptie: 'tipsubscriptie',
  idechipa: 'idechipa'
};

exports.Prisma.EchipacompanieScalarFieldEnum = {
  idechipa: 'idechipa',
  nume: 'nume'
};

exports.Prisma.IstorictichetScalarFieldEnum = {
  idistoric: 'idistoric',
  idtichet: 'idtichet',
  datacreare: 'datacreare',
  modificare: 'modificare'
};

exports.Prisma.MembruechipaScalarFieldEnum = {
  idmembru: 'idmembru',
  nume: 'nume',
  prenume: 'prenume',
  rol: 'rol',
  email: 'email',
  idechipa: 'idechipa'
};

exports.Prisma.MesajeScalarFieldEnum = {
  idmesaj: 'idmesaj',
  datacreare: 'datacreare',
  emitatormesaj: 'emitatormesaj',
  emailsuport: 'emailsuport',
  emailutilizator: 'emailutilizator',
  continut: 'continut',
  idtichet: 'idtichet'
};

exports.Prisma.SpecializareScalarFieldEnum = {
  idspecializare: 'idspecializare',
  nume: 'nume'
};

exports.Prisma.SubscriptieScalarFieldEnum = {
  tip: 'tip',
  numarmaximutilizatori: 'numarmaximutilizatori',
  timpraspunsp1: 'timpraspunsp1',
  timpraspunsp2: 'timpraspunsp2',
  timpraspunsp3: 'timpraspunsp3',
  timpraspunsp4: 'timpraspunsp4'
};

exports.Prisma.TichetScalarFieldEnum = {
  idtichet: 'idtichet',
  titlu: 'titlu',
  tiptichet: 'tiptichet',
  prioritate: 'prioritate',
  datacreare: 'datacreare',
  datainchidere: 'datainchidere',
  statuscurent: 'statuscurent',
  consultdeschis: 'consultdeschis',
  bugdeschis: 'bugdeschis',
  produs: 'produs',
  escaladat: 'escaladat',
  idsuport: 'idsuport',
  idutilizator: 'idutilizator',
  linkdocs: 'linkdocs',
  linkdrive: 'linkdrive'
};

exports.Prisma.UtilizatorScalarFieldEnum = {
  idutilizator: 'idutilizator',
  email: 'email',
  nume: 'nume',
  prenume: 'prenume',
  modalitatelogare: 'modalitatelogare',
  pozaprofil: 'pozaprofil',
  datacreare: 'datacreare',
  idcompanie: 'idcompanie',
  tiputilizator: 'tiputilizator',
  specializare: 'specializare'
};

exports.Prisma.ProduseScalarFieldEnum = {
  idprodus: 'idprodus',
  nume: 'nume',
  idspecializare: 'idspecializare'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  companie: 'companie',
  echipacompanie: 'echipacompanie',
  istorictichet: 'istorictichet',
  membruechipa: 'membruechipa',
  mesaje: 'mesaje',
  specializare: 'specializare',
  subscriptie: 'subscriptie',
  tichet: 'tichet',
  utilizator: 'utilizator',
  produse: 'produse'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "E:\\simpre\\simpre\\anul2\\disertatie\\backendDisertatie\\prisma\\app\\generated\\prisma\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "E:\\simpre\\simpre\\anul2\\disertatie\\backendDisertatie\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../../../.env"
  },
  "relativePath": "../../../..",
  "clientVersion": "6.5.0",
  "engineVersion": "173f8d54f8d52e692c7e27e72a88314ec7aeff60",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  output          = \"app/generated/prisma/client\"\n  previewFeatures = [\"driverAdapters\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel companie {\n  idcompanie           Int             @id @default(autoincrement())\n  datacreare           DateTime        @db.Date\n  nume                 String          @db.VarChar(50)\n  status               String          @db.VarChar(50)\n  focus                Boolean\n  notitedesprecompanie String?\n  tipsubscriptie       String?         @db.VarChar(30)\n  idechipa             Int?\n  echipacompanie       echipacompanie? @relation(fields: [idechipa], references: [idechipa], onDelete: NoAction, onUpdate: NoAction)\n  subscriptie          subscriptie?    @relation(fields: [tipsubscriptie], references: [tip], onDelete: NoAction, onUpdate: NoAction)\n  utilizator           utilizator[]\n}\n\nmodel echipacompanie {\n  idechipa     Int            @id @default(autoincrement())\n  nume         String         @db.VarChar(50)\n  companie     companie[]\n  membruechipa membruechipa[]\n}\n\nmodel istorictichet {\n  idistoric  Int      @id @default(autoincrement())\n  idtichet   Int\n  datacreare DateTime @db.Date\n  modificare String   @db.VarChar(50)\n  tichet     tichet   @relation(fields: [idtichet], references: [idtichet], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel membruechipa {\n  idmembru       Int            @id @default(autoincrement())\n  nume           String         @db.VarChar(50)\n  prenume        String         @db.VarChar(50)\n  rol            String         @db.VarChar(100)\n  email          String         @unique @db.VarChar(50)\n  idechipa       Int\n  echipacompanie echipacompanie @relation(fields: [idechipa], references: [idechipa], onDelete: SetNull, onUpdate: NoAction)\n}\n\nmodel mesaje {\n  idmesaj         Int      @id @default(autoincrement())\n  datacreare      DateTime @db.Date\n  emitatormesaj   String   @db.VarChar(10)\n  emailsuport     String   @db.VarChar(50)\n  emailutilizator String   @db.VarChar(50)\n  continut        String\n  idtichet        Int\n  tichet          tichet   @relation(fields: [idtichet], references: [idtichet], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel specializare {\n  idspecializare                                   Int          @id @default(autoincrement())\n  nume                                             String       @db.VarChar(30)\n  produse                                          produse[]\n  utilizator_utilizator_specializareTospecializare utilizator[] @relation(\"utilizator_specializareTospecializare\")\n}\n\nmodel subscriptie {\n  tip                   String     @id @db.VarChar(30)\n  numarmaximutilizatori Int\n  timpraspunsp1         String     @db.VarChar(4)\n  timpraspunsp2         String     @db.VarChar(4)\n  timpraspunsp3         String     @db.VarChar(4)\n  timpraspunsp4         String     @db.VarChar(4)\n  companie              companie[]\n}\n\nmodel tichet {\n  idtichet                                   Int             @id @default(autoincrement())\n  titlu                                      String          @db.VarChar(80)\n  tiptichet                                  String          @db.VarChar(20)\n  prioritate                                 String          @db.Char(2)\n  datacreare                                 DateTime        @db.Date\n  datainchidere                              DateTime        @db.Date\n  statuscurent                               String          @db.VarChar(50)\n  consultdeschis                             Boolean\n  bugdeschis                                 Boolean\n  produs                                     String          @db.VarChar(50)\n  escaladat                                  Boolean\n  idsuport                                   Int\n  idutilizator                               Int\n  linkdocs                                   String?\n  linkdrive                                  String?\n  istorictichet                              istorictichet[]\n  mesaje                                     mesaje[]\n  utilizator_tichet_idsuportToutilizator     utilizator      @relation(\"tichet_idsuportToutilizator\", fields: [idsuport], references: [idutilizator], onDelete: NoAction, onUpdate: NoAction)\n  utilizator_tichet_idutilizatorToutilizator utilizator      @relation(\"tichet_idutilizatorToutilizator\", fields: [idutilizator], references: [idutilizator], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel utilizator {\n  idutilizator                                       Int           @id @default(autoincrement())\n  email                                              String        @unique @db.VarChar(50)\n  nume                                               String        @db.VarChar(50)\n  prenume                                            String        @db.VarChar(50)\n  modalitatelogare                                   String\n  pozaprofil                                         String\n  datacreare                                         DateTime      @db.Date\n  idcompanie                                         Int?\n  tiputilizator                                      String        @db.VarChar(10)\n  specializare                                       Int?\n  tichet_tichet_idsuportToutilizator                 tichet[]      @relation(\"tichet_idsuportToutilizator\")\n  tichet_tichet_idutilizatorToutilizator             tichet[]      @relation(\"tichet_idutilizatorToutilizator\")\n  companie                                           companie?     @relation(fields: [idcompanie], references: [idcompanie], onDelete: NoAction, onUpdate: NoAction)\n  specializare_utilizator_specializareTospecializare specializare? @relation(\"utilizator_specializareTospecializare\", fields: [specializare], references: [idspecializare], onDelete: NoAction, onUpdate: NoAction)\n}\n\nmodel produse {\n  idprodus       Int          @id @default(autoincrement())\n  nume           String       @db.VarChar(30)\n  idspecializare Int\n  specializare   specializare @relation(fields: [idspecializare], references: [idspecializare], onDelete: NoAction, onUpdate: NoAction)\n}\n",
  "inlineSchemaHash": "c360869e9c2fdda4a1d1cf1a467900fb1edfe2e869967f35efcdec37aeacb5f1",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"companie\":{\"fields\":[{\"name\":\"idcompanie\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"datacreare\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"nume\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"focus\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"notitedesprecompanie\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tipsubscriptie\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"idechipa\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"echipacompanie\",\"kind\":\"object\",\"type\":\"echipacompanie\",\"relationName\":\"companieToechipacompanie\"},{\"name\":\"subscriptie\",\"kind\":\"object\",\"type\":\"subscriptie\",\"relationName\":\"companieTosubscriptie\"},{\"name\":\"utilizator\",\"kind\":\"object\",\"type\":\"utilizator\",\"relationName\":\"companieToutilizator\"}],\"dbName\":null},\"echipacompanie\":{\"fields\":[{\"name\":\"idechipa\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"nume\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"companie\",\"kind\":\"object\",\"type\":\"companie\",\"relationName\":\"companieToechipacompanie\"},{\"name\":\"membruechipa\",\"kind\":\"object\",\"type\":\"membruechipa\",\"relationName\":\"echipacompanieTomembruechipa\"}],\"dbName\":null},\"istorictichet\":{\"fields\":[{\"name\":\"idistoric\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"idtichet\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"datacreare\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"modificare\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tichet\",\"kind\":\"object\",\"type\":\"tichet\",\"relationName\":\"istorictichetTotichet\"}],\"dbName\":null},\"membruechipa\":{\"fields\":[{\"name\":\"idmembru\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"nume\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"prenume\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"rol\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"idechipa\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"echipacompanie\",\"kind\":\"object\",\"type\":\"echipacompanie\",\"relationName\":\"echipacompanieTomembruechipa\"}],\"dbName\":null},\"mesaje\":{\"fields\":[{\"name\":\"idmesaj\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"datacreare\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"emitatormesaj\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"emailsuport\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"emailutilizator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"continut\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"idtichet\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"tichet\",\"kind\":\"object\",\"type\":\"tichet\",\"relationName\":\"mesajeTotichet\"}],\"dbName\":null},\"specializare\":{\"fields\":[{\"name\":\"idspecializare\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"nume\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"produse\",\"kind\":\"object\",\"type\":\"produse\",\"relationName\":\"produseTospecializare\"},{\"name\":\"utilizator_utilizator_specializareTospecializare\",\"kind\":\"object\",\"type\":\"utilizator\",\"relationName\":\"utilizator_specializareTospecializare\"}],\"dbName\":null},\"subscriptie\":{\"fields\":[{\"name\":\"tip\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"numarmaximutilizatori\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"timpraspunsp1\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"timpraspunsp2\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"timpraspunsp3\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"timpraspunsp4\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"companie\",\"kind\":\"object\",\"type\":\"companie\",\"relationName\":\"companieTosubscriptie\"}],\"dbName\":null},\"tichet\":{\"fields\":[{\"name\":\"idtichet\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"titlu\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tiptichet\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"prioritate\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"datacreare\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"datainchidere\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"statuscurent\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"consultdeschis\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"bugdeschis\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"produs\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"escaladat\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"idsuport\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"idutilizator\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"linkdocs\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"linkdrive\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"istorictichet\",\"kind\":\"object\",\"type\":\"istorictichet\",\"relationName\":\"istorictichetTotichet\"},{\"name\":\"mesaje\",\"kind\":\"object\",\"type\":\"mesaje\",\"relationName\":\"mesajeTotichet\"},{\"name\":\"utilizator_tichet_idsuportToutilizator\",\"kind\":\"object\",\"type\":\"utilizator\",\"relationName\":\"tichet_idsuportToutilizator\"},{\"name\":\"utilizator_tichet_idutilizatorToutilizator\",\"kind\":\"object\",\"type\":\"utilizator\",\"relationName\":\"tichet_idutilizatorToutilizator\"}],\"dbName\":null},\"utilizator\":{\"fields\":[{\"name\":\"idutilizator\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nume\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"prenume\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"modalitatelogare\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"pozaprofil\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"datacreare\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"idcompanie\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"tiputilizator\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"specializare\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"tichet_tichet_idsuportToutilizator\",\"kind\":\"object\",\"type\":\"tichet\",\"relationName\":\"tichet_idsuportToutilizator\"},{\"name\":\"tichet_tichet_idutilizatorToutilizator\",\"kind\":\"object\",\"type\":\"tichet\",\"relationName\":\"tichet_idutilizatorToutilizator\"},{\"name\":\"companie\",\"kind\":\"object\",\"type\":\"companie\",\"relationName\":\"companieToutilizator\"},{\"name\":\"specializare_utilizator_specializareTospecializare\",\"kind\":\"object\",\"type\":\"specializare\",\"relationName\":\"utilizator_specializareTospecializare\"}],\"dbName\":null},\"produse\":{\"fields\":[{\"name\":\"idprodus\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"nume\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"idspecializare\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"specializare\",\"kind\":\"object\",\"type\":\"specializare\",\"relationName\":\"produseTospecializare\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

