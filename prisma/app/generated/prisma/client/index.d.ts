
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model companie
 * 
 */
export type companie = $Result.DefaultSelection<Prisma.$companiePayload>
/**
 * Model echipacompanie
 * 
 */
export type echipacompanie = $Result.DefaultSelection<Prisma.$echipacompaniePayload>
/**
 * Model istorictichet
 * 
 */
export type istorictichet = $Result.DefaultSelection<Prisma.$istorictichetPayload>
/**
 * Model membruechipa
 * 
 */
export type membruechipa = $Result.DefaultSelection<Prisma.$membruechipaPayload>
/**
 * Model mesaje
 * 
 */
export type mesaje = $Result.DefaultSelection<Prisma.$mesajePayload>
/**
 * Model specializare
 * 
 */
export type specializare = $Result.DefaultSelection<Prisma.$specializarePayload>
/**
 * Model subscriptie
 * 
 */
export type subscriptie = $Result.DefaultSelection<Prisma.$subscriptiePayload>
/**
 * Model tichet
 * 
 */
export type tichet = $Result.DefaultSelection<Prisma.$tichetPayload>
/**
 * Model utilizator
 * 
 */
export type utilizator = $Result.DefaultSelection<Prisma.$utilizatorPayload>
/**
 * Model produse
 * 
 */
export type produse = $Result.DefaultSelection<Prisma.$produsePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.companie.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.companie.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.companie`: Exposes CRUD operations for the **companie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.companie.findMany()
    * ```
    */
  get companie(): Prisma.companieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.echipacompanie`: Exposes CRUD operations for the **echipacompanie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Echipacompanies
    * const echipacompanies = await prisma.echipacompanie.findMany()
    * ```
    */
  get echipacompanie(): Prisma.echipacompanieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.istorictichet`: Exposes CRUD operations for the **istorictichet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Istorictichets
    * const istorictichets = await prisma.istorictichet.findMany()
    * ```
    */
  get istorictichet(): Prisma.istorictichetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.membruechipa`: Exposes CRUD operations for the **membruechipa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Membruechipas
    * const membruechipas = await prisma.membruechipa.findMany()
    * ```
    */
  get membruechipa(): Prisma.membruechipaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mesaje`: Exposes CRUD operations for the **mesaje** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mesajes
    * const mesajes = await prisma.mesaje.findMany()
    * ```
    */
  get mesaje(): Prisma.mesajeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.specializare`: Exposes CRUD operations for the **specializare** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Specializares
    * const specializares = await prisma.specializare.findMany()
    * ```
    */
  get specializare(): Prisma.specializareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptie`: Exposes CRUD operations for the **subscriptie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscripties
    * const subscripties = await prisma.subscriptie.findMany()
    * ```
    */
  get subscriptie(): Prisma.subscriptieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tichet`: Exposes CRUD operations for the **tichet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tichets
    * const tichets = await prisma.tichet.findMany()
    * ```
    */
  get tichet(): Prisma.tichetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.utilizator`: Exposes CRUD operations for the **utilizator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilizators
    * const utilizators = await prisma.utilizator.findMany()
    * ```
    */
  get utilizator(): Prisma.utilizatorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produse`: Exposes CRUD operations for the **produse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produses
    * const produses = await prisma.produse.findMany()
    * ```
    */
  get produse(): Prisma.produseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "companie" | "echipacompanie" | "istorictichet" | "membruechipa" | "mesaje" | "specializare" | "subscriptie" | "tichet" | "utilizator" | "produse"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      companie: {
        payload: Prisma.$companiePayload<ExtArgs>
        fields: Prisma.companieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiePayload>
          }
          findFirst: {
            args: Prisma.companieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiePayload>
          }
          findMany: {
            args: Prisma.companieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiePayload>[]
          }
          create: {
            args: Prisma.companieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiePayload>
          }
          createMany: {
            args: Prisma.companieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.companieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiePayload>[]
          }
          delete: {
            args: Prisma.companieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiePayload>
          }
          update: {
            args: Prisma.companieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiePayload>
          }
          deleteMany: {
            args: Prisma.companieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.companieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.companieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiePayload>[]
          }
          upsert: {
            args: Prisma.companieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiePayload>
          }
          aggregate: {
            args: Prisma.CompanieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanie>
          }
          groupBy: {
            args: Prisma.companieGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanieGroupByOutputType>[]
          }
          count: {
            args: Prisma.companieCountArgs<ExtArgs>
            result: $Utils.Optional<CompanieCountAggregateOutputType> | number
          }
        }
      }
      echipacompanie: {
        payload: Prisma.$echipacompaniePayload<ExtArgs>
        fields: Prisma.echipacompanieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.echipacompanieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$echipacompaniePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.echipacompanieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$echipacompaniePayload>
          }
          findFirst: {
            args: Prisma.echipacompanieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$echipacompaniePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.echipacompanieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$echipacompaniePayload>
          }
          findMany: {
            args: Prisma.echipacompanieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$echipacompaniePayload>[]
          }
          create: {
            args: Prisma.echipacompanieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$echipacompaniePayload>
          }
          createMany: {
            args: Prisma.echipacompanieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.echipacompanieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$echipacompaniePayload>[]
          }
          delete: {
            args: Prisma.echipacompanieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$echipacompaniePayload>
          }
          update: {
            args: Prisma.echipacompanieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$echipacompaniePayload>
          }
          deleteMany: {
            args: Prisma.echipacompanieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.echipacompanieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.echipacompanieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$echipacompaniePayload>[]
          }
          upsert: {
            args: Prisma.echipacompanieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$echipacompaniePayload>
          }
          aggregate: {
            args: Prisma.EchipacompanieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEchipacompanie>
          }
          groupBy: {
            args: Prisma.echipacompanieGroupByArgs<ExtArgs>
            result: $Utils.Optional<EchipacompanieGroupByOutputType>[]
          }
          count: {
            args: Prisma.echipacompanieCountArgs<ExtArgs>
            result: $Utils.Optional<EchipacompanieCountAggregateOutputType> | number
          }
        }
      }
      istorictichet: {
        payload: Prisma.$istorictichetPayload<ExtArgs>
        fields: Prisma.istorictichetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.istorictichetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$istorictichetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.istorictichetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$istorictichetPayload>
          }
          findFirst: {
            args: Prisma.istorictichetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$istorictichetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.istorictichetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$istorictichetPayload>
          }
          findMany: {
            args: Prisma.istorictichetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$istorictichetPayload>[]
          }
          create: {
            args: Prisma.istorictichetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$istorictichetPayload>
          }
          createMany: {
            args: Prisma.istorictichetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.istorictichetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$istorictichetPayload>[]
          }
          delete: {
            args: Prisma.istorictichetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$istorictichetPayload>
          }
          update: {
            args: Prisma.istorictichetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$istorictichetPayload>
          }
          deleteMany: {
            args: Prisma.istorictichetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.istorictichetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.istorictichetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$istorictichetPayload>[]
          }
          upsert: {
            args: Prisma.istorictichetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$istorictichetPayload>
          }
          aggregate: {
            args: Prisma.IstorictichetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIstorictichet>
          }
          groupBy: {
            args: Prisma.istorictichetGroupByArgs<ExtArgs>
            result: $Utils.Optional<IstorictichetGroupByOutputType>[]
          }
          count: {
            args: Prisma.istorictichetCountArgs<ExtArgs>
            result: $Utils.Optional<IstorictichetCountAggregateOutputType> | number
          }
        }
      }
      membruechipa: {
        payload: Prisma.$membruechipaPayload<ExtArgs>
        fields: Prisma.membruechipaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.membruechipaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membruechipaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.membruechipaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membruechipaPayload>
          }
          findFirst: {
            args: Prisma.membruechipaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membruechipaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.membruechipaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membruechipaPayload>
          }
          findMany: {
            args: Prisma.membruechipaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membruechipaPayload>[]
          }
          create: {
            args: Prisma.membruechipaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membruechipaPayload>
          }
          createMany: {
            args: Prisma.membruechipaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.membruechipaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membruechipaPayload>[]
          }
          delete: {
            args: Prisma.membruechipaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membruechipaPayload>
          }
          update: {
            args: Prisma.membruechipaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membruechipaPayload>
          }
          deleteMany: {
            args: Prisma.membruechipaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.membruechipaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.membruechipaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membruechipaPayload>[]
          }
          upsert: {
            args: Prisma.membruechipaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membruechipaPayload>
          }
          aggregate: {
            args: Prisma.MembruechipaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembruechipa>
          }
          groupBy: {
            args: Prisma.membruechipaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembruechipaGroupByOutputType>[]
          }
          count: {
            args: Prisma.membruechipaCountArgs<ExtArgs>
            result: $Utils.Optional<MembruechipaCountAggregateOutputType> | number
          }
        }
      }
      mesaje: {
        payload: Prisma.$mesajePayload<ExtArgs>
        fields: Prisma.mesajeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mesajeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mesajePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mesajeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mesajePayload>
          }
          findFirst: {
            args: Prisma.mesajeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mesajePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mesajeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mesajePayload>
          }
          findMany: {
            args: Prisma.mesajeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mesajePayload>[]
          }
          create: {
            args: Prisma.mesajeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mesajePayload>
          }
          createMany: {
            args: Prisma.mesajeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mesajeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mesajePayload>[]
          }
          delete: {
            args: Prisma.mesajeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mesajePayload>
          }
          update: {
            args: Prisma.mesajeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mesajePayload>
          }
          deleteMany: {
            args: Prisma.mesajeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mesajeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mesajeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mesajePayload>[]
          }
          upsert: {
            args: Prisma.mesajeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mesajePayload>
          }
          aggregate: {
            args: Prisma.MesajeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMesaje>
          }
          groupBy: {
            args: Prisma.mesajeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MesajeGroupByOutputType>[]
          }
          count: {
            args: Prisma.mesajeCountArgs<ExtArgs>
            result: $Utils.Optional<MesajeCountAggregateOutputType> | number
          }
        }
      }
      specializare: {
        payload: Prisma.$specializarePayload<ExtArgs>
        fields: Prisma.specializareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.specializareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specializarePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.specializareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specializarePayload>
          }
          findFirst: {
            args: Prisma.specializareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specializarePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.specializareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specializarePayload>
          }
          findMany: {
            args: Prisma.specializareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specializarePayload>[]
          }
          create: {
            args: Prisma.specializareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specializarePayload>
          }
          createMany: {
            args: Prisma.specializareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.specializareCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specializarePayload>[]
          }
          delete: {
            args: Prisma.specializareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specializarePayload>
          }
          update: {
            args: Prisma.specializareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specializarePayload>
          }
          deleteMany: {
            args: Prisma.specializareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.specializareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.specializareUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specializarePayload>[]
          }
          upsert: {
            args: Prisma.specializareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specializarePayload>
          }
          aggregate: {
            args: Prisma.SpecializareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecializare>
          }
          groupBy: {
            args: Prisma.specializareGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecializareGroupByOutputType>[]
          }
          count: {
            args: Prisma.specializareCountArgs<ExtArgs>
            result: $Utils.Optional<SpecializareCountAggregateOutputType> | number
          }
        }
      }
      subscriptie: {
        payload: Prisma.$subscriptiePayload<ExtArgs>
        fields: Prisma.subscriptieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subscriptieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptiePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subscriptieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptiePayload>
          }
          findFirst: {
            args: Prisma.subscriptieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptiePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subscriptieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptiePayload>
          }
          findMany: {
            args: Prisma.subscriptieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptiePayload>[]
          }
          create: {
            args: Prisma.subscriptieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptiePayload>
          }
          createMany: {
            args: Prisma.subscriptieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.subscriptieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptiePayload>[]
          }
          delete: {
            args: Prisma.subscriptieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptiePayload>
          }
          update: {
            args: Prisma.subscriptieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptiePayload>
          }
          deleteMany: {
            args: Prisma.subscriptieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subscriptieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.subscriptieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptiePayload>[]
          }
          upsert: {
            args: Prisma.subscriptieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptiePayload>
          }
          aggregate: {
            args: Prisma.SubscriptieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptie>
          }
          groupBy: {
            args: Prisma.subscriptieGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptieGroupByOutputType>[]
          }
          count: {
            args: Prisma.subscriptieCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptieCountAggregateOutputType> | number
          }
        }
      }
      tichet: {
        payload: Prisma.$tichetPayload<ExtArgs>
        fields: Prisma.tichetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tichetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tichetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tichetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tichetPayload>
          }
          findFirst: {
            args: Prisma.tichetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tichetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tichetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tichetPayload>
          }
          findMany: {
            args: Prisma.tichetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tichetPayload>[]
          }
          create: {
            args: Prisma.tichetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tichetPayload>
          }
          createMany: {
            args: Prisma.tichetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tichetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tichetPayload>[]
          }
          delete: {
            args: Prisma.tichetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tichetPayload>
          }
          update: {
            args: Prisma.tichetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tichetPayload>
          }
          deleteMany: {
            args: Prisma.tichetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tichetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tichetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tichetPayload>[]
          }
          upsert: {
            args: Prisma.tichetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tichetPayload>
          }
          aggregate: {
            args: Prisma.TichetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTichet>
          }
          groupBy: {
            args: Prisma.tichetGroupByArgs<ExtArgs>
            result: $Utils.Optional<TichetGroupByOutputType>[]
          }
          count: {
            args: Prisma.tichetCountArgs<ExtArgs>
            result: $Utils.Optional<TichetCountAggregateOutputType> | number
          }
        }
      }
      utilizator: {
        payload: Prisma.$utilizatorPayload<ExtArgs>
        fields: Prisma.utilizatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.utilizatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilizatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.utilizatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilizatorPayload>
          }
          findFirst: {
            args: Prisma.utilizatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilizatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.utilizatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilizatorPayload>
          }
          findMany: {
            args: Prisma.utilizatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilizatorPayload>[]
          }
          create: {
            args: Prisma.utilizatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilizatorPayload>
          }
          createMany: {
            args: Prisma.utilizatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.utilizatorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilizatorPayload>[]
          }
          delete: {
            args: Prisma.utilizatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilizatorPayload>
          }
          update: {
            args: Prisma.utilizatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilizatorPayload>
          }
          deleteMany: {
            args: Prisma.utilizatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.utilizatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.utilizatorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilizatorPayload>[]
          }
          upsert: {
            args: Prisma.utilizatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilizatorPayload>
          }
          aggregate: {
            args: Prisma.UtilizatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilizator>
          }
          groupBy: {
            args: Prisma.utilizatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilizatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.utilizatorCountArgs<ExtArgs>
            result: $Utils.Optional<UtilizatorCountAggregateOutputType> | number
          }
        }
      }
      produse: {
        payload: Prisma.$produsePayload<ExtArgs>
        fields: Prisma.produseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produsePayload>
          }
          findFirst: {
            args: Prisma.produseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produsePayload>
          }
          findMany: {
            args: Prisma.produseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produsePayload>[]
          }
          create: {
            args: Prisma.produseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produsePayload>
          }
          createMany: {
            args: Prisma.produseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.produseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produsePayload>[]
          }
          delete: {
            args: Prisma.produseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produsePayload>
          }
          update: {
            args: Prisma.produseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produsePayload>
          }
          deleteMany: {
            args: Prisma.produseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.produseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.produseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produsePayload>[]
          }
          upsert: {
            args: Prisma.produseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produsePayload>
          }
          aggregate: {
            args: Prisma.ProduseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduse>
          }
          groupBy: {
            args: Prisma.produseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProduseGroupByOutputType>[]
          }
          count: {
            args: Prisma.produseCountArgs<ExtArgs>
            result: $Utils.Optional<ProduseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.DriverAdapter | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    companie?: companieOmit
    echipacompanie?: echipacompanieOmit
    istorictichet?: istorictichetOmit
    membruechipa?: membruechipaOmit
    mesaje?: mesajeOmit
    specializare?: specializareOmit
    subscriptie?: subscriptieOmit
    tichet?: tichetOmit
    utilizator?: utilizatorOmit
    produse?: produseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanieCountOutputType
   */

  export type CompanieCountOutputType = {
    utilizator: number
  }

  export type CompanieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilizator?: boolean | CompanieCountOutputTypeCountUtilizatorArgs
  }

  // Custom InputTypes
  /**
   * CompanieCountOutputType without action
   */
  export type CompanieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanieCountOutputType
     */
    select?: CompanieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanieCountOutputType without action
   */
  export type CompanieCountOutputTypeCountUtilizatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: utilizatorWhereInput
  }


  /**
   * Count Type EchipacompanieCountOutputType
   */

  export type EchipacompanieCountOutputType = {
    companie: number
    membruechipa: number
  }

  export type EchipacompanieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companie?: boolean | EchipacompanieCountOutputTypeCountCompanieArgs
    membruechipa?: boolean | EchipacompanieCountOutputTypeCountMembruechipaArgs
  }

  // Custom InputTypes
  /**
   * EchipacompanieCountOutputType without action
   */
  export type EchipacompanieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EchipacompanieCountOutputType
     */
    select?: EchipacompanieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EchipacompanieCountOutputType without action
   */
  export type EchipacompanieCountOutputTypeCountCompanieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companieWhereInput
  }

  /**
   * EchipacompanieCountOutputType without action
   */
  export type EchipacompanieCountOutputTypeCountMembruechipaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: membruechipaWhereInput
  }


  /**
   * Count Type SpecializareCountOutputType
   */

  export type SpecializareCountOutputType = {
    produse: number
    utilizator_utilizator_specializareTospecializare: number
  }

  export type SpecializareCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produse?: boolean | SpecializareCountOutputTypeCountProduseArgs
    utilizator_utilizator_specializareTospecializare?: boolean | SpecializareCountOutputTypeCountUtilizator_utilizator_specializareTospecializareArgs
  }

  // Custom InputTypes
  /**
   * SpecializareCountOutputType without action
   */
  export type SpecializareCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecializareCountOutputType
     */
    select?: SpecializareCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecializareCountOutputType without action
   */
  export type SpecializareCountOutputTypeCountProduseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produseWhereInput
  }

  /**
   * SpecializareCountOutputType without action
   */
  export type SpecializareCountOutputTypeCountUtilizator_utilizator_specializareTospecializareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: utilizatorWhereInput
  }


  /**
   * Count Type SubscriptieCountOutputType
   */

  export type SubscriptieCountOutputType = {
    companie: number
  }

  export type SubscriptieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companie?: boolean | SubscriptieCountOutputTypeCountCompanieArgs
  }

  // Custom InputTypes
  /**
   * SubscriptieCountOutputType without action
   */
  export type SubscriptieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptieCountOutputType
     */
    select?: SubscriptieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptieCountOutputType without action
   */
  export type SubscriptieCountOutputTypeCountCompanieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companieWhereInput
  }


  /**
   * Count Type TichetCountOutputType
   */

  export type TichetCountOutputType = {
    istorictichet: number
    mesaje: number
  }

  export type TichetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    istorictichet?: boolean | TichetCountOutputTypeCountIstorictichetArgs
    mesaje?: boolean | TichetCountOutputTypeCountMesajeArgs
  }

  // Custom InputTypes
  /**
   * TichetCountOutputType without action
   */
  export type TichetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TichetCountOutputType
     */
    select?: TichetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TichetCountOutputType without action
   */
  export type TichetCountOutputTypeCountIstorictichetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: istorictichetWhereInput
  }

  /**
   * TichetCountOutputType without action
   */
  export type TichetCountOutputTypeCountMesajeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mesajeWhereInput
  }


  /**
   * Count Type UtilizatorCountOutputType
   */

  export type UtilizatorCountOutputType = {
    tichet_tichet_idsuportToutilizator: number
    tichet_tichet_idutilizatorToutilizator: number
  }

  export type UtilizatorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tichet_tichet_idsuportToutilizator?: boolean | UtilizatorCountOutputTypeCountTichet_tichet_idsuportToutilizatorArgs
    tichet_tichet_idutilizatorToutilizator?: boolean | UtilizatorCountOutputTypeCountTichet_tichet_idutilizatorToutilizatorArgs
  }

  // Custom InputTypes
  /**
   * UtilizatorCountOutputType without action
   */
  export type UtilizatorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilizatorCountOutputType
     */
    select?: UtilizatorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UtilizatorCountOutputType without action
   */
  export type UtilizatorCountOutputTypeCountTichet_tichet_idsuportToutilizatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tichetWhereInput
  }

  /**
   * UtilizatorCountOutputType without action
   */
  export type UtilizatorCountOutputTypeCountTichet_tichet_idutilizatorToutilizatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tichetWhereInput
  }


  /**
   * Models
   */

  /**
   * Model companie
   */

  export type AggregateCompanie = {
    _count: CompanieCountAggregateOutputType | null
    _avg: CompanieAvgAggregateOutputType | null
    _sum: CompanieSumAggregateOutputType | null
    _min: CompanieMinAggregateOutputType | null
    _max: CompanieMaxAggregateOutputType | null
  }

  export type CompanieAvgAggregateOutputType = {
    idcompanie: number | null
    idechipa: number | null
  }

  export type CompanieSumAggregateOutputType = {
    idcompanie: number | null
    idechipa: number | null
  }

  export type CompanieMinAggregateOutputType = {
    idcompanie: number | null
    datacreare: Date | null
    nume: string | null
    status: string | null
    focus: boolean | null
    notitedesprecompanie: string | null
    tipsubscriptie: string | null
    idechipa: number | null
  }

  export type CompanieMaxAggregateOutputType = {
    idcompanie: number | null
    datacreare: Date | null
    nume: string | null
    status: string | null
    focus: boolean | null
    notitedesprecompanie: string | null
    tipsubscriptie: string | null
    idechipa: number | null
  }

  export type CompanieCountAggregateOutputType = {
    idcompanie: number
    datacreare: number
    nume: number
    status: number
    focus: number
    notitedesprecompanie: number
    tipsubscriptie: number
    idechipa: number
    _all: number
  }


  export type CompanieAvgAggregateInputType = {
    idcompanie?: true
    idechipa?: true
  }

  export type CompanieSumAggregateInputType = {
    idcompanie?: true
    idechipa?: true
  }

  export type CompanieMinAggregateInputType = {
    idcompanie?: true
    datacreare?: true
    nume?: true
    status?: true
    focus?: true
    notitedesprecompanie?: true
    tipsubscriptie?: true
    idechipa?: true
  }

  export type CompanieMaxAggregateInputType = {
    idcompanie?: true
    datacreare?: true
    nume?: true
    status?: true
    focus?: true
    notitedesprecompanie?: true
    tipsubscriptie?: true
    idechipa?: true
  }

  export type CompanieCountAggregateInputType = {
    idcompanie?: true
    datacreare?: true
    nume?: true
    status?: true
    focus?: true
    notitedesprecompanie?: true
    tipsubscriptie?: true
    idechipa?: true
    _all?: true
  }

  export type CompanieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companie to aggregate.
     */
    where?: companieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companieOrderByWithRelationInput | companieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companies
    **/
    _count?: true | CompanieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanieMaxAggregateInputType
  }

  export type GetCompanieAggregateType<T extends CompanieAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanie[P]>
      : GetScalarType<T[P], AggregateCompanie[P]>
  }




  export type companieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companieWhereInput
    orderBy?: companieOrderByWithAggregationInput | companieOrderByWithAggregationInput[]
    by: CompanieScalarFieldEnum[] | CompanieScalarFieldEnum
    having?: companieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanieCountAggregateInputType | true
    _avg?: CompanieAvgAggregateInputType
    _sum?: CompanieSumAggregateInputType
    _min?: CompanieMinAggregateInputType
    _max?: CompanieMaxAggregateInputType
  }

  export type CompanieGroupByOutputType = {
    idcompanie: number
    datacreare: Date
    nume: string
    status: string
    focus: boolean
    notitedesprecompanie: string | null
    tipsubscriptie: string | null
    idechipa: number | null
    _count: CompanieCountAggregateOutputType | null
    _avg: CompanieAvgAggregateOutputType | null
    _sum: CompanieSumAggregateOutputType | null
    _min: CompanieMinAggregateOutputType | null
    _max: CompanieMaxAggregateOutputType | null
  }

  type GetCompanieGroupByPayload<T extends companieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanieGroupByOutputType[P]>
            : GetScalarType<T[P], CompanieGroupByOutputType[P]>
        }
      >
    >


  export type companieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idcompanie?: boolean
    datacreare?: boolean
    nume?: boolean
    status?: boolean
    focus?: boolean
    notitedesprecompanie?: boolean
    tipsubscriptie?: boolean
    idechipa?: boolean
    echipacompanie?: boolean | companie$echipacompanieArgs<ExtArgs>
    subscriptie?: boolean | companie$subscriptieArgs<ExtArgs>
    utilizator?: boolean | companie$utilizatorArgs<ExtArgs>
    _count?: boolean | CompanieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companie"]>

  export type companieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idcompanie?: boolean
    datacreare?: boolean
    nume?: boolean
    status?: boolean
    focus?: boolean
    notitedesprecompanie?: boolean
    tipsubscriptie?: boolean
    idechipa?: boolean
    echipacompanie?: boolean | companie$echipacompanieArgs<ExtArgs>
    subscriptie?: boolean | companie$subscriptieArgs<ExtArgs>
  }, ExtArgs["result"]["companie"]>

  export type companieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idcompanie?: boolean
    datacreare?: boolean
    nume?: boolean
    status?: boolean
    focus?: boolean
    notitedesprecompanie?: boolean
    tipsubscriptie?: boolean
    idechipa?: boolean
    echipacompanie?: boolean | companie$echipacompanieArgs<ExtArgs>
    subscriptie?: boolean | companie$subscriptieArgs<ExtArgs>
  }, ExtArgs["result"]["companie"]>

  export type companieSelectScalar = {
    idcompanie?: boolean
    datacreare?: boolean
    nume?: boolean
    status?: boolean
    focus?: boolean
    notitedesprecompanie?: boolean
    tipsubscriptie?: boolean
    idechipa?: boolean
  }

  export type companieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idcompanie" | "datacreare" | "nume" | "status" | "focus" | "notitedesprecompanie" | "tipsubscriptie" | "idechipa", ExtArgs["result"]["companie"]>
  export type companieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    echipacompanie?: boolean | companie$echipacompanieArgs<ExtArgs>
    subscriptie?: boolean | companie$subscriptieArgs<ExtArgs>
    utilizator?: boolean | companie$utilizatorArgs<ExtArgs>
    _count?: boolean | CompanieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type companieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    echipacompanie?: boolean | companie$echipacompanieArgs<ExtArgs>
    subscriptie?: boolean | companie$subscriptieArgs<ExtArgs>
  }
  export type companieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    echipacompanie?: boolean | companie$echipacompanieArgs<ExtArgs>
    subscriptie?: boolean | companie$subscriptieArgs<ExtArgs>
  }

  export type $companiePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "companie"
    objects: {
      echipacompanie: Prisma.$echipacompaniePayload<ExtArgs> | null
      subscriptie: Prisma.$subscriptiePayload<ExtArgs> | null
      utilizator: Prisma.$utilizatorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idcompanie: number
      datacreare: Date
      nume: string
      status: string
      focus: boolean
      notitedesprecompanie: string | null
      tipsubscriptie: string | null
      idechipa: number | null
    }, ExtArgs["result"]["companie"]>
    composites: {}
  }

  type companieGetPayload<S extends boolean | null | undefined | companieDefaultArgs> = $Result.GetResult<Prisma.$companiePayload, S>

  type companieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<companieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanieCountAggregateInputType | true
    }

  export interface companieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['companie'], meta: { name: 'companie' } }
    /**
     * Find zero or one Companie that matches the filter.
     * @param {companieFindUniqueArgs} args - Arguments to find a Companie
     * @example
     * // Get one Companie
     * const companie = await prisma.companie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends companieFindUniqueArgs>(args: SelectSubset<T, companieFindUniqueArgs<ExtArgs>>): Prisma__companieClient<$Result.GetResult<Prisma.$companiePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Companie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {companieFindUniqueOrThrowArgs} args - Arguments to find a Companie
     * @example
     * // Get one Companie
     * const companie = await prisma.companie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends companieFindUniqueOrThrowArgs>(args: SelectSubset<T, companieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__companieClient<$Result.GetResult<Prisma.$companiePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companieFindFirstArgs} args - Arguments to find a Companie
     * @example
     * // Get one Companie
     * const companie = await prisma.companie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends companieFindFirstArgs>(args?: SelectSubset<T, companieFindFirstArgs<ExtArgs>>): Prisma__companieClient<$Result.GetResult<Prisma.$companiePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companieFindFirstOrThrowArgs} args - Arguments to find a Companie
     * @example
     * // Get one Companie
     * const companie = await prisma.companie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends companieFindFirstOrThrowArgs>(args?: SelectSubset<T, companieFindFirstOrThrowArgs<ExtArgs>>): Prisma__companieClient<$Result.GetResult<Prisma.$companiePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.companie.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.companie.findMany({ take: 10 })
     * 
     * // Only select the `idcompanie`
     * const companieWithIdcompanieOnly = await prisma.companie.findMany({ select: { idcompanie: true } })
     * 
     */
    findMany<T extends companieFindManyArgs>(args?: SelectSubset<T, companieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Companie.
     * @param {companieCreateArgs} args - Arguments to create a Companie.
     * @example
     * // Create one Companie
     * const Companie = await prisma.companie.create({
     *   data: {
     *     // ... data to create a Companie
     *   }
     * })
     * 
     */
    create<T extends companieCreateArgs>(args: SelectSubset<T, companieCreateArgs<ExtArgs>>): Prisma__companieClient<$Result.GetResult<Prisma.$companiePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {companieCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const companie = await prisma.companie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends companieCreateManyArgs>(args?: SelectSubset<T, companieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {companieCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const companie = await prisma.companie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `idcompanie`
     * const companieWithIdcompanieOnly = await prisma.companie.createManyAndReturn({
     *   select: { idcompanie: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends companieCreateManyAndReturnArgs>(args?: SelectSubset<T, companieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companiePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Companie.
     * @param {companieDeleteArgs} args - Arguments to delete one Companie.
     * @example
     * // Delete one Companie
     * const Companie = await prisma.companie.delete({
     *   where: {
     *     // ... filter to delete one Companie
     *   }
     * })
     * 
     */
    delete<T extends companieDeleteArgs>(args: SelectSubset<T, companieDeleteArgs<ExtArgs>>): Prisma__companieClient<$Result.GetResult<Prisma.$companiePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Companie.
     * @param {companieUpdateArgs} args - Arguments to update one Companie.
     * @example
     * // Update one Companie
     * const companie = await prisma.companie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends companieUpdateArgs>(args: SelectSubset<T, companieUpdateArgs<ExtArgs>>): Prisma__companieClient<$Result.GetResult<Prisma.$companiePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {companieDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.companie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends companieDeleteManyArgs>(args?: SelectSubset<T, companieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const companie = await prisma.companie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends companieUpdateManyArgs>(args: SelectSubset<T, companieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {companieUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const companie = await prisma.companie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `idcompanie`
     * const companieWithIdcompanieOnly = await prisma.companie.updateManyAndReturn({
     *   select: { idcompanie: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends companieUpdateManyAndReturnArgs>(args: SelectSubset<T, companieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companiePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Companie.
     * @param {companieUpsertArgs} args - Arguments to update or create a Companie.
     * @example
     * // Update or create a Companie
     * const companie = await prisma.companie.upsert({
     *   create: {
     *     // ... data to create a Companie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Companie we want to update
     *   }
     * })
     */
    upsert<T extends companieUpsertArgs>(args: SelectSubset<T, companieUpsertArgs<ExtArgs>>): Prisma__companieClient<$Result.GetResult<Prisma.$companiePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companieCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.companie.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends companieCountArgs>(
      args?: Subset<T, companieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Companie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanieAggregateArgs>(args: Subset<T, CompanieAggregateArgs>): Prisma.PrismaPromise<GetCompanieAggregateType<T>>

    /**
     * Group by Companie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends companieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companieGroupByArgs['orderBy'] }
        : { orderBy?: companieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, companieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the companie model
   */
  readonly fields: companieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for companie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    echipacompanie<T extends companie$echipacompanieArgs<ExtArgs> = {}>(args?: Subset<T, companie$echipacompanieArgs<ExtArgs>>): Prisma__echipacompanieClient<$Result.GetResult<Prisma.$echipacompaniePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subscriptie<T extends companie$subscriptieArgs<ExtArgs> = {}>(args?: Subset<T, companie$subscriptieArgs<ExtArgs>>): Prisma__subscriptieClient<$Result.GetResult<Prisma.$subscriptiePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    utilizator<T extends companie$utilizatorArgs<ExtArgs> = {}>(args?: Subset<T, companie$utilizatorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilizatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the companie model
   */ 
  interface companieFieldRefs {
    readonly idcompanie: FieldRef<"companie", 'Int'>
    readonly datacreare: FieldRef<"companie", 'DateTime'>
    readonly nume: FieldRef<"companie", 'String'>
    readonly status: FieldRef<"companie", 'String'>
    readonly focus: FieldRef<"companie", 'Boolean'>
    readonly notitedesprecompanie: FieldRef<"companie", 'String'>
    readonly tipsubscriptie: FieldRef<"companie", 'String'>
    readonly idechipa: FieldRef<"companie", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * companie findUnique
   */
  export type companieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companie
     */
    select?: companieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companie
     */
    omit?: companieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companieInclude<ExtArgs> | null
    /**
     * Filter, which companie to fetch.
     */
    where: companieWhereUniqueInput
  }

  /**
   * companie findUniqueOrThrow
   */
  export type companieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companie
     */
    select?: companieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companie
     */
    omit?: companieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companieInclude<ExtArgs> | null
    /**
     * Filter, which companie to fetch.
     */
    where: companieWhereUniqueInput
  }

  /**
   * companie findFirst
   */
  export type companieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companie
     */
    select?: companieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companie
     */
    omit?: companieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companieInclude<ExtArgs> | null
    /**
     * Filter, which companie to fetch.
     */
    where?: companieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companieOrderByWithRelationInput | companieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanieScalarFieldEnum | CompanieScalarFieldEnum[]
  }

  /**
   * companie findFirstOrThrow
   */
  export type companieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companie
     */
    select?: companieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companie
     */
    omit?: companieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companieInclude<ExtArgs> | null
    /**
     * Filter, which companie to fetch.
     */
    where?: companieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companieOrderByWithRelationInput | companieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanieScalarFieldEnum | CompanieScalarFieldEnum[]
  }

  /**
   * companie findMany
   */
  export type companieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companie
     */
    select?: companieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companie
     */
    omit?: companieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companieInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companieOrderByWithRelationInput | companieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companies.
     */
    cursor?: companieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    distinct?: CompanieScalarFieldEnum | CompanieScalarFieldEnum[]
  }

  /**
   * companie create
   */
  export type companieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companie
     */
    select?: companieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companie
     */
    omit?: companieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companieInclude<ExtArgs> | null
    /**
     * The data needed to create a companie.
     */
    data: XOR<companieCreateInput, companieUncheckedCreateInput>
  }

  /**
   * companie createMany
   */
  export type companieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companieCreateManyInput | companieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * companie createManyAndReturn
   */
  export type companieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companie
     */
    select?: companieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the companie
     */
    omit?: companieOmit<ExtArgs> | null
    /**
     * The data used to create many companies.
     */
    data: companieCreateManyInput | companieCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companieIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * companie update
   */
  export type companieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companie
     */
    select?: companieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companie
     */
    omit?: companieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companieInclude<ExtArgs> | null
    /**
     * The data needed to update a companie.
     */
    data: XOR<companieUpdateInput, companieUncheckedUpdateInput>
    /**
     * Choose, which companie to update.
     */
    where: companieWhereUniqueInput
  }

  /**
   * companie updateMany
   */
  export type companieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companieUpdateManyMutationInput, companieUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companieWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * companie updateManyAndReturn
   */
  export type companieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companie
     */
    select?: companieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the companie
     */
    omit?: companieOmit<ExtArgs> | null
    /**
     * The data used to update companies.
     */
    data: XOR<companieUpdateManyMutationInput, companieUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companieWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companieIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * companie upsert
   */
  export type companieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companie
     */
    select?: companieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companie
     */
    omit?: companieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companieInclude<ExtArgs> | null
    /**
     * The filter to search for the companie to update in case it exists.
     */
    where: companieWhereUniqueInput
    /**
     * In case the companie found by the `where` argument doesn't exist, create a new companie with this data.
     */
    create: XOR<companieCreateInput, companieUncheckedCreateInput>
    /**
     * In case the companie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companieUpdateInput, companieUncheckedUpdateInput>
  }

  /**
   * companie delete
   */
  export type companieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companie
     */
    select?: companieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companie
     */
    omit?: companieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companieInclude<ExtArgs> | null
    /**
     * Filter which companie to delete.
     */
    where: companieWhereUniqueInput
  }

  /**
   * companie deleteMany
   */
  export type companieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companieWhereInput
    /**
     * Limit how many companies to delete.
     */
    limit?: number
  }

  /**
   * companie.echipacompanie
   */
  export type companie$echipacompanieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the echipacompanie
     */
    select?: echipacompanieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the echipacompanie
     */
    omit?: echipacompanieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: echipacompanieInclude<ExtArgs> | null
    where?: echipacompanieWhereInput
  }

  /**
   * companie.subscriptie
   */
  export type companie$subscriptieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptie
     */
    select?: subscriptieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptie
     */
    omit?: subscriptieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptieInclude<ExtArgs> | null
    where?: subscriptieWhereInput
  }

  /**
   * companie.utilizator
   */
  export type companie$utilizatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizator
     */
    select?: utilizatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizator
     */
    omit?: utilizatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatorInclude<ExtArgs> | null
    where?: utilizatorWhereInput
    orderBy?: utilizatorOrderByWithRelationInput | utilizatorOrderByWithRelationInput[]
    cursor?: utilizatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UtilizatorScalarFieldEnum | UtilizatorScalarFieldEnum[]
  }

  /**
   * companie without action
   */
  export type companieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companie
     */
    select?: companieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companie
     */
    omit?: companieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companieInclude<ExtArgs> | null
  }


  /**
   * Model echipacompanie
   */

  export type AggregateEchipacompanie = {
    _count: EchipacompanieCountAggregateOutputType | null
    _avg: EchipacompanieAvgAggregateOutputType | null
    _sum: EchipacompanieSumAggregateOutputType | null
    _min: EchipacompanieMinAggregateOutputType | null
    _max: EchipacompanieMaxAggregateOutputType | null
  }

  export type EchipacompanieAvgAggregateOutputType = {
    idechipa: number | null
  }

  export type EchipacompanieSumAggregateOutputType = {
    idechipa: number | null
  }

  export type EchipacompanieMinAggregateOutputType = {
    idechipa: number | null
    nume: string | null
  }

  export type EchipacompanieMaxAggregateOutputType = {
    idechipa: number | null
    nume: string | null
  }

  export type EchipacompanieCountAggregateOutputType = {
    idechipa: number
    nume: number
    _all: number
  }


  export type EchipacompanieAvgAggregateInputType = {
    idechipa?: true
  }

  export type EchipacompanieSumAggregateInputType = {
    idechipa?: true
  }

  export type EchipacompanieMinAggregateInputType = {
    idechipa?: true
    nume?: true
  }

  export type EchipacompanieMaxAggregateInputType = {
    idechipa?: true
    nume?: true
  }

  export type EchipacompanieCountAggregateInputType = {
    idechipa?: true
    nume?: true
    _all?: true
  }

  export type EchipacompanieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which echipacompanie to aggregate.
     */
    where?: echipacompanieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of echipacompanies to fetch.
     */
    orderBy?: echipacompanieOrderByWithRelationInput | echipacompanieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: echipacompanieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` echipacompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` echipacompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned echipacompanies
    **/
    _count?: true | EchipacompanieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EchipacompanieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EchipacompanieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EchipacompanieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EchipacompanieMaxAggregateInputType
  }

  export type GetEchipacompanieAggregateType<T extends EchipacompanieAggregateArgs> = {
        [P in keyof T & keyof AggregateEchipacompanie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEchipacompanie[P]>
      : GetScalarType<T[P], AggregateEchipacompanie[P]>
  }




  export type echipacompanieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: echipacompanieWhereInput
    orderBy?: echipacompanieOrderByWithAggregationInput | echipacompanieOrderByWithAggregationInput[]
    by: EchipacompanieScalarFieldEnum[] | EchipacompanieScalarFieldEnum
    having?: echipacompanieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EchipacompanieCountAggregateInputType | true
    _avg?: EchipacompanieAvgAggregateInputType
    _sum?: EchipacompanieSumAggregateInputType
    _min?: EchipacompanieMinAggregateInputType
    _max?: EchipacompanieMaxAggregateInputType
  }

  export type EchipacompanieGroupByOutputType = {
    idechipa: number
    nume: string
    _count: EchipacompanieCountAggregateOutputType | null
    _avg: EchipacompanieAvgAggregateOutputType | null
    _sum: EchipacompanieSumAggregateOutputType | null
    _min: EchipacompanieMinAggregateOutputType | null
    _max: EchipacompanieMaxAggregateOutputType | null
  }

  type GetEchipacompanieGroupByPayload<T extends echipacompanieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EchipacompanieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EchipacompanieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EchipacompanieGroupByOutputType[P]>
            : GetScalarType<T[P], EchipacompanieGroupByOutputType[P]>
        }
      >
    >


  export type echipacompanieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idechipa?: boolean
    nume?: boolean
    companie?: boolean | echipacompanie$companieArgs<ExtArgs>
    membruechipa?: boolean | echipacompanie$membruechipaArgs<ExtArgs>
    _count?: boolean | EchipacompanieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["echipacompanie"]>

  export type echipacompanieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idechipa?: boolean
    nume?: boolean
  }, ExtArgs["result"]["echipacompanie"]>

  export type echipacompanieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idechipa?: boolean
    nume?: boolean
  }, ExtArgs["result"]["echipacompanie"]>

  export type echipacompanieSelectScalar = {
    idechipa?: boolean
    nume?: boolean
  }

  export type echipacompanieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idechipa" | "nume", ExtArgs["result"]["echipacompanie"]>
  export type echipacompanieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companie?: boolean | echipacompanie$companieArgs<ExtArgs>
    membruechipa?: boolean | echipacompanie$membruechipaArgs<ExtArgs>
    _count?: boolean | EchipacompanieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type echipacompanieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type echipacompanieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $echipacompaniePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "echipacompanie"
    objects: {
      companie: Prisma.$companiePayload<ExtArgs>[]
      membruechipa: Prisma.$membruechipaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idechipa: number
      nume: string
    }, ExtArgs["result"]["echipacompanie"]>
    composites: {}
  }

  type echipacompanieGetPayload<S extends boolean | null | undefined | echipacompanieDefaultArgs> = $Result.GetResult<Prisma.$echipacompaniePayload, S>

  type echipacompanieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<echipacompanieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EchipacompanieCountAggregateInputType | true
    }

  export interface echipacompanieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['echipacompanie'], meta: { name: 'echipacompanie' } }
    /**
     * Find zero or one Echipacompanie that matches the filter.
     * @param {echipacompanieFindUniqueArgs} args - Arguments to find a Echipacompanie
     * @example
     * // Get one Echipacompanie
     * const echipacompanie = await prisma.echipacompanie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends echipacompanieFindUniqueArgs>(args: SelectSubset<T, echipacompanieFindUniqueArgs<ExtArgs>>): Prisma__echipacompanieClient<$Result.GetResult<Prisma.$echipacompaniePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Echipacompanie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {echipacompanieFindUniqueOrThrowArgs} args - Arguments to find a Echipacompanie
     * @example
     * // Get one Echipacompanie
     * const echipacompanie = await prisma.echipacompanie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends echipacompanieFindUniqueOrThrowArgs>(args: SelectSubset<T, echipacompanieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__echipacompanieClient<$Result.GetResult<Prisma.$echipacompaniePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Echipacompanie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {echipacompanieFindFirstArgs} args - Arguments to find a Echipacompanie
     * @example
     * // Get one Echipacompanie
     * const echipacompanie = await prisma.echipacompanie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends echipacompanieFindFirstArgs>(args?: SelectSubset<T, echipacompanieFindFirstArgs<ExtArgs>>): Prisma__echipacompanieClient<$Result.GetResult<Prisma.$echipacompaniePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Echipacompanie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {echipacompanieFindFirstOrThrowArgs} args - Arguments to find a Echipacompanie
     * @example
     * // Get one Echipacompanie
     * const echipacompanie = await prisma.echipacompanie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends echipacompanieFindFirstOrThrowArgs>(args?: SelectSubset<T, echipacompanieFindFirstOrThrowArgs<ExtArgs>>): Prisma__echipacompanieClient<$Result.GetResult<Prisma.$echipacompaniePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Echipacompanies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {echipacompanieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Echipacompanies
     * const echipacompanies = await prisma.echipacompanie.findMany()
     * 
     * // Get first 10 Echipacompanies
     * const echipacompanies = await prisma.echipacompanie.findMany({ take: 10 })
     * 
     * // Only select the `idechipa`
     * const echipacompanieWithIdechipaOnly = await prisma.echipacompanie.findMany({ select: { idechipa: true } })
     * 
     */
    findMany<T extends echipacompanieFindManyArgs>(args?: SelectSubset<T, echipacompanieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$echipacompaniePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Echipacompanie.
     * @param {echipacompanieCreateArgs} args - Arguments to create a Echipacompanie.
     * @example
     * // Create one Echipacompanie
     * const Echipacompanie = await prisma.echipacompanie.create({
     *   data: {
     *     // ... data to create a Echipacompanie
     *   }
     * })
     * 
     */
    create<T extends echipacompanieCreateArgs>(args: SelectSubset<T, echipacompanieCreateArgs<ExtArgs>>): Prisma__echipacompanieClient<$Result.GetResult<Prisma.$echipacompaniePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Echipacompanies.
     * @param {echipacompanieCreateManyArgs} args - Arguments to create many Echipacompanies.
     * @example
     * // Create many Echipacompanies
     * const echipacompanie = await prisma.echipacompanie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends echipacompanieCreateManyArgs>(args?: SelectSubset<T, echipacompanieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Echipacompanies and returns the data saved in the database.
     * @param {echipacompanieCreateManyAndReturnArgs} args - Arguments to create many Echipacompanies.
     * @example
     * // Create many Echipacompanies
     * const echipacompanie = await prisma.echipacompanie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Echipacompanies and only return the `idechipa`
     * const echipacompanieWithIdechipaOnly = await prisma.echipacompanie.createManyAndReturn({
     *   select: { idechipa: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends echipacompanieCreateManyAndReturnArgs>(args?: SelectSubset<T, echipacompanieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$echipacompaniePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Echipacompanie.
     * @param {echipacompanieDeleteArgs} args - Arguments to delete one Echipacompanie.
     * @example
     * // Delete one Echipacompanie
     * const Echipacompanie = await prisma.echipacompanie.delete({
     *   where: {
     *     // ... filter to delete one Echipacompanie
     *   }
     * })
     * 
     */
    delete<T extends echipacompanieDeleteArgs>(args: SelectSubset<T, echipacompanieDeleteArgs<ExtArgs>>): Prisma__echipacompanieClient<$Result.GetResult<Prisma.$echipacompaniePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Echipacompanie.
     * @param {echipacompanieUpdateArgs} args - Arguments to update one Echipacompanie.
     * @example
     * // Update one Echipacompanie
     * const echipacompanie = await prisma.echipacompanie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends echipacompanieUpdateArgs>(args: SelectSubset<T, echipacompanieUpdateArgs<ExtArgs>>): Prisma__echipacompanieClient<$Result.GetResult<Prisma.$echipacompaniePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Echipacompanies.
     * @param {echipacompanieDeleteManyArgs} args - Arguments to filter Echipacompanies to delete.
     * @example
     * // Delete a few Echipacompanies
     * const { count } = await prisma.echipacompanie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends echipacompanieDeleteManyArgs>(args?: SelectSubset<T, echipacompanieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Echipacompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {echipacompanieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Echipacompanies
     * const echipacompanie = await prisma.echipacompanie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends echipacompanieUpdateManyArgs>(args: SelectSubset<T, echipacompanieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Echipacompanies and returns the data updated in the database.
     * @param {echipacompanieUpdateManyAndReturnArgs} args - Arguments to update many Echipacompanies.
     * @example
     * // Update many Echipacompanies
     * const echipacompanie = await prisma.echipacompanie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Echipacompanies and only return the `idechipa`
     * const echipacompanieWithIdechipaOnly = await prisma.echipacompanie.updateManyAndReturn({
     *   select: { idechipa: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends echipacompanieUpdateManyAndReturnArgs>(args: SelectSubset<T, echipacompanieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$echipacompaniePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Echipacompanie.
     * @param {echipacompanieUpsertArgs} args - Arguments to update or create a Echipacompanie.
     * @example
     * // Update or create a Echipacompanie
     * const echipacompanie = await prisma.echipacompanie.upsert({
     *   create: {
     *     // ... data to create a Echipacompanie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Echipacompanie we want to update
     *   }
     * })
     */
    upsert<T extends echipacompanieUpsertArgs>(args: SelectSubset<T, echipacompanieUpsertArgs<ExtArgs>>): Prisma__echipacompanieClient<$Result.GetResult<Prisma.$echipacompaniePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Echipacompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {echipacompanieCountArgs} args - Arguments to filter Echipacompanies to count.
     * @example
     * // Count the number of Echipacompanies
     * const count = await prisma.echipacompanie.count({
     *   where: {
     *     // ... the filter for the Echipacompanies we want to count
     *   }
     * })
    **/
    count<T extends echipacompanieCountArgs>(
      args?: Subset<T, echipacompanieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EchipacompanieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Echipacompanie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EchipacompanieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EchipacompanieAggregateArgs>(args: Subset<T, EchipacompanieAggregateArgs>): Prisma.PrismaPromise<GetEchipacompanieAggregateType<T>>

    /**
     * Group by Echipacompanie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {echipacompanieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends echipacompanieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: echipacompanieGroupByArgs['orderBy'] }
        : { orderBy?: echipacompanieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, echipacompanieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEchipacompanieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the echipacompanie model
   */
  readonly fields: echipacompanieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for echipacompanie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__echipacompanieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companie<T extends echipacompanie$companieArgs<ExtArgs> = {}>(args?: Subset<T, echipacompanie$companieArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    membruechipa<T extends echipacompanie$membruechipaArgs<ExtArgs> = {}>(args?: Subset<T, echipacompanie$membruechipaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$membruechipaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the echipacompanie model
   */ 
  interface echipacompanieFieldRefs {
    readonly idechipa: FieldRef<"echipacompanie", 'Int'>
    readonly nume: FieldRef<"echipacompanie", 'String'>
  }
    

  // Custom InputTypes
  /**
   * echipacompanie findUnique
   */
  export type echipacompanieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the echipacompanie
     */
    select?: echipacompanieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the echipacompanie
     */
    omit?: echipacompanieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: echipacompanieInclude<ExtArgs> | null
    /**
     * Filter, which echipacompanie to fetch.
     */
    where: echipacompanieWhereUniqueInput
  }

  /**
   * echipacompanie findUniqueOrThrow
   */
  export type echipacompanieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the echipacompanie
     */
    select?: echipacompanieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the echipacompanie
     */
    omit?: echipacompanieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: echipacompanieInclude<ExtArgs> | null
    /**
     * Filter, which echipacompanie to fetch.
     */
    where: echipacompanieWhereUniqueInput
  }

  /**
   * echipacompanie findFirst
   */
  export type echipacompanieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the echipacompanie
     */
    select?: echipacompanieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the echipacompanie
     */
    omit?: echipacompanieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: echipacompanieInclude<ExtArgs> | null
    /**
     * Filter, which echipacompanie to fetch.
     */
    where?: echipacompanieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of echipacompanies to fetch.
     */
    orderBy?: echipacompanieOrderByWithRelationInput | echipacompanieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for echipacompanies.
     */
    cursor?: echipacompanieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` echipacompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` echipacompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of echipacompanies.
     */
    distinct?: EchipacompanieScalarFieldEnum | EchipacompanieScalarFieldEnum[]
  }

  /**
   * echipacompanie findFirstOrThrow
   */
  export type echipacompanieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the echipacompanie
     */
    select?: echipacompanieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the echipacompanie
     */
    omit?: echipacompanieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: echipacompanieInclude<ExtArgs> | null
    /**
     * Filter, which echipacompanie to fetch.
     */
    where?: echipacompanieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of echipacompanies to fetch.
     */
    orderBy?: echipacompanieOrderByWithRelationInput | echipacompanieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for echipacompanies.
     */
    cursor?: echipacompanieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` echipacompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` echipacompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of echipacompanies.
     */
    distinct?: EchipacompanieScalarFieldEnum | EchipacompanieScalarFieldEnum[]
  }

  /**
   * echipacompanie findMany
   */
  export type echipacompanieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the echipacompanie
     */
    select?: echipacompanieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the echipacompanie
     */
    omit?: echipacompanieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: echipacompanieInclude<ExtArgs> | null
    /**
     * Filter, which echipacompanies to fetch.
     */
    where?: echipacompanieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of echipacompanies to fetch.
     */
    orderBy?: echipacompanieOrderByWithRelationInput | echipacompanieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing echipacompanies.
     */
    cursor?: echipacompanieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` echipacompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` echipacompanies.
     */
    skip?: number
    distinct?: EchipacompanieScalarFieldEnum | EchipacompanieScalarFieldEnum[]
  }

  /**
   * echipacompanie create
   */
  export type echipacompanieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the echipacompanie
     */
    select?: echipacompanieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the echipacompanie
     */
    omit?: echipacompanieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: echipacompanieInclude<ExtArgs> | null
    /**
     * The data needed to create a echipacompanie.
     */
    data: XOR<echipacompanieCreateInput, echipacompanieUncheckedCreateInput>
  }

  /**
   * echipacompanie createMany
   */
  export type echipacompanieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many echipacompanies.
     */
    data: echipacompanieCreateManyInput | echipacompanieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * echipacompanie createManyAndReturn
   */
  export type echipacompanieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the echipacompanie
     */
    select?: echipacompanieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the echipacompanie
     */
    omit?: echipacompanieOmit<ExtArgs> | null
    /**
     * The data used to create many echipacompanies.
     */
    data: echipacompanieCreateManyInput | echipacompanieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * echipacompanie update
   */
  export type echipacompanieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the echipacompanie
     */
    select?: echipacompanieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the echipacompanie
     */
    omit?: echipacompanieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: echipacompanieInclude<ExtArgs> | null
    /**
     * The data needed to update a echipacompanie.
     */
    data: XOR<echipacompanieUpdateInput, echipacompanieUncheckedUpdateInput>
    /**
     * Choose, which echipacompanie to update.
     */
    where: echipacompanieWhereUniqueInput
  }

  /**
   * echipacompanie updateMany
   */
  export type echipacompanieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update echipacompanies.
     */
    data: XOR<echipacompanieUpdateManyMutationInput, echipacompanieUncheckedUpdateManyInput>
    /**
     * Filter which echipacompanies to update
     */
    where?: echipacompanieWhereInput
    /**
     * Limit how many echipacompanies to update.
     */
    limit?: number
  }

  /**
   * echipacompanie updateManyAndReturn
   */
  export type echipacompanieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the echipacompanie
     */
    select?: echipacompanieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the echipacompanie
     */
    omit?: echipacompanieOmit<ExtArgs> | null
    /**
     * The data used to update echipacompanies.
     */
    data: XOR<echipacompanieUpdateManyMutationInput, echipacompanieUncheckedUpdateManyInput>
    /**
     * Filter which echipacompanies to update
     */
    where?: echipacompanieWhereInput
    /**
     * Limit how many echipacompanies to update.
     */
    limit?: number
  }

  /**
   * echipacompanie upsert
   */
  export type echipacompanieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the echipacompanie
     */
    select?: echipacompanieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the echipacompanie
     */
    omit?: echipacompanieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: echipacompanieInclude<ExtArgs> | null
    /**
     * The filter to search for the echipacompanie to update in case it exists.
     */
    where: echipacompanieWhereUniqueInput
    /**
     * In case the echipacompanie found by the `where` argument doesn't exist, create a new echipacompanie with this data.
     */
    create: XOR<echipacompanieCreateInput, echipacompanieUncheckedCreateInput>
    /**
     * In case the echipacompanie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<echipacompanieUpdateInput, echipacompanieUncheckedUpdateInput>
  }

  /**
   * echipacompanie delete
   */
  export type echipacompanieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the echipacompanie
     */
    select?: echipacompanieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the echipacompanie
     */
    omit?: echipacompanieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: echipacompanieInclude<ExtArgs> | null
    /**
     * Filter which echipacompanie to delete.
     */
    where: echipacompanieWhereUniqueInput
  }

  /**
   * echipacompanie deleteMany
   */
  export type echipacompanieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which echipacompanies to delete
     */
    where?: echipacompanieWhereInput
    /**
     * Limit how many echipacompanies to delete.
     */
    limit?: number
  }

  /**
   * echipacompanie.companie
   */
  export type echipacompanie$companieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companie
     */
    select?: companieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companie
     */
    omit?: companieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companieInclude<ExtArgs> | null
    where?: companieWhereInput
    orderBy?: companieOrderByWithRelationInput | companieOrderByWithRelationInput[]
    cursor?: companieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanieScalarFieldEnum | CompanieScalarFieldEnum[]
  }

  /**
   * echipacompanie.membruechipa
   */
  export type echipacompanie$membruechipaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membruechipa
     */
    select?: membruechipaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the membruechipa
     */
    omit?: membruechipaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membruechipaInclude<ExtArgs> | null
    where?: membruechipaWhereInput
    orderBy?: membruechipaOrderByWithRelationInput | membruechipaOrderByWithRelationInput[]
    cursor?: membruechipaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembruechipaScalarFieldEnum | MembruechipaScalarFieldEnum[]
  }

  /**
   * echipacompanie without action
   */
  export type echipacompanieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the echipacompanie
     */
    select?: echipacompanieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the echipacompanie
     */
    omit?: echipacompanieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: echipacompanieInclude<ExtArgs> | null
  }


  /**
   * Model istorictichet
   */

  export type AggregateIstorictichet = {
    _count: IstorictichetCountAggregateOutputType | null
    _avg: IstorictichetAvgAggregateOutputType | null
    _sum: IstorictichetSumAggregateOutputType | null
    _min: IstorictichetMinAggregateOutputType | null
    _max: IstorictichetMaxAggregateOutputType | null
  }

  export type IstorictichetAvgAggregateOutputType = {
    idistoric: number | null
    idtichet: number | null
  }

  export type IstorictichetSumAggregateOutputType = {
    idistoric: number | null
    idtichet: number | null
  }

  export type IstorictichetMinAggregateOutputType = {
    idistoric: number | null
    idtichet: number | null
    datacreare: Date | null
    modificare: string | null
  }

  export type IstorictichetMaxAggregateOutputType = {
    idistoric: number | null
    idtichet: number | null
    datacreare: Date | null
    modificare: string | null
  }

  export type IstorictichetCountAggregateOutputType = {
    idistoric: number
    idtichet: number
    datacreare: number
    modificare: number
    _all: number
  }


  export type IstorictichetAvgAggregateInputType = {
    idistoric?: true
    idtichet?: true
  }

  export type IstorictichetSumAggregateInputType = {
    idistoric?: true
    idtichet?: true
  }

  export type IstorictichetMinAggregateInputType = {
    idistoric?: true
    idtichet?: true
    datacreare?: true
    modificare?: true
  }

  export type IstorictichetMaxAggregateInputType = {
    idistoric?: true
    idtichet?: true
    datacreare?: true
    modificare?: true
  }

  export type IstorictichetCountAggregateInputType = {
    idistoric?: true
    idtichet?: true
    datacreare?: true
    modificare?: true
    _all?: true
  }

  export type IstorictichetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which istorictichet to aggregate.
     */
    where?: istorictichetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of istorictichets to fetch.
     */
    orderBy?: istorictichetOrderByWithRelationInput | istorictichetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: istorictichetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` istorictichets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` istorictichets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned istorictichets
    **/
    _count?: true | IstorictichetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IstorictichetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IstorictichetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IstorictichetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IstorictichetMaxAggregateInputType
  }

  export type GetIstorictichetAggregateType<T extends IstorictichetAggregateArgs> = {
        [P in keyof T & keyof AggregateIstorictichet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIstorictichet[P]>
      : GetScalarType<T[P], AggregateIstorictichet[P]>
  }




  export type istorictichetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: istorictichetWhereInput
    orderBy?: istorictichetOrderByWithAggregationInput | istorictichetOrderByWithAggregationInput[]
    by: IstorictichetScalarFieldEnum[] | IstorictichetScalarFieldEnum
    having?: istorictichetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IstorictichetCountAggregateInputType | true
    _avg?: IstorictichetAvgAggregateInputType
    _sum?: IstorictichetSumAggregateInputType
    _min?: IstorictichetMinAggregateInputType
    _max?: IstorictichetMaxAggregateInputType
  }

  export type IstorictichetGroupByOutputType = {
    idistoric: number
    idtichet: number
    datacreare: Date
    modificare: string
    _count: IstorictichetCountAggregateOutputType | null
    _avg: IstorictichetAvgAggregateOutputType | null
    _sum: IstorictichetSumAggregateOutputType | null
    _min: IstorictichetMinAggregateOutputType | null
    _max: IstorictichetMaxAggregateOutputType | null
  }

  type GetIstorictichetGroupByPayload<T extends istorictichetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IstorictichetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IstorictichetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IstorictichetGroupByOutputType[P]>
            : GetScalarType<T[P], IstorictichetGroupByOutputType[P]>
        }
      >
    >


  export type istorictichetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idistoric?: boolean
    idtichet?: boolean
    datacreare?: boolean
    modificare?: boolean
    tichet?: boolean | tichetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["istorictichet"]>

  export type istorictichetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idistoric?: boolean
    idtichet?: boolean
    datacreare?: boolean
    modificare?: boolean
    tichet?: boolean | tichetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["istorictichet"]>

  export type istorictichetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idistoric?: boolean
    idtichet?: boolean
    datacreare?: boolean
    modificare?: boolean
    tichet?: boolean | tichetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["istorictichet"]>

  export type istorictichetSelectScalar = {
    idistoric?: boolean
    idtichet?: boolean
    datacreare?: boolean
    modificare?: boolean
  }

  export type istorictichetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idistoric" | "idtichet" | "datacreare" | "modificare", ExtArgs["result"]["istorictichet"]>
  export type istorictichetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tichet?: boolean | tichetDefaultArgs<ExtArgs>
  }
  export type istorictichetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tichet?: boolean | tichetDefaultArgs<ExtArgs>
  }
  export type istorictichetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tichet?: boolean | tichetDefaultArgs<ExtArgs>
  }

  export type $istorictichetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "istorictichet"
    objects: {
      tichet: Prisma.$tichetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idistoric: number
      idtichet: number
      datacreare: Date
      modificare: string
    }, ExtArgs["result"]["istorictichet"]>
    composites: {}
  }

  type istorictichetGetPayload<S extends boolean | null | undefined | istorictichetDefaultArgs> = $Result.GetResult<Prisma.$istorictichetPayload, S>

  type istorictichetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<istorictichetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IstorictichetCountAggregateInputType | true
    }

  export interface istorictichetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['istorictichet'], meta: { name: 'istorictichet' } }
    /**
     * Find zero or one Istorictichet that matches the filter.
     * @param {istorictichetFindUniqueArgs} args - Arguments to find a Istorictichet
     * @example
     * // Get one Istorictichet
     * const istorictichet = await prisma.istorictichet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends istorictichetFindUniqueArgs>(args: SelectSubset<T, istorictichetFindUniqueArgs<ExtArgs>>): Prisma__istorictichetClient<$Result.GetResult<Prisma.$istorictichetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Istorictichet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {istorictichetFindUniqueOrThrowArgs} args - Arguments to find a Istorictichet
     * @example
     * // Get one Istorictichet
     * const istorictichet = await prisma.istorictichet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends istorictichetFindUniqueOrThrowArgs>(args: SelectSubset<T, istorictichetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__istorictichetClient<$Result.GetResult<Prisma.$istorictichetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Istorictichet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {istorictichetFindFirstArgs} args - Arguments to find a Istorictichet
     * @example
     * // Get one Istorictichet
     * const istorictichet = await prisma.istorictichet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends istorictichetFindFirstArgs>(args?: SelectSubset<T, istorictichetFindFirstArgs<ExtArgs>>): Prisma__istorictichetClient<$Result.GetResult<Prisma.$istorictichetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Istorictichet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {istorictichetFindFirstOrThrowArgs} args - Arguments to find a Istorictichet
     * @example
     * // Get one Istorictichet
     * const istorictichet = await prisma.istorictichet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends istorictichetFindFirstOrThrowArgs>(args?: SelectSubset<T, istorictichetFindFirstOrThrowArgs<ExtArgs>>): Prisma__istorictichetClient<$Result.GetResult<Prisma.$istorictichetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Istorictichets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {istorictichetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Istorictichets
     * const istorictichets = await prisma.istorictichet.findMany()
     * 
     * // Get first 10 Istorictichets
     * const istorictichets = await prisma.istorictichet.findMany({ take: 10 })
     * 
     * // Only select the `idistoric`
     * const istorictichetWithIdistoricOnly = await prisma.istorictichet.findMany({ select: { idistoric: true } })
     * 
     */
    findMany<T extends istorictichetFindManyArgs>(args?: SelectSubset<T, istorictichetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$istorictichetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Istorictichet.
     * @param {istorictichetCreateArgs} args - Arguments to create a Istorictichet.
     * @example
     * // Create one Istorictichet
     * const Istorictichet = await prisma.istorictichet.create({
     *   data: {
     *     // ... data to create a Istorictichet
     *   }
     * })
     * 
     */
    create<T extends istorictichetCreateArgs>(args: SelectSubset<T, istorictichetCreateArgs<ExtArgs>>): Prisma__istorictichetClient<$Result.GetResult<Prisma.$istorictichetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Istorictichets.
     * @param {istorictichetCreateManyArgs} args - Arguments to create many Istorictichets.
     * @example
     * // Create many Istorictichets
     * const istorictichet = await prisma.istorictichet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends istorictichetCreateManyArgs>(args?: SelectSubset<T, istorictichetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Istorictichets and returns the data saved in the database.
     * @param {istorictichetCreateManyAndReturnArgs} args - Arguments to create many Istorictichets.
     * @example
     * // Create many Istorictichets
     * const istorictichet = await prisma.istorictichet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Istorictichets and only return the `idistoric`
     * const istorictichetWithIdistoricOnly = await prisma.istorictichet.createManyAndReturn({
     *   select: { idistoric: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends istorictichetCreateManyAndReturnArgs>(args?: SelectSubset<T, istorictichetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$istorictichetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Istorictichet.
     * @param {istorictichetDeleteArgs} args - Arguments to delete one Istorictichet.
     * @example
     * // Delete one Istorictichet
     * const Istorictichet = await prisma.istorictichet.delete({
     *   where: {
     *     // ... filter to delete one Istorictichet
     *   }
     * })
     * 
     */
    delete<T extends istorictichetDeleteArgs>(args: SelectSubset<T, istorictichetDeleteArgs<ExtArgs>>): Prisma__istorictichetClient<$Result.GetResult<Prisma.$istorictichetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Istorictichet.
     * @param {istorictichetUpdateArgs} args - Arguments to update one Istorictichet.
     * @example
     * // Update one Istorictichet
     * const istorictichet = await prisma.istorictichet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends istorictichetUpdateArgs>(args: SelectSubset<T, istorictichetUpdateArgs<ExtArgs>>): Prisma__istorictichetClient<$Result.GetResult<Prisma.$istorictichetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Istorictichets.
     * @param {istorictichetDeleteManyArgs} args - Arguments to filter Istorictichets to delete.
     * @example
     * // Delete a few Istorictichets
     * const { count } = await prisma.istorictichet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends istorictichetDeleteManyArgs>(args?: SelectSubset<T, istorictichetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Istorictichets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {istorictichetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Istorictichets
     * const istorictichet = await prisma.istorictichet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends istorictichetUpdateManyArgs>(args: SelectSubset<T, istorictichetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Istorictichets and returns the data updated in the database.
     * @param {istorictichetUpdateManyAndReturnArgs} args - Arguments to update many Istorictichets.
     * @example
     * // Update many Istorictichets
     * const istorictichet = await prisma.istorictichet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Istorictichets and only return the `idistoric`
     * const istorictichetWithIdistoricOnly = await prisma.istorictichet.updateManyAndReturn({
     *   select: { idistoric: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends istorictichetUpdateManyAndReturnArgs>(args: SelectSubset<T, istorictichetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$istorictichetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Istorictichet.
     * @param {istorictichetUpsertArgs} args - Arguments to update or create a Istorictichet.
     * @example
     * // Update or create a Istorictichet
     * const istorictichet = await prisma.istorictichet.upsert({
     *   create: {
     *     // ... data to create a Istorictichet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Istorictichet we want to update
     *   }
     * })
     */
    upsert<T extends istorictichetUpsertArgs>(args: SelectSubset<T, istorictichetUpsertArgs<ExtArgs>>): Prisma__istorictichetClient<$Result.GetResult<Prisma.$istorictichetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Istorictichets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {istorictichetCountArgs} args - Arguments to filter Istorictichets to count.
     * @example
     * // Count the number of Istorictichets
     * const count = await prisma.istorictichet.count({
     *   where: {
     *     // ... the filter for the Istorictichets we want to count
     *   }
     * })
    **/
    count<T extends istorictichetCountArgs>(
      args?: Subset<T, istorictichetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IstorictichetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Istorictichet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IstorictichetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IstorictichetAggregateArgs>(args: Subset<T, IstorictichetAggregateArgs>): Prisma.PrismaPromise<GetIstorictichetAggregateType<T>>

    /**
     * Group by Istorictichet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {istorictichetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends istorictichetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: istorictichetGroupByArgs['orderBy'] }
        : { orderBy?: istorictichetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, istorictichetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIstorictichetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the istorictichet model
   */
  readonly fields: istorictichetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for istorictichet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__istorictichetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tichet<T extends tichetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tichetDefaultArgs<ExtArgs>>): Prisma__tichetClient<$Result.GetResult<Prisma.$tichetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the istorictichet model
   */ 
  interface istorictichetFieldRefs {
    readonly idistoric: FieldRef<"istorictichet", 'Int'>
    readonly idtichet: FieldRef<"istorictichet", 'Int'>
    readonly datacreare: FieldRef<"istorictichet", 'DateTime'>
    readonly modificare: FieldRef<"istorictichet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * istorictichet findUnique
   */
  export type istorictichetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the istorictichet
     */
    select?: istorictichetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the istorictichet
     */
    omit?: istorictichetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: istorictichetInclude<ExtArgs> | null
    /**
     * Filter, which istorictichet to fetch.
     */
    where: istorictichetWhereUniqueInput
  }

  /**
   * istorictichet findUniqueOrThrow
   */
  export type istorictichetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the istorictichet
     */
    select?: istorictichetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the istorictichet
     */
    omit?: istorictichetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: istorictichetInclude<ExtArgs> | null
    /**
     * Filter, which istorictichet to fetch.
     */
    where: istorictichetWhereUniqueInput
  }

  /**
   * istorictichet findFirst
   */
  export type istorictichetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the istorictichet
     */
    select?: istorictichetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the istorictichet
     */
    omit?: istorictichetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: istorictichetInclude<ExtArgs> | null
    /**
     * Filter, which istorictichet to fetch.
     */
    where?: istorictichetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of istorictichets to fetch.
     */
    orderBy?: istorictichetOrderByWithRelationInput | istorictichetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for istorictichets.
     */
    cursor?: istorictichetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` istorictichets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` istorictichets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of istorictichets.
     */
    distinct?: IstorictichetScalarFieldEnum | IstorictichetScalarFieldEnum[]
  }

  /**
   * istorictichet findFirstOrThrow
   */
  export type istorictichetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the istorictichet
     */
    select?: istorictichetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the istorictichet
     */
    omit?: istorictichetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: istorictichetInclude<ExtArgs> | null
    /**
     * Filter, which istorictichet to fetch.
     */
    where?: istorictichetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of istorictichets to fetch.
     */
    orderBy?: istorictichetOrderByWithRelationInput | istorictichetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for istorictichets.
     */
    cursor?: istorictichetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` istorictichets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` istorictichets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of istorictichets.
     */
    distinct?: IstorictichetScalarFieldEnum | IstorictichetScalarFieldEnum[]
  }

  /**
   * istorictichet findMany
   */
  export type istorictichetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the istorictichet
     */
    select?: istorictichetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the istorictichet
     */
    omit?: istorictichetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: istorictichetInclude<ExtArgs> | null
    /**
     * Filter, which istorictichets to fetch.
     */
    where?: istorictichetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of istorictichets to fetch.
     */
    orderBy?: istorictichetOrderByWithRelationInput | istorictichetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing istorictichets.
     */
    cursor?: istorictichetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` istorictichets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` istorictichets.
     */
    skip?: number
    distinct?: IstorictichetScalarFieldEnum | IstorictichetScalarFieldEnum[]
  }

  /**
   * istorictichet create
   */
  export type istorictichetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the istorictichet
     */
    select?: istorictichetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the istorictichet
     */
    omit?: istorictichetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: istorictichetInclude<ExtArgs> | null
    /**
     * The data needed to create a istorictichet.
     */
    data: XOR<istorictichetCreateInput, istorictichetUncheckedCreateInput>
  }

  /**
   * istorictichet createMany
   */
  export type istorictichetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many istorictichets.
     */
    data: istorictichetCreateManyInput | istorictichetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * istorictichet createManyAndReturn
   */
  export type istorictichetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the istorictichet
     */
    select?: istorictichetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the istorictichet
     */
    omit?: istorictichetOmit<ExtArgs> | null
    /**
     * The data used to create many istorictichets.
     */
    data: istorictichetCreateManyInput | istorictichetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: istorictichetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * istorictichet update
   */
  export type istorictichetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the istorictichet
     */
    select?: istorictichetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the istorictichet
     */
    omit?: istorictichetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: istorictichetInclude<ExtArgs> | null
    /**
     * The data needed to update a istorictichet.
     */
    data: XOR<istorictichetUpdateInput, istorictichetUncheckedUpdateInput>
    /**
     * Choose, which istorictichet to update.
     */
    where: istorictichetWhereUniqueInput
  }

  /**
   * istorictichet updateMany
   */
  export type istorictichetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update istorictichets.
     */
    data: XOR<istorictichetUpdateManyMutationInput, istorictichetUncheckedUpdateManyInput>
    /**
     * Filter which istorictichets to update
     */
    where?: istorictichetWhereInput
    /**
     * Limit how many istorictichets to update.
     */
    limit?: number
  }

  /**
   * istorictichet updateManyAndReturn
   */
  export type istorictichetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the istorictichet
     */
    select?: istorictichetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the istorictichet
     */
    omit?: istorictichetOmit<ExtArgs> | null
    /**
     * The data used to update istorictichets.
     */
    data: XOR<istorictichetUpdateManyMutationInput, istorictichetUncheckedUpdateManyInput>
    /**
     * Filter which istorictichets to update
     */
    where?: istorictichetWhereInput
    /**
     * Limit how many istorictichets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: istorictichetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * istorictichet upsert
   */
  export type istorictichetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the istorictichet
     */
    select?: istorictichetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the istorictichet
     */
    omit?: istorictichetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: istorictichetInclude<ExtArgs> | null
    /**
     * The filter to search for the istorictichet to update in case it exists.
     */
    where: istorictichetWhereUniqueInput
    /**
     * In case the istorictichet found by the `where` argument doesn't exist, create a new istorictichet with this data.
     */
    create: XOR<istorictichetCreateInput, istorictichetUncheckedCreateInput>
    /**
     * In case the istorictichet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<istorictichetUpdateInput, istorictichetUncheckedUpdateInput>
  }

  /**
   * istorictichet delete
   */
  export type istorictichetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the istorictichet
     */
    select?: istorictichetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the istorictichet
     */
    omit?: istorictichetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: istorictichetInclude<ExtArgs> | null
    /**
     * Filter which istorictichet to delete.
     */
    where: istorictichetWhereUniqueInput
  }

  /**
   * istorictichet deleteMany
   */
  export type istorictichetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which istorictichets to delete
     */
    where?: istorictichetWhereInput
    /**
     * Limit how many istorictichets to delete.
     */
    limit?: number
  }

  /**
   * istorictichet without action
   */
  export type istorictichetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the istorictichet
     */
    select?: istorictichetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the istorictichet
     */
    omit?: istorictichetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: istorictichetInclude<ExtArgs> | null
  }


  /**
   * Model membruechipa
   */

  export type AggregateMembruechipa = {
    _count: MembruechipaCountAggregateOutputType | null
    _avg: MembruechipaAvgAggregateOutputType | null
    _sum: MembruechipaSumAggregateOutputType | null
    _min: MembruechipaMinAggregateOutputType | null
    _max: MembruechipaMaxAggregateOutputType | null
  }

  export type MembruechipaAvgAggregateOutputType = {
    idmembru: number | null
    idechipa: number | null
  }

  export type MembruechipaSumAggregateOutputType = {
    idmembru: number | null
    idechipa: number | null
  }

  export type MembruechipaMinAggregateOutputType = {
    idmembru: number | null
    nume: string | null
    prenume: string | null
    rol: string | null
    email: string | null
    idechipa: number | null
  }

  export type MembruechipaMaxAggregateOutputType = {
    idmembru: number | null
    nume: string | null
    prenume: string | null
    rol: string | null
    email: string | null
    idechipa: number | null
  }

  export type MembruechipaCountAggregateOutputType = {
    idmembru: number
    nume: number
    prenume: number
    rol: number
    email: number
    idechipa: number
    _all: number
  }


  export type MembruechipaAvgAggregateInputType = {
    idmembru?: true
    idechipa?: true
  }

  export type MembruechipaSumAggregateInputType = {
    idmembru?: true
    idechipa?: true
  }

  export type MembruechipaMinAggregateInputType = {
    idmembru?: true
    nume?: true
    prenume?: true
    rol?: true
    email?: true
    idechipa?: true
  }

  export type MembruechipaMaxAggregateInputType = {
    idmembru?: true
    nume?: true
    prenume?: true
    rol?: true
    email?: true
    idechipa?: true
  }

  export type MembruechipaCountAggregateInputType = {
    idmembru?: true
    nume?: true
    prenume?: true
    rol?: true
    email?: true
    idechipa?: true
    _all?: true
  }

  export type MembruechipaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which membruechipa to aggregate.
     */
    where?: membruechipaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of membruechipas to fetch.
     */
    orderBy?: membruechipaOrderByWithRelationInput | membruechipaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: membruechipaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` membruechipas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` membruechipas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned membruechipas
    **/
    _count?: true | MembruechipaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MembruechipaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MembruechipaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembruechipaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembruechipaMaxAggregateInputType
  }

  export type GetMembruechipaAggregateType<T extends MembruechipaAggregateArgs> = {
        [P in keyof T & keyof AggregateMembruechipa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembruechipa[P]>
      : GetScalarType<T[P], AggregateMembruechipa[P]>
  }




  export type membruechipaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: membruechipaWhereInput
    orderBy?: membruechipaOrderByWithAggregationInput | membruechipaOrderByWithAggregationInput[]
    by: MembruechipaScalarFieldEnum[] | MembruechipaScalarFieldEnum
    having?: membruechipaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembruechipaCountAggregateInputType | true
    _avg?: MembruechipaAvgAggregateInputType
    _sum?: MembruechipaSumAggregateInputType
    _min?: MembruechipaMinAggregateInputType
    _max?: MembruechipaMaxAggregateInputType
  }

  export type MembruechipaGroupByOutputType = {
    idmembru: number
    nume: string
    prenume: string
    rol: string
    email: string
    idechipa: number
    _count: MembruechipaCountAggregateOutputType | null
    _avg: MembruechipaAvgAggregateOutputType | null
    _sum: MembruechipaSumAggregateOutputType | null
    _min: MembruechipaMinAggregateOutputType | null
    _max: MembruechipaMaxAggregateOutputType | null
  }

  type GetMembruechipaGroupByPayload<T extends membruechipaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembruechipaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembruechipaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembruechipaGroupByOutputType[P]>
            : GetScalarType<T[P], MembruechipaGroupByOutputType[P]>
        }
      >
    >


  export type membruechipaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idmembru?: boolean
    nume?: boolean
    prenume?: boolean
    rol?: boolean
    email?: boolean
    idechipa?: boolean
    echipacompanie?: boolean | echipacompanieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membruechipa"]>

  export type membruechipaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idmembru?: boolean
    nume?: boolean
    prenume?: boolean
    rol?: boolean
    email?: boolean
    idechipa?: boolean
    echipacompanie?: boolean | echipacompanieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membruechipa"]>

  export type membruechipaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idmembru?: boolean
    nume?: boolean
    prenume?: boolean
    rol?: boolean
    email?: boolean
    idechipa?: boolean
    echipacompanie?: boolean | echipacompanieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membruechipa"]>

  export type membruechipaSelectScalar = {
    idmembru?: boolean
    nume?: boolean
    prenume?: boolean
    rol?: boolean
    email?: boolean
    idechipa?: boolean
  }

  export type membruechipaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idmembru" | "nume" | "prenume" | "rol" | "email" | "idechipa", ExtArgs["result"]["membruechipa"]>
  export type membruechipaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    echipacompanie?: boolean | echipacompanieDefaultArgs<ExtArgs>
  }
  export type membruechipaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    echipacompanie?: boolean | echipacompanieDefaultArgs<ExtArgs>
  }
  export type membruechipaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    echipacompanie?: boolean | echipacompanieDefaultArgs<ExtArgs>
  }

  export type $membruechipaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "membruechipa"
    objects: {
      echipacompanie: Prisma.$echipacompaniePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idmembru: number
      nume: string
      prenume: string
      rol: string
      email: string
      idechipa: number
    }, ExtArgs["result"]["membruechipa"]>
    composites: {}
  }

  type membruechipaGetPayload<S extends boolean | null | undefined | membruechipaDefaultArgs> = $Result.GetResult<Prisma.$membruechipaPayload, S>

  type membruechipaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<membruechipaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembruechipaCountAggregateInputType | true
    }

  export interface membruechipaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['membruechipa'], meta: { name: 'membruechipa' } }
    /**
     * Find zero or one Membruechipa that matches the filter.
     * @param {membruechipaFindUniqueArgs} args - Arguments to find a Membruechipa
     * @example
     * // Get one Membruechipa
     * const membruechipa = await prisma.membruechipa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends membruechipaFindUniqueArgs>(args: SelectSubset<T, membruechipaFindUniqueArgs<ExtArgs>>): Prisma__membruechipaClient<$Result.GetResult<Prisma.$membruechipaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Membruechipa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {membruechipaFindUniqueOrThrowArgs} args - Arguments to find a Membruechipa
     * @example
     * // Get one Membruechipa
     * const membruechipa = await prisma.membruechipa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends membruechipaFindUniqueOrThrowArgs>(args: SelectSubset<T, membruechipaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__membruechipaClient<$Result.GetResult<Prisma.$membruechipaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Membruechipa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membruechipaFindFirstArgs} args - Arguments to find a Membruechipa
     * @example
     * // Get one Membruechipa
     * const membruechipa = await prisma.membruechipa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends membruechipaFindFirstArgs>(args?: SelectSubset<T, membruechipaFindFirstArgs<ExtArgs>>): Prisma__membruechipaClient<$Result.GetResult<Prisma.$membruechipaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Membruechipa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membruechipaFindFirstOrThrowArgs} args - Arguments to find a Membruechipa
     * @example
     * // Get one Membruechipa
     * const membruechipa = await prisma.membruechipa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends membruechipaFindFirstOrThrowArgs>(args?: SelectSubset<T, membruechipaFindFirstOrThrowArgs<ExtArgs>>): Prisma__membruechipaClient<$Result.GetResult<Prisma.$membruechipaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Membruechipas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membruechipaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Membruechipas
     * const membruechipas = await prisma.membruechipa.findMany()
     * 
     * // Get first 10 Membruechipas
     * const membruechipas = await prisma.membruechipa.findMany({ take: 10 })
     * 
     * // Only select the `idmembru`
     * const membruechipaWithIdmembruOnly = await prisma.membruechipa.findMany({ select: { idmembru: true } })
     * 
     */
    findMany<T extends membruechipaFindManyArgs>(args?: SelectSubset<T, membruechipaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$membruechipaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Membruechipa.
     * @param {membruechipaCreateArgs} args - Arguments to create a Membruechipa.
     * @example
     * // Create one Membruechipa
     * const Membruechipa = await prisma.membruechipa.create({
     *   data: {
     *     // ... data to create a Membruechipa
     *   }
     * })
     * 
     */
    create<T extends membruechipaCreateArgs>(args: SelectSubset<T, membruechipaCreateArgs<ExtArgs>>): Prisma__membruechipaClient<$Result.GetResult<Prisma.$membruechipaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Membruechipas.
     * @param {membruechipaCreateManyArgs} args - Arguments to create many Membruechipas.
     * @example
     * // Create many Membruechipas
     * const membruechipa = await prisma.membruechipa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends membruechipaCreateManyArgs>(args?: SelectSubset<T, membruechipaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Membruechipas and returns the data saved in the database.
     * @param {membruechipaCreateManyAndReturnArgs} args - Arguments to create many Membruechipas.
     * @example
     * // Create many Membruechipas
     * const membruechipa = await prisma.membruechipa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Membruechipas and only return the `idmembru`
     * const membruechipaWithIdmembruOnly = await prisma.membruechipa.createManyAndReturn({
     *   select: { idmembru: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends membruechipaCreateManyAndReturnArgs>(args?: SelectSubset<T, membruechipaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$membruechipaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Membruechipa.
     * @param {membruechipaDeleteArgs} args - Arguments to delete one Membruechipa.
     * @example
     * // Delete one Membruechipa
     * const Membruechipa = await prisma.membruechipa.delete({
     *   where: {
     *     // ... filter to delete one Membruechipa
     *   }
     * })
     * 
     */
    delete<T extends membruechipaDeleteArgs>(args: SelectSubset<T, membruechipaDeleteArgs<ExtArgs>>): Prisma__membruechipaClient<$Result.GetResult<Prisma.$membruechipaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Membruechipa.
     * @param {membruechipaUpdateArgs} args - Arguments to update one Membruechipa.
     * @example
     * // Update one Membruechipa
     * const membruechipa = await prisma.membruechipa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends membruechipaUpdateArgs>(args: SelectSubset<T, membruechipaUpdateArgs<ExtArgs>>): Prisma__membruechipaClient<$Result.GetResult<Prisma.$membruechipaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Membruechipas.
     * @param {membruechipaDeleteManyArgs} args - Arguments to filter Membruechipas to delete.
     * @example
     * // Delete a few Membruechipas
     * const { count } = await prisma.membruechipa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends membruechipaDeleteManyArgs>(args?: SelectSubset<T, membruechipaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Membruechipas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membruechipaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Membruechipas
     * const membruechipa = await prisma.membruechipa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends membruechipaUpdateManyArgs>(args: SelectSubset<T, membruechipaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Membruechipas and returns the data updated in the database.
     * @param {membruechipaUpdateManyAndReturnArgs} args - Arguments to update many Membruechipas.
     * @example
     * // Update many Membruechipas
     * const membruechipa = await prisma.membruechipa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Membruechipas and only return the `idmembru`
     * const membruechipaWithIdmembruOnly = await prisma.membruechipa.updateManyAndReturn({
     *   select: { idmembru: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends membruechipaUpdateManyAndReturnArgs>(args: SelectSubset<T, membruechipaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$membruechipaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Membruechipa.
     * @param {membruechipaUpsertArgs} args - Arguments to update or create a Membruechipa.
     * @example
     * // Update or create a Membruechipa
     * const membruechipa = await prisma.membruechipa.upsert({
     *   create: {
     *     // ... data to create a Membruechipa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Membruechipa we want to update
     *   }
     * })
     */
    upsert<T extends membruechipaUpsertArgs>(args: SelectSubset<T, membruechipaUpsertArgs<ExtArgs>>): Prisma__membruechipaClient<$Result.GetResult<Prisma.$membruechipaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Membruechipas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membruechipaCountArgs} args - Arguments to filter Membruechipas to count.
     * @example
     * // Count the number of Membruechipas
     * const count = await prisma.membruechipa.count({
     *   where: {
     *     // ... the filter for the Membruechipas we want to count
     *   }
     * })
    **/
    count<T extends membruechipaCountArgs>(
      args?: Subset<T, membruechipaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembruechipaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Membruechipa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembruechipaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MembruechipaAggregateArgs>(args: Subset<T, MembruechipaAggregateArgs>): Prisma.PrismaPromise<GetMembruechipaAggregateType<T>>

    /**
     * Group by Membruechipa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membruechipaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends membruechipaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: membruechipaGroupByArgs['orderBy'] }
        : { orderBy?: membruechipaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, membruechipaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembruechipaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the membruechipa model
   */
  readonly fields: membruechipaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for membruechipa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__membruechipaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    echipacompanie<T extends echipacompanieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, echipacompanieDefaultArgs<ExtArgs>>): Prisma__echipacompanieClient<$Result.GetResult<Prisma.$echipacompaniePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the membruechipa model
   */ 
  interface membruechipaFieldRefs {
    readonly idmembru: FieldRef<"membruechipa", 'Int'>
    readonly nume: FieldRef<"membruechipa", 'String'>
    readonly prenume: FieldRef<"membruechipa", 'String'>
    readonly rol: FieldRef<"membruechipa", 'String'>
    readonly email: FieldRef<"membruechipa", 'String'>
    readonly idechipa: FieldRef<"membruechipa", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * membruechipa findUnique
   */
  export type membruechipaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membruechipa
     */
    select?: membruechipaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the membruechipa
     */
    omit?: membruechipaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membruechipaInclude<ExtArgs> | null
    /**
     * Filter, which membruechipa to fetch.
     */
    where: membruechipaWhereUniqueInput
  }

  /**
   * membruechipa findUniqueOrThrow
   */
  export type membruechipaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membruechipa
     */
    select?: membruechipaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the membruechipa
     */
    omit?: membruechipaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membruechipaInclude<ExtArgs> | null
    /**
     * Filter, which membruechipa to fetch.
     */
    where: membruechipaWhereUniqueInput
  }

  /**
   * membruechipa findFirst
   */
  export type membruechipaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membruechipa
     */
    select?: membruechipaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the membruechipa
     */
    omit?: membruechipaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membruechipaInclude<ExtArgs> | null
    /**
     * Filter, which membruechipa to fetch.
     */
    where?: membruechipaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of membruechipas to fetch.
     */
    orderBy?: membruechipaOrderByWithRelationInput | membruechipaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for membruechipas.
     */
    cursor?: membruechipaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` membruechipas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` membruechipas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of membruechipas.
     */
    distinct?: MembruechipaScalarFieldEnum | MembruechipaScalarFieldEnum[]
  }

  /**
   * membruechipa findFirstOrThrow
   */
  export type membruechipaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membruechipa
     */
    select?: membruechipaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the membruechipa
     */
    omit?: membruechipaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membruechipaInclude<ExtArgs> | null
    /**
     * Filter, which membruechipa to fetch.
     */
    where?: membruechipaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of membruechipas to fetch.
     */
    orderBy?: membruechipaOrderByWithRelationInput | membruechipaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for membruechipas.
     */
    cursor?: membruechipaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` membruechipas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` membruechipas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of membruechipas.
     */
    distinct?: MembruechipaScalarFieldEnum | MembruechipaScalarFieldEnum[]
  }

  /**
   * membruechipa findMany
   */
  export type membruechipaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membruechipa
     */
    select?: membruechipaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the membruechipa
     */
    omit?: membruechipaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membruechipaInclude<ExtArgs> | null
    /**
     * Filter, which membruechipas to fetch.
     */
    where?: membruechipaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of membruechipas to fetch.
     */
    orderBy?: membruechipaOrderByWithRelationInput | membruechipaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing membruechipas.
     */
    cursor?: membruechipaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` membruechipas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` membruechipas.
     */
    skip?: number
    distinct?: MembruechipaScalarFieldEnum | MembruechipaScalarFieldEnum[]
  }

  /**
   * membruechipa create
   */
  export type membruechipaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membruechipa
     */
    select?: membruechipaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the membruechipa
     */
    omit?: membruechipaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membruechipaInclude<ExtArgs> | null
    /**
     * The data needed to create a membruechipa.
     */
    data: XOR<membruechipaCreateInput, membruechipaUncheckedCreateInput>
  }

  /**
   * membruechipa createMany
   */
  export type membruechipaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many membruechipas.
     */
    data: membruechipaCreateManyInput | membruechipaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * membruechipa createManyAndReturn
   */
  export type membruechipaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membruechipa
     */
    select?: membruechipaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the membruechipa
     */
    omit?: membruechipaOmit<ExtArgs> | null
    /**
     * The data used to create many membruechipas.
     */
    data: membruechipaCreateManyInput | membruechipaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membruechipaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * membruechipa update
   */
  export type membruechipaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membruechipa
     */
    select?: membruechipaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the membruechipa
     */
    omit?: membruechipaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membruechipaInclude<ExtArgs> | null
    /**
     * The data needed to update a membruechipa.
     */
    data: XOR<membruechipaUpdateInput, membruechipaUncheckedUpdateInput>
    /**
     * Choose, which membruechipa to update.
     */
    where: membruechipaWhereUniqueInput
  }

  /**
   * membruechipa updateMany
   */
  export type membruechipaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update membruechipas.
     */
    data: XOR<membruechipaUpdateManyMutationInput, membruechipaUncheckedUpdateManyInput>
    /**
     * Filter which membruechipas to update
     */
    where?: membruechipaWhereInput
    /**
     * Limit how many membruechipas to update.
     */
    limit?: number
  }

  /**
   * membruechipa updateManyAndReturn
   */
  export type membruechipaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membruechipa
     */
    select?: membruechipaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the membruechipa
     */
    omit?: membruechipaOmit<ExtArgs> | null
    /**
     * The data used to update membruechipas.
     */
    data: XOR<membruechipaUpdateManyMutationInput, membruechipaUncheckedUpdateManyInput>
    /**
     * Filter which membruechipas to update
     */
    where?: membruechipaWhereInput
    /**
     * Limit how many membruechipas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membruechipaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * membruechipa upsert
   */
  export type membruechipaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membruechipa
     */
    select?: membruechipaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the membruechipa
     */
    omit?: membruechipaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membruechipaInclude<ExtArgs> | null
    /**
     * The filter to search for the membruechipa to update in case it exists.
     */
    where: membruechipaWhereUniqueInput
    /**
     * In case the membruechipa found by the `where` argument doesn't exist, create a new membruechipa with this data.
     */
    create: XOR<membruechipaCreateInput, membruechipaUncheckedCreateInput>
    /**
     * In case the membruechipa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<membruechipaUpdateInput, membruechipaUncheckedUpdateInput>
  }

  /**
   * membruechipa delete
   */
  export type membruechipaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membruechipa
     */
    select?: membruechipaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the membruechipa
     */
    omit?: membruechipaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membruechipaInclude<ExtArgs> | null
    /**
     * Filter which membruechipa to delete.
     */
    where: membruechipaWhereUniqueInput
  }

  /**
   * membruechipa deleteMany
   */
  export type membruechipaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which membruechipas to delete
     */
    where?: membruechipaWhereInput
    /**
     * Limit how many membruechipas to delete.
     */
    limit?: number
  }

  /**
   * membruechipa without action
   */
  export type membruechipaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the membruechipa
     */
    select?: membruechipaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the membruechipa
     */
    omit?: membruechipaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membruechipaInclude<ExtArgs> | null
  }


  /**
   * Model mesaje
   */

  export type AggregateMesaje = {
    _count: MesajeCountAggregateOutputType | null
    _avg: MesajeAvgAggregateOutputType | null
    _sum: MesajeSumAggregateOutputType | null
    _min: MesajeMinAggregateOutputType | null
    _max: MesajeMaxAggregateOutputType | null
  }

  export type MesajeAvgAggregateOutputType = {
    idmesaj: number | null
    idtichet: number | null
  }

  export type MesajeSumAggregateOutputType = {
    idmesaj: number | null
    idtichet: number | null
  }

  export type MesajeMinAggregateOutputType = {
    idmesaj: number | null
    datacreare: Date | null
    emitatormesaj: string | null
    emailsuport: string | null
    emailutilizator: string | null
    continut: string | null
    idtichet: number | null
  }

  export type MesajeMaxAggregateOutputType = {
    idmesaj: number | null
    datacreare: Date | null
    emitatormesaj: string | null
    emailsuport: string | null
    emailutilizator: string | null
    continut: string | null
    idtichet: number | null
  }

  export type MesajeCountAggregateOutputType = {
    idmesaj: number
    datacreare: number
    emitatormesaj: number
    emailsuport: number
    emailutilizator: number
    continut: number
    idtichet: number
    _all: number
  }


  export type MesajeAvgAggregateInputType = {
    idmesaj?: true
    idtichet?: true
  }

  export type MesajeSumAggregateInputType = {
    idmesaj?: true
    idtichet?: true
  }

  export type MesajeMinAggregateInputType = {
    idmesaj?: true
    datacreare?: true
    emitatormesaj?: true
    emailsuport?: true
    emailutilizator?: true
    continut?: true
    idtichet?: true
  }

  export type MesajeMaxAggregateInputType = {
    idmesaj?: true
    datacreare?: true
    emitatormesaj?: true
    emailsuport?: true
    emailutilizator?: true
    continut?: true
    idtichet?: true
  }

  export type MesajeCountAggregateInputType = {
    idmesaj?: true
    datacreare?: true
    emitatormesaj?: true
    emailsuport?: true
    emailutilizator?: true
    continut?: true
    idtichet?: true
    _all?: true
  }

  export type MesajeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mesaje to aggregate.
     */
    where?: mesajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mesajes to fetch.
     */
    orderBy?: mesajeOrderByWithRelationInput | mesajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mesajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mesajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mesajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mesajes
    **/
    _count?: true | MesajeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MesajeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MesajeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MesajeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MesajeMaxAggregateInputType
  }

  export type GetMesajeAggregateType<T extends MesajeAggregateArgs> = {
        [P in keyof T & keyof AggregateMesaje]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMesaje[P]>
      : GetScalarType<T[P], AggregateMesaje[P]>
  }




  export type mesajeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mesajeWhereInput
    orderBy?: mesajeOrderByWithAggregationInput | mesajeOrderByWithAggregationInput[]
    by: MesajeScalarFieldEnum[] | MesajeScalarFieldEnum
    having?: mesajeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MesajeCountAggregateInputType | true
    _avg?: MesajeAvgAggregateInputType
    _sum?: MesajeSumAggregateInputType
    _min?: MesajeMinAggregateInputType
    _max?: MesajeMaxAggregateInputType
  }

  export type MesajeGroupByOutputType = {
    idmesaj: number
    datacreare: Date
    emitatormesaj: string
    emailsuport: string
    emailutilizator: string
    continut: string
    idtichet: number
    _count: MesajeCountAggregateOutputType | null
    _avg: MesajeAvgAggregateOutputType | null
    _sum: MesajeSumAggregateOutputType | null
    _min: MesajeMinAggregateOutputType | null
    _max: MesajeMaxAggregateOutputType | null
  }

  type GetMesajeGroupByPayload<T extends mesajeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MesajeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MesajeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MesajeGroupByOutputType[P]>
            : GetScalarType<T[P], MesajeGroupByOutputType[P]>
        }
      >
    >


  export type mesajeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idmesaj?: boolean
    datacreare?: boolean
    emitatormesaj?: boolean
    emailsuport?: boolean
    emailutilizator?: boolean
    continut?: boolean
    idtichet?: boolean
    tichet?: boolean | tichetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mesaje"]>

  export type mesajeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idmesaj?: boolean
    datacreare?: boolean
    emitatormesaj?: boolean
    emailsuport?: boolean
    emailutilizator?: boolean
    continut?: boolean
    idtichet?: boolean
    tichet?: boolean | tichetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mesaje"]>

  export type mesajeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idmesaj?: boolean
    datacreare?: boolean
    emitatormesaj?: boolean
    emailsuport?: boolean
    emailutilizator?: boolean
    continut?: boolean
    idtichet?: boolean
    tichet?: boolean | tichetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mesaje"]>

  export type mesajeSelectScalar = {
    idmesaj?: boolean
    datacreare?: boolean
    emitatormesaj?: boolean
    emailsuport?: boolean
    emailutilizator?: boolean
    continut?: boolean
    idtichet?: boolean
  }

  export type mesajeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idmesaj" | "datacreare" | "emitatormesaj" | "emailsuport" | "emailutilizator" | "continut" | "idtichet", ExtArgs["result"]["mesaje"]>
  export type mesajeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tichet?: boolean | tichetDefaultArgs<ExtArgs>
  }
  export type mesajeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tichet?: boolean | tichetDefaultArgs<ExtArgs>
  }
  export type mesajeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tichet?: boolean | tichetDefaultArgs<ExtArgs>
  }

  export type $mesajePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mesaje"
    objects: {
      tichet: Prisma.$tichetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idmesaj: number
      datacreare: Date
      emitatormesaj: string
      emailsuport: string
      emailutilizator: string
      continut: string
      idtichet: number
    }, ExtArgs["result"]["mesaje"]>
    composites: {}
  }

  type mesajeGetPayload<S extends boolean | null | undefined | mesajeDefaultArgs> = $Result.GetResult<Prisma.$mesajePayload, S>

  type mesajeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mesajeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MesajeCountAggregateInputType | true
    }

  export interface mesajeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mesaje'], meta: { name: 'mesaje' } }
    /**
     * Find zero or one Mesaje that matches the filter.
     * @param {mesajeFindUniqueArgs} args - Arguments to find a Mesaje
     * @example
     * // Get one Mesaje
     * const mesaje = await prisma.mesaje.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mesajeFindUniqueArgs>(args: SelectSubset<T, mesajeFindUniqueArgs<ExtArgs>>): Prisma__mesajeClient<$Result.GetResult<Prisma.$mesajePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mesaje that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mesajeFindUniqueOrThrowArgs} args - Arguments to find a Mesaje
     * @example
     * // Get one Mesaje
     * const mesaje = await prisma.mesaje.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mesajeFindUniqueOrThrowArgs>(args: SelectSubset<T, mesajeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mesajeClient<$Result.GetResult<Prisma.$mesajePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mesaje that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mesajeFindFirstArgs} args - Arguments to find a Mesaje
     * @example
     * // Get one Mesaje
     * const mesaje = await prisma.mesaje.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mesajeFindFirstArgs>(args?: SelectSubset<T, mesajeFindFirstArgs<ExtArgs>>): Prisma__mesajeClient<$Result.GetResult<Prisma.$mesajePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mesaje that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mesajeFindFirstOrThrowArgs} args - Arguments to find a Mesaje
     * @example
     * // Get one Mesaje
     * const mesaje = await prisma.mesaje.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mesajeFindFirstOrThrowArgs>(args?: SelectSubset<T, mesajeFindFirstOrThrowArgs<ExtArgs>>): Prisma__mesajeClient<$Result.GetResult<Prisma.$mesajePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mesajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mesajeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mesajes
     * const mesajes = await prisma.mesaje.findMany()
     * 
     * // Get first 10 Mesajes
     * const mesajes = await prisma.mesaje.findMany({ take: 10 })
     * 
     * // Only select the `idmesaj`
     * const mesajeWithIdmesajOnly = await prisma.mesaje.findMany({ select: { idmesaj: true } })
     * 
     */
    findMany<T extends mesajeFindManyArgs>(args?: SelectSubset<T, mesajeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mesajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mesaje.
     * @param {mesajeCreateArgs} args - Arguments to create a Mesaje.
     * @example
     * // Create one Mesaje
     * const Mesaje = await prisma.mesaje.create({
     *   data: {
     *     // ... data to create a Mesaje
     *   }
     * })
     * 
     */
    create<T extends mesajeCreateArgs>(args: SelectSubset<T, mesajeCreateArgs<ExtArgs>>): Prisma__mesajeClient<$Result.GetResult<Prisma.$mesajePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mesajes.
     * @param {mesajeCreateManyArgs} args - Arguments to create many Mesajes.
     * @example
     * // Create many Mesajes
     * const mesaje = await prisma.mesaje.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mesajeCreateManyArgs>(args?: SelectSubset<T, mesajeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mesajes and returns the data saved in the database.
     * @param {mesajeCreateManyAndReturnArgs} args - Arguments to create many Mesajes.
     * @example
     * // Create many Mesajes
     * const mesaje = await prisma.mesaje.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mesajes and only return the `idmesaj`
     * const mesajeWithIdmesajOnly = await prisma.mesaje.createManyAndReturn({
     *   select: { idmesaj: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mesajeCreateManyAndReturnArgs>(args?: SelectSubset<T, mesajeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mesajePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mesaje.
     * @param {mesajeDeleteArgs} args - Arguments to delete one Mesaje.
     * @example
     * // Delete one Mesaje
     * const Mesaje = await prisma.mesaje.delete({
     *   where: {
     *     // ... filter to delete one Mesaje
     *   }
     * })
     * 
     */
    delete<T extends mesajeDeleteArgs>(args: SelectSubset<T, mesajeDeleteArgs<ExtArgs>>): Prisma__mesajeClient<$Result.GetResult<Prisma.$mesajePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mesaje.
     * @param {mesajeUpdateArgs} args - Arguments to update one Mesaje.
     * @example
     * // Update one Mesaje
     * const mesaje = await prisma.mesaje.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mesajeUpdateArgs>(args: SelectSubset<T, mesajeUpdateArgs<ExtArgs>>): Prisma__mesajeClient<$Result.GetResult<Prisma.$mesajePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mesajes.
     * @param {mesajeDeleteManyArgs} args - Arguments to filter Mesajes to delete.
     * @example
     * // Delete a few Mesajes
     * const { count } = await prisma.mesaje.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mesajeDeleteManyArgs>(args?: SelectSubset<T, mesajeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mesajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mesajeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mesajes
     * const mesaje = await prisma.mesaje.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mesajeUpdateManyArgs>(args: SelectSubset<T, mesajeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mesajes and returns the data updated in the database.
     * @param {mesajeUpdateManyAndReturnArgs} args - Arguments to update many Mesajes.
     * @example
     * // Update many Mesajes
     * const mesaje = await prisma.mesaje.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mesajes and only return the `idmesaj`
     * const mesajeWithIdmesajOnly = await prisma.mesaje.updateManyAndReturn({
     *   select: { idmesaj: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends mesajeUpdateManyAndReturnArgs>(args: SelectSubset<T, mesajeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mesajePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mesaje.
     * @param {mesajeUpsertArgs} args - Arguments to update or create a Mesaje.
     * @example
     * // Update or create a Mesaje
     * const mesaje = await prisma.mesaje.upsert({
     *   create: {
     *     // ... data to create a Mesaje
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mesaje we want to update
     *   }
     * })
     */
    upsert<T extends mesajeUpsertArgs>(args: SelectSubset<T, mesajeUpsertArgs<ExtArgs>>): Prisma__mesajeClient<$Result.GetResult<Prisma.$mesajePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mesajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mesajeCountArgs} args - Arguments to filter Mesajes to count.
     * @example
     * // Count the number of Mesajes
     * const count = await prisma.mesaje.count({
     *   where: {
     *     // ... the filter for the Mesajes we want to count
     *   }
     * })
    **/
    count<T extends mesajeCountArgs>(
      args?: Subset<T, mesajeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MesajeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mesaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MesajeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MesajeAggregateArgs>(args: Subset<T, MesajeAggregateArgs>): Prisma.PrismaPromise<GetMesajeAggregateType<T>>

    /**
     * Group by Mesaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mesajeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mesajeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mesajeGroupByArgs['orderBy'] }
        : { orderBy?: mesajeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mesajeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMesajeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mesaje model
   */
  readonly fields: mesajeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mesaje.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mesajeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tichet<T extends tichetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tichetDefaultArgs<ExtArgs>>): Prisma__tichetClient<$Result.GetResult<Prisma.$tichetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mesaje model
   */ 
  interface mesajeFieldRefs {
    readonly idmesaj: FieldRef<"mesaje", 'Int'>
    readonly datacreare: FieldRef<"mesaje", 'DateTime'>
    readonly emitatormesaj: FieldRef<"mesaje", 'String'>
    readonly emailsuport: FieldRef<"mesaje", 'String'>
    readonly emailutilizator: FieldRef<"mesaje", 'String'>
    readonly continut: FieldRef<"mesaje", 'String'>
    readonly idtichet: FieldRef<"mesaje", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * mesaje findUnique
   */
  export type mesajeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesaje
     */
    select?: mesajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mesaje
     */
    omit?: mesajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mesajeInclude<ExtArgs> | null
    /**
     * Filter, which mesaje to fetch.
     */
    where: mesajeWhereUniqueInput
  }

  /**
   * mesaje findUniqueOrThrow
   */
  export type mesajeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesaje
     */
    select?: mesajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mesaje
     */
    omit?: mesajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mesajeInclude<ExtArgs> | null
    /**
     * Filter, which mesaje to fetch.
     */
    where: mesajeWhereUniqueInput
  }

  /**
   * mesaje findFirst
   */
  export type mesajeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesaje
     */
    select?: mesajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mesaje
     */
    omit?: mesajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mesajeInclude<ExtArgs> | null
    /**
     * Filter, which mesaje to fetch.
     */
    where?: mesajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mesajes to fetch.
     */
    orderBy?: mesajeOrderByWithRelationInput | mesajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mesajes.
     */
    cursor?: mesajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mesajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mesajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mesajes.
     */
    distinct?: MesajeScalarFieldEnum | MesajeScalarFieldEnum[]
  }

  /**
   * mesaje findFirstOrThrow
   */
  export type mesajeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesaje
     */
    select?: mesajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mesaje
     */
    omit?: mesajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mesajeInclude<ExtArgs> | null
    /**
     * Filter, which mesaje to fetch.
     */
    where?: mesajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mesajes to fetch.
     */
    orderBy?: mesajeOrderByWithRelationInput | mesajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mesajes.
     */
    cursor?: mesajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mesajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mesajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mesajes.
     */
    distinct?: MesajeScalarFieldEnum | MesajeScalarFieldEnum[]
  }

  /**
   * mesaje findMany
   */
  export type mesajeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesaje
     */
    select?: mesajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mesaje
     */
    omit?: mesajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mesajeInclude<ExtArgs> | null
    /**
     * Filter, which mesajes to fetch.
     */
    where?: mesajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mesajes to fetch.
     */
    orderBy?: mesajeOrderByWithRelationInput | mesajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mesajes.
     */
    cursor?: mesajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mesajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mesajes.
     */
    skip?: number
    distinct?: MesajeScalarFieldEnum | MesajeScalarFieldEnum[]
  }

  /**
   * mesaje create
   */
  export type mesajeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesaje
     */
    select?: mesajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mesaje
     */
    omit?: mesajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mesajeInclude<ExtArgs> | null
    /**
     * The data needed to create a mesaje.
     */
    data: XOR<mesajeCreateInput, mesajeUncheckedCreateInput>
  }

  /**
   * mesaje createMany
   */
  export type mesajeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mesajes.
     */
    data: mesajeCreateManyInput | mesajeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mesaje createManyAndReturn
   */
  export type mesajeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesaje
     */
    select?: mesajeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mesaje
     */
    omit?: mesajeOmit<ExtArgs> | null
    /**
     * The data used to create many mesajes.
     */
    data: mesajeCreateManyInput | mesajeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mesajeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * mesaje update
   */
  export type mesajeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesaje
     */
    select?: mesajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mesaje
     */
    omit?: mesajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mesajeInclude<ExtArgs> | null
    /**
     * The data needed to update a mesaje.
     */
    data: XOR<mesajeUpdateInput, mesajeUncheckedUpdateInput>
    /**
     * Choose, which mesaje to update.
     */
    where: mesajeWhereUniqueInput
  }

  /**
   * mesaje updateMany
   */
  export type mesajeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mesajes.
     */
    data: XOR<mesajeUpdateManyMutationInput, mesajeUncheckedUpdateManyInput>
    /**
     * Filter which mesajes to update
     */
    where?: mesajeWhereInput
    /**
     * Limit how many mesajes to update.
     */
    limit?: number
  }

  /**
   * mesaje updateManyAndReturn
   */
  export type mesajeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesaje
     */
    select?: mesajeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mesaje
     */
    omit?: mesajeOmit<ExtArgs> | null
    /**
     * The data used to update mesajes.
     */
    data: XOR<mesajeUpdateManyMutationInput, mesajeUncheckedUpdateManyInput>
    /**
     * Filter which mesajes to update
     */
    where?: mesajeWhereInput
    /**
     * Limit how many mesajes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mesajeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * mesaje upsert
   */
  export type mesajeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesaje
     */
    select?: mesajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mesaje
     */
    omit?: mesajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mesajeInclude<ExtArgs> | null
    /**
     * The filter to search for the mesaje to update in case it exists.
     */
    where: mesajeWhereUniqueInput
    /**
     * In case the mesaje found by the `where` argument doesn't exist, create a new mesaje with this data.
     */
    create: XOR<mesajeCreateInput, mesajeUncheckedCreateInput>
    /**
     * In case the mesaje was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mesajeUpdateInput, mesajeUncheckedUpdateInput>
  }

  /**
   * mesaje delete
   */
  export type mesajeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesaje
     */
    select?: mesajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mesaje
     */
    omit?: mesajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mesajeInclude<ExtArgs> | null
    /**
     * Filter which mesaje to delete.
     */
    where: mesajeWhereUniqueInput
  }

  /**
   * mesaje deleteMany
   */
  export type mesajeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mesajes to delete
     */
    where?: mesajeWhereInput
    /**
     * Limit how many mesajes to delete.
     */
    limit?: number
  }

  /**
   * mesaje without action
   */
  export type mesajeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesaje
     */
    select?: mesajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mesaje
     */
    omit?: mesajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mesajeInclude<ExtArgs> | null
  }


  /**
   * Model specializare
   */

  export type AggregateSpecializare = {
    _count: SpecializareCountAggregateOutputType | null
    _avg: SpecializareAvgAggregateOutputType | null
    _sum: SpecializareSumAggregateOutputType | null
    _min: SpecializareMinAggregateOutputType | null
    _max: SpecializareMaxAggregateOutputType | null
  }

  export type SpecializareAvgAggregateOutputType = {
    idspecializare: number | null
  }

  export type SpecializareSumAggregateOutputType = {
    idspecializare: number | null
  }

  export type SpecializareMinAggregateOutputType = {
    idspecializare: number | null
    nume: string | null
  }

  export type SpecializareMaxAggregateOutputType = {
    idspecializare: number | null
    nume: string | null
  }

  export type SpecializareCountAggregateOutputType = {
    idspecializare: number
    nume: number
    _all: number
  }


  export type SpecializareAvgAggregateInputType = {
    idspecializare?: true
  }

  export type SpecializareSumAggregateInputType = {
    idspecializare?: true
  }

  export type SpecializareMinAggregateInputType = {
    idspecializare?: true
    nume?: true
  }

  export type SpecializareMaxAggregateInputType = {
    idspecializare?: true
    nume?: true
  }

  export type SpecializareCountAggregateInputType = {
    idspecializare?: true
    nume?: true
    _all?: true
  }

  export type SpecializareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which specializare to aggregate.
     */
    where?: specializareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of specializares to fetch.
     */
    orderBy?: specializareOrderByWithRelationInput | specializareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: specializareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` specializares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` specializares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned specializares
    **/
    _count?: true | SpecializareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecializareAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecializareSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecializareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecializareMaxAggregateInputType
  }

  export type GetSpecializareAggregateType<T extends SpecializareAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecializare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecializare[P]>
      : GetScalarType<T[P], AggregateSpecializare[P]>
  }




  export type specializareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: specializareWhereInput
    orderBy?: specializareOrderByWithAggregationInput | specializareOrderByWithAggregationInput[]
    by: SpecializareScalarFieldEnum[] | SpecializareScalarFieldEnum
    having?: specializareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecializareCountAggregateInputType | true
    _avg?: SpecializareAvgAggregateInputType
    _sum?: SpecializareSumAggregateInputType
    _min?: SpecializareMinAggregateInputType
    _max?: SpecializareMaxAggregateInputType
  }

  export type SpecializareGroupByOutputType = {
    idspecializare: number
    nume: string
    _count: SpecializareCountAggregateOutputType | null
    _avg: SpecializareAvgAggregateOutputType | null
    _sum: SpecializareSumAggregateOutputType | null
    _min: SpecializareMinAggregateOutputType | null
    _max: SpecializareMaxAggregateOutputType | null
  }

  type GetSpecializareGroupByPayload<T extends specializareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecializareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecializareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecializareGroupByOutputType[P]>
            : GetScalarType<T[P], SpecializareGroupByOutputType[P]>
        }
      >
    >


  export type specializareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idspecializare?: boolean
    nume?: boolean
    produse?: boolean | specializare$produseArgs<ExtArgs>
    utilizator_utilizator_specializareTospecializare?: boolean | specializare$utilizator_utilizator_specializareTospecializareArgs<ExtArgs>
    _count?: boolean | SpecializareCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specializare"]>

  export type specializareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idspecializare?: boolean
    nume?: boolean
  }, ExtArgs["result"]["specializare"]>

  export type specializareSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idspecializare?: boolean
    nume?: boolean
  }, ExtArgs["result"]["specializare"]>

  export type specializareSelectScalar = {
    idspecializare?: boolean
    nume?: boolean
  }

  export type specializareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idspecializare" | "nume", ExtArgs["result"]["specializare"]>
  export type specializareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produse?: boolean | specializare$produseArgs<ExtArgs>
    utilizator_utilizator_specializareTospecializare?: boolean | specializare$utilizator_utilizator_specializareTospecializareArgs<ExtArgs>
    _count?: boolean | SpecializareCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type specializareIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type specializareIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $specializarePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "specializare"
    objects: {
      produse: Prisma.$produsePayload<ExtArgs>[]
      utilizator_utilizator_specializareTospecializare: Prisma.$utilizatorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idspecializare: number
      nume: string
    }, ExtArgs["result"]["specializare"]>
    composites: {}
  }

  type specializareGetPayload<S extends boolean | null | undefined | specializareDefaultArgs> = $Result.GetResult<Prisma.$specializarePayload, S>

  type specializareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<specializareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecializareCountAggregateInputType | true
    }

  export interface specializareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['specializare'], meta: { name: 'specializare' } }
    /**
     * Find zero or one Specializare that matches the filter.
     * @param {specializareFindUniqueArgs} args - Arguments to find a Specializare
     * @example
     * // Get one Specializare
     * const specializare = await prisma.specializare.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends specializareFindUniqueArgs>(args: SelectSubset<T, specializareFindUniqueArgs<ExtArgs>>): Prisma__specializareClient<$Result.GetResult<Prisma.$specializarePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Specializare that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {specializareFindUniqueOrThrowArgs} args - Arguments to find a Specializare
     * @example
     * // Get one Specializare
     * const specializare = await prisma.specializare.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends specializareFindUniqueOrThrowArgs>(args: SelectSubset<T, specializareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__specializareClient<$Result.GetResult<Prisma.$specializarePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specializare that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specializareFindFirstArgs} args - Arguments to find a Specializare
     * @example
     * // Get one Specializare
     * const specializare = await prisma.specializare.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends specializareFindFirstArgs>(args?: SelectSubset<T, specializareFindFirstArgs<ExtArgs>>): Prisma__specializareClient<$Result.GetResult<Prisma.$specializarePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specializare that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specializareFindFirstOrThrowArgs} args - Arguments to find a Specializare
     * @example
     * // Get one Specializare
     * const specializare = await prisma.specializare.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends specializareFindFirstOrThrowArgs>(args?: SelectSubset<T, specializareFindFirstOrThrowArgs<ExtArgs>>): Prisma__specializareClient<$Result.GetResult<Prisma.$specializarePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Specializares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specializareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specializares
     * const specializares = await prisma.specializare.findMany()
     * 
     * // Get first 10 Specializares
     * const specializares = await prisma.specializare.findMany({ take: 10 })
     * 
     * // Only select the `idspecializare`
     * const specializareWithIdspecializareOnly = await prisma.specializare.findMany({ select: { idspecializare: true } })
     * 
     */
    findMany<T extends specializareFindManyArgs>(args?: SelectSubset<T, specializareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$specializarePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Specializare.
     * @param {specializareCreateArgs} args - Arguments to create a Specializare.
     * @example
     * // Create one Specializare
     * const Specializare = await prisma.specializare.create({
     *   data: {
     *     // ... data to create a Specializare
     *   }
     * })
     * 
     */
    create<T extends specializareCreateArgs>(args: SelectSubset<T, specializareCreateArgs<ExtArgs>>): Prisma__specializareClient<$Result.GetResult<Prisma.$specializarePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Specializares.
     * @param {specializareCreateManyArgs} args - Arguments to create many Specializares.
     * @example
     * // Create many Specializares
     * const specializare = await prisma.specializare.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends specializareCreateManyArgs>(args?: SelectSubset<T, specializareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Specializares and returns the data saved in the database.
     * @param {specializareCreateManyAndReturnArgs} args - Arguments to create many Specializares.
     * @example
     * // Create many Specializares
     * const specializare = await prisma.specializare.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Specializares and only return the `idspecializare`
     * const specializareWithIdspecializareOnly = await prisma.specializare.createManyAndReturn({
     *   select: { idspecializare: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends specializareCreateManyAndReturnArgs>(args?: SelectSubset<T, specializareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$specializarePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Specializare.
     * @param {specializareDeleteArgs} args - Arguments to delete one Specializare.
     * @example
     * // Delete one Specializare
     * const Specializare = await prisma.specializare.delete({
     *   where: {
     *     // ... filter to delete one Specializare
     *   }
     * })
     * 
     */
    delete<T extends specializareDeleteArgs>(args: SelectSubset<T, specializareDeleteArgs<ExtArgs>>): Prisma__specializareClient<$Result.GetResult<Prisma.$specializarePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Specializare.
     * @param {specializareUpdateArgs} args - Arguments to update one Specializare.
     * @example
     * // Update one Specializare
     * const specializare = await prisma.specializare.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends specializareUpdateArgs>(args: SelectSubset<T, specializareUpdateArgs<ExtArgs>>): Prisma__specializareClient<$Result.GetResult<Prisma.$specializarePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Specializares.
     * @param {specializareDeleteManyArgs} args - Arguments to filter Specializares to delete.
     * @example
     * // Delete a few Specializares
     * const { count } = await prisma.specializare.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends specializareDeleteManyArgs>(args?: SelectSubset<T, specializareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specializares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specializareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specializares
     * const specializare = await prisma.specializare.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends specializareUpdateManyArgs>(args: SelectSubset<T, specializareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specializares and returns the data updated in the database.
     * @param {specializareUpdateManyAndReturnArgs} args - Arguments to update many Specializares.
     * @example
     * // Update many Specializares
     * const specializare = await prisma.specializare.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Specializares and only return the `idspecializare`
     * const specializareWithIdspecializareOnly = await prisma.specializare.updateManyAndReturn({
     *   select: { idspecializare: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends specializareUpdateManyAndReturnArgs>(args: SelectSubset<T, specializareUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$specializarePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Specializare.
     * @param {specializareUpsertArgs} args - Arguments to update or create a Specializare.
     * @example
     * // Update or create a Specializare
     * const specializare = await prisma.specializare.upsert({
     *   create: {
     *     // ... data to create a Specializare
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Specializare we want to update
     *   }
     * })
     */
    upsert<T extends specializareUpsertArgs>(args: SelectSubset<T, specializareUpsertArgs<ExtArgs>>): Prisma__specializareClient<$Result.GetResult<Prisma.$specializarePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Specializares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specializareCountArgs} args - Arguments to filter Specializares to count.
     * @example
     * // Count the number of Specializares
     * const count = await prisma.specializare.count({
     *   where: {
     *     // ... the filter for the Specializares we want to count
     *   }
     * })
    **/
    count<T extends specializareCountArgs>(
      args?: Subset<T, specializareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecializareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Specializare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecializareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpecializareAggregateArgs>(args: Subset<T, SpecializareAggregateArgs>): Prisma.PrismaPromise<GetSpecializareAggregateType<T>>

    /**
     * Group by Specializare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specializareGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends specializareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: specializareGroupByArgs['orderBy'] }
        : { orderBy?: specializareGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, specializareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecializareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the specializare model
   */
  readonly fields: specializareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for specializare.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__specializareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produse<T extends specializare$produseArgs<ExtArgs> = {}>(args?: Subset<T, specializare$produseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    utilizator_utilizator_specializareTospecializare<T extends specializare$utilizator_utilizator_specializareTospecializareArgs<ExtArgs> = {}>(args?: Subset<T, specializare$utilizator_utilizator_specializareTospecializareArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilizatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the specializare model
   */ 
  interface specializareFieldRefs {
    readonly idspecializare: FieldRef<"specializare", 'Int'>
    readonly nume: FieldRef<"specializare", 'String'>
  }
    

  // Custom InputTypes
  /**
   * specializare findUnique
   */
  export type specializareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specializare
     */
    select?: specializareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specializare
     */
    omit?: specializareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specializareInclude<ExtArgs> | null
    /**
     * Filter, which specializare to fetch.
     */
    where: specializareWhereUniqueInput
  }

  /**
   * specializare findUniqueOrThrow
   */
  export type specializareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specializare
     */
    select?: specializareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specializare
     */
    omit?: specializareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specializareInclude<ExtArgs> | null
    /**
     * Filter, which specializare to fetch.
     */
    where: specializareWhereUniqueInput
  }

  /**
   * specializare findFirst
   */
  export type specializareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specializare
     */
    select?: specializareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specializare
     */
    omit?: specializareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specializareInclude<ExtArgs> | null
    /**
     * Filter, which specializare to fetch.
     */
    where?: specializareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of specializares to fetch.
     */
    orderBy?: specializareOrderByWithRelationInput | specializareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for specializares.
     */
    cursor?: specializareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` specializares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` specializares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of specializares.
     */
    distinct?: SpecializareScalarFieldEnum | SpecializareScalarFieldEnum[]
  }

  /**
   * specializare findFirstOrThrow
   */
  export type specializareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specializare
     */
    select?: specializareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specializare
     */
    omit?: specializareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specializareInclude<ExtArgs> | null
    /**
     * Filter, which specializare to fetch.
     */
    where?: specializareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of specializares to fetch.
     */
    orderBy?: specializareOrderByWithRelationInput | specializareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for specializares.
     */
    cursor?: specializareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` specializares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` specializares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of specializares.
     */
    distinct?: SpecializareScalarFieldEnum | SpecializareScalarFieldEnum[]
  }

  /**
   * specializare findMany
   */
  export type specializareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specializare
     */
    select?: specializareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specializare
     */
    omit?: specializareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specializareInclude<ExtArgs> | null
    /**
     * Filter, which specializares to fetch.
     */
    where?: specializareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of specializares to fetch.
     */
    orderBy?: specializareOrderByWithRelationInput | specializareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing specializares.
     */
    cursor?: specializareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` specializares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` specializares.
     */
    skip?: number
    distinct?: SpecializareScalarFieldEnum | SpecializareScalarFieldEnum[]
  }

  /**
   * specializare create
   */
  export type specializareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specializare
     */
    select?: specializareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specializare
     */
    omit?: specializareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specializareInclude<ExtArgs> | null
    /**
     * The data needed to create a specializare.
     */
    data: XOR<specializareCreateInput, specializareUncheckedCreateInput>
  }

  /**
   * specializare createMany
   */
  export type specializareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many specializares.
     */
    data: specializareCreateManyInput | specializareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * specializare createManyAndReturn
   */
  export type specializareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specializare
     */
    select?: specializareSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the specializare
     */
    omit?: specializareOmit<ExtArgs> | null
    /**
     * The data used to create many specializares.
     */
    data: specializareCreateManyInput | specializareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * specializare update
   */
  export type specializareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specializare
     */
    select?: specializareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specializare
     */
    omit?: specializareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specializareInclude<ExtArgs> | null
    /**
     * The data needed to update a specializare.
     */
    data: XOR<specializareUpdateInput, specializareUncheckedUpdateInput>
    /**
     * Choose, which specializare to update.
     */
    where: specializareWhereUniqueInput
  }

  /**
   * specializare updateMany
   */
  export type specializareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update specializares.
     */
    data: XOR<specializareUpdateManyMutationInput, specializareUncheckedUpdateManyInput>
    /**
     * Filter which specializares to update
     */
    where?: specializareWhereInput
    /**
     * Limit how many specializares to update.
     */
    limit?: number
  }

  /**
   * specializare updateManyAndReturn
   */
  export type specializareUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specializare
     */
    select?: specializareSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the specializare
     */
    omit?: specializareOmit<ExtArgs> | null
    /**
     * The data used to update specializares.
     */
    data: XOR<specializareUpdateManyMutationInput, specializareUncheckedUpdateManyInput>
    /**
     * Filter which specializares to update
     */
    where?: specializareWhereInput
    /**
     * Limit how many specializares to update.
     */
    limit?: number
  }

  /**
   * specializare upsert
   */
  export type specializareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specializare
     */
    select?: specializareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specializare
     */
    omit?: specializareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specializareInclude<ExtArgs> | null
    /**
     * The filter to search for the specializare to update in case it exists.
     */
    where: specializareWhereUniqueInput
    /**
     * In case the specializare found by the `where` argument doesn't exist, create a new specializare with this data.
     */
    create: XOR<specializareCreateInput, specializareUncheckedCreateInput>
    /**
     * In case the specializare was found with the provided `where` argument, update it with this data.
     */
    update: XOR<specializareUpdateInput, specializareUncheckedUpdateInput>
  }

  /**
   * specializare delete
   */
  export type specializareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specializare
     */
    select?: specializareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specializare
     */
    omit?: specializareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specializareInclude<ExtArgs> | null
    /**
     * Filter which specializare to delete.
     */
    where: specializareWhereUniqueInput
  }

  /**
   * specializare deleteMany
   */
  export type specializareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which specializares to delete
     */
    where?: specializareWhereInput
    /**
     * Limit how many specializares to delete.
     */
    limit?: number
  }

  /**
   * specializare.produse
   */
  export type specializare$produseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produse
     */
    select?: produseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produse
     */
    omit?: produseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produseInclude<ExtArgs> | null
    where?: produseWhereInput
    orderBy?: produseOrderByWithRelationInput | produseOrderByWithRelationInput[]
    cursor?: produseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProduseScalarFieldEnum | ProduseScalarFieldEnum[]
  }

  /**
   * specializare.utilizator_utilizator_specializareTospecializare
   */
  export type specializare$utilizator_utilizator_specializareTospecializareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizator
     */
    select?: utilizatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizator
     */
    omit?: utilizatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatorInclude<ExtArgs> | null
    where?: utilizatorWhereInput
    orderBy?: utilizatorOrderByWithRelationInput | utilizatorOrderByWithRelationInput[]
    cursor?: utilizatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UtilizatorScalarFieldEnum | UtilizatorScalarFieldEnum[]
  }

  /**
   * specializare without action
   */
  export type specializareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specializare
     */
    select?: specializareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specializare
     */
    omit?: specializareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specializareInclude<ExtArgs> | null
  }


  /**
   * Model subscriptie
   */

  export type AggregateSubscriptie = {
    _count: SubscriptieCountAggregateOutputType | null
    _avg: SubscriptieAvgAggregateOutputType | null
    _sum: SubscriptieSumAggregateOutputType | null
    _min: SubscriptieMinAggregateOutputType | null
    _max: SubscriptieMaxAggregateOutputType | null
  }

  export type SubscriptieAvgAggregateOutputType = {
    numarmaximutilizatori: number | null
  }

  export type SubscriptieSumAggregateOutputType = {
    numarmaximutilizatori: number | null
  }

  export type SubscriptieMinAggregateOutputType = {
    tip: string | null
    numarmaximutilizatori: number | null
    timpraspunsp1: string | null
    timpraspunsp2: string | null
    timpraspunsp3: string | null
    timpraspunsp4: string | null
  }

  export type SubscriptieMaxAggregateOutputType = {
    tip: string | null
    numarmaximutilizatori: number | null
    timpraspunsp1: string | null
    timpraspunsp2: string | null
    timpraspunsp3: string | null
    timpraspunsp4: string | null
  }

  export type SubscriptieCountAggregateOutputType = {
    tip: number
    numarmaximutilizatori: number
    timpraspunsp1: number
    timpraspunsp2: number
    timpraspunsp3: number
    timpraspunsp4: number
    _all: number
  }


  export type SubscriptieAvgAggregateInputType = {
    numarmaximutilizatori?: true
  }

  export type SubscriptieSumAggregateInputType = {
    numarmaximutilizatori?: true
  }

  export type SubscriptieMinAggregateInputType = {
    tip?: true
    numarmaximutilizatori?: true
    timpraspunsp1?: true
    timpraspunsp2?: true
    timpraspunsp3?: true
    timpraspunsp4?: true
  }

  export type SubscriptieMaxAggregateInputType = {
    tip?: true
    numarmaximutilizatori?: true
    timpraspunsp1?: true
    timpraspunsp2?: true
    timpraspunsp3?: true
    timpraspunsp4?: true
  }

  export type SubscriptieCountAggregateInputType = {
    tip?: true
    numarmaximutilizatori?: true
    timpraspunsp1?: true
    timpraspunsp2?: true
    timpraspunsp3?: true
    timpraspunsp4?: true
    _all?: true
  }

  export type SubscriptieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subscriptie to aggregate.
     */
    where?: subscriptieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscripties to fetch.
     */
    orderBy?: subscriptieOrderByWithRelationInput | subscriptieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subscriptieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscripties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscripties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subscripties
    **/
    _count?: true | SubscriptieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptieMaxAggregateInputType
  }

  export type GetSubscriptieAggregateType<T extends SubscriptieAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptie[P]>
      : GetScalarType<T[P], AggregateSubscriptie[P]>
  }




  export type subscriptieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subscriptieWhereInput
    orderBy?: subscriptieOrderByWithAggregationInput | subscriptieOrderByWithAggregationInput[]
    by: SubscriptieScalarFieldEnum[] | SubscriptieScalarFieldEnum
    having?: subscriptieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptieCountAggregateInputType | true
    _avg?: SubscriptieAvgAggregateInputType
    _sum?: SubscriptieSumAggregateInputType
    _min?: SubscriptieMinAggregateInputType
    _max?: SubscriptieMaxAggregateInputType
  }

  export type SubscriptieGroupByOutputType = {
    tip: string
    numarmaximutilizatori: number
    timpraspunsp1: string
    timpraspunsp2: string
    timpraspunsp3: string
    timpraspunsp4: string
    _count: SubscriptieCountAggregateOutputType | null
    _avg: SubscriptieAvgAggregateOutputType | null
    _sum: SubscriptieSumAggregateOutputType | null
    _min: SubscriptieMinAggregateOutputType | null
    _max: SubscriptieMaxAggregateOutputType | null
  }

  type GetSubscriptieGroupByPayload<T extends subscriptieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptieGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptieGroupByOutputType[P]>
        }
      >
    >


  export type subscriptieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tip?: boolean
    numarmaximutilizatori?: boolean
    timpraspunsp1?: boolean
    timpraspunsp2?: boolean
    timpraspunsp3?: boolean
    timpraspunsp4?: boolean
    companie?: boolean | subscriptie$companieArgs<ExtArgs>
    _count?: boolean | SubscriptieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptie"]>

  export type subscriptieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tip?: boolean
    numarmaximutilizatori?: boolean
    timpraspunsp1?: boolean
    timpraspunsp2?: boolean
    timpraspunsp3?: boolean
    timpraspunsp4?: boolean
  }, ExtArgs["result"]["subscriptie"]>

  export type subscriptieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tip?: boolean
    numarmaximutilizatori?: boolean
    timpraspunsp1?: boolean
    timpraspunsp2?: boolean
    timpraspunsp3?: boolean
    timpraspunsp4?: boolean
  }, ExtArgs["result"]["subscriptie"]>

  export type subscriptieSelectScalar = {
    tip?: boolean
    numarmaximutilizatori?: boolean
    timpraspunsp1?: boolean
    timpraspunsp2?: boolean
    timpraspunsp3?: boolean
    timpraspunsp4?: boolean
  }

  export type subscriptieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tip" | "numarmaximutilizatori" | "timpraspunsp1" | "timpraspunsp2" | "timpraspunsp3" | "timpraspunsp4", ExtArgs["result"]["subscriptie"]>
  export type subscriptieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companie?: boolean | subscriptie$companieArgs<ExtArgs>
    _count?: boolean | SubscriptieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type subscriptieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type subscriptieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $subscriptiePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subscriptie"
    objects: {
      companie: Prisma.$companiePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tip: string
      numarmaximutilizatori: number
      timpraspunsp1: string
      timpraspunsp2: string
      timpraspunsp3: string
      timpraspunsp4: string
    }, ExtArgs["result"]["subscriptie"]>
    composites: {}
  }

  type subscriptieGetPayload<S extends boolean | null | undefined | subscriptieDefaultArgs> = $Result.GetResult<Prisma.$subscriptiePayload, S>

  type subscriptieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subscriptieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptieCountAggregateInputType | true
    }

  export interface subscriptieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subscriptie'], meta: { name: 'subscriptie' } }
    /**
     * Find zero or one Subscriptie that matches the filter.
     * @param {subscriptieFindUniqueArgs} args - Arguments to find a Subscriptie
     * @example
     * // Get one Subscriptie
     * const subscriptie = await prisma.subscriptie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subscriptieFindUniqueArgs>(args: SelectSubset<T, subscriptieFindUniqueArgs<ExtArgs>>): Prisma__subscriptieClient<$Result.GetResult<Prisma.$subscriptiePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscriptie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subscriptieFindUniqueOrThrowArgs} args - Arguments to find a Subscriptie
     * @example
     * // Get one Subscriptie
     * const subscriptie = await prisma.subscriptie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subscriptieFindUniqueOrThrowArgs>(args: SelectSubset<T, subscriptieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subscriptieClient<$Result.GetResult<Prisma.$subscriptiePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscriptie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptieFindFirstArgs} args - Arguments to find a Subscriptie
     * @example
     * // Get one Subscriptie
     * const subscriptie = await prisma.subscriptie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subscriptieFindFirstArgs>(args?: SelectSubset<T, subscriptieFindFirstArgs<ExtArgs>>): Prisma__subscriptieClient<$Result.GetResult<Prisma.$subscriptiePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscriptie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptieFindFirstOrThrowArgs} args - Arguments to find a Subscriptie
     * @example
     * // Get one Subscriptie
     * const subscriptie = await prisma.subscriptie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subscriptieFindFirstOrThrowArgs>(args?: SelectSubset<T, subscriptieFindFirstOrThrowArgs<ExtArgs>>): Prisma__subscriptieClient<$Result.GetResult<Prisma.$subscriptiePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscripties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscripties
     * const subscripties = await prisma.subscriptie.findMany()
     * 
     * // Get first 10 Subscripties
     * const subscripties = await prisma.subscriptie.findMany({ take: 10 })
     * 
     * // Only select the `tip`
     * const subscriptieWithTipOnly = await prisma.subscriptie.findMany({ select: { tip: true } })
     * 
     */
    findMany<T extends subscriptieFindManyArgs>(args?: SelectSubset<T, subscriptieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscriptie.
     * @param {subscriptieCreateArgs} args - Arguments to create a Subscriptie.
     * @example
     * // Create one Subscriptie
     * const Subscriptie = await prisma.subscriptie.create({
     *   data: {
     *     // ... data to create a Subscriptie
     *   }
     * })
     * 
     */
    create<T extends subscriptieCreateArgs>(args: SelectSubset<T, subscriptieCreateArgs<ExtArgs>>): Prisma__subscriptieClient<$Result.GetResult<Prisma.$subscriptiePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscripties.
     * @param {subscriptieCreateManyArgs} args - Arguments to create many Subscripties.
     * @example
     * // Create many Subscripties
     * const subscriptie = await prisma.subscriptie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subscriptieCreateManyArgs>(args?: SelectSubset<T, subscriptieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscripties and returns the data saved in the database.
     * @param {subscriptieCreateManyAndReturnArgs} args - Arguments to create many Subscripties.
     * @example
     * // Create many Subscripties
     * const subscriptie = await prisma.subscriptie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscripties and only return the `tip`
     * const subscriptieWithTipOnly = await prisma.subscriptie.createManyAndReturn({
     *   select: { tip: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends subscriptieCreateManyAndReturnArgs>(args?: SelectSubset<T, subscriptieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptiePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscriptie.
     * @param {subscriptieDeleteArgs} args - Arguments to delete one Subscriptie.
     * @example
     * // Delete one Subscriptie
     * const Subscriptie = await prisma.subscriptie.delete({
     *   where: {
     *     // ... filter to delete one Subscriptie
     *   }
     * })
     * 
     */
    delete<T extends subscriptieDeleteArgs>(args: SelectSubset<T, subscriptieDeleteArgs<ExtArgs>>): Prisma__subscriptieClient<$Result.GetResult<Prisma.$subscriptiePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscriptie.
     * @param {subscriptieUpdateArgs} args - Arguments to update one Subscriptie.
     * @example
     * // Update one Subscriptie
     * const subscriptie = await prisma.subscriptie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subscriptieUpdateArgs>(args: SelectSubset<T, subscriptieUpdateArgs<ExtArgs>>): Prisma__subscriptieClient<$Result.GetResult<Prisma.$subscriptiePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscripties.
     * @param {subscriptieDeleteManyArgs} args - Arguments to filter Subscripties to delete.
     * @example
     * // Delete a few Subscripties
     * const { count } = await prisma.subscriptie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subscriptieDeleteManyArgs>(args?: SelectSubset<T, subscriptieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscripties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscripties
     * const subscriptie = await prisma.subscriptie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subscriptieUpdateManyArgs>(args: SelectSubset<T, subscriptieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscripties and returns the data updated in the database.
     * @param {subscriptieUpdateManyAndReturnArgs} args - Arguments to update many Subscripties.
     * @example
     * // Update many Subscripties
     * const subscriptie = await prisma.subscriptie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscripties and only return the `tip`
     * const subscriptieWithTipOnly = await prisma.subscriptie.updateManyAndReturn({
     *   select: { tip: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends subscriptieUpdateManyAndReturnArgs>(args: SelectSubset<T, subscriptieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptiePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscriptie.
     * @param {subscriptieUpsertArgs} args - Arguments to update or create a Subscriptie.
     * @example
     * // Update or create a Subscriptie
     * const subscriptie = await prisma.subscriptie.upsert({
     *   create: {
     *     // ... data to create a Subscriptie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscriptie we want to update
     *   }
     * })
     */
    upsert<T extends subscriptieUpsertArgs>(args: SelectSubset<T, subscriptieUpsertArgs<ExtArgs>>): Prisma__subscriptieClient<$Result.GetResult<Prisma.$subscriptiePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscripties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptieCountArgs} args - Arguments to filter Subscripties to count.
     * @example
     * // Count the number of Subscripties
     * const count = await prisma.subscriptie.count({
     *   where: {
     *     // ... the filter for the Subscripties we want to count
     *   }
     * })
    **/
    count<T extends subscriptieCountArgs>(
      args?: Subset<T, subscriptieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscriptie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptieAggregateArgs>(args: Subset<T, SubscriptieAggregateArgs>): Prisma.PrismaPromise<GetSubscriptieAggregateType<T>>

    /**
     * Group by Subscriptie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends subscriptieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subscriptieGroupByArgs['orderBy'] }
        : { orderBy?: subscriptieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, subscriptieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subscriptie model
   */
  readonly fields: subscriptieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subscriptie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subscriptieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companie<T extends subscriptie$companieArgs<ExtArgs> = {}>(args?: Subset<T, subscriptie$companieArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the subscriptie model
   */ 
  interface subscriptieFieldRefs {
    readonly tip: FieldRef<"subscriptie", 'String'>
    readonly numarmaximutilizatori: FieldRef<"subscriptie", 'Int'>
    readonly timpraspunsp1: FieldRef<"subscriptie", 'String'>
    readonly timpraspunsp2: FieldRef<"subscriptie", 'String'>
    readonly timpraspunsp3: FieldRef<"subscriptie", 'String'>
    readonly timpraspunsp4: FieldRef<"subscriptie", 'String'>
  }
    

  // Custom InputTypes
  /**
   * subscriptie findUnique
   */
  export type subscriptieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptie
     */
    select?: subscriptieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptie
     */
    omit?: subscriptieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptieInclude<ExtArgs> | null
    /**
     * Filter, which subscriptie to fetch.
     */
    where: subscriptieWhereUniqueInput
  }

  /**
   * subscriptie findUniqueOrThrow
   */
  export type subscriptieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptie
     */
    select?: subscriptieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptie
     */
    omit?: subscriptieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptieInclude<ExtArgs> | null
    /**
     * Filter, which subscriptie to fetch.
     */
    where: subscriptieWhereUniqueInput
  }

  /**
   * subscriptie findFirst
   */
  export type subscriptieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptie
     */
    select?: subscriptieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptie
     */
    omit?: subscriptieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptieInclude<ExtArgs> | null
    /**
     * Filter, which subscriptie to fetch.
     */
    where?: subscriptieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscripties to fetch.
     */
    orderBy?: subscriptieOrderByWithRelationInput | subscriptieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subscripties.
     */
    cursor?: subscriptieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscripties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscripties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subscripties.
     */
    distinct?: SubscriptieScalarFieldEnum | SubscriptieScalarFieldEnum[]
  }

  /**
   * subscriptie findFirstOrThrow
   */
  export type subscriptieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptie
     */
    select?: subscriptieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptie
     */
    omit?: subscriptieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptieInclude<ExtArgs> | null
    /**
     * Filter, which subscriptie to fetch.
     */
    where?: subscriptieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscripties to fetch.
     */
    orderBy?: subscriptieOrderByWithRelationInput | subscriptieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subscripties.
     */
    cursor?: subscriptieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscripties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscripties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subscripties.
     */
    distinct?: SubscriptieScalarFieldEnum | SubscriptieScalarFieldEnum[]
  }

  /**
   * subscriptie findMany
   */
  export type subscriptieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptie
     */
    select?: subscriptieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptie
     */
    omit?: subscriptieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptieInclude<ExtArgs> | null
    /**
     * Filter, which subscripties to fetch.
     */
    where?: subscriptieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscripties to fetch.
     */
    orderBy?: subscriptieOrderByWithRelationInput | subscriptieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subscripties.
     */
    cursor?: subscriptieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscripties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscripties.
     */
    skip?: number
    distinct?: SubscriptieScalarFieldEnum | SubscriptieScalarFieldEnum[]
  }

  /**
   * subscriptie create
   */
  export type subscriptieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptie
     */
    select?: subscriptieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptie
     */
    omit?: subscriptieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptieInclude<ExtArgs> | null
    /**
     * The data needed to create a subscriptie.
     */
    data: XOR<subscriptieCreateInput, subscriptieUncheckedCreateInput>
  }

  /**
   * subscriptie createMany
   */
  export type subscriptieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subscripties.
     */
    data: subscriptieCreateManyInput | subscriptieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subscriptie createManyAndReturn
   */
  export type subscriptieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptie
     */
    select?: subscriptieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptie
     */
    omit?: subscriptieOmit<ExtArgs> | null
    /**
     * The data used to create many subscripties.
     */
    data: subscriptieCreateManyInput | subscriptieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subscriptie update
   */
  export type subscriptieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptie
     */
    select?: subscriptieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptie
     */
    omit?: subscriptieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptieInclude<ExtArgs> | null
    /**
     * The data needed to update a subscriptie.
     */
    data: XOR<subscriptieUpdateInput, subscriptieUncheckedUpdateInput>
    /**
     * Choose, which subscriptie to update.
     */
    where: subscriptieWhereUniqueInput
  }

  /**
   * subscriptie updateMany
   */
  export type subscriptieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subscripties.
     */
    data: XOR<subscriptieUpdateManyMutationInput, subscriptieUncheckedUpdateManyInput>
    /**
     * Filter which subscripties to update
     */
    where?: subscriptieWhereInput
    /**
     * Limit how many subscripties to update.
     */
    limit?: number
  }

  /**
   * subscriptie updateManyAndReturn
   */
  export type subscriptieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptie
     */
    select?: subscriptieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptie
     */
    omit?: subscriptieOmit<ExtArgs> | null
    /**
     * The data used to update subscripties.
     */
    data: XOR<subscriptieUpdateManyMutationInput, subscriptieUncheckedUpdateManyInput>
    /**
     * Filter which subscripties to update
     */
    where?: subscriptieWhereInput
    /**
     * Limit how many subscripties to update.
     */
    limit?: number
  }

  /**
   * subscriptie upsert
   */
  export type subscriptieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptie
     */
    select?: subscriptieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptie
     */
    omit?: subscriptieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptieInclude<ExtArgs> | null
    /**
     * The filter to search for the subscriptie to update in case it exists.
     */
    where: subscriptieWhereUniqueInput
    /**
     * In case the subscriptie found by the `where` argument doesn't exist, create a new subscriptie with this data.
     */
    create: XOR<subscriptieCreateInput, subscriptieUncheckedCreateInput>
    /**
     * In case the subscriptie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subscriptieUpdateInput, subscriptieUncheckedUpdateInput>
  }

  /**
   * subscriptie delete
   */
  export type subscriptieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptie
     */
    select?: subscriptieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptie
     */
    omit?: subscriptieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptieInclude<ExtArgs> | null
    /**
     * Filter which subscriptie to delete.
     */
    where: subscriptieWhereUniqueInput
  }

  /**
   * subscriptie deleteMany
   */
  export type subscriptieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subscripties to delete
     */
    where?: subscriptieWhereInput
    /**
     * Limit how many subscripties to delete.
     */
    limit?: number
  }

  /**
   * subscriptie.companie
   */
  export type subscriptie$companieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companie
     */
    select?: companieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companie
     */
    omit?: companieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companieInclude<ExtArgs> | null
    where?: companieWhereInput
    orderBy?: companieOrderByWithRelationInput | companieOrderByWithRelationInput[]
    cursor?: companieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanieScalarFieldEnum | CompanieScalarFieldEnum[]
  }

  /**
   * subscriptie without action
   */
  export type subscriptieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptie
     */
    select?: subscriptieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptie
     */
    omit?: subscriptieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptieInclude<ExtArgs> | null
  }


  /**
   * Model tichet
   */

  export type AggregateTichet = {
    _count: TichetCountAggregateOutputType | null
    _avg: TichetAvgAggregateOutputType | null
    _sum: TichetSumAggregateOutputType | null
    _min: TichetMinAggregateOutputType | null
    _max: TichetMaxAggregateOutputType | null
  }

  export type TichetAvgAggregateOutputType = {
    idtichet: number | null
    idsuport: number | null
    idutilizator: number | null
  }

  export type TichetSumAggregateOutputType = {
    idtichet: number | null
    idsuport: number | null
    idutilizator: number | null
  }

  export type TichetMinAggregateOutputType = {
    idtichet: number | null
    titlu: string | null
    tiptichet: string | null
    prioritate: string | null
    datacreare: Date | null
    datainchidere: Date | null
    statuscurent: string | null
    consultdeschis: boolean | null
    bugdeschis: boolean | null
    produs: string | null
    escaladat: boolean | null
    idsuport: number | null
    idutilizator: number | null
    linkdocs: string | null
    linkdrive: string | null
  }

  export type TichetMaxAggregateOutputType = {
    idtichet: number | null
    titlu: string | null
    tiptichet: string | null
    prioritate: string | null
    datacreare: Date | null
    datainchidere: Date | null
    statuscurent: string | null
    consultdeschis: boolean | null
    bugdeschis: boolean | null
    produs: string | null
    escaladat: boolean | null
    idsuport: number | null
    idutilizator: number | null
    linkdocs: string | null
    linkdrive: string | null
  }

  export type TichetCountAggregateOutputType = {
    idtichet: number
    titlu: number
    tiptichet: number
    prioritate: number
    datacreare: number
    datainchidere: number
    statuscurent: number
    consultdeschis: number
    bugdeschis: number
    produs: number
    escaladat: number
    idsuport: number
    idutilizator: number
    linkdocs: number
    linkdrive: number
    _all: number
  }


  export type TichetAvgAggregateInputType = {
    idtichet?: true
    idsuport?: true
    idutilizator?: true
  }

  export type TichetSumAggregateInputType = {
    idtichet?: true
    idsuport?: true
    idutilizator?: true
  }

  export type TichetMinAggregateInputType = {
    idtichet?: true
    titlu?: true
    tiptichet?: true
    prioritate?: true
    datacreare?: true
    datainchidere?: true
    statuscurent?: true
    consultdeschis?: true
    bugdeschis?: true
    produs?: true
    escaladat?: true
    idsuport?: true
    idutilizator?: true
    linkdocs?: true
    linkdrive?: true
  }

  export type TichetMaxAggregateInputType = {
    idtichet?: true
    titlu?: true
    tiptichet?: true
    prioritate?: true
    datacreare?: true
    datainchidere?: true
    statuscurent?: true
    consultdeschis?: true
    bugdeschis?: true
    produs?: true
    escaladat?: true
    idsuport?: true
    idutilizator?: true
    linkdocs?: true
    linkdrive?: true
  }

  export type TichetCountAggregateInputType = {
    idtichet?: true
    titlu?: true
    tiptichet?: true
    prioritate?: true
    datacreare?: true
    datainchidere?: true
    statuscurent?: true
    consultdeschis?: true
    bugdeschis?: true
    produs?: true
    escaladat?: true
    idsuport?: true
    idutilizator?: true
    linkdocs?: true
    linkdrive?: true
    _all?: true
  }

  export type TichetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tichet to aggregate.
     */
    where?: tichetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tichets to fetch.
     */
    orderBy?: tichetOrderByWithRelationInput | tichetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tichetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tichets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tichets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tichets
    **/
    _count?: true | TichetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TichetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TichetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TichetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TichetMaxAggregateInputType
  }

  export type GetTichetAggregateType<T extends TichetAggregateArgs> = {
        [P in keyof T & keyof AggregateTichet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTichet[P]>
      : GetScalarType<T[P], AggregateTichet[P]>
  }




  export type tichetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tichetWhereInput
    orderBy?: tichetOrderByWithAggregationInput | tichetOrderByWithAggregationInput[]
    by: TichetScalarFieldEnum[] | TichetScalarFieldEnum
    having?: tichetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TichetCountAggregateInputType | true
    _avg?: TichetAvgAggregateInputType
    _sum?: TichetSumAggregateInputType
    _min?: TichetMinAggregateInputType
    _max?: TichetMaxAggregateInputType
  }

  export type TichetGroupByOutputType = {
    idtichet: number
    titlu: string
    tiptichet: string
    prioritate: string
    datacreare: Date
    datainchidere: Date
    statuscurent: string
    consultdeschis: boolean
    bugdeschis: boolean
    produs: string
    escaladat: boolean
    idsuport: number
    idutilizator: number
    linkdocs: string | null
    linkdrive: string | null
    _count: TichetCountAggregateOutputType | null
    _avg: TichetAvgAggregateOutputType | null
    _sum: TichetSumAggregateOutputType | null
    _min: TichetMinAggregateOutputType | null
    _max: TichetMaxAggregateOutputType | null
  }

  type GetTichetGroupByPayload<T extends tichetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TichetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TichetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TichetGroupByOutputType[P]>
            : GetScalarType<T[P], TichetGroupByOutputType[P]>
        }
      >
    >


  export type tichetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idtichet?: boolean
    titlu?: boolean
    tiptichet?: boolean
    prioritate?: boolean
    datacreare?: boolean
    datainchidere?: boolean
    statuscurent?: boolean
    consultdeschis?: boolean
    bugdeschis?: boolean
    produs?: boolean
    escaladat?: boolean
    idsuport?: boolean
    idutilizator?: boolean
    linkdocs?: boolean
    linkdrive?: boolean
    istorictichet?: boolean | tichet$istorictichetArgs<ExtArgs>
    mesaje?: boolean | tichet$mesajeArgs<ExtArgs>
    utilizator_tichet_idsuportToutilizator?: boolean | utilizatorDefaultArgs<ExtArgs>
    utilizator_tichet_idutilizatorToutilizator?: boolean | utilizatorDefaultArgs<ExtArgs>
    _count?: boolean | TichetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tichet"]>

  export type tichetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idtichet?: boolean
    titlu?: boolean
    tiptichet?: boolean
    prioritate?: boolean
    datacreare?: boolean
    datainchidere?: boolean
    statuscurent?: boolean
    consultdeschis?: boolean
    bugdeschis?: boolean
    produs?: boolean
    escaladat?: boolean
    idsuport?: boolean
    idutilizator?: boolean
    linkdocs?: boolean
    linkdrive?: boolean
    utilizator_tichet_idsuportToutilizator?: boolean | utilizatorDefaultArgs<ExtArgs>
    utilizator_tichet_idutilizatorToutilizator?: boolean | utilizatorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tichet"]>

  export type tichetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idtichet?: boolean
    titlu?: boolean
    tiptichet?: boolean
    prioritate?: boolean
    datacreare?: boolean
    datainchidere?: boolean
    statuscurent?: boolean
    consultdeschis?: boolean
    bugdeschis?: boolean
    produs?: boolean
    escaladat?: boolean
    idsuport?: boolean
    idutilizator?: boolean
    linkdocs?: boolean
    linkdrive?: boolean
    utilizator_tichet_idsuportToutilizator?: boolean | utilizatorDefaultArgs<ExtArgs>
    utilizator_tichet_idutilizatorToutilizator?: boolean | utilizatorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tichet"]>

  export type tichetSelectScalar = {
    idtichet?: boolean
    titlu?: boolean
    tiptichet?: boolean
    prioritate?: boolean
    datacreare?: boolean
    datainchidere?: boolean
    statuscurent?: boolean
    consultdeschis?: boolean
    bugdeschis?: boolean
    produs?: boolean
    escaladat?: boolean
    idsuport?: boolean
    idutilizator?: boolean
    linkdocs?: boolean
    linkdrive?: boolean
  }

  export type tichetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idtichet" | "titlu" | "tiptichet" | "prioritate" | "datacreare" | "datainchidere" | "statuscurent" | "consultdeschis" | "bugdeschis" | "produs" | "escaladat" | "idsuport" | "idutilizator" | "linkdocs" | "linkdrive", ExtArgs["result"]["tichet"]>
  export type tichetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    istorictichet?: boolean | tichet$istorictichetArgs<ExtArgs>
    mesaje?: boolean | tichet$mesajeArgs<ExtArgs>
    utilizator_tichet_idsuportToutilizator?: boolean | utilizatorDefaultArgs<ExtArgs>
    utilizator_tichet_idutilizatorToutilizator?: boolean | utilizatorDefaultArgs<ExtArgs>
    _count?: boolean | TichetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tichetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilizator_tichet_idsuportToutilizator?: boolean | utilizatorDefaultArgs<ExtArgs>
    utilizator_tichet_idutilizatorToutilizator?: boolean | utilizatorDefaultArgs<ExtArgs>
  }
  export type tichetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilizator_tichet_idsuportToutilizator?: boolean | utilizatorDefaultArgs<ExtArgs>
    utilizator_tichet_idutilizatorToutilizator?: boolean | utilizatorDefaultArgs<ExtArgs>
  }

  export type $tichetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tichet"
    objects: {
      istorictichet: Prisma.$istorictichetPayload<ExtArgs>[]
      mesaje: Prisma.$mesajePayload<ExtArgs>[]
      utilizator_tichet_idsuportToutilizator: Prisma.$utilizatorPayload<ExtArgs>
      utilizator_tichet_idutilizatorToutilizator: Prisma.$utilizatorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idtichet: number
      titlu: string
      tiptichet: string
      prioritate: string
      datacreare: Date
      datainchidere: Date
      statuscurent: string
      consultdeschis: boolean
      bugdeschis: boolean
      produs: string
      escaladat: boolean
      idsuport: number
      idutilizator: number
      linkdocs: string | null
      linkdrive: string | null
    }, ExtArgs["result"]["tichet"]>
    composites: {}
  }

  type tichetGetPayload<S extends boolean | null | undefined | tichetDefaultArgs> = $Result.GetResult<Prisma.$tichetPayload, S>

  type tichetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tichetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TichetCountAggregateInputType | true
    }

  export interface tichetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tichet'], meta: { name: 'tichet' } }
    /**
     * Find zero or one Tichet that matches the filter.
     * @param {tichetFindUniqueArgs} args - Arguments to find a Tichet
     * @example
     * // Get one Tichet
     * const tichet = await prisma.tichet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tichetFindUniqueArgs>(args: SelectSubset<T, tichetFindUniqueArgs<ExtArgs>>): Prisma__tichetClient<$Result.GetResult<Prisma.$tichetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tichet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tichetFindUniqueOrThrowArgs} args - Arguments to find a Tichet
     * @example
     * // Get one Tichet
     * const tichet = await prisma.tichet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tichetFindUniqueOrThrowArgs>(args: SelectSubset<T, tichetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tichetClient<$Result.GetResult<Prisma.$tichetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tichet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tichetFindFirstArgs} args - Arguments to find a Tichet
     * @example
     * // Get one Tichet
     * const tichet = await prisma.tichet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tichetFindFirstArgs>(args?: SelectSubset<T, tichetFindFirstArgs<ExtArgs>>): Prisma__tichetClient<$Result.GetResult<Prisma.$tichetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tichet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tichetFindFirstOrThrowArgs} args - Arguments to find a Tichet
     * @example
     * // Get one Tichet
     * const tichet = await prisma.tichet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tichetFindFirstOrThrowArgs>(args?: SelectSubset<T, tichetFindFirstOrThrowArgs<ExtArgs>>): Prisma__tichetClient<$Result.GetResult<Prisma.$tichetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tichets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tichetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tichets
     * const tichets = await prisma.tichet.findMany()
     * 
     * // Get first 10 Tichets
     * const tichets = await prisma.tichet.findMany({ take: 10 })
     * 
     * // Only select the `idtichet`
     * const tichetWithIdtichetOnly = await prisma.tichet.findMany({ select: { idtichet: true } })
     * 
     */
    findMany<T extends tichetFindManyArgs>(args?: SelectSubset<T, tichetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tichetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tichet.
     * @param {tichetCreateArgs} args - Arguments to create a Tichet.
     * @example
     * // Create one Tichet
     * const Tichet = await prisma.tichet.create({
     *   data: {
     *     // ... data to create a Tichet
     *   }
     * })
     * 
     */
    create<T extends tichetCreateArgs>(args: SelectSubset<T, tichetCreateArgs<ExtArgs>>): Prisma__tichetClient<$Result.GetResult<Prisma.$tichetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tichets.
     * @param {tichetCreateManyArgs} args - Arguments to create many Tichets.
     * @example
     * // Create many Tichets
     * const tichet = await prisma.tichet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tichetCreateManyArgs>(args?: SelectSubset<T, tichetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tichets and returns the data saved in the database.
     * @param {tichetCreateManyAndReturnArgs} args - Arguments to create many Tichets.
     * @example
     * // Create many Tichets
     * const tichet = await prisma.tichet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tichets and only return the `idtichet`
     * const tichetWithIdtichetOnly = await prisma.tichet.createManyAndReturn({
     *   select: { idtichet: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tichetCreateManyAndReturnArgs>(args?: SelectSubset<T, tichetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tichetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tichet.
     * @param {tichetDeleteArgs} args - Arguments to delete one Tichet.
     * @example
     * // Delete one Tichet
     * const Tichet = await prisma.tichet.delete({
     *   where: {
     *     // ... filter to delete one Tichet
     *   }
     * })
     * 
     */
    delete<T extends tichetDeleteArgs>(args: SelectSubset<T, tichetDeleteArgs<ExtArgs>>): Prisma__tichetClient<$Result.GetResult<Prisma.$tichetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tichet.
     * @param {tichetUpdateArgs} args - Arguments to update one Tichet.
     * @example
     * // Update one Tichet
     * const tichet = await prisma.tichet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tichetUpdateArgs>(args: SelectSubset<T, tichetUpdateArgs<ExtArgs>>): Prisma__tichetClient<$Result.GetResult<Prisma.$tichetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tichets.
     * @param {tichetDeleteManyArgs} args - Arguments to filter Tichets to delete.
     * @example
     * // Delete a few Tichets
     * const { count } = await prisma.tichet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tichetDeleteManyArgs>(args?: SelectSubset<T, tichetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tichets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tichetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tichets
     * const tichet = await prisma.tichet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tichetUpdateManyArgs>(args: SelectSubset<T, tichetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tichets and returns the data updated in the database.
     * @param {tichetUpdateManyAndReturnArgs} args - Arguments to update many Tichets.
     * @example
     * // Update many Tichets
     * const tichet = await prisma.tichet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tichets and only return the `idtichet`
     * const tichetWithIdtichetOnly = await prisma.tichet.updateManyAndReturn({
     *   select: { idtichet: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tichetUpdateManyAndReturnArgs>(args: SelectSubset<T, tichetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tichetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tichet.
     * @param {tichetUpsertArgs} args - Arguments to update or create a Tichet.
     * @example
     * // Update or create a Tichet
     * const tichet = await prisma.tichet.upsert({
     *   create: {
     *     // ... data to create a Tichet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tichet we want to update
     *   }
     * })
     */
    upsert<T extends tichetUpsertArgs>(args: SelectSubset<T, tichetUpsertArgs<ExtArgs>>): Prisma__tichetClient<$Result.GetResult<Prisma.$tichetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tichets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tichetCountArgs} args - Arguments to filter Tichets to count.
     * @example
     * // Count the number of Tichets
     * const count = await prisma.tichet.count({
     *   where: {
     *     // ... the filter for the Tichets we want to count
     *   }
     * })
    **/
    count<T extends tichetCountArgs>(
      args?: Subset<T, tichetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TichetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tichet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TichetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TichetAggregateArgs>(args: Subset<T, TichetAggregateArgs>): Prisma.PrismaPromise<GetTichetAggregateType<T>>

    /**
     * Group by Tichet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tichetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tichetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tichetGroupByArgs['orderBy'] }
        : { orderBy?: tichetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tichetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTichetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tichet model
   */
  readonly fields: tichetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tichet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tichetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    istorictichet<T extends tichet$istorictichetArgs<ExtArgs> = {}>(args?: Subset<T, tichet$istorictichetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$istorictichetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mesaje<T extends tichet$mesajeArgs<ExtArgs> = {}>(args?: Subset<T, tichet$mesajeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mesajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    utilizator_tichet_idsuportToutilizator<T extends utilizatorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, utilizatorDefaultArgs<ExtArgs>>): Prisma__utilizatorClient<$Result.GetResult<Prisma.$utilizatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    utilizator_tichet_idutilizatorToutilizator<T extends utilizatorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, utilizatorDefaultArgs<ExtArgs>>): Prisma__utilizatorClient<$Result.GetResult<Prisma.$utilizatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tichet model
   */ 
  interface tichetFieldRefs {
    readonly idtichet: FieldRef<"tichet", 'Int'>
    readonly titlu: FieldRef<"tichet", 'String'>
    readonly tiptichet: FieldRef<"tichet", 'String'>
    readonly prioritate: FieldRef<"tichet", 'String'>
    readonly datacreare: FieldRef<"tichet", 'DateTime'>
    readonly datainchidere: FieldRef<"tichet", 'DateTime'>
    readonly statuscurent: FieldRef<"tichet", 'String'>
    readonly consultdeschis: FieldRef<"tichet", 'Boolean'>
    readonly bugdeschis: FieldRef<"tichet", 'Boolean'>
    readonly produs: FieldRef<"tichet", 'String'>
    readonly escaladat: FieldRef<"tichet", 'Boolean'>
    readonly idsuport: FieldRef<"tichet", 'Int'>
    readonly idutilizator: FieldRef<"tichet", 'Int'>
    readonly linkdocs: FieldRef<"tichet", 'String'>
    readonly linkdrive: FieldRef<"tichet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tichet findUnique
   */
  export type tichetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tichet
     */
    select?: tichetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tichet
     */
    omit?: tichetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tichetInclude<ExtArgs> | null
    /**
     * Filter, which tichet to fetch.
     */
    where: tichetWhereUniqueInput
  }

  /**
   * tichet findUniqueOrThrow
   */
  export type tichetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tichet
     */
    select?: tichetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tichet
     */
    omit?: tichetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tichetInclude<ExtArgs> | null
    /**
     * Filter, which tichet to fetch.
     */
    where: tichetWhereUniqueInput
  }

  /**
   * tichet findFirst
   */
  export type tichetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tichet
     */
    select?: tichetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tichet
     */
    omit?: tichetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tichetInclude<ExtArgs> | null
    /**
     * Filter, which tichet to fetch.
     */
    where?: tichetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tichets to fetch.
     */
    orderBy?: tichetOrderByWithRelationInput | tichetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tichets.
     */
    cursor?: tichetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tichets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tichets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tichets.
     */
    distinct?: TichetScalarFieldEnum | TichetScalarFieldEnum[]
  }

  /**
   * tichet findFirstOrThrow
   */
  export type tichetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tichet
     */
    select?: tichetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tichet
     */
    omit?: tichetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tichetInclude<ExtArgs> | null
    /**
     * Filter, which tichet to fetch.
     */
    where?: tichetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tichets to fetch.
     */
    orderBy?: tichetOrderByWithRelationInput | tichetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tichets.
     */
    cursor?: tichetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tichets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tichets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tichets.
     */
    distinct?: TichetScalarFieldEnum | TichetScalarFieldEnum[]
  }

  /**
   * tichet findMany
   */
  export type tichetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tichet
     */
    select?: tichetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tichet
     */
    omit?: tichetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tichetInclude<ExtArgs> | null
    /**
     * Filter, which tichets to fetch.
     */
    where?: tichetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tichets to fetch.
     */
    orderBy?: tichetOrderByWithRelationInput | tichetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tichets.
     */
    cursor?: tichetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tichets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tichets.
     */
    skip?: number
    distinct?: TichetScalarFieldEnum | TichetScalarFieldEnum[]
  }

  /**
   * tichet create
   */
  export type tichetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tichet
     */
    select?: tichetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tichet
     */
    omit?: tichetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tichetInclude<ExtArgs> | null
    /**
     * The data needed to create a tichet.
     */
    data: XOR<tichetCreateInput, tichetUncheckedCreateInput>
  }

  /**
   * tichet createMany
   */
  export type tichetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tichets.
     */
    data: tichetCreateManyInput | tichetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tichet createManyAndReturn
   */
  export type tichetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tichet
     */
    select?: tichetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tichet
     */
    omit?: tichetOmit<ExtArgs> | null
    /**
     * The data used to create many tichets.
     */
    data: tichetCreateManyInput | tichetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tichetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tichet update
   */
  export type tichetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tichet
     */
    select?: tichetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tichet
     */
    omit?: tichetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tichetInclude<ExtArgs> | null
    /**
     * The data needed to update a tichet.
     */
    data: XOR<tichetUpdateInput, tichetUncheckedUpdateInput>
    /**
     * Choose, which tichet to update.
     */
    where: tichetWhereUniqueInput
  }

  /**
   * tichet updateMany
   */
  export type tichetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tichets.
     */
    data: XOR<tichetUpdateManyMutationInput, tichetUncheckedUpdateManyInput>
    /**
     * Filter which tichets to update
     */
    where?: tichetWhereInput
    /**
     * Limit how many tichets to update.
     */
    limit?: number
  }

  /**
   * tichet updateManyAndReturn
   */
  export type tichetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tichet
     */
    select?: tichetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tichet
     */
    omit?: tichetOmit<ExtArgs> | null
    /**
     * The data used to update tichets.
     */
    data: XOR<tichetUpdateManyMutationInput, tichetUncheckedUpdateManyInput>
    /**
     * Filter which tichets to update
     */
    where?: tichetWhereInput
    /**
     * Limit how many tichets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tichetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tichet upsert
   */
  export type tichetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tichet
     */
    select?: tichetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tichet
     */
    omit?: tichetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tichetInclude<ExtArgs> | null
    /**
     * The filter to search for the tichet to update in case it exists.
     */
    where: tichetWhereUniqueInput
    /**
     * In case the tichet found by the `where` argument doesn't exist, create a new tichet with this data.
     */
    create: XOR<tichetCreateInput, tichetUncheckedCreateInput>
    /**
     * In case the tichet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tichetUpdateInput, tichetUncheckedUpdateInput>
  }

  /**
   * tichet delete
   */
  export type tichetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tichet
     */
    select?: tichetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tichet
     */
    omit?: tichetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tichetInclude<ExtArgs> | null
    /**
     * Filter which tichet to delete.
     */
    where: tichetWhereUniqueInput
  }

  /**
   * tichet deleteMany
   */
  export type tichetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tichets to delete
     */
    where?: tichetWhereInput
    /**
     * Limit how many tichets to delete.
     */
    limit?: number
  }

  /**
   * tichet.istorictichet
   */
  export type tichet$istorictichetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the istorictichet
     */
    select?: istorictichetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the istorictichet
     */
    omit?: istorictichetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: istorictichetInclude<ExtArgs> | null
    where?: istorictichetWhereInput
    orderBy?: istorictichetOrderByWithRelationInput | istorictichetOrderByWithRelationInput[]
    cursor?: istorictichetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IstorictichetScalarFieldEnum | IstorictichetScalarFieldEnum[]
  }

  /**
   * tichet.mesaje
   */
  export type tichet$mesajeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mesaje
     */
    select?: mesajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mesaje
     */
    omit?: mesajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mesajeInclude<ExtArgs> | null
    where?: mesajeWhereInput
    orderBy?: mesajeOrderByWithRelationInput | mesajeOrderByWithRelationInput[]
    cursor?: mesajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MesajeScalarFieldEnum | MesajeScalarFieldEnum[]
  }

  /**
   * tichet without action
   */
  export type tichetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tichet
     */
    select?: tichetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tichet
     */
    omit?: tichetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tichetInclude<ExtArgs> | null
  }


  /**
   * Model utilizator
   */

  export type AggregateUtilizator = {
    _count: UtilizatorCountAggregateOutputType | null
    _avg: UtilizatorAvgAggregateOutputType | null
    _sum: UtilizatorSumAggregateOutputType | null
    _min: UtilizatorMinAggregateOutputType | null
    _max: UtilizatorMaxAggregateOutputType | null
  }

  export type UtilizatorAvgAggregateOutputType = {
    idutilizator: number | null
    idcompanie: number | null
    specializare: number | null
  }

  export type UtilizatorSumAggregateOutputType = {
    idutilizator: number | null
    idcompanie: number | null
    specializare: number | null
  }

  export type UtilizatorMinAggregateOutputType = {
    idutilizator: number | null
    email: string | null
    nume: string | null
    prenume: string | null
    modalitatelogare: string | null
    pozaprofil: string | null
    datacreare: Date | null
    idcompanie: number | null
    tiputilizator: string | null
    specializare: number | null
  }

  export type UtilizatorMaxAggregateOutputType = {
    idutilizator: number | null
    email: string | null
    nume: string | null
    prenume: string | null
    modalitatelogare: string | null
    pozaprofil: string | null
    datacreare: Date | null
    idcompanie: number | null
    tiputilizator: string | null
    specializare: number | null
  }

  export type UtilizatorCountAggregateOutputType = {
    idutilizator: number
    email: number
    nume: number
    prenume: number
    modalitatelogare: number
    pozaprofil: number
    datacreare: number
    idcompanie: number
    tiputilizator: number
    specializare: number
    _all: number
  }


  export type UtilizatorAvgAggregateInputType = {
    idutilizator?: true
    idcompanie?: true
    specializare?: true
  }

  export type UtilizatorSumAggregateInputType = {
    idutilizator?: true
    idcompanie?: true
    specializare?: true
  }

  export type UtilizatorMinAggregateInputType = {
    idutilizator?: true
    email?: true
    nume?: true
    prenume?: true
    modalitatelogare?: true
    pozaprofil?: true
    datacreare?: true
    idcompanie?: true
    tiputilizator?: true
    specializare?: true
  }

  export type UtilizatorMaxAggregateInputType = {
    idutilizator?: true
    email?: true
    nume?: true
    prenume?: true
    modalitatelogare?: true
    pozaprofil?: true
    datacreare?: true
    idcompanie?: true
    tiputilizator?: true
    specializare?: true
  }

  export type UtilizatorCountAggregateInputType = {
    idutilizator?: true
    email?: true
    nume?: true
    prenume?: true
    modalitatelogare?: true
    pozaprofil?: true
    datacreare?: true
    idcompanie?: true
    tiputilizator?: true
    specializare?: true
    _all?: true
  }

  export type UtilizatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which utilizator to aggregate.
     */
    where?: utilizatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilizators to fetch.
     */
    orderBy?: utilizatorOrderByWithRelationInput | utilizatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: utilizatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilizators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilizators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned utilizators
    **/
    _count?: true | UtilizatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UtilizatorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UtilizatorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilizatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilizatorMaxAggregateInputType
  }

  export type GetUtilizatorAggregateType<T extends UtilizatorAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilizator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilizator[P]>
      : GetScalarType<T[P], AggregateUtilizator[P]>
  }




  export type utilizatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: utilizatorWhereInput
    orderBy?: utilizatorOrderByWithAggregationInput | utilizatorOrderByWithAggregationInput[]
    by: UtilizatorScalarFieldEnum[] | UtilizatorScalarFieldEnum
    having?: utilizatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilizatorCountAggregateInputType | true
    _avg?: UtilizatorAvgAggregateInputType
    _sum?: UtilizatorSumAggregateInputType
    _min?: UtilizatorMinAggregateInputType
    _max?: UtilizatorMaxAggregateInputType
  }

  export type UtilizatorGroupByOutputType = {
    idutilizator: number
    email: string
    nume: string
    prenume: string
    modalitatelogare: string
    pozaprofil: string
    datacreare: Date
    idcompanie: number | null
    tiputilizator: string
    specializare: number | null
    _count: UtilizatorCountAggregateOutputType | null
    _avg: UtilizatorAvgAggregateOutputType | null
    _sum: UtilizatorSumAggregateOutputType | null
    _min: UtilizatorMinAggregateOutputType | null
    _max: UtilizatorMaxAggregateOutputType | null
  }

  type GetUtilizatorGroupByPayload<T extends utilizatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilizatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilizatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilizatorGroupByOutputType[P]>
            : GetScalarType<T[P], UtilizatorGroupByOutputType[P]>
        }
      >
    >


  export type utilizatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idutilizator?: boolean
    email?: boolean
    nume?: boolean
    prenume?: boolean
    modalitatelogare?: boolean
    pozaprofil?: boolean
    datacreare?: boolean
    idcompanie?: boolean
    tiputilizator?: boolean
    specializare?: boolean
    tichet_tichet_idsuportToutilizator?: boolean | utilizator$tichet_tichet_idsuportToutilizatorArgs<ExtArgs>
    tichet_tichet_idutilizatorToutilizator?: boolean | utilizator$tichet_tichet_idutilizatorToutilizatorArgs<ExtArgs>
    companie?: boolean | utilizator$companieArgs<ExtArgs>
    specializare_utilizator_specializareTospecializare?: boolean | utilizator$specializare_utilizator_specializareTospecializareArgs<ExtArgs>
    _count?: boolean | UtilizatorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilizator"]>

  export type utilizatorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idutilizator?: boolean
    email?: boolean
    nume?: boolean
    prenume?: boolean
    modalitatelogare?: boolean
    pozaprofil?: boolean
    datacreare?: boolean
    idcompanie?: boolean
    tiputilizator?: boolean
    specializare?: boolean
    companie?: boolean | utilizator$companieArgs<ExtArgs>
    specializare_utilizator_specializareTospecializare?: boolean | utilizator$specializare_utilizator_specializareTospecializareArgs<ExtArgs>
  }, ExtArgs["result"]["utilizator"]>

  export type utilizatorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idutilizator?: boolean
    email?: boolean
    nume?: boolean
    prenume?: boolean
    modalitatelogare?: boolean
    pozaprofil?: boolean
    datacreare?: boolean
    idcompanie?: boolean
    tiputilizator?: boolean
    specializare?: boolean
    companie?: boolean | utilizator$companieArgs<ExtArgs>
    specializare_utilizator_specializareTospecializare?: boolean | utilizator$specializare_utilizator_specializareTospecializareArgs<ExtArgs>
  }, ExtArgs["result"]["utilizator"]>

  export type utilizatorSelectScalar = {
    idutilizator?: boolean
    email?: boolean
    nume?: boolean
    prenume?: boolean
    modalitatelogare?: boolean
    pozaprofil?: boolean
    datacreare?: boolean
    idcompanie?: boolean
    tiputilizator?: boolean
    specializare?: boolean
  }

  export type utilizatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idutilizator" | "email" | "nume" | "prenume" | "modalitatelogare" | "pozaprofil" | "datacreare" | "idcompanie" | "tiputilizator" | "specializare", ExtArgs["result"]["utilizator"]>
  export type utilizatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tichet_tichet_idsuportToutilizator?: boolean | utilizator$tichet_tichet_idsuportToutilizatorArgs<ExtArgs>
    tichet_tichet_idutilizatorToutilizator?: boolean | utilizator$tichet_tichet_idutilizatorToutilizatorArgs<ExtArgs>
    companie?: boolean | utilizator$companieArgs<ExtArgs>
    specializare_utilizator_specializareTospecializare?: boolean | utilizator$specializare_utilizator_specializareTospecializareArgs<ExtArgs>
    _count?: boolean | UtilizatorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type utilizatorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companie?: boolean | utilizator$companieArgs<ExtArgs>
    specializare_utilizator_specializareTospecializare?: boolean | utilizator$specializare_utilizator_specializareTospecializareArgs<ExtArgs>
  }
  export type utilizatorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companie?: boolean | utilizator$companieArgs<ExtArgs>
    specializare_utilizator_specializareTospecializare?: boolean | utilizator$specializare_utilizator_specializareTospecializareArgs<ExtArgs>
  }

  export type $utilizatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "utilizator"
    objects: {
      tichet_tichet_idsuportToutilizator: Prisma.$tichetPayload<ExtArgs>[]
      tichet_tichet_idutilizatorToutilizator: Prisma.$tichetPayload<ExtArgs>[]
      companie: Prisma.$companiePayload<ExtArgs> | null
      specializare_utilizator_specializareTospecializare: Prisma.$specializarePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      idutilizator: number
      email: string
      nume: string
      prenume: string
      modalitatelogare: string
      pozaprofil: string
      datacreare: Date
      idcompanie: number | null
      tiputilizator: string
      specializare: number | null
    }, ExtArgs["result"]["utilizator"]>
    composites: {}
  }

  type utilizatorGetPayload<S extends boolean | null | undefined | utilizatorDefaultArgs> = $Result.GetResult<Prisma.$utilizatorPayload, S>

  type utilizatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<utilizatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilizatorCountAggregateInputType | true
    }

  export interface utilizatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['utilizator'], meta: { name: 'utilizator' } }
    /**
     * Find zero or one Utilizator that matches the filter.
     * @param {utilizatorFindUniqueArgs} args - Arguments to find a Utilizator
     * @example
     * // Get one Utilizator
     * const utilizator = await prisma.utilizator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends utilizatorFindUniqueArgs>(args: SelectSubset<T, utilizatorFindUniqueArgs<ExtArgs>>): Prisma__utilizatorClient<$Result.GetResult<Prisma.$utilizatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilizator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {utilizatorFindUniqueOrThrowArgs} args - Arguments to find a Utilizator
     * @example
     * // Get one Utilizator
     * const utilizator = await prisma.utilizator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends utilizatorFindUniqueOrThrowArgs>(args: SelectSubset<T, utilizatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__utilizatorClient<$Result.GetResult<Prisma.$utilizatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilizator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilizatorFindFirstArgs} args - Arguments to find a Utilizator
     * @example
     * // Get one Utilizator
     * const utilizator = await prisma.utilizator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends utilizatorFindFirstArgs>(args?: SelectSubset<T, utilizatorFindFirstArgs<ExtArgs>>): Prisma__utilizatorClient<$Result.GetResult<Prisma.$utilizatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilizator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilizatorFindFirstOrThrowArgs} args - Arguments to find a Utilizator
     * @example
     * // Get one Utilizator
     * const utilizator = await prisma.utilizator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends utilizatorFindFirstOrThrowArgs>(args?: SelectSubset<T, utilizatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__utilizatorClient<$Result.GetResult<Prisma.$utilizatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilizators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilizatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilizators
     * const utilizators = await prisma.utilizator.findMany()
     * 
     * // Get first 10 Utilizators
     * const utilizators = await prisma.utilizator.findMany({ take: 10 })
     * 
     * // Only select the `idutilizator`
     * const utilizatorWithIdutilizatorOnly = await prisma.utilizator.findMany({ select: { idutilizator: true } })
     * 
     */
    findMany<T extends utilizatorFindManyArgs>(args?: SelectSubset<T, utilizatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilizatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilizator.
     * @param {utilizatorCreateArgs} args - Arguments to create a Utilizator.
     * @example
     * // Create one Utilizator
     * const Utilizator = await prisma.utilizator.create({
     *   data: {
     *     // ... data to create a Utilizator
     *   }
     * })
     * 
     */
    create<T extends utilizatorCreateArgs>(args: SelectSubset<T, utilizatorCreateArgs<ExtArgs>>): Prisma__utilizatorClient<$Result.GetResult<Prisma.$utilizatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilizators.
     * @param {utilizatorCreateManyArgs} args - Arguments to create many Utilizators.
     * @example
     * // Create many Utilizators
     * const utilizator = await prisma.utilizator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends utilizatorCreateManyArgs>(args?: SelectSubset<T, utilizatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Utilizators and returns the data saved in the database.
     * @param {utilizatorCreateManyAndReturnArgs} args - Arguments to create many Utilizators.
     * @example
     * // Create many Utilizators
     * const utilizator = await prisma.utilizator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Utilizators and only return the `idutilizator`
     * const utilizatorWithIdutilizatorOnly = await prisma.utilizator.createManyAndReturn({
     *   select: { idutilizator: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends utilizatorCreateManyAndReturnArgs>(args?: SelectSubset<T, utilizatorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilizatorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Utilizator.
     * @param {utilizatorDeleteArgs} args - Arguments to delete one Utilizator.
     * @example
     * // Delete one Utilizator
     * const Utilizator = await prisma.utilizator.delete({
     *   where: {
     *     // ... filter to delete one Utilizator
     *   }
     * })
     * 
     */
    delete<T extends utilizatorDeleteArgs>(args: SelectSubset<T, utilizatorDeleteArgs<ExtArgs>>): Prisma__utilizatorClient<$Result.GetResult<Prisma.$utilizatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilizator.
     * @param {utilizatorUpdateArgs} args - Arguments to update one Utilizator.
     * @example
     * // Update one Utilizator
     * const utilizator = await prisma.utilizator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends utilizatorUpdateArgs>(args: SelectSubset<T, utilizatorUpdateArgs<ExtArgs>>): Prisma__utilizatorClient<$Result.GetResult<Prisma.$utilizatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilizators.
     * @param {utilizatorDeleteManyArgs} args - Arguments to filter Utilizators to delete.
     * @example
     * // Delete a few Utilizators
     * const { count } = await prisma.utilizator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends utilizatorDeleteManyArgs>(args?: SelectSubset<T, utilizatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilizators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilizatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilizators
     * const utilizator = await prisma.utilizator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends utilizatorUpdateManyArgs>(args: SelectSubset<T, utilizatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilizators and returns the data updated in the database.
     * @param {utilizatorUpdateManyAndReturnArgs} args - Arguments to update many Utilizators.
     * @example
     * // Update many Utilizators
     * const utilizator = await prisma.utilizator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Utilizators and only return the `idutilizator`
     * const utilizatorWithIdutilizatorOnly = await prisma.utilizator.updateManyAndReturn({
     *   select: { idutilizator: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends utilizatorUpdateManyAndReturnArgs>(args: SelectSubset<T, utilizatorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilizatorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Utilizator.
     * @param {utilizatorUpsertArgs} args - Arguments to update or create a Utilizator.
     * @example
     * // Update or create a Utilizator
     * const utilizator = await prisma.utilizator.upsert({
     *   create: {
     *     // ... data to create a Utilizator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilizator we want to update
     *   }
     * })
     */
    upsert<T extends utilizatorUpsertArgs>(args: SelectSubset<T, utilizatorUpsertArgs<ExtArgs>>): Prisma__utilizatorClient<$Result.GetResult<Prisma.$utilizatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilizators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilizatorCountArgs} args - Arguments to filter Utilizators to count.
     * @example
     * // Count the number of Utilizators
     * const count = await prisma.utilizator.count({
     *   where: {
     *     // ... the filter for the Utilizators we want to count
     *   }
     * })
    **/
    count<T extends utilizatorCountArgs>(
      args?: Subset<T, utilizatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilizatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilizator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilizatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UtilizatorAggregateArgs>(args: Subset<T, UtilizatorAggregateArgs>): Prisma.PrismaPromise<GetUtilizatorAggregateType<T>>

    /**
     * Group by Utilizator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilizatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends utilizatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: utilizatorGroupByArgs['orderBy'] }
        : { orderBy?: utilizatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, utilizatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilizatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the utilizator model
   */
  readonly fields: utilizatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for utilizator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__utilizatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tichet_tichet_idsuportToutilizator<T extends utilizator$tichet_tichet_idsuportToutilizatorArgs<ExtArgs> = {}>(args?: Subset<T, utilizator$tichet_tichet_idsuportToutilizatorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tichetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tichet_tichet_idutilizatorToutilizator<T extends utilizator$tichet_tichet_idutilizatorToutilizatorArgs<ExtArgs> = {}>(args?: Subset<T, utilizator$tichet_tichet_idutilizatorToutilizatorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tichetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    companie<T extends utilizator$companieArgs<ExtArgs> = {}>(args?: Subset<T, utilizator$companieArgs<ExtArgs>>): Prisma__companieClient<$Result.GetResult<Prisma.$companiePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    specializare_utilizator_specializareTospecializare<T extends utilizator$specializare_utilizator_specializareTospecializareArgs<ExtArgs> = {}>(args?: Subset<T, utilizator$specializare_utilizator_specializareTospecializareArgs<ExtArgs>>): Prisma__specializareClient<$Result.GetResult<Prisma.$specializarePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the utilizator model
   */ 
  interface utilizatorFieldRefs {
    readonly idutilizator: FieldRef<"utilizator", 'Int'>
    readonly email: FieldRef<"utilizator", 'String'>
    readonly nume: FieldRef<"utilizator", 'String'>
    readonly prenume: FieldRef<"utilizator", 'String'>
    readonly modalitatelogare: FieldRef<"utilizator", 'String'>
    readonly pozaprofil: FieldRef<"utilizator", 'String'>
    readonly datacreare: FieldRef<"utilizator", 'DateTime'>
    readonly idcompanie: FieldRef<"utilizator", 'Int'>
    readonly tiputilizator: FieldRef<"utilizator", 'String'>
    readonly specializare: FieldRef<"utilizator", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * utilizator findUnique
   */
  export type utilizatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizator
     */
    select?: utilizatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizator
     */
    omit?: utilizatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatorInclude<ExtArgs> | null
    /**
     * Filter, which utilizator to fetch.
     */
    where: utilizatorWhereUniqueInput
  }

  /**
   * utilizator findUniqueOrThrow
   */
  export type utilizatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizator
     */
    select?: utilizatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizator
     */
    omit?: utilizatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatorInclude<ExtArgs> | null
    /**
     * Filter, which utilizator to fetch.
     */
    where: utilizatorWhereUniqueInput
  }

  /**
   * utilizator findFirst
   */
  export type utilizatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizator
     */
    select?: utilizatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizator
     */
    omit?: utilizatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatorInclude<ExtArgs> | null
    /**
     * Filter, which utilizator to fetch.
     */
    where?: utilizatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilizators to fetch.
     */
    orderBy?: utilizatorOrderByWithRelationInput | utilizatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for utilizators.
     */
    cursor?: utilizatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilizators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilizators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of utilizators.
     */
    distinct?: UtilizatorScalarFieldEnum | UtilizatorScalarFieldEnum[]
  }

  /**
   * utilizator findFirstOrThrow
   */
  export type utilizatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizator
     */
    select?: utilizatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizator
     */
    omit?: utilizatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatorInclude<ExtArgs> | null
    /**
     * Filter, which utilizator to fetch.
     */
    where?: utilizatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilizators to fetch.
     */
    orderBy?: utilizatorOrderByWithRelationInput | utilizatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for utilizators.
     */
    cursor?: utilizatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilizators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilizators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of utilizators.
     */
    distinct?: UtilizatorScalarFieldEnum | UtilizatorScalarFieldEnum[]
  }

  /**
   * utilizator findMany
   */
  export type utilizatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizator
     */
    select?: utilizatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizator
     */
    omit?: utilizatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatorInclude<ExtArgs> | null
    /**
     * Filter, which utilizators to fetch.
     */
    where?: utilizatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilizators to fetch.
     */
    orderBy?: utilizatorOrderByWithRelationInput | utilizatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing utilizators.
     */
    cursor?: utilizatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilizators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilizators.
     */
    skip?: number
    distinct?: UtilizatorScalarFieldEnum | UtilizatorScalarFieldEnum[]
  }

  /**
   * utilizator create
   */
  export type utilizatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizator
     */
    select?: utilizatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizator
     */
    omit?: utilizatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatorInclude<ExtArgs> | null
    /**
     * The data needed to create a utilizator.
     */
    data: XOR<utilizatorCreateInput, utilizatorUncheckedCreateInput>
  }

  /**
   * utilizator createMany
   */
  export type utilizatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many utilizators.
     */
    data: utilizatorCreateManyInput | utilizatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * utilizator createManyAndReturn
   */
  export type utilizatorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizator
     */
    select?: utilizatorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the utilizator
     */
    omit?: utilizatorOmit<ExtArgs> | null
    /**
     * The data used to create many utilizators.
     */
    data: utilizatorCreateManyInput | utilizatorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * utilizator update
   */
  export type utilizatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizator
     */
    select?: utilizatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizator
     */
    omit?: utilizatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatorInclude<ExtArgs> | null
    /**
     * The data needed to update a utilizator.
     */
    data: XOR<utilizatorUpdateInput, utilizatorUncheckedUpdateInput>
    /**
     * Choose, which utilizator to update.
     */
    where: utilizatorWhereUniqueInput
  }

  /**
   * utilizator updateMany
   */
  export type utilizatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update utilizators.
     */
    data: XOR<utilizatorUpdateManyMutationInput, utilizatorUncheckedUpdateManyInput>
    /**
     * Filter which utilizators to update
     */
    where?: utilizatorWhereInput
    /**
     * Limit how many utilizators to update.
     */
    limit?: number
  }

  /**
   * utilizator updateManyAndReturn
   */
  export type utilizatorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizator
     */
    select?: utilizatorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the utilizator
     */
    omit?: utilizatorOmit<ExtArgs> | null
    /**
     * The data used to update utilizators.
     */
    data: XOR<utilizatorUpdateManyMutationInput, utilizatorUncheckedUpdateManyInput>
    /**
     * Filter which utilizators to update
     */
    where?: utilizatorWhereInput
    /**
     * Limit how many utilizators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * utilizator upsert
   */
  export type utilizatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizator
     */
    select?: utilizatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizator
     */
    omit?: utilizatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatorInclude<ExtArgs> | null
    /**
     * The filter to search for the utilizator to update in case it exists.
     */
    where: utilizatorWhereUniqueInput
    /**
     * In case the utilizator found by the `where` argument doesn't exist, create a new utilizator with this data.
     */
    create: XOR<utilizatorCreateInput, utilizatorUncheckedCreateInput>
    /**
     * In case the utilizator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<utilizatorUpdateInput, utilizatorUncheckedUpdateInput>
  }

  /**
   * utilizator delete
   */
  export type utilizatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizator
     */
    select?: utilizatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizator
     */
    omit?: utilizatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatorInclude<ExtArgs> | null
    /**
     * Filter which utilizator to delete.
     */
    where: utilizatorWhereUniqueInput
  }

  /**
   * utilizator deleteMany
   */
  export type utilizatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which utilizators to delete
     */
    where?: utilizatorWhereInput
    /**
     * Limit how many utilizators to delete.
     */
    limit?: number
  }

  /**
   * utilizator.tichet_tichet_idsuportToutilizator
   */
  export type utilizator$tichet_tichet_idsuportToutilizatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tichet
     */
    select?: tichetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tichet
     */
    omit?: tichetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tichetInclude<ExtArgs> | null
    where?: tichetWhereInput
    orderBy?: tichetOrderByWithRelationInput | tichetOrderByWithRelationInput[]
    cursor?: tichetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TichetScalarFieldEnum | TichetScalarFieldEnum[]
  }

  /**
   * utilizator.tichet_tichet_idutilizatorToutilizator
   */
  export type utilizator$tichet_tichet_idutilizatorToutilizatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tichet
     */
    select?: tichetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tichet
     */
    omit?: tichetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tichetInclude<ExtArgs> | null
    where?: tichetWhereInput
    orderBy?: tichetOrderByWithRelationInput | tichetOrderByWithRelationInput[]
    cursor?: tichetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TichetScalarFieldEnum | TichetScalarFieldEnum[]
  }

  /**
   * utilizator.companie
   */
  export type utilizator$companieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companie
     */
    select?: companieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companie
     */
    omit?: companieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companieInclude<ExtArgs> | null
    where?: companieWhereInput
  }

  /**
   * utilizator.specializare_utilizator_specializareTospecializare
   */
  export type utilizator$specializare_utilizator_specializareTospecializareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specializare
     */
    select?: specializareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the specializare
     */
    omit?: specializareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specializareInclude<ExtArgs> | null
    where?: specializareWhereInput
  }

  /**
   * utilizator without action
   */
  export type utilizatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizator
     */
    select?: utilizatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizator
     */
    omit?: utilizatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatorInclude<ExtArgs> | null
  }


  /**
   * Model produse
   */

  export type AggregateProduse = {
    _count: ProduseCountAggregateOutputType | null
    _avg: ProduseAvgAggregateOutputType | null
    _sum: ProduseSumAggregateOutputType | null
    _min: ProduseMinAggregateOutputType | null
    _max: ProduseMaxAggregateOutputType | null
  }

  export type ProduseAvgAggregateOutputType = {
    idprodus: number | null
    idspecializare: number | null
  }

  export type ProduseSumAggregateOutputType = {
    idprodus: number | null
    idspecializare: number | null
  }

  export type ProduseMinAggregateOutputType = {
    idprodus: number | null
    nume: string | null
    idspecializare: number | null
  }

  export type ProduseMaxAggregateOutputType = {
    idprodus: number | null
    nume: string | null
    idspecializare: number | null
  }

  export type ProduseCountAggregateOutputType = {
    idprodus: number
    nume: number
    idspecializare: number
    _all: number
  }


  export type ProduseAvgAggregateInputType = {
    idprodus?: true
    idspecializare?: true
  }

  export type ProduseSumAggregateInputType = {
    idprodus?: true
    idspecializare?: true
  }

  export type ProduseMinAggregateInputType = {
    idprodus?: true
    nume?: true
    idspecializare?: true
  }

  export type ProduseMaxAggregateInputType = {
    idprodus?: true
    nume?: true
    idspecializare?: true
  }

  export type ProduseCountAggregateInputType = {
    idprodus?: true
    nume?: true
    idspecializare?: true
    _all?: true
  }

  export type ProduseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produse to aggregate.
     */
    where?: produseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produses to fetch.
     */
    orderBy?: produseOrderByWithRelationInput | produseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produses
    **/
    _count?: true | ProduseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProduseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProduseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProduseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProduseMaxAggregateInputType
  }

  export type GetProduseAggregateType<T extends ProduseAggregateArgs> = {
        [P in keyof T & keyof AggregateProduse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduse[P]>
      : GetScalarType<T[P], AggregateProduse[P]>
  }




  export type produseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produseWhereInput
    orderBy?: produseOrderByWithAggregationInput | produseOrderByWithAggregationInput[]
    by: ProduseScalarFieldEnum[] | ProduseScalarFieldEnum
    having?: produseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProduseCountAggregateInputType | true
    _avg?: ProduseAvgAggregateInputType
    _sum?: ProduseSumAggregateInputType
    _min?: ProduseMinAggregateInputType
    _max?: ProduseMaxAggregateInputType
  }

  export type ProduseGroupByOutputType = {
    idprodus: number
    nume: string
    idspecializare: number
    _count: ProduseCountAggregateOutputType | null
    _avg: ProduseAvgAggregateOutputType | null
    _sum: ProduseSumAggregateOutputType | null
    _min: ProduseMinAggregateOutputType | null
    _max: ProduseMaxAggregateOutputType | null
  }

  type GetProduseGroupByPayload<T extends produseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProduseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProduseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProduseGroupByOutputType[P]>
            : GetScalarType<T[P], ProduseGroupByOutputType[P]>
        }
      >
    >


  export type produseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idprodus?: boolean
    nume?: boolean
    idspecializare?: boolean
    specializare?: boolean | specializareDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produse"]>

  export type produseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idprodus?: boolean
    nume?: boolean
    idspecializare?: boolean
    specializare?: boolean | specializareDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produse"]>

  export type produseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idprodus?: boolean
    nume?: boolean
    idspecializare?: boolean
    specializare?: boolean | specializareDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produse"]>

  export type produseSelectScalar = {
    idprodus?: boolean
    nume?: boolean
    idspecializare?: boolean
  }

  export type produseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idprodus" | "nume" | "idspecializare", ExtArgs["result"]["produse"]>
  export type produseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specializare?: boolean | specializareDefaultArgs<ExtArgs>
  }
  export type produseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specializare?: boolean | specializareDefaultArgs<ExtArgs>
  }
  export type produseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specializare?: boolean | specializareDefaultArgs<ExtArgs>
  }

  export type $produsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produse"
    objects: {
      specializare: Prisma.$specializarePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idprodus: number
      nume: string
      idspecializare: number
    }, ExtArgs["result"]["produse"]>
    composites: {}
  }

  type produseGetPayload<S extends boolean | null | undefined | produseDefaultArgs> = $Result.GetResult<Prisma.$produsePayload, S>

  type produseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<produseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProduseCountAggregateInputType | true
    }

  export interface produseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produse'], meta: { name: 'produse' } }
    /**
     * Find zero or one Produse that matches the filter.
     * @param {produseFindUniqueArgs} args - Arguments to find a Produse
     * @example
     * // Get one Produse
     * const produse = await prisma.produse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends produseFindUniqueArgs>(args: SelectSubset<T, produseFindUniqueArgs<ExtArgs>>): Prisma__produseClient<$Result.GetResult<Prisma.$produsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {produseFindUniqueOrThrowArgs} args - Arguments to find a Produse
     * @example
     * // Get one Produse
     * const produse = await prisma.produse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends produseFindUniqueOrThrowArgs>(args: SelectSubset<T, produseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__produseClient<$Result.GetResult<Prisma.$produsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produseFindFirstArgs} args - Arguments to find a Produse
     * @example
     * // Get one Produse
     * const produse = await prisma.produse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends produseFindFirstArgs>(args?: SelectSubset<T, produseFindFirstArgs<ExtArgs>>): Prisma__produseClient<$Result.GetResult<Prisma.$produsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produseFindFirstOrThrowArgs} args - Arguments to find a Produse
     * @example
     * // Get one Produse
     * const produse = await prisma.produse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends produseFindFirstOrThrowArgs>(args?: SelectSubset<T, produseFindFirstOrThrowArgs<ExtArgs>>): Prisma__produseClient<$Result.GetResult<Prisma.$produsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produses
     * const produses = await prisma.produse.findMany()
     * 
     * // Get first 10 Produses
     * const produses = await prisma.produse.findMany({ take: 10 })
     * 
     * // Only select the `idprodus`
     * const produseWithIdprodusOnly = await prisma.produse.findMany({ select: { idprodus: true } })
     * 
     */
    findMany<T extends produseFindManyArgs>(args?: SelectSubset<T, produseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produse.
     * @param {produseCreateArgs} args - Arguments to create a Produse.
     * @example
     * // Create one Produse
     * const Produse = await prisma.produse.create({
     *   data: {
     *     // ... data to create a Produse
     *   }
     * })
     * 
     */
    create<T extends produseCreateArgs>(args: SelectSubset<T, produseCreateArgs<ExtArgs>>): Prisma__produseClient<$Result.GetResult<Prisma.$produsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produses.
     * @param {produseCreateManyArgs} args - Arguments to create many Produses.
     * @example
     * // Create many Produses
     * const produse = await prisma.produse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends produseCreateManyArgs>(args?: SelectSubset<T, produseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produses and returns the data saved in the database.
     * @param {produseCreateManyAndReturnArgs} args - Arguments to create many Produses.
     * @example
     * // Create many Produses
     * const produse = await prisma.produse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produses and only return the `idprodus`
     * const produseWithIdprodusOnly = await prisma.produse.createManyAndReturn({
     *   select: { idprodus: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends produseCreateManyAndReturnArgs>(args?: SelectSubset<T, produseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produse.
     * @param {produseDeleteArgs} args - Arguments to delete one Produse.
     * @example
     * // Delete one Produse
     * const Produse = await prisma.produse.delete({
     *   where: {
     *     // ... filter to delete one Produse
     *   }
     * })
     * 
     */
    delete<T extends produseDeleteArgs>(args: SelectSubset<T, produseDeleteArgs<ExtArgs>>): Prisma__produseClient<$Result.GetResult<Prisma.$produsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produse.
     * @param {produseUpdateArgs} args - Arguments to update one Produse.
     * @example
     * // Update one Produse
     * const produse = await prisma.produse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends produseUpdateArgs>(args: SelectSubset<T, produseUpdateArgs<ExtArgs>>): Prisma__produseClient<$Result.GetResult<Prisma.$produsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produses.
     * @param {produseDeleteManyArgs} args - Arguments to filter Produses to delete.
     * @example
     * // Delete a few Produses
     * const { count } = await prisma.produse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends produseDeleteManyArgs>(args?: SelectSubset<T, produseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produses
     * const produse = await prisma.produse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends produseUpdateManyArgs>(args: SelectSubset<T, produseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produses and returns the data updated in the database.
     * @param {produseUpdateManyAndReturnArgs} args - Arguments to update many Produses.
     * @example
     * // Update many Produses
     * const produse = await prisma.produse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produses and only return the `idprodus`
     * const produseWithIdprodusOnly = await prisma.produse.updateManyAndReturn({
     *   select: { idprodus: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends produseUpdateManyAndReturnArgs>(args: SelectSubset<T, produseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produse.
     * @param {produseUpsertArgs} args - Arguments to update or create a Produse.
     * @example
     * // Update or create a Produse
     * const produse = await prisma.produse.upsert({
     *   create: {
     *     // ... data to create a Produse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produse we want to update
     *   }
     * })
     */
    upsert<T extends produseUpsertArgs>(args: SelectSubset<T, produseUpsertArgs<ExtArgs>>): Prisma__produseClient<$Result.GetResult<Prisma.$produsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produseCountArgs} args - Arguments to filter Produses to count.
     * @example
     * // Count the number of Produses
     * const count = await prisma.produse.count({
     *   where: {
     *     // ... the filter for the Produses we want to count
     *   }
     * })
    **/
    count<T extends produseCountArgs>(
      args?: Subset<T, produseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProduseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProduseAggregateArgs>(args: Subset<T, ProduseAggregateArgs>): Prisma.PrismaPromise<GetProduseAggregateType<T>>

    /**
     * Group by Produse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends produseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produseGroupByArgs['orderBy'] }
        : { orderBy?: produseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, produseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produse model
   */
  readonly fields: produseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    specializare<T extends specializareDefaultArgs<ExtArgs> = {}>(args?: Subset<T, specializareDefaultArgs<ExtArgs>>): Prisma__specializareClient<$Result.GetResult<Prisma.$specializarePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the produse model
   */ 
  interface produseFieldRefs {
    readonly idprodus: FieldRef<"produse", 'Int'>
    readonly nume: FieldRef<"produse", 'String'>
    readonly idspecializare: FieldRef<"produse", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * produse findUnique
   */
  export type produseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produse
     */
    select?: produseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produse
     */
    omit?: produseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produseInclude<ExtArgs> | null
    /**
     * Filter, which produse to fetch.
     */
    where: produseWhereUniqueInput
  }

  /**
   * produse findUniqueOrThrow
   */
  export type produseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produse
     */
    select?: produseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produse
     */
    omit?: produseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produseInclude<ExtArgs> | null
    /**
     * Filter, which produse to fetch.
     */
    where: produseWhereUniqueInput
  }

  /**
   * produse findFirst
   */
  export type produseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produse
     */
    select?: produseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produse
     */
    omit?: produseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produseInclude<ExtArgs> | null
    /**
     * Filter, which produse to fetch.
     */
    where?: produseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produses to fetch.
     */
    orderBy?: produseOrderByWithRelationInput | produseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produses.
     */
    cursor?: produseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produses.
     */
    distinct?: ProduseScalarFieldEnum | ProduseScalarFieldEnum[]
  }

  /**
   * produse findFirstOrThrow
   */
  export type produseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produse
     */
    select?: produseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produse
     */
    omit?: produseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produseInclude<ExtArgs> | null
    /**
     * Filter, which produse to fetch.
     */
    where?: produseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produses to fetch.
     */
    orderBy?: produseOrderByWithRelationInput | produseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produses.
     */
    cursor?: produseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produses.
     */
    distinct?: ProduseScalarFieldEnum | ProduseScalarFieldEnum[]
  }

  /**
   * produse findMany
   */
  export type produseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produse
     */
    select?: produseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produse
     */
    omit?: produseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produseInclude<ExtArgs> | null
    /**
     * Filter, which produses to fetch.
     */
    where?: produseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produses to fetch.
     */
    orderBy?: produseOrderByWithRelationInput | produseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produses.
     */
    cursor?: produseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produses.
     */
    skip?: number
    distinct?: ProduseScalarFieldEnum | ProduseScalarFieldEnum[]
  }

  /**
   * produse create
   */
  export type produseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produse
     */
    select?: produseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produse
     */
    omit?: produseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produseInclude<ExtArgs> | null
    /**
     * The data needed to create a produse.
     */
    data: XOR<produseCreateInput, produseUncheckedCreateInput>
  }

  /**
   * produse createMany
   */
  export type produseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produses.
     */
    data: produseCreateManyInput | produseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produse createManyAndReturn
   */
  export type produseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produse
     */
    select?: produseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the produse
     */
    omit?: produseOmit<ExtArgs> | null
    /**
     * The data used to create many produses.
     */
    data: produseCreateManyInput | produseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * produse update
   */
  export type produseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produse
     */
    select?: produseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produse
     */
    omit?: produseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produseInclude<ExtArgs> | null
    /**
     * The data needed to update a produse.
     */
    data: XOR<produseUpdateInput, produseUncheckedUpdateInput>
    /**
     * Choose, which produse to update.
     */
    where: produseWhereUniqueInput
  }

  /**
   * produse updateMany
   */
  export type produseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produses.
     */
    data: XOR<produseUpdateManyMutationInput, produseUncheckedUpdateManyInput>
    /**
     * Filter which produses to update
     */
    where?: produseWhereInput
    /**
     * Limit how many produses to update.
     */
    limit?: number
  }

  /**
   * produse updateManyAndReturn
   */
  export type produseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produse
     */
    select?: produseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the produse
     */
    omit?: produseOmit<ExtArgs> | null
    /**
     * The data used to update produses.
     */
    data: XOR<produseUpdateManyMutationInput, produseUncheckedUpdateManyInput>
    /**
     * Filter which produses to update
     */
    where?: produseWhereInput
    /**
     * Limit how many produses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * produse upsert
   */
  export type produseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produse
     */
    select?: produseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produse
     */
    omit?: produseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produseInclude<ExtArgs> | null
    /**
     * The filter to search for the produse to update in case it exists.
     */
    where: produseWhereUniqueInput
    /**
     * In case the produse found by the `where` argument doesn't exist, create a new produse with this data.
     */
    create: XOR<produseCreateInput, produseUncheckedCreateInput>
    /**
     * In case the produse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produseUpdateInput, produseUncheckedUpdateInput>
  }

  /**
   * produse delete
   */
  export type produseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produse
     */
    select?: produseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produse
     */
    omit?: produseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produseInclude<ExtArgs> | null
    /**
     * Filter which produse to delete.
     */
    where: produseWhereUniqueInput
  }

  /**
   * produse deleteMany
   */
  export type produseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produses to delete
     */
    where?: produseWhereInput
    /**
     * Limit how many produses to delete.
     */
    limit?: number
  }

  /**
   * produse without action
   */
  export type produseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produse
     */
    select?: produseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produse
     */
    omit?: produseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompanieScalarFieldEnum: {
    idcompanie: 'idcompanie',
    datacreare: 'datacreare',
    nume: 'nume',
    status: 'status',
    focus: 'focus',
    notitedesprecompanie: 'notitedesprecompanie',
    tipsubscriptie: 'tipsubscriptie',
    idechipa: 'idechipa'
  };

  export type CompanieScalarFieldEnum = (typeof CompanieScalarFieldEnum)[keyof typeof CompanieScalarFieldEnum]


  export const EchipacompanieScalarFieldEnum: {
    idechipa: 'idechipa',
    nume: 'nume'
  };

  export type EchipacompanieScalarFieldEnum = (typeof EchipacompanieScalarFieldEnum)[keyof typeof EchipacompanieScalarFieldEnum]


  export const IstorictichetScalarFieldEnum: {
    idistoric: 'idistoric',
    idtichet: 'idtichet',
    datacreare: 'datacreare',
    modificare: 'modificare'
  };

  export type IstorictichetScalarFieldEnum = (typeof IstorictichetScalarFieldEnum)[keyof typeof IstorictichetScalarFieldEnum]


  export const MembruechipaScalarFieldEnum: {
    idmembru: 'idmembru',
    nume: 'nume',
    prenume: 'prenume',
    rol: 'rol',
    email: 'email',
    idechipa: 'idechipa'
  };

  export type MembruechipaScalarFieldEnum = (typeof MembruechipaScalarFieldEnum)[keyof typeof MembruechipaScalarFieldEnum]


  export const MesajeScalarFieldEnum: {
    idmesaj: 'idmesaj',
    datacreare: 'datacreare',
    emitatormesaj: 'emitatormesaj',
    emailsuport: 'emailsuport',
    emailutilizator: 'emailutilizator',
    continut: 'continut',
    idtichet: 'idtichet'
  };

  export type MesajeScalarFieldEnum = (typeof MesajeScalarFieldEnum)[keyof typeof MesajeScalarFieldEnum]


  export const SpecializareScalarFieldEnum: {
    idspecializare: 'idspecializare',
    nume: 'nume'
  };

  export type SpecializareScalarFieldEnum = (typeof SpecializareScalarFieldEnum)[keyof typeof SpecializareScalarFieldEnum]


  export const SubscriptieScalarFieldEnum: {
    tip: 'tip',
    numarmaximutilizatori: 'numarmaximutilizatori',
    timpraspunsp1: 'timpraspunsp1',
    timpraspunsp2: 'timpraspunsp2',
    timpraspunsp3: 'timpraspunsp3',
    timpraspunsp4: 'timpraspunsp4'
  };

  export type SubscriptieScalarFieldEnum = (typeof SubscriptieScalarFieldEnum)[keyof typeof SubscriptieScalarFieldEnum]


  export const TichetScalarFieldEnum: {
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

  export type TichetScalarFieldEnum = (typeof TichetScalarFieldEnum)[keyof typeof TichetScalarFieldEnum]


  export const UtilizatorScalarFieldEnum: {
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

  export type UtilizatorScalarFieldEnum = (typeof UtilizatorScalarFieldEnum)[keyof typeof UtilizatorScalarFieldEnum]


  export const ProduseScalarFieldEnum: {
    idprodus: 'idprodus',
    nume: 'nume',
    idspecializare: 'idspecializare'
  };

  export type ProduseScalarFieldEnum = (typeof ProduseScalarFieldEnum)[keyof typeof ProduseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type companieWhereInput = {
    AND?: companieWhereInput | companieWhereInput[]
    OR?: companieWhereInput[]
    NOT?: companieWhereInput | companieWhereInput[]
    idcompanie?: IntFilter<"companie"> | number
    datacreare?: DateTimeFilter<"companie"> | Date | string
    nume?: StringFilter<"companie"> | string
    status?: StringFilter<"companie"> | string
    focus?: BoolFilter<"companie"> | boolean
    notitedesprecompanie?: StringNullableFilter<"companie"> | string | null
    tipsubscriptie?: StringNullableFilter<"companie"> | string | null
    idechipa?: IntNullableFilter<"companie"> | number | null
    echipacompanie?: XOR<EchipacompanieNullableScalarRelationFilter, echipacompanieWhereInput> | null
    subscriptie?: XOR<SubscriptieNullableScalarRelationFilter, subscriptieWhereInput> | null
    utilizator?: UtilizatorListRelationFilter
  }

  export type companieOrderByWithRelationInput = {
    idcompanie?: SortOrder
    datacreare?: SortOrder
    nume?: SortOrder
    status?: SortOrder
    focus?: SortOrder
    notitedesprecompanie?: SortOrderInput | SortOrder
    tipsubscriptie?: SortOrderInput | SortOrder
    idechipa?: SortOrderInput | SortOrder
    echipacompanie?: echipacompanieOrderByWithRelationInput
    subscriptie?: subscriptieOrderByWithRelationInput
    utilizator?: utilizatorOrderByRelationAggregateInput
  }

  export type companieWhereUniqueInput = Prisma.AtLeast<{
    idcompanie?: number
    AND?: companieWhereInput | companieWhereInput[]
    OR?: companieWhereInput[]
    NOT?: companieWhereInput | companieWhereInput[]
    datacreare?: DateTimeFilter<"companie"> | Date | string
    nume?: StringFilter<"companie"> | string
    status?: StringFilter<"companie"> | string
    focus?: BoolFilter<"companie"> | boolean
    notitedesprecompanie?: StringNullableFilter<"companie"> | string | null
    tipsubscriptie?: StringNullableFilter<"companie"> | string | null
    idechipa?: IntNullableFilter<"companie"> | number | null
    echipacompanie?: XOR<EchipacompanieNullableScalarRelationFilter, echipacompanieWhereInput> | null
    subscriptie?: XOR<SubscriptieNullableScalarRelationFilter, subscriptieWhereInput> | null
    utilizator?: UtilizatorListRelationFilter
  }, "idcompanie">

  export type companieOrderByWithAggregationInput = {
    idcompanie?: SortOrder
    datacreare?: SortOrder
    nume?: SortOrder
    status?: SortOrder
    focus?: SortOrder
    notitedesprecompanie?: SortOrderInput | SortOrder
    tipsubscriptie?: SortOrderInput | SortOrder
    idechipa?: SortOrderInput | SortOrder
    _count?: companieCountOrderByAggregateInput
    _avg?: companieAvgOrderByAggregateInput
    _max?: companieMaxOrderByAggregateInput
    _min?: companieMinOrderByAggregateInput
    _sum?: companieSumOrderByAggregateInput
  }

  export type companieScalarWhereWithAggregatesInput = {
    AND?: companieScalarWhereWithAggregatesInput | companieScalarWhereWithAggregatesInput[]
    OR?: companieScalarWhereWithAggregatesInput[]
    NOT?: companieScalarWhereWithAggregatesInput | companieScalarWhereWithAggregatesInput[]
    idcompanie?: IntWithAggregatesFilter<"companie"> | number
    datacreare?: DateTimeWithAggregatesFilter<"companie"> | Date | string
    nume?: StringWithAggregatesFilter<"companie"> | string
    status?: StringWithAggregatesFilter<"companie"> | string
    focus?: BoolWithAggregatesFilter<"companie"> | boolean
    notitedesprecompanie?: StringNullableWithAggregatesFilter<"companie"> | string | null
    tipsubscriptie?: StringNullableWithAggregatesFilter<"companie"> | string | null
    idechipa?: IntNullableWithAggregatesFilter<"companie"> | number | null
  }

  export type echipacompanieWhereInput = {
    AND?: echipacompanieWhereInput | echipacompanieWhereInput[]
    OR?: echipacompanieWhereInput[]
    NOT?: echipacompanieWhereInput | echipacompanieWhereInput[]
    idechipa?: IntFilter<"echipacompanie"> | number
    nume?: StringFilter<"echipacompanie"> | string
    companie?: CompanieListRelationFilter
    membruechipa?: MembruechipaListRelationFilter
  }

  export type echipacompanieOrderByWithRelationInput = {
    idechipa?: SortOrder
    nume?: SortOrder
    companie?: companieOrderByRelationAggregateInput
    membruechipa?: membruechipaOrderByRelationAggregateInput
  }

  export type echipacompanieWhereUniqueInput = Prisma.AtLeast<{
    idechipa?: number
    AND?: echipacompanieWhereInput | echipacompanieWhereInput[]
    OR?: echipacompanieWhereInput[]
    NOT?: echipacompanieWhereInput | echipacompanieWhereInput[]
    nume?: StringFilter<"echipacompanie"> | string
    companie?: CompanieListRelationFilter
    membruechipa?: MembruechipaListRelationFilter
  }, "idechipa">

  export type echipacompanieOrderByWithAggregationInput = {
    idechipa?: SortOrder
    nume?: SortOrder
    _count?: echipacompanieCountOrderByAggregateInput
    _avg?: echipacompanieAvgOrderByAggregateInput
    _max?: echipacompanieMaxOrderByAggregateInput
    _min?: echipacompanieMinOrderByAggregateInput
    _sum?: echipacompanieSumOrderByAggregateInput
  }

  export type echipacompanieScalarWhereWithAggregatesInput = {
    AND?: echipacompanieScalarWhereWithAggregatesInput | echipacompanieScalarWhereWithAggregatesInput[]
    OR?: echipacompanieScalarWhereWithAggregatesInput[]
    NOT?: echipacompanieScalarWhereWithAggregatesInput | echipacompanieScalarWhereWithAggregatesInput[]
    idechipa?: IntWithAggregatesFilter<"echipacompanie"> | number
    nume?: StringWithAggregatesFilter<"echipacompanie"> | string
  }

  export type istorictichetWhereInput = {
    AND?: istorictichetWhereInput | istorictichetWhereInput[]
    OR?: istorictichetWhereInput[]
    NOT?: istorictichetWhereInput | istorictichetWhereInput[]
    idistoric?: IntFilter<"istorictichet"> | number
    idtichet?: IntFilter<"istorictichet"> | number
    datacreare?: DateTimeFilter<"istorictichet"> | Date | string
    modificare?: StringFilter<"istorictichet"> | string
    tichet?: XOR<TichetScalarRelationFilter, tichetWhereInput>
  }

  export type istorictichetOrderByWithRelationInput = {
    idistoric?: SortOrder
    idtichet?: SortOrder
    datacreare?: SortOrder
    modificare?: SortOrder
    tichet?: tichetOrderByWithRelationInput
  }

  export type istorictichetWhereUniqueInput = Prisma.AtLeast<{
    idistoric?: number
    AND?: istorictichetWhereInput | istorictichetWhereInput[]
    OR?: istorictichetWhereInput[]
    NOT?: istorictichetWhereInput | istorictichetWhereInput[]
    idtichet?: IntFilter<"istorictichet"> | number
    datacreare?: DateTimeFilter<"istorictichet"> | Date | string
    modificare?: StringFilter<"istorictichet"> | string
    tichet?: XOR<TichetScalarRelationFilter, tichetWhereInput>
  }, "idistoric">

  export type istorictichetOrderByWithAggregationInput = {
    idistoric?: SortOrder
    idtichet?: SortOrder
    datacreare?: SortOrder
    modificare?: SortOrder
    _count?: istorictichetCountOrderByAggregateInput
    _avg?: istorictichetAvgOrderByAggregateInput
    _max?: istorictichetMaxOrderByAggregateInput
    _min?: istorictichetMinOrderByAggregateInput
    _sum?: istorictichetSumOrderByAggregateInput
  }

  export type istorictichetScalarWhereWithAggregatesInput = {
    AND?: istorictichetScalarWhereWithAggregatesInput | istorictichetScalarWhereWithAggregatesInput[]
    OR?: istorictichetScalarWhereWithAggregatesInput[]
    NOT?: istorictichetScalarWhereWithAggregatesInput | istorictichetScalarWhereWithAggregatesInput[]
    idistoric?: IntWithAggregatesFilter<"istorictichet"> | number
    idtichet?: IntWithAggregatesFilter<"istorictichet"> | number
    datacreare?: DateTimeWithAggregatesFilter<"istorictichet"> | Date | string
    modificare?: StringWithAggregatesFilter<"istorictichet"> | string
  }

  export type membruechipaWhereInput = {
    AND?: membruechipaWhereInput | membruechipaWhereInput[]
    OR?: membruechipaWhereInput[]
    NOT?: membruechipaWhereInput | membruechipaWhereInput[]
    idmembru?: IntFilter<"membruechipa"> | number
    nume?: StringFilter<"membruechipa"> | string
    prenume?: StringFilter<"membruechipa"> | string
    rol?: StringFilter<"membruechipa"> | string
    email?: StringFilter<"membruechipa"> | string
    idechipa?: IntFilter<"membruechipa"> | number
    echipacompanie?: XOR<EchipacompanieScalarRelationFilter, echipacompanieWhereInput>
  }

  export type membruechipaOrderByWithRelationInput = {
    idmembru?: SortOrder
    nume?: SortOrder
    prenume?: SortOrder
    rol?: SortOrder
    email?: SortOrder
    idechipa?: SortOrder
    echipacompanie?: echipacompanieOrderByWithRelationInput
  }

  export type membruechipaWhereUniqueInput = Prisma.AtLeast<{
    idmembru?: number
    email?: string
    AND?: membruechipaWhereInput | membruechipaWhereInput[]
    OR?: membruechipaWhereInput[]
    NOT?: membruechipaWhereInput | membruechipaWhereInput[]
    nume?: StringFilter<"membruechipa"> | string
    prenume?: StringFilter<"membruechipa"> | string
    rol?: StringFilter<"membruechipa"> | string
    idechipa?: IntFilter<"membruechipa"> | number
    echipacompanie?: XOR<EchipacompanieScalarRelationFilter, echipacompanieWhereInput>
  }, "idmembru" | "email">

  export type membruechipaOrderByWithAggregationInput = {
    idmembru?: SortOrder
    nume?: SortOrder
    prenume?: SortOrder
    rol?: SortOrder
    email?: SortOrder
    idechipa?: SortOrder
    _count?: membruechipaCountOrderByAggregateInput
    _avg?: membruechipaAvgOrderByAggregateInput
    _max?: membruechipaMaxOrderByAggregateInput
    _min?: membruechipaMinOrderByAggregateInput
    _sum?: membruechipaSumOrderByAggregateInput
  }

  export type membruechipaScalarWhereWithAggregatesInput = {
    AND?: membruechipaScalarWhereWithAggregatesInput | membruechipaScalarWhereWithAggregatesInput[]
    OR?: membruechipaScalarWhereWithAggregatesInput[]
    NOT?: membruechipaScalarWhereWithAggregatesInput | membruechipaScalarWhereWithAggregatesInput[]
    idmembru?: IntWithAggregatesFilter<"membruechipa"> | number
    nume?: StringWithAggregatesFilter<"membruechipa"> | string
    prenume?: StringWithAggregatesFilter<"membruechipa"> | string
    rol?: StringWithAggregatesFilter<"membruechipa"> | string
    email?: StringWithAggregatesFilter<"membruechipa"> | string
    idechipa?: IntWithAggregatesFilter<"membruechipa"> | number
  }

  export type mesajeWhereInput = {
    AND?: mesajeWhereInput | mesajeWhereInput[]
    OR?: mesajeWhereInput[]
    NOT?: mesajeWhereInput | mesajeWhereInput[]
    idmesaj?: IntFilter<"mesaje"> | number
    datacreare?: DateTimeFilter<"mesaje"> | Date | string
    emitatormesaj?: StringFilter<"mesaje"> | string
    emailsuport?: StringFilter<"mesaje"> | string
    emailutilizator?: StringFilter<"mesaje"> | string
    continut?: StringFilter<"mesaje"> | string
    idtichet?: IntFilter<"mesaje"> | number
    tichet?: XOR<TichetScalarRelationFilter, tichetWhereInput>
  }

  export type mesajeOrderByWithRelationInput = {
    idmesaj?: SortOrder
    datacreare?: SortOrder
    emitatormesaj?: SortOrder
    emailsuport?: SortOrder
    emailutilizator?: SortOrder
    continut?: SortOrder
    idtichet?: SortOrder
    tichet?: tichetOrderByWithRelationInput
  }

  export type mesajeWhereUniqueInput = Prisma.AtLeast<{
    idmesaj?: number
    AND?: mesajeWhereInput | mesajeWhereInput[]
    OR?: mesajeWhereInput[]
    NOT?: mesajeWhereInput | mesajeWhereInput[]
    datacreare?: DateTimeFilter<"mesaje"> | Date | string
    emitatormesaj?: StringFilter<"mesaje"> | string
    emailsuport?: StringFilter<"mesaje"> | string
    emailutilizator?: StringFilter<"mesaje"> | string
    continut?: StringFilter<"mesaje"> | string
    idtichet?: IntFilter<"mesaje"> | number
    tichet?: XOR<TichetScalarRelationFilter, tichetWhereInput>
  }, "idmesaj">

  export type mesajeOrderByWithAggregationInput = {
    idmesaj?: SortOrder
    datacreare?: SortOrder
    emitatormesaj?: SortOrder
    emailsuport?: SortOrder
    emailutilizator?: SortOrder
    continut?: SortOrder
    idtichet?: SortOrder
    _count?: mesajeCountOrderByAggregateInput
    _avg?: mesajeAvgOrderByAggregateInput
    _max?: mesajeMaxOrderByAggregateInput
    _min?: mesajeMinOrderByAggregateInput
    _sum?: mesajeSumOrderByAggregateInput
  }

  export type mesajeScalarWhereWithAggregatesInput = {
    AND?: mesajeScalarWhereWithAggregatesInput | mesajeScalarWhereWithAggregatesInput[]
    OR?: mesajeScalarWhereWithAggregatesInput[]
    NOT?: mesajeScalarWhereWithAggregatesInput | mesajeScalarWhereWithAggregatesInput[]
    idmesaj?: IntWithAggregatesFilter<"mesaje"> | number
    datacreare?: DateTimeWithAggregatesFilter<"mesaje"> | Date | string
    emitatormesaj?: StringWithAggregatesFilter<"mesaje"> | string
    emailsuport?: StringWithAggregatesFilter<"mesaje"> | string
    emailutilizator?: StringWithAggregatesFilter<"mesaje"> | string
    continut?: StringWithAggregatesFilter<"mesaje"> | string
    idtichet?: IntWithAggregatesFilter<"mesaje"> | number
  }

  export type specializareWhereInput = {
    AND?: specializareWhereInput | specializareWhereInput[]
    OR?: specializareWhereInput[]
    NOT?: specializareWhereInput | specializareWhereInput[]
    idspecializare?: IntFilter<"specializare"> | number
    nume?: StringFilter<"specializare"> | string
    produse?: ProduseListRelationFilter
    utilizator_utilizator_specializareTospecializare?: UtilizatorListRelationFilter
  }

  export type specializareOrderByWithRelationInput = {
    idspecializare?: SortOrder
    nume?: SortOrder
    produse?: produseOrderByRelationAggregateInput
    utilizator_utilizator_specializareTospecializare?: utilizatorOrderByRelationAggregateInput
  }

  export type specializareWhereUniqueInput = Prisma.AtLeast<{
    idspecializare?: number
    AND?: specializareWhereInput | specializareWhereInput[]
    OR?: specializareWhereInput[]
    NOT?: specializareWhereInput | specializareWhereInput[]
    nume?: StringFilter<"specializare"> | string
    produse?: ProduseListRelationFilter
    utilizator_utilizator_specializareTospecializare?: UtilizatorListRelationFilter
  }, "idspecializare">

  export type specializareOrderByWithAggregationInput = {
    idspecializare?: SortOrder
    nume?: SortOrder
    _count?: specializareCountOrderByAggregateInput
    _avg?: specializareAvgOrderByAggregateInput
    _max?: specializareMaxOrderByAggregateInput
    _min?: specializareMinOrderByAggregateInput
    _sum?: specializareSumOrderByAggregateInput
  }

  export type specializareScalarWhereWithAggregatesInput = {
    AND?: specializareScalarWhereWithAggregatesInput | specializareScalarWhereWithAggregatesInput[]
    OR?: specializareScalarWhereWithAggregatesInput[]
    NOT?: specializareScalarWhereWithAggregatesInput | specializareScalarWhereWithAggregatesInput[]
    idspecializare?: IntWithAggregatesFilter<"specializare"> | number
    nume?: StringWithAggregatesFilter<"specializare"> | string
  }

  export type subscriptieWhereInput = {
    AND?: subscriptieWhereInput | subscriptieWhereInput[]
    OR?: subscriptieWhereInput[]
    NOT?: subscriptieWhereInput | subscriptieWhereInput[]
    tip?: StringFilter<"subscriptie"> | string
    numarmaximutilizatori?: IntFilter<"subscriptie"> | number
    timpraspunsp1?: StringFilter<"subscriptie"> | string
    timpraspunsp2?: StringFilter<"subscriptie"> | string
    timpraspunsp3?: StringFilter<"subscriptie"> | string
    timpraspunsp4?: StringFilter<"subscriptie"> | string
    companie?: CompanieListRelationFilter
  }

  export type subscriptieOrderByWithRelationInput = {
    tip?: SortOrder
    numarmaximutilizatori?: SortOrder
    timpraspunsp1?: SortOrder
    timpraspunsp2?: SortOrder
    timpraspunsp3?: SortOrder
    timpraspunsp4?: SortOrder
    companie?: companieOrderByRelationAggregateInput
  }

  export type subscriptieWhereUniqueInput = Prisma.AtLeast<{
    tip?: string
    AND?: subscriptieWhereInput | subscriptieWhereInput[]
    OR?: subscriptieWhereInput[]
    NOT?: subscriptieWhereInput | subscriptieWhereInput[]
    numarmaximutilizatori?: IntFilter<"subscriptie"> | number
    timpraspunsp1?: StringFilter<"subscriptie"> | string
    timpraspunsp2?: StringFilter<"subscriptie"> | string
    timpraspunsp3?: StringFilter<"subscriptie"> | string
    timpraspunsp4?: StringFilter<"subscriptie"> | string
    companie?: CompanieListRelationFilter
  }, "tip">

  export type subscriptieOrderByWithAggregationInput = {
    tip?: SortOrder
    numarmaximutilizatori?: SortOrder
    timpraspunsp1?: SortOrder
    timpraspunsp2?: SortOrder
    timpraspunsp3?: SortOrder
    timpraspunsp4?: SortOrder
    _count?: subscriptieCountOrderByAggregateInput
    _avg?: subscriptieAvgOrderByAggregateInput
    _max?: subscriptieMaxOrderByAggregateInput
    _min?: subscriptieMinOrderByAggregateInput
    _sum?: subscriptieSumOrderByAggregateInput
  }

  export type subscriptieScalarWhereWithAggregatesInput = {
    AND?: subscriptieScalarWhereWithAggregatesInput | subscriptieScalarWhereWithAggregatesInput[]
    OR?: subscriptieScalarWhereWithAggregatesInput[]
    NOT?: subscriptieScalarWhereWithAggregatesInput | subscriptieScalarWhereWithAggregatesInput[]
    tip?: StringWithAggregatesFilter<"subscriptie"> | string
    numarmaximutilizatori?: IntWithAggregatesFilter<"subscriptie"> | number
    timpraspunsp1?: StringWithAggregatesFilter<"subscriptie"> | string
    timpraspunsp2?: StringWithAggregatesFilter<"subscriptie"> | string
    timpraspunsp3?: StringWithAggregatesFilter<"subscriptie"> | string
    timpraspunsp4?: StringWithAggregatesFilter<"subscriptie"> | string
  }

  export type tichetWhereInput = {
    AND?: tichetWhereInput | tichetWhereInput[]
    OR?: tichetWhereInput[]
    NOT?: tichetWhereInput | tichetWhereInput[]
    idtichet?: IntFilter<"tichet"> | number
    titlu?: StringFilter<"tichet"> | string
    tiptichet?: StringFilter<"tichet"> | string
    prioritate?: StringFilter<"tichet"> | string
    datacreare?: DateTimeFilter<"tichet"> | Date | string
    datainchidere?: DateTimeFilter<"tichet"> | Date | string
    statuscurent?: StringFilter<"tichet"> | string
    consultdeschis?: BoolFilter<"tichet"> | boolean
    bugdeschis?: BoolFilter<"tichet"> | boolean
    produs?: StringFilter<"tichet"> | string
    escaladat?: BoolFilter<"tichet"> | boolean
    idsuport?: IntFilter<"tichet"> | number
    idutilizator?: IntFilter<"tichet"> | number
    linkdocs?: StringNullableFilter<"tichet"> | string | null
    linkdrive?: StringNullableFilter<"tichet"> | string | null
    istorictichet?: IstorictichetListRelationFilter
    mesaje?: MesajeListRelationFilter
    utilizator_tichet_idsuportToutilizator?: XOR<UtilizatorScalarRelationFilter, utilizatorWhereInput>
    utilizator_tichet_idutilizatorToutilizator?: XOR<UtilizatorScalarRelationFilter, utilizatorWhereInput>
  }

  export type tichetOrderByWithRelationInput = {
    idtichet?: SortOrder
    titlu?: SortOrder
    tiptichet?: SortOrder
    prioritate?: SortOrder
    datacreare?: SortOrder
    datainchidere?: SortOrder
    statuscurent?: SortOrder
    consultdeschis?: SortOrder
    bugdeschis?: SortOrder
    produs?: SortOrder
    escaladat?: SortOrder
    idsuport?: SortOrder
    idutilizator?: SortOrder
    linkdocs?: SortOrderInput | SortOrder
    linkdrive?: SortOrderInput | SortOrder
    istorictichet?: istorictichetOrderByRelationAggregateInput
    mesaje?: mesajeOrderByRelationAggregateInput
    utilizator_tichet_idsuportToutilizator?: utilizatorOrderByWithRelationInput
    utilizator_tichet_idutilizatorToutilizator?: utilizatorOrderByWithRelationInput
  }

  export type tichetWhereUniqueInput = Prisma.AtLeast<{
    idtichet?: number
    AND?: tichetWhereInput | tichetWhereInput[]
    OR?: tichetWhereInput[]
    NOT?: tichetWhereInput | tichetWhereInput[]
    titlu?: StringFilter<"tichet"> | string
    tiptichet?: StringFilter<"tichet"> | string
    prioritate?: StringFilter<"tichet"> | string
    datacreare?: DateTimeFilter<"tichet"> | Date | string
    datainchidere?: DateTimeFilter<"tichet"> | Date | string
    statuscurent?: StringFilter<"tichet"> | string
    consultdeschis?: BoolFilter<"tichet"> | boolean
    bugdeschis?: BoolFilter<"tichet"> | boolean
    produs?: StringFilter<"tichet"> | string
    escaladat?: BoolFilter<"tichet"> | boolean
    idsuport?: IntFilter<"tichet"> | number
    idutilizator?: IntFilter<"tichet"> | number
    linkdocs?: StringNullableFilter<"tichet"> | string | null
    linkdrive?: StringNullableFilter<"tichet"> | string | null
    istorictichet?: IstorictichetListRelationFilter
    mesaje?: MesajeListRelationFilter
    utilizator_tichet_idsuportToutilizator?: XOR<UtilizatorScalarRelationFilter, utilizatorWhereInput>
    utilizator_tichet_idutilizatorToutilizator?: XOR<UtilizatorScalarRelationFilter, utilizatorWhereInput>
  }, "idtichet">

  export type tichetOrderByWithAggregationInput = {
    idtichet?: SortOrder
    titlu?: SortOrder
    tiptichet?: SortOrder
    prioritate?: SortOrder
    datacreare?: SortOrder
    datainchidere?: SortOrder
    statuscurent?: SortOrder
    consultdeschis?: SortOrder
    bugdeschis?: SortOrder
    produs?: SortOrder
    escaladat?: SortOrder
    idsuport?: SortOrder
    idutilizator?: SortOrder
    linkdocs?: SortOrderInput | SortOrder
    linkdrive?: SortOrderInput | SortOrder
    _count?: tichetCountOrderByAggregateInput
    _avg?: tichetAvgOrderByAggregateInput
    _max?: tichetMaxOrderByAggregateInput
    _min?: tichetMinOrderByAggregateInput
    _sum?: tichetSumOrderByAggregateInput
  }

  export type tichetScalarWhereWithAggregatesInput = {
    AND?: tichetScalarWhereWithAggregatesInput | tichetScalarWhereWithAggregatesInput[]
    OR?: tichetScalarWhereWithAggregatesInput[]
    NOT?: tichetScalarWhereWithAggregatesInput | tichetScalarWhereWithAggregatesInput[]
    idtichet?: IntWithAggregatesFilter<"tichet"> | number
    titlu?: StringWithAggregatesFilter<"tichet"> | string
    tiptichet?: StringWithAggregatesFilter<"tichet"> | string
    prioritate?: StringWithAggregatesFilter<"tichet"> | string
    datacreare?: DateTimeWithAggregatesFilter<"tichet"> | Date | string
    datainchidere?: DateTimeWithAggregatesFilter<"tichet"> | Date | string
    statuscurent?: StringWithAggregatesFilter<"tichet"> | string
    consultdeschis?: BoolWithAggregatesFilter<"tichet"> | boolean
    bugdeschis?: BoolWithAggregatesFilter<"tichet"> | boolean
    produs?: StringWithAggregatesFilter<"tichet"> | string
    escaladat?: BoolWithAggregatesFilter<"tichet"> | boolean
    idsuport?: IntWithAggregatesFilter<"tichet"> | number
    idutilizator?: IntWithAggregatesFilter<"tichet"> | number
    linkdocs?: StringNullableWithAggregatesFilter<"tichet"> | string | null
    linkdrive?: StringNullableWithAggregatesFilter<"tichet"> | string | null
  }

  export type utilizatorWhereInput = {
    AND?: utilizatorWhereInput | utilizatorWhereInput[]
    OR?: utilizatorWhereInput[]
    NOT?: utilizatorWhereInput | utilizatorWhereInput[]
    idutilizator?: IntFilter<"utilizator"> | number
    email?: StringFilter<"utilizator"> | string
    nume?: StringFilter<"utilizator"> | string
    prenume?: StringFilter<"utilizator"> | string
    modalitatelogare?: StringFilter<"utilizator"> | string
    pozaprofil?: StringFilter<"utilizator"> | string
    datacreare?: DateTimeFilter<"utilizator"> | Date | string
    idcompanie?: IntNullableFilter<"utilizator"> | number | null
    tiputilizator?: StringFilter<"utilizator"> | string
    specializare?: IntNullableFilter<"utilizator"> | number | null
    tichet_tichet_idsuportToutilizator?: TichetListRelationFilter
    tichet_tichet_idutilizatorToutilizator?: TichetListRelationFilter
    companie?: XOR<CompanieNullableScalarRelationFilter, companieWhereInput> | null
    specializare_utilizator_specializareTospecializare?: XOR<SpecializareNullableScalarRelationFilter, specializareWhereInput> | null
  }

  export type utilizatorOrderByWithRelationInput = {
    idutilizator?: SortOrder
    email?: SortOrder
    nume?: SortOrder
    prenume?: SortOrder
    modalitatelogare?: SortOrder
    pozaprofil?: SortOrder
    datacreare?: SortOrder
    idcompanie?: SortOrderInput | SortOrder
    tiputilizator?: SortOrder
    specializare?: SortOrderInput | SortOrder
    tichet_tichet_idsuportToutilizator?: tichetOrderByRelationAggregateInput
    tichet_tichet_idutilizatorToutilizator?: tichetOrderByRelationAggregateInput
    companie?: companieOrderByWithRelationInput
    specializare_utilizator_specializareTospecializare?: specializareOrderByWithRelationInput
  }

  export type utilizatorWhereUniqueInput = Prisma.AtLeast<{
    idutilizator?: number
    email?: string
    AND?: utilizatorWhereInput | utilizatorWhereInput[]
    OR?: utilizatorWhereInput[]
    NOT?: utilizatorWhereInput | utilizatorWhereInput[]
    nume?: StringFilter<"utilizator"> | string
    prenume?: StringFilter<"utilizator"> | string
    modalitatelogare?: StringFilter<"utilizator"> | string
    pozaprofil?: StringFilter<"utilizator"> | string
    datacreare?: DateTimeFilter<"utilizator"> | Date | string
    idcompanie?: IntNullableFilter<"utilizator"> | number | null
    tiputilizator?: StringFilter<"utilizator"> | string
    specializare?: IntNullableFilter<"utilizator"> | number | null
    tichet_tichet_idsuportToutilizator?: TichetListRelationFilter
    tichet_tichet_idutilizatorToutilizator?: TichetListRelationFilter
    companie?: XOR<CompanieNullableScalarRelationFilter, companieWhereInput> | null
    specializare_utilizator_specializareTospecializare?: XOR<SpecializareNullableScalarRelationFilter, specializareWhereInput> | null
  }, "idutilizator" | "email">

  export type utilizatorOrderByWithAggregationInput = {
    idutilizator?: SortOrder
    email?: SortOrder
    nume?: SortOrder
    prenume?: SortOrder
    modalitatelogare?: SortOrder
    pozaprofil?: SortOrder
    datacreare?: SortOrder
    idcompanie?: SortOrderInput | SortOrder
    tiputilizator?: SortOrder
    specializare?: SortOrderInput | SortOrder
    _count?: utilizatorCountOrderByAggregateInput
    _avg?: utilizatorAvgOrderByAggregateInput
    _max?: utilizatorMaxOrderByAggregateInput
    _min?: utilizatorMinOrderByAggregateInput
    _sum?: utilizatorSumOrderByAggregateInput
  }

  export type utilizatorScalarWhereWithAggregatesInput = {
    AND?: utilizatorScalarWhereWithAggregatesInput | utilizatorScalarWhereWithAggregatesInput[]
    OR?: utilizatorScalarWhereWithAggregatesInput[]
    NOT?: utilizatorScalarWhereWithAggregatesInput | utilizatorScalarWhereWithAggregatesInput[]
    idutilizator?: IntWithAggregatesFilter<"utilizator"> | number
    email?: StringWithAggregatesFilter<"utilizator"> | string
    nume?: StringWithAggregatesFilter<"utilizator"> | string
    prenume?: StringWithAggregatesFilter<"utilizator"> | string
    modalitatelogare?: StringWithAggregatesFilter<"utilizator"> | string
    pozaprofil?: StringWithAggregatesFilter<"utilizator"> | string
    datacreare?: DateTimeWithAggregatesFilter<"utilizator"> | Date | string
    idcompanie?: IntNullableWithAggregatesFilter<"utilizator"> | number | null
    tiputilizator?: StringWithAggregatesFilter<"utilizator"> | string
    specializare?: IntNullableWithAggregatesFilter<"utilizator"> | number | null
  }

  export type produseWhereInput = {
    AND?: produseWhereInput | produseWhereInput[]
    OR?: produseWhereInput[]
    NOT?: produseWhereInput | produseWhereInput[]
    idprodus?: IntFilter<"produse"> | number
    nume?: StringFilter<"produse"> | string
    idspecializare?: IntFilter<"produse"> | number
    specializare?: XOR<SpecializareScalarRelationFilter, specializareWhereInput>
  }

  export type produseOrderByWithRelationInput = {
    idprodus?: SortOrder
    nume?: SortOrder
    idspecializare?: SortOrder
    specializare?: specializareOrderByWithRelationInput
  }

  export type produseWhereUniqueInput = Prisma.AtLeast<{
    idprodus?: number
    AND?: produseWhereInput | produseWhereInput[]
    OR?: produseWhereInput[]
    NOT?: produseWhereInput | produseWhereInput[]
    nume?: StringFilter<"produse"> | string
    idspecializare?: IntFilter<"produse"> | number
    specializare?: XOR<SpecializareScalarRelationFilter, specializareWhereInput>
  }, "idprodus">

  export type produseOrderByWithAggregationInput = {
    idprodus?: SortOrder
    nume?: SortOrder
    idspecializare?: SortOrder
    _count?: produseCountOrderByAggregateInput
    _avg?: produseAvgOrderByAggregateInput
    _max?: produseMaxOrderByAggregateInput
    _min?: produseMinOrderByAggregateInput
    _sum?: produseSumOrderByAggregateInput
  }

  export type produseScalarWhereWithAggregatesInput = {
    AND?: produseScalarWhereWithAggregatesInput | produseScalarWhereWithAggregatesInput[]
    OR?: produseScalarWhereWithAggregatesInput[]
    NOT?: produseScalarWhereWithAggregatesInput | produseScalarWhereWithAggregatesInput[]
    idprodus?: IntWithAggregatesFilter<"produse"> | number
    nume?: StringWithAggregatesFilter<"produse"> | string
    idspecializare?: IntWithAggregatesFilter<"produse"> | number
  }

  export type companieCreateInput = {
    datacreare: Date | string
    nume: string
    status: string
    focus: boolean
    notitedesprecompanie?: string | null
    echipacompanie?: echipacompanieCreateNestedOneWithoutCompanieInput
    subscriptie?: subscriptieCreateNestedOneWithoutCompanieInput
    utilizator?: utilizatorCreateNestedManyWithoutCompanieInput
  }

  export type companieUncheckedCreateInput = {
    idcompanie?: number
    datacreare: Date | string
    nume: string
    status: string
    focus: boolean
    notitedesprecompanie?: string | null
    tipsubscriptie?: string | null
    idechipa?: number | null
    utilizator?: utilizatorUncheckedCreateNestedManyWithoutCompanieInput
  }

  export type companieUpdateInput = {
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    nume?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    focus?: BoolFieldUpdateOperationsInput | boolean
    notitedesprecompanie?: NullableStringFieldUpdateOperationsInput | string | null
    echipacompanie?: echipacompanieUpdateOneWithoutCompanieNestedInput
    subscriptie?: subscriptieUpdateOneWithoutCompanieNestedInput
    utilizator?: utilizatorUpdateManyWithoutCompanieNestedInput
  }

  export type companieUncheckedUpdateInput = {
    idcompanie?: IntFieldUpdateOperationsInput | number
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    nume?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    focus?: BoolFieldUpdateOperationsInput | boolean
    notitedesprecompanie?: NullableStringFieldUpdateOperationsInput | string | null
    tipsubscriptie?: NullableStringFieldUpdateOperationsInput | string | null
    idechipa?: NullableIntFieldUpdateOperationsInput | number | null
    utilizator?: utilizatorUncheckedUpdateManyWithoutCompanieNestedInput
  }

  export type companieCreateManyInput = {
    idcompanie?: number
    datacreare: Date | string
    nume: string
    status: string
    focus: boolean
    notitedesprecompanie?: string | null
    tipsubscriptie?: string | null
    idechipa?: number | null
  }

  export type companieUpdateManyMutationInput = {
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    nume?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    focus?: BoolFieldUpdateOperationsInput | boolean
    notitedesprecompanie?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type companieUncheckedUpdateManyInput = {
    idcompanie?: IntFieldUpdateOperationsInput | number
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    nume?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    focus?: BoolFieldUpdateOperationsInput | boolean
    notitedesprecompanie?: NullableStringFieldUpdateOperationsInput | string | null
    tipsubscriptie?: NullableStringFieldUpdateOperationsInput | string | null
    idechipa?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type echipacompanieCreateInput = {
    nume: string
    companie?: companieCreateNestedManyWithoutEchipacompanieInput
    membruechipa?: membruechipaCreateNestedManyWithoutEchipacompanieInput
  }

  export type echipacompanieUncheckedCreateInput = {
    idechipa?: number
    nume: string
    companie?: companieUncheckedCreateNestedManyWithoutEchipacompanieInput
    membruechipa?: membruechipaUncheckedCreateNestedManyWithoutEchipacompanieInput
  }

  export type echipacompanieUpdateInput = {
    nume?: StringFieldUpdateOperationsInput | string
    companie?: companieUpdateManyWithoutEchipacompanieNestedInput
    membruechipa?: membruechipaUpdateManyWithoutEchipacompanieNestedInput
  }

  export type echipacompanieUncheckedUpdateInput = {
    idechipa?: IntFieldUpdateOperationsInput | number
    nume?: StringFieldUpdateOperationsInput | string
    companie?: companieUncheckedUpdateManyWithoutEchipacompanieNestedInput
    membruechipa?: membruechipaUncheckedUpdateManyWithoutEchipacompanieNestedInput
  }

  export type echipacompanieCreateManyInput = {
    idechipa?: number
    nume: string
  }

  export type echipacompanieUpdateManyMutationInput = {
    nume?: StringFieldUpdateOperationsInput | string
  }

  export type echipacompanieUncheckedUpdateManyInput = {
    idechipa?: IntFieldUpdateOperationsInput | number
    nume?: StringFieldUpdateOperationsInput | string
  }

  export type istorictichetCreateInput = {
    datacreare: Date | string
    modificare: string
    tichet: tichetCreateNestedOneWithoutIstorictichetInput
  }

  export type istorictichetUncheckedCreateInput = {
    idistoric?: number
    idtichet: number
    datacreare: Date | string
    modificare: string
  }

  export type istorictichetUpdateInput = {
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    modificare?: StringFieldUpdateOperationsInput | string
    tichet?: tichetUpdateOneRequiredWithoutIstorictichetNestedInput
  }

  export type istorictichetUncheckedUpdateInput = {
    idistoric?: IntFieldUpdateOperationsInput | number
    idtichet?: IntFieldUpdateOperationsInput | number
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    modificare?: StringFieldUpdateOperationsInput | string
  }

  export type istorictichetCreateManyInput = {
    idistoric?: number
    idtichet: number
    datacreare: Date | string
    modificare: string
  }

  export type istorictichetUpdateManyMutationInput = {
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    modificare?: StringFieldUpdateOperationsInput | string
  }

  export type istorictichetUncheckedUpdateManyInput = {
    idistoric?: IntFieldUpdateOperationsInput | number
    idtichet?: IntFieldUpdateOperationsInput | number
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    modificare?: StringFieldUpdateOperationsInput | string
  }

  export type membruechipaCreateInput = {
    nume: string
    prenume: string
    rol: string
    email: string
    echipacompanie: echipacompanieCreateNestedOneWithoutMembruechipaInput
  }

  export type membruechipaUncheckedCreateInput = {
    idmembru?: number
    nume: string
    prenume: string
    rol: string
    email: string
    idechipa: number
  }

  export type membruechipaUpdateInput = {
    nume?: StringFieldUpdateOperationsInput | string
    prenume?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    echipacompanie?: echipacompanieUpdateOneRequiredWithoutMembruechipaNestedInput
  }

  export type membruechipaUncheckedUpdateInput = {
    idmembru?: IntFieldUpdateOperationsInput | number
    nume?: StringFieldUpdateOperationsInput | string
    prenume?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    idechipa?: IntFieldUpdateOperationsInput | number
  }

  export type membruechipaCreateManyInput = {
    idmembru?: number
    nume: string
    prenume: string
    rol: string
    email: string
    idechipa: number
  }

  export type membruechipaUpdateManyMutationInput = {
    nume?: StringFieldUpdateOperationsInput | string
    prenume?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type membruechipaUncheckedUpdateManyInput = {
    idmembru?: IntFieldUpdateOperationsInput | number
    nume?: StringFieldUpdateOperationsInput | string
    prenume?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    idechipa?: IntFieldUpdateOperationsInput | number
  }

  export type mesajeCreateInput = {
    datacreare: Date | string
    emitatormesaj: string
    emailsuport: string
    emailutilizator: string
    continut: string
    tichet: tichetCreateNestedOneWithoutMesajeInput
  }

  export type mesajeUncheckedCreateInput = {
    idmesaj?: number
    datacreare: Date | string
    emitatormesaj: string
    emailsuport: string
    emailutilizator: string
    continut: string
    idtichet: number
  }

  export type mesajeUpdateInput = {
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    emitatormesaj?: StringFieldUpdateOperationsInput | string
    emailsuport?: StringFieldUpdateOperationsInput | string
    emailutilizator?: StringFieldUpdateOperationsInput | string
    continut?: StringFieldUpdateOperationsInput | string
    tichet?: tichetUpdateOneRequiredWithoutMesajeNestedInput
  }

  export type mesajeUncheckedUpdateInput = {
    idmesaj?: IntFieldUpdateOperationsInput | number
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    emitatormesaj?: StringFieldUpdateOperationsInput | string
    emailsuport?: StringFieldUpdateOperationsInput | string
    emailutilizator?: StringFieldUpdateOperationsInput | string
    continut?: StringFieldUpdateOperationsInput | string
    idtichet?: IntFieldUpdateOperationsInput | number
  }

  export type mesajeCreateManyInput = {
    idmesaj?: number
    datacreare: Date | string
    emitatormesaj: string
    emailsuport: string
    emailutilizator: string
    continut: string
    idtichet: number
  }

  export type mesajeUpdateManyMutationInput = {
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    emitatormesaj?: StringFieldUpdateOperationsInput | string
    emailsuport?: StringFieldUpdateOperationsInput | string
    emailutilizator?: StringFieldUpdateOperationsInput | string
    continut?: StringFieldUpdateOperationsInput | string
  }

  export type mesajeUncheckedUpdateManyInput = {
    idmesaj?: IntFieldUpdateOperationsInput | number
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    emitatormesaj?: StringFieldUpdateOperationsInput | string
    emailsuport?: StringFieldUpdateOperationsInput | string
    emailutilizator?: StringFieldUpdateOperationsInput | string
    continut?: StringFieldUpdateOperationsInput | string
    idtichet?: IntFieldUpdateOperationsInput | number
  }

  export type specializareCreateInput = {
    nume: string
    produse?: produseCreateNestedManyWithoutSpecializareInput
    utilizator_utilizator_specializareTospecializare?: utilizatorCreateNestedManyWithoutSpecializare_utilizator_specializareTospecializareInput
  }

  export type specializareUncheckedCreateInput = {
    idspecializare?: number
    nume: string
    produse?: produseUncheckedCreateNestedManyWithoutSpecializareInput
    utilizator_utilizator_specializareTospecializare?: utilizatorUncheckedCreateNestedManyWithoutSpecializare_utilizator_specializareTospecializareInput
  }

  export type specializareUpdateInput = {
    nume?: StringFieldUpdateOperationsInput | string
    produse?: produseUpdateManyWithoutSpecializareNestedInput
    utilizator_utilizator_specializareTospecializare?: utilizatorUpdateManyWithoutSpecializare_utilizator_specializareTospecializareNestedInput
  }

  export type specializareUncheckedUpdateInput = {
    idspecializare?: IntFieldUpdateOperationsInput | number
    nume?: StringFieldUpdateOperationsInput | string
    produse?: produseUncheckedUpdateManyWithoutSpecializareNestedInput
    utilizator_utilizator_specializareTospecializare?: utilizatorUncheckedUpdateManyWithoutSpecializare_utilizator_specializareTospecializareNestedInput
  }

  export type specializareCreateManyInput = {
    idspecializare?: number
    nume: string
  }

  export type specializareUpdateManyMutationInput = {
    nume?: StringFieldUpdateOperationsInput | string
  }

  export type specializareUncheckedUpdateManyInput = {
    idspecializare?: IntFieldUpdateOperationsInput | number
    nume?: StringFieldUpdateOperationsInput | string
  }

  export type subscriptieCreateInput = {
    tip: string
    numarmaximutilizatori: number
    timpraspunsp1: string
    timpraspunsp2: string
    timpraspunsp3: string
    timpraspunsp4: string
    companie?: companieCreateNestedManyWithoutSubscriptieInput
  }

  export type subscriptieUncheckedCreateInput = {
    tip: string
    numarmaximutilizatori: number
    timpraspunsp1: string
    timpraspunsp2: string
    timpraspunsp3: string
    timpraspunsp4: string
    companie?: companieUncheckedCreateNestedManyWithoutSubscriptieInput
  }

  export type subscriptieUpdateInput = {
    tip?: StringFieldUpdateOperationsInput | string
    numarmaximutilizatori?: IntFieldUpdateOperationsInput | number
    timpraspunsp1?: StringFieldUpdateOperationsInput | string
    timpraspunsp2?: StringFieldUpdateOperationsInput | string
    timpraspunsp3?: StringFieldUpdateOperationsInput | string
    timpraspunsp4?: StringFieldUpdateOperationsInput | string
    companie?: companieUpdateManyWithoutSubscriptieNestedInput
  }

  export type subscriptieUncheckedUpdateInput = {
    tip?: StringFieldUpdateOperationsInput | string
    numarmaximutilizatori?: IntFieldUpdateOperationsInput | number
    timpraspunsp1?: StringFieldUpdateOperationsInput | string
    timpraspunsp2?: StringFieldUpdateOperationsInput | string
    timpraspunsp3?: StringFieldUpdateOperationsInput | string
    timpraspunsp4?: StringFieldUpdateOperationsInput | string
    companie?: companieUncheckedUpdateManyWithoutSubscriptieNestedInput
  }

  export type subscriptieCreateManyInput = {
    tip: string
    numarmaximutilizatori: number
    timpraspunsp1: string
    timpraspunsp2: string
    timpraspunsp3: string
    timpraspunsp4: string
  }

  export type subscriptieUpdateManyMutationInput = {
    tip?: StringFieldUpdateOperationsInput | string
    numarmaximutilizatori?: IntFieldUpdateOperationsInput | number
    timpraspunsp1?: StringFieldUpdateOperationsInput | string
    timpraspunsp2?: StringFieldUpdateOperationsInput | string
    timpraspunsp3?: StringFieldUpdateOperationsInput | string
    timpraspunsp4?: StringFieldUpdateOperationsInput | string
  }

  export type subscriptieUncheckedUpdateManyInput = {
    tip?: StringFieldUpdateOperationsInput | string
    numarmaximutilizatori?: IntFieldUpdateOperationsInput | number
    timpraspunsp1?: StringFieldUpdateOperationsInput | string
    timpraspunsp2?: StringFieldUpdateOperationsInput | string
    timpraspunsp3?: StringFieldUpdateOperationsInput | string
    timpraspunsp4?: StringFieldUpdateOperationsInput | string
  }

  export type tichetCreateInput = {
    titlu: string
    tiptichet: string
    prioritate: string
    datacreare: Date | string
    datainchidere: Date | string
    statuscurent: string
    consultdeschis: boolean
    bugdeschis: boolean
    produs: string
    escaladat: boolean
    linkdocs?: string | null
    linkdrive?: string | null
    istorictichet?: istorictichetCreateNestedManyWithoutTichetInput
    mesaje?: mesajeCreateNestedManyWithoutTichetInput
    utilizator_tichet_idsuportToutilizator: utilizatorCreateNestedOneWithoutTichet_tichet_idsuportToutilizatorInput
    utilizator_tichet_idutilizatorToutilizator: utilizatorCreateNestedOneWithoutTichet_tichet_idutilizatorToutilizatorInput
  }

  export type tichetUncheckedCreateInput = {
    idtichet?: number
    titlu: string
    tiptichet: string
    prioritate: string
    datacreare: Date | string
    datainchidere: Date | string
    statuscurent: string
    consultdeschis: boolean
    bugdeschis: boolean
    produs: string
    escaladat: boolean
    idsuport: number
    idutilizator: number
    linkdocs?: string | null
    linkdrive?: string | null
    istorictichet?: istorictichetUncheckedCreateNestedManyWithoutTichetInput
    mesaje?: mesajeUncheckedCreateNestedManyWithoutTichetInput
  }

  export type tichetUpdateInput = {
    titlu?: StringFieldUpdateOperationsInput | string
    tiptichet?: StringFieldUpdateOperationsInput | string
    prioritate?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    datainchidere?: DateTimeFieldUpdateOperationsInput | Date | string
    statuscurent?: StringFieldUpdateOperationsInput | string
    consultdeschis?: BoolFieldUpdateOperationsInput | boolean
    bugdeschis?: BoolFieldUpdateOperationsInput | boolean
    produs?: StringFieldUpdateOperationsInput | string
    escaladat?: BoolFieldUpdateOperationsInput | boolean
    linkdocs?: NullableStringFieldUpdateOperationsInput | string | null
    linkdrive?: NullableStringFieldUpdateOperationsInput | string | null
    istorictichet?: istorictichetUpdateManyWithoutTichetNestedInput
    mesaje?: mesajeUpdateManyWithoutTichetNestedInput
    utilizator_tichet_idsuportToutilizator?: utilizatorUpdateOneRequiredWithoutTichet_tichet_idsuportToutilizatorNestedInput
    utilizator_tichet_idutilizatorToutilizator?: utilizatorUpdateOneRequiredWithoutTichet_tichet_idutilizatorToutilizatorNestedInput
  }

  export type tichetUncheckedUpdateInput = {
    idtichet?: IntFieldUpdateOperationsInput | number
    titlu?: StringFieldUpdateOperationsInput | string
    tiptichet?: StringFieldUpdateOperationsInput | string
    prioritate?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    datainchidere?: DateTimeFieldUpdateOperationsInput | Date | string
    statuscurent?: StringFieldUpdateOperationsInput | string
    consultdeschis?: BoolFieldUpdateOperationsInput | boolean
    bugdeschis?: BoolFieldUpdateOperationsInput | boolean
    produs?: StringFieldUpdateOperationsInput | string
    escaladat?: BoolFieldUpdateOperationsInput | boolean
    idsuport?: IntFieldUpdateOperationsInput | number
    idutilizator?: IntFieldUpdateOperationsInput | number
    linkdocs?: NullableStringFieldUpdateOperationsInput | string | null
    linkdrive?: NullableStringFieldUpdateOperationsInput | string | null
    istorictichet?: istorictichetUncheckedUpdateManyWithoutTichetNestedInput
    mesaje?: mesajeUncheckedUpdateManyWithoutTichetNestedInput
  }

  export type tichetCreateManyInput = {
    idtichet?: number
    titlu: string
    tiptichet: string
    prioritate: string
    datacreare: Date | string
    datainchidere: Date | string
    statuscurent: string
    consultdeschis: boolean
    bugdeschis: boolean
    produs: string
    escaladat: boolean
    idsuport: number
    idutilizator: number
    linkdocs?: string | null
    linkdrive?: string | null
  }

  export type tichetUpdateManyMutationInput = {
    titlu?: StringFieldUpdateOperationsInput | string
    tiptichet?: StringFieldUpdateOperationsInput | string
    prioritate?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    datainchidere?: DateTimeFieldUpdateOperationsInput | Date | string
    statuscurent?: StringFieldUpdateOperationsInput | string
    consultdeschis?: BoolFieldUpdateOperationsInput | boolean
    bugdeschis?: BoolFieldUpdateOperationsInput | boolean
    produs?: StringFieldUpdateOperationsInput | string
    escaladat?: BoolFieldUpdateOperationsInput | boolean
    linkdocs?: NullableStringFieldUpdateOperationsInput | string | null
    linkdrive?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tichetUncheckedUpdateManyInput = {
    idtichet?: IntFieldUpdateOperationsInput | number
    titlu?: StringFieldUpdateOperationsInput | string
    tiptichet?: StringFieldUpdateOperationsInput | string
    prioritate?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    datainchidere?: DateTimeFieldUpdateOperationsInput | Date | string
    statuscurent?: StringFieldUpdateOperationsInput | string
    consultdeschis?: BoolFieldUpdateOperationsInput | boolean
    bugdeschis?: BoolFieldUpdateOperationsInput | boolean
    produs?: StringFieldUpdateOperationsInput | string
    escaladat?: BoolFieldUpdateOperationsInput | boolean
    idsuport?: IntFieldUpdateOperationsInput | number
    idutilizator?: IntFieldUpdateOperationsInput | number
    linkdocs?: NullableStringFieldUpdateOperationsInput | string | null
    linkdrive?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type utilizatorCreateInput = {
    email: string
    nume: string
    prenume: string
    modalitatelogare: string
    pozaprofil: string
    datacreare: Date | string
    tiputilizator: string
    tichet_tichet_idsuportToutilizator?: tichetCreateNestedManyWithoutUtilizator_tichet_idsuportToutilizatorInput
    tichet_tichet_idutilizatorToutilizator?: tichetCreateNestedManyWithoutUtilizator_tichet_idutilizatorToutilizatorInput
    companie?: companieCreateNestedOneWithoutUtilizatorInput
    specializare_utilizator_specializareTospecializare?: specializareCreateNestedOneWithoutUtilizator_utilizator_specializareTospecializareInput
  }

  export type utilizatorUncheckedCreateInput = {
    idutilizator?: number
    email: string
    nume: string
    prenume: string
    modalitatelogare: string
    pozaprofil: string
    datacreare: Date | string
    idcompanie?: number | null
    tiputilizator: string
    specializare?: number | null
    tichet_tichet_idsuportToutilizator?: tichetUncheckedCreateNestedManyWithoutUtilizator_tichet_idsuportToutilizatorInput
    tichet_tichet_idutilizatorToutilizator?: tichetUncheckedCreateNestedManyWithoutUtilizator_tichet_idutilizatorToutilizatorInput
  }

  export type utilizatorUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    prenume?: StringFieldUpdateOperationsInput | string
    modalitatelogare?: StringFieldUpdateOperationsInput | string
    pozaprofil?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    tiputilizator?: StringFieldUpdateOperationsInput | string
    tichet_tichet_idsuportToutilizator?: tichetUpdateManyWithoutUtilizator_tichet_idsuportToutilizatorNestedInput
    tichet_tichet_idutilizatorToutilizator?: tichetUpdateManyWithoutUtilizator_tichet_idutilizatorToutilizatorNestedInput
    companie?: companieUpdateOneWithoutUtilizatorNestedInput
    specializare_utilizator_specializareTospecializare?: specializareUpdateOneWithoutUtilizator_utilizator_specializareTospecializareNestedInput
  }

  export type utilizatorUncheckedUpdateInput = {
    idutilizator?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    prenume?: StringFieldUpdateOperationsInput | string
    modalitatelogare?: StringFieldUpdateOperationsInput | string
    pozaprofil?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    idcompanie?: NullableIntFieldUpdateOperationsInput | number | null
    tiputilizator?: StringFieldUpdateOperationsInput | string
    specializare?: NullableIntFieldUpdateOperationsInput | number | null
    tichet_tichet_idsuportToutilizator?: tichetUncheckedUpdateManyWithoutUtilizator_tichet_idsuportToutilizatorNestedInput
    tichet_tichet_idutilizatorToutilizator?: tichetUncheckedUpdateManyWithoutUtilizator_tichet_idutilizatorToutilizatorNestedInput
  }

  export type utilizatorCreateManyInput = {
    idutilizator?: number
    email: string
    nume: string
    prenume: string
    modalitatelogare: string
    pozaprofil: string
    datacreare: Date | string
    idcompanie?: number | null
    tiputilizator: string
    specializare?: number | null
  }

  export type utilizatorUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    prenume?: StringFieldUpdateOperationsInput | string
    modalitatelogare?: StringFieldUpdateOperationsInput | string
    pozaprofil?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    tiputilizator?: StringFieldUpdateOperationsInput | string
  }

  export type utilizatorUncheckedUpdateManyInput = {
    idutilizator?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    prenume?: StringFieldUpdateOperationsInput | string
    modalitatelogare?: StringFieldUpdateOperationsInput | string
    pozaprofil?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    idcompanie?: NullableIntFieldUpdateOperationsInput | number | null
    tiputilizator?: StringFieldUpdateOperationsInput | string
    specializare?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type produseCreateInput = {
    nume: string
    specializare: specializareCreateNestedOneWithoutProduseInput
  }

  export type produseUncheckedCreateInput = {
    idprodus?: number
    nume: string
    idspecializare: number
  }

  export type produseUpdateInput = {
    nume?: StringFieldUpdateOperationsInput | string
    specializare?: specializareUpdateOneRequiredWithoutProduseNestedInput
  }

  export type produseUncheckedUpdateInput = {
    idprodus?: IntFieldUpdateOperationsInput | number
    nume?: StringFieldUpdateOperationsInput | string
    idspecializare?: IntFieldUpdateOperationsInput | number
  }

  export type produseCreateManyInput = {
    idprodus?: number
    nume: string
    idspecializare: number
  }

  export type produseUpdateManyMutationInput = {
    nume?: StringFieldUpdateOperationsInput | string
  }

  export type produseUncheckedUpdateManyInput = {
    idprodus?: IntFieldUpdateOperationsInput | number
    nume?: StringFieldUpdateOperationsInput | string
    idspecializare?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EchipacompanieNullableScalarRelationFilter = {
    is?: echipacompanieWhereInput | null
    isNot?: echipacompanieWhereInput | null
  }

  export type SubscriptieNullableScalarRelationFilter = {
    is?: subscriptieWhereInput | null
    isNot?: subscriptieWhereInput | null
  }

  export type UtilizatorListRelationFilter = {
    every?: utilizatorWhereInput
    some?: utilizatorWhereInput
    none?: utilizatorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type utilizatorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type companieCountOrderByAggregateInput = {
    idcompanie?: SortOrder
    datacreare?: SortOrder
    nume?: SortOrder
    status?: SortOrder
    focus?: SortOrder
    notitedesprecompanie?: SortOrder
    tipsubscriptie?: SortOrder
    idechipa?: SortOrder
  }

  export type companieAvgOrderByAggregateInput = {
    idcompanie?: SortOrder
    idechipa?: SortOrder
  }

  export type companieMaxOrderByAggregateInput = {
    idcompanie?: SortOrder
    datacreare?: SortOrder
    nume?: SortOrder
    status?: SortOrder
    focus?: SortOrder
    notitedesprecompanie?: SortOrder
    tipsubscriptie?: SortOrder
    idechipa?: SortOrder
  }

  export type companieMinOrderByAggregateInput = {
    idcompanie?: SortOrder
    datacreare?: SortOrder
    nume?: SortOrder
    status?: SortOrder
    focus?: SortOrder
    notitedesprecompanie?: SortOrder
    tipsubscriptie?: SortOrder
    idechipa?: SortOrder
  }

  export type companieSumOrderByAggregateInput = {
    idcompanie?: SortOrder
    idechipa?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CompanieListRelationFilter = {
    every?: companieWhereInput
    some?: companieWhereInput
    none?: companieWhereInput
  }

  export type MembruechipaListRelationFilter = {
    every?: membruechipaWhereInput
    some?: membruechipaWhereInput
    none?: membruechipaWhereInput
  }

  export type companieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type membruechipaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type echipacompanieCountOrderByAggregateInput = {
    idechipa?: SortOrder
    nume?: SortOrder
  }

  export type echipacompanieAvgOrderByAggregateInput = {
    idechipa?: SortOrder
  }

  export type echipacompanieMaxOrderByAggregateInput = {
    idechipa?: SortOrder
    nume?: SortOrder
  }

  export type echipacompanieMinOrderByAggregateInput = {
    idechipa?: SortOrder
    nume?: SortOrder
  }

  export type echipacompanieSumOrderByAggregateInput = {
    idechipa?: SortOrder
  }

  export type TichetScalarRelationFilter = {
    is?: tichetWhereInput
    isNot?: tichetWhereInput
  }

  export type istorictichetCountOrderByAggregateInput = {
    idistoric?: SortOrder
    idtichet?: SortOrder
    datacreare?: SortOrder
    modificare?: SortOrder
  }

  export type istorictichetAvgOrderByAggregateInput = {
    idistoric?: SortOrder
    idtichet?: SortOrder
  }

  export type istorictichetMaxOrderByAggregateInput = {
    idistoric?: SortOrder
    idtichet?: SortOrder
    datacreare?: SortOrder
    modificare?: SortOrder
  }

  export type istorictichetMinOrderByAggregateInput = {
    idistoric?: SortOrder
    idtichet?: SortOrder
    datacreare?: SortOrder
    modificare?: SortOrder
  }

  export type istorictichetSumOrderByAggregateInput = {
    idistoric?: SortOrder
    idtichet?: SortOrder
  }

  export type EchipacompanieScalarRelationFilter = {
    is?: echipacompanieWhereInput
    isNot?: echipacompanieWhereInput
  }

  export type membruechipaCountOrderByAggregateInput = {
    idmembru?: SortOrder
    nume?: SortOrder
    prenume?: SortOrder
    rol?: SortOrder
    email?: SortOrder
    idechipa?: SortOrder
  }

  export type membruechipaAvgOrderByAggregateInput = {
    idmembru?: SortOrder
    idechipa?: SortOrder
  }

  export type membruechipaMaxOrderByAggregateInput = {
    idmembru?: SortOrder
    nume?: SortOrder
    prenume?: SortOrder
    rol?: SortOrder
    email?: SortOrder
    idechipa?: SortOrder
  }

  export type membruechipaMinOrderByAggregateInput = {
    idmembru?: SortOrder
    nume?: SortOrder
    prenume?: SortOrder
    rol?: SortOrder
    email?: SortOrder
    idechipa?: SortOrder
  }

  export type membruechipaSumOrderByAggregateInput = {
    idmembru?: SortOrder
    idechipa?: SortOrder
  }

  export type mesajeCountOrderByAggregateInput = {
    idmesaj?: SortOrder
    datacreare?: SortOrder
    emitatormesaj?: SortOrder
    emailsuport?: SortOrder
    emailutilizator?: SortOrder
    continut?: SortOrder
    idtichet?: SortOrder
  }

  export type mesajeAvgOrderByAggregateInput = {
    idmesaj?: SortOrder
    idtichet?: SortOrder
  }

  export type mesajeMaxOrderByAggregateInput = {
    idmesaj?: SortOrder
    datacreare?: SortOrder
    emitatormesaj?: SortOrder
    emailsuport?: SortOrder
    emailutilizator?: SortOrder
    continut?: SortOrder
    idtichet?: SortOrder
  }

  export type mesajeMinOrderByAggregateInput = {
    idmesaj?: SortOrder
    datacreare?: SortOrder
    emitatormesaj?: SortOrder
    emailsuport?: SortOrder
    emailutilizator?: SortOrder
    continut?: SortOrder
    idtichet?: SortOrder
  }

  export type mesajeSumOrderByAggregateInput = {
    idmesaj?: SortOrder
    idtichet?: SortOrder
  }

  export type ProduseListRelationFilter = {
    every?: produseWhereInput
    some?: produseWhereInput
    none?: produseWhereInput
  }

  export type produseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type specializareCountOrderByAggregateInput = {
    idspecializare?: SortOrder
    nume?: SortOrder
  }

  export type specializareAvgOrderByAggregateInput = {
    idspecializare?: SortOrder
  }

  export type specializareMaxOrderByAggregateInput = {
    idspecializare?: SortOrder
    nume?: SortOrder
  }

  export type specializareMinOrderByAggregateInput = {
    idspecializare?: SortOrder
    nume?: SortOrder
  }

  export type specializareSumOrderByAggregateInput = {
    idspecializare?: SortOrder
  }

  export type subscriptieCountOrderByAggregateInput = {
    tip?: SortOrder
    numarmaximutilizatori?: SortOrder
    timpraspunsp1?: SortOrder
    timpraspunsp2?: SortOrder
    timpraspunsp3?: SortOrder
    timpraspunsp4?: SortOrder
  }

  export type subscriptieAvgOrderByAggregateInput = {
    numarmaximutilizatori?: SortOrder
  }

  export type subscriptieMaxOrderByAggregateInput = {
    tip?: SortOrder
    numarmaximutilizatori?: SortOrder
    timpraspunsp1?: SortOrder
    timpraspunsp2?: SortOrder
    timpraspunsp3?: SortOrder
    timpraspunsp4?: SortOrder
  }

  export type subscriptieMinOrderByAggregateInput = {
    tip?: SortOrder
    numarmaximutilizatori?: SortOrder
    timpraspunsp1?: SortOrder
    timpraspunsp2?: SortOrder
    timpraspunsp3?: SortOrder
    timpraspunsp4?: SortOrder
  }

  export type subscriptieSumOrderByAggregateInput = {
    numarmaximutilizatori?: SortOrder
  }

  export type IstorictichetListRelationFilter = {
    every?: istorictichetWhereInput
    some?: istorictichetWhereInput
    none?: istorictichetWhereInput
  }

  export type MesajeListRelationFilter = {
    every?: mesajeWhereInput
    some?: mesajeWhereInput
    none?: mesajeWhereInput
  }

  export type UtilizatorScalarRelationFilter = {
    is?: utilizatorWhereInput
    isNot?: utilizatorWhereInput
  }

  export type istorictichetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mesajeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tichetCountOrderByAggregateInput = {
    idtichet?: SortOrder
    titlu?: SortOrder
    tiptichet?: SortOrder
    prioritate?: SortOrder
    datacreare?: SortOrder
    datainchidere?: SortOrder
    statuscurent?: SortOrder
    consultdeschis?: SortOrder
    bugdeschis?: SortOrder
    produs?: SortOrder
    escaladat?: SortOrder
    idsuport?: SortOrder
    idutilizator?: SortOrder
    linkdocs?: SortOrder
    linkdrive?: SortOrder
  }

  export type tichetAvgOrderByAggregateInput = {
    idtichet?: SortOrder
    idsuport?: SortOrder
    idutilizator?: SortOrder
  }

  export type tichetMaxOrderByAggregateInput = {
    idtichet?: SortOrder
    titlu?: SortOrder
    tiptichet?: SortOrder
    prioritate?: SortOrder
    datacreare?: SortOrder
    datainchidere?: SortOrder
    statuscurent?: SortOrder
    consultdeschis?: SortOrder
    bugdeschis?: SortOrder
    produs?: SortOrder
    escaladat?: SortOrder
    idsuport?: SortOrder
    idutilizator?: SortOrder
    linkdocs?: SortOrder
    linkdrive?: SortOrder
  }

  export type tichetMinOrderByAggregateInput = {
    idtichet?: SortOrder
    titlu?: SortOrder
    tiptichet?: SortOrder
    prioritate?: SortOrder
    datacreare?: SortOrder
    datainchidere?: SortOrder
    statuscurent?: SortOrder
    consultdeschis?: SortOrder
    bugdeschis?: SortOrder
    produs?: SortOrder
    escaladat?: SortOrder
    idsuport?: SortOrder
    idutilizator?: SortOrder
    linkdocs?: SortOrder
    linkdrive?: SortOrder
  }

  export type tichetSumOrderByAggregateInput = {
    idtichet?: SortOrder
    idsuport?: SortOrder
    idutilizator?: SortOrder
  }

  export type TichetListRelationFilter = {
    every?: tichetWhereInput
    some?: tichetWhereInput
    none?: tichetWhereInput
  }

  export type CompanieNullableScalarRelationFilter = {
    is?: companieWhereInput | null
    isNot?: companieWhereInput | null
  }

  export type SpecializareNullableScalarRelationFilter = {
    is?: specializareWhereInput | null
    isNot?: specializareWhereInput | null
  }

  export type tichetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type utilizatorCountOrderByAggregateInput = {
    idutilizator?: SortOrder
    email?: SortOrder
    nume?: SortOrder
    prenume?: SortOrder
    modalitatelogare?: SortOrder
    pozaprofil?: SortOrder
    datacreare?: SortOrder
    idcompanie?: SortOrder
    tiputilizator?: SortOrder
    specializare?: SortOrder
  }

  export type utilizatorAvgOrderByAggregateInput = {
    idutilizator?: SortOrder
    idcompanie?: SortOrder
    specializare?: SortOrder
  }

  export type utilizatorMaxOrderByAggregateInput = {
    idutilizator?: SortOrder
    email?: SortOrder
    nume?: SortOrder
    prenume?: SortOrder
    modalitatelogare?: SortOrder
    pozaprofil?: SortOrder
    datacreare?: SortOrder
    idcompanie?: SortOrder
    tiputilizator?: SortOrder
    specializare?: SortOrder
  }

  export type utilizatorMinOrderByAggregateInput = {
    idutilizator?: SortOrder
    email?: SortOrder
    nume?: SortOrder
    prenume?: SortOrder
    modalitatelogare?: SortOrder
    pozaprofil?: SortOrder
    datacreare?: SortOrder
    idcompanie?: SortOrder
    tiputilizator?: SortOrder
    specializare?: SortOrder
  }

  export type utilizatorSumOrderByAggregateInput = {
    idutilizator?: SortOrder
    idcompanie?: SortOrder
    specializare?: SortOrder
  }

  export type SpecializareScalarRelationFilter = {
    is?: specializareWhereInput
    isNot?: specializareWhereInput
  }

  export type produseCountOrderByAggregateInput = {
    idprodus?: SortOrder
    nume?: SortOrder
    idspecializare?: SortOrder
  }

  export type produseAvgOrderByAggregateInput = {
    idprodus?: SortOrder
    idspecializare?: SortOrder
  }

  export type produseMaxOrderByAggregateInput = {
    idprodus?: SortOrder
    nume?: SortOrder
    idspecializare?: SortOrder
  }

  export type produseMinOrderByAggregateInput = {
    idprodus?: SortOrder
    nume?: SortOrder
    idspecializare?: SortOrder
  }

  export type produseSumOrderByAggregateInput = {
    idprodus?: SortOrder
    idspecializare?: SortOrder
  }

  export type echipacompanieCreateNestedOneWithoutCompanieInput = {
    create?: XOR<echipacompanieCreateWithoutCompanieInput, echipacompanieUncheckedCreateWithoutCompanieInput>
    connectOrCreate?: echipacompanieCreateOrConnectWithoutCompanieInput
    connect?: echipacompanieWhereUniqueInput
  }

  export type subscriptieCreateNestedOneWithoutCompanieInput = {
    create?: XOR<subscriptieCreateWithoutCompanieInput, subscriptieUncheckedCreateWithoutCompanieInput>
    connectOrCreate?: subscriptieCreateOrConnectWithoutCompanieInput
    connect?: subscriptieWhereUniqueInput
  }

  export type utilizatorCreateNestedManyWithoutCompanieInput = {
    create?: XOR<utilizatorCreateWithoutCompanieInput, utilizatorUncheckedCreateWithoutCompanieInput> | utilizatorCreateWithoutCompanieInput[] | utilizatorUncheckedCreateWithoutCompanieInput[]
    connectOrCreate?: utilizatorCreateOrConnectWithoutCompanieInput | utilizatorCreateOrConnectWithoutCompanieInput[]
    createMany?: utilizatorCreateManyCompanieInputEnvelope
    connect?: utilizatorWhereUniqueInput | utilizatorWhereUniqueInput[]
  }

  export type utilizatorUncheckedCreateNestedManyWithoutCompanieInput = {
    create?: XOR<utilizatorCreateWithoutCompanieInput, utilizatorUncheckedCreateWithoutCompanieInput> | utilizatorCreateWithoutCompanieInput[] | utilizatorUncheckedCreateWithoutCompanieInput[]
    connectOrCreate?: utilizatorCreateOrConnectWithoutCompanieInput | utilizatorCreateOrConnectWithoutCompanieInput[]
    createMany?: utilizatorCreateManyCompanieInputEnvelope
    connect?: utilizatorWhereUniqueInput | utilizatorWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type echipacompanieUpdateOneWithoutCompanieNestedInput = {
    create?: XOR<echipacompanieCreateWithoutCompanieInput, echipacompanieUncheckedCreateWithoutCompanieInput>
    connectOrCreate?: echipacompanieCreateOrConnectWithoutCompanieInput
    upsert?: echipacompanieUpsertWithoutCompanieInput
    disconnect?: echipacompanieWhereInput | boolean
    delete?: echipacompanieWhereInput | boolean
    connect?: echipacompanieWhereUniqueInput
    update?: XOR<XOR<echipacompanieUpdateToOneWithWhereWithoutCompanieInput, echipacompanieUpdateWithoutCompanieInput>, echipacompanieUncheckedUpdateWithoutCompanieInput>
  }

  export type subscriptieUpdateOneWithoutCompanieNestedInput = {
    create?: XOR<subscriptieCreateWithoutCompanieInput, subscriptieUncheckedCreateWithoutCompanieInput>
    connectOrCreate?: subscriptieCreateOrConnectWithoutCompanieInput
    upsert?: subscriptieUpsertWithoutCompanieInput
    disconnect?: subscriptieWhereInput | boolean
    delete?: subscriptieWhereInput | boolean
    connect?: subscriptieWhereUniqueInput
    update?: XOR<XOR<subscriptieUpdateToOneWithWhereWithoutCompanieInput, subscriptieUpdateWithoutCompanieInput>, subscriptieUncheckedUpdateWithoutCompanieInput>
  }

  export type utilizatorUpdateManyWithoutCompanieNestedInput = {
    create?: XOR<utilizatorCreateWithoutCompanieInput, utilizatorUncheckedCreateWithoutCompanieInput> | utilizatorCreateWithoutCompanieInput[] | utilizatorUncheckedCreateWithoutCompanieInput[]
    connectOrCreate?: utilizatorCreateOrConnectWithoutCompanieInput | utilizatorCreateOrConnectWithoutCompanieInput[]
    upsert?: utilizatorUpsertWithWhereUniqueWithoutCompanieInput | utilizatorUpsertWithWhereUniqueWithoutCompanieInput[]
    createMany?: utilizatorCreateManyCompanieInputEnvelope
    set?: utilizatorWhereUniqueInput | utilizatorWhereUniqueInput[]
    disconnect?: utilizatorWhereUniqueInput | utilizatorWhereUniqueInput[]
    delete?: utilizatorWhereUniqueInput | utilizatorWhereUniqueInput[]
    connect?: utilizatorWhereUniqueInput | utilizatorWhereUniqueInput[]
    update?: utilizatorUpdateWithWhereUniqueWithoutCompanieInput | utilizatorUpdateWithWhereUniqueWithoutCompanieInput[]
    updateMany?: utilizatorUpdateManyWithWhereWithoutCompanieInput | utilizatorUpdateManyWithWhereWithoutCompanieInput[]
    deleteMany?: utilizatorScalarWhereInput | utilizatorScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type utilizatorUncheckedUpdateManyWithoutCompanieNestedInput = {
    create?: XOR<utilizatorCreateWithoutCompanieInput, utilizatorUncheckedCreateWithoutCompanieInput> | utilizatorCreateWithoutCompanieInput[] | utilizatorUncheckedCreateWithoutCompanieInput[]
    connectOrCreate?: utilizatorCreateOrConnectWithoutCompanieInput | utilizatorCreateOrConnectWithoutCompanieInput[]
    upsert?: utilizatorUpsertWithWhereUniqueWithoutCompanieInput | utilizatorUpsertWithWhereUniqueWithoutCompanieInput[]
    createMany?: utilizatorCreateManyCompanieInputEnvelope
    set?: utilizatorWhereUniqueInput | utilizatorWhereUniqueInput[]
    disconnect?: utilizatorWhereUniqueInput | utilizatorWhereUniqueInput[]
    delete?: utilizatorWhereUniqueInput | utilizatorWhereUniqueInput[]
    connect?: utilizatorWhereUniqueInput | utilizatorWhereUniqueInput[]
    update?: utilizatorUpdateWithWhereUniqueWithoutCompanieInput | utilizatorUpdateWithWhereUniqueWithoutCompanieInput[]
    updateMany?: utilizatorUpdateManyWithWhereWithoutCompanieInput | utilizatorUpdateManyWithWhereWithoutCompanieInput[]
    deleteMany?: utilizatorScalarWhereInput | utilizatorScalarWhereInput[]
  }

  export type companieCreateNestedManyWithoutEchipacompanieInput = {
    create?: XOR<companieCreateWithoutEchipacompanieInput, companieUncheckedCreateWithoutEchipacompanieInput> | companieCreateWithoutEchipacompanieInput[] | companieUncheckedCreateWithoutEchipacompanieInput[]
    connectOrCreate?: companieCreateOrConnectWithoutEchipacompanieInput | companieCreateOrConnectWithoutEchipacompanieInput[]
    createMany?: companieCreateManyEchipacompanieInputEnvelope
    connect?: companieWhereUniqueInput | companieWhereUniqueInput[]
  }

  export type membruechipaCreateNestedManyWithoutEchipacompanieInput = {
    create?: XOR<membruechipaCreateWithoutEchipacompanieInput, membruechipaUncheckedCreateWithoutEchipacompanieInput> | membruechipaCreateWithoutEchipacompanieInput[] | membruechipaUncheckedCreateWithoutEchipacompanieInput[]
    connectOrCreate?: membruechipaCreateOrConnectWithoutEchipacompanieInput | membruechipaCreateOrConnectWithoutEchipacompanieInput[]
    createMany?: membruechipaCreateManyEchipacompanieInputEnvelope
    connect?: membruechipaWhereUniqueInput | membruechipaWhereUniqueInput[]
  }

  export type companieUncheckedCreateNestedManyWithoutEchipacompanieInput = {
    create?: XOR<companieCreateWithoutEchipacompanieInput, companieUncheckedCreateWithoutEchipacompanieInput> | companieCreateWithoutEchipacompanieInput[] | companieUncheckedCreateWithoutEchipacompanieInput[]
    connectOrCreate?: companieCreateOrConnectWithoutEchipacompanieInput | companieCreateOrConnectWithoutEchipacompanieInput[]
    createMany?: companieCreateManyEchipacompanieInputEnvelope
    connect?: companieWhereUniqueInput | companieWhereUniqueInput[]
  }

  export type membruechipaUncheckedCreateNestedManyWithoutEchipacompanieInput = {
    create?: XOR<membruechipaCreateWithoutEchipacompanieInput, membruechipaUncheckedCreateWithoutEchipacompanieInput> | membruechipaCreateWithoutEchipacompanieInput[] | membruechipaUncheckedCreateWithoutEchipacompanieInput[]
    connectOrCreate?: membruechipaCreateOrConnectWithoutEchipacompanieInput | membruechipaCreateOrConnectWithoutEchipacompanieInput[]
    createMany?: membruechipaCreateManyEchipacompanieInputEnvelope
    connect?: membruechipaWhereUniqueInput | membruechipaWhereUniqueInput[]
  }

  export type companieUpdateManyWithoutEchipacompanieNestedInput = {
    create?: XOR<companieCreateWithoutEchipacompanieInput, companieUncheckedCreateWithoutEchipacompanieInput> | companieCreateWithoutEchipacompanieInput[] | companieUncheckedCreateWithoutEchipacompanieInput[]
    connectOrCreate?: companieCreateOrConnectWithoutEchipacompanieInput | companieCreateOrConnectWithoutEchipacompanieInput[]
    upsert?: companieUpsertWithWhereUniqueWithoutEchipacompanieInput | companieUpsertWithWhereUniqueWithoutEchipacompanieInput[]
    createMany?: companieCreateManyEchipacompanieInputEnvelope
    set?: companieWhereUniqueInput | companieWhereUniqueInput[]
    disconnect?: companieWhereUniqueInput | companieWhereUniqueInput[]
    delete?: companieWhereUniqueInput | companieWhereUniqueInput[]
    connect?: companieWhereUniqueInput | companieWhereUniqueInput[]
    update?: companieUpdateWithWhereUniqueWithoutEchipacompanieInput | companieUpdateWithWhereUniqueWithoutEchipacompanieInput[]
    updateMany?: companieUpdateManyWithWhereWithoutEchipacompanieInput | companieUpdateManyWithWhereWithoutEchipacompanieInput[]
    deleteMany?: companieScalarWhereInput | companieScalarWhereInput[]
  }

  export type membruechipaUpdateManyWithoutEchipacompanieNestedInput = {
    create?: XOR<membruechipaCreateWithoutEchipacompanieInput, membruechipaUncheckedCreateWithoutEchipacompanieInput> | membruechipaCreateWithoutEchipacompanieInput[] | membruechipaUncheckedCreateWithoutEchipacompanieInput[]
    connectOrCreate?: membruechipaCreateOrConnectWithoutEchipacompanieInput | membruechipaCreateOrConnectWithoutEchipacompanieInput[]
    upsert?: membruechipaUpsertWithWhereUniqueWithoutEchipacompanieInput | membruechipaUpsertWithWhereUniqueWithoutEchipacompanieInput[]
    createMany?: membruechipaCreateManyEchipacompanieInputEnvelope
    set?: membruechipaWhereUniqueInput | membruechipaWhereUniqueInput[]
    disconnect?: membruechipaWhereUniqueInput | membruechipaWhereUniqueInput[]
    delete?: membruechipaWhereUniqueInput | membruechipaWhereUniqueInput[]
    connect?: membruechipaWhereUniqueInput | membruechipaWhereUniqueInput[]
    update?: membruechipaUpdateWithWhereUniqueWithoutEchipacompanieInput | membruechipaUpdateWithWhereUniqueWithoutEchipacompanieInput[]
    updateMany?: membruechipaUpdateManyWithWhereWithoutEchipacompanieInput | membruechipaUpdateManyWithWhereWithoutEchipacompanieInput[]
    deleteMany?: membruechipaScalarWhereInput | membruechipaScalarWhereInput[]
  }

  export type companieUncheckedUpdateManyWithoutEchipacompanieNestedInput = {
    create?: XOR<companieCreateWithoutEchipacompanieInput, companieUncheckedCreateWithoutEchipacompanieInput> | companieCreateWithoutEchipacompanieInput[] | companieUncheckedCreateWithoutEchipacompanieInput[]
    connectOrCreate?: companieCreateOrConnectWithoutEchipacompanieInput | companieCreateOrConnectWithoutEchipacompanieInput[]
    upsert?: companieUpsertWithWhereUniqueWithoutEchipacompanieInput | companieUpsertWithWhereUniqueWithoutEchipacompanieInput[]
    createMany?: companieCreateManyEchipacompanieInputEnvelope
    set?: companieWhereUniqueInput | companieWhereUniqueInput[]
    disconnect?: companieWhereUniqueInput | companieWhereUniqueInput[]
    delete?: companieWhereUniqueInput | companieWhereUniqueInput[]
    connect?: companieWhereUniqueInput | companieWhereUniqueInput[]
    update?: companieUpdateWithWhereUniqueWithoutEchipacompanieInput | companieUpdateWithWhereUniqueWithoutEchipacompanieInput[]
    updateMany?: companieUpdateManyWithWhereWithoutEchipacompanieInput | companieUpdateManyWithWhereWithoutEchipacompanieInput[]
    deleteMany?: companieScalarWhereInput | companieScalarWhereInput[]
  }

  export type membruechipaUncheckedUpdateManyWithoutEchipacompanieNestedInput = {
    create?: XOR<membruechipaCreateWithoutEchipacompanieInput, membruechipaUncheckedCreateWithoutEchipacompanieInput> | membruechipaCreateWithoutEchipacompanieInput[] | membruechipaUncheckedCreateWithoutEchipacompanieInput[]
    connectOrCreate?: membruechipaCreateOrConnectWithoutEchipacompanieInput | membruechipaCreateOrConnectWithoutEchipacompanieInput[]
    upsert?: membruechipaUpsertWithWhereUniqueWithoutEchipacompanieInput | membruechipaUpsertWithWhereUniqueWithoutEchipacompanieInput[]
    createMany?: membruechipaCreateManyEchipacompanieInputEnvelope
    set?: membruechipaWhereUniqueInput | membruechipaWhereUniqueInput[]
    disconnect?: membruechipaWhereUniqueInput | membruechipaWhereUniqueInput[]
    delete?: membruechipaWhereUniqueInput | membruechipaWhereUniqueInput[]
    connect?: membruechipaWhereUniqueInput | membruechipaWhereUniqueInput[]
    update?: membruechipaUpdateWithWhereUniqueWithoutEchipacompanieInput | membruechipaUpdateWithWhereUniqueWithoutEchipacompanieInput[]
    updateMany?: membruechipaUpdateManyWithWhereWithoutEchipacompanieInput | membruechipaUpdateManyWithWhereWithoutEchipacompanieInput[]
    deleteMany?: membruechipaScalarWhereInput | membruechipaScalarWhereInput[]
  }

  export type tichetCreateNestedOneWithoutIstorictichetInput = {
    create?: XOR<tichetCreateWithoutIstorictichetInput, tichetUncheckedCreateWithoutIstorictichetInput>
    connectOrCreate?: tichetCreateOrConnectWithoutIstorictichetInput
    connect?: tichetWhereUniqueInput
  }

  export type tichetUpdateOneRequiredWithoutIstorictichetNestedInput = {
    create?: XOR<tichetCreateWithoutIstorictichetInput, tichetUncheckedCreateWithoutIstorictichetInput>
    connectOrCreate?: tichetCreateOrConnectWithoutIstorictichetInput
    upsert?: tichetUpsertWithoutIstorictichetInput
    connect?: tichetWhereUniqueInput
    update?: XOR<XOR<tichetUpdateToOneWithWhereWithoutIstorictichetInput, tichetUpdateWithoutIstorictichetInput>, tichetUncheckedUpdateWithoutIstorictichetInput>
  }

  export type echipacompanieCreateNestedOneWithoutMembruechipaInput = {
    create?: XOR<echipacompanieCreateWithoutMembruechipaInput, echipacompanieUncheckedCreateWithoutMembruechipaInput>
    connectOrCreate?: echipacompanieCreateOrConnectWithoutMembruechipaInput
    connect?: echipacompanieWhereUniqueInput
  }

  export type echipacompanieUpdateOneRequiredWithoutMembruechipaNestedInput = {
    create?: XOR<echipacompanieCreateWithoutMembruechipaInput, echipacompanieUncheckedCreateWithoutMembruechipaInput>
    connectOrCreate?: echipacompanieCreateOrConnectWithoutMembruechipaInput
    upsert?: echipacompanieUpsertWithoutMembruechipaInput
    connect?: echipacompanieWhereUniqueInput
    update?: XOR<XOR<echipacompanieUpdateToOneWithWhereWithoutMembruechipaInput, echipacompanieUpdateWithoutMembruechipaInput>, echipacompanieUncheckedUpdateWithoutMembruechipaInput>
  }

  export type tichetCreateNestedOneWithoutMesajeInput = {
    create?: XOR<tichetCreateWithoutMesajeInput, tichetUncheckedCreateWithoutMesajeInput>
    connectOrCreate?: tichetCreateOrConnectWithoutMesajeInput
    connect?: tichetWhereUniqueInput
  }

  export type tichetUpdateOneRequiredWithoutMesajeNestedInput = {
    create?: XOR<tichetCreateWithoutMesajeInput, tichetUncheckedCreateWithoutMesajeInput>
    connectOrCreate?: tichetCreateOrConnectWithoutMesajeInput
    upsert?: tichetUpsertWithoutMesajeInput
    connect?: tichetWhereUniqueInput
    update?: XOR<XOR<tichetUpdateToOneWithWhereWithoutMesajeInput, tichetUpdateWithoutMesajeInput>, tichetUncheckedUpdateWithoutMesajeInput>
  }

  export type produseCreateNestedManyWithoutSpecializareInput = {
    create?: XOR<produseCreateWithoutSpecializareInput, produseUncheckedCreateWithoutSpecializareInput> | produseCreateWithoutSpecializareInput[] | produseUncheckedCreateWithoutSpecializareInput[]
    connectOrCreate?: produseCreateOrConnectWithoutSpecializareInput | produseCreateOrConnectWithoutSpecializareInput[]
    createMany?: produseCreateManySpecializareInputEnvelope
    connect?: produseWhereUniqueInput | produseWhereUniqueInput[]
  }

  export type utilizatorCreateNestedManyWithoutSpecializare_utilizator_specializareTospecializareInput = {
    create?: XOR<utilizatorCreateWithoutSpecializare_utilizator_specializareTospecializareInput, utilizatorUncheckedCreateWithoutSpecializare_utilizator_specializareTospecializareInput> | utilizatorCreateWithoutSpecializare_utilizator_specializareTospecializareInput[] | utilizatorUncheckedCreateWithoutSpecializare_utilizator_specializareTospecializareInput[]
    connectOrCreate?: utilizatorCreateOrConnectWithoutSpecializare_utilizator_specializareTospecializareInput | utilizatorCreateOrConnectWithoutSpecializare_utilizator_specializareTospecializareInput[]
    createMany?: utilizatorCreateManySpecializare_utilizator_specializareTospecializareInputEnvelope
    connect?: utilizatorWhereUniqueInput | utilizatorWhereUniqueInput[]
  }

  export type produseUncheckedCreateNestedManyWithoutSpecializareInput = {
    create?: XOR<produseCreateWithoutSpecializareInput, produseUncheckedCreateWithoutSpecializareInput> | produseCreateWithoutSpecializareInput[] | produseUncheckedCreateWithoutSpecializareInput[]
    connectOrCreate?: produseCreateOrConnectWithoutSpecializareInput | produseCreateOrConnectWithoutSpecializareInput[]
    createMany?: produseCreateManySpecializareInputEnvelope
    connect?: produseWhereUniqueInput | produseWhereUniqueInput[]
  }

  export type utilizatorUncheckedCreateNestedManyWithoutSpecializare_utilizator_specializareTospecializareInput = {
    create?: XOR<utilizatorCreateWithoutSpecializare_utilizator_specializareTospecializareInput, utilizatorUncheckedCreateWithoutSpecializare_utilizator_specializareTospecializareInput> | utilizatorCreateWithoutSpecializare_utilizator_specializareTospecializareInput[] | utilizatorUncheckedCreateWithoutSpecializare_utilizator_specializareTospecializareInput[]
    connectOrCreate?: utilizatorCreateOrConnectWithoutSpecializare_utilizator_specializareTospecializareInput | utilizatorCreateOrConnectWithoutSpecializare_utilizator_specializareTospecializareInput[]
    createMany?: utilizatorCreateManySpecializare_utilizator_specializareTospecializareInputEnvelope
    connect?: utilizatorWhereUniqueInput | utilizatorWhereUniqueInput[]
  }

  export type produseUpdateManyWithoutSpecializareNestedInput = {
    create?: XOR<produseCreateWithoutSpecializareInput, produseUncheckedCreateWithoutSpecializareInput> | produseCreateWithoutSpecializareInput[] | produseUncheckedCreateWithoutSpecializareInput[]
    connectOrCreate?: produseCreateOrConnectWithoutSpecializareInput | produseCreateOrConnectWithoutSpecializareInput[]
    upsert?: produseUpsertWithWhereUniqueWithoutSpecializareInput | produseUpsertWithWhereUniqueWithoutSpecializareInput[]
    createMany?: produseCreateManySpecializareInputEnvelope
    set?: produseWhereUniqueInput | produseWhereUniqueInput[]
    disconnect?: produseWhereUniqueInput | produseWhereUniqueInput[]
    delete?: produseWhereUniqueInput | produseWhereUniqueInput[]
    connect?: produseWhereUniqueInput | produseWhereUniqueInput[]
    update?: produseUpdateWithWhereUniqueWithoutSpecializareInput | produseUpdateWithWhereUniqueWithoutSpecializareInput[]
    updateMany?: produseUpdateManyWithWhereWithoutSpecializareInput | produseUpdateManyWithWhereWithoutSpecializareInput[]
    deleteMany?: produseScalarWhereInput | produseScalarWhereInput[]
  }

  export type utilizatorUpdateManyWithoutSpecializare_utilizator_specializareTospecializareNestedInput = {
    create?: XOR<utilizatorCreateWithoutSpecializare_utilizator_specializareTospecializareInput, utilizatorUncheckedCreateWithoutSpecializare_utilizator_specializareTospecializareInput> | utilizatorCreateWithoutSpecializare_utilizator_specializareTospecializareInput[] | utilizatorUncheckedCreateWithoutSpecializare_utilizator_specializareTospecializareInput[]
    connectOrCreate?: utilizatorCreateOrConnectWithoutSpecializare_utilizator_specializareTospecializareInput | utilizatorCreateOrConnectWithoutSpecializare_utilizator_specializareTospecializareInput[]
    upsert?: utilizatorUpsertWithWhereUniqueWithoutSpecializare_utilizator_specializareTospecializareInput | utilizatorUpsertWithWhereUniqueWithoutSpecializare_utilizator_specializareTospecializareInput[]
    createMany?: utilizatorCreateManySpecializare_utilizator_specializareTospecializareInputEnvelope
    set?: utilizatorWhereUniqueInput | utilizatorWhereUniqueInput[]
    disconnect?: utilizatorWhereUniqueInput | utilizatorWhereUniqueInput[]
    delete?: utilizatorWhereUniqueInput | utilizatorWhereUniqueInput[]
    connect?: utilizatorWhereUniqueInput | utilizatorWhereUniqueInput[]
    update?: utilizatorUpdateWithWhereUniqueWithoutSpecializare_utilizator_specializareTospecializareInput | utilizatorUpdateWithWhereUniqueWithoutSpecializare_utilizator_specializareTospecializareInput[]
    updateMany?: utilizatorUpdateManyWithWhereWithoutSpecializare_utilizator_specializareTospecializareInput | utilizatorUpdateManyWithWhereWithoutSpecializare_utilizator_specializareTospecializareInput[]
    deleteMany?: utilizatorScalarWhereInput | utilizatorScalarWhereInput[]
  }

  export type produseUncheckedUpdateManyWithoutSpecializareNestedInput = {
    create?: XOR<produseCreateWithoutSpecializareInput, produseUncheckedCreateWithoutSpecializareInput> | produseCreateWithoutSpecializareInput[] | produseUncheckedCreateWithoutSpecializareInput[]
    connectOrCreate?: produseCreateOrConnectWithoutSpecializareInput | produseCreateOrConnectWithoutSpecializareInput[]
    upsert?: produseUpsertWithWhereUniqueWithoutSpecializareInput | produseUpsertWithWhereUniqueWithoutSpecializareInput[]
    createMany?: produseCreateManySpecializareInputEnvelope
    set?: produseWhereUniqueInput | produseWhereUniqueInput[]
    disconnect?: produseWhereUniqueInput | produseWhereUniqueInput[]
    delete?: produseWhereUniqueInput | produseWhereUniqueInput[]
    connect?: produseWhereUniqueInput | produseWhereUniqueInput[]
    update?: produseUpdateWithWhereUniqueWithoutSpecializareInput | produseUpdateWithWhereUniqueWithoutSpecializareInput[]
    updateMany?: produseUpdateManyWithWhereWithoutSpecializareInput | produseUpdateManyWithWhereWithoutSpecializareInput[]
    deleteMany?: produseScalarWhereInput | produseScalarWhereInput[]
  }

  export type utilizatorUncheckedUpdateManyWithoutSpecializare_utilizator_specializareTospecializareNestedInput = {
    create?: XOR<utilizatorCreateWithoutSpecializare_utilizator_specializareTospecializareInput, utilizatorUncheckedCreateWithoutSpecializare_utilizator_specializareTospecializareInput> | utilizatorCreateWithoutSpecializare_utilizator_specializareTospecializareInput[] | utilizatorUncheckedCreateWithoutSpecializare_utilizator_specializareTospecializareInput[]
    connectOrCreate?: utilizatorCreateOrConnectWithoutSpecializare_utilizator_specializareTospecializareInput | utilizatorCreateOrConnectWithoutSpecializare_utilizator_specializareTospecializareInput[]
    upsert?: utilizatorUpsertWithWhereUniqueWithoutSpecializare_utilizator_specializareTospecializareInput | utilizatorUpsertWithWhereUniqueWithoutSpecializare_utilizator_specializareTospecializareInput[]
    createMany?: utilizatorCreateManySpecializare_utilizator_specializareTospecializareInputEnvelope
    set?: utilizatorWhereUniqueInput | utilizatorWhereUniqueInput[]
    disconnect?: utilizatorWhereUniqueInput | utilizatorWhereUniqueInput[]
    delete?: utilizatorWhereUniqueInput | utilizatorWhereUniqueInput[]
    connect?: utilizatorWhereUniqueInput | utilizatorWhereUniqueInput[]
    update?: utilizatorUpdateWithWhereUniqueWithoutSpecializare_utilizator_specializareTospecializareInput | utilizatorUpdateWithWhereUniqueWithoutSpecializare_utilizator_specializareTospecializareInput[]
    updateMany?: utilizatorUpdateManyWithWhereWithoutSpecializare_utilizator_specializareTospecializareInput | utilizatorUpdateManyWithWhereWithoutSpecializare_utilizator_specializareTospecializareInput[]
    deleteMany?: utilizatorScalarWhereInput | utilizatorScalarWhereInput[]
  }

  export type companieCreateNestedManyWithoutSubscriptieInput = {
    create?: XOR<companieCreateWithoutSubscriptieInput, companieUncheckedCreateWithoutSubscriptieInput> | companieCreateWithoutSubscriptieInput[] | companieUncheckedCreateWithoutSubscriptieInput[]
    connectOrCreate?: companieCreateOrConnectWithoutSubscriptieInput | companieCreateOrConnectWithoutSubscriptieInput[]
    createMany?: companieCreateManySubscriptieInputEnvelope
    connect?: companieWhereUniqueInput | companieWhereUniqueInput[]
  }

  export type companieUncheckedCreateNestedManyWithoutSubscriptieInput = {
    create?: XOR<companieCreateWithoutSubscriptieInput, companieUncheckedCreateWithoutSubscriptieInput> | companieCreateWithoutSubscriptieInput[] | companieUncheckedCreateWithoutSubscriptieInput[]
    connectOrCreate?: companieCreateOrConnectWithoutSubscriptieInput | companieCreateOrConnectWithoutSubscriptieInput[]
    createMany?: companieCreateManySubscriptieInputEnvelope
    connect?: companieWhereUniqueInput | companieWhereUniqueInput[]
  }

  export type companieUpdateManyWithoutSubscriptieNestedInput = {
    create?: XOR<companieCreateWithoutSubscriptieInput, companieUncheckedCreateWithoutSubscriptieInput> | companieCreateWithoutSubscriptieInput[] | companieUncheckedCreateWithoutSubscriptieInput[]
    connectOrCreate?: companieCreateOrConnectWithoutSubscriptieInput | companieCreateOrConnectWithoutSubscriptieInput[]
    upsert?: companieUpsertWithWhereUniqueWithoutSubscriptieInput | companieUpsertWithWhereUniqueWithoutSubscriptieInput[]
    createMany?: companieCreateManySubscriptieInputEnvelope
    set?: companieWhereUniqueInput | companieWhereUniqueInput[]
    disconnect?: companieWhereUniqueInput | companieWhereUniqueInput[]
    delete?: companieWhereUniqueInput | companieWhereUniqueInput[]
    connect?: companieWhereUniqueInput | companieWhereUniqueInput[]
    update?: companieUpdateWithWhereUniqueWithoutSubscriptieInput | companieUpdateWithWhereUniqueWithoutSubscriptieInput[]
    updateMany?: companieUpdateManyWithWhereWithoutSubscriptieInput | companieUpdateManyWithWhereWithoutSubscriptieInput[]
    deleteMany?: companieScalarWhereInput | companieScalarWhereInput[]
  }

  export type companieUncheckedUpdateManyWithoutSubscriptieNestedInput = {
    create?: XOR<companieCreateWithoutSubscriptieInput, companieUncheckedCreateWithoutSubscriptieInput> | companieCreateWithoutSubscriptieInput[] | companieUncheckedCreateWithoutSubscriptieInput[]
    connectOrCreate?: companieCreateOrConnectWithoutSubscriptieInput | companieCreateOrConnectWithoutSubscriptieInput[]
    upsert?: companieUpsertWithWhereUniqueWithoutSubscriptieInput | companieUpsertWithWhereUniqueWithoutSubscriptieInput[]
    createMany?: companieCreateManySubscriptieInputEnvelope
    set?: companieWhereUniqueInput | companieWhereUniqueInput[]
    disconnect?: companieWhereUniqueInput | companieWhereUniqueInput[]
    delete?: companieWhereUniqueInput | companieWhereUniqueInput[]
    connect?: companieWhereUniqueInput | companieWhereUniqueInput[]
    update?: companieUpdateWithWhereUniqueWithoutSubscriptieInput | companieUpdateWithWhereUniqueWithoutSubscriptieInput[]
    updateMany?: companieUpdateManyWithWhereWithoutSubscriptieInput | companieUpdateManyWithWhereWithoutSubscriptieInput[]
    deleteMany?: companieScalarWhereInput | companieScalarWhereInput[]
  }

  export type istorictichetCreateNestedManyWithoutTichetInput = {
    create?: XOR<istorictichetCreateWithoutTichetInput, istorictichetUncheckedCreateWithoutTichetInput> | istorictichetCreateWithoutTichetInput[] | istorictichetUncheckedCreateWithoutTichetInput[]
    connectOrCreate?: istorictichetCreateOrConnectWithoutTichetInput | istorictichetCreateOrConnectWithoutTichetInput[]
    createMany?: istorictichetCreateManyTichetInputEnvelope
    connect?: istorictichetWhereUniqueInput | istorictichetWhereUniqueInput[]
  }

  export type mesajeCreateNestedManyWithoutTichetInput = {
    create?: XOR<mesajeCreateWithoutTichetInput, mesajeUncheckedCreateWithoutTichetInput> | mesajeCreateWithoutTichetInput[] | mesajeUncheckedCreateWithoutTichetInput[]
    connectOrCreate?: mesajeCreateOrConnectWithoutTichetInput | mesajeCreateOrConnectWithoutTichetInput[]
    createMany?: mesajeCreateManyTichetInputEnvelope
    connect?: mesajeWhereUniqueInput | mesajeWhereUniqueInput[]
  }

  export type utilizatorCreateNestedOneWithoutTichet_tichet_idsuportToutilizatorInput = {
    create?: XOR<utilizatorCreateWithoutTichet_tichet_idsuportToutilizatorInput, utilizatorUncheckedCreateWithoutTichet_tichet_idsuportToutilizatorInput>
    connectOrCreate?: utilizatorCreateOrConnectWithoutTichet_tichet_idsuportToutilizatorInput
    connect?: utilizatorWhereUniqueInput
  }

  export type utilizatorCreateNestedOneWithoutTichet_tichet_idutilizatorToutilizatorInput = {
    create?: XOR<utilizatorCreateWithoutTichet_tichet_idutilizatorToutilizatorInput, utilizatorUncheckedCreateWithoutTichet_tichet_idutilizatorToutilizatorInput>
    connectOrCreate?: utilizatorCreateOrConnectWithoutTichet_tichet_idutilizatorToutilizatorInput
    connect?: utilizatorWhereUniqueInput
  }

  export type istorictichetUncheckedCreateNestedManyWithoutTichetInput = {
    create?: XOR<istorictichetCreateWithoutTichetInput, istorictichetUncheckedCreateWithoutTichetInput> | istorictichetCreateWithoutTichetInput[] | istorictichetUncheckedCreateWithoutTichetInput[]
    connectOrCreate?: istorictichetCreateOrConnectWithoutTichetInput | istorictichetCreateOrConnectWithoutTichetInput[]
    createMany?: istorictichetCreateManyTichetInputEnvelope
    connect?: istorictichetWhereUniqueInput | istorictichetWhereUniqueInput[]
  }

  export type mesajeUncheckedCreateNestedManyWithoutTichetInput = {
    create?: XOR<mesajeCreateWithoutTichetInput, mesajeUncheckedCreateWithoutTichetInput> | mesajeCreateWithoutTichetInput[] | mesajeUncheckedCreateWithoutTichetInput[]
    connectOrCreate?: mesajeCreateOrConnectWithoutTichetInput | mesajeCreateOrConnectWithoutTichetInput[]
    createMany?: mesajeCreateManyTichetInputEnvelope
    connect?: mesajeWhereUniqueInput | mesajeWhereUniqueInput[]
  }

  export type istorictichetUpdateManyWithoutTichetNestedInput = {
    create?: XOR<istorictichetCreateWithoutTichetInput, istorictichetUncheckedCreateWithoutTichetInput> | istorictichetCreateWithoutTichetInput[] | istorictichetUncheckedCreateWithoutTichetInput[]
    connectOrCreate?: istorictichetCreateOrConnectWithoutTichetInput | istorictichetCreateOrConnectWithoutTichetInput[]
    upsert?: istorictichetUpsertWithWhereUniqueWithoutTichetInput | istorictichetUpsertWithWhereUniqueWithoutTichetInput[]
    createMany?: istorictichetCreateManyTichetInputEnvelope
    set?: istorictichetWhereUniqueInput | istorictichetWhereUniqueInput[]
    disconnect?: istorictichetWhereUniqueInput | istorictichetWhereUniqueInput[]
    delete?: istorictichetWhereUniqueInput | istorictichetWhereUniqueInput[]
    connect?: istorictichetWhereUniqueInput | istorictichetWhereUniqueInput[]
    update?: istorictichetUpdateWithWhereUniqueWithoutTichetInput | istorictichetUpdateWithWhereUniqueWithoutTichetInput[]
    updateMany?: istorictichetUpdateManyWithWhereWithoutTichetInput | istorictichetUpdateManyWithWhereWithoutTichetInput[]
    deleteMany?: istorictichetScalarWhereInput | istorictichetScalarWhereInput[]
  }

  export type mesajeUpdateManyWithoutTichetNestedInput = {
    create?: XOR<mesajeCreateWithoutTichetInput, mesajeUncheckedCreateWithoutTichetInput> | mesajeCreateWithoutTichetInput[] | mesajeUncheckedCreateWithoutTichetInput[]
    connectOrCreate?: mesajeCreateOrConnectWithoutTichetInput | mesajeCreateOrConnectWithoutTichetInput[]
    upsert?: mesajeUpsertWithWhereUniqueWithoutTichetInput | mesajeUpsertWithWhereUniqueWithoutTichetInput[]
    createMany?: mesajeCreateManyTichetInputEnvelope
    set?: mesajeWhereUniqueInput | mesajeWhereUniqueInput[]
    disconnect?: mesajeWhereUniqueInput | mesajeWhereUniqueInput[]
    delete?: mesajeWhereUniqueInput | mesajeWhereUniqueInput[]
    connect?: mesajeWhereUniqueInput | mesajeWhereUniqueInput[]
    update?: mesajeUpdateWithWhereUniqueWithoutTichetInput | mesajeUpdateWithWhereUniqueWithoutTichetInput[]
    updateMany?: mesajeUpdateManyWithWhereWithoutTichetInput | mesajeUpdateManyWithWhereWithoutTichetInput[]
    deleteMany?: mesajeScalarWhereInput | mesajeScalarWhereInput[]
  }

  export type utilizatorUpdateOneRequiredWithoutTichet_tichet_idsuportToutilizatorNestedInput = {
    create?: XOR<utilizatorCreateWithoutTichet_tichet_idsuportToutilizatorInput, utilizatorUncheckedCreateWithoutTichet_tichet_idsuportToutilizatorInput>
    connectOrCreate?: utilizatorCreateOrConnectWithoutTichet_tichet_idsuportToutilizatorInput
    upsert?: utilizatorUpsertWithoutTichet_tichet_idsuportToutilizatorInput
    connect?: utilizatorWhereUniqueInput
    update?: XOR<XOR<utilizatorUpdateToOneWithWhereWithoutTichet_tichet_idsuportToutilizatorInput, utilizatorUpdateWithoutTichet_tichet_idsuportToutilizatorInput>, utilizatorUncheckedUpdateWithoutTichet_tichet_idsuportToutilizatorInput>
  }

  export type utilizatorUpdateOneRequiredWithoutTichet_tichet_idutilizatorToutilizatorNestedInput = {
    create?: XOR<utilizatorCreateWithoutTichet_tichet_idutilizatorToutilizatorInput, utilizatorUncheckedCreateWithoutTichet_tichet_idutilizatorToutilizatorInput>
    connectOrCreate?: utilizatorCreateOrConnectWithoutTichet_tichet_idutilizatorToutilizatorInput
    upsert?: utilizatorUpsertWithoutTichet_tichet_idutilizatorToutilizatorInput
    connect?: utilizatorWhereUniqueInput
    update?: XOR<XOR<utilizatorUpdateToOneWithWhereWithoutTichet_tichet_idutilizatorToutilizatorInput, utilizatorUpdateWithoutTichet_tichet_idutilizatorToutilizatorInput>, utilizatorUncheckedUpdateWithoutTichet_tichet_idutilizatorToutilizatorInput>
  }

  export type istorictichetUncheckedUpdateManyWithoutTichetNestedInput = {
    create?: XOR<istorictichetCreateWithoutTichetInput, istorictichetUncheckedCreateWithoutTichetInput> | istorictichetCreateWithoutTichetInput[] | istorictichetUncheckedCreateWithoutTichetInput[]
    connectOrCreate?: istorictichetCreateOrConnectWithoutTichetInput | istorictichetCreateOrConnectWithoutTichetInput[]
    upsert?: istorictichetUpsertWithWhereUniqueWithoutTichetInput | istorictichetUpsertWithWhereUniqueWithoutTichetInput[]
    createMany?: istorictichetCreateManyTichetInputEnvelope
    set?: istorictichetWhereUniqueInput | istorictichetWhereUniqueInput[]
    disconnect?: istorictichetWhereUniqueInput | istorictichetWhereUniqueInput[]
    delete?: istorictichetWhereUniqueInput | istorictichetWhereUniqueInput[]
    connect?: istorictichetWhereUniqueInput | istorictichetWhereUniqueInput[]
    update?: istorictichetUpdateWithWhereUniqueWithoutTichetInput | istorictichetUpdateWithWhereUniqueWithoutTichetInput[]
    updateMany?: istorictichetUpdateManyWithWhereWithoutTichetInput | istorictichetUpdateManyWithWhereWithoutTichetInput[]
    deleteMany?: istorictichetScalarWhereInput | istorictichetScalarWhereInput[]
  }

  export type mesajeUncheckedUpdateManyWithoutTichetNestedInput = {
    create?: XOR<mesajeCreateWithoutTichetInput, mesajeUncheckedCreateWithoutTichetInput> | mesajeCreateWithoutTichetInput[] | mesajeUncheckedCreateWithoutTichetInput[]
    connectOrCreate?: mesajeCreateOrConnectWithoutTichetInput | mesajeCreateOrConnectWithoutTichetInput[]
    upsert?: mesajeUpsertWithWhereUniqueWithoutTichetInput | mesajeUpsertWithWhereUniqueWithoutTichetInput[]
    createMany?: mesajeCreateManyTichetInputEnvelope
    set?: mesajeWhereUniqueInput | mesajeWhereUniqueInput[]
    disconnect?: mesajeWhereUniqueInput | mesajeWhereUniqueInput[]
    delete?: mesajeWhereUniqueInput | mesajeWhereUniqueInput[]
    connect?: mesajeWhereUniqueInput | mesajeWhereUniqueInput[]
    update?: mesajeUpdateWithWhereUniqueWithoutTichetInput | mesajeUpdateWithWhereUniqueWithoutTichetInput[]
    updateMany?: mesajeUpdateManyWithWhereWithoutTichetInput | mesajeUpdateManyWithWhereWithoutTichetInput[]
    deleteMany?: mesajeScalarWhereInput | mesajeScalarWhereInput[]
  }

  export type tichetCreateNestedManyWithoutUtilizator_tichet_idsuportToutilizatorInput = {
    create?: XOR<tichetCreateWithoutUtilizator_tichet_idsuportToutilizatorInput, tichetUncheckedCreateWithoutUtilizator_tichet_idsuportToutilizatorInput> | tichetCreateWithoutUtilizator_tichet_idsuportToutilizatorInput[] | tichetUncheckedCreateWithoutUtilizator_tichet_idsuportToutilizatorInput[]
    connectOrCreate?: tichetCreateOrConnectWithoutUtilizator_tichet_idsuportToutilizatorInput | tichetCreateOrConnectWithoutUtilizator_tichet_idsuportToutilizatorInput[]
    createMany?: tichetCreateManyUtilizator_tichet_idsuportToutilizatorInputEnvelope
    connect?: tichetWhereUniqueInput | tichetWhereUniqueInput[]
  }

  export type tichetCreateNestedManyWithoutUtilizator_tichet_idutilizatorToutilizatorInput = {
    create?: XOR<tichetCreateWithoutUtilizator_tichet_idutilizatorToutilizatorInput, tichetUncheckedCreateWithoutUtilizator_tichet_idutilizatorToutilizatorInput> | tichetCreateWithoutUtilizator_tichet_idutilizatorToutilizatorInput[] | tichetUncheckedCreateWithoutUtilizator_tichet_idutilizatorToutilizatorInput[]
    connectOrCreate?: tichetCreateOrConnectWithoutUtilizator_tichet_idutilizatorToutilizatorInput | tichetCreateOrConnectWithoutUtilizator_tichet_idutilizatorToutilizatorInput[]
    createMany?: tichetCreateManyUtilizator_tichet_idutilizatorToutilizatorInputEnvelope
    connect?: tichetWhereUniqueInput | tichetWhereUniqueInput[]
  }

  export type companieCreateNestedOneWithoutUtilizatorInput = {
    create?: XOR<companieCreateWithoutUtilizatorInput, companieUncheckedCreateWithoutUtilizatorInput>
    connectOrCreate?: companieCreateOrConnectWithoutUtilizatorInput
    connect?: companieWhereUniqueInput
  }

  export type specializareCreateNestedOneWithoutUtilizator_utilizator_specializareTospecializareInput = {
    create?: XOR<specializareCreateWithoutUtilizator_utilizator_specializareTospecializareInput, specializareUncheckedCreateWithoutUtilizator_utilizator_specializareTospecializareInput>
    connectOrCreate?: specializareCreateOrConnectWithoutUtilizator_utilizator_specializareTospecializareInput
    connect?: specializareWhereUniqueInput
  }

  export type tichetUncheckedCreateNestedManyWithoutUtilizator_tichet_idsuportToutilizatorInput = {
    create?: XOR<tichetCreateWithoutUtilizator_tichet_idsuportToutilizatorInput, tichetUncheckedCreateWithoutUtilizator_tichet_idsuportToutilizatorInput> | tichetCreateWithoutUtilizator_tichet_idsuportToutilizatorInput[] | tichetUncheckedCreateWithoutUtilizator_tichet_idsuportToutilizatorInput[]
    connectOrCreate?: tichetCreateOrConnectWithoutUtilizator_tichet_idsuportToutilizatorInput | tichetCreateOrConnectWithoutUtilizator_tichet_idsuportToutilizatorInput[]
    createMany?: tichetCreateManyUtilizator_tichet_idsuportToutilizatorInputEnvelope
    connect?: tichetWhereUniqueInput | tichetWhereUniqueInput[]
  }

  export type tichetUncheckedCreateNestedManyWithoutUtilizator_tichet_idutilizatorToutilizatorInput = {
    create?: XOR<tichetCreateWithoutUtilizator_tichet_idutilizatorToutilizatorInput, tichetUncheckedCreateWithoutUtilizator_tichet_idutilizatorToutilizatorInput> | tichetCreateWithoutUtilizator_tichet_idutilizatorToutilizatorInput[] | tichetUncheckedCreateWithoutUtilizator_tichet_idutilizatorToutilizatorInput[]
    connectOrCreate?: tichetCreateOrConnectWithoutUtilizator_tichet_idutilizatorToutilizatorInput | tichetCreateOrConnectWithoutUtilizator_tichet_idutilizatorToutilizatorInput[]
    createMany?: tichetCreateManyUtilizator_tichet_idutilizatorToutilizatorInputEnvelope
    connect?: tichetWhereUniqueInput | tichetWhereUniqueInput[]
  }

  export type tichetUpdateManyWithoutUtilizator_tichet_idsuportToutilizatorNestedInput = {
    create?: XOR<tichetCreateWithoutUtilizator_tichet_idsuportToutilizatorInput, tichetUncheckedCreateWithoutUtilizator_tichet_idsuportToutilizatorInput> | tichetCreateWithoutUtilizator_tichet_idsuportToutilizatorInput[] | tichetUncheckedCreateWithoutUtilizator_tichet_idsuportToutilizatorInput[]
    connectOrCreate?: tichetCreateOrConnectWithoutUtilizator_tichet_idsuportToutilizatorInput | tichetCreateOrConnectWithoutUtilizator_tichet_idsuportToutilizatorInput[]
    upsert?: tichetUpsertWithWhereUniqueWithoutUtilizator_tichet_idsuportToutilizatorInput | tichetUpsertWithWhereUniqueWithoutUtilizator_tichet_idsuportToutilizatorInput[]
    createMany?: tichetCreateManyUtilizator_tichet_idsuportToutilizatorInputEnvelope
    set?: tichetWhereUniqueInput | tichetWhereUniqueInput[]
    disconnect?: tichetWhereUniqueInput | tichetWhereUniqueInput[]
    delete?: tichetWhereUniqueInput | tichetWhereUniqueInput[]
    connect?: tichetWhereUniqueInput | tichetWhereUniqueInput[]
    update?: tichetUpdateWithWhereUniqueWithoutUtilizator_tichet_idsuportToutilizatorInput | tichetUpdateWithWhereUniqueWithoutUtilizator_tichet_idsuportToutilizatorInput[]
    updateMany?: tichetUpdateManyWithWhereWithoutUtilizator_tichet_idsuportToutilizatorInput | tichetUpdateManyWithWhereWithoutUtilizator_tichet_idsuportToutilizatorInput[]
    deleteMany?: tichetScalarWhereInput | tichetScalarWhereInput[]
  }

  export type tichetUpdateManyWithoutUtilizator_tichet_idutilizatorToutilizatorNestedInput = {
    create?: XOR<tichetCreateWithoutUtilizator_tichet_idutilizatorToutilizatorInput, tichetUncheckedCreateWithoutUtilizator_tichet_idutilizatorToutilizatorInput> | tichetCreateWithoutUtilizator_tichet_idutilizatorToutilizatorInput[] | tichetUncheckedCreateWithoutUtilizator_tichet_idutilizatorToutilizatorInput[]
    connectOrCreate?: tichetCreateOrConnectWithoutUtilizator_tichet_idutilizatorToutilizatorInput | tichetCreateOrConnectWithoutUtilizator_tichet_idutilizatorToutilizatorInput[]
    upsert?: tichetUpsertWithWhereUniqueWithoutUtilizator_tichet_idutilizatorToutilizatorInput | tichetUpsertWithWhereUniqueWithoutUtilizator_tichet_idutilizatorToutilizatorInput[]
    createMany?: tichetCreateManyUtilizator_tichet_idutilizatorToutilizatorInputEnvelope
    set?: tichetWhereUniqueInput | tichetWhereUniqueInput[]
    disconnect?: tichetWhereUniqueInput | tichetWhereUniqueInput[]
    delete?: tichetWhereUniqueInput | tichetWhereUniqueInput[]
    connect?: tichetWhereUniqueInput | tichetWhereUniqueInput[]
    update?: tichetUpdateWithWhereUniqueWithoutUtilizator_tichet_idutilizatorToutilizatorInput | tichetUpdateWithWhereUniqueWithoutUtilizator_tichet_idutilizatorToutilizatorInput[]
    updateMany?: tichetUpdateManyWithWhereWithoutUtilizator_tichet_idutilizatorToutilizatorInput | tichetUpdateManyWithWhereWithoutUtilizator_tichet_idutilizatorToutilizatorInput[]
    deleteMany?: tichetScalarWhereInput | tichetScalarWhereInput[]
  }

  export type companieUpdateOneWithoutUtilizatorNestedInput = {
    create?: XOR<companieCreateWithoutUtilizatorInput, companieUncheckedCreateWithoutUtilizatorInput>
    connectOrCreate?: companieCreateOrConnectWithoutUtilizatorInput
    upsert?: companieUpsertWithoutUtilizatorInput
    disconnect?: companieWhereInput | boolean
    delete?: companieWhereInput | boolean
    connect?: companieWhereUniqueInput
    update?: XOR<XOR<companieUpdateToOneWithWhereWithoutUtilizatorInput, companieUpdateWithoutUtilizatorInput>, companieUncheckedUpdateWithoutUtilizatorInput>
  }

  export type specializareUpdateOneWithoutUtilizator_utilizator_specializareTospecializareNestedInput = {
    create?: XOR<specializareCreateWithoutUtilizator_utilizator_specializareTospecializareInput, specializareUncheckedCreateWithoutUtilizator_utilizator_specializareTospecializareInput>
    connectOrCreate?: specializareCreateOrConnectWithoutUtilizator_utilizator_specializareTospecializareInput
    upsert?: specializareUpsertWithoutUtilizator_utilizator_specializareTospecializareInput
    disconnect?: specializareWhereInput | boolean
    delete?: specializareWhereInput | boolean
    connect?: specializareWhereUniqueInput
    update?: XOR<XOR<specializareUpdateToOneWithWhereWithoutUtilizator_utilizator_specializareTospecializareInput, specializareUpdateWithoutUtilizator_utilizator_specializareTospecializareInput>, specializareUncheckedUpdateWithoutUtilizator_utilizator_specializareTospecializareInput>
  }

  export type tichetUncheckedUpdateManyWithoutUtilizator_tichet_idsuportToutilizatorNestedInput = {
    create?: XOR<tichetCreateWithoutUtilizator_tichet_idsuportToutilizatorInput, tichetUncheckedCreateWithoutUtilizator_tichet_idsuportToutilizatorInput> | tichetCreateWithoutUtilizator_tichet_idsuportToutilizatorInput[] | tichetUncheckedCreateWithoutUtilizator_tichet_idsuportToutilizatorInput[]
    connectOrCreate?: tichetCreateOrConnectWithoutUtilizator_tichet_idsuportToutilizatorInput | tichetCreateOrConnectWithoutUtilizator_tichet_idsuportToutilizatorInput[]
    upsert?: tichetUpsertWithWhereUniqueWithoutUtilizator_tichet_idsuportToutilizatorInput | tichetUpsertWithWhereUniqueWithoutUtilizator_tichet_idsuportToutilizatorInput[]
    createMany?: tichetCreateManyUtilizator_tichet_idsuportToutilizatorInputEnvelope
    set?: tichetWhereUniqueInput | tichetWhereUniqueInput[]
    disconnect?: tichetWhereUniqueInput | tichetWhereUniqueInput[]
    delete?: tichetWhereUniqueInput | tichetWhereUniqueInput[]
    connect?: tichetWhereUniqueInput | tichetWhereUniqueInput[]
    update?: tichetUpdateWithWhereUniqueWithoutUtilizator_tichet_idsuportToutilizatorInput | tichetUpdateWithWhereUniqueWithoutUtilizator_tichet_idsuportToutilizatorInput[]
    updateMany?: tichetUpdateManyWithWhereWithoutUtilizator_tichet_idsuportToutilizatorInput | tichetUpdateManyWithWhereWithoutUtilizator_tichet_idsuportToutilizatorInput[]
    deleteMany?: tichetScalarWhereInput | tichetScalarWhereInput[]
  }

  export type tichetUncheckedUpdateManyWithoutUtilizator_tichet_idutilizatorToutilizatorNestedInput = {
    create?: XOR<tichetCreateWithoutUtilizator_tichet_idutilizatorToutilizatorInput, tichetUncheckedCreateWithoutUtilizator_tichet_idutilizatorToutilizatorInput> | tichetCreateWithoutUtilizator_tichet_idutilizatorToutilizatorInput[] | tichetUncheckedCreateWithoutUtilizator_tichet_idutilizatorToutilizatorInput[]
    connectOrCreate?: tichetCreateOrConnectWithoutUtilizator_tichet_idutilizatorToutilizatorInput | tichetCreateOrConnectWithoutUtilizator_tichet_idutilizatorToutilizatorInput[]
    upsert?: tichetUpsertWithWhereUniqueWithoutUtilizator_tichet_idutilizatorToutilizatorInput | tichetUpsertWithWhereUniqueWithoutUtilizator_tichet_idutilizatorToutilizatorInput[]
    createMany?: tichetCreateManyUtilizator_tichet_idutilizatorToutilizatorInputEnvelope
    set?: tichetWhereUniqueInput | tichetWhereUniqueInput[]
    disconnect?: tichetWhereUniqueInput | tichetWhereUniqueInput[]
    delete?: tichetWhereUniqueInput | tichetWhereUniqueInput[]
    connect?: tichetWhereUniqueInput | tichetWhereUniqueInput[]
    update?: tichetUpdateWithWhereUniqueWithoutUtilizator_tichet_idutilizatorToutilizatorInput | tichetUpdateWithWhereUniqueWithoutUtilizator_tichet_idutilizatorToutilizatorInput[]
    updateMany?: tichetUpdateManyWithWhereWithoutUtilizator_tichet_idutilizatorToutilizatorInput | tichetUpdateManyWithWhereWithoutUtilizator_tichet_idutilizatorToutilizatorInput[]
    deleteMany?: tichetScalarWhereInput | tichetScalarWhereInput[]
  }

  export type specializareCreateNestedOneWithoutProduseInput = {
    create?: XOR<specializareCreateWithoutProduseInput, specializareUncheckedCreateWithoutProduseInput>
    connectOrCreate?: specializareCreateOrConnectWithoutProduseInput
    connect?: specializareWhereUniqueInput
  }

  export type specializareUpdateOneRequiredWithoutProduseNestedInput = {
    create?: XOR<specializareCreateWithoutProduseInput, specializareUncheckedCreateWithoutProduseInput>
    connectOrCreate?: specializareCreateOrConnectWithoutProduseInput
    upsert?: specializareUpsertWithoutProduseInput
    connect?: specializareWhereUniqueInput
    update?: XOR<XOR<specializareUpdateToOneWithWhereWithoutProduseInput, specializareUpdateWithoutProduseInput>, specializareUncheckedUpdateWithoutProduseInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type echipacompanieCreateWithoutCompanieInput = {
    nume: string
    membruechipa?: membruechipaCreateNestedManyWithoutEchipacompanieInput
  }

  export type echipacompanieUncheckedCreateWithoutCompanieInput = {
    idechipa?: number
    nume: string
    membruechipa?: membruechipaUncheckedCreateNestedManyWithoutEchipacompanieInput
  }

  export type echipacompanieCreateOrConnectWithoutCompanieInput = {
    where: echipacompanieWhereUniqueInput
    create: XOR<echipacompanieCreateWithoutCompanieInput, echipacompanieUncheckedCreateWithoutCompanieInput>
  }

  export type subscriptieCreateWithoutCompanieInput = {
    tip: string
    numarmaximutilizatori: number
    timpraspunsp1: string
    timpraspunsp2: string
    timpraspunsp3: string
    timpraspunsp4: string
  }

  export type subscriptieUncheckedCreateWithoutCompanieInput = {
    tip: string
    numarmaximutilizatori: number
    timpraspunsp1: string
    timpraspunsp2: string
    timpraspunsp3: string
    timpraspunsp4: string
  }

  export type subscriptieCreateOrConnectWithoutCompanieInput = {
    where: subscriptieWhereUniqueInput
    create: XOR<subscriptieCreateWithoutCompanieInput, subscriptieUncheckedCreateWithoutCompanieInput>
  }

  export type utilizatorCreateWithoutCompanieInput = {
    email: string
    nume: string
    prenume: string
    modalitatelogare: string
    pozaprofil: string
    datacreare: Date | string
    tiputilizator: string
    tichet_tichet_idsuportToutilizator?: tichetCreateNestedManyWithoutUtilizator_tichet_idsuportToutilizatorInput
    tichet_tichet_idutilizatorToutilizator?: tichetCreateNestedManyWithoutUtilizator_tichet_idutilizatorToutilizatorInput
    specializare_utilizator_specializareTospecializare?: specializareCreateNestedOneWithoutUtilizator_utilizator_specializareTospecializareInput
  }

  export type utilizatorUncheckedCreateWithoutCompanieInput = {
    idutilizator?: number
    email: string
    nume: string
    prenume: string
    modalitatelogare: string
    pozaprofil: string
    datacreare: Date | string
    tiputilizator: string
    specializare?: number | null
    tichet_tichet_idsuportToutilizator?: tichetUncheckedCreateNestedManyWithoutUtilizator_tichet_idsuportToutilizatorInput
    tichet_tichet_idutilizatorToutilizator?: tichetUncheckedCreateNestedManyWithoutUtilizator_tichet_idutilizatorToutilizatorInput
  }

  export type utilizatorCreateOrConnectWithoutCompanieInput = {
    where: utilizatorWhereUniqueInput
    create: XOR<utilizatorCreateWithoutCompanieInput, utilizatorUncheckedCreateWithoutCompanieInput>
  }

  export type utilizatorCreateManyCompanieInputEnvelope = {
    data: utilizatorCreateManyCompanieInput | utilizatorCreateManyCompanieInput[]
    skipDuplicates?: boolean
  }

  export type echipacompanieUpsertWithoutCompanieInput = {
    update: XOR<echipacompanieUpdateWithoutCompanieInput, echipacompanieUncheckedUpdateWithoutCompanieInput>
    create: XOR<echipacompanieCreateWithoutCompanieInput, echipacompanieUncheckedCreateWithoutCompanieInput>
    where?: echipacompanieWhereInput
  }

  export type echipacompanieUpdateToOneWithWhereWithoutCompanieInput = {
    where?: echipacompanieWhereInput
    data: XOR<echipacompanieUpdateWithoutCompanieInput, echipacompanieUncheckedUpdateWithoutCompanieInput>
  }

  export type echipacompanieUpdateWithoutCompanieInput = {
    nume?: StringFieldUpdateOperationsInput | string
    membruechipa?: membruechipaUpdateManyWithoutEchipacompanieNestedInput
  }

  export type echipacompanieUncheckedUpdateWithoutCompanieInput = {
    idechipa?: IntFieldUpdateOperationsInput | number
    nume?: StringFieldUpdateOperationsInput | string
    membruechipa?: membruechipaUncheckedUpdateManyWithoutEchipacompanieNestedInput
  }

  export type subscriptieUpsertWithoutCompanieInput = {
    update: XOR<subscriptieUpdateWithoutCompanieInput, subscriptieUncheckedUpdateWithoutCompanieInput>
    create: XOR<subscriptieCreateWithoutCompanieInput, subscriptieUncheckedCreateWithoutCompanieInput>
    where?: subscriptieWhereInput
  }

  export type subscriptieUpdateToOneWithWhereWithoutCompanieInput = {
    where?: subscriptieWhereInput
    data: XOR<subscriptieUpdateWithoutCompanieInput, subscriptieUncheckedUpdateWithoutCompanieInput>
  }

  export type subscriptieUpdateWithoutCompanieInput = {
    tip?: StringFieldUpdateOperationsInput | string
    numarmaximutilizatori?: IntFieldUpdateOperationsInput | number
    timpraspunsp1?: StringFieldUpdateOperationsInput | string
    timpraspunsp2?: StringFieldUpdateOperationsInput | string
    timpraspunsp3?: StringFieldUpdateOperationsInput | string
    timpraspunsp4?: StringFieldUpdateOperationsInput | string
  }

  export type subscriptieUncheckedUpdateWithoutCompanieInput = {
    tip?: StringFieldUpdateOperationsInput | string
    numarmaximutilizatori?: IntFieldUpdateOperationsInput | number
    timpraspunsp1?: StringFieldUpdateOperationsInput | string
    timpraspunsp2?: StringFieldUpdateOperationsInput | string
    timpraspunsp3?: StringFieldUpdateOperationsInput | string
    timpraspunsp4?: StringFieldUpdateOperationsInput | string
  }

  export type utilizatorUpsertWithWhereUniqueWithoutCompanieInput = {
    where: utilizatorWhereUniqueInput
    update: XOR<utilizatorUpdateWithoutCompanieInput, utilizatorUncheckedUpdateWithoutCompanieInput>
    create: XOR<utilizatorCreateWithoutCompanieInput, utilizatorUncheckedCreateWithoutCompanieInput>
  }

  export type utilizatorUpdateWithWhereUniqueWithoutCompanieInput = {
    where: utilizatorWhereUniqueInput
    data: XOR<utilizatorUpdateWithoutCompanieInput, utilizatorUncheckedUpdateWithoutCompanieInput>
  }

  export type utilizatorUpdateManyWithWhereWithoutCompanieInput = {
    where: utilizatorScalarWhereInput
    data: XOR<utilizatorUpdateManyMutationInput, utilizatorUncheckedUpdateManyWithoutCompanieInput>
  }

  export type utilizatorScalarWhereInput = {
    AND?: utilizatorScalarWhereInput | utilizatorScalarWhereInput[]
    OR?: utilizatorScalarWhereInput[]
    NOT?: utilizatorScalarWhereInput | utilizatorScalarWhereInput[]
    idutilizator?: IntFilter<"utilizator"> | number
    email?: StringFilter<"utilizator"> | string
    nume?: StringFilter<"utilizator"> | string
    prenume?: StringFilter<"utilizator"> | string
    modalitatelogare?: StringFilter<"utilizator"> | string
    pozaprofil?: StringFilter<"utilizator"> | string
    datacreare?: DateTimeFilter<"utilizator"> | Date | string
    idcompanie?: IntNullableFilter<"utilizator"> | number | null
    tiputilizator?: StringFilter<"utilizator"> | string
    specializare?: IntNullableFilter<"utilizator"> | number | null
  }

  export type companieCreateWithoutEchipacompanieInput = {
    datacreare: Date | string
    nume: string
    status: string
    focus: boolean
    notitedesprecompanie?: string | null
    subscriptie?: subscriptieCreateNestedOneWithoutCompanieInput
    utilizator?: utilizatorCreateNestedManyWithoutCompanieInput
  }

  export type companieUncheckedCreateWithoutEchipacompanieInput = {
    idcompanie?: number
    datacreare: Date | string
    nume: string
    status: string
    focus: boolean
    notitedesprecompanie?: string | null
    tipsubscriptie?: string | null
    utilizator?: utilizatorUncheckedCreateNestedManyWithoutCompanieInput
  }

  export type companieCreateOrConnectWithoutEchipacompanieInput = {
    where: companieWhereUniqueInput
    create: XOR<companieCreateWithoutEchipacompanieInput, companieUncheckedCreateWithoutEchipacompanieInput>
  }

  export type companieCreateManyEchipacompanieInputEnvelope = {
    data: companieCreateManyEchipacompanieInput | companieCreateManyEchipacompanieInput[]
    skipDuplicates?: boolean
  }

  export type membruechipaCreateWithoutEchipacompanieInput = {
    nume: string
    prenume: string
    rol: string
    email: string
  }

  export type membruechipaUncheckedCreateWithoutEchipacompanieInput = {
    idmembru?: number
    nume: string
    prenume: string
    rol: string
    email: string
  }

  export type membruechipaCreateOrConnectWithoutEchipacompanieInput = {
    where: membruechipaWhereUniqueInput
    create: XOR<membruechipaCreateWithoutEchipacompanieInput, membruechipaUncheckedCreateWithoutEchipacompanieInput>
  }

  export type membruechipaCreateManyEchipacompanieInputEnvelope = {
    data: membruechipaCreateManyEchipacompanieInput | membruechipaCreateManyEchipacompanieInput[]
    skipDuplicates?: boolean
  }

  export type companieUpsertWithWhereUniqueWithoutEchipacompanieInput = {
    where: companieWhereUniqueInput
    update: XOR<companieUpdateWithoutEchipacompanieInput, companieUncheckedUpdateWithoutEchipacompanieInput>
    create: XOR<companieCreateWithoutEchipacompanieInput, companieUncheckedCreateWithoutEchipacompanieInput>
  }

  export type companieUpdateWithWhereUniqueWithoutEchipacompanieInput = {
    where: companieWhereUniqueInput
    data: XOR<companieUpdateWithoutEchipacompanieInput, companieUncheckedUpdateWithoutEchipacompanieInput>
  }

  export type companieUpdateManyWithWhereWithoutEchipacompanieInput = {
    where: companieScalarWhereInput
    data: XOR<companieUpdateManyMutationInput, companieUncheckedUpdateManyWithoutEchipacompanieInput>
  }

  export type companieScalarWhereInput = {
    AND?: companieScalarWhereInput | companieScalarWhereInput[]
    OR?: companieScalarWhereInput[]
    NOT?: companieScalarWhereInput | companieScalarWhereInput[]
    idcompanie?: IntFilter<"companie"> | number
    datacreare?: DateTimeFilter<"companie"> | Date | string
    nume?: StringFilter<"companie"> | string
    status?: StringFilter<"companie"> | string
    focus?: BoolFilter<"companie"> | boolean
    notitedesprecompanie?: StringNullableFilter<"companie"> | string | null
    tipsubscriptie?: StringNullableFilter<"companie"> | string | null
    idechipa?: IntNullableFilter<"companie"> | number | null
  }

  export type membruechipaUpsertWithWhereUniqueWithoutEchipacompanieInput = {
    where: membruechipaWhereUniqueInput
    update: XOR<membruechipaUpdateWithoutEchipacompanieInput, membruechipaUncheckedUpdateWithoutEchipacompanieInput>
    create: XOR<membruechipaCreateWithoutEchipacompanieInput, membruechipaUncheckedCreateWithoutEchipacompanieInput>
  }

  export type membruechipaUpdateWithWhereUniqueWithoutEchipacompanieInput = {
    where: membruechipaWhereUniqueInput
    data: XOR<membruechipaUpdateWithoutEchipacompanieInput, membruechipaUncheckedUpdateWithoutEchipacompanieInput>
  }

  export type membruechipaUpdateManyWithWhereWithoutEchipacompanieInput = {
    where: membruechipaScalarWhereInput
    data: XOR<membruechipaUpdateManyMutationInput, membruechipaUncheckedUpdateManyWithoutEchipacompanieInput>
  }

  export type membruechipaScalarWhereInput = {
    AND?: membruechipaScalarWhereInput | membruechipaScalarWhereInput[]
    OR?: membruechipaScalarWhereInput[]
    NOT?: membruechipaScalarWhereInput | membruechipaScalarWhereInput[]
    idmembru?: IntFilter<"membruechipa"> | number
    nume?: StringFilter<"membruechipa"> | string
    prenume?: StringFilter<"membruechipa"> | string
    rol?: StringFilter<"membruechipa"> | string
    email?: StringFilter<"membruechipa"> | string
    idechipa?: IntFilter<"membruechipa"> | number
  }

  export type tichetCreateWithoutIstorictichetInput = {
    titlu: string
    tiptichet: string
    prioritate: string
    datacreare: Date | string
    datainchidere: Date | string
    statuscurent: string
    consultdeschis: boolean
    bugdeschis: boolean
    produs: string
    escaladat: boolean
    linkdocs?: string | null
    linkdrive?: string | null
    mesaje?: mesajeCreateNestedManyWithoutTichetInput
    utilizator_tichet_idsuportToutilizator: utilizatorCreateNestedOneWithoutTichet_tichet_idsuportToutilizatorInput
    utilizator_tichet_idutilizatorToutilizator: utilizatorCreateNestedOneWithoutTichet_tichet_idutilizatorToutilizatorInput
  }

  export type tichetUncheckedCreateWithoutIstorictichetInput = {
    idtichet?: number
    titlu: string
    tiptichet: string
    prioritate: string
    datacreare: Date | string
    datainchidere: Date | string
    statuscurent: string
    consultdeschis: boolean
    bugdeschis: boolean
    produs: string
    escaladat: boolean
    idsuport: number
    idutilizator: number
    linkdocs?: string | null
    linkdrive?: string | null
    mesaje?: mesajeUncheckedCreateNestedManyWithoutTichetInput
  }

  export type tichetCreateOrConnectWithoutIstorictichetInput = {
    where: tichetWhereUniqueInput
    create: XOR<tichetCreateWithoutIstorictichetInput, tichetUncheckedCreateWithoutIstorictichetInput>
  }

  export type tichetUpsertWithoutIstorictichetInput = {
    update: XOR<tichetUpdateWithoutIstorictichetInput, tichetUncheckedUpdateWithoutIstorictichetInput>
    create: XOR<tichetCreateWithoutIstorictichetInput, tichetUncheckedCreateWithoutIstorictichetInput>
    where?: tichetWhereInput
  }

  export type tichetUpdateToOneWithWhereWithoutIstorictichetInput = {
    where?: tichetWhereInput
    data: XOR<tichetUpdateWithoutIstorictichetInput, tichetUncheckedUpdateWithoutIstorictichetInput>
  }

  export type tichetUpdateWithoutIstorictichetInput = {
    titlu?: StringFieldUpdateOperationsInput | string
    tiptichet?: StringFieldUpdateOperationsInput | string
    prioritate?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    datainchidere?: DateTimeFieldUpdateOperationsInput | Date | string
    statuscurent?: StringFieldUpdateOperationsInput | string
    consultdeschis?: BoolFieldUpdateOperationsInput | boolean
    bugdeschis?: BoolFieldUpdateOperationsInput | boolean
    produs?: StringFieldUpdateOperationsInput | string
    escaladat?: BoolFieldUpdateOperationsInput | boolean
    linkdocs?: NullableStringFieldUpdateOperationsInput | string | null
    linkdrive?: NullableStringFieldUpdateOperationsInput | string | null
    mesaje?: mesajeUpdateManyWithoutTichetNestedInput
    utilizator_tichet_idsuportToutilizator?: utilizatorUpdateOneRequiredWithoutTichet_tichet_idsuportToutilizatorNestedInput
    utilizator_tichet_idutilizatorToutilizator?: utilizatorUpdateOneRequiredWithoutTichet_tichet_idutilizatorToutilizatorNestedInput
  }

  export type tichetUncheckedUpdateWithoutIstorictichetInput = {
    idtichet?: IntFieldUpdateOperationsInput | number
    titlu?: StringFieldUpdateOperationsInput | string
    tiptichet?: StringFieldUpdateOperationsInput | string
    prioritate?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    datainchidere?: DateTimeFieldUpdateOperationsInput | Date | string
    statuscurent?: StringFieldUpdateOperationsInput | string
    consultdeschis?: BoolFieldUpdateOperationsInput | boolean
    bugdeschis?: BoolFieldUpdateOperationsInput | boolean
    produs?: StringFieldUpdateOperationsInput | string
    escaladat?: BoolFieldUpdateOperationsInput | boolean
    idsuport?: IntFieldUpdateOperationsInput | number
    idutilizator?: IntFieldUpdateOperationsInput | number
    linkdocs?: NullableStringFieldUpdateOperationsInput | string | null
    linkdrive?: NullableStringFieldUpdateOperationsInput | string | null
    mesaje?: mesajeUncheckedUpdateManyWithoutTichetNestedInput
  }

  export type echipacompanieCreateWithoutMembruechipaInput = {
    nume: string
    companie?: companieCreateNestedManyWithoutEchipacompanieInput
  }

  export type echipacompanieUncheckedCreateWithoutMembruechipaInput = {
    idechipa?: number
    nume: string
    companie?: companieUncheckedCreateNestedManyWithoutEchipacompanieInput
  }

  export type echipacompanieCreateOrConnectWithoutMembruechipaInput = {
    where: echipacompanieWhereUniqueInput
    create: XOR<echipacompanieCreateWithoutMembruechipaInput, echipacompanieUncheckedCreateWithoutMembruechipaInput>
  }

  export type echipacompanieUpsertWithoutMembruechipaInput = {
    update: XOR<echipacompanieUpdateWithoutMembruechipaInput, echipacompanieUncheckedUpdateWithoutMembruechipaInput>
    create: XOR<echipacompanieCreateWithoutMembruechipaInput, echipacompanieUncheckedCreateWithoutMembruechipaInput>
    where?: echipacompanieWhereInput
  }

  export type echipacompanieUpdateToOneWithWhereWithoutMembruechipaInput = {
    where?: echipacompanieWhereInput
    data: XOR<echipacompanieUpdateWithoutMembruechipaInput, echipacompanieUncheckedUpdateWithoutMembruechipaInput>
  }

  export type echipacompanieUpdateWithoutMembruechipaInput = {
    nume?: StringFieldUpdateOperationsInput | string
    companie?: companieUpdateManyWithoutEchipacompanieNestedInput
  }

  export type echipacompanieUncheckedUpdateWithoutMembruechipaInput = {
    idechipa?: IntFieldUpdateOperationsInput | number
    nume?: StringFieldUpdateOperationsInput | string
    companie?: companieUncheckedUpdateManyWithoutEchipacompanieNestedInput
  }

  export type tichetCreateWithoutMesajeInput = {
    titlu: string
    tiptichet: string
    prioritate: string
    datacreare: Date | string
    datainchidere: Date | string
    statuscurent: string
    consultdeschis: boolean
    bugdeschis: boolean
    produs: string
    escaladat: boolean
    linkdocs?: string | null
    linkdrive?: string | null
    istorictichet?: istorictichetCreateNestedManyWithoutTichetInput
    utilizator_tichet_idsuportToutilizator: utilizatorCreateNestedOneWithoutTichet_tichet_idsuportToutilizatorInput
    utilizator_tichet_idutilizatorToutilizator: utilizatorCreateNestedOneWithoutTichet_tichet_idutilizatorToutilizatorInput
  }

  export type tichetUncheckedCreateWithoutMesajeInput = {
    idtichet?: number
    titlu: string
    tiptichet: string
    prioritate: string
    datacreare: Date | string
    datainchidere: Date | string
    statuscurent: string
    consultdeschis: boolean
    bugdeschis: boolean
    produs: string
    escaladat: boolean
    idsuport: number
    idutilizator: number
    linkdocs?: string | null
    linkdrive?: string | null
    istorictichet?: istorictichetUncheckedCreateNestedManyWithoutTichetInput
  }

  export type tichetCreateOrConnectWithoutMesajeInput = {
    where: tichetWhereUniqueInput
    create: XOR<tichetCreateWithoutMesajeInput, tichetUncheckedCreateWithoutMesajeInput>
  }

  export type tichetUpsertWithoutMesajeInput = {
    update: XOR<tichetUpdateWithoutMesajeInput, tichetUncheckedUpdateWithoutMesajeInput>
    create: XOR<tichetCreateWithoutMesajeInput, tichetUncheckedCreateWithoutMesajeInput>
    where?: tichetWhereInput
  }

  export type tichetUpdateToOneWithWhereWithoutMesajeInput = {
    where?: tichetWhereInput
    data: XOR<tichetUpdateWithoutMesajeInput, tichetUncheckedUpdateWithoutMesajeInput>
  }

  export type tichetUpdateWithoutMesajeInput = {
    titlu?: StringFieldUpdateOperationsInput | string
    tiptichet?: StringFieldUpdateOperationsInput | string
    prioritate?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    datainchidere?: DateTimeFieldUpdateOperationsInput | Date | string
    statuscurent?: StringFieldUpdateOperationsInput | string
    consultdeschis?: BoolFieldUpdateOperationsInput | boolean
    bugdeschis?: BoolFieldUpdateOperationsInput | boolean
    produs?: StringFieldUpdateOperationsInput | string
    escaladat?: BoolFieldUpdateOperationsInput | boolean
    linkdocs?: NullableStringFieldUpdateOperationsInput | string | null
    linkdrive?: NullableStringFieldUpdateOperationsInput | string | null
    istorictichet?: istorictichetUpdateManyWithoutTichetNestedInput
    utilizator_tichet_idsuportToutilizator?: utilizatorUpdateOneRequiredWithoutTichet_tichet_idsuportToutilizatorNestedInput
    utilizator_tichet_idutilizatorToutilizator?: utilizatorUpdateOneRequiredWithoutTichet_tichet_idutilizatorToutilizatorNestedInput
  }

  export type tichetUncheckedUpdateWithoutMesajeInput = {
    idtichet?: IntFieldUpdateOperationsInput | number
    titlu?: StringFieldUpdateOperationsInput | string
    tiptichet?: StringFieldUpdateOperationsInput | string
    prioritate?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    datainchidere?: DateTimeFieldUpdateOperationsInput | Date | string
    statuscurent?: StringFieldUpdateOperationsInput | string
    consultdeschis?: BoolFieldUpdateOperationsInput | boolean
    bugdeschis?: BoolFieldUpdateOperationsInput | boolean
    produs?: StringFieldUpdateOperationsInput | string
    escaladat?: BoolFieldUpdateOperationsInput | boolean
    idsuport?: IntFieldUpdateOperationsInput | number
    idutilizator?: IntFieldUpdateOperationsInput | number
    linkdocs?: NullableStringFieldUpdateOperationsInput | string | null
    linkdrive?: NullableStringFieldUpdateOperationsInput | string | null
    istorictichet?: istorictichetUncheckedUpdateManyWithoutTichetNestedInput
  }

  export type produseCreateWithoutSpecializareInput = {
    nume: string
  }

  export type produseUncheckedCreateWithoutSpecializareInput = {
    idprodus?: number
    nume: string
  }

  export type produseCreateOrConnectWithoutSpecializareInput = {
    where: produseWhereUniqueInput
    create: XOR<produseCreateWithoutSpecializareInput, produseUncheckedCreateWithoutSpecializareInput>
  }

  export type produseCreateManySpecializareInputEnvelope = {
    data: produseCreateManySpecializareInput | produseCreateManySpecializareInput[]
    skipDuplicates?: boolean
  }

  export type utilizatorCreateWithoutSpecializare_utilizator_specializareTospecializareInput = {
    email: string
    nume: string
    prenume: string
    modalitatelogare: string
    pozaprofil: string
    datacreare: Date | string
    tiputilizator: string
    tichet_tichet_idsuportToutilizator?: tichetCreateNestedManyWithoutUtilizator_tichet_idsuportToutilizatorInput
    tichet_tichet_idutilizatorToutilizator?: tichetCreateNestedManyWithoutUtilizator_tichet_idutilizatorToutilizatorInput
    companie?: companieCreateNestedOneWithoutUtilizatorInput
  }

  export type utilizatorUncheckedCreateWithoutSpecializare_utilizator_specializareTospecializareInput = {
    idutilizator?: number
    email: string
    nume: string
    prenume: string
    modalitatelogare: string
    pozaprofil: string
    datacreare: Date | string
    idcompanie?: number | null
    tiputilizator: string
    tichet_tichet_idsuportToutilizator?: tichetUncheckedCreateNestedManyWithoutUtilizator_tichet_idsuportToutilizatorInput
    tichet_tichet_idutilizatorToutilizator?: tichetUncheckedCreateNestedManyWithoutUtilizator_tichet_idutilizatorToutilizatorInput
  }

  export type utilizatorCreateOrConnectWithoutSpecializare_utilizator_specializareTospecializareInput = {
    where: utilizatorWhereUniqueInput
    create: XOR<utilizatorCreateWithoutSpecializare_utilizator_specializareTospecializareInput, utilizatorUncheckedCreateWithoutSpecializare_utilizator_specializareTospecializareInput>
  }

  export type utilizatorCreateManySpecializare_utilizator_specializareTospecializareInputEnvelope = {
    data: utilizatorCreateManySpecializare_utilizator_specializareTospecializareInput | utilizatorCreateManySpecializare_utilizator_specializareTospecializareInput[]
    skipDuplicates?: boolean
  }

  export type produseUpsertWithWhereUniqueWithoutSpecializareInput = {
    where: produseWhereUniqueInput
    update: XOR<produseUpdateWithoutSpecializareInput, produseUncheckedUpdateWithoutSpecializareInput>
    create: XOR<produseCreateWithoutSpecializareInput, produseUncheckedCreateWithoutSpecializareInput>
  }

  export type produseUpdateWithWhereUniqueWithoutSpecializareInput = {
    where: produseWhereUniqueInput
    data: XOR<produseUpdateWithoutSpecializareInput, produseUncheckedUpdateWithoutSpecializareInput>
  }

  export type produseUpdateManyWithWhereWithoutSpecializareInput = {
    where: produseScalarWhereInput
    data: XOR<produseUpdateManyMutationInput, produseUncheckedUpdateManyWithoutSpecializareInput>
  }

  export type produseScalarWhereInput = {
    AND?: produseScalarWhereInput | produseScalarWhereInput[]
    OR?: produseScalarWhereInput[]
    NOT?: produseScalarWhereInput | produseScalarWhereInput[]
    idprodus?: IntFilter<"produse"> | number
    nume?: StringFilter<"produse"> | string
    idspecializare?: IntFilter<"produse"> | number
  }

  export type utilizatorUpsertWithWhereUniqueWithoutSpecializare_utilizator_specializareTospecializareInput = {
    where: utilizatorWhereUniqueInput
    update: XOR<utilizatorUpdateWithoutSpecializare_utilizator_specializareTospecializareInput, utilizatorUncheckedUpdateWithoutSpecializare_utilizator_specializareTospecializareInput>
    create: XOR<utilizatorCreateWithoutSpecializare_utilizator_specializareTospecializareInput, utilizatorUncheckedCreateWithoutSpecializare_utilizator_specializareTospecializareInput>
  }

  export type utilizatorUpdateWithWhereUniqueWithoutSpecializare_utilizator_specializareTospecializareInput = {
    where: utilizatorWhereUniqueInput
    data: XOR<utilizatorUpdateWithoutSpecializare_utilizator_specializareTospecializareInput, utilizatorUncheckedUpdateWithoutSpecializare_utilizator_specializareTospecializareInput>
  }

  export type utilizatorUpdateManyWithWhereWithoutSpecializare_utilizator_specializareTospecializareInput = {
    where: utilizatorScalarWhereInput
    data: XOR<utilizatorUpdateManyMutationInput, utilizatorUncheckedUpdateManyWithoutSpecializare_utilizator_specializareTospecializareInput>
  }

  export type companieCreateWithoutSubscriptieInput = {
    datacreare: Date | string
    nume: string
    status: string
    focus: boolean
    notitedesprecompanie?: string | null
    echipacompanie?: echipacompanieCreateNestedOneWithoutCompanieInput
    utilizator?: utilizatorCreateNestedManyWithoutCompanieInput
  }

  export type companieUncheckedCreateWithoutSubscriptieInput = {
    idcompanie?: number
    datacreare: Date | string
    nume: string
    status: string
    focus: boolean
    notitedesprecompanie?: string | null
    idechipa?: number | null
    utilizator?: utilizatorUncheckedCreateNestedManyWithoutCompanieInput
  }

  export type companieCreateOrConnectWithoutSubscriptieInput = {
    where: companieWhereUniqueInput
    create: XOR<companieCreateWithoutSubscriptieInput, companieUncheckedCreateWithoutSubscriptieInput>
  }

  export type companieCreateManySubscriptieInputEnvelope = {
    data: companieCreateManySubscriptieInput | companieCreateManySubscriptieInput[]
    skipDuplicates?: boolean
  }

  export type companieUpsertWithWhereUniqueWithoutSubscriptieInput = {
    where: companieWhereUniqueInput
    update: XOR<companieUpdateWithoutSubscriptieInput, companieUncheckedUpdateWithoutSubscriptieInput>
    create: XOR<companieCreateWithoutSubscriptieInput, companieUncheckedCreateWithoutSubscriptieInput>
  }

  export type companieUpdateWithWhereUniqueWithoutSubscriptieInput = {
    where: companieWhereUniqueInput
    data: XOR<companieUpdateWithoutSubscriptieInput, companieUncheckedUpdateWithoutSubscriptieInput>
  }

  export type companieUpdateManyWithWhereWithoutSubscriptieInput = {
    where: companieScalarWhereInput
    data: XOR<companieUpdateManyMutationInput, companieUncheckedUpdateManyWithoutSubscriptieInput>
  }

  export type istorictichetCreateWithoutTichetInput = {
    datacreare: Date | string
    modificare: string
  }

  export type istorictichetUncheckedCreateWithoutTichetInput = {
    idistoric?: number
    datacreare: Date | string
    modificare: string
  }

  export type istorictichetCreateOrConnectWithoutTichetInput = {
    where: istorictichetWhereUniqueInput
    create: XOR<istorictichetCreateWithoutTichetInput, istorictichetUncheckedCreateWithoutTichetInput>
  }

  export type istorictichetCreateManyTichetInputEnvelope = {
    data: istorictichetCreateManyTichetInput | istorictichetCreateManyTichetInput[]
    skipDuplicates?: boolean
  }

  export type mesajeCreateWithoutTichetInput = {
    datacreare: Date | string
    emitatormesaj: string
    emailsuport: string
    emailutilizator: string
    continut: string
  }

  export type mesajeUncheckedCreateWithoutTichetInput = {
    idmesaj?: number
    datacreare: Date | string
    emitatormesaj: string
    emailsuport: string
    emailutilizator: string
    continut: string
  }

  export type mesajeCreateOrConnectWithoutTichetInput = {
    where: mesajeWhereUniqueInput
    create: XOR<mesajeCreateWithoutTichetInput, mesajeUncheckedCreateWithoutTichetInput>
  }

  export type mesajeCreateManyTichetInputEnvelope = {
    data: mesajeCreateManyTichetInput | mesajeCreateManyTichetInput[]
    skipDuplicates?: boolean
  }

  export type utilizatorCreateWithoutTichet_tichet_idsuportToutilizatorInput = {
    email: string
    nume: string
    prenume: string
    modalitatelogare: string
    pozaprofil: string
    datacreare: Date | string
    tiputilizator: string
    tichet_tichet_idutilizatorToutilizator?: tichetCreateNestedManyWithoutUtilizator_tichet_idutilizatorToutilizatorInput
    companie?: companieCreateNestedOneWithoutUtilizatorInput
    specializare_utilizator_specializareTospecializare?: specializareCreateNestedOneWithoutUtilizator_utilizator_specializareTospecializareInput
  }

  export type utilizatorUncheckedCreateWithoutTichet_tichet_idsuportToutilizatorInput = {
    idutilizator?: number
    email: string
    nume: string
    prenume: string
    modalitatelogare: string
    pozaprofil: string
    datacreare: Date | string
    idcompanie?: number | null
    tiputilizator: string
    specializare?: number | null
    tichet_tichet_idutilizatorToutilizator?: tichetUncheckedCreateNestedManyWithoutUtilizator_tichet_idutilizatorToutilizatorInput
  }

  export type utilizatorCreateOrConnectWithoutTichet_tichet_idsuportToutilizatorInput = {
    where: utilizatorWhereUniqueInput
    create: XOR<utilizatorCreateWithoutTichet_tichet_idsuportToutilizatorInput, utilizatorUncheckedCreateWithoutTichet_tichet_idsuportToutilizatorInput>
  }

  export type utilizatorCreateWithoutTichet_tichet_idutilizatorToutilizatorInput = {
    email: string
    nume: string
    prenume: string
    modalitatelogare: string
    pozaprofil: string
    datacreare: Date | string
    tiputilizator: string
    tichet_tichet_idsuportToutilizator?: tichetCreateNestedManyWithoutUtilizator_tichet_idsuportToutilizatorInput
    companie?: companieCreateNestedOneWithoutUtilizatorInput
    specializare_utilizator_specializareTospecializare?: specializareCreateNestedOneWithoutUtilizator_utilizator_specializareTospecializareInput
  }

  export type utilizatorUncheckedCreateWithoutTichet_tichet_idutilizatorToutilizatorInput = {
    idutilizator?: number
    email: string
    nume: string
    prenume: string
    modalitatelogare: string
    pozaprofil: string
    datacreare: Date | string
    idcompanie?: number | null
    tiputilizator: string
    specializare?: number | null
    tichet_tichet_idsuportToutilizator?: tichetUncheckedCreateNestedManyWithoutUtilizator_tichet_idsuportToutilizatorInput
  }

  export type utilizatorCreateOrConnectWithoutTichet_tichet_idutilizatorToutilizatorInput = {
    where: utilizatorWhereUniqueInput
    create: XOR<utilizatorCreateWithoutTichet_tichet_idutilizatorToutilizatorInput, utilizatorUncheckedCreateWithoutTichet_tichet_idutilizatorToutilizatorInput>
  }

  export type istorictichetUpsertWithWhereUniqueWithoutTichetInput = {
    where: istorictichetWhereUniqueInput
    update: XOR<istorictichetUpdateWithoutTichetInput, istorictichetUncheckedUpdateWithoutTichetInput>
    create: XOR<istorictichetCreateWithoutTichetInput, istorictichetUncheckedCreateWithoutTichetInput>
  }

  export type istorictichetUpdateWithWhereUniqueWithoutTichetInput = {
    where: istorictichetWhereUniqueInput
    data: XOR<istorictichetUpdateWithoutTichetInput, istorictichetUncheckedUpdateWithoutTichetInput>
  }

  export type istorictichetUpdateManyWithWhereWithoutTichetInput = {
    where: istorictichetScalarWhereInput
    data: XOR<istorictichetUpdateManyMutationInput, istorictichetUncheckedUpdateManyWithoutTichetInput>
  }

  export type istorictichetScalarWhereInput = {
    AND?: istorictichetScalarWhereInput | istorictichetScalarWhereInput[]
    OR?: istorictichetScalarWhereInput[]
    NOT?: istorictichetScalarWhereInput | istorictichetScalarWhereInput[]
    idistoric?: IntFilter<"istorictichet"> | number
    idtichet?: IntFilter<"istorictichet"> | number
    datacreare?: DateTimeFilter<"istorictichet"> | Date | string
    modificare?: StringFilter<"istorictichet"> | string
  }

  export type mesajeUpsertWithWhereUniqueWithoutTichetInput = {
    where: mesajeWhereUniqueInput
    update: XOR<mesajeUpdateWithoutTichetInput, mesajeUncheckedUpdateWithoutTichetInput>
    create: XOR<mesajeCreateWithoutTichetInput, mesajeUncheckedCreateWithoutTichetInput>
  }

  export type mesajeUpdateWithWhereUniqueWithoutTichetInput = {
    where: mesajeWhereUniqueInput
    data: XOR<mesajeUpdateWithoutTichetInput, mesajeUncheckedUpdateWithoutTichetInput>
  }

  export type mesajeUpdateManyWithWhereWithoutTichetInput = {
    where: mesajeScalarWhereInput
    data: XOR<mesajeUpdateManyMutationInput, mesajeUncheckedUpdateManyWithoutTichetInput>
  }

  export type mesajeScalarWhereInput = {
    AND?: mesajeScalarWhereInput | mesajeScalarWhereInput[]
    OR?: mesajeScalarWhereInput[]
    NOT?: mesajeScalarWhereInput | mesajeScalarWhereInput[]
    idmesaj?: IntFilter<"mesaje"> | number
    datacreare?: DateTimeFilter<"mesaje"> | Date | string
    emitatormesaj?: StringFilter<"mesaje"> | string
    emailsuport?: StringFilter<"mesaje"> | string
    emailutilizator?: StringFilter<"mesaje"> | string
    continut?: StringFilter<"mesaje"> | string
    idtichet?: IntFilter<"mesaje"> | number
  }

  export type utilizatorUpsertWithoutTichet_tichet_idsuportToutilizatorInput = {
    update: XOR<utilizatorUpdateWithoutTichet_tichet_idsuportToutilizatorInput, utilizatorUncheckedUpdateWithoutTichet_tichet_idsuportToutilizatorInput>
    create: XOR<utilizatorCreateWithoutTichet_tichet_idsuportToutilizatorInput, utilizatorUncheckedCreateWithoutTichet_tichet_idsuportToutilizatorInput>
    where?: utilizatorWhereInput
  }

  export type utilizatorUpdateToOneWithWhereWithoutTichet_tichet_idsuportToutilizatorInput = {
    where?: utilizatorWhereInput
    data: XOR<utilizatorUpdateWithoutTichet_tichet_idsuportToutilizatorInput, utilizatorUncheckedUpdateWithoutTichet_tichet_idsuportToutilizatorInput>
  }

  export type utilizatorUpdateWithoutTichet_tichet_idsuportToutilizatorInput = {
    email?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    prenume?: StringFieldUpdateOperationsInput | string
    modalitatelogare?: StringFieldUpdateOperationsInput | string
    pozaprofil?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    tiputilizator?: StringFieldUpdateOperationsInput | string
    tichet_tichet_idutilizatorToutilizator?: tichetUpdateManyWithoutUtilizator_tichet_idutilizatorToutilizatorNestedInput
    companie?: companieUpdateOneWithoutUtilizatorNestedInput
    specializare_utilizator_specializareTospecializare?: specializareUpdateOneWithoutUtilizator_utilizator_specializareTospecializareNestedInput
  }

  export type utilizatorUncheckedUpdateWithoutTichet_tichet_idsuportToutilizatorInput = {
    idutilizator?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    prenume?: StringFieldUpdateOperationsInput | string
    modalitatelogare?: StringFieldUpdateOperationsInput | string
    pozaprofil?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    idcompanie?: NullableIntFieldUpdateOperationsInput | number | null
    tiputilizator?: StringFieldUpdateOperationsInput | string
    specializare?: NullableIntFieldUpdateOperationsInput | number | null
    tichet_tichet_idutilizatorToutilizator?: tichetUncheckedUpdateManyWithoutUtilizator_tichet_idutilizatorToutilizatorNestedInput
  }

  export type utilizatorUpsertWithoutTichet_tichet_idutilizatorToutilizatorInput = {
    update: XOR<utilizatorUpdateWithoutTichet_tichet_idutilizatorToutilizatorInput, utilizatorUncheckedUpdateWithoutTichet_tichet_idutilizatorToutilizatorInput>
    create: XOR<utilizatorCreateWithoutTichet_tichet_idutilizatorToutilizatorInput, utilizatorUncheckedCreateWithoutTichet_tichet_idutilizatorToutilizatorInput>
    where?: utilizatorWhereInput
  }

  export type utilizatorUpdateToOneWithWhereWithoutTichet_tichet_idutilizatorToutilizatorInput = {
    where?: utilizatorWhereInput
    data: XOR<utilizatorUpdateWithoutTichet_tichet_idutilizatorToutilizatorInput, utilizatorUncheckedUpdateWithoutTichet_tichet_idutilizatorToutilizatorInput>
  }

  export type utilizatorUpdateWithoutTichet_tichet_idutilizatorToutilizatorInput = {
    email?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    prenume?: StringFieldUpdateOperationsInput | string
    modalitatelogare?: StringFieldUpdateOperationsInput | string
    pozaprofil?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    tiputilizator?: StringFieldUpdateOperationsInput | string
    tichet_tichet_idsuportToutilizator?: tichetUpdateManyWithoutUtilizator_tichet_idsuportToutilizatorNestedInput
    companie?: companieUpdateOneWithoutUtilizatorNestedInput
    specializare_utilizator_specializareTospecializare?: specializareUpdateOneWithoutUtilizator_utilizator_specializareTospecializareNestedInput
  }

  export type utilizatorUncheckedUpdateWithoutTichet_tichet_idutilizatorToutilizatorInput = {
    idutilizator?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    prenume?: StringFieldUpdateOperationsInput | string
    modalitatelogare?: StringFieldUpdateOperationsInput | string
    pozaprofil?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    idcompanie?: NullableIntFieldUpdateOperationsInput | number | null
    tiputilizator?: StringFieldUpdateOperationsInput | string
    specializare?: NullableIntFieldUpdateOperationsInput | number | null
    tichet_tichet_idsuportToutilizator?: tichetUncheckedUpdateManyWithoutUtilizator_tichet_idsuportToutilizatorNestedInput
  }

  export type tichetCreateWithoutUtilizator_tichet_idsuportToutilizatorInput = {
    titlu: string
    tiptichet: string
    prioritate: string
    datacreare: Date | string
    datainchidere: Date | string
    statuscurent: string
    consultdeschis: boolean
    bugdeschis: boolean
    produs: string
    escaladat: boolean
    linkdocs?: string | null
    linkdrive?: string | null
    istorictichet?: istorictichetCreateNestedManyWithoutTichetInput
    mesaje?: mesajeCreateNestedManyWithoutTichetInput
    utilizator_tichet_idutilizatorToutilizator: utilizatorCreateNestedOneWithoutTichet_tichet_idutilizatorToutilizatorInput
  }

  export type tichetUncheckedCreateWithoutUtilizator_tichet_idsuportToutilizatorInput = {
    idtichet?: number
    titlu: string
    tiptichet: string
    prioritate: string
    datacreare: Date | string
    datainchidere: Date | string
    statuscurent: string
    consultdeschis: boolean
    bugdeschis: boolean
    produs: string
    escaladat: boolean
    idutilizator: number
    linkdocs?: string | null
    linkdrive?: string | null
    istorictichet?: istorictichetUncheckedCreateNestedManyWithoutTichetInput
    mesaje?: mesajeUncheckedCreateNestedManyWithoutTichetInput
  }

  export type tichetCreateOrConnectWithoutUtilizator_tichet_idsuportToutilizatorInput = {
    where: tichetWhereUniqueInput
    create: XOR<tichetCreateWithoutUtilizator_tichet_idsuportToutilizatorInput, tichetUncheckedCreateWithoutUtilizator_tichet_idsuportToutilizatorInput>
  }

  export type tichetCreateManyUtilizator_tichet_idsuportToutilizatorInputEnvelope = {
    data: tichetCreateManyUtilizator_tichet_idsuportToutilizatorInput | tichetCreateManyUtilizator_tichet_idsuportToutilizatorInput[]
    skipDuplicates?: boolean
  }

  export type tichetCreateWithoutUtilizator_tichet_idutilizatorToutilizatorInput = {
    titlu: string
    tiptichet: string
    prioritate: string
    datacreare: Date | string
    datainchidere: Date | string
    statuscurent: string
    consultdeschis: boolean
    bugdeschis: boolean
    produs: string
    escaladat: boolean
    linkdocs?: string | null
    linkdrive?: string | null
    istorictichet?: istorictichetCreateNestedManyWithoutTichetInput
    mesaje?: mesajeCreateNestedManyWithoutTichetInput
    utilizator_tichet_idsuportToutilizator: utilizatorCreateNestedOneWithoutTichet_tichet_idsuportToutilizatorInput
  }

  export type tichetUncheckedCreateWithoutUtilizator_tichet_idutilizatorToutilizatorInput = {
    idtichet?: number
    titlu: string
    tiptichet: string
    prioritate: string
    datacreare: Date | string
    datainchidere: Date | string
    statuscurent: string
    consultdeschis: boolean
    bugdeschis: boolean
    produs: string
    escaladat: boolean
    idsuport: number
    linkdocs?: string | null
    linkdrive?: string | null
    istorictichet?: istorictichetUncheckedCreateNestedManyWithoutTichetInput
    mesaje?: mesajeUncheckedCreateNestedManyWithoutTichetInput
  }

  export type tichetCreateOrConnectWithoutUtilizator_tichet_idutilizatorToutilizatorInput = {
    where: tichetWhereUniqueInput
    create: XOR<tichetCreateWithoutUtilizator_tichet_idutilizatorToutilizatorInput, tichetUncheckedCreateWithoutUtilizator_tichet_idutilizatorToutilizatorInput>
  }

  export type tichetCreateManyUtilizator_tichet_idutilizatorToutilizatorInputEnvelope = {
    data: tichetCreateManyUtilizator_tichet_idutilizatorToutilizatorInput | tichetCreateManyUtilizator_tichet_idutilizatorToutilizatorInput[]
    skipDuplicates?: boolean
  }

  export type companieCreateWithoutUtilizatorInput = {
    datacreare: Date | string
    nume: string
    status: string
    focus: boolean
    notitedesprecompanie?: string | null
    echipacompanie?: echipacompanieCreateNestedOneWithoutCompanieInput
    subscriptie?: subscriptieCreateNestedOneWithoutCompanieInput
  }

  export type companieUncheckedCreateWithoutUtilizatorInput = {
    idcompanie?: number
    datacreare: Date | string
    nume: string
    status: string
    focus: boolean
    notitedesprecompanie?: string | null
    tipsubscriptie?: string | null
    idechipa?: number | null
  }

  export type companieCreateOrConnectWithoutUtilizatorInput = {
    where: companieWhereUniqueInput
    create: XOR<companieCreateWithoutUtilizatorInput, companieUncheckedCreateWithoutUtilizatorInput>
  }

  export type specializareCreateWithoutUtilizator_utilizator_specializareTospecializareInput = {
    nume: string
    produse?: produseCreateNestedManyWithoutSpecializareInput
  }

  export type specializareUncheckedCreateWithoutUtilizator_utilizator_specializareTospecializareInput = {
    idspecializare?: number
    nume: string
    produse?: produseUncheckedCreateNestedManyWithoutSpecializareInput
  }

  export type specializareCreateOrConnectWithoutUtilizator_utilizator_specializareTospecializareInput = {
    where: specializareWhereUniqueInput
    create: XOR<specializareCreateWithoutUtilizator_utilizator_specializareTospecializareInput, specializareUncheckedCreateWithoutUtilizator_utilizator_specializareTospecializareInput>
  }

  export type tichetUpsertWithWhereUniqueWithoutUtilizator_tichet_idsuportToutilizatorInput = {
    where: tichetWhereUniqueInput
    update: XOR<tichetUpdateWithoutUtilizator_tichet_idsuportToutilizatorInput, tichetUncheckedUpdateWithoutUtilizator_tichet_idsuportToutilizatorInput>
    create: XOR<tichetCreateWithoutUtilizator_tichet_idsuportToutilizatorInput, tichetUncheckedCreateWithoutUtilizator_tichet_idsuportToutilizatorInput>
  }

  export type tichetUpdateWithWhereUniqueWithoutUtilizator_tichet_idsuportToutilizatorInput = {
    where: tichetWhereUniqueInput
    data: XOR<tichetUpdateWithoutUtilizator_tichet_idsuportToutilizatorInput, tichetUncheckedUpdateWithoutUtilizator_tichet_idsuportToutilizatorInput>
  }

  export type tichetUpdateManyWithWhereWithoutUtilizator_tichet_idsuportToutilizatorInput = {
    where: tichetScalarWhereInput
    data: XOR<tichetUpdateManyMutationInput, tichetUncheckedUpdateManyWithoutUtilizator_tichet_idsuportToutilizatorInput>
  }

  export type tichetScalarWhereInput = {
    AND?: tichetScalarWhereInput | tichetScalarWhereInput[]
    OR?: tichetScalarWhereInput[]
    NOT?: tichetScalarWhereInput | tichetScalarWhereInput[]
    idtichet?: IntFilter<"tichet"> | number
    titlu?: StringFilter<"tichet"> | string
    tiptichet?: StringFilter<"tichet"> | string
    prioritate?: StringFilter<"tichet"> | string
    datacreare?: DateTimeFilter<"tichet"> | Date | string
    datainchidere?: DateTimeFilter<"tichet"> | Date | string
    statuscurent?: StringFilter<"tichet"> | string
    consultdeschis?: BoolFilter<"tichet"> | boolean
    bugdeschis?: BoolFilter<"tichet"> | boolean
    produs?: StringFilter<"tichet"> | string
    escaladat?: BoolFilter<"tichet"> | boolean
    idsuport?: IntFilter<"tichet"> | number
    idutilizator?: IntFilter<"tichet"> | number
    linkdocs?: StringNullableFilter<"tichet"> | string | null
    linkdrive?: StringNullableFilter<"tichet"> | string | null
  }

  export type tichetUpsertWithWhereUniqueWithoutUtilizator_tichet_idutilizatorToutilizatorInput = {
    where: tichetWhereUniqueInput
    update: XOR<tichetUpdateWithoutUtilizator_tichet_idutilizatorToutilizatorInput, tichetUncheckedUpdateWithoutUtilizator_tichet_idutilizatorToutilizatorInput>
    create: XOR<tichetCreateWithoutUtilizator_tichet_idutilizatorToutilizatorInput, tichetUncheckedCreateWithoutUtilizator_tichet_idutilizatorToutilizatorInput>
  }

  export type tichetUpdateWithWhereUniqueWithoutUtilizator_tichet_idutilizatorToutilizatorInput = {
    where: tichetWhereUniqueInput
    data: XOR<tichetUpdateWithoutUtilizator_tichet_idutilizatorToutilizatorInput, tichetUncheckedUpdateWithoutUtilizator_tichet_idutilizatorToutilizatorInput>
  }

  export type tichetUpdateManyWithWhereWithoutUtilizator_tichet_idutilizatorToutilizatorInput = {
    where: tichetScalarWhereInput
    data: XOR<tichetUpdateManyMutationInput, tichetUncheckedUpdateManyWithoutUtilizator_tichet_idutilizatorToutilizatorInput>
  }

  export type companieUpsertWithoutUtilizatorInput = {
    update: XOR<companieUpdateWithoutUtilizatorInput, companieUncheckedUpdateWithoutUtilizatorInput>
    create: XOR<companieCreateWithoutUtilizatorInput, companieUncheckedCreateWithoutUtilizatorInput>
    where?: companieWhereInput
  }

  export type companieUpdateToOneWithWhereWithoutUtilizatorInput = {
    where?: companieWhereInput
    data: XOR<companieUpdateWithoutUtilizatorInput, companieUncheckedUpdateWithoutUtilizatorInput>
  }

  export type companieUpdateWithoutUtilizatorInput = {
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    nume?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    focus?: BoolFieldUpdateOperationsInput | boolean
    notitedesprecompanie?: NullableStringFieldUpdateOperationsInput | string | null
    echipacompanie?: echipacompanieUpdateOneWithoutCompanieNestedInput
    subscriptie?: subscriptieUpdateOneWithoutCompanieNestedInput
  }

  export type companieUncheckedUpdateWithoutUtilizatorInput = {
    idcompanie?: IntFieldUpdateOperationsInput | number
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    nume?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    focus?: BoolFieldUpdateOperationsInput | boolean
    notitedesprecompanie?: NullableStringFieldUpdateOperationsInput | string | null
    tipsubscriptie?: NullableStringFieldUpdateOperationsInput | string | null
    idechipa?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type specializareUpsertWithoutUtilizator_utilizator_specializareTospecializareInput = {
    update: XOR<specializareUpdateWithoutUtilizator_utilizator_specializareTospecializareInput, specializareUncheckedUpdateWithoutUtilizator_utilizator_specializareTospecializareInput>
    create: XOR<specializareCreateWithoutUtilizator_utilizator_specializareTospecializareInput, specializareUncheckedCreateWithoutUtilizator_utilizator_specializareTospecializareInput>
    where?: specializareWhereInput
  }

  export type specializareUpdateToOneWithWhereWithoutUtilizator_utilizator_specializareTospecializareInput = {
    where?: specializareWhereInput
    data: XOR<specializareUpdateWithoutUtilizator_utilizator_specializareTospecializareInput, specializareUncheckedUpdateWithoutUtilizator_utilizator_specializareTospecializareInput>
  }

  export type specializareUpdateWithoutUtilizator_utilizator_specializareTospecializareInput = {
    nume?: StringFieldUpdateOperationsInput | string
    produse?: produseUpdateManyWithoutSpecializareNestedInput
  }

  export type specializareUncheckedUpdateWithoutUtilizator_utilizator_specializareTospecializareInput = {
    idspecializare?: IntFieldUpdateOperationsInput | number
    nume?: StringFieldUpdateOperationsInput | string
    produse?: produseUncheckedUpdateManyWithoutSpecializareNestedInput
  }

  export type specializareCreateWithoutProduseInput = {
    nume: string
    utilizator_utilizator_specializareTospecializare?: utilizatorCreateNestedManyWithoutSpecializare_utilizator_specializareTospecializareInput
  }

  export type specializareUncheckedCreateWithoutProduseInput = {
    idspecializare?: number
    nume: string
    utilizator_utilizator_specializareTospecializare?: utilizatorUncheckedCreateNestedManyWithoutSpecializare_utilizator_specializareTospecializareInput
  }

  export type specializareCreateOrConnectWithoutProduseInput = {
    where: specializareWhereUniqueInput
    create: XOR<specializareCreateWithoutProduseInput, specializareUncheckedCreateWithoutProduseInput>
  }

  export type specializareUpsertWithoutProduseInput = {
    update: XOR<specializareUpdateWithoutProduseInput, specializareUncheckedUpdateWithoutProduseInput>
    create: XOR<specializareCreateWithoutProduseInput, specializareUncheckedCreateWithoutProduseInput>
    where?: specializareWhereInput
  }

  export type specializareUpdateToOneWithWhereWithoutProduseInput = {
    where?: specializareWhereInput
    data: XOR<specializareUpdateWithoutProduseInput, specializareUncheckedUpdateWithoutProduseInput>
  }

  export type specializareUpdateWithoutProduseInput = {
    nume?: StringFieldUpdateOperationsInput | string
    utilizator_utilizator_specializareTospecializare?: utilizatorUpdateManyWithoutSpecializare_utilizator_specializareTospecializareNestedInput
  }

  export type specializareUncheckedUpdateWithoutProduseInput = {
    idspecializare?: IntFieldUpdateOperationsInput | number
    nume?: StringFieldUpdateOperationsInput | string
    utilizator_utilizator_specializareTospecializare?: utilizatorUncheckedUpdateManyWithoutSpecializare_utilizator_specializareTospecializareNestedInput
  }

  export type utilizatorCreateManyCompanieInput = {
    idutilizator?: number
    email: string
    nume: string
    prenume: string
    modalitatelogare: string
    pozaprofil: string
    datacreare: Date | string
    tiputilizator: string
    specializare?: number | null
  }

  export type utilizatorUpdateWithoutCompanieInput = {
    email?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    prenume?: StringFieldUpdateOperationsInput | string
    modalitatelogare?: StringFieldUpdateOperationsInput | string
    pozaprofil?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    tiputilizator?: StringFieldUpdateOperationsInput | string
    tichet_tichet_idsuportToutilizator?: tichetUpdateManyWithoutUtilizator_tichet_idsuportToutilizatorNestedInput
    tichet_tichet_idutilizatorToutilizator?: tichetUpdateManyWithoutUtilizator_tichet_idutilizatorToutilizatorNestedInput
    specializare_utilizator_specializareTospecializare?: specializareUpdateOneWithoutUtilizator_utilizator_specializareTospecializareNestedInput
  }

  export type utilizatorUncheckedUpdateWithoutCompanieInput = {
    idutilizator?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    prenume?: StringFieldUpdateOperationsInput | string
    modalitatelogare?: StringFieldUpdateOperationsInput | string
    pozaprofil?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    tiputilizator?: StringFieldUpdateOperationsInput | string
    specializare?: NullableIntFieldUpdateOperationsInput | number | null
    tichet_tichet_idsuportToutilizator?: tichetUncheckedUpdateManyWithoutUtilizator_tichet_idsuportToutilizatorNestedInput
    tichet_tichet_idutilizatorToutilizator?: tichetUncheckedUpdateManyWithoutUtilizator_tichet_idutilizatorToutilizatorNestedInput
  }

  export type utilizatorUncheckedUpdateManyWithoutCompanieInput = {
    idutilizator?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    prenume?: StringFieldUpdateOperationsInput | string
    modalitatelogare?: StringFieldUpdateOperationsInput | string
    pozaprofil?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    tiputilizator?: StringFieldUpdateOperationsInput | string
    specializare?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type companieCreateManyEchipacompanieInput = {
    idcompanie?: number
    datacreare: Date | string
    nume: string
    status: string
    focus: boolean
    notitedesprecompanie?: string | null
    tipsubscriptie?: string | null
  }

  export type membruechipaCreateManyEchipacompanieInput = {
    idmembru?: number
    nume: string
    prenume: string
    rol: string
    email: string
  }

  export type companieUpdateWithoutEchipacompanieInput = {
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    nume?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    focus?: BoolFieldUpdateOperationsInput | boolean
    notitedesprecompanie?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptie?: subscriptieUpdateOneWithoutCompanieNestedInput
    utilizator?: utilizatorUpdateManyWithoutCompanieNestedInput
  }

  export type companieUncheckedUpdateWithoutEchipacompanieInput = {
    idcompanie?: IntFieldUpdateOperationsInput | number
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    nume?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    focus?: BoolFieldUpdateOperationsInput | boolean
    notitedesprecompanie?: NullableStringFieldUpdateOperationsInput | string | null
    tipsubscriptie?: NullableStringFieldUpdateOperationsInput | string | null
    utilizator?: utilizatorUncheckedUpdateManyWithoutCompanieNestedInput
  }

  export type companieUncheckedUpdateManyWithoutEchipacompanieInput = {
    idcompanie?: IntFieldUpdateOperationsInput | number
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    nume?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    focus?: BoolFieldUpdateOperationsInput | boolean
    notitedesprecompanie?: NullableStringFieldUpdateOperationsInput | string | null
    tipsubscriptie?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type membruechipaUpdateWithoutEchipacompanieInput = {
    nume?: StringFieldUpdateOperationsInput | string
    prenume?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type membruechipaUncheckedUpdateWithoutEchipacompanieInput = {
    idmembru?: IntFieldUpdateOperationsInput | number
    nume?: StringFieldUpdateOperationsInput | string
    prenume?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type membruechipaUncheckedUpdateManyWithoutEchipacompanieInput = {
    idmembru?: IntFieldUpdateOperationsInput | number
    nume?: StringFieldUpdateOperationsInput | string
    prenume?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type produseCreateManySpecializareInput = {
    idprodus?: number
    nume: string
  }

  export type utilizatorCreateManySpecializare_utilizator_specializareTospecializareInput = {
    idutilizator?: number
    email: string
    nume: string
    prenume: string
    modalitatelogare: string
    pozaprofil: string
    datacreare: Date | string
    idcompanie?: number | null
    tiputilizator: string
  }

  export type produseUpdateWithoutSpecializareInput = {
    nume?: StringFieldUpdateOperationsInput | string
  }

  export type produseUncheckedUpdateWithoutSpecializareInput = {
    idprodus?: IntFieldUpdateOperationsInput | number
    nume?: StringFieldUpdateOperationsInput | string
  }

  export type produseUncheckedUpdateManyWithoutSpecializareInput = {
    idprodus?: IntFieldUpdateOperationsInput | number
    nume?: StringFieldUpdateOperationsInput | string
  }

  export type utilizatorUpdateWithoutSpecializare_utilizator_specializareTospecializareInput = {
    email?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    prenume?: StringFieldUpdateOperationsInput | string
    modalitatelogare?: StringFieldUpdateOperationsInput | string
    pozaprofil?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    tiputilizator?: StringFieldUpdateOperationsInput | string
    tichet_tichet_idsuportToutilizator?: tichetUpdateManyWithoutUtilizator_tichet_idsuportToutilizatorNestedInput
    tichet_tichet_idutilizatorToutilizator?: tichetUpdateManyWithoutUtilizator_tichet_idutilizatorToutilizatorNestedInput
    companie?: companieUpdateOneWithoutUtilizatorNestedInput
  }

  export type utilizatorUncheckedUpdateWithoutSpecializare_utilizator_specializareTospecializareInput = {
    idutilizator?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    prenume?: StringFieldUpdateOperationsInput | string
    modalitatelogare?: StringFieldUpdateOperationsInput | string
    pozaprofil?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    idcompanie?: NullableIntFieldUpdateOperationsInput | number | null
    tiputilizator?: StringFieldUpdateOperationsInput | string
    tichet_tichet_idsuportToutilizator?: tichetUncheckedUpdateManyWithoutUtilizator_tichet_idsuportToutilizatorNestedInput
    tichet_tichet_idutilizatorToutilizator?: tichetUncheckedUpdateManyWithoutUtilizator_tichet_idutilizatorToutilizatorNestedInput
  }

  export type utilizatorUncheckedUpdateManyWithoutSpecializare_utilizator_specializareTospecializareInput = {
    idutilizator?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    prenume?: StringFieldUpdateOperationsInput | string
    modalitatelogare?: StringFieldUpdateOperationsInput | string
    pozaprofil?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    idcompanie?: NullableIntFieldUpdateOperationsInput | number | null
    tiputilizator?: StringFieldUpdateOperationsInput | string
  }

  export type companieCreateManySubscriptieInput = {
    idcompanie?: number
    datacreare: Date | string
    nume: string
    status: string
    focus: boolean
    notitedesprecompanie?: string | null
    idechipa?: number | null
  }

  export type companieUpdateWithoutSubscriptieInput = {
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    nume?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    focus?: BoolFieldUpdateOperationsInput | boolean
    notitedesprecompanie?: NullableStringFieldUpdateOperationsInput | string | null
    echipacompanie?: echipacompanieUpdateOneWithoutCompanieNestedInput
    utilizator?: utilizatorUpdateManyWithoutCompanieNestedInput
  }

  export type companieUncheckedUpdateWithoutSubscriptieInput = {
    idcompanie?: IntFieldUpdateOperationsInput | number
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    nume?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    focus?: BoolFieldUpdateOperationsInput | boolean
    notitedesprecompanie?: NullableStringFieldUpdateOperationsInput | string | null
    idechipa?: NullableIntFieldUpdateOperationsInput | number | null
    utilizator?: utilizatorUncheckedUpdateManyWithoutCompanieNestedInput
  }

  export type companieUncheckedUpdateManyWithoutSubscriptieInput = {
    idcompanie?: IntFieldUpdateOperationsInput | number
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    nume?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    focus?: BoolFieldUpdateOperationsInput | boolean
    notitedesprecompanie?: NullableStringFieldUpdateOperationsInput | string | null
    idechipa?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type istorictichetCreateManyTichetInput = {
    idistoric?: number
    datacreare: Date | string
    modificare: string
  }

  export type mesajeCreateManyTichetInput = {
    idmesaj?: number
    datacreare: Date | string
    emitatormesaj: string
    emailsuport: string
    emailutilizator: string
    continut: string
  }

  export type istorictichetUpdateWithoutTichetInput = {
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    modificare?: StringFieldUpdateOperationsInput | string
  }

  export type istorictichetUncheckedUpdateWithoutTichetInput = {
    idistoric?: IntFieldUpdateOperationsInput | number
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    modificare?: StringFieldUpdateOperationsInput | string
  }

  export type istorictichetUncheckedUpdateManyWithoutTichetInput = {
    idistoric?: IntFieldUpdateOperationsInput | number
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    modificare?: StringFieldUpdateOperationsInput | string
  }

  export type mesajeUpdateWithoutTichetInput = {
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    emitatormesaj?: StringFieldUpdateOperationsInput | string
    emailsuport?: StringFieldUpdateOperationsInput | string
    emailutilizator?: StringFieldUpdateOperationsInput | string
    continut?: StringFieldUpdateOperationsInput | string
  }

  export type mesajeUncheckedUpdateWithoutTichetInput = {
    idmesaj?: IntFieldUpdateOperationsInput | number
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    emitatormesaj?: StringFieldUpdateOperationsInput | string
    emailsuport?: StringFieldUpdateOperationsInput | string
    emailutilizator?: StringFieldUpdateOperationsInput | string
    continut?: StringFieldUpdateOperationsInput | string
  }

  export type mesajeUncheckedUpdateManyWithoutTichetInput = {
    idmesaj?: IntFieldUpdateOperationsInput | number
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    emitatormesaj?: StringFieldUpdateOperationsInput | string
    emailsuport?: StringFieldUpdateOperationsInput | string
    emailutilizator?: StringFieldUpdateOperationsInput | string
    continut?: StringFieldUpdateOperationsInput | string
  }

  export type tichetCreateManyUtilizator_tichet_idsuportToutilizatorInput = {
    idtichet?: number
    titlu: string
    tiptichet: string
    prioritate: string
    datacreare: Date | string
    datainchidere: Date | string
    statuscurent: string
    consultdeschis: boolean
    bugdeschis: boolean
    produs: string
    escaladat: boolean
    idutilizator: number
    linkdocs?: string | null
    linkdrive?: string | null
  }

  export type tichetCreateManyUtilizator_tichet_idutilizatorToutilizatorInput = {
    idtichet?: number
    titlu: string
    tiptichet: string
    prioritate: string
    datacreare: Date | string
    datainchidere: Date | string
    statuscurent: string
    consultdeschis: boolean
    bugdeschis: boolean
    produs: string
    escaladat: boolean
    idsuport: number
    linkdocs?: string | null
    linkdrive?: string | null
  }

  export type tichetUpdateWithoutUtilizator_tichet_idsuportToutilizatorInput = {
    titlu?: StringFieldUpdateOperationsInput | string
    tiptichet?: StringFieldUpdateOperationsInput | string
    prioritate?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    datainchidere?: DateTimeFieldUpdateOperationsInput | Date | string
    statuscurent?: StringFieldUpdateOperationsInput | string
    consultdeschis?: BoolFieldUpdateOperationsInput | boolean
    bugdeschis?: BoolFieldUpdateOperationsInput | boolean
    produs?: StringFieldUpdateOperationsInput | string
    escaladat?: BoolFieldUpdateOperationsInput | boolean
    linkdocs?: NullableStringFieldUpdateOperationsInput | string | null
    linkdrive?: NullableStringFieldUpdateOperationsInput | string | null
    istorictichet?: istorictichetUpdateManyWithoutTichetNestedInput
    mesaje?: mesajeUpdateManyWithoutTichetNestedInput
    utilizator_tichet_idutilizatorToutilizator?: utilizatorUpdateOneRequiredWithoutTichet_tichet_idutilizatorToutilizatorNestedInput
  }

  export type tichetUncheckedUpdateWithoutUtilizator_tichet_idsuportToutilizatorInput = {
    idtichet?: IntFieldUpdateOperationsInput | number
    titlu?: StringFieldUpdateOperationsInput | string
    tiptichet?: StringFieldUpdateOperationsInput | string
    prioritate?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    datainchidere?: DateTimeFieldUpdateOperationsInput | Date | string
    statuscurent?: StringFieldUpdateOperationsInput | string
    consultdeschis?: BoolFieldUpdateOperationsInput | boolean
    bugdeschis?: BoolFieldUpdateOperationsInput | boolean
    produs?: StringFieldUpdateOperationsInput | string
    escaladat?: BoolFieldUpdateOperationsInput | boolean
    idutilizator?: IntFieldUpdateOperationsInput | number
    linkdocs?: NullableStringFieldUpdateOperationsInput | string | null
    linkdrive?: NullableStringFieldUpdateOperationsInput | string | null
    istorictichet?: istorictichetUncheckedUpdateManyWithoutTichetNestedInput
    mesaje?: mesajeUncheckedUpdateManyWithoutTichetNestedInput
  }

  export type tichetUncheckedUpdateManyWithoutUtilizator_tichet_idsuportToutilizatorInput = {
    idtichet?: IntFieldUpdateOperationsInput | number
    titlu?: StringFieldUpdateOperationsInput | string
    tiptichet?: StringFieldUpdateOperationsInput | string
    prioritate?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    datainchidere?: DateTimeFieldUpdateOperationsInput | Date | string
    statuscurent?: StringFieldUpdateOperationsInput | string
    consultdeschis?: BoolFieldUpdateOperationsInput | boolean
    bugdeschis?: BoolFieldUpdateOperationsInput | boolean
    produs?: StringFieldUpdateOperationsInput | string
    escaladat?: BoolFieldUpdateOperationsInput | boolean
    idutilizator?: IntFieldUpdateOperationsInput | number
    linkdocs?: NullableStringFieldUpdateOperationsInput | string | null
    linkdrive?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tichetUpdateWithoutUtilizator_tichet_idutilizatorToutilizatorInput = {
    titlu?: StringFieldUpdateOperationsInput | string
    tiptichet?: StringFieldUpdateOperationsInput | string
    prioritate?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    datainchidere?: DateTimeFieldUpdateOperationsInput | Date | string
    statuscurent?: StringFieldUpdateOperationsInput | string
    consultdeschis?: BoolFieldUpdateOperationsInput | boolean
    bugdeschis?: BoolFieldUpdateOperationsInput | boolean
    produs?: StringFieldUpdateOperationsInput | string
    escaladat?: BoolFieldUpdateOperationsInput | boolean
    linkdocs?: NullableStringFieldUpdateOperationsInput | string | null
    linkdrive?: NullableStringFieldUpdateOperationsInput | string | null
    istorictichet?: istorictichetUpdateManyWithoutTichetNestedInput
    mesaje?: mesajeUpdateManyWithoutTichetNestedInput
    utilizator_tichet_idsuportToutilizator?: utilizatorUpdateOneRequiredWithoutTichet_tichet_idsuportToutilizatorNestedInput
  }

  export type tichetUncheckedUpdateWithoutUtilizator_tichet_idutilizatorToutilizatorInput = {
    idtichet?: IntFieldUpdateOperationsInput | number
    titlu?: StringFieldUpdateOperationsInput | string
    tiptichet?: StringFieldUpdateOperationsInput | string
    prioritate?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    datainchidere?: DateTimeFieldUpdateOperationsInput | Date | string
    statuscurent?: StringFieldUpdateOperationsInput | string
    consultdeschis?: BoolFieldUpdateOperationsInput | boolean
    bugdeschis?: BoolFieldUpdateOperationsInput | boolean
    produs?: StringFieldUpdateOperationsInput | string
    escaladat?: BoolFieldUpdateOperationsInput | boolean
    idsuport?: IntFieldUpdateOperationsInput | number
    linkdocs?: NullableStringFieldUpdateOperationsInput | string | null
    linkdrive?: NullableStringFieldUpdateOperationsInput | string | null
    istorictichet?: istorictichetUncheckedUpdateManyWithoutTichetNestedInput
    mesaje?: mesajeUncheckedUpdateManyWithoutTichetNestedInput
  }

  export type tichetUncheckedUpdateManyWithoutUtilizator_tichet_idutilizatorToutilizatorInput = {
    idtichet?: IntFieldUpdateOperationsInput | number
    titlu?: StringFieldUpdateOperationsInput | string
    tiptichet?: StringFieldUpdateOperationsInput | string
    prioritate?: StringFieldUpdateOperationsInput | string
    datacreare?: DateTimeFieldUpdateOperationsInput | Date | string
    datainchidere?: DateTimeFieldUpdateOperationsInput | Date | string
    statuscurent?: StringFieldUpdateOperationsInput | string
    consultdeschis?: BoolFieldUpdateOperationsInput | boolean
    bugdeschis?: BoolFieldUpdateOperationsInput | boolean
    produs?: StringFieldUpdateOperationsInput | string
    escaladat?: BoolFieldUpdateOperationsInput | boolean
    idsuport?: IntFieldUpdateOperationsInput | number
    linkdocs?: NullableStringFieldUpdateOperationsInput | string | null
    linkdrive?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}