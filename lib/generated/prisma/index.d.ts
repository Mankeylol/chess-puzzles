
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
 * Model UserScore
 * 
 */
export type UserScore = $Result.DefaultSelection<Prisma.$UserScorePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserScores
 * const userScores = await prisma.userScore.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more UserScores
   * const userScores = await prisma.userScore.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.userScore`: Exposes CRUD operations for the **UserScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserScores
    * const userScores = await prisma.userScore.findMany()
    * ```
    */
  get userScore(): Prisma.UserScoreDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    UserScore: 'UserScore'
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
      modelProps: "userScore"
      txIsolationLevel: never
    }
    model: {
      UserScore: {
        payload: Prisma.$UserScorePayload<ExtArgs>
        fields: Prisma.UserScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserScorePayload>
          }
          findFirst: {
            args: Prisma.UserScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserScorePayload>
          }
          findMany: {
            args: Prisma.UserScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserScorePayload>[]
          }
          create: {
            args: Prisma.UserScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserScorePayload>
          }
          createMany: {
            args: Prisma.UserScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserScorePayload>
          }
          update: {
            args: Prisma.UserScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserScorePayload>
          }
          deleteMany: {
            args: Prisma.UserScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserScorePayload>
          }
          aggregate: {
            args: Prisma.UserScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserScore>
          }
          groupBy: {
            args: Prisma.UserScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserScoreGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserScoreFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserScoreAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserScoreCountArgs<ExtArgs>
            result: $Utils.Optional<UserScoreCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    }
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
    userScore?: UserScoreOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Models
   */

  /**
   * Model UserScore
   */

  export type AggregateUserScore = {
    _count: UserScoreCountAggregateOutputType | null
    _avg: UserScoreAvgAggregateOutputType | null
    _sum: UserScoreSumAggregateOutputType | null
    _min: UserScoreMinAggregateOutputType | null
    _max: UserScoreMaxAggregateOutputType | null
  }

  export type UserScoreAvgAggregateOutputType = {
    score: number | null
    highScore: number | null
  }

  export type UserScoreSumAggregateOutputType = {
    score: number | null
    highScore: number | null
  }

  export type UserScoreMinAggregateOutputType = {
    id: string | null
    fid: string | null
    score: number | null
    highScore: number | null
  }

  export type UserScoreMaxAggregateOutputType = {
    id: string | null
    fid: string | null
    score: number | null
    highScore: number | null
  }

  export type UserScoreCountAggregateOutputType = {
    id: number
    fid: number
    score: number
    highScore: number
    _all: number
  }


  export type UserScoreAvgAggregateInputType = {
    score?: true
    highScore?: true
  }

  export type UserScoreSumAggregateInputType = {
    score?: true
    highScore?: true
  }

  export type UserScoreMinAggregateInputType = {
    id?: true
    fid?: true
    score?: true
    highScore?: true
  }

  export type UserScoreMaxAggregateInputType = {
    id?: true
    fid?: true
    score?: true
    highScore?: true
  }

  export type UserScoreCountAggregateInputType = {
    id?: true
    fid?: true
    score?: true
    highScore?: true
    _all?: true
  }

  export type UserScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserScore to aggregate.
     */
    where?: UserScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserScores to fetch.
     */
    orderBy?: UserScoreOrderByWithRelationInput | UserScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserScores
    **/
    _count?: true | UserScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserScoreMaxAggregateInputType
  }

  export type GetUserScoreAggregateType<T extends UserScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateUserScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserScore[P]>
      : GetScalarType<T[P], AggregateUserScore[P]>
  }




  export type UserScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserScoreWhereInput
    orderBy?: UserScoreOrderByWithAggregationInput | UserScoreOrderByWithAggregationInput[]
    by: UserScoreScalarFieldEnum[] | UserScoreScalarFieldEnum
    having?: UserScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserScoreCountAggregateInputType | true
    _avg?: UserScoreAvgAggregateInputType
    _sum?: UserScoreSumAggregateInputType
    _min?: UserScoreMinAggregateInputType
    _max?: UserScoreMaxAggregateInputType
  }

  export type UserScoreGroupByOutputType = {
    id: string
    fid: string
    score: number
    highScore: number
    _count: UserScoreCountAggregateOutputType | null
    _avg: UserScoreAvgAggregateOutputType | null
    _sum: UserScoreSumAggregateOutputType | null
    _min: UserScoreMinAggregateOutputType | null
    _max: UserScoreMaxAggregateOutputType | null
  }

  type GetUserScoreGroupByPayload<T extends UserScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserScoreGroupByOutputType[P]>
            : GetScalarType<T[P], UserScoreGroupByOutputType[P]>
        }
      >
    >


  export type UserScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fid?: boolean
    score?: boolean
    highScore?: boolean
  }, ExtArgs["result"]["userScore"]>



  export type UserScoreSelectScalar = {
    id?: boolean
    fid?: boolean
    score?: boolean
    highScore?: boolean
  }

  export type UserScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fid" | "score" | "highScore", ExtArgs["result"]["userScore"]>

  export type $UserScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserScore"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fid: string
      score: number
      highScore: number
    }, ExtArgs["result"]["userScore"]>
    composites: {}
  }

  type UserScoreGetPayload<S extends boolean | null | undefined | UserScoreDefaultArgs> = $Result.GetResult<Prisma.$UserScorePayload, S>

  type UserScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserScoreCountAggregateInputType | true
    }

  export interface UserScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserScore'], meta: { name: 'UserScore' } }
    /**
     * Find zero or one UserScore that matches the filter.
     * @param {UserScoreFindUniqueArgs} args - Arguments to find a UserScore
     * @example
     * // Get one UserScore
     * const userScore = await prisma.userScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserScoreFindUniqueArgs>(args: SelectSubset<T, UserScoreFindUniqueArgs<ExtArgs>>): Prisma__UserScoreClient<$Result.GetResult<Prisma.$UserScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserScoreFindUniqueOrThrowArgs} args - Arguments to find a UserScore
     * @example
     * // Get one UserScore
     * const userScore = await prisma.userScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, UserScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserScoreClient<$Result.GetResult<Prisma.$UserScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserScoreFindFirstArgs} args - Arguments to find a UserScore
     * @example
     * // Get one UserScore
     * const userScore = await prisma.userScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserScoreFindFirstArgs>(args?: SelectSubset<T, UserScoreFindFirstArgs<ExtArgs>>): Prisma__UserScoreClient<$Result.GetResult<Prisma.$UserScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserScoreFindFirstOrThrowArgs} args - Arguments to find a UserScore
     * @example
     * // Get one UserScore
     * const userScore = await prisma.userScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, UserScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserScoreClient<$Result.GetResult<Prisma.$UserScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserScores
     * const userScores = await prisma.userScore.findMany()
     * 
     * // Get first 10 UserScores
     * const userScores = await prisma.userScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userScoreWithIdOnly = await prisma.userScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserScoreFindManyArgs>(args?: SelectSubset<T, UserScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserScore.
     * @param {UserScoreCreateArgs} args - Arguments to create a UserScore.
     * @example
     * // Create one UserScore
     * const UserScore = await prisma.userScore.create({
     *   data: {
     *     // ... data to create a UserScore
     *   }
     * })
     * 
     */
    create<T extends UserScoreCreateArgs>(args: SelectSubset<T, UserScoreCreateArgs<ExtArgs>>): Prisma__UserScoreClient<$Result.GetResult<Prisma.$UserScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserScores.
     * @param {UserScoreCreateManyArgs} args - Arguments to create many UserScores.
     * @example
     * // Create many UserScores
     * const userScore = await prisma.userScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserScoreCreateManyArgs>(args?: SelectSubset<T, UserScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserScore.
     * @param {UserScoreDeleteArgs} args - Arguments to delete one UserScore.
     * @example
     * // Delete one UserScore
     * const UserScore = await prisma.userScore.delete({
     *   where: {
     *     // ... filter to delete one UserScore
     *   }
     * })
     * 
     */
    delete<T extends UserScoreDeleteArgs>(args: SelectSubset<T, UserScoreDeleteArgs<ExtArgs>>): Prisma__UserScoreClient<$Result.GetResult<Prisma.$UserScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserScore.
     * @param {UserScoreUpdateArgs} args - Arguments to update one UserScore.
     * @example
     * // Update one UserScore
     * const userScore = await prisma.userScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserScoreUpdateArgs>(args: SelectSubset<T, UserScoreUpdateArgs<ExtArgs>>): Prisma__UserScoreClient<$Result.GetResult<Prisma.$UserScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserScores.
     * @param {UserScoreDeleteManyArgs} args - Arguments to filter UserScores to delete.
     * @example
     * // Delete a few UserScores
     * const { count } = await prisma.userScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserScoreDeleteManyArgs>(args?: SelectSubset<T, UserScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserScores
     * const userScore = await prisma.userScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserScoreUpdateManyArgs>(args: SelectSubset<T, UserScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserScore.
     * @param {UserScoreUpsertArgs} args - Arguments to update or create a UserScore.
     * @example
     * // Update or create a UserScore
     * const userScore = await prisma.userScore.upsert({
     *   create: {
     *     // ... data to create a UserScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserScore we want to update
     *   }
     * })
     */
    upsert<T extends UserScoreUpsertArgs>(args: SelectSubset<T, UserScoreUpsertArgs<ExtArgs>>): Prisma__UserScoreClient<$Result.GetResult<Prisma.$UserScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserScores that matches the filter.
     * @param {UserScoreFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userScore = await prisma.userScore.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserScoreFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserScore.
     * @param {UserScoreAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userScore = await prisma.userScore.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserScoreAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserScoreCountArgs} args - Arguments to filter UserScores to count.
     * @example
     * // Count the number of UserScores
     * const count = await prisma.userScore.count({
     *   where: {
     *     // ... the filter for the UserScores we want to count
     *   }
     * })
    **/
    count<T extends UserScoreCountArgs>(
      args?: Subset<T, UserScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserScoreAggregateArgs>(args: Subset<T, UserScoreAggregateArgs>): Prisma.PrismaPromise<GetUserScoreAggregateType<T>>

    /**
     * Group by UserScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserScoreGroupByArgs} args - Group by arguments.
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
      T extends UserScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserScoreGroupByArgs['orderBy'] }
        : { orderBy?: UserScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserScore model
   */
  readonly fields: UserScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the UserScore model
   */
  interface UserScoreFieldRefs {
    readonly id: FieldRef<"UserScore", 'String'>
    readonly fid: FieldRef<"UserScore", 'String'>
    readonly score: FieldRef<"UserScore", 'Int'>
    readonly highScore: FieldRef<"UserScore", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserScore findUnique
   */
  export type UserScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserScore
     */
    select?: UserScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserScore
     */
    omit?: UserScoreOmit<ExtArgs> | null
    /**
     * Filter, which UserScore to fetch.
     */
    where: UserScoreWhereUniqueInput
  }

  /**
   * UserScore findUniqueOrThrow
   */
  export type UserScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserScore
     */
    select?: UserScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserScore
     */
    omit?: UserScoreOmit<ExtArgs> | null
    /**
     * Filter, which UserScore to fetch.
     */
    where: UserScoreWhereUniqueInput
  }

  /**
   * UserScore findFirst
   */
  export type UserScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserScore
     */
    select?: UserScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserScore
     */
    omit?: UserScoreOmit<ExtArgs> | null
    /**
     * Filter, which UserScore to fetch.
     */
    where?: UserScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserScores to fetch.
     */
    orderBy?: UserScoreOrderByWithRelationInput | UserScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserScores.
     */
    cursor?: UserScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserScores.
     */
    distinct?: UserScoreScalarFieldEnum | UserScoreScalarFieldEnum[]
  }

  /**
   * UserScore findFirstOrThrow
   */
  export type UserScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserScore
     */
    select?: UserScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserScore
     */
    omit?: UserScoreOmit<ExtArgs> | null
    /**
     * Filter, which UserScore to fetch.
     */
    where?: UserScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserScores to fetch.
     */
    orderBy?: UserScoreOrderByWithRelationInput | UserScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserScores.
     */
    cursor?: UserScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserScores.
     */
    distinct?: UserScoreScalarFieldEnum | UserScoreScalarFieldEnum[]
  }

  /**
   * UserScore findMany
   */
  export type UserScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserScore
     */
    select?: UserScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserScore
     */
    omit?: UserScoreOmit<ExtArgs> | null
    /**
     * Filter, which UserScores to fetch.
     */
    where?: UserScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserScores to fetch.
     */
    orderBy?: UserScoreOrderByWithRelationInput | UserScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserScores.
     */
    cursor?: UserScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserScores.
     */
    skip?: number
    distinct?: UserScoreScalarFieldEnum | UserScoreScalarFieldEnum[]
  }

  /**
   * UserScore create
   */
  export type UserScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserScore
     */
    select?: UserScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserScore
     */
    omit?: UserScoreOmit<ExtArgs> | null
    /**
     * The data needed to create a UserScore.
     */
    data: XOR<UserScoreCreateInput, UserScoreUncheckedCreateInput>
  }

  /**
   * UserScore createMany
   */
  export type UserScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserScores.
     */
    data: UserScoreCreateManyInput | UserScoreCreateManyInput[]
  }

  /**
   * UserScore update
   */
  export type UserScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserScore
     */
    select?: UserScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserScore
     */
    omit?: UserScoreOmit<ExtArgs> | null
    /**
     * The data needed to update a UserScore.
     */
    data: XOR<UserScoreUpdateInput, UserScoreUncheckedUpdateInput>
    /**
     * Choose, which UserScore to update.
     */
    where: UserScoreWhereUniqueInput
  }

  /**
   * UserScore updateMany
   */
  export type UserScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserScores.
     */
    data: XOR<UserScoreUpdateManyMutationInput, UserScoreUncheckedUpdateManyInput>
    /**
     * Filter which UserScores to update
     */
    where?: UserScoreWhereInput
    /**
     * Limit how many UserScores to update.
     */
    limit?: number
  }

  /**
   * UserScore upsert
   */
  export type UserScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserScore
     */
    select?: UserScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserScore
     */
    omit?: UserScoreOmit<ExtArgs> | null
    /**
     * The filter to search for the UserScore to update in case it exists.
     */
    where: UserScoreWhereUniqueInput
    /**
     * In case the UserScore found by the `where` argument doesn't exist, create a new UserScore with this data.
     */
    create: XOR<UserScoreCreateInput, UserScoreUncheckedCreateInput>
    /**
     * In case the UserScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserScoreUpdateInput, UserScoreUncheckedUpdateInput>
  }

  /**
   * UserScore delete
   */
  export type UserScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserScore
     */
    select?: UserScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserScore
     */
    omit?: UserScoreOmit<ExtArgs> | null
    /**
     * Filter which UserScore to delete.
     */
    where: UserScoreWhereUniqueInput
  }

  /**
   * UserScore deleteMany
   */
  export type UserScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserScores to delete
     */
    where?: UserScoreWhereInput
    /**
     * Limit how many UserScores to delete.
     */
    limit?: number
  }

  /**
   * UserScore findRaw
   */
  export type UserScoreFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserScore aggregateRaw
   */
  export type UserScoreAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserScore without action
   */
  export type UserScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserScore
     */
    select?: UserScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserScore
     */
    omit?: UserScoreOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScoreScalarFieldEnum: {
    id: 'id',
    fid: 'fid',
    score: 'score',
    highScore: 'highScore'
  };

  export type UserScoreScalarFieldEnum = (typeof UserScoreScalarFieldEnum)[keyof typeof UserScoreScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UserScoreWhereInput = {
    AND?: UserScoreWhereInput | UserScoreWhereInput[]
    OR?: UserScoreWhereInput[]
    NOT?: UserScoreWhereInput | UserScoreWhereInput[]
    id?: StringFilter<"UserScore"> | string
    fid?: StringFilter<"UserScore"> | string
    score?: IntFilter<"UserScore"> | number
    highScore?: IntFilter<"UserScore"> | number
  }

  export type UserScoreOrderByWithRelationInput = {
    id?: SortOrder
    fid?: SortOrder
    score?: SortOrder
    highScore?: SortOrder
  }

  export type UserScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fid?: string
    AND?: UserScoreWhereInput | UserScoreWhereInput[]
    OR?: UserScoreWhereInput[]
    NOT?: UserScoreWhereInput | UserScoreWhereInput[]
    score?: IntFilter<"UserScore"> | number
    highScore?: IntFilter<"UserScore"> | number
  }, "id" | "fid">

  export type UserScoreOrderByWithAggregationInput = {
    id?: SortOrder
    fid?: SortOrder
    score?: SortOrder
    highScore?: SortOrder
    _count?: UserScoreCountOrderByAggregateInput
    _avg?: UserScoreAvgOrderByAggregateInput
    _max?: UserScoreMaxOrderByAggregateInput
    _min?: UserScoreMinOrderByAggregateInput
    _sum?: UserScoreSumOrderByAggregateInput
  }

  export type UserScoreScalarWhereWithAggregatesInput = {
    AND?: UserScoreScalarWhereWithAggregatesInput | UserScoreScalarWhereWithAggregatesInput[]
    OR?: UserScoreScalarWhereWithAggregatesInput[]
    NOT?: UserScoreScalarWhereWithAggregatesInput | UserScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserScore"> | string
    fid?: StringWithAggregatesFilter<"UserScore"> | string
    score?: IntWithAggregatesFilter<"UserScore"> | number
    highScore?: IntWithAggregatesFilter<"UserScore"> | number
  }

  export type UserScoreCreateInput = {
    id?: string
    fid: string
    score?: number
    highScore?: number
  }

  export type UserScoreUncheckedCreateInput = {
    id?: string
    fid: string
    score?: number
    highScore?: number
  }

  export type UserScoreUpdateInput = {
    fid?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    highScore?: IntFieldUpdateOperationsInput | number
  }

  export type UserScoreUncheckedUpdateInput = {
    fid?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    highScore?: IntFieldUpdateOperationsInput | number
  }

  export type UserScoreCreateManyInput = {
    id?: string
    fid: string
    score?: number
    highScore?: number
  }

  export type UserScoreUpdateManyMutationInput = {
    fid?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    highScore?: IntFieldUpdateOperationsInput | number
  }

  export type UserScoreUncheckedUpdateManyInput = {
    fid?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    highScore?: IntFieldUpdateOperationsInput | number
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

  export type UserScoreCountOrderByAggregateInput = {
    id?: SortOrder
    fid?: SortOrder
    score?: SortOrder
    highScore?: SortOrder
  }

  export type UserScoreAvgOrderByAggregateInput = {
    score?: SortOrder
    highScore?: SortOrder
  }

  export type UserScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    fid?: SortOrder
    score?: SortOrder
    highScore?: SortOrder
  }

  export type UserScoreMinOrderByAggregateInput = {
    id?: SortOrder
    fid?: SortOrder
    score?: SortOrder
    highScore?: SortOrder
  }

  export type UserScoreSumOrderByAggregateInput = {
    score?: SortOrder
    highScore?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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