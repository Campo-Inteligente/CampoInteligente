
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
 * Model tb_administradores
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type tb_administradores = $Result.DefaultSelection<Prisma.$tb_administradoresPayload>
/**
 * Model tb_conversation_contexts
 * 
 */
export type tb_conversation_contexts = $Result.DefaultSelection<Prisma.$tb_conversation_contextsPayload>
/**
 * Model tb_intencoes
 * 
 */
export type tb_intencoes = $Result.DefaultSelection<Prisma.$tb_intencoesPayload>
/**
 * Model tb_interacoes
 * 
 */
export type tb_interacoes = $Result.DefaultSelection<Prisma.$tb_interacoesPayload>
/**
 * Model tb_interacoes_intencoes
 * 
 */
export type tb_interacoes_intencoes = $Result.DefaultSelection<Prisma.$tb_interacoes_intencoesPayload>
/**
 * Model tb_movimentacoes_estoque
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type tb_movimentacoes_estoque = $Result.DefaultSelection<Prisma.$tb_movimentacoes_estoquePayload>
/**
 * Model tb_organizacoes
 * 
 */
export type tb_organizacoes = $Result.DefaultSelection<Prisma.$tb_organizacoesPayload>
/**
 * Model tb_produtos_estoque
 * 
 */
export type tb_produtos_estoque = $Result.DefaultSelection<Prisma.$tb_produtos_estoquePayload>
/**
 * Model tb_safras
 * 
 */
export type tb_safras = $Result.DefaultSelection<Prisma.$tb_safrasPayload>
/**
 * Model tb_usuarios
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type tb_usuarios = $Result.DefaultSelection<Prisma.$tb_usuariosPayload>
/**
 * Model tb_versoes_schema
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type tb_versoes_schema = $Result.DefaultSelection<Prisma.$tb_versoes_schemaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tb_administradores
 * const tb_administradores = await prisma.tb_administradores.findMany()
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
   * // Fetch zero or more Tb_administradores
   * const tb_administradores = await prisma.tb_administradores.findMany()
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
   * `prisma.tb_administradores`: Exposes CRUD operations for the **tb_administradores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_administradores
    * const tb_administradores = await prisma.tb_administradores.findMany()
    * ```
    */
  get tb_administradores(): Prisma.tb_administradoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_conversation_contexts`: Exposes CRUD operations for the **tb_conversation_contexts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_conversation_contexts
    * const tb_conversation_contexts = await prisma.tb_conversation_contexts.findMany()
    * ```
    */
  get tb_conversation_contexts(): Prisma.tb_conversation_contextsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_intencoes`: Exposes CRUD operations for the **tb_intencoes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_intencoes
    * const tb_intencoes = await prisma.tb_intencoes.findMany()
    * ```
    */
  get tb_intencoes(): Prisma.tb_intencoesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_interacoes`: Exposes CRUD operations for the **tb_interacoes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_interacoes
    * const tb_interacoes = await prisma.tb_interacoes.findMany()
    * ```
    */
  get tb_interacoes(): Prisma.tb_interacoesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_interacoes_intencoes`: Exposes CRUD operations for the **tb_interacoes_intencoes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_interacoes_intencoes
    * const tb_interacoes_intencoes = await prisma.tb_interacoes_intencoes.findMany()
    * ```
    */
  get tb_interacoes_intencoes(): Prisma.tb_interacoes_intencoesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_movimentacoes_estoque`: Exposes CRUD operations for the **tb_movimentacoes_estoque** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_movimentacoes_estoques
    * const tb_movimentacoes_estoques = await prisma.tb_movimentacoes_estoque.findMany()
    * ```
    */
  get tb_movimentacoes_estoque(): Prisma.tb_movimentacoes_estoqueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_organizacoes`: Exposes CRUD operations for the **tb_organizacoes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_organizacoes
    * const tb_organizacoes = await prisma.tb_organizacoes.findMany()
    * ```
    */
  get tb_organizacoes(): Prisma.tb_organizacoesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_produtos_estoque`: Exposes CRUD operations for the **tb_produtos_estoque** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_produtos_estoques
    * const tb_produtos_estoques = await prisma.tb_produtos_estoque.findMany()
    * ```
    */
  get tb_produtos_estoque(): Prisma.tb_produtos_estoqueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_safras`: Exposes CRUD operations for the **tb_safras** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_safras
    * const tb_safras = await prisma.tb_safras.findMany()
    * ```
    */
  get tb_safras(): Prisma.tb_safrasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_usuarios`: Exposes CRUD operations for the **tb_usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_usuarios
    * const tb_usuarios = await prisma.tb_usuarios.findMany()
    * ```
    */
  get tb_usuarios(): Prisma.tb_usuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_versoes_schema`: Exposes CRUD operations for the **tb_versoes_schema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_versoes_schemas
    * const tb_versoes_schemas = await prisma.tb_versoes_schema.findMany()
    * ```
    */
  get tb_versoes_schema(): Prisma.tb_versoes_schemaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    tb_administradores: 'tb_administradores',
    tb_conversation_contexts: 'tb_conversation_contexts',
    tb_intencoes: 'tb_intencoes',
    tb_interacoes: 'tb_interacoes',
    tb_interacoes_intencoes: 'tb_interacoes_intencoes',
    tb_movimentacoes_estoque: 'tb_movimentacoes_estoque',
    tb_organizacoes: 'tb_organizacoes',
    tb_produtos_estoque: 'tb_produtos_estoque',
    tb_safras: 'tb_safras',
    tb_usuarios: 'tb_usuarios',
    tb_versoes_schema: 'tb_versoes_schema'
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
      modelProps: "tb_administradores" | "tb_conversation_contexts" | "tb_intencoes" | "tb_interacoes" | "tb_interacoes_intencoes" | "tb_movimentacoes_estoque" | "tb_organizacoes" | "tb_produtos_estoque" | "tb_safras" | "tb_usuarios" | "tb_versoes_schema"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      tb_administradores: {
        payload: Prisma.$tb_administradoresPayload<ExtArgs>
        fields: Prisma.tb_administradoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_administradoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_administradoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_administradoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_administradoresPayload>
          }
          findFirst: {
            args: Prisma.tb_administradoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_administradoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_administradoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_administradoresPayload>
          }
          findMany: {
            args: Prisma.tb_administradoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_administradoresPayload>[]
          }
          create: {
            args: Prisma.tb_administradoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_administradoresPayload>
          }
          createMany: {
            args: Prisma.tb_administradoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tb_administradoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_administradoresPayload>[]
          }
          delete: {
            args: Prisma.tb_administradoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_administradoresPayload>
          }
          update: {
            args: Prisma.tb_administradoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_administradoresPayload>
          }
          deleteMany: {
            args: Prisma.tb_administradoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_administradoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tb_administradoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_administradoresPayload>[]
          }
          upsert: {
            args: Prisma.tb_administradoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_administradoresPayload>
          }
          aggregate: {
            args: Prisma.Tb_administradoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_administradores>
          }
          groupBy: {
            args: Prisma.tb_administradoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_administradoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_administradoresCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_administradoresCountAggregateOutputType> | number
          }
        }
      }
      tb_conversation_contexts: {
        payload: Prisma.$tb_conversation_contextsPayload<ExtArgs>
        fields: Prisma.tb_conversation_contextsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_conversation_contextsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_conversation_contextsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_conversation_contextsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_conversation_contextsPayload>
          }
          findFirst: {
            args: Prisma.tb_conversation_contextsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_conversation_contextsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_conversation_contextsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_conversation_contextsPayload>
          }
          findMany: {
            args: Prisma.tb_conversation_contextsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_conversation_contextsPayload>[]
          }
          create: {
            args: Prisma.tb_conversation_contextsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_conversation_contextsPayload>
          }
          createMany: {
            args: Prisma.tb_conversation_contextsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tb_conversation_contextsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_conversation_contextsPayload>[]
          }
          delete: {
            args: Prisma.tb_conversation_contextsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_conversation_contextsPayload>
          }
          update: {
            args: Prisma.tb_conversation_contextsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_conversation_contextsPayload>
          }
          deleteMany: {
            args: Prisma.tb_conversation_contextsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_conversation_contextsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tb_conversation_contextsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_conversation_contextsPayload>[]
          }
          upsert: {
            args: Prisma.tb_conversation_contextsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_conversation_contextsPayload>
          }
          aggregate: {
            args: Prisma.Tb_conversation_contextsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_conversation_contexts>
          }
          groupBy: {
            args: Prisma.tb_conversation_contextsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_conversation_contextsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_conversation_contextsCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_conversation_contextsCountAggregateOutputType> | number
          }
        }
      }
      tb_intencoes: {
        payload: Prisma.$tb_intencoesPayload<ExtArgs>
        fields: Prisma.tb_intencoesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_intencoesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_intencoesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_intencoesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_intencoesPayload>
          }
          findFirst: {
            args: Prisma.tb_intencoesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_intencoesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_intencoesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_intencoesPayload>
          }
          findMany: {
            args: Prisma.tb_intencoesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_intencoesPayload>[]
          }
          create: {
            args: Prisma.tb_intencoesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_intencoesPayload>
          }
          createMany: {
            args: Prisma.tb_intencoesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tb_intencoesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_intencoesPayload>[]
          }
          delete: {
            args: Prisma.tb_intencoesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_intencoesPayload>
          }
          update: {
            args: Prisma.tb_intencoesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_intencoesPayload>
          }
          deleteMany: {
            args: Prisma.tb_intencoesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_intencoesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tb_intencoesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_intencoesPayload>[]
          }
          upsert: {
            args: Prisma.tb_intencoesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_intencoesPayload>
          }
          aggregate: {
            args: Prisma.Tb_intencoesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_intencoes>
          }
          groupBy: {
            args: Prisma.tb_intencoesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_intencoesGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_intencoesCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_intencoesCountAggregateOutputType> | number
          }
        }
      }
      tb_interacoes: {
        payload: Prisma.$tb_interacoesPayload<ExtArgs>
        fields: Prisma.tb_interacoesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_interacoesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_interacoesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_interacoesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_interacoesPayload>
          }
          findFirst: {
            args: Prisma.tb_interacoesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_interacoesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_interacoesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_interacoesPayload>
          }
          findMany: {
            args: Prisma.tb_interacoesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_interacoesPayload>[]
          }
          create: {
            args: Prisma.tb_interacoesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_interacoesPayload>
          }
          createMany: {
            args: Prisma.tb_interacoesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tb_interacoesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_interacoesPayload>[]
          }
          delete: {
            args: Prisma.tb_interacoesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_interacoesPayload>
          }
          update: {
            args: Prisma.tb_interacoesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_interacoesPayload>
          }
          deleteMany: {
            args: Prisma.tb_interacoesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_interacoesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tb_interacoesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_interacoesPayload>[]
          }
          upsert: {
            args: Prisma.tb_interacoesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_interacoesPayload>
          }
          aggregate: {
            args: Prisma.Tb_interacoesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_interacoes>
          }
          groupBy: {
            args: Prisma.tb_interacoesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_interacoesGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_interacoesCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_interacoesCountAggregateOutputType> | number
          }
        }
      }
      tb_interacoes_intencoes: {
        payload: Prisma.$tb_interacoes_intencoesPayload<ExtArgs>
        fields: Prisma.tb_interacoes_intencoesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_interacoes_intencoesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_interacoes_intencoesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_interacoes_intencoesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_interacoes_intencoesPayload>
          }
          findFirst: {
            args: Prisma.tb_interacoes_intencoesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_interacoes_intencoesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_interacoes_intencoesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_interacoes_intencoesPayload>
          }
          findMany: {
            args: Prisma.tb_interacoes_intencoesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_interacoes_intencoesPayload>[]
          }
          create: {
            args: Prisma.tb_interacoes_intencoesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_interacoes_intencoesPayload>
          }
          createMany: {
            args: Prisma.tb_interacoes_intencoesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tb_interacoes_intencoesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_interacoes_intencoesPayload>[]
          }
          delete: {
            args: Prisma.tb_interacoes_intencoesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_interacoes_intencoesPayload>
          }
          update: {
            args: Prisma.tb_interacoes_intencoesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_interacoes_intencoesPayload>
          }
          deleteMany: {
            args: Prisma.tb_interacoes_intencoesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_interacoes_intencoesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tb_interacoes_intencoesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_interacoes_intencoesPayload>[]
          }
          upsert: {
            args: Prisma.tb_interacoes_intencoesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_interacoes_intencoesPayload>
          }
          aggregate: {
            args: Prisma.Tb_interacoes_intencoesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_interacoes_intencoes>
          }
          groupBy: {
            args: Prisma.tb_interacoes_intencoesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_interacoes_intencoesGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_interacoes_intencoesCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_interacoes_intencoesCountAggregateOutputType> | number
          }
        }
      }
      tb_movimentacoes_estoque: {
        payload: Prisma.$tb_movimentacoes_estoquePayload<ExtArgs>
        fields: Prisma.tb_movimentacoes_estoqueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_movimentacoes_estoqueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_movimentacoes_estoquePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_movimentacoes_estoqueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_movimentacoes_estoquePayload>
          }
          findFirst: {
            args: Prisma.tb_movimentacoes_estoqueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_movimentacoes_estoquePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_movimentacoes_estoqueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_movimentacoes_estoquePayload>
          }
          findMany: {
            args: Prisma.tb_movimentacoes_estoqueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_movimentacoes_estoquePayload>[]
          }
          create: {
            args: Prisma.tb_movimentacoes_estoqueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_movimentacoes_estoquePayload>
          }
          createMany: {
            args: Prisma.tb_movimentacoes_estoqueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tb_movimentacoes_estoqueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_movimentacoes_estoquePayload>[]
          }
          delete: {
            args: Prisma.tb_movimentacoes_estoqueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_movimentacoes_estoquePayload>
          }
          update: {
            args: Prisma.tb_movimentacoes_estoqueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_movimentacoes_estoquePayload>
          }
          deleteMany: {
            args: Prisma.tb_movimentacoes_estoqueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_movimentacoes_estoqueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tb_movimentacoes_estoqueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_movimentacoes_estoquePayload>[]
          }
          upsert: {
            args: Prisma.tb_movimentacoes_estoqueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_movimentacoes_estoquePayload>
          }
          aggregate: {
            args: Prisma.Tb_movimentacoes_estoqueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_movimentacoes_estoque>
          }
          groupBy: {
            args: Prisma.tb_movimentacoes_estoqueGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_movimentacoes_estoqueGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_movimentacoes_estoqueCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_movimentacoes_estoqueCountAggregateOutputType> | number
          }
        }
      }
      tb_organizacoes: {
        payload: Prisma.$tb_organizacoesPayload<ExtArgs>
        fields: Prisma.tb_organizacoesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_organizacoesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_organizacoesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_organizacoesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_organizacoesPayload>
          }
          findFirst: {
            args: Prisma.tb_organizacoesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_organizacoesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_organizacoesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_organizacoesPayload>
          }
          findMany: {
            args: Prisma.tb_organizacoesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_organizacoesPayload>[]
          }
          create: {
            args: Prisma.tb_organizacoesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_organizacoesPayload>
          }
          createMany: {
            args: Prisma.tb_organizacoesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tb_organizacoesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_organizacoesPayload>[]
          }
          delete: {
            args: Prisma.tb_organizacoesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_organizacoesPayload>
          }
          update: {
            args: Prisma.tb_organizacoesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_organizacoesPayload>
          }
          deleteMany: {
            args: Prisma.tb_organizacoesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_organizacoesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tb_organizacoesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_organizacoesPayload>[]
          }
          upsert: {
            args: Prisma.tb_organizacoesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_organizacoesPayload>
          }
          aggregate: {
            args: Prisma.Tb_organizacoesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_organizacoes>
          }
          groupBy: {
            args: Prisma.tb_organizacoesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_organizacoesGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_organizacoesCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_organizacoesCountAggregateOutputType> | number
          }
        }
      }
      tb_produtos_estoque: {
        payload: Prisma.$tb_produtos_estoquePayload<ExtArgs>
        fields: Prisma.tb_produtos_estoqueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_produtos_estoqueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtos_estoquePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_produtos_estoqueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtos_estoquePayload>
          }
          findFirst: {
            args: Prisma.tb_produtos_estoqueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtos_estoquePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_produtos_estoqueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtos_estoquePayload>
          }
          findMany: {
            args: Prisma.tb_produtos_estoqueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtos_estoquePayload>[]
          }
          create: {
            args: Prisma.tb_produtos_estoqueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtos_estoquePayload>
          }
          createMany: {
            args: Prisma.tb_produtos_estoqueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tb_produtos_estoqueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtos_estoquePayload>[]
          }
          delete: {
            args: Prisma.tb_produtos_estoqueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtos_estoquePayload>
          }
          update: {
            args: Prisma.tb_produtos_estoqueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtos_estoquePayload>
          }
          deleteMany: {
            args: Prisma.tb_produtos_estoqueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_produtos_estoqueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tb_produtos_estoqueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtos_estoquePayload>[]
          }
          upsert: {
            args: Prisma.tb_produtos_estoqueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtos_estoquePayload>
          }
          aggregate: {
            args: Prisma.Tb_produtos_estoqueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_produtos_estoque>
          }
          groupBy: {
            args: Prisma.tb_produtos_estoqueGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_produtos_estoqueGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_produtos_estoqueCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_produtos_estoqueCountAggregateOutputType> | number
          }
        }
      }
      tb_safras: {
        payload: Prisma.$tb_safrasPayload<ExtArgs>
        fields: Prisma.tb_safrasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_safrasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_safrasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_safrasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_safrasPayload>
          }
          findFirst: {
            args: Prisma.tb_safrasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_safrasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_safrasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_safrasPayload>
          }
          findMany: {
            args: Prisma.tb_safrasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_safrasPayload>[]
          }
          create: {
            args: Prisma.tb_safrasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_safrasPayload>
          }
          createMany: {
            args: Prisma.tb_safrasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tb_safrasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_safrasPayload>[]
          }
          delete: {
            args: Prisma.tb_safrasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_safrasPayload>
          }
          update: {
            args: Prisma.tb_safrasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_safrasPayload>
          }
          deleteMany: {
            args: Prisma.tb_safrasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_safrasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tb_safrasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_safrasPayload>[]
          }
          upsert: {
            args: Prisma.tb_safrasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_safrasPayload>
          }
          aggregate: {
            args: Prisma.Tb_safrasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_safras>
          }
          groupBy: {
            args: Prisma.tb_safrasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_safrasGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_safrasCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_safrasCountAggregateOutputType> | number
          }
        }
      }
      tb_usuarios: {
        payload: Prisma.$tb_usuariosPayload<ExtArgs>
        fields: Prisma.tb_usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuariosPayload>
          }
          findFirst: {
            args: Prisma.tb_usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuariosPayload>
          }
          findMany: {
            args: Prisma.tb_usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuariosPayload>[]
          }
          create: {
            args: Prisma.tb_usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuariosPayload>
          }
          createMany: {
            args: Prisma.tb_usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tb_usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuariosPayload>[]
          }
          delete: {
            args: Prisma.tb_usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuariosPayload>
          }
          update: {
            args: Prisma.tb_usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuariosPayload>
          }
          deleteMany: {
            args: Prisma.tb_usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tb_usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuariosPayload>[]
          }
          upsert: {
            args: Prisma.tb_usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuariosPayload>
          }
          aggregate: {
            args: Prisma.Tb_usuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_usuarios>
          }
          groupBy: {
            args: Prisma.tb_usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_usuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_usuariosCountAggregateOutputType> | number
          }
        }
      }
      tb_versoes_schema: {
        payload: Prisma.$tb_versoes_schemaPayload<ExtArgs>
        fields: Prisma.tb_versoes_schemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_versoes_schemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_versoes_schemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_versoes_schemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_versoes_schemaPayload>
          }
          findFirst: {
            args: Prisma.tb_versoes_schemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_versoes_schemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_versoes_schemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_versoes_schemaPayload>
          }
          findMany: {
            args: Prisma.tb_versoes_schemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_versoes_schemaPayload>[]
          }
          create: {
            args: Prisma.tb_versoes_schemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_versoes_schemaPayload>
          }
          createMany: {
            args: Prisma.tb_versoes_schemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tb_versoes_schemaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_versoes_schemaPayload>[]
          }
          delete: {
            args: Prisma.tb_versoes_schemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_versoes_schemaPayload>
          }
          update: {
            args: Prisma.tb_versoes_schemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_versoes_schemaPayload>
          }
          deleteMany: {
            args: Prisma.tb_versoes_schemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_versoes_schemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tb_versoes_schemaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_versoes_schemaPayload>[]
          }
          upsert: {
            args: Prisma.tb_versoes_schemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_versoes_schemaPayload>
          }
          aggregate: {
            args: Prisma.Tb_versoes_schemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_versoes_schema>
          }
          groupBy: {
            args: Prisma.tb_versoes_schemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_versoes_schemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_versoes_schemaCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_versoes_schemaCountAggregateOutputType> | number
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
    tb_administradores?: tb_administradoresOmit
    tb_conversation_contexts?: tb_conversation_contextsOmit
    tb_intencoes?: tb_intencoesOmit
    tb_interacoes?: tb_interacoesOmit
    tb_interacoes_intencoes?: tb_interacoes_intencoesOmit
    tb_movimentacoes_estoque?: tb_movimentacoes_estoqueOmit
    tb_organizacoes?: tb_organizacoesOmit
    tb_produtos_estoque?: tb_produtos_estoqueOmit
    tb_safras?: tb_safrasOmit
    tb_usuarios?: tb_usuariosOmit
    tb_versoes_schema?: tb_versoes_schemaOmit
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
   * Count Type Tb_intencoesCountOutputType
   */

  export type Tb_intencoesCountOutputType = {
    tb_interacoes_intencoes: number
  }

  export type Tb_intencoesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_interacoes_intencoes?: boolean | Tb_intencoesCountOutputTypeCountTb_interacoes_intencoesArgs
  }

  // Custom InputTypes
  /**
   * Tb_intencoesCountOutputType without action
   */
  export type Tb_intencoesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tb_intencoesCountOutputType
     */
    select?: Tb_intencoesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tb_intencoesCountOutputType without action
   */
  export type Tb_intencoesCountOutputTypeCountTb_interacoes_intencoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_interacoes_intencoesWhereInput
  }


  /**
   * Count Type Tb_interacoesCountOutputType
   */

  export type Tb_interacoesCountOutputType = {
    tb_interacoes_intencoes: number
  }

  export type Tb_interacoesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_interacoes_intencoes?: boolean | Tb_interacoesCountOutputTypeCountTb_interacoes_intencoesArgs
  }

  // Custom InputTypes
  /**
   * Tb_interacoesCountOutputType without action
   */
  export type Tb_interacoesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tb_interacoesCountOutputType
     */
    select?: Tb_interacoesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tb_interacoesCountOutputType without action
   */
  export type Tb_interacoesCountOutputTypeCountTb_interacoes_intencoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_interacoes_intencoesWhereInput
  }


  /**
   * Count Type Tb_organizacoesCountOutputType
   */

  export type Tb_organizacoesCountOutputType = {
    tb_administradores: number
    tb_usuarios: number
  }

  export type Tb_organizacoesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_administradores?: boolean | Tb_organizacoesCountOutputTypeCountTb_administradoresArgs
    tb_usuarios?: boolean | Tb_organizacoesCountOutputTypeCountTb_usuariosArgs
  }

  // Custom InputTypes
  /**
   * Tb_organizacoesCountOutputType without action
   */
  export type Tb_organizacoesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tb_organizacoesCountOutputType
     */
    select?: Tb_organizacoesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tb_organizacoesCountOutputType without action
   */
  export type Tb_organizacoesCountOutputTypeCountTb_administradoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_administradoresWhereInput
  }

  /**
   * Tb_organizacoesCountOutputType without action
   */
  export type Tb_organizacoesCountOutputTypeCountTb_usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_usuariosWhereInput
  }


  /**
   * Count Type Tb_produtos_estoqueCountOutputType
   */

  export type Tb_produtos_estoqueCountOutputType = {
    tb_movimentacoes_estoque: number
  }

  export type Tb_produtos_estoqueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_movimentacoes_estoque?: boolean | Tb_produtos_estoqueCountOutputTypeCountTb_movimentacoes_estoqueArgs
  }

  // Custom InputTypes
  /**
   * Tb_produtos_estoqueCountOutputType without action
   */
  export type Tb_produtos_estoqueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tb_produtos_estoqueCountOutputType
     */
    select?: Tb_produtos_estoqueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tb_produtos_estoqueCountOutputType without action
   */
  export type Tb_produtos_estoqueCountOutputTypeCountTb_movimentacoes_estoqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_movimentacoes_estoqueWhereInput
  }


  /**
   * Count Type Tb_usuariosCountOutputType
   */

  export type Tb_usuariosCountOutputType = {
    tb_interacoes: number
    tb_produtos_estoque: number
    tb_safras: number
  }

  export type Tb_usuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_interacoes?: boolean | Tb_usuariosCountOutputTypeCountTb_interacoesArgs
    tb_produtos_estoque?: boolean | Tb_usuariosCountOutputTypeCountTb_produtos_estoqueArgs
    tb_safras?: boolean | Tb_usuariosCountOutputTypeCountTb_safrasArgs
  }

  // Custom InputTypes
  /**
   * Tb_usuariosCountOutputType without action
   */
  export type Tb_usuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tb_usuariosCountOutputType
     */
    select?: Tb_usuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tb_usuariosCountOutputType without action
   */
  export type Tb_usuariosCountOutputTypeCountTb_interacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_interacoesWhereInput
  }

  /**
   * Tb_usuariosCountOutputType without action
   */
  export type Tb_usuariosCountOutputTypeCountTb_produtos_estoqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_produtos_estoqueWhereInput
  }

  /**
   * Tb_usuariosCountOutputType without action
   */
  export type Tb_usuariosCountOutputTypeCountTb_safrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_safrasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model tb_administradores
   */

  export type AggregateTb_administradores = {
    _count: Tb_administradoresCountAggregateOutputType | null
    _avg: Tb_administradoresAvgAggregateOutputType | null
    _sum: Tb_administradoresSumAggregateOutputType | null
    _min: Tb_administradoresMinAggregateOutputType | null
    _max: Tb_administradoresMaxAggregateOutputType | null
  }

  export type Tb_administradoresAvgAggregateOutputType = {
    id: number | null
    organizacao_id: number | null
  }

  export type Tb_administradoresSumAggregateOutputType = {
    id: number | null
    organizacao_id: number | null
  }

  export type Tb_administradoresMinAggregateOutputType = {
    id: number | null
    organizacao_id: number | null
    nome: string | null
    email: string | null
    senha_hash: string | null
    cargo: string | null
    ativo: string | null
    data_cadastro: Date | null
  }

  export type Tb_administradoresMaxAggregateOutputType = {
    id: number | null
    organizacao_id: number | null
    nome: string | null
    email: string | null
    senha_hash: string | null
    cargo: string | null
    ativo: string | null
    data_cadastro: Date | null
  }

  export type Tb_administradoresCountAggregateOutputType = {
    id: number
    organizacao_id: number
    nome: number
    email: number
    senha_hash: number
    cargo: number
    ativo: number
    data_cadastro: number
    _all: number
  }


  export type Tb_administradoresAvgAggregateInputType = {
    id?: true
    organizacao_id?: true
  }

  export type Tb_administradoresSumAggregateInputType = {
    id?: true
    organizacao_id?: true
  }

  export type Tb_administradoresMinAggregateInputType = {
    id?: true
    organizacao_id?: true
    nome?: true
    email?: true
    senha_hash?: true
    cargo?: true
    ativo?: true
    data_cadastro?: true
  }

  export type Tb_administradoresMaxAggregateInputType = {
    id?: true
    organizacao_id?: true
    nome?: true
    email?: true
    senha_hash?: true
    cargo?: true
    ativo?: true
    data_cadastro?: true
  }

  export type Tb_administradoresCountAggregateInputType = {
    id?: true
    organizacao_id?: true
    nome?: true
    email?: true
    senha_hash?: true
    cargo?: true
    ativo?: true
    data_cadastro?: true
    _all?: true
  }

  export type Tb_administradoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_administradores to aggregate.
     */
    where?: tb_administradoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_administradores to fetch.
     */
    orderBy?: tb_administradoresOrderByWithRelationInput | tb_administradoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_administradoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_administradores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_administradores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_administradores
    **/
    _count?: true | Tb_administradoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_administradoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_administradoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_administradoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_administradoresMaxAggregateInputType
  }

  export type GetTb_administradoresAggregateType<T extends Tb_administradoresAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_administradores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_administradores[P]>
      : GetScalarType<T[P], AggregateTb_administradores[P]>
  }




  export type tb_administradoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_administradoresWhereInput
    orderBy?: tb_administradoresOrderByWithAggregationInput | tb_administradoresOrderByWithAggregationInput[]
    by: Tb_administradoresScalarFieldEnum[] | Tb_administradoresScalarFieldEnum
    having?: tb_administradoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_administradoresCountAggregateInputType | true
    _avg?: Tb_administradoresAvgAggregateInputType
    _sum?: Tb_administradoresSumAggregateInputType
    _min?: Tb_administradoresMinAggregateInputType
    _max?: Tb_administradoresMaxAggregateInputType
  }

  export type Tb_administradoresGroupByOutputType = {
    id: number
    organizacao_id: number
    nome: string
    email: string
    senha_hash: string
    cargo: string | null
    ativo: string | null
    data_cadastro: Date | null
    _count: Tb_administradoresCountAggregateOutputType | null
    _avg: Tb_administradoresAvgAggregateOutputType | null
    _sum: Tb_administradoresSumAggregateOutputType | null
    _min: Tb_administradoresMinAggregateOutputType | null
    _max: Tb_administradoresMaxAggregateOutputType | null
  }

  type GetTb_administradoresGroupByPayload<T extends tb_administradoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_administradoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_administradoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_administradoresGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_administradoresGroupByOutputType[P]>
        }
      >
    >


  export type tb_administradoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizacao_id?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    cargo?: boolean
    ativo?: boolean
    data_cadastro?: boolean
    tb_organizacoes?: boolean | tb_organizacoesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_administradores"]>

  export type tb_administradoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizacao_id?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    cargo?: boolean
    ativo?: boolean
    data_cadastro?: boolean
    tb_organizacoes?: boolean | tb_organizacoesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_administradores"]>

  export type tb_administradoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizacao_id?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    cargo?: boolean
    ativo?: boolean
    data_cadastro?: boolean
    tb_organizacoes?: boolean | tb_organizacoesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_administradores"]>

  export type tb_administradoresSelectScalar = {
    id?: boolean
    organizacao_id?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    cargo?: boolean
    ativo?: boolean
    data_cadastro?: boolean
  }

  export type tb_administradoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizacao_id" | "nome" | "email" | "senha_hash" | "cargo" | "ativo" | "data_cadastro", ExtArgs["result"]["tb_administradores"]>
  export type tb_administradoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_organizacoes?: boolean | tb_organizacoesDefaultArgs<ExtArgs>
  }
  export type tb_administradoresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_organizacoes?: boolean | tb_organizacoesDefaultArgs<ExtArgs>
  }
  export type tb_administradoresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_organizacoes?: boolean | tb_organizacoesDefaultArgs<ExtArgs>
  }

  export type $tb_administradoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_administradores"
    objects: {
      tb_organizacoes: Prisma.$tb_organizacoesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      organizacao_id: number
      nome: string
      email: string
      senha_hash: string
      cargo: string | null
      ativo: string | null
      data_cadastro: Date | null
    }, ExtArgs["result"]["tb_administradores"]>
    composites: {}
  }

  type tb_administradoresGetPayload<S extends boolean | null | undefined | tb_administradoresDefaultArgs> = $Result.GetResult<Prisma.$tb_administradoresPayload, S>

  type tb_administradoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_administradoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_administradoresCountAggregateInputType | true
    }

  export interface tb_administradoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_administradores'], meta: { name: 'tb_administradores' } }
    /**
     * Find zero or one Tb_administradores that matches the filter.
     * @param {tb_administradoresFindUniqueArgs} args - Arguments to find a Tb_administradores
     * @example
     * // Get one Tb_administradores
     * const tb_administradores = await prisma.tb_administradores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_administradoresFindUniqueArgs>(args: SelectSubset<T, tb_administradoresFindUniqueArgs<ExtArgs>>): Prisma__tb_administradoresClient<$Result.GetResult<Prisma.$tb_administradoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_administradores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_administradoresFindUniqueOrThrowArgs} args - Arguments to find a Tb_administradores
     * @example
     * // Get one Tb_administradores
     * const tb_administradores = await prisma.tb_administradores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_administradoresFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_administradoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_administradoresClient<$Result.GetResult<Prisma.$tb_administradoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_administradores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_administradoresFindFirstArgs} args - Arguments to find a Tb_administradores
     * @example
     * // Get one Tb_administradores
     * const tb_administradores = await prisma.tb_administradores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_administradoresFindFirstArgs>(args?: SelectSubset<T, tb_administradoresFindFirstArgs<ExtArgs>>): Prisma__tb_administradoresClient<$Result.GetResult<Prisma.$tb_administradoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_administradores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_administradoresFindFirstOrThrowArgs} args - Arguments to find a Tb_administradores
     * @example
     * // Get one Tb_administradores
     * const tb_administradores = await prisma.tb_administradores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_administradoresFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_administradoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_administradoresClient<$Result.GetResult<Prisma.$tb_administradoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_administradores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_administradoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_administradores
     * const tb_administradores = await prisma.tb_administradores.findMany()
     * 
     * // Get first 10 Tb_administradores
     * const tb_administradores = await prisma.tb_administradores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_administradoresWithIdOnly = await prisma.tb_administradores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_administradoresFindManyArgs>(args?: SelectSubset<T, tb_administradoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_administradoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_administradores.
     * @param {tb_administradoresCreateArgs} args - Arguments to create a Tb_administradores.
     * @example
     * // Create one Tb_administradores
     * const Tb_administradores = await prisma.tb_administradores.create({
     *   data: {
     *     // ... data to create a Tb_administradores
     *   }
     * })
     * 
     */
    create<T extends tb_administradoresCreateArgs>(args: SelectSubset<T, tb_administradoresCreateArgs<ExtArgs>>): Prisma__tb_administradoresClient<$Result.GetResult<Prisma.$tb_administradoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_administradores.
     * @param {tb_administradoresCreateManyArgs} args - Arguments to create many Tb_administradores.
     * @example
     * // Create many Tb_administradores
     * const tb_administradores = await prisma.tb_administradores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_administradoresCreateManyArgs>(args?: SelectSubset<T, tb_administradoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tb_administradores and returns the data saved in the database.
     * @param {tb_administradoresCreateManyAndReturnArgs} args - Arguments to create many Tb_administradores.
     * @example
     * // Create many Tb_administradores
     * const tb_administradores = await prisma.tb_administradores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tb_administradores and only return the `id`
     * const tb_administradoresWithIdOnly = await prisma.tb_administradores.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tb_administradoresCreateManyAndReturnArgs>(args?: SelectSubset<T, tb_administradoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_administradoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tb_administradores.
     * @param {tb_administradoresDeleteArgs} args - Arguments to delete one Tb_administradores.
     * @example
     * // Delete one Tb_administradores
     * const Tb_administradores = await prisma.tb_administradores.delete({
     *   where: {
     *     // ... filter to delete one Tb_administradores
     *   }
     * })
     * 
     */
    delete<T extends tb_administradoresDeleteArgs>(args: SelectSubset<T, tb_administradoresDeleteArgs<ExtArgs>>): Prisma__tb_administradoresClient<$Result.GetResult<Prisma.$tb_administradoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_administradores.
     * @param {tb_administradoresUpdateArgs} args - Arguments to update one Tb_administradores.
     * @example
     * // Update one Tb_administradores
     * const tb_administradores = await prisma.tb_administradores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_administradoresUpdateArgs>(args: SelectSubset<T, tb_administradoresUpdateArgs<ExtArgs>>): Prisma__tb_administradoresClient<$Result.GetResult<Prisma.$tb_administradoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_administradores.
     * @param {tb_administradoresDeleteManyArgs} args - Arguments to filter Tb_administradores to delete.
     * @example
     * // Delete a few Tb_administradores
     * const { count } = await prisma.tb_administradores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_administradoresDeleteManyArgs>(args?: SelectSubset<T, tb_administradoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_administradores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_administradoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_administradores
     * const tb_administradores = await prisma.tb_administradores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_administradoresUpdateManyArgs>(args: SelectSubset<T, tb_administradoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_administradores and returns the data updated in the database.
     * @param {tb_administradoresUpdateManyAndReturnArgs} args - Arguments to update many Tb_administradores.
     * @example
     * // Update many Tb_administradores
     * const tb_administradores = await prisma.tb_administradores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tb_administradores and only return the `id`
     * const tb_administradoresWithIdOnly = await prisma.tb_administradores.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends tb_administradoresUpdateManyAndReturnArgs>(args: SelectSubset<T, tb_administradoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_administradoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tb_administradores.
     * @param {tb_administradoresUpsertArgs} args - Arguments to update or create a Tb_administradores.
     * @example
     * // Update or create a Tb_administradores
     * const tb_administradores = await prisma.tb_administradores.upsert({
     *   create: {
     *     // ... data to create a Tb_administradores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_administradores we want to update
     *   }
     * })
     */
    upsert<T extends tb_administradoresUpsertArgs>(args: SelectSubset<T, tb_administradoresUpsertArgs<ExtArgs>>): Prisma__tb_administradoresClient<$Result.GetResult<Prisma.$tb_administradoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_administradores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_administradoresCountArgs} args - Arguments to filter Tb_administradores to count.
     * @example
     * // Count the number of Tb_administradores
     * const count = await prisma.tb_administradores.count({
     *   where: {
     *     // ... the filter for the Tb_administradores we want to count
     *   }
     * })
    **/
    count<T extends tb_administradoresCountArgs>(
      args?: Subset<T, tb_administradoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_administradoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_administradores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_administradoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_administradoresAggregateArgs>(args: Subset<T, Tb_administradoresAggregateArgs>): Prisma.PrismaPromise<GetTb_administradoresAggregateType<T>>

    /**
     * Group by Tb_administradores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_administradoresGroupByArgs} args - Group by arguments.
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
      T extends tb_administradoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_administradoresGroupByArgs['orderBy'] }
        : { orderBy?: tb_administradoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_administradoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_administradoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_administradores model
   */
  readonly fields: tb_administradoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_administradores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_administradoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tb_organizacoes<T extends tb_organizacoesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tb_organizacoesDefaultArgs<ExtArgs>>): Prisma__tb_organizacoesClient<$Result.GetResult<Prisma.$tb_organizacoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tb_administradores model
   */
  interface tb_administradoresFieldRefs {
    readonly id: FieldRef<"tb_administradores", 'Int'>
    readonly organizacao_id: FieldRef<"tb_administradores", 'Int'>
    readonly nome: FieldRef<"tb_administradores", 'String'>
    readonly email: FieldRef<"tb_administradores", 'String'>
    readonly senha_hash: FieldRef<"tb_administradores", 'String'>
    readonly cargo: FieldRef<"tb_administradores", 'String'>
    readonly ativo: FieldRef<"tb_administradores", 'String'>
    readonly data_cadastro: FieldRef<"tb_administradores", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tb_administradores findUnique
   */
  export type tb_administradoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_administradores
     */
    select?: tb_administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_administradores
     */
    omit?: tb_administradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_administradoresInclude<ExtArgs> | null
    /**
     * Filter, which tb_administradores to fetch.
     */
    where: tb_administradoresWhereUniqueInput
  }

  /**
   * tb_administradores findUniqueOrThrow
   */
  export type tb_administradoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_administradores
     */
    select?: tb_administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_administradores
     */
    omit?: tb_administradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_administradoresInclude<ExtArgs> | null
    /**
     * Filter, which tb_administradores to fetch.
     */
    where: tb_administradoresWhereUniqueInput
  }

  /**
   * tb_administradores findFirst
   */
  export type tb_administradoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_administradores
     */
    select?: tb_administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_administradores
     */
    omit?: tb_administradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_administradoresInclude<ExtArgs> | null
    /**
     * Filter, which tb_administradores to fetch.
     */
    where?: tb_administradoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_administradores to fetch.
     */
    orderBy?: tb_administradoresOrderByWithRelationInput | tb_administradoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_administradores.
     */
    cursor?: tb_administradoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_administradores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_administradores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_administradores.
     */
    distinct?: Tb_administradoresScalarFieldEnum | Tb_administradoresScalarFieldEnum[]
  }

  /**
   * tb_administradores findFirstOrThrow
   */
  export type tb_administradoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_administradores
     */
    select?: tb_administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_administradores
     */
    omit?: tb_administradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_administradoresInclude<ExtArgs> | null
    /**
     * Filter, which tb_administradores to fetch.
     */
    where?: tb_administradoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_administradores to fetch.
     */
    orderBy?: tb_administradoresOrderByWithRelationInput | tb_administradoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_administradores.
     */
    cursor?: tb_administradoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_administradores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_administradores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_administradores.
     */
    distinct?: Tb_administradoresScalarFieldEnum | Tb_administradoresScalarFieldEnum[]
  }

  /**
   * tb_administradores findMany
   */
  export type tb_administradoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_administradores
     */
    select?: tb_administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_administradores
     */
    omit?: tb_administradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_administradoresInclude<ExtArgs> | null
    /**
     * Filter, which tb_administradores to fetch.
     */
    where?: tb_administradoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_administradores to fetch.
     */
    orderBy?: tb_administradoresOrderByWithRelationInput | tb_administradoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_administradores.
     */
    cursor?: tb_administradoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_administradores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_administradores.
     */
    skip?: number
    distinct?: Tb_administradoresScalarFieldEnum | Tb_administradoresScalarFieldEnum[]
  }

  /**
   * tb_administradores create
   */
  export type tb_administradoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_administradores
     */
    select?: tb_administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_administradores
     */
    omit?: tb_administradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_administradoresInclude<ExtArgs> | null
    /**
     * The data needed to create a tb_administradores.
     */
    data: XOR<tb_administradoresCreateInput, tb_administradoresUncheckedCreateInput>
  }

  /**
   * tb_administradores createMany
   */
  export type tb_administradoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_administradores.
     */
    data: tb_administradoresCreateManyInput | tb_administradoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_administradores createManyAndReturn
   */
  export type tb_administradoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_administradores
     */
    select?: tb_administradoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_administradores
     */
    omit?: tb_administradoresOmit<ExtArgs> | null
    /**
     * The data used to create many tb_administradores.
     */
    data: tb_administradoresCreateManyInput | tb_administradoresCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_administradoresIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tb_administradores update
   */
  export type tb_administradoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_administradores
     */
    select?: tb_administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_administradores
     */
    omit?: tb_administradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_administradoresInclude<ExtArgs> | null
    /**
     * The data needed to update a tb_administradores.
     */
    data: XOR<tb_administradoresUpdateInput, tb_administradoresUncheckedUpdateInput>
    /**
     * Choose, which tb_administradores to update.
     */
    where: tb_administradoresWhereUniqueInput
  }

  /**
   * tb_administradores updateMany
   */
  export type tb_administradoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_administradores.
     */
    data: XOR<tb_administradoresUpdateManyMutationInput, tb_administradoresUncheckedUpdateManyInput>
    /**
     * Filter which tb_administradores to update
     */
    where?: tb_administradoresWhereInput
    /**
     * Limit how many tb_administradores to update.
     */
    limit?: number
  }

  /**
   * tb_administradores updateManyAndReturn
   */
  export type tb_administradoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_administradores
     */
    select?: tb_administradoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_administradores
     */
    omit?: tb_administradoresOmit<ExtArgs> | null
    /**
     * The data used to update tb_administradores.
     */
    data: XOR<tb_administradoresUpdateManyMutationInput, tb_administradoresUncheckedUpdateManyInput>
    /**
     * Filter which tb_administradores to update
     */
    where?: tb_administradoresWhereInput
    /**
     * Limit how many tb_administradores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_administradoresIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tb_administradores upsert
   */
  export type tb_administradoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_administradores
     */
    select?: tb_administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_administradores
     */
    omit?: tb_administradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_administradoresInclude<ExtArgs> | null
    /**
     * The filter to search for the tb_administradores to update in case it exists.
     */
    where: tb_administradoresWhereUniqueInput
    /**
     * In case the tb_administradores found by the `where` argument doesn't exist, create a new tb_administradores with this data.
     */
    create: XOR<tb_administradoresCreateInput, tb_administradoresUncheckedCreateInput>
    /**
     * In case the tb_administradores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_administradoresUpdateInput, tb_administradoresUncheckedUpdateInput>
  }

  /**
   * tb_administradores delete
   */
  export type tb_administradoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_administradores
     */
    select?: tb_administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_administradores
     */
    omit?: tb_administradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_administradoresInclude<ExtArgs> | null
    /**
     * Filter which tb_administradores to delete.
     */
    where: tb_administradoresWhereUniqueInput
  }

  /**
   * tb_administradores deleteMany
   */
  export type tb_administradoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_administradores to delete
     */
    where?: tb_administradoresWhereInput
    /**
     * Limit how many tb_administradores to delete.
     */
    limit?: number
  }

  /**
   * tb_administradores without action
   */
  export type tb_administradoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_administradores
     */
    select?: tb_administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_administradores
     */
    omit?: tb_administradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_administradoresInclude<ExtArgs> | null
  }


  /**
   * Model tb_conversation_contexts
   */

  export type AggregateTb_conversation_contexts = {
    _count: Tb_conversation_contextsCountAggregateOutputType | null
    _min: Tb_conversation_contextsMinAggregateOutputType | null
    _max: Tb_conversation_contextsMaxAggregateOutputType | null
  }

  export type Tb_conversation_contextsMinAggregateOutputType = {
    whatsapp_id: string | null
    last_updated: Date | null
  }

  export type Tb_conversation_contextsMaxAggregateOutputType = {
    whatsapp_id: string | null
    last_updated: Date | null
  }

  export type Tb_conversation_contextsCountAggregateOutputType = {
    whatsapp_id: number
    context: number
    last_updated: number
    _all: number
  }


  export type Tb_conversation_contextsMinAggregateInputType = {
    whatsapp_id?: true
    last_updated?: true
  }

  export type Tb_conversation_contextsMaxAggregateInputType = {
    whatsapp_id?: true
    last_updated?: true
  }

  export type Tb_conversation_contextsCountAggregateInputType = {
    whatsapp_id?: true
    context?: true
    last_updated?: true
    _all?: true
  }

  export type Tb_conversation_contextsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_conversation_contexts to aggregate.
     */
    where?: tb_conversation_contextsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_conversation_contexts to fetch.
     */
    orderBy?: tb_conversation_contextsOrderByWithRelationInput | tb_conversation_contextsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_conversation_contextsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_conversation_contexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_conversation_contexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_conversation_contexts
    **/
    _count?: true | Tb_conversation_contextsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_conversation_contextsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_conversation_contextsMaxAggregateInputType
  }

  export type GetTb_conversation_contextsAggregateType<T extends Tb_conversation_contextsAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_conversation_contexts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_conversation_contexts[P]>
      : GetScalarType<T[P], AggregateTb_conversation_contexts[P]>
  }




  export type tb_conversation_contextsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_conversation_contextsWhereInput
    orderBy?: tb_conversation_contextsOrderByWithAggregationInput | tb_conversation_contextsOrderByWithAggregationInput[]
    by: Tb_conversation_contextsScalarFieldEnum[] | Tb_conversation_contextsScalarFieldEnum
    having?: tb_conversation_contextsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_conversation_contextsCountAggregateInputType | true
    _min?: Tb_conversation_contextsMinAggregateInputType
    _max?: Tb_conversation_contextsMaxAggregateInputType
  }

  export type Tb_conversation_contextsGroupByOutputType = {
    whatsapp_id: string
    context: JsonValue | null
    last_updated: Date | null
    _count: Tb_conversation_contextsCountAggregateOutputType | null
    _min: Tb_conversation_contextsMinAggregateOutputType | null
    _max: Tb_conversation_contextsMaxAggregateOutputType | null
  }

  type GetTb_conversation_contextsGroupByPayload<T extends tb_conversation_contextsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_conversation_contextsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_conversation_contextsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_conversation_contextsGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_conversation_contextsGroupByOutputType[P]>
        }
      >
    >


  export type tb_conversation_contextsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    whatsapp_id?: boolean
    context?: boolean
    last_updated?: boolean
  }, ExtArgs["result"]["tb_conversation_contexts"]>

  export type tb_conversation_contextsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    whatsapp_id?: boolean
    context?: boolean
    last_updated?: boolean
  }, ExtArgs["result"]["tb_conversation_contexts"]>

  export type tb_conversation_contextsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    whatsapp_id?: boolean
    context?: boolean
    last_updated?: boolean
  }, ExtArgs["result"]["tb_conversation_contexts"]>

  export type tb_conversation_contextsSelectScalar = {
    whatsapp_id?: boolean
    context?: boolean
    last_updated?: boolean
  }

  export type tb_conversation_contextsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"whatsapp_id" | "context" | "last_updated", ExtArgs["result"]["tb_conversation_contexts"]>

  export type $tb_conversation_contextsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_conversation_contexts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      whatsapp_id: string
      context: Prisma.JsonValue | null
      last_updated: Date | null
    }, ExtArgs["result"]["tb_conversation_contexts"]>
    composites: {}
  }

  type tb_conversation_contextsGetPayload<S extends boolean | null | undefined | tb_conversation_contextsDefaultArgs> = $Result.GetResult<Prisma.$tb_conversation_contextsPayload, S>

  type tb_conversation_contextsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_conversation_contextsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_conversation_contextsCountAggregateInputType | true
    }

  export interface tb_conversation_contextsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_conversation_contexts'], meta: { name: 'tb_conversation_contexts' } }
    /**
     * Find zero or one Tb_conversation_contexts that matches the filter.
     * @param {tb_conversation_contextsFindUniqueArgs} args - Arguments to find a Tb_conversation_contexts
     * @example
     * // Get one Tb_conversation_contexts
     * const tb_conversation_contexts = await prisma.tb_conversation_contexts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_conversation_contextsFindUniqueArgs>(args: SelectSubset<T, tb_conversation_contextsFindUniqueArgs<ExtArgs>>): Prisma__tb_conversation_contextsClient<$Result.GetResult<Prisma.$tb_conversation_contextsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_conversation_contexts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_conversation_contextsFindUniqueOrThrowArgs} args - Arguments to find a Tb_conversation_contexts
     * @example
     * // Get one Tb_conversation_contexts
     * const tb_conversation_contexts = await prisma.tb_conversation_contexts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_conversation_contextsFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_conversation_contextsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_conversation_contextsClient<$Result.GetResult<Prisma.$tb_conversation_contextsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_conversation_contexts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_conversation_contextsFindFirstArgs} args - Arguments to find a Tb_conversation_contexts
     * @example
     * // Get one Tb_conversation_contexts
     * const tb_conversation_contexts = await prisma.tb_conversation_contexts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_conversation_contextsFindFirstArgs>(args?: SelectSubset<T, tb_conversation_contextsFindFirstArgs<ExtArgs>>): Prisma__tb_conversation_contextsClient<$Result.GetResult<Prisma.$tb_conversation_contextsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_conversation_contexts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_conversation_contextsFindFirstOrThrowArgs} args - Arguments to find a Tb_conversation_contexts
     * @example
     * // Get one Tb_conversation_contexts
     * const tb_conversation_contexts = await prisma.tb_conversation_contexts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_conversation_contextsFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_conversation_contextsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_conversation_contextsClient<$Result.GetResult<Prisma.$tb_conversation_contextsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_conversation_contexts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_conversation_contextsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_conversation_contexts
     * const tb_conversation_contexts = await prisma.tb_conversation_contexts.findMany()
     * 
     * // Get first 10 Tb_conversation_contexts
     * const tb_conversation_contexts = await prisma.tb_conversation_contexts.findMany({ take: 10 })
     * 
     * // Only select the `whatsapp_id`
     * const tb_conversation_contextsWithWhatsapp_idOnly = await prisma.tb_conversation_contexts.findMany({ select: { whatsapp_id: true } })
     * 
     */
    findMany<T extends tb_conversation_contextsFindManyArgs>(args?: SelectSubset<T, tb_conversation_contextsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_conversation_contextsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_conversation_contexts.
     * @param {tb_conversation_contextsCreateArgs} args - Arguments to create a Tb_conversation_contexts.
     * @example
     * // Create one Tb_conversation_contexts
     * const Tb_conversation_contexts = await prisma.tb_conversation_contexts.create({
     *   data: {
     *     // ... data to create a Tb_conversation_contexts
     *   }
     * })
     * 
     */
    create<T extends tb_conversation_contextsCreateArgs>(args: SelectSubset<T, tb_conversation_contextsCreateArgs<ExtArgs>>): Prisma__tb_conversation_contextsClient<$Result.GetResult<Prisma.$tb_conversation_contextsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_conversation_contexts.
     * @param {tb_conversation_contextsCreateManyArgs} args - Arguments to create many Tb_conversation_contexts.
     * @example
     * // Create many Tb_conversation_contexts
     * const tb_conversation_contexts = await prisma.tb_conversation_contexts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_conversation_contextsCreateManyArgs>(args?: SelectSubset<T, tb_conversation_contextsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tb_conversation_contexts and returns the data saved in the database.
     * @param {tb_conversation_contextsCreateManyAndReturnArgs} args - Arguments to create many Tb_conversation_contexts.
     * @example
     * // Create many Tb_conversation_contexts
     * const tb_conversation_contexts = await prisma.tb_conversation_contexts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tb_conversation_contexts and only return the `whatsapp_id`
     * const tb_conversation_contextsWithWhatsapp_idOnly = await prisma.tb_conversation_contexts.createManyAndReturn({
     *   select: { whatsapp_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tb_conversation_contextsCreateManyAndReturnArgs>(args?: SelectSubset<T, tb_conversation_contextsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_conversation_contextsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tb_conversation_contexts.
     * @param {tb_conversation_contextsDeleteArgs} args - Arguments to delete one Tb_conversation_contexts.
     * @example
     * // Delete one Tb_conversation_contexts
     * const Tb_conversation_contexts = await prisma.tb_conversation_contexts.delete({
     *   where: {
     *     // ... filter to delete one Tb_conversation_contexts
     *   }
     * })
     * 
     */
    delete<T extends tb_conversation_contextsDeleteArgs>(args: SelectSubset<T, tb_conversation_contextsDeleteArgs<ExtArgs>>): Prisma__tb_conversation_contextsClient<$Result.GetResult<Prisma.$tb_conversation_contextsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_conversation_contexts.
     * @param {tb_conversation_contextsUpdateArgs} args - Arguments to update one Tb_conversation_contexts.
     * @example
     * // Update one Tb_conversation_contexts
     * const tb_conversation_contexts = await prisma.tb_conversation_contexts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_conversation_contextsUpdateArgs>(args: SelectSubset<T, tb_conversation_contextsUpdateArgs<ExtArgs>>): Prisma__tb_conversation_contextsClient<$Result.GetResult<Prisma.$tb_conversation_contextsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_conversation_contexts.
     * @param {tb_conversation_contextsDeleteManyArgs} args - Arguments to filter Tb_conversation_contexts to delete.
     * @example
     * // Delete a few Tb_conversation_contexts
     * const { count } = await prisma.tb_conversation_contexts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_conversation_contextsDeleteManyArgs>(args?: SelectSubset<T, tb_conversation_contextsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_conversation_contexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_conversation_contextsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_conversation_contexts
     * const tb_conversation_contexts = await prisma.tb_conversation_contexts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_conversation_contextsUpdateManyArgs>(args: SelectSubset<T, tb_conversation_contextsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_conversation_contexts and returns the data updated in the database.
     * @param {tb_conversation_contextsUpdateManyAndReturnArgs} args - Arguments to update many Tb_conversation_contexts.
     * @example
     * // Update many Tb_conversation_contexts
     * const tb_conversation_contexts = await prisma.tb_conversation_contexts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tb_conversation_contexts and only return the `whatsapp_id`
     * const tb_conversation_contextsWithWhatsapp_idOnly = await prisma.tb_conversation_contexts.updateManyAndReturn({
     *   select: { whatsapp_id: true },
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
    updateManyAndReturn<T extends tb_conversation_contextsUpdateManyAndReturnArgs>(args: SelectSubset<T, tb_conversation_contextsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_conversation_contextsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tb_conversation_contexts.
     * @param {tb_conversation_contextsUpsertArgs} args - Arguments to update or create a Tb_conversation_contexts.
     * @example
     * // Update or create a Tb_conversation_contexts
     * const tb_conversation_contexts = await prisma.tb_conversation_contexts.upsert({
     *   create: {
     *     // ... data to create a Tb_conversation_contexts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_conversation_contexts we want to update
     *   }
     * })
     */
    upsert<T extends tb_conversation_contextsUpsertArgs>(args: SelectSubset<T, tb_conversation_contextsUpsertArgs<ExtArgs>>): Prisma__tb_conversation_contextsClient<$Result.GetResult<Prisma.$tb_conversation_contextsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_conversation_contexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_conversation_contextsCountArgs} args - Arguments to filter Tb_conversation_contexts to count.
     * @example
     * // Count the number of Tb_conversation_contexts
     * const count = await prisma.tb_conversation_contexts.count({
     *   where: {
     *     // ... the filter for the Tb_conversation_contexts we want to count
     *   }
     * })
    **/
    count<T extends tb_conversation_contextsCountArgs>(
      args?: Subset<T, tb_conversation_contextsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_conversation_contextsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_conversation_contexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_conversation_contextsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_conversation_contextsAggregateArgs>(args: Subset<T, Tb_conversation_contextsAggregateArgs>): Prisma.PrismaPromise<GetTb_conversation_contextsAggregateType<T>>

    /**
     * Group by Tb_conversation_contexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_conversation_contextsGroupByArgs} args - Group by arguments.
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
      T extends tb_conversation_contextsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_conversation_contextsGroupByArgs['orderBy'] }
        : { orderBy?: tb_conversation_contextsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_conversation_contextsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_conversation_contextsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_conversation_contexts model
   */
  readonly fields: tb_conversation_contextsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_conversation_contexts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_conversation_contextsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tb_conversation_contexts model
   */
  interface tb_conversation_contextsFieldRefs {
    readonly whatsapp_id: FieldRef<"tb_conversation_contexts", 'String'>
    readonly context: FieldRef<"tb_conversation_contexts", 'Json'>
    readonly last_updated: FieldRef<"tb_conversation_contexts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tb_conversation_contexts findUnique
   */
  export type tb_conversation_contextsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_conversation_contexts
     */
    select?: tb_conversation_contextsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_conversation_contexts
     */
    omit?: tb_conversation_contextsOmit<ExtArgs> | null
    /**
     * Filter, which tb_conversation_contexts to fetch.
     */
    where: tb_conversation_contextsWhereUniqueInput
  }

  /**
   * tb_conversation_contexts findUniqueOrThrow
   */
  export type tb_conversation_contextsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_conversation_contexts
     */
    select?: tb_conversation_contextsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_conversation_contexts
     */
    omit?: tb_conversation_contextsOmit<ExtArgs> | null
    /**
     * Filter, which tb_conversation_contexts to fetch.
     */
    where: tb_conversation_contextsWhereUniqueInput
  }

  /**
   * tb_conversation_contexts findFirst
   */
  export type tb_conversation_contextsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_conversation_contexts
     */
    select?: tb_conversation_contextsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_conversation_contexts
     */
    omit?: tb_conversation_contextsOmit<ExtArgs> | null
    /**
     * Filter, which tb_conversation_contexts to fetch.
     */
    where?: tb_conversation_contextsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_conversation_contexts to fetch.
     */
    orderBy?: tb_conversation_contextsOrderByWithRelationInput | tb_conversation_contextsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_conversation_contexts.
     */
    cursor?: tb_conversation_contextsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_conversation_contexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_conversation_contexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_conversation_contexts.
     */
    distinct?: Tb_conversation_contextsScalarFieldEnum | Tb_conversation_contextsScalarFieldEnum[]
  }

  /**
   * tb_conversation_contexts findFirstOrThrow
   */
  export type tb_conversation_contextsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_conversation_contexts
     */
    select?: tb_conversation_contextsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_conversation_contexts
     */
    omit?: tb_conversation_contextsOmit<ExtArgs> | null
    /**
     * Filter, which tb_conversation_contexts to fetch.
     */
    where?: tb_conversation_contextsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_conversation_contexts to fetch.
     */
    orderBy?: tb_conversation_contextsOrderByWithRelationInput | tb_conversation_contextsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_conversation_contexts.
     */
    cursor?: tb_conversation_contextsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_conversation_contexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_conversation_contexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_conversation_contexts.
     */
    distinct?: Tb_conversation_contextsScalarFieldEnum | Tb_conversation_contextsScalarFieldEnum[]
  }

  /**
   * tb_conversation_contexts findMany
   */
  export type tb_conversation_contextsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_conversation_contexts
     */
    select?: tb_conversation_contextsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_conversation_contexts
     */
    omit?: tb_conversation_contextsOmit<ExtArgs> | null
    /**
     * Filter, which tb_conversation_contexts to fetch.
     */
    where?: tb_conversation_contextsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_conversation_contexts to fetch.
     */
    orderBy?: tb_conversation_contextsOrderByWithRelationInput | tb_conversation_contextsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_conversation_contexts.
     */
    cursor?: tb_conversation_contextsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_conversation_contexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_conversation_contexts.
     */
    skip?: number
    distinct?: Tb_conversation_contextsScalarFieldEnum | Tb_conversation_contextsScalarFieldEnum[]
  }

  /**
   * tb_conversation_contexts create
   */
  export type tb_conversation_contextsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_conversation_contexts
     */
    select?: tb_conversation_contextsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_conversation_contexts
     */
    omit?: tb_conversation_contextsOmit<ExtArgs> | null
    /**
     * The data needed to create a tb_conversation_contexts.
     */
    data: XOR<tb_conversation_contextsCreateInput, tb_conversation_contextsUncheckedCreateInput>
  }

  /**
   * tb_conversation_contexts createMany
   */
  export type tb_conversation_contextsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_conversation_contexts.
     */
    data: tb_conversation_contextsCreateManyInput | tb_conversation_contextsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_conversation_contexts createManyAndReturn
   */
  export type tb_conversation_contextsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_conversation_contexts
     */
    select?: tb_conversation_contextsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_conversation_contexts
     */
    omit?: tb_conversation_contextsOmit<ExtArgs> | null
    /**
     * The data used to create many tb_conversation_contexts.
     */
    data: tb_conversation_contextsCreateManyInput | tb_conversation_contextsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_conversation_contexts update
   */
  export type tb_conversation_contextsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_conversation_contexts
     */
    select?: tb_conversation_contextsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_conversation_contexts
     */
    omit?: tb_conversation_contextsOmit<ExtArgs> | null
    /**
     * The data needed to update a tb_conversation_contexts.
     */
    data: XOR<tb_conversation_contextsUpdateInput, tb_conversation_contextsUncheckedUpdateInput>
    /**
     * Choose, which tb_conversation_contexts to update.
     */
    where: tb_conversation_contextsWhereUniqueInput
  }

  /**
   * tb_conversation_contexts updateMany
   */
  export type tb_conversation_contextsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_conversation_contexts.
     */
    data: XOR<tb_conversation_contextsUpdateManyMutationInput, tb_conversation_contextsUncheckedUpdateManyInput>
    /**
     * Filter which tb_conversation_contexts to update
     */
    where?: tb_conversation_contextsWhereInput
    /**
     * Limit how many tb_conversation_contexts to update.
     */
    limit?: number
  }

  /**
   * tb_conversation_contexts updateManyAndReturn
   */
  export type tb_conversation_contextsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_conversation_contexts
     */
    select?: tb_conversation_contextsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_conversation_contexts
     */
    omit?: tb_conversation_contextsOmit<ExtArgs> | null
    /**
     * The data used to update tb_conversation_contexts.
     */
    data: XOR<tb_conversation_contextsUpdateManyMutationInput, tb_conversation_contextsUncheckedUpdateManyInput>
    /**
     * Filter which tb_conversation_contexts to update
     */
    where?: tb_conversation_contextsWhereInput
    /**
     * Limit how many tb_conversation_contexts to update.
     */
    limit?: number
  }

  /**
   * tb_conversation_contexts upsert
   */
  export type tb_conversation_contextsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_conversation_contexts
     */
    select?: tb_conversation_contextsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_conversation_contexts
     */
    omit?: tb_conversation_contextsOmit<ExtArgs> | null
    /**
     * The filter to search for the tb_conversation_contexts to update in case it exists.
     */
    where: tb_conversation_contextsWhereUniqueInput
    /**
     * In case the tb_conversation_contexts found by the `where` argument doesn't exist, create a new tb_conversation_contexts with this data.
     */
    create: XOR<tb_conversation_contextsCreateInput, tb_conversation_contextsUncheckedCreateInput>
    /**
     * In case the tb_conversation_contexts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_conversation_contextsUpdateInput, tb_conversation_contextsUncheckedUpdateInput>
  }

  /**
   * tb_conversation_contexts delete
   */
  export type tb_conversation_contextsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_conversation_contexts
     */
    select?: tb_conversation_contextsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_conversation_contexts
     */
    omit?: tb_conversation_contextsOmit<ExtArgs> | null
    /**
     * Filter which tb_conversation_contexts to delete.
     */
    where: tb_conversation_contextsWhereUniqueInput
  }

  /**
   * tb_conversation_contexts deleteMany
   */
  export type tb_conversation_contextsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_conversation_contexts to delete
     */
    where?: tb_conversation_contextsWhereInput
    /**
     * Limit how many tb_conversation_contexts to delete.
     */
    limit?: number
  }

  /**
   * tb_conversation_contexts without action
   */
  export type tb_conversation_contextsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_conversation_contexts
     */
    select?: tb_conversation_contextsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_conversation_contexts
     */
    omit?: tb_conversation_contextsOmit<ExtArgs> | null
  }


  /**
   * Model tb_intencoes
   */

  export type AggregateTb_intencoes = {
    _count: Tb_intencoesCountAggregateOutputType | null
    _avg: Tb_intencoesAvgAggregateOutputType | null
    _sum: Tb_intencoesSumAggregateOutputType | null
    _min: Tb_intencoesMinAggregateOutputType | null
    _max: Tb_intencoesMaxAggregateOutputType | null
  }

  export type Tb_intencoesAvgAggregateOutputType = {
    id: number | null
  }

  export type Tb_intencoesSumAggregateOutputType = {
    id: number | null
  }

  export type Tb_intencoesMinAggregateOutputType = {
    id: number | null
    nome_intencao: string | null
    descricao: string | null
  }

  export type Tb_intencoesMaxAggregateOutputType = {
    id: number | null
    nome_intencao: string | null
    descricao: string | null
  }

  export type Tb_intencoesCountAggregateOutputType = {
    id: number
    nome_intencao: number
    descricao: number
    _all: number
  }


  export type Tb_intencoesAvgAggregateInputType = {
    id?: true
  }

  export type Tb_intencoesSumAggregateInputType = {
    id?: true
  }

  export type Tb_intencoesMinAggregateInputType = {
    id?: true
    nome_intencao?: true
    descricao?: true
  }

  export type Tb_intencoesMaxAggregateInputType = {
    id?: true
    nome_intencao?: true
    descricao?: true
  }

  export type Tb_intencoesCountAggregateInputType = {
    id?: true
    nome_intencao?: true
    descricao?: true
    _all?: true
  }

  export type Tb_intencoesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_intencoes to aggregate.
     */
    where?: tb_intencoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_intencoes to fetch.
     */
    orderBy?: tb_intencoesOrderByWithRelationInput | tb_intencoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_intencoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_intencoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_intencoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_intencoes
    **/
    _count?: true | Tb_intencoesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_intencoesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_intencoesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_intencoesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_intencoesMaxAggregateInputType
  }

  export type GetTb_intencoesAggregateType<T extends Tb_intencoesAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_intencoes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_intencoes[P]>
      : GetScalarType<T[P], AggregateTb_intencoes[P]>
  }




  export type tb_intencoesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_intencoesWhereInput
    orderBy?: tb_intencoesOrderByWithAggregationInput | tb_intencoesOrderByWithAggregationInput[]
    by: Tb_intencoesScalarFieldEnum[] | Tb_intencoesScalarFieldEnum
    having?: tb_intencoesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_intencoesCountAggregateInputType | true
    _avg?: Tb_intencoesAvgAggregateInputType
    _sum?: Tb_intencoesSumAggregateInputType
    _min?: Tb_intencoesMinAggregateInputType
    _max?: Tb_intencoesMaxAggregateInputType
  }

  export type Tb_intencoesGroupByOutputType = {
    id: number
    nome_intencao: string
    descricao: string | null
    _count: Tb_intencoesCountAggregateOutputType | null
    _avg: Tb_intencoesAvgAggregateOutputType | null
    _sum: Tb_intencoesSumAggregateOutputType | null
    _min: Tb_intencoesMinAggregateOutputType | null
    _max: Tb_intencoesMaxAggregateOutputType | null
  }

  type GetTb_intencoesGroupByPayload<T extends tb_intencoesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_intencoesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_intencoesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_intencoesGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_intencoesGroupByOutputType[P]>
        }
      >
    >


  export type tb_intencoesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_intencao?: boolean
    descricao?: boolean
    tb_interacoes_intencoes?: boolean | tb_intencoes$tb_interacoes_intencoesArgs<ExtArgs>
    _count?: boolean | Tb_intencoesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_intencoes"]>

  export type tb_intencoesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_intencao?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["tb_intencoes"]>

  export type tb_intencoesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_intencao?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["tb_intencoes"]>

  export type tb_intencoesSelectScalar = {
    id?: boolean
    nome_intencao?: boolean
    descricao?: boolean
  }

  export type tb_intencoesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome_intencao" | "descricao", ExtArgs["result"]["tb_intencoes"]>
  export type tb_intencoesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_interacoes_intencoes?: boolean | tb_intencoes$tb_interacoes_intencoesArgs<ExtArgs>
    _count?: boolean | Tb_intencoesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tb_intencoesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tb_intencoesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tb_intencoesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_intencoes"
    objects: {
      tb_interacoes_intencoes: Prisma.$tb_interacoes_intencoesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome_intencao: string
      descricao: string | null
    }, ExtArgs["result"]["tb_intencoes"]>
    composites: {}
  }

  type tb_intencoesGetPayload<S extends boolean | null | undefined | tb_intencoesDefaultArgs> = $Result.GetResult<Prisma.$tb_intencoesPayload, S>

  type tb_intencoesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_intencoesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_intencoesCountAggregateInputType | true
    }

  export interface tb_intencoesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_intencoes'], meta: { name: 'tb_intencoes' } }
    /**
     * Find zero or one Tb_intencoes that matches the filter.
     * @param {tb_intencoesFindUniqueArgs} args - Arguments to find a Tb_intencoes
     * @example
     * // Get one Tb_intencoes
     * const tb_intencoes = await prisma.tb_intencoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_intencoesFindUniqueArgs>(args: SelectSubset<T, tb_intencoesFindUniqueArgs<ExtArgs>>): Prisma__tb_intencoesClient<$Result.GetResult<Prisma.$tb_intencoesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_intencoes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_intencoesFindUniqueOrThrowArgs} args - Arguments to find a Tb_intencoes
     * @example
     * // Get one Tb_intencoes
     * const tb_intencoes = await prisma.tb_intencoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_intencoesFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_intencoesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_intencoesClient<$Result.GetResult<Prisma.$tb_intencoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_intencoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_intencoesFindFirstArgs} args - Arguments to find a Tb_intencoes
     * @example
     * // Get one Tb_intencoes
     * const tb_intencoes = await prisma.tb_intencoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_intencoesFindFirstArgs>(args?: SelectSubset<T, tb_intencoesFindFirstArgs<ExtArgs>>): Prisma__tb_intencoesClient<$Result.GetResult<Prisma.$tb_intencoesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_intencoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_intencoesFindFirstOrThrowArgs} args - Arguments to find a Tb_intencoes
     * @example
     * // Get one Tb_intencoes
     * const tb_intencoes = await prisma.tb_intencoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_intencoesFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_intencoesFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_intencoesClient<$Result.GetResult<Prisma.$tb_intencoesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_intencoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_intencoesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_intencoes
     * const tb_intencoes = await prisma.tb_intencoes.findMany()
     * 
     * // Get first 10 Tb_intencoes
     * const tb_intencoes = await prisma.tb_intencoes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_intencoesWithIdOnly = await prisma.tb_intencoes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_intencoesFindManyArgs>(args?: SelectSubset<T, tb_intencoesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_intencoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_intencoes.
     * @param {tb_intencoesCreateArgs} args - Arguments to create a Tb_intencoes.
     * @example
     * // Create one Tb_intencoes
     * const Tb_intencoes = await prisma.tb_intencoes.create({
     *   data: {
     *     // ... data to create a Tb_intencoes
     *   }
     * })
     * 
     */
    create<T extends tb_intencoesCreateArgs>(args: SelectSubset<T, tb_intencoesCreateArgs<ExtArgs>>): Prisma__tb_intencoesClient<$Result.GetResult<Prisma.$tb_intencoesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_intencoes.
     * @param {tb_intencoesCreateManyArgs} args - Arguments to create many Tb_intencoes.
     * @example
     * // Create many Tb_intencoes
     * const tb_intencoes = await prisma.tb_intencoes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_intencoesCreateManyArgs>(args?: SelectSubset<T, tb_intencoesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tb_intencoes and returns the data saved in the database.
     * @param {tb_intencoesCreateManyAndReturnArgs} args - Arguments to create many Tb_intencoes.
     * @example
     * // Create many Tb_intencoes
     * const tb_intencoes = await prisma.tb_intencoes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tb_intencoes and only return the `id`
     * const tb_intencoesWithIdOnly = await prisma.tb_intencoes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tb_intencoesCreateManyAndReturnArgs>(args?: SelectSubset<T, tb_intencoesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_intencoesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tb_intencoes.
     * @param {tb_intencoesDeleteArgs} args - Arguments to delete one Tb_intencoes.
     * @example
     * // Delete one Tb_intencoes
     * const Tb_intencoes = await prisma.tb_intencoes.delete({
     *   where: {
     *     // ... filter to delete one Tb_intencoes
     *   }
     * })
     * 
     */
    delete<T extends tb_intencoesDeleteArgs>(args: SelectSubset<T, tb_intencoesDeleteArgs<ExtArgs>>): Prisma__tb_intencoesClient<$Result.GetResult<Prisma.$tb_intencoesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_intencoes.
     * @param {tb_intencoesUpdateArgs} args - Arguments to update one Tb_intencoes.
     * @example
     * // Update one Tb_intencoes
     * const tb_intencoes = await prisma.tb_intencoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_intencoesUpdateArgs>(args: SelectSubset<T, tb_intencoesUpdateArgs<ExtArgs>>): Prisma__tb_intencoesClient<$Result.GetResult<Prisma.$tb_intencoesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_intencoes.
     * @param {tb_intencoesDeleteManyArgs} args - Arguments to filter Tb_intencoes to delete.
     * @example
     * // Delete a few Tb_intencoes
     * const { count } = await prisma.tb_intencoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_intencoesDeleteManyArgs>(args?: SelectSubset<T, tb_intencoesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_intencoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_intencoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_intencoes
     * const tb_intencoes = await prisma.tb_intencoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_intencoesUpdateManyArgs>(args: SelectSubset<T, tb_intencoesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_intencoes and returns the data updated in the database.
     * @param {tb_intencoesUpdateManyAndReturnArgs} args - Arguments to update many Tb_intencoes.
     * @example
     * // Update many Tb_intencoes
     * const tb_intencoes = await prisma.tb_intencoes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tb_intencoes and only return the `id`
     * const tb_intencoesWithIdOnly = await prisma.tb_intencoes.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends tb_intencoesUpdateManyAndReturnArgs>(args: SelectSubset<T, tb_intencoesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_intencoesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tb_intencoes.
     * @param {tb_intencoesUpsertArgs} args - Arguments to update or create a Tb_intencoes.
     * @example
     * // Update or create a Tb_intencoes
     * const tb_intencoes = await prisma.tb_intencoes.upsert({
     *   create: {
     *     // ... data to create a Tb_intencoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_intencoes we want to update
     *   }
     * })
     */
    upsert<T extends tb_intencoesUpsertArgs>(args: SelectSubset<T, tb_intencoesUpsertArgs<ExtArgs>>): Prisma__tb_intencoesClient<$Result.GetResult<Prisma.$tb_intencoesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_intencoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_intencoesCountArgs} args - Arguments to filter Tb_intencoes to count.
     * @example
     * // Count the number of Tb_intencoes
     * const count = await prisma.tb_intencoes.count({
     *   where: {
     *     // ... the filter for the Tb_intencoes we want to count
     *   }
     * })
    **/
    count<T extends tb_intencoesCountArgs>(
      args?: Subset<T, tb_intencoesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_intencoesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_intencoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_intencoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_intencoesAggregateArgs>(args: Subset<T, Tb_intencoesAggregateArgs>): Prisma.PrismaPromise<GetTb_intencoesAggregateType<T>>

    /**
     * Group by Tb_intencoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_intencoesGroupByArgs} args - Group by arguments.
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
      T extends tb_intencoesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_intencoesGroupByArgs['orderBy'] }
        : { orderBy?: tb_intencoesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_intencoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_intencoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_intencoes model
   */
  readonly fields: tb_intencoesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_intencoes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_intencoesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tb_interacoes_intencoes<T extends tb_intencoes$tb_interacoes_intencoesArgs<ExtArgs> = {}>(args?: Subset<T, tb_intencoes$tb_interacoes_intencoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_interacoes_intencoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tb_intencoes model
   */
  interface tb_intencoesFieldRefs {
    readonly id: FieldRef<"tb_intencoes", 'Int'>
    readonly nome_intencao: FieldRef<"tb_intencoes", 'String'>
    readonly descricao: FieldRef<"tb_intencoes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_intencoes findUnique
   */
  export type tb_intencoesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_intencoes
     */
    select?: tb_intencoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_intencoes
     */
    omit?: tb_intencoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_intencoesInclude<ExtArgs> | null
    /**
     * Filter, which tb_intencoes to fetch.
     */
    where: tb_intencoesWhereUniqueInput
  }

  /**
   * tb_intencoes findUniqueOrThrow
   */
  export type tb_intencoesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_intencoes
     */
    select?: tb_intencoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_intencoes
     */
    omit?: tb_intencoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_intencoesInclude<ExtArgs> | null
    /**
     * Filter, which tb_intencoes to fetch.
     */
    where: tb_intencoesWhereUniqueInput
  }

  /**
   * tb_intencoes findFirst
   */
  export type tb_intencoesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_intencoes
     */
    select?: tb_intencoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_intencoes
     */
    omit?: tb_intencoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_intencoesInclude<ExtArgs> | null
    /**
     * Filter, which tb_intencoes to fetch.
     */
    where?: tb_intencoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_intencoes to fetch.
     */
    orderBy?: tb_intencoesOrderByWithRelationInput | tb_intencoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_intencoes.
     */
    cursor?: tb_intencoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_intencoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_intencoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_intencoes.
     */
    distinct?: Tb_intencoesScalarFieldEnum | Tb_intencoesScalarFieldEnum[]
  }

  /**
   * tb_intencoes findFirstOrThrow
   */
  export type tb_intencoesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_intencoes
     */
    select?: tb_intencoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_intencoes
     */
    omit?: tb_intencoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_intencoesInclude<ExtArgs> | null
    /**
     * Filter, which tb_intencoes to fetch.
     */
    where?: tb_intencoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_intencoes to fetch.
     */
    orderBy?: tb_intencoesOrderByWithRelationInput | tb_intencoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_intencoes.
     */
    cursor?: tb_intencoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_intencoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_intencoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_intencoes.
     */
    distinct?: Tb_intencoesScalarFieldEnum | Tb_intencoesScalarFieldEnum[]
  }

  /**
   * tb_intencoes findMany
   */
  export type tb_intencoesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_intencoes
     */
    select?: tb_intencoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_intencoes
     */
    omit?: tb_intencoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_intencoesInclude<ExtArgs> | null
    /**
     * Filter, which tb_intencoes to fetch.
     */
    where?: tb_intencoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_intencoes to fetch.
     */
    orderBy?: tb_intencoesOrderByWithRelationInput | tb_intencoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_intencoes.
     */
    cursor?: tb_intencoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_intencoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_intencoes.
     */
    skip?: number
    distinct?: Tb_intencoesScalarFieldEnum | Tb_intencoesScalarFieldEnum[]
  }

  /**
   * tb_intencoes create
   */
  export type tb_intencoesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_intencoes
     */
    select?: tb_intencoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_intencoes
     */
    omit?: tb_intencoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_intencoesInclude<ExtArgs> | null
    /**
     * The data needed to create a tb_intencoes.
     */
    data: XOR<tb_intencoesCreateInput, tb_intencoesUncheckedCreateInput>
  }

  /**
   * tb_intencoes createMany
   */
  export type tb_intencoesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_intencoes.
     */
    data: tb_intencoesCreateManyInput | tb_intencoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_intencoes createManyAndReturn
   */
  export type tb_intencoesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_intencoes
     */
    select?: tb_intencoesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_intencoes
     */
    omit?: tb_intencoesOmit<ExtArgs> | null
    /**
     * The data used to create many tb_intencoes.
     */
    data: tb_intencoesCreateManyInput | tb_intencoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_intencoes update
   */
  export type tb_intencoesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_intencoes
     */
    select?: tb_intencoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_intencoes
     */
    omit?: tb_intencoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_intencoesInclude<ExtArgs> | null
    /**
     * The data needed to update a tb_intencoes.
     */
    data: XOR<tb_intencoesUpdateInput, tb_intencoesUncheckedUpdateInput>
    /**
     * Choose, which tb_intencoes to update.
     */
    where: tb_intencoesWhereUniqueInput
  }

  /**
   * tb_intencoes updateMany
   */
  export type tb_intencoesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_intencoes.
     */
    data: XOR<tb_intencoesUpdateManyMutationInput, tb_intencoesUncheckedUpdateManyInput>
    /**
     * Filter which tb_intencoes to update
     */
    where?: tb_intencoesWhereInput
    /**
     * Limit how many tb_intencoes to update.
     */
    limit?: number
  }

  /**
   * tb_intencoes updateManyAndReturn
   */
  export type tb_intencoesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_intencoes
     */
    select?: tb_intencoesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_intencoes
     */
    omit?: tb_intencoesOmit<ExtArgs> | null
    /**
     * The data used to update tb_intencoes.
     */
    data: XOR<tb_intencoesUpdateManyMutationInput, tb_intencoesUncheckedUpdateManyInput>
    /**
     * Filter which tb_intencoes to update
     */
    where?: tb_intencoesWhereInput
    /**
     * Limit how many tb_intencoes to update.
     */
    limit?: number
  }

  /**
   * tb_intencoes upsert
   */
  export type tb_intencoesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_intencoes
     */
    select?: tb_intencoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_intencoes
     */
    omit?: tb_intencoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_intencoesInclude<ExtArgs> | null
    /**
     * The filter to search for the tb_intencoes to update in case it exists.
     */
    where: tb_intencoesWhereUniqueInput
    /**
     * In case the tb_intencoes found by the `where` argument doesn't exist, create a new tb_intencoes with this data.
     */
    create: XOR<tb_intencoesCreateInput, tb_intencoesUncheckedCreateInput>
    /**
     * In case the tb_intencoes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_intencoesUpdateInput, tb_intencoesUncheckedUpdateInput>
  }

  /**
   * tb_intencoes delete
   */
  export type tb_intencoesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_intencoes
     */
    select?: tb_intencoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_intencoes
     */
    omit?: tb_intencoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_intencoesInclude<ExtArgs> | null
    /**
     * Filter which tb_intencoes to delete.
     */
    where: tb_intencoesWhereUniqueInput
  }

  /**
   * tb_intencoes deleteMany
   */
  export type tb_intencoesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_intencoes to delete
     */
    where?: tb_intencoesWhereInput
    /**
     * Limit how many tb_intencoes to delete.
     */
    limit?: number
  }

  /**
   * tb_intencoes.tb_interacoes_intencoes
   */
  export type tb_intencoes$tb_interacoes_intencoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes_intencoes
     */
    select?: tb_interacoes_intencoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes_intencoes
     */
    omit?: tb_interacoes_intencoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoes_intencoesInclude<ExtArgs> | null
    where?: tb_interacoes_intencoesWhereInput
    orderBy?: tb_interacoes_intencoesOrderByWithRelationInput | tb_interacoes_intencoesOrderByWithRelationInput[]
    cursor?: tb_interacoes_intencoesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_interacoes_intencoesScalarFieldEnum | Tb_interacoes_intencoesScalarFieldEnum[]
  }

  /**
   * tb_intencoes without action
   */
  export type tb_intencoesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_intencoes
     */
    select?: tb_intencoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_intencoes
     */
    omit?: tb_intencoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_intencoesInclude<ExtArgs> | null
  }


  /**
   * Model tb_interacoes
   */

  export type AggregateTb_interacoes = {
    _count: Tb_interacoesCountAggregateOutputType | null
    _avg: Tb_interacoesAvgAggregateOutputType | null
    _sum: Tb_interacoesSumAggregateOutputType | null
    _min: Tb_interacoesMinAggregateOutputType | null
    _max: Tb_interacoesMaxAggregateOutputType | null
  }

  export type Tb_interacoesAvgAggregateOutputType = {
    id: number | null
    agricultor_id: number | null
  }

  export type Tb_interacoesSumAggregateOutputType = {
    id: number | null
    agricultor_id: number | null
  }

  export type Tb_interacoesMinAggregateOutputType = {
    id: number | null
    agricultor_id: number | null
    mensagem_usuario: string | null
    resposta_chatbot: string | null
    timestamp: Date | null
  }

  export type Tb_interacoesMaxAggregateOutputType = {
    id: number | null
    agricultor_id: number | null
    mensagem_usuario: string | null
    resposta_chatbot: string | null
    timestamp: Date | null
  }

  export type Tb_interacoesCountAggregateOutputType = {
    id: number
    agricultor_id: number
    mensagem_usuario: number
    resposta_chatbot: number
    entidades: number
    timestamp: number
    _all: number
  }


  export type Tb_interacoesAvgAggregateInputType = {
    id?: true
    agricultor_id?: true
  }

  export type Tb_interacoesSumAggregateInputType = {
    id?: true
    agricultor_id?: true
  }

  export type Tb_interacoesMinAggregateInputType = {
    id?: true
    agricultor_id?: true
    mensagem_usuario?: true
    resposta_chatbot?: true
    timestamp?: true
  }

  export type Tb_interacoesMaxAggregateInputType = {
    id?: true
    agricultor_id?: true
    mensagem_usuario?: true
    resposta_chatbot?: true
    timestamp?: true
  }

  export type Tb_interacoesCountAggregateInputType = {
    id?: true
    agricultor_id?: true
    mensagem_usuario?: true
    resposta_chatbot?: true
    entidades?: true
    timestamp?: true
    _all?: true
  }

  export type Tb_interacoesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_interacoes to aggregate.
     */
    where?: tb_interacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_interacoes to fetch.
     */
    orderBy?: tb_interacoesOrderByWithRelationInput | tb_interacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_interacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_interacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_interacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_interacoes
    **/
    _count?: true | Tb_interacoesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_interacoesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_interacoesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_interacoesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_interacoesMaxAggregateInputType
  }

  export type GetTb_interacoesAggregateType<T extends Tb_interacoesAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_interacoes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_interacoes[P]>
      : GetScalarType<T[P], AggregateTb_interacoes[P]>
  }




  export type tb_interacoesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_interacoesWhereInput
    orderBy?: tb_interacoesOrderByWithAggregationInput | tb_interacoesOrderByWithAggregationInput[]
    by: Tb_interacoesScalarFieldEnum[] | Tb_interacoesScalarFieldEnum
    having?: tb_interacoesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_interacoesCountAggregateInputType | true
    _avg?: Tb_interacoesAvgAggregateInputType
    _sum?: Tb_interacoesSumAggregateInputType
    _min?: Tb_interacoesMinAggregateInputType
    _max?: Tb_interacoesMaxAggregateInputType
  }

  export type Tb_interacoesGroupByOutputType = {
    id: number
    agricultor_id: number
    mensagem_usuario: string | null
    resposta_chatbot: string | null
    entidades: JsonValue | null
    timestamp: Date | null
    _count: Tb_interacoesCountAggregateOutputType | null
    _avg: Tb_interacoesAvgAggregateOutputType | null
    _sum: Tb_interacoesSumAggregateOutputType | null
    _min: Tb_interacoesMinAggregateOutputType | null
    _max: Tb_interacoesMaxAggregateOutputType | null
  }

  type GetTb_interacoesGroupByPayload<T extends tb_interacoesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_interacoesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_interacoesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_interacoesGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_interacoesGroupByOutputType[P]>
        }
      >
    >


  export type tb_interacoesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agricultor_id?: boolean
    mensagem_usuario?: boolean
    resposta_chatbot?: boolean
    entidades?: boolean
    timestamp?: boolean
    tb_usuarios?: boolean | tb_usuariosDefaultArgs<ExtArgs>
    tb_interacoes_intencoes?: boolean | tb_interacoes$tb_interacoes_intencoesArgs<ExtArgs>
    _count?: boolean | Tb_interacoesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_interacoes"]>

  export type tb_interacoesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agricultor_id?: boolean
    mensagem_usuario?: boolean
    resposta_chatbot?: boolean
    entidades?: boolean
    timestamp?: boolean
    tb_usuarios?: boolean | tb_usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_interacoes"]>

  export type tb_interacoesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agricultor_id?: boolean
    mensagem_usuario?: boolean
    resposta_chatbot?: boolean
    entidades?: boolean
    timestamp?: boolean
    tb_usuarios?: boolean | tb_usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_interacoes"]>

  export type tb_interacoesSelectScalar = {
    id?: boolean
    agricultor_id?: boolean
    mensagem_usuario?: boolean
    resposta_chatbot?: boolean
    entidades?: boolean
    timestamp?: boolean
  }

  export type tb_interacoesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agricultor_id" | "mensagem_usuario" | "resposta_chatbot" | "entidades" | "timestamp", ExtArgs["result"]["tb_interacoes"]>
  export type tb_interacoesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_usuarios?: boolean | tb_usuariosDefaultArgs<ExtArgs>
    tb_interacoes_intencoes?: boolean | tb_interacoes$tb_interacoes_intencoesArgs<ExtArgs>
    _count?: boolean | Tb_interacoesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tb_interacoesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_usuarios?: boolean | tb_usuariosDefaultArgs<ExtArgs>
  }
  export type tb_interacoesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_usuarios?: boolean | tb_usuariosDefaultArgs<ExtArgs>
  }

  export type $tb_interacoesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_interacoes"
    objects: {
      tb_usuarios: Prisma.$tb_usuariosPayload<ExtArgs>
      tb_interacoes_intencoes: Prisma.$tb_interacoes_intencoesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      agricultor_id: number
      mensagem_usuario: string | null
      resposta_chatbot: string | null
      entidades: Prisma.JsonValue | null
      timestamp: Date | null
    }, ExtArgs["result"]["tb_interacoes"]>
    composites: {}
  }

  type tb_interacoesGetPayload<S extends boolean | null | undefined | tb_interacoesDefaultArgs> = $Result.GetResult<Prisma.$tb_interacoesPayload, S>

  type tb_interacoesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_interacoesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_interacoesCountAggregateInputType | true
    }

  export interface tb_interacoesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_interacoes'], meta: { name: 'tb_interacoes' } }
    /**
     * Find zero or one Tb_interacoes that matches the filter.
     * @param {tb_interacoesFindUniqueArgs} args - Arguments to find a Tb_interacoes
     * @example
     * // Get one Tb_interacoes
     * const tb_interacoes = await prisma.tb_interacoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_interacoesFindUniqueArgs>(args: SelectSubset<T, tb_interacoesFindUniqueArgs<ExtArgs>>): Prisma__tb_interacoesClient<$Result.GetResult<Prisma.$tb_interacoesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_interacoes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_interacoesFindUniqueOrThrowArgs} args - Arguments to find a Tb_interacoes
     * @example
     * // Get one Tb_interacoes
     * const tb_interacoes = await prisma.tb_interacoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_interacoesFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_interacoesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_interacoesClient<$Result.GetResult<Prisma.$tb_interacoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_interacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_interacoesFindFirstArgs} args - Arguments to find a Tb_interacoes
     * @example
     * // Get one Tb_interacoes
     * const tb_interacoes = await prisma.tb_interacoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_interacoesFindFirstArgs>(args?: SelectSubset<T, tb_interacoesFindFirstArgs<ExtArgs>>): Prisma__tb_interacoesClient<$Result.GetResult<Prisma.$tb_interacoesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_interacoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_interacoesFindFirstOrThrowArgs} args - Arguments to find a Tb_interacoes
     * @example
     * // Get one Tb_interacoes
     * const tb_interacoes = await prisma.tb_interacoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_interacoesFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_interacoesFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_interacoesClient<$Result.GetResult<Prisma.$tb_interacoesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_interacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_interacoesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_interacoes
     * const tb_interacoes = await prisma.tb_interacoes.findMany()
     * 
     * // Get first 10 Tb_interacoes
     * const tb_interacoes = await prisma.tb_interacoes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_interacoesWithIdOnly = await prisma.tb_interacoes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_interacoesFindManyArgs>(args?: SelectSubset<T, tb_interacoesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_interacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_interacoes.
     * @param {tb_interacoesCreateArgs} args - Arguments to create a Tb_interacoes.
     * @example
     * // Create one Tb_interacoes
     * const Tb_interacoes = await prisma.tb_interacoes.create({
     *   data: {
     *     // ... data to create a Tb_interacoes
     *   }
     * })
     * 
     */
    create<T extends tb_interacoesCreateArgs>(args: SelectSubset<T, tb_interacoesCreateArgs<ExtArgs>>): Prisma__tb_interacoesClient<$Result.GetResult<Prisma.$tb_interacoesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_interacoes.
     * @param {tb_interacoesCreateManyArgs} args - Arguments to create many Tb_interacoes.
     * @example
     * // Create many Tb_interacoes
     * const tb_interacoes = await prisma.tb_interacoes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_interacoesCreateManyArgs>(args?: SelectSubset<T, tb_interacoesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tb_interacoes and returns the data saved in the database.
     * @param {tb_interacoesCreateManyAndReturnArgs} args - Arguments to create many Tb_interacoes.
     * @example
     * // Create many Tb_interacoes
     * const tb_interacoes = await prisma.tb_interacoes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tb_interacoes and only return the `id`
     * const tb_interacoesWithIdOnly = await prisma.tb_interacoes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tb_interacoesCreateManyAndReturnArgs>(args?: SelectSubset<T, tb_interacoesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_interacoesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tb_interacoes.
     * @param {tb_interacoesDeleteArgs} args - Arguments to delete one Tb_interacoes.
     * @example
     * // Delete one Tb_interacoes
     * const Tb_interacoes = await prisma.tb_interacoes.delete({
     *   where: {
     *     // ... filter to delete one Tb_interacoes
     *   }
     * })
     * 
     */
    delete<T extends tb_interacoesDeleteArgs>(args: SelectSubset<T, tb_interacoesDeleteArgs<ExtArgs>>): Prisma__tb_interacoesClient<$Result.GetResult<Prisma.$tb_interacoesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_interacoes.
     * @param {tb_interacoesUpdateArgs} args - Arguments to update one Tb_interacoes.
     * @example
     * // Update one Tb_interacoes
     * const tb_interacoes = await prisma.tb_interacoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_interacoesUpdateArgs>(args: SelectSubset<T, tb_interacoesUpdateArgs<ExtArgs>>): Prisma__tb_interacoesClient<$Result.GetResult<Prisma.$tb_interacoesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_interacoes.
     * @param {tb_interacoesDeleteManyArgs} args - Arguments to filter Tb_interacoes to delete.
     * @example
     * // Delete a few Tb_interacoes
     * const { count } = await prisma.tb_interacoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_interacoesDeleteManyArgs>(args?: SelectSubset<T, tb_interacoesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_interacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_interacoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_interacoes
     * const tb_interacoes = await prisma.tb_interacoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_interacoesUpdateManyArgs>(args: SelectSubset<T, tb_interacoesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_interacoes and returns the data updated in the database.
     * @param {tb_interacoesUpdateManyAndReturnArgs} args - Arguments to update many Tb_interacoes.
     * @example
     * // Update many Tb_interacoes
     * const tb_interacoes = await prisma.tb_interacoes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tb_interacoes and only return the `id`
     * const tb_interacoesWithIdOnly = await prisma.tb_interacoes.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends tb_interacoesUpdateManyAndReturnArgs>(args: SelectSubset<T, tb_interacoesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_interacoesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tb_interacoes.
     * @param {tb_interacoesUpsertArgs} args - Arguments to update or create a Tb_interacoes.
     * @example
     * // Update or create a Tb_interacoes
     * const tb_interacoes = await prisma.tb_interacoes.upsert({
     *   create: {
     *     // ... data to create a Tb_interacoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_interacoes we want to update
     *   }
     * })
     */
    upsert<T extends tb_interacoesUpsertArgs>(args: SelectSubset<T, tb_interacoesUpsertArgs<ExtArgs>>): Prisma__tb_interacoesClient<$Result.GetResult<Prisma.$tb_interacoesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_interacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_interacoesCountArgs} args - Arguments to filter Tb_interacoes to count.
     * @example
     * // Count the number of Tb_interacoes
     * const count = await prisma.tb_interacoes.count({
     *   where: {
     *     // ... the filter for the Tb_interacoes we want to count
     *   }
     * })
    **/
    count<T extends tb_interacoesCountArgs>(
      args?: Subset<T, tb_interacoesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_interacoesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_interacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_interacoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_interacoesAggregateArgs>(args: Subset<T, Tb_interacoesAggregateArgs>): Prisma.PrismaPromise<GetTb_interacoesAggregateType<T>>

    /**
     * Group by Tb_interacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_interacoesGroupByArgs} args - Group by arguments.
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
      T extends tb_interacoesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_interacoesGroupByArgs['orderBy'] }
        : { orderBy?: tb_interacoesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_interacoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_interacoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_interacoes model
   */
  readonly fields: tb_interacoesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_interacoes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_interacoesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tb_usuarios<T extends tb_usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tb_usuariosDefaultArgs<ExtArgs>>): Prisma__tb_usuariosClient<$Result.GetResult<Prisma.$tb_usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tb_interacoes_intencoes<T extends tb_interacoes$tb_interacoes_intencoesArgs<ExtArgs> = {}>(args?: Subset<T, tb_interacoes$tb_interacoes_intencoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_interacoes_intencoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tb_interacoes model
   */
  interface tb_interacoesFieldRefs {
    readonly id: FieldRef<"tb_interacoes", 'Int'>
    readonly agricultor_id: FieldRef<"tb_interacoes", 'Int'>
    readonly mensagem_usuario: FieldRef<"tb_interacoes", 'String'>
    readonly resposta_chatbot: FieldRef<"tb_interacoes", 'String'>
    readonly entidades: FieldRef<"tb_interacoes", 'Json'>
    readonly timestamp: FieldRef<"tb_interacoes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tb_interacoes findUnique
   */
  export type tb_interacoesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes
     */
    select?: tb_interacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes
     */
    omit?: tb_interacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoesInclude<ExtArgs> | null
    /**
     * Filter, which tb_interacoes to fetch.
     */
    where: tb_interacoesWhereUniqueInput
  }

  /**
   * tb_interacoes findUniqueOrThrow
   */
  export type tb_interacoesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes
     */
    select?: tb_interacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes
     */
    omit?: tb_interacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoesInclude<ExtArgs> | null
    /**
     * Filter, which tb_interacoes to fetch.
     */
    where: tb_interacoesWhereUniqueInput
  }

  /**
   * tb_interacoes findFirst
   */
  export type tb_interacoesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes
     */
    select?: tb_interacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes
     */
    omit?: tb_interacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoesInclude<ExtArgs> | null
    /**
     * Filter, which tb_interacoes to fetch.
     */
    where?: tb_interacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_interacoes to fetch.
     */
    orderBy?: tb_interacoesOrderByWithRelationInput | tb_interacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_interacoes.
     */
    cursor?: tb_interacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_interacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_interacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_interacoes.
     */
    distinct?: Tb_interacoesScalarFieldEnum | Tb_interacoesScalarFieldEnum[]
  }

  /**
   * tb_interacoes findFirstOrThrow
   */
  export type tb_interacoesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes
     */
    select?: tb_interacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes
     */
    omit?: tb_interacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoesInclude<ExtArgs> | null
    /**
     * Filter, which tb_interacoes to fetch.
     */
    where?: tb_interacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_interacoes to fetch.
     */
    orderBy?: tb_interacoesOrderByWithRelationInput | tb_interacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_interacoes.
     */
    cursor?: tb_interacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_interacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_interacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_interacoes.
     */
    distinct?: Tb_interacoesScalarFieldEnum | Tb_interacoesScalarFieldEnum[]
  }

  /**
   * tb_interacoes findMany
   */
  export type tb_interacoesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes
     */
    select?: tb_interacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes
     */
    omit?: tb_interacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoesInclude<ExtArgs> | null
    /**
     * Filter, which tb_interacoes to fetch.
     */
    where?: tb_interacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_interacoes to fetch.
     */
    orderBy?: tb_interacoesOrderByWithRelationInput | tb_interacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_interacoes.
     */
    cursor?: tb_interacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_interacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_interacoes.
     */
    skip?: number
    distinct?: Tb_interacoesScalarFieldEnum | Tb_interacoesScalarFieldEnum[]
  }

  /**
   * tb_interacoes create
   */
  export type tb_interacoesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes
     */
    select?: tb_interacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes
     */
    omit?: tb_interacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoesInclude<ExtArgs> | null
    /**
     * The data needed to create a tb_interacoes.
     */
    data: XOR<tb_interacoesCreateInput, tb_interacoesUncheckedCreateInput>
  }

  /**
   * tb_interacoes createMany
   */
  export type tb_interacoesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_interacoes.
     */
    data: tb_interacoesCreateManyInput | tb_interacoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_interacoes createManyAndReturn
   */
  export type tb_interacoesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes
     */
    select?: tb_interacoesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes
     */
    omit?: tb_interacoesOmit<ExtArgs> | null
    /**
     * The data used to create many tb_interacoes.
     */
    data: tb_interacoesCreateManyInput | tb_interacoesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tb_interacoes update
   */
  export type tb_interacoesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes
     */
    select?: tb_interacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes
     */
    omit?: tb_interacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoesInclude<ExtArgs> | null
    /**
     * The data needed to update a tb_interacoes.
     */
    data: XOR<tb_interacoesUpdateInput, tb_interacoesUncheckedUpdateInput>
    /**
     * Choose, which tb_interacoes to update.
     */
    where: tb_interacoesWhereUniqueInput
  }

  /**
   * tb_interacoes updateMany
   */
  export type tb_interacoesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_interacoes.
     */
    data: XOR<tb_interacoesUpdateManyMutationInput, tb_interacoesUncheckedUpdateManyInput>
    /**
     * Filter which tb_interacoes to update
     */
    where?: tb_interacoesWhereInput
    /**
     * Limit how many tb_interacoes to update.
     */
    limit?: number
  }

  /**
   * tb_interacoes updateManyAndReturn
   */
  export type tb_interacoesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes
     */
    select?: tb_interacoesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes
     */
    omit?: tb_interacoesOmit<ExtArgs> | null
    /**
     * The data used to update tb_interacoes.
     */
    data: XOR<tb_interacoesUpdateManyMutationInput, tb_interacoesUncheckedUpdateManyInput>
    /**
     * Filter which tb_interacoes to update
     */
    where?: tb_interacoesWhereInput
    /**
     * Limit how many tb_interacoes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tb_interacoes upsert
   */
  export type tb_interacoesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes
     */
    select?: tb_interacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes
     */
    omit?: tb_interacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoesInclude<ExtArgs> | null
    /**
     * The filter to search for the tb_interacoes to update in case it exists.
     */
    where: tb_interacoesWhereUniqueInput
    /**
     * In case the tb_interacoes found by the `where` argument doesn't exist, create a new tb_interacoes with this data.
     */
    create: XOR<tb_interacoesCreateInput, tb_interacoesUncheckedCreateInput>
    /**
     * In case the tb_interacoes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_interacoesUpdateInput, tb_interacoesUncheckedUpdateInput>
  }

  /**
   * tb_interacoes delete
   */
  export type tb_interacoesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes
     */
    select?: tb_interacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes
     */
    omit?: tb_interacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoesInclude<ExtArgs> | null
    /**
     * Filter which tb_interacoes to delete.
     */
    where: tb_interacoesWhereUniqueInput
  }

  /**
   * tb_interacoes deleteMany
   */
  export type tb_interacoesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_interacoes to delete
     */
    where?: tb_interacoesWhereInput
    /**
     * Limit how many tb_interacoes to delete.
     */
    limit?: number
  }

  /**
   * tb_interacoes.tb_interacoes_intencoes
   */
  export type tb_interacoes$tb_interacoes_intencoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes_intencoes
     */
    select?: tb_interacoes_intencoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes_intencoes
     */
    omit?: tb_interacoes_intencoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoes_intencoesInclude<ExtArgs> | null
    where?: tb_interacoes_intencoesWhereInput
    orderBy?: tb_interacoes_intencoesOrderByWithRelationInput | tb_interacoes_intencoesOrderByWithRelationInput[]
    cursor?: tb_interacoes_intencoesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_interacoes_intencoesScalarFieldEnum | Tb_interacoes_intencoesScalarFieldEnum[]
  }

  /**
   * tb_interacoes without action
   */
  export type tb_interacoesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes
     */
    select?: tb_interacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes
     */
    omit?: tb_interacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoesInclude<ExtArgs> | null
  }


  /**
   * Model tb_interacoes_intencoes
   */

  export type AggregateTb_interacoes_intencoes = {
    _count: Tb_interacoes_intencoesCountAggregateOutputType | null
    _avg: Tb_interacoes_intencoesAvgAggregateOutputType | null
    _sum: Tb_interacoes_intencoesSumAggregateOutputType | null
    _min: Tb_interacoes_intencoesMinAggregateOutputType | null
    _max: Tb_interacoes_intencoesMaxAggregateOutputType | null
  }

  export type Tb_interacoes_intencoesAvgAggregateOutputType = {
    interacao_id: number | null
    intencao_id: number | null
  }

  export type Tb_interacoes_intencoesSumAggregateOutputType = {
    interacao_id: number | null
    intencao_id: number | null
  }

  export type Tb_interacoes_intencoesMinAggregateOutputType = {
    interacao_id: number | null
    intencao_id: number | null
  }

  export type Tb_interacoes_intencoesMaxAggregateOutputType = {
    interacao_id: number | null
    intencao_id: number | null
  }

  export type Tb_interacoes_intencoesCountAggregateOutputType = {
    interacao_id: number
    intencao_id: number
    _all: number
  }


  export type Tb_interacoes_intencoesAvgAggregateInputType = {
    interacao_id?: true
    intencao_id?: true
  }

  export type Tb_interacoes_intencoesSumAggregateInputType = {
    interacao_id?: true
    intencao_id?: true
  }

  export type Tb_interacoes_intencoesMinAggregateInputType = {
    interacao_id?: true
    intencao_id?: true
  }

  export type Tb_interacoes_intencoesMaxAggregateInputType = {
    interacao_id?: true
    intencao_id?: true
  }

  export type Tb_interacoes_intencoesCountAggregateInputType = {
    interacao_id?: true
    intencao_id?: true
    _all?: true
  }

  export type Tb_interacoes_intencoesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_interacoes_intencoes to aggregate.
     */
    where?: tb_interacoes_intencoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_interacoes_intencoes to fetch.
     */
    orderBy?: tb_interacoes_intencoesOrderByWithRelationInput | tb_interacoes_intencoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_interacoes_intencoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_interacoes_intencoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_interacoes_intencoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_interacoes_intencoes
    **/
    _count?: true | Tb_interacoes_intencoesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_interacoes_intencoesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_interacoes_intencoesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_interacoes_intencoesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_interacoes_intencoesMaxAggregateInputType
  }

  export type GetTb_interacoes_intencoesAggregateType<T extends Tb_interacoes_intencoesAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_interacoes_intencoes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_interacoes_intencoes[P]>
      : GetScalarType<T[P], AggregateTb_interacoes_intencoes[P]>
  }




  export type tb_interacoes_intencoesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_interacoes_intencoesWhereInput
    orderBy?: tb_interacoes_intencoesOrderByWithAggregationInput | tb_interacoes_intencoesOrderByWithAggregationInput[]
    by: Tb_interacoes_intencoesScalarFieldEnum[] | Tb_interacoes_intencoesScalarFieldEnum
    having?: tb_interacoes_intencoesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_interacoes_intencoesCountAggregateInputType | true
    _avg?: Tb_interacoes_intencoesAvgAggregateInputType
    _sum?: Tb_interacoes_intencoesSumAggregateInputType
    _min?: Tb_interacoes_intencoesMinAggregateInputType
    _max?: Tb_interacoes_intencoesMaxAggregateInputType
  }

  export type Tb_interacoes_intencoesGroupByOutputType = {
    interacao_id: number
    intencao_id: number
    _count: Tb_interacoes_intencoesCountAggregateOutputType | null
    _avg: Tb_interacoes_intencoesAvgAggregateOutputType | null
    _sum: Tb_interacoes_intencoesSumAggregateOutputType | null
    _min: Tb_interacoes_intencoesMinAggregateOutputType | null
    _max: Tb_interacoes_intencoesMaxAggregateOutputType | null
  }

  type GetTb_interacoes_intencoesGroupByPayload<T extends tb_interacoes_intencoesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_interacoes_intencoesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_interacoes_intencoesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_interacoes_intencoesGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_interacoes_intencoesGroupByOutputType[P]>
        }
      >
    >


  export type tb_interacoes_intencoesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    interacao_id?: boolean
    intencao_id?: boolean
    tb_intencoes?: boolean | tb_intencoesDefaultArgs<ExtArgs>
    tb_interacoes?: boolean | tb_interacoesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_interacoes_intencoes"]>

  export type tb_interacoes_intencoesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    interacao_id?: boolean
    intencao_id?: boolean
    tb_intencoes?: boolean | tb_intencoesDefaultArgs<ExtArgs>
    tb_interacoes?: boolean | tb_interacoesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_interacoes_intencoes"]>

  export type tb_interacoes_intencoesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    interacao_id?: boolean
    intencao_id?: boolean
    tb_intencoes?: boolean | tb_intencoesDefaultArgs<ExtArgs>
    tb_interacoes?: boolean | tb_interacoesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_interacoes_intencoes"]>

  export type tb_interacoes_intencoesSelectScalar = {
    interacao_id?: boolean
    intencao_id?: boolean
  }

  export type tb_interacoes_intencoesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"interacao_id" | "intencao_id", ExtArgs["result"]["tb_interacoes_intencoes"]>
  export type tb_interacoes_intencoesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_intencoes?: boolean | tb_intencoesDefaultArgs<ExtArgs>
    tb_interacoes?: boolean | tb_interacoesDefaultArgs<ExtArgs>
  }
  export type tb_interacoes_intencoesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_intencoes?: boolean | tb_intencoesDefaultArgs<ExtArgs>
    tb_interacoes?: boolean | tb_interacoesDefaultArgs<ExtArgs>
  }
  export type tb_interacoes_intencoesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_intencoes?: boolean | tb_intencoesDefaultArgs<ExtArgs>
    tb_interacoes?: boolean | tb_interacoesDefaultArgs<ExtArgs>
  }

  export type $tb_interacoes_intencoesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_interacoes_intencoes"
    objects: {
      tb_intencoes: Prisma.$tb_intencoesPayload<ExtArgs>
      tb_interacoes: Prisma.$tb_interacoesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      interacao_id: number
      intencao_id: number
    }, ExtArgs["result"]["tb_interacoes_intencoes"]>
    composites: {}
  }

  type tb_interacoes_intencoesGetPayload<S extends boolean | null | undefined | tb_interacoes_intencoesDefaultArgs> = $Result.GetResult<Prisma.$tb_interacoes_intencoesPayload, S>

  type tb_interacoes_intencoesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_interacoes_intencoesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_interacoes_intencoesCountAggregateInputType | true
    }

  export interface tb_interacoes_intencoesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_interacoes_intencoes'], meta: { name: 'tb_interacoes_intencoes' } }
    /**
     * Find zero or one Tb_interacoes_intencoes that matches the filter.
     * @param {tb_interacoes_intencoesFindUniqueArgs} args - Arguments to find a Tb_interacoes_intencoes
     * @example
     * // Get one Tb_interacoes_intencoes
     * const tb_interacoes_intencoes = await prisma.tb_interacoes_intencoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_interacoes_intencoesFindUniqueArgs>(args: SelectSubset<T, tb_interacoes_intencoesFindUniqueArgs<ExtArgs>>): Prisma__tb_interacoes_intencoesClient<$Result.GetResult<Prisma.$tb_interacoes_intencoesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_interacoes_intencoes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_interacoes_intencoesFindUniqueOrThrowArgs} args - Arguments to find a Tb_interacoes_intencoes
     * @example
     * // Get one Tb_interacoes_intencoes
     * const tb_interacoes_intencoes = await prisma.tb_interacoes_intencoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_interacoes_intencoesFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_interacoes_intencoesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_interacoes_intencoesClient<$Result.GetResult<Prisma.$tb_interacoes_intencoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_interacoes_intencoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_interacoes_intencoesFindFirstArgs} args - Arguments to find a Tb_interacoes_intencoes
     * @example
     * // Get one Tb_interacoes_intencoes
     * const tb_interacoes_intencoes = await prisma.tb_interacoes_intencoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_interacoes_intencoesFindFirstArgs>(args?: SelectSubset<T, tb_interacoes_intencoesFindFirstArgs<ExtArgs>>): Prisma__tb_interacoes_intencoesClient<$Result.GetResult<Prisma.$tb_interacoes_intencoesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_interacoes_intencoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_interacoes_intencoesFindFirstOrThrowArgs} args - Arguments to find a Tb_interacoes_intencoes
     * @example
     * // Get one Tb_interacoes_intencoes
     * const tb_interacoes_intencoes = await prisma.tb_interacoes_intencoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_interacoes_intencoesFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_interacoes_intencoesFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_interacoes_intencoesClient<$Result.GetResult<Prisma.$tb_interacoes_intencoesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_interacoes_intencoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_interacoes_intencoesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_interacoes_intencoes
     * const tb_interacoes_intencoes = await prisma.tb_interacoes_intencoes.findMany()
     * 
     * // Get first 10 Tb_interacoes_intencoes
     * const tb_interacoes_intencoes = await prisma.tb_interacoes_intencoes.findMany({ take: 10 })
     * 
     * // Only select the `interacao_id`
     * const tb_interacoes_intencoesWithInteracao_idOnly = await prisma.tb_interacoes_intencoes.findMany({ select: { interacao_id: true } })
     * 
     */
    findMany<T extends tb_interacoes_intencoesFindManyArgs>(args?: SelectSubset<T, tb_interacoes_intencoesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_interacoes_intencoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_interacoes_intencoes.
     * @param {tb_interacoes_intencoesCreateArgs} args - Arguments to create a Tb_interacoes_intencoes.
     * @example
     * // Create one Tb_interacoes_intencoes
     * const Tb_interacoes_intencoes = await prisma.tb_interacoes_intencoes.create({
     *   data: {
     *     // ... data to create a Tb_interacoes_intencoes
     *   }
     * })
     * 
     */
    create<T extends tb_interacoes_intencoesCreateArgs>(args: SelectSubset<T, tb_interacoes_intencoesCreateArgs<ExtArgs>>): Prisma__tb_interacoes_intencoesClient<$Result.GetResult<Prisma.$tb_interacoes_intencoesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_interacoes_intencoes.
     * @param {tb_interacoes_intencoesCreateManyArgs} args - Arguments to create many Tb_interacoes_intencoes.
     * @example
     * // Create many Tb_interacoes_intencoes
     * const tb_interacoes_intencoes = await prisma.tb_interacoes_intencoes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_interacoes_intencoesCreateManyArgs>(args?: SelectSubset<T, tb_interacoes_intencoesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tb_interacoes_intencoes and returns the data saved in the database.
     * @param {tb_interacoes_intencoesCreateManyAndReturnArgs} args - Arguments to create many Tb_interacoes_intencoes.
     * @example
     * // Create many Tb_interacoes_intencoes
     * const tb_interacoes_intencoes = await prisma.tb_interacoes_intencoes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tb_interacoes_intencoes and only return the `interacao_id`
     * const tb_interacoes_intencoesWithInteracao_idOnly = await prisma.tb_interacoes_intencoes.createManyAndReturn({
     *   select: { interacao_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tb_interacoes_intencoesCreateManyAndReturnArgs>(args?: SelectSubset<T, tb_interacoes_intencoesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_interacoes_intencoesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tb_interacoes_intencoes.
     * @param {tb_interacoes_intencoesDeleteArgs} args - Arguments to delete one Tb_interacoes_intencoes.
     * @example
     * // Delete one Tb_interacoes_intencoes
     * const Tb_interacoes_intencoes = await prisma.tb_interacoes_intencoes.delete({
     *   where: {
     *     // ... filter to delete one Tb_interacoes_intencoes
     *   }
     * })
     * 
     */
    delete<T extends tb_interacoes_intencoesDeleteArgs>(args: SelectSubset<T, tb_interacoes_intencoesDeleteArgs<ExtArgs>>): Prisma__tb_interacoes_intencoesClient<$Result.GetResult<Prisma.$tb_interacoes_intencoesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_interacoes_intencoes.
     * @param {tb_interacoes_intencoesUpdateArgs} args - Arguments to update one Tb_interacoes_intencoes.
     * @example
     * // Update one Tb_interacoes_intencoes
     * const tb_interacoes_intencoes = await prisma.tb_interacoes_intencoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_interacoes_intencoesUpdateArgs>(args: SelectSubset<T, tb_interacoes_intencoesUpdateArgs<ExtArgs>>): Prisma__tb_interacoes_intencoesClient<$Result.GetResult<Prisma.$tb_interacoes_intencoesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_interacoes_intencoes.
     * @param {tb_interacoes_intencoesDeleteManyArgs} args - Arguments to filter Tb_interacoes_intencoes to delete.
     * @example
     * // Delete a few Tb_interacoes_intencoes
     * const { count } = await prisma.tb_interacoes_intencoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_interacoes_intencoesDeleteManyArgs>(args?: SelectSubset<T, tb_interacoes_intencoesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_interacoes_intencoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_interacoes_intencoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_interacoes_intencoes
     * const tb_interacoes_intencoes = await prisma.tb_interacoes_intencoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_interacoes_intencoesUpdateManyArgs>(args: SelectSubset<T, tb_interacoes_intencoesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_interacoes_intencoes and returns the data updated in the database.
     * @param {tb_interacoes_intencoesUpdateManyAndReturnArgs} args - Arguments to update many Tb_interacoes_intencoes.
     * @example
     * // Update many Tb_interacoes_intencoes
     * const tb_interacoes_intencoes = await prisma.tb_interacoes_intencoes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tb_interacoes_intencoes and only return the `interacao_id`
     * const tb_interacoes_intencoesWithInteracao_idOnly = await prisma.tb_interacoes_intencoes.updateManyAndReturn({
     *   select: { interacao_id: true },
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
    updateManyAndReturn<T extends tb_interacoes_intencoesUpdateManyAndReturnArgs>(args: SelectSubset<T, tb_interacoes_intencoesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_interacoes_intencoesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tb_interacoes_intencoes.
     * @param {tb_interacoes_intencoesUpsertArgs} args - Arguments to update or create a Tb_interacoes_intencoes.
     * @example
     * // Update or create a Tb_interacoes_intencoes
     * const tb_interacoes_intencoes = await prisma.tb_interacoes_intencoes.upsert({
     *   create: {
     *     // ... data to create a Tb_interacoes_intencoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_interacoes_intencoes we want to update
     *   }
     * })
     */
    upsert<T extends tb_interacoes_intencoesUpsertArgs>(args: SelectSubset<T, tb_interacoes_intencoesUpsertArgs<ExtArgs>>): Prisma__tb_interacoes_intencoesClient<$Result.GetResult<Prisma.$tb_interacoes_intencoesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_interacoes_intencoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_interacoes_intencoesCountArgs} args - Arguments to filter Tb_interacoes_intencoes to count.
     * @example
     * // Count the number of Tb_interacoes_intencoes
     * const count = await prisma.tb_interacoes_intencoes.count({
     *   where: {
     *     // ... the filter for the Tb_interacoes_intencoes we want to count
     *   }
     * })
    **/
    count<T extends tb_interacoes_intencoesCountArgs>(
      args?: Subset<T, tb_interacoes_intencoesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_interacoes_intencoesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_interacoes_intencoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_interacoes_intencoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_interacoes_intencoesAggregateArgs>(args: Subset<T, Tb_interacoes_intencoesAggregateArgs>): Prisma.PrismaPromise<GetTb_interacoes_intencoesAggregateType<T>>

    /**
     * Group by Tb_interacoes_intencoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_interacoes_intencoesGroupByArgs} args - Group by arguments.
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
      T extends tb_interacoes_intencoesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_interacoes_intencoesGroupByArgs['orderBy'] }
        : { orderBy?: tb_interacoes_intencoesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_interacoes_intencoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_interacoes_intencoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_interacoes_intencoes model
   */
  readonly fields: tb_interacoes_intencoesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_interacoes_intencoes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_interacoes_intencoesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tb_intencoes<T extends tb_intencoesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tb_intencoesDefaultArgs<ExtArgs>>): Prisma__tb_intencoesClient<$Result.GetResult<Prisma.$tb_intencoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tb_interacoes<T extends tb_interacoesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tb_interacoesDefaultArgs<ExtArgs>>): Prisma__tb_interacoesClient<$Result.GetResult<Prisma.$tb_interacoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tb_interacoes_intencoes model
   */
  interface tb_interacoes_intencoesFieldRefs {
    readonly interacao_id: FieldRef<"tb_interacoes_intencoes", 'Int'>
    readonly intencao_id: FieldRef<"tb_interacoes_intencoes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tb_interacoes_intencoes findUnique
   */
  export type tb_interacoes_intencoesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes_intencoes
     */
    select?: tb_interacoes_intencoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes_intencoes
     */
    omit?: tb_interacoes_intencoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoes_intencoesInclude<ExtArgs> | null
    /**
     * Filter, which tb_interacoes_intencoes to fetch.
     */
    where: tb_interacoes_intencoesWhereUniqueInput
  }

  /**
   * tb_interacoes_intencoes findUniqueOrThrow
   */
  export type tb_interacoes_intencoesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes_intencoes
     */
    select?: tb_interacoes_intencoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes_intencoes
     */
    omit?: tb_interacoes_intencoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoes_intencoesInclude<ExtArgs> | null
    /**
     * Filter, which tb_interacoes_intencoes to fetch.
     */
    where: tb_interacoes_intencoesWhereUniqueInput
  }

  /**
   * tb_interacoes_intencoes findFirst
   */
  export type tb_interacoes_intencoesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes_intencoes
     */
    select?: tb_interacoes_intencoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes_intencoes
     */
    omit?: tb_interacoes_intencoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoes_intencoesInclude<ExtArgs> | null
    /**
     * Filter, which tb_interacoes_intencoes to fetch.
     */
    where?: tb_interacoes_intencoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_interacoes_intencoes to fetch.
     */
    orderBy?: tb_interacoes_intencoesOrderByWithRelationInput | tb_interacoes_intencoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_interacoes_intencoes.
     */
    cursor?: tb_interacoes_intencoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_interacoes_intencoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_interacoes_intencoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_interacoes_intencoes.
     */
    distinct?: Tb_interacoes_intencoesScalarFieldEnum | Tb_interacoes_intencoesScalarFieldEnum[]
  }

  /**
   * tb_interacoes_intencoes findFirstOrThrow
   */
  export type tb_interacoes_intencoesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes_intencoes
     */
    select?: tb_interacoes_intencoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes_intencoes
     */
    omit?: tb_interacoes_intencoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoes_intencoesInclude<ExtArgs> | null
    /**
     * Filter, which tb_interacoes_intencoes to fetch.
     */
    where?: tb_interacoes_intencoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_interacoes_intencoes to fetch.
     */
    orderBy?: tb_interacoes_intencoesOrderByWithRelationInput | tb_interacoes_intencoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_interacoes_intencoes.
     */
    cursor?: tb_interacoes_intencoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_interacoes_intencoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_interacoes_intencoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_interacoes_intencoes.
     */
    distinct?: Tb_interacoes_intencoesScalarFieldEnum | Tb_interacoes_intencoesScalarFieldEnum[]
  }

  /**
   * tb_interacoes_intencoes findMany
   */
  export type tb_interacoes_intencoesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes_intencoes
     */
    select?: tb_interacoes_intencoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes_intencoes
     */
    omit?: tb_interacoes_intencoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoes_intencoesInclude<ExtArgs> | null
    /**
     * Filter, which tb_interacoes_intencoes to fetch.
     */
    where?: tb_interacoes_intencoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_interacoes_intencoes to fetch.
     */
    orderBy?: tb_interacoes_intencoesOrderByWithRelationInput | tb_interacoes_intencoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_interacoes_intencoes.
     */
    cursor?: tb_interacoes_intencoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_interacoes_intencoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_interacoes_intencoes.
     */
    skip?: number
    distinct?: Tb_interacoes_intencoesScalarFieldEnum | Tb_interacoes_intencoesScalarFieldEnum[]
  }

  /**
   * tb_interacoes_intencoes create
   */
  export type tb_interacoes_intencoesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes_intencoes
     */
    select?: tb_interacoes_intencoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes_intencoes
     */
    omit?: tb_interacoes_intencoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoes_intencoesInclude<ExtArgs> | null
    /**
     * The data needed to create a tb_interacoes_intencoes.
     */
    data: XOR<tb_interacoes_intencoesCreateInput, tb_interacoes_intencoesUncheckedCreateInput>
  }

  /**
   * tb_interacoes_intencoes createMany
   */
  export type tb_interacoes_intencoesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_interacoes_intencoes.
     */
    data: tb_interacoes_intencoesCreateManyInput | tb_interacoes_intencoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_interacoes_intencoes createManyAndReturn
   */
  export type tb_interacoes_intencoesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes_intencoes
     */
    select?: tb_interacoes_intencoesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes_intencoes
     */
    omit?: tb_interacoes_intencoesOmit<ExtArgs> | null
    /**
     * The data used to create many tb_interacoes_intencoes.
     */
    data: tb_interacoes_intencoesCreateManyInput | tb_interacoes_intencoesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoes_intencoesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tb_interacoes_intencoes update
   */
  export type tb_interacoes_intencoesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes_intencoes
     */
    select?: tb_interacoes_intencoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes_intencoes
     */
    omit?: tb_interacoes_intencoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoes_intencoesInclude<ExtArgs> | null
    /**
     * The data needed to update a tb_interacoes_intencoes.
     */
    data: XOR<tb_interacoes_intencoesUpdateInput, tb_interacoes_intencoesUncheckedUpdateInput>
    /**
     * Choose, which tb_interacoes_intencoes to update.
     */
    where: tb_interacoes_intencoesWhereUniqueInput
  }

  /**
   * tb_interacoes_intencoes updateMany
   */
  export type tb_interacoes_intencoesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_interacoes_intencoes.
     */
    data: XOR<tb_interacoes_intencoesUpdateManyMutationInput, tb_interacoes_intencoesUncheckedUpdateManyInput>
    /**
     * Filter which tb_interacoes_intencoes to update
     */
    where?: tb_interacoes_intencoesWhereInput
    /**
     * Limit how many tb_interacoes_intencoes to update.
     */
    limit?: number
  }

  /**
   * tb_interacoes_intencoes updateManyAndReturn
   */
  export type tb_interacoes_intencoesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes_intencoes
     */
    select?: tb_interacoes_intencoesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes_intencoes
     */
    omit?: tb_interacoes_intencoesOmit<ExtArgs> | null
    /**
     * The data used to update tb_interacoes_intencoes.
     */
    data: XOR<tb_interacoes_intencoesUpdateManyMutationInput, tb_interacoes_intencoesUncheckedUpdateManyInput>
    /**
     * Filter which tb_interacoes_intencoes to update
     */
    where?: tb_interacoes_intencoesWhereInput
    /**
     * Limit how many tb_interacoes_intencoes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoes_intencoesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tb_interacoes_intencoes upsert
   */
  export type tb_interacoes_intencoesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes_intencoes
     */
    select?: tb_interacoes_intencoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes_intencoes
     */
    omit?: tb_interacoes_intencoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoes_intencoesInclude<ExtArgs> | null
    /**
     * The filter to search for the tb_interacoes_intencoes to update in case it exists.
     */
    where: tb_interacoes_intencoesWhereUniqueInput
    /**
     * In case the tb_interacoes_intencoes found by the `where` argument doesn't exist, create a new tb_interacoes_intencoes with this data.
     */
    create: XOR<tb_interacoes_intencoesCreateInput, tb_interacoes_intencoesUncheckedCreateInput>
    /**
     * In case the tb_interacoes_intencoes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_interacoes_intencoesUpdateInput, tb_interacoes_intencoesUncheckedUpdateInput>
  }

  /**
   * tb_interacoes_intencoes delete
   */
  export type tb_interacoes_intencoesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes_intencoes
     */
    select?: tb_interacoes_intencoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes_intencoes
     */
    omit?: tb_interacoes_intencoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoes_intencoesInclude<ExtArgs> | null
    /**
     * Filter which tb_interacoes_intencoes to delete.
     */
    where: tb_interacoes_intencoesWhereUniqueInput
  }

  /**
   * tb_interacoes_intencoes deleteMany
   */
  export type tb_interacoes_intencoesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_interacoes_intencoes to delete
     */
    where?: tb_interacoes_intencoesWhereInput
    /**
     * Limit how many tb_interacoes_intencoes to delete.
     */
    limit?: number
  }

  /**
   * tb_interacoes_intencoes without action
   */
  export type tb_interacoes_intencoesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes_intencoes
     */
    select?: tb_interacoes_intencoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes_intencoes
     */
    omit?: tb_interacoes_intencoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoes_intencoesInclude<ExtArgs> | null
  }


  /**
   * Model tb_movimentacoes_estoque
   */

  export type AggregateTb_movimentacoes_estoque = {
    _count: Tb_movimentacoes_estoqueCountAggregateOutputType | null
    _avg: Tb_movimentacoes_estoqueAvgAggregateOutputType | null
    _sum: Tb_movimentacoes_estoqueSumAggregateOutputType | null
    _min: Tb_movimentacoes_estoqueMinAggregateOutputType | null
    _max: Tb_movimentacoes_estoqueMaxAggregateOutputType | null
  }

  export type Tb_movimentacoes_estoqueAvgAggregateOutputType = {
    id: number | null
    produto_id: number | null
    quantidade: Decimal | null
  }

  export type Tb_movimentacoes_estoqueSumAggregateOutputType = {
    id: number | null
    produto_id: number | null
    quantidade: Decimal | null
  }

  export type Tb_movimentacoes_estoqueMinAggregateOutputType = {
    id: number | null
    produto_id: number | null
    tipo_movimentacao: string | null
    quantidade: Decimal | null
    data_movimentacao: Date | null
    observacao: string | null
  }

  export type Tb_movimentacoes_estoqueMaxAggregateOutputType = {
    id: number | null
    produto_id: number | null
    tipo_movimentacao: string | null
    quantidade: Decimal | null
    data_movimentacao: Date | null
    observacao: string | null
  }

  export type Tb_movimentacoes_estoqueCountAggregateOutputType = {
    id: number
    produto_id: number
    tipo_movimentacao: number
    quantidade: number
    data_movimentacao: number
    observacao: number
    _all: number
  }


  export type Tb_movimentacoes_estoqueAvgAggregateInputType = {
    id?: true
    produto_id?: true
    quantidade?: true
  }

  export type Tb_movimentacoes_estoqueSumAggregateInputType = {
    id?: true
    produto_id?: true
    quantidade?: true
  }

  export type Tb_movimentacoes_estoqueMinAggregateInputType = {
    id?: true
    produto_id?: true
    tipo_movimentacao?: true
    quantidade?: true
    data_movimentacao?: true
    observacao?: true
  }

  export type Tb_movimentacoes_estoqueMaxAggregateInputType = {
    id?: true
    produto_id?: true
    tipo_movimentacao?: true
    quantidade?: true
    data_movimentacao?: true
    observacao?: true
  }

  export type Tb_movimentacoes_estoqueCountAggregateInputType = {
    id?: true
    produto_id?: true
    tipo_movimentacao?: true
    quantidade?: true
    data_movimentacao?: true
    observacao?: true
    _all?: true
  }

  export type Tb_movimentacoes_estoqueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_movimentacoes_estoque to aggregate.
     */
    where?: tb_movimentacoes_estoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_movimentacoes_estoques to fetch.
     */
    orderBy?: tb_movimentacoes_estoqueOrderByWithRelationInput | tb_movimentacoes_estoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_movimentacoes_estoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_movimentacoes_estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_movimentacoes_estoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_movimentacoes_estoques
    **/
    _count?: true | Tb_movimentacoes_estoqueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_movimentacoes_estoqueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_movimentacoes_estoqueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_movimentacoes_estoqueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_movimentacoes_estoqueMaxAggregateInputType
  }

  export type GetTb_movimentacoes_estoqueAggregateType<T extends Tb_movimentacoes_estoqueAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_movimentacoes_estoque]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_movimentacoes_estoque[P]>
      : GetScalarType<T[P], AggregateTb_movimentacoes_estoque[P]>
  }




  export type tb_movimentacoes_estoqueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_movimentacoes_estoqueWhereInput
    orderBy?: tb_movimentacoes_estoqueOrderByWithAggregationInput | tb_movimentacoes_estoqueOrderByWithAggregationInput[]
    by: Tb_movimentacoes_estoqueScalarFieldEnum[] | Tb_movimentacoes_estoqueScalarFieldEnum
    having?: tb_movimentacoes_estoqueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_movimentacoes_estoqueCountAggregateInputType | true
    _avg?: Tb_movimentacoes_estoqueAvgAggregateInputType
    _sum?: Tb_movimentacoes_estoqueSumAggregateInputType
    _min?: Tb_movimentacoes_estoqueMinAggregateInputType
    _max?: Tb_movimentacoes_estoqueMaxAggregateInputType
  }

  export type Tb_movimentacoes_estoqueGroupByOutputType = {
    id: number
    produto_id: number
    tipo_movimentacao: string
    quantidade: Decimal
    data_movimentacao: Date | null
    observacao: string | null
    _count: Tb_movimentacoes_estoqueCountAggregateOutputType | null
    _avg: Tb_movimentacoes_estoqueAvgAggregateOutputType | null
    _sum: Tb_movimentacoes_estoqueSumAggregateOutputType | null
    _min: Tb_movimentacoes_estoqueMinAggregateOutputType | null
    _max: Tb_movimentacoes_estoqueMaxAggregateOutputType | null
  }

  type GetTb_movimentacoes_estoqueGroupByPayload<T extends tb_movimentacoes_estoqueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_movimentacoes_estoqueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_movimentacoes_estoqueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_movimentacoes_estoqueGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_movimentacoes_estoqueGroupByOutputType[P]>
        }
      >
    >


  export type tb_movimentacoes_estoqueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produto_id?: boolean
    tipo_movimentacao?: boolean
    quantidade?: boolean
    data_movimentacao?: boolean
    observacao?: boolean
    tb_produtos_estoque?: boolean | tb_produtos_estoqueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_movimentacoes_estoque"]>

  export type tb_movimentacoes_estoqueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produto_id?: boolean
    tipo_movimentacao?: boolean
    quantidade?: boolean
    data_movimentacao?: boolean
    observacao?: boolean
    tb_produtos_estoque?: boolean | tb_produtos_estoqueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_movimentacoes_estoque"]>

  export type tb_movimentacoes_estoqueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produto_id?: boolean
    tipo_movimentacao?: boolean
    quantidade?: boolean
    data_movimentacao?: boolean
    observacao?: boolean
    tb_produtos_estoque?: boolean | tb_produtos_estoqueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_movimentacoes_estoque"]>

  export type tb_movimentacoes_estoqueSelectScalar = {
    id?: boolean
    produto_id?: boolean
    tipo_movimentacao?: boolean
    quantidade?: boolean
    data_movimentacao?: boolean
    observacao?: boolean
  }

  export type tb_movimentacoes_estoqueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "produto_id" | "tipo_movimentacao" | "quantidade" | "data_movimentacao" | "observacao", ExtArgs["result"]["tb_movimentacoes_estoque"]>
  export type tb_movimentacoes_estoqueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_produtos_estoque?: boolean | tb_produtos_estoqueDefaultArgs<ExtArgs>
  }
  export type tb_movimentacoes_estoqueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_produtos_estoque?: boolean | tb_produtos_estoqueDefaultArgs<ExtArgs>
  }
  export type tb_movimentacoes_estoqueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_produtos_estoque?: boolean | tb_produtos_estoqueDefaultArgs<ExtArgs>
  }

  export type $tb_movimentacoes_estoquePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_movimentacoes_estoque"
    objects: {
      tb_produtos_estoque: Prisma.$tb_produtos_estoquePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      produto_id: number
      tipo_movimentacao: string
      quantidade: Prisma.Decimal
      data_movimentacao: Date | null
      observacao: string | null
    }, ExtArgs["result"]["tb_movimentacoes_estoque"]>
    composites: {}
  }

  type tb_movimentacoes_estoqueGetPayload<S extends boolean | null | undefined | tb_movimentacoes_estoqueDefaultArgs> = $Result.GetResult<Prisma.$tb_movimentacoes_estoquePayload, S>

  type tb_movimentacoes_estoqueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_movimentacoes_estoqueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_movimentacoes_estoqueCountAggregateInputType | true
    }

  export interface tb_movimentacoes_estoqueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_movimentacoes_estoque'], meta: { name: 'tb_movimentacoes_estoque' } }
    /**
     * Find zero or one Tb_movimentacoes_estoque that matches the filter.
     * @param {tb_movimentacoes_estoqueFindUniqueArgs} args - Arguments to find a Tb_movimentacoes_estoque
     * @example
     * // Get one Tb_movimentacoes_estoque
     * const tb_movimentacoes_estoque = await prisma.tb_movimentacoes_estoque.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_movimentacoes_estoqueFindUniqueArgs>(args: SelectSubset<T, tb_movimentacoes_estoqueFindUniqueArgs<ExtArgs>>): Prisma__tb_movimentacoes_estoqueClient<$Result.GetResult<Prisma.$tb_movimentacoes_estoquePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_movimentacoes_estoque that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_movimentacoes_estoqueFindUniqueOrThrowArgs} args - Arguments to find a Tb_movimentacoes_estoque
     * @example
     * // Get one Tb_movimentacoes_estoque
     * const tb_movimentacoes_estoque = await prisma.tb_movimentacoes_estoque.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_movimentacoes_estoqueFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_movimentacoes_estoqueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_movimentacoes_estoqueClient<$Result.GetResult<Prisma.$tb_movimentacoes_estoquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_movimentacoes_estoque that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_movimentacoes_estoqueFindFirstArgs} args - Arguments to find a Tb_movimentacoes_estoque
     * @example
     * // Get one Tb_movimentacoes_estoque
     * const tb_movimentacoes_estoque = await prisma.tb_movimentacoes_estoque.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_movimentacoes_estoqueFindFirstArgs>(args?: SelectSubset<T, tb_movimentacoes_estoqueFindFirstArgs<ExtArgs>>): Prisma__tb_movimentacoes_estoqueClient<$Result.GetResult<Prisma.$tb_movimentacoes_estoquePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_movimentacoes_estoque that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_movimentacoes_estoqueFindFirstOrThrowArgs} args - Arguments to find a Tb_movimentacoes_estoque
     * @example
     * // Get one Tb_movimentacoes_estoque
     * const tb_movimentacoes_estoque = await prisma.tb_movimentacoes_estoque.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_movimentacoes_estoqueFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_movimentacoes_estoqueFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_movimentacoes_estoqueClient<$Result.GetResult<Prisma.$tb_movimentacoes_estoquePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_movimentacoes_estoques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_movimentacoes_estoqueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_movimentacoes_estoques
     * const tb_movimentacoes_estoques = await prisma.tb_movimentacoes_estoque.findMany()
     * 
     * // Get first 10 Tb_movimentacoes_estoques
     * const tb_movimentacoes_estoques = await prisma.tb_movimentacoes_estoque.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_movimentacoes_estoqueWithIdOnly = await prisma.tb_movimentacoes_estoque.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_movimentacoes_estoqueFindManyArgs>(args?: SelectSubset<T, tb_movimentacoes_estoqueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_movimentacoes_estoquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_movimentacoes_estoque.
     * @param {tb_movimentacoes_estoqueCreateArgs} args - Arguments to create a Tb_movimentacoes_estoque.
     * @example
     * // Create one Tb_movimentacoes_estoque
     * const Tb_movimentacoes_estoque = await prisma.tb_movimentacoes_estoque.create({
     *   data: {
     *     // ... data to create a Tb_movimentacoes_estoque
     *   }
     * })
     * 
     */
    create<T extends tb_movimentacoes_estoqueCreateArgs>(args: SelectSubset<T, tb_movimentacoes_estoqueCreateArgs<ExtArgs>>): Prisma__tb_movimentacoes_estoqueClient<$Result.GetResult<Prisma.$tb_movimentacoes_estoquePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_movimentacoes_estoques.
     * @param {tb_movimentacoes_estoqueCreateManyArgs} args - Arguments to create many Tb_movimentacoes_estoques.
     * @example
     * // Create many Tb_movimentacoes_estoques
     * const tb_movimentacoes_estoque = await prisma.tb_movimentacoes_estoque.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_movimentacoes_estoqueCreateManyArgs>(args?: SelectSubset<T, tb_movimentacoes_estoqueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tb_movimentacoes_estoques and returns the data saved in the database.
     * @param {tb_movimentacoes_estoqueCreateManyAndReturnArgs} args - Arguments to create many Tb_movimentacoes_estoques.
     * @example
     * // Create many Tb_movimentacoes_estoques
     * const tb_movimentacoes_estoque = await prisma.tb_movimentacoes_estoque.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tb_movimentacoes_estoques and only return the `id`
     * const tb_movimentacoes_estoqueWithIdOnly = await prisma.tb_movimentacoes_estoque.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tb_movimentacoes_estoqueCreateManyAndReturnArgs>(args?: SelectSubset<T, tb_movimentacoes_estoqueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_movimentacoes_estoquePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tb_movimentacoes_estoque.
     * @param {tb_movimentacoes_estoqueDeleteArgs} args - Arguments to delete one Tb_movimentacoes_estoque.
     * @example
     * // Delete one Tb_movimentacoes_estoque
     * const Tb_movimentacoes_estoque = await prisma.tb_movimentacoes_estoque.delete({
     *   where: {
     *     // ... filter to delete one Tb_movimentacoes_estoque
     *   }
     * })
     * 
     */
    delete<T extends tb_movimentacoes_estoqueDeleteArgs>(args: SelectSubset<T, tb_movimentacoes_estoqueDeleteArgs<ExtArgs>>): Prisma__tb_movimentacoes_estoqueClient<$Result.GetResult<Prisma.$tb_movimentacoes_estoquePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_movimentacoes_estoque.
     * @param {tb_movimentacoes_estoqueUpdateArgs} args - Arguments to update one Tb_movimentacoes_estoque.
     * @example
     * // Update one Tb_movimentacoes_estoque
     * const tb_movimentacoes_estoque = await prisma.tb_movimentacoes_estoque.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_movimentacoes_estoqueUpdateArgs>(args: SelectSubset<T, tb_movimentacoes_estoqueUpdateArgs<ExtArgs>>): Prisma__tb_movimentacoes_estoqueClient<$Result.GetResult<Prisma.$tb_movimentacoes_estoquePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_movimentacoes_estoques.
     * @param {tb_movimentacoes_estoqueDeleteManyArgs} args - Arguments to filter Tb_movimentacoes_estoques to delete.
     * @example
     * // Delete a few Tb_movimentacoes_estoques
     * const { count } = await prisma.tb_movimentacoes_estoque.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_movimentacoes_estoqueDeleteManyArgs>(args?: SelectSubset<T, tb_movimentacoes_estoqueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_movimentacoes_estoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_movimentacoes_estoqueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_movimentacoes_estoques
     * const tb_movimentacoes_estoque = await prisma.tb_movimentacoes_estoque.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_movimentacoes_estoqueUpdateManyArgs>(args: SelectSubset<T, tb_movimentacoes_estoqueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_movimentacoes_estoques and returns the data updated in the database.
     * @param {tb_movimentacoes_estoqueUpdateManyAndReturnArgs} args - Arguments to update many Tb_movimentacoes_estoques.
     * @example
     * // Update many Tb_movimentacoes_estoques
     * const tb_movimentacoes_estoque = await prisma.tb_movimentacoes_estoque.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tb_movimentacoes_estoques and only return the `id`
     * const tb_movimentacoes_estoqueWithIdOnly = await prisma.tb_movimentacoes_estoque.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends tb_movimentacoes_estoqueUpdateManyAndReturnArgs>(args: SelectSubset<T, tb_movimentacoes_estoqueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_movimentacoes_estoquePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tb_movimentacoes_estoque.
     * @param {tb_movimentacoes_estoqueUpsertArgs} args - Arguments to update or create a Tb_movimentacoes_estoque.
     * @example
     * // Update or create a Tb_movimentacoes_estoque
     * const tb_movimentacoes_estoque = await prisma.tb_movimentacoes_estoque.upsert({
     *   create: {
     *     // ... data to create a Tb_movimentacoes_estoque
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_movimentacoes_estoque we want to update
     *   }
     * })
     */
    upsert<T extends tb_movimentacoes_estoqueUpsertArgs>(args: SelectSubset<T, tb_movimentacoes_estoqueUpsertArgs<ExtArgs>>): Prisma__tb_movimentacoes_estoqueClient<$Result.GetResult<Prisma.$tb_movimentacoes_estoquePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_movimentacoes_estoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_movimentacoes_estoqueCountArgs} args - Arguments to filter Tb_movimentacoes_estoques to count.
     * @example
     * // Count the number of Tb_movimentacoes_estoques
     * const count = await prisma.tb_movimentacoes_estoque.count({
     *   where: {
     *     // ... the filter for the Tb_movimentacoes_estoques we want to count
     *   }
     * })
    **/
    count<T extends tb_movimentacoes_estoqueCountArgs>(
      args?: Subset<T, tb_movimentacoes_estoqueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_movimentacoes_estoqueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_movimentacoes_estoque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_movimentacoes_estoqueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_movimentacoes_estoqueAggregateArgs>(args: Subset<T, Tb_movimentacoes_estoqueAggregateArgs>): Prisma.PrismaPromise<GetTb_movimentacoes_estoqueAggregateType<T>>

    /**
     * Group by Tb_movimentacoes_estoque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_movimentacoes_estoqueGroupByArgs} args - Group by arguments.
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
      T extends tb_movimentacoes_estoqueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_movimentacoes_estoqueGroupByArgs['orderBy'] }
        : { orderBy?: tb_movimentacoes_estoqueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_movimentacoes_estoqueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_movimentacoes_estoqueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_movimentacoes_estoque model
   */
  readonly fields: tb_movimentacoes_estoqueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_movimentacoes_estoque.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_movimentacoes_estoqueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tb_produtos_estoque<T extends tb_produtos_estoqueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tb_produtos_estoqueDefaultArgs<ExtArgs>>): Prisma__tb_produtos_estoqueClient<$Result.GetResult<Prisma.$tb_produtos_estoquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tb_movimentacoes_estoque model
   */
  interface tb_movimentacoes_estoqueFieldRefs {
    readonly id: FieldRef<"tb_movimentacoes_estoque", 'Int'>
    readonly produto_id: FieldRef<"tb_movimentacoes_estoque", 'Int'>
    readonly tipo_movimentacao: FieldRef<"tb_movimentacoes_estoque", 'String'>
    readonly quantidade: FieldRef<"tb_movimentacoes_estoque", 'Decimal'>
    readonly data_movimentacao: FieldRef<"tb_movimentacoes_estoque", 'DateTime'>
    readonly observacao: FieldRef<"tb_movimentacoes_estoque", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_movimentacoes_estoque findUnique
   */
  export type tb_movimentacoes_estoqueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_movimentacoes_estoque
     */
    select?: tb_movimentacoes_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_movimentacoes_estoque
     */
    omit?: tb_movimentacoes_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_movimentacoes_estoqueInclude<ExtArgs> | null
    /**
     * Filter, which tb_movimentacoes_estoque to fetch.
     */
    where: tb_movimentacoes_estoqueWhereUniqueInput
  }

  /**
   * tb_movimentacoes_estoque findUniqueOrThrow
   */
  export type tb_movimentacoes_estoqueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_movimentacoes_estoque
     */
    select?: tb_movimentacoes_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_movimentacoes_estoque
     */
    omit?: tb_movimentacoes_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_movimentacoes_estoqueInclude<ExtArgs> | null
    /**
     * Filter, which tb_movimentacoes_estoque to fetch.
     */
    where: tb_movimentacoes_estoqueWhereUniqueInput
  }

  /**
   * tb_movimentacoes_estoque findFirst
   */
  export type tb_movimentacoes_estoqueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_movimentacoes_estoque
     */
    select?: tb_movimentacoes_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_movimentacoes_estoque
     */
    omit?: tb_movimentacoes_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_movimentacoes_estoqueInclude<ExtArgs> | null
    /**
     * Filter, which tb_movimentacoes_estoque to fetch.
     */
    where?: tb_movimentacoes_estoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_movimentacoes_estoques to fetch.
     */
    orderBy?: tb_movimentacoes_estoqueOrderByWithRelationInput | tb_movimentacoes_estoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_movimentacoes_estoques.
     */
    cursor?: tb_movimentacoes_estoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_movimentacoes_estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_movimentacoes_estoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_movimentacoes_estoques.
     */
    distinct?: Tb_movimentacoes_estoqueScalarFieldEnum | Tb_movimentacoes_estoqueScalarFieldEnum[]
  }

  /**
   * tb_movimentacoes_estoque findFirstOrThrow
   */
  export type tb_movimentacoes_estoqueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_movimentacoes_estoque
     */
    select?: tb_movimentacoes_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_movimentacoes_estoque
     */
    omit?: tb_movimentacoes_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_movimentacoes_estoqueInclude<ExtArgs> | null
    /**
     * Filter, which tb_movimentacoes_estoque to fetch.
     */
    where?: tb_movimentacoes_estoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_movimentacoes_estoques to fetch.
     */
    orderBy?: tb_movimentacoes_estoqueOrderByWithRelationInput | tb_movimentacoes_estoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_movimentacoes_estoques.
     */
    cursor?: tb_movimentacoes_estoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_movimentacoes_estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_movimentacoes_estoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_movimentacoes_estoques.
     */
    distinct?: Tb_movimentacoes_estoqueScalarFieldEnum | Tb_movimentacoes_estoqueScalarFieldEnum[]
  }

  /**
   * tb_movimentacoes_estoque findMany
   */
  export type tb_movimentacoes_estoqueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_movimentacoes_estoque
     */
    select?: tb_movimentacoes_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_movimentacoes_estoque
     */
    omit?: tb_movimentacoes_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_movimentacoes_estoqueInclude<ExtArgs> | null
    /**
     * Filter, which tb_movimentacoes_estoques to fetch.
     */
    where?: tb_movimentacoes_estoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_movimentacoes_estoques to fetch.
     */
    orderBy?: tb_movimentacoes_estoqueOrderByWithRelationInput | tb_movimentacoes_estoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_movimentacoes_estoques.
     */
    cursor?: tb_movimentacoes_estoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_movimentacoes_estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_movimentacoes_estoques.
     */
    skip?: number
    distinct?: Tb_movimentacoes_estoqueScalarFieldEnum | Tb_movimentacoes_estoqueScalarFieldEnum[]
  }

  /**
   * tb_movimentacoes_estoque create
   */
  export type tb_movimentacoes_estoqueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_movimentacoes_estoque
     */
    select?: tb_movimentacoes_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_movimentacoes_estoque
     */
    omit?: tb_movimentacoes_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_movimentacoes_estoqueInclude<ExtArgs> | null
    /**
     * The data needed to create a tb_movimentacoes_estoque.
     */
    data: XOR<tb_movimentacoes_estoqueCreateInput, tb_movimentacoes_estoqueUncheckedCreateInput>
  }

  /**
   * tb_movimentacoes_estoque createMany
   */
  export type tb_movimentacoes_estoqueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_movimentacoes_estoques.
     */
    data: tb_movimentacoes_estoqueCreateManyInput | tb_movimentacoes_estoqueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_movimentacoes_estoque createManyAndReturn
   */
  export type tb_movimentacoes_estoqueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_movimentacoes_estoque
     */
    select?: tb_movimentacoes_estoqueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_movimentacoes_estoque
     */
    omit?: tb_movimentacoes_estoqueOmit<ExtArgs> | null
    /**
     * The data used to create many tb_movimentacoes_estoques.
     */
    data: tb_movimentacoes_estoqueCreateManyInput | tb_movimentacoes_estoqueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_movimentacoes_estoqueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tb_movimentacoes_estoque update
   */
  export type tb_movimentacoes_estoqueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_movimentacoes_estoque
     */
    select?: tb_movimentacoes_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_movimentacoes_estoque
     */
    omit?: tb_movimentacoes_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_movimentacoes_estoqueInclude<ExtArgs> | null
    /**
     * The data needed to update a tb_movimentacoes_estoque.
     */
    data: XOR<tb_movimentacoes_estoqueUpdateInput, tb_movimentacoes_estoqueUncheckedUpdateInput>
    /**
     * Choose, which tb_movimentacoes_estoque to update.
     */
    where: tb_movimentacoes_estoqueWhereUniqueInput
  }

  /**
   * tb_movimentacoes_estoque updateMany
   */
  export type tb_movimentacoes_estoqueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_movimentacoes_estoques.
     */
    data: XOR<tb_movimentacoes_estoqueUpdateManyMutationInput, tb_movimentacoes_estoqueUncheckedUpdateManyInput>
    /**
     * Filter which tb_movimentacoes_estoques to update
     */
    where?: tb_movimentacoes_estoqueWhereInput
    /**
     * Limit how many tb_movimentacoes_estoques to update.
     */
    limit?: number
  }

  /**
   * tb_movimentacoes_estoque updateManyAndReturn
   */
  export type tb_movimentacoes_estoqueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_movimentacoes_estoque
     */
    select?: tb_movimentacoes_estoqueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_movimentacoes_estoque
     */
    omit?: tb_movimentacoes_estoqueOmit<ExtArgs> | null
    /**
     * The data used to update tb_movimentacoes_estoques.
     */
    data: XOR<tb_movimentacoes_estoqueUpdateManyMutationInput, tb_movimentacoes_estoqueUncheckedUpdateManyInput>
    /**
     * Filter which tb_movimentacoes_estoques to update
     */
    where?: tb_movimentacoes_estoqueWhereInput
    /**
     * Limit how many tb_movimentacoes_estoques to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_movimentacoes_estoqueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tb_movimentacoes_estoque upsert
   */
  export type tb_movimentacoes_estoqueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_movimentacoes_estoque
     */
    select?: tb_movimentacoes_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_movimentacoes_estoque
     */
    omit?: tb_movimentacoes_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_movimentacoes_estoqueInclude<ExtArgs> | null
    /**
     * The filter to search for the tb_movimentacoes_estoque to update in case it exists.
     */
    where: tb_movimentacoes_estoqueWhereUniqueInput
    /**
     * In case the tb_movimentacoes_estoque found by the `where` argument doesn't exist, create a new tb_movimentacoes_estoque with this data.
     */
    create: XOR<tb_movimentacoes_estoqueCreateInput, tb_movimentacoes_estoqueUncheckedCreateInput>
    /**
     * In case the tb_movimentacoes_estoque was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_movimentacoes_estoqueUpdateInput, tb_movimentacoes_estoqueUncheckedUpdateInput>
  }

  /**
   * tb_movimentacoes_estoque delete
   */
  export type tb_movimentacoes_estoqueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_movimentacoes_estoque
     */
    select?: tb_movimentacoes_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_movimentacoes_estoque
     */
    omit?: tb_movimentacoes_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_movimentacoes_estoqueInclude<ExtArgs> | null
    /**
     * Filter which tb_movimentacoes_estoque to delete.
     */
    where: tb_movimentacoes_estoqueWhereUniqueInput
  }

  /**
   * tb_movimentacoes_estoque deleteMany
   */
  export type tb_movimentacoes_estoqueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_movimentacoes_estoques to delete
     */
    where?: tb_movimentacoes_estoqueWhereInput
    /**
     * Limit how many tb_movimentacoes_estoques to delete.
     */
    limit?: number
  }

  /**
   * tb_movimentacoes_estoque without action
   */
  export type tb_movimentacoes_estoqueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_movimentacoes_estoque
     */
    select?: tb_movimentacoes_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_movimentacoes_estoque
     */
    omit?: tb_movimentacoes_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_movimentacoes_estoqueInclude<ExtArgs> | null
  }


  /**
   * Model tb_organizacoes
   */

  export type AggregateTb_organizacoes = {
    _count: Tb_organizacoesCountAggregateOutputType | null
    _avg: Tb_organizacoesAvgAggregateOutputType | null
    _sum: Tb_organizacoesSumAggregateOutputType | null
    _min: Tb_organizacoesMinAggregateOutputType | null
    _max: Tb_organizacoesMaxAggregateOutputType | null
  }

  export type Tb_organizacoesAvgAggregateOutputType = {
    id: number | null
  }

  export type Tb_organizacoesSumAggregateOutputType = {
    id: number | null
  }

  export type Tb_organizacoesMinAggregateOutputType = {
    id: number | null
    nome: string | null
    cnpj: string | null
    data_criacao: Date | null
  }

  export type Tb_organizacoesMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    cnpj: string | null
    data_criacao: Date | null
  }

  export type Tb_organizacoesCountAggregateOutputType = {
    id: number
    nome: number
    cnpj: number
    data_criacao: number
    _all: number
  }


  export type Tb_organizacoesAvgAggregateInputType = {
    id?: true
  }

  export type Tb_organizacoesSumAggregateInputType = {
    id?: true
  }

  export type Tb_organizacoesMinAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    data_criacao?: true
  }

  export type Tb_organizacoesMaxAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    data_criacao?: true
  }

  export type Tb_organizacoesCountAggregateInputType = {
    id?: true
    nome?: true
    cnpj?: true
    data_criacao?: true
    _all?: true
  }

  export type Tb_organizacoesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_organizacoes to aggregate.
     */
    where?: tb_organizacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_organizacoes to fetch.
     */
    orderBy?: tb_organizacoesOrderByWithRelationInput | tb_organizacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_organizacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_organizacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_organizacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_organizacoes
    **/
    _count?: true | Tb_organizacoesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_organizacoesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_organizacoesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_organizacoesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_organizacoesMaxAggregateInputType
  }

  export type GetTb_organizacoesAggregateType<T extends Tb_organizacoesAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_organizacoes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_organizacoes[P]>
      : GetScalarType<T[P], AggregateTb_organizacoes[P]>
  }




  export type tb_organizacoesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_organizacoesWhereInput
    orderBy?: tb_organizacoesOrderByWithAggregationInput | tb_organizacoesOrderByWithAggregationInput[]
    by: Tb_organizacoesScalarFieldEnum[] | Tb_organizacoesScalarFieldEnum
    having?: tb_organizacoesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_organizacoesCountAggregateInputType | true
    _avg?: Tb_organizacoesAvgAggregateInputType
    _sum?: Tb_organizacoesSumAggregateInputType
    _min?: Tb_organizacoesMinAggregateInputType
    _max?: Tb_organizacoesMaxAggregateInputType
  }

  export type Tb_organizacoesGroupByOutputType = {
    id: number
    nome: string
    cnpj: string | null
    data_criacao: Date | null
    _count: Tb_organizacoesCountAggregateOutputType | null
    _avg: Tb_organizacoesAvgAggregateOutputType | null
    _sum: Tb_organizacoesSumAggregateOutputType | null
    _min: Tb_organizacoesMinAggregateOutputType | null
    _max: Tb_organizacoesMaxAggregateOutputType | null
  }

  type GetTb_organizacoesGroupByPayload<T extends tb_organizacoesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_organizacoesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_organizacoesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_organizacoesGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_organizacoesGroupByOutputType[P]>
        }
      >
    >


  export type tb_organizacoesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    data_criacao?: boolean
    tb_administradores?: boolean | tb_organizacoes$tb_administradoresArgs<ExtArgs>
    tb_usuarios?: boolean | tb_organizacoes$tb_usuariosArgs<ExtArgs>
    _count?: boolean | Tb_organizacoesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_organizacoes"]>

  export type tb_organizacoesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    data_criacao?: boolean
  }, ExtArgs["result"]["tb_organizacoes"]>

  export type tb_organizacoesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    data_criacao?: boolean
  }, ExtArgs["result"]["tb_organizacoes"]>

  export type tb_organizacoesSelectScalar = {
    id?: boolean
    nome?: boolean
    cnpj?: boolean
    data_criacao?: boolean
  }

  export type tb_organizacoesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cnpj" | "data_criacao", ExtArgs["result"]["tb_organizacoes"]>
  export type tb_organizacoesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_administradores?: boolean | tb_organizacoes$tb_administradoresArgs<ExtArgs>
    tb_usuarios?: boolean | tb_organizacoes$tb_usuariosArgs<ExtArgs>
    _count?: boolean | Tb_organizacoesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tb_organizacoesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tb_organizacoesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tb_organizacoesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_organizacoes"
    objects: {
      tb_administradores: Prisma.$tb_administradoresPayload<ExtArgs>[]
      tb_usuarios: Prisma.$tb_usuariosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      cnpj: string | null
      data_criacao: Date | null
    }, ExtArgs["result"]["tb_organizacoes"]>
    composites: {}
  }

  type tb_organizacoesGetPayload<S extends boolean | null | undefined | tb_organizacoesDefaultArgs> = $Result.GetResult<Prisma.$tb_organizacoesPayload, S>

  type tb_organizacoesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_organizacoesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_organizacoesCountAggregateInputType | true
    }

  export interface tb_organizacoesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_organizacoes'], meta: { name: 'tb_organizacoes' } }
    /**
     * Find zero or one Tb_organizacoes that matches the filter.
     * @param {tb_organizacoesFindUniqueArgs} args - Arguments to find a Tb_organizacoes
     * @example
     * // Get one Tb_organizacoes
     * const tb_organizacoes = await prisma.tb_organizacoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_organizacoesFindUniqueArgs>(args: SelectSubset<T, tb_organizacoesFindUniqueArgs<ExtArgs>>): Prisma__tb_organizacoesClient<$Result.GetResult<Prisma.$tb_organizacoesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_organizacoes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_organizacoesFindUniqueOrThrowArgs} args - Arguments to find a Tb_organizacoes
     * @example
     * // Get one Tb_organizacoes
     * const tb_organizacoes = await prisma.tb_organizacoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_organizacoesFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_organizacoesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_organizacoesClient<$Result.GetResult<Prisma.$tb_organizacoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_organizacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_organizacoesFindFirstArgs} args - Arguments to find a Tb_organizacoes
     * @example
     * // Get one Tb_organizacoes
     * const tb_organizacoes = await prisma.tb_organizacoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_organizacoesFindFirstArgs>(args?: SelectSubset<T, tb_organizacoesFindFirstArgs<ExtArgs>>): Prisma__tb_organizacoesClient<$Result.GetResult<Prisma.$tb_organizacoesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_organizacoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_organizacoesFindFirstOrThrowArgs} args - Arguments to find a Tb_organizacoes
     * @example
     * // Get one Tb_organizacoes
     * const tb_organizacoes = await prisma.tb_organizacoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_organizacoesFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_organizacoesFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_organizacoesClient<$Result.GetResult<Prisma.$tb_organizacoesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_organizacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_organizacoesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_organizacoes
     * const tb_organizacoes = await prisma.tb_organizacoes.findMany()
     * 
     * // Get first 10 Tb_organizacoes
     * const tb_organizacoes = await prisma.tb_organizacoes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_organizacoesWithIdOnly = await prisma.tb_organizacoes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_organizacoesFindManyArgs>(args?: SelectSubset<T, tb_organizacoesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_organizacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_organizacoes.
     * @param {tb_organizacoesCreateArgs} args - Arguments to create a Tb_organizacoes.
     * @example
     * // Create one Tb_organizacoes
     * const Tb_organizacoes = await prisma.tb_organizacoes.create({
     *   data: {
     *     // ... data to create a Tb_organizacoes
     *   }
     * })
     * 
     */
    create<T extends tb_organizacoesCreateArgs>(args: SelectSubset<T, tb_organizacoesCreateArgs<ExtArgs>>): Prisma__tb_organizacoesClient<$Result.GetResult<Prisma.$tb_organizacoesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_organizacoes.
     * @param {tb_organizacoesCreateManyArgs} args - Arguments to create many Tb_organizacoes.
     * @example
     * // Create many Tb_organizacoes
     * const tb_organizacoes = await prisma.tb_organizacoes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_organizacoesCreateManyArgs>(args?: SelectSubset<T, tb_organizacoesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tb_organizacoes and returns the data saved in the database.
     * @param {tb_organizacoesCreateManyAndReturnArgs} args - Arguments to create many Tb_organizacoes.
     * @example
     * // Create many Tb_organizacoes
     * const tb_organizacoes = await prisma.tb_organizacoes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tb_organizacoes and only return the `id`
     * const tb_organizacoesWithIdOnly = await prisma.tb_organizacoes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tb_organizacoesCreateManyAndReturnArgs>(args?: SelectSubset<T, tb_organizacoesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_organizacoesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tb_organizacoes.
     * @param {tb_organizacoesDeleteArgs} args - Arguments to delete one Tb_organizacoes.
     * @example
     * // Delete one Tb_organizacoes
     * const Tb_organizacoes = await prisma.tb_organizacoes.delete({
     *   where: {
     *     // ... filter to delete one Tb_organizacoes
     *   }
     * })
     * 
     */
    delete<T extends tb_organizacoesDeleteArgs>(args: SelectSubset<T, tb_organizacoesDeleteArgs<ExtArgs>>): Prisma__tb_organizacoesClient<$Result.GetResult<Prisma.$tb_organizacoesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_organizacoes.
     * @param {tb_organizacoesUpdateArgs} args - Arguments to update one Tb_organizacoes.
     * @example
     * // Update one Tb_organizacoes
     * const tb_organizacoes = await prisma.tb_organizacoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_organizacoesUpdateArgs>(args: SelectSubset<T, tb_organizacoesUpdateArgs<ExtArgs>>): Prisma__tb_organizacoesClient<$Result.GetResult<Prisma.$tb_organizacoesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_organizacoes.
     * @param {tb_organizacoesDeleteManyArgs} args - Arguments to filter Tb_organizacoes to delete.
     * @example
     * // Delete a few Tb_organizacoes
     * const { count } = await prisma.tb_organizacoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_organizacoesDeleteManyArgs>(args?: SelectSubset<T, tb_organizacoesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_organizacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_organizacoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_organizacoes
     * const tb_organizacoes = await prisma.tb_organizacoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_organizacoesUpdateManyArgs>(args: SelectSubset<T, tb_organizacoesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_organizacoes and returns the data updated in the database.
     * @param {tb_organizacoesUpdateManyAndReturnArgs} args - Arguments to update many Tb_organizacoes.
     * @example
     * // Update many Tb_organizacoes
     * const tb_organizacoes = await prisma.tb_organizacoes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tb_organizacoes and only return the `id`
     * const tb_organizacoesWithIdOnly = await prisma.tb_organizacoes.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends tb_organizacoesUpdateManyAndReturnArgs>(args: SelectSubset<T, tb_organizacoesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_organizacoesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tb_organizacoes.
     * @param {tb_organizacoesUpsertArgs} args - Arguments to update or create a Tb_organizacoes.
     * @example
     * // Update or create a Tb_organizacoes
     * const tb_organizacoes = await prisma.tb_organizacoes.upsert({
     *   create: {
     *     // ... data to create a Tb_organizacoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_organizacoes we want to update
     *   }
     * })
     */
    upsert<T extends tb_organizacoesUpsertArgs>(args: SelectSubset<T, tb_organizacoesUpsertArgs<ExtArgs>>): Prisma__tb_organizacoesClient<$Result.GetResult<Prisma.$tb_organizacoesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_organizacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_organizacoesCountArgs} args - Arguments to filter Tb_organizacoes to count.
     * @example
     * // Count the number of Tb_organizacoes
     * const count = await prisma.tb_organizacoes.count({
     *   where: {
     *     // ... the filter for the Tb_organizacoes we want to count
     *   }
     * })
    **/
    count<T extends tb_organizacoesCountArgs>(
      args?: Subset<T, tb_organizacoesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_organizacoesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_organizacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_organizacoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_organizacoesAggregateArgs>(args: Subset<T, Tb_organizacoesAggregateArgs>): Prisma.PrismaPromise<GetTb_organizacoesAggregateType<T>>

    /**
     * Group by Tb_organizacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_organizacoesGroupByArgs} args - Group by arguments.
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
      T extends tb_organizacoesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_organizacoesGroupByArgs['orderBy'] }
        : { orderBy?: tb_organizacoesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_organizacoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_organizacoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_organizacoes model
   */
  readonly fields: tb_organizacoesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_organizacoes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_organizacoesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tb_administradores<T extends tb_organizacoes$tb_administradoresArgs<ExtArgs> = {}>(args?: Subset<T, tb_organizacoes$tb_administradoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_administradoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tb_usuarios<T extends tb_organizacoes$tb_usuariosArgs<ExtArgs> = {}>(args?: Subset<T, tb_organizacoes$tb_usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tb_organizacoes model
   */
  interface tb_organizacoesFieldRefs {
    readonly id: FieldRef<"tb_organizacoes", 'Int'>
    readonly nome: FieldRef<"tb_organizacoes", 'String'>
    readonly cnpj: FieldRef<"tb_organizacoes", 'String'>
    readonly data_criacao: FieldRef<"tb_organizacoes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tb_organizacoes findUnique
   */
  export type tb_organizacoesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_organizacoes
     */
    select?: tb_organizacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_organizacoes
     */
    omit?: tb_organizacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_organizacoesInclude<ExtArgs> | null
    /**
     * Filter, which tb_organizacoes to fetch.
     */
    where: tb_organizacoesWhereUniqueInput
  }

  /**
   * tb_organizacoes findUniqueOrThrow
   */
  export type tb_organizacoesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_organizacoes
     */
    select?: tb_organizacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_organizacoes
     */
    omit?: tb_organizacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_organizacoesInclude<ExtArgs> | null
    /**
     * Filter, which tb_organizacoes to fetch.
     */
    where: tb_organizacoesWhereUniqueInput
  }

  /**
   * tb_organizacoes findFirst
   */
  export type tb_organizacoesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_organizacoes
     */
    select?: tb_organizacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_organizacoes
     */
    omit?: tb_organizacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_organizacoesInclude<ExtArgs> | null
    /**
     * Filter, which tb_organizacoes to fetch.
     */
    where?: tb_organizacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_organizacoes to fetch.
     */
    orderBy?: tb_organizacoesOrderByWithRelationInput | tb_organizacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_organizacoes.
     */
    cursor?: tb_organizacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_organizacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_organizacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_organizacoes.
     */
    distinct?: Tb_organizacoesScalarFieldEnum | Tb_organizacoesScalarFieldEnum[]
  }

  /**
   * tb_organizacoes findFirstOrThrow
   */
  export type tb_organizacoesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_organizacoes
     */
    select?: tb_organizacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_organizacoes
     */
    omit?: tb_organizacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_organizacoesInclude<ExtArgs> | null
    /**
     * Filter, which tb_organizacoes to fetch.
     */
    where?: tb_organizacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_organizacoes to fetch.
     */
    orderBy?: tb_organizacoesOrderByWithRelationInput | tb_organizacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_organizacoes.
     */
    cursor?: tb_organizacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_organizacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_organizacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_organizacoes.
     */
    distinct?: Tb_organizacoesScalarFieldEnum | Tb_organizacoesScalarFieldEnum[]
  }

  /**
   * tb_organizacoes findMany
   */
  export type tb_organizacoesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_organizacoes
     */
    select?: tb_organizacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_organizacoes
     */
    omit?: tb_organizacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_organizacoesInclude<ExtArgs> | null
    /**
     * Filter, which tb_organizacoes to fetch.
     */
    where?: tb_organizacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_organizacoes to fetch.
     */
    orderBy?: tb_organizacoesOrderByWithRelationInput | tb_organizacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_organizacoes.
     */
    cursor?: tb_organizacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_organizacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_organizacoes.
     */
    skip?: number
    distinct?: Tb_organizacoesScalarFieldEnum | Tb_organizacoesScalarFieldEnum[]
  }

  /**
   * tb_organizacoes create
   */
  export type tb_organizacoesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_organizacoes
     */
    select?: tb_organizacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_organizacoes
     */
    omit?: tb_organizacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_organizacoesInclude<ExtArgs> | null
    /**
     * The data needed to create a tb_organizacoes.
     */
    data: XOR<tb_organizacoesCreateInput, tb_organizacoesUncheckedCreateInput>
  }

  /**
   * tb_organizacoes createMany
   */
  export type tb_organizacoesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_organizacoes.
     */
    data: tb_organizacoesCreateManyInput | tb_organizacoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_organizacoes createManyAndReturn
   */
  export type tb_organizacoesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_organizacoes
     */
    select?: tb_organizacoesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_organizacoes
     */
    omit?: tb_organizacoesOmit<ExtArgs> | null
    /**
     * The data used to create many tb_organizacoes.
     */
    data: tb_organizacoesCreateManyInput | tb_organizacoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_organizacoes update
   */
  export type tb_organizacoesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_organizacoes
     */
    select?: tb_organizacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_organizacoes
     */
    omit?: tb_organizacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_organizacoesInclude<ExtArgs> | null
    /**
     * The data needed to update a tb_organizacoes.
     */
    data: XOR<tb_organizacoesUpdateInput, tb_organizacoesUncheckedUpdateInput>
    /**
     * Choose, which tb_organizacoes to update.
     */
    where: tb_organizacoesWhereUniqueInput
  }

  /**
   * tb_organizacoes updateMany
   */
  export type tb_organizacoesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_organizacoes.
     */
    data: XOR<tb_organizacoesUpdateManyMutationInput, tb_organizacoesUncheckedUpdateManyInput>
    /**
     * Filter which tb_organizacoes to update
     */
    where?: tb_organizacoesWhereInput
    /**
     * Limit how many tb_organizacoes to update.
     */
    limit?: number
  }

  /**
   * tb_organizacoes updateManyAndReturn
   */
  export type tb_organizacoesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_organizacoes
     */
    select?: tb_organizacoesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_organizacoes
     */
    omit?: tb_organizacoesOmit<ExtArgs> | null
    /**
     * The data used to update tb_organizacoes.
     */
    data: XOR<tb_organizacoesUpdateManyMutationInput, tb_organizacoesUncheckedUpdateManyInput>
    /**
     * Filter which tb_organizacoes to update
     */
    where?: tb_organizacoesWhereInput
    /**
     * Limit how many tb_organizacoes to update.
     */
    limit?: number
  }

  /**
   * tb_organizacoes upsert
   */
  export type tb_organizacoesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_organizacoes
     */
    select?: tb_organizacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_organizacoes
     */
    omit?: tb_organizacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_organizacoesInclude<ExtArgs> | null
    /**
     * The filter to search for the tb_organizacoes to update in case it exists.
     */
    where: tb_organizacoesWhereUniqueInput
    /**
     * In case the tb_organizacoes found by the `where` argument doesn't exist, create a new tb_organizacoes with this data.
     */
    create: XOR<tb_organizacoesCreateInput, tb_organizacoesUncheckedCreateInput>
    /**
     * In case the tb_organizacoes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_organizacoesUpdateInput, tb_organizacoesUncheckedUpdateInput>
  }

  /**
   * tb_organizacoes delete
   */
  export type tb_organizacoesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_organizacoes
     */
    select?: tb_organizacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_organizacoes
     */
    omit?: tb_organizacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_organizacoesInclude<ExtArgs> | null
    /**
     * Filter which tb_organizacoes to delete.
     */
    where: tb_organizacoesWhereUniqueInput
  }

  /**
   * tb_organizacoes deleteMany
   */
  export type tb_organizacoesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_organizacoes to delete
     */
    where?: tb_organizacoesWhereInput
    /**
     * Limit how many tb_organizacoes to delete.
     */
    limit?: number
  }

  /**
   * tb_organizacoes.tb_administradores
   */
  export type tb_organizacoes$tb_administradoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_administradores
     */
    select?: tb_administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_administradores
     */
    omit?: tb_administradoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_administradoresInclude<ExtArgs> | null
    where?: tb_administradoresWhereInput
    orderBy?: tb_administradoresOrderByWithRelationInput | tb_administradoresOrderByWithRelationInput[]
    cursor?: tb_administradoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_administradoresScalarFieldEnum | Tb_administradoresScalarFieldEnum[]
  }

  /**
   * tb_organizacoes.tb_usuarios
   */
  export type tb_organizacoes$tb_usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuarios
     */
    select?: tb_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuarios
     */
    omit?: tb_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuariosInclude<ExtArgs> | null
    where?: tb_usuariosWhereInput
    orderBy?: tb_usuariosOrderByWithRelationInput | tb_usuariosOrderByWithRelationInput[]
    cursor?: tb_usuariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_usuariosScalarFieldEnum | Tb_usuariosScalarFieldEnum[]
  }

  /**
   * tb_organizacoes without action
   */
  export type tb_organizacoesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_organizacoes
     */
    select?: tb_organizacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_organizacoes
     */
    omit?: tb_organizacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_organizacoesInclude<ExtArgs> | null
  }


  /**
   * Model tb_produtos_estoque
   */

  export type AggregateTb_produtos_estoque = {
    _count: Tb_produtos_estoqueCountAggregateOutputType | null
    _avg: Tb_produtos_estoqueAvgAggregateOutputType | null
    _sum: Tb_produtos_estoqueSumAggregateOutputType | null
    _min: Tb_produtos_estoqueMinAggregateOutputType | null
    _max: Tb_produtos_estoqueMaxAggregateOutputType | null
  }

  export type Tb_produtos_estoqueAvgAggregateOutputType = {
    id: number | null
    agricultor_id: number | null
    saldo_atual: Decimal | null
  }

  export type Tb_produtos_estoqueSumAggregateOutputType = {
    id: number | null
    agricultor_id: number | null
    saldo_atual: Decimal | null
  }

  export type Tb_produtos_estoqueMinAggregateOutputType = {
    id: number | null
    agricultor_id: number | null
    nome_produto: string | null
    tipo_produto: string | null
    unidade_medida: string | null
    saldo_atual: Decimal | null
  }

  export type Tb_produtos_estoqueMaxAggregateOutputType = {
    id: number | null
    agricultor_id: number | null
    nome_produto: string | null
    tipo_produto: string | null
    unidade_medida: string | null
    saldo_atual: Decimal | null
  }

  export type Tb_produtos_estoqueCountAggregateOutputType = {
    id: number
    agricultor_id: number
    nome_produto: number
    tipo_produto: number
    unidade_medida: number
    saldo_atual: number
    _all: number
  }


  export type Tb_produtos_estoqueAvgAggregateInputType = {
    id?: true
    agricultor_id?: true
    saldo_atual?: true
  }

  export type Tb_produtos_estoqueSumAggregateInputType = {
    id?: true
    agricultor_id?: true
    saldo_atual?: true
  }

  export type Tb_produtos_estoqueMinAggregateInputType = {
    id?: true
    agricultor_id?: true
    nome_produto?: true
    tipo_produto?: true
    unidade_medida?: true
    saldo_atual?: true
  }

  export type Tb_produtos_estoqueMaxAggregateInputType = {
    id?: true
    agricultor_id?: true
    nome_produto?: true
    tipo_produto?: true
    unidade_medida?: true
    saldo_atual?: true
  }

  export type Tb_produtos_estoqueCountAggregateInputType = {
    id?: true
    agricultor_id?: true
    nome_produto?: true
    tipo_produto?: true
    unidade_medida?: true
    saldo_atual?: true
    _all?: true
  }

  export type Tb_produtos_estoqueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_produtos_estoque to aggregate.
     */
    where?: tb_produtos_estoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_produtos_estoques to fetch.
     */
    orderBy?: tb_produtos_estoqueOrderByWithRelationInput | tb_produtos_estoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_produtos_estoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_produtos_estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_produtos_estoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_produtos_estoques
    **/
    _count?: true | Tb_produtos_estoqueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_produtos_estoqueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_produtos_estoqueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_produtos_estoqueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_produtos_estoqueMaxAggregateInputType
  }

  export type GetTb_produtos_estoqueAggregateType<T extends Tb_produtos_estoqueAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_produtos_estoque]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_produtos_estoque[P]>
      : GetScalarType<T[P], AggregateTb_produtos_estoque[P]>
  }




  export type tb_produtos_estoqueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_produtos_estoqueWhereInput
    orderBy?: tb_produtos_estoqueOrderByWithAggregationInput | tb_produtos_estoqueOrderByWithAggregationInput[]
    by: Tb_produtos_estoqueScalarFieldEnum[] | Tb_produtos_estoqueScalarFieldEnum
    having?: tb_produtos_estoqueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_produtos_estoqueCountAggregateInputType | true
    _avg?: Tb_produtos_estoqueAvgAggregateInputType
    _sum?: Tb_produtos_estoqueSumAggregateInputType
    _min?: Tb_produtos_estoqueMinAggregateInputType
    _max?: Tb_produtos_estoqueMaxAggregateInputType
  }

  export type Tb_produtos_estoqueGroupByOutputType = {
    id: number
    agricultor_id: number
    nome_produto: string
    tipo_produto: string
    unidade_medida: string
    saldo_atual: Decimal
    _count: Tb_produtos_estoqueCountAggregateOutputType | null
    _avg: Tb_produtos_estoqueAvgAggregateOutputType | null
    _sum: Tb_produtos_estoqueSumAggregateOutputType | null
    _min: Tb_produtos_estoqueMinAggregateOutputType | null
    _max: Tb_produtos_estoqueMaxAggregateOutputType | null
  }

  type GetTb_produtos_estoqueGroupByPayload<T extends tb_produtos_estoqueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_produtos_estoqueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_produtos_estoqueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_produtos_estoqueGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_produtos_estoqueGroupByOutputType[P]>
        }
      >
    >


  export type tb_produtos_estoqueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agricultor_id?: boolean
    nome_produto?: boolean
    tipo_produto?: boolean
    unidade_medida?: boolean
    saldo_atual?: boolean
    tb_movimentacoes_estoque?: boolean | tb_produtos_estoque$tb_movimentacoes_estoqueArgs<ExtArgs>
    tb_usuarios?: boolean | tb_usuariosDefaultArgs<ExtArgs>
    _count?: boolean | Tb_produtos_estoqueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_produtos_estoque"]>

  export type tb_produtos_estoqueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agricultor_id?: boolean
    nome_produto?: boolean
    tipo_produto?: boolean
    unidade_medida?: boolean
    saldo_atual?: boolean
    tb_usuarios?: boolean | tb_usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_produtos_estoque"]>

  export type tb_produtos_estoqueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agricultor_id?: boolean
    nome_produto?: boolean
    tipo_produto?: boolean
    unidade_medida?: boolean
    saldo_atual?: boolean
    tb_usuarios?: boolean | tb_usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_produtos_estoque"]>

  export type tb_produtos_estoqueSelectScalar = {
    id?: boolean
    agricultor_id?: boolean
    nome_produto?: boolean
    tipo_produto?: boolean
    unidade_medida?: boolean
    saldo_atual?: boolean
  }

  export type tb_produtos_estoqueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agricultor_id" | "nome_produto" | "tipo_produto" | "unidade_medida" | "saldo_atual", ExtArgs["result"]["tb_produtos_estoque"]>
  export type tb_produtos_estoqueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_movimentacoes_estoque?: boolean | tb_produtos_estoque$tb_movimentacoes_estoqueArgs<ExtArgs>
    tb_usuarios?: boolean | tb_usuariosDefaultArgs<ExtArgs>
    _count?: boolean | Tb_produtos_estoqueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tb_produtos_estoqueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_usuarios?: boolean | tb_usuariosDefaultArgs<ExtArgs>
  }
  export type tb_produtos_estoqueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_usuarios?: boolean | tb_usuariosDefaultArgs<ExtArgs>
  }

  export type $tb_produtos_estoquePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_produtos_estoque"
    objects: {
      tb_movimentacoes_estoque: Prisma.$tb_movimentacoes_estoquePayload<ExtArgs>[]
      tb_usuarios: Prisma.$tb_usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      agricultor_id: number
      nome_produto: string
      tipo_produto: string
      unidade_medida: string
      saldo_atual: Prisma.Decimal
    }, ExtArgs["result"]["tb_produtos_estoque"]>
    composites: {}
  }

  type tb_produtos_estoqueGetPayload<S extends boolean | null | undefined | tb_produtos_estoqueDefaultArgs> = $Result.GetResult<Prisma.$tb_produtos_estoquePayload, S>

  type tb_produtos_estoqueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_produtos_estoqueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_produtos_estoqueCountAggregateInputType | true
    }

  export interface tb_produtos_estoqueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_produtos_estoque'], meta: { name: 'tb_produtos_estoque' } }
    /**
     * Find zero or one Tb_produtos_estoque that matches the filter.
     * @param {tb_produtos_estoqueFindUniqueArgs} args - Arguments to find a Tb_produtos_estoque
     * @example
     * // Get one Tb_produtos_estoque
     * const tb_produtos_estoque = await prisma.tb_produtos_estoque.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_produtos_estoqueFindUniqueArgs>(args: SelectSubset<T, tb_produtos_estoqueFindUniqueArgs<ExtArgs>>): Prisma__tb_produtos_estoqueClient<$Result.GetResult<Prisma.$tb_produtos_estoquePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_produtos_estoque that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_produtos_estoqueFindUniqueOrThrowArgs} args - Arguments to find a Tb_produtos_estoque
     * @example
     * // Get one Tb_produtos_estoque
     * const tb_produtos_estoque = await prisma.tb_produtos_estoque.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_produtos_estoqueFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_produtos_estoqueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_produtos_estoqueClient<$Result.GetResult<Prisma.$tb_produtos_estoquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_produtos_estoque that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_produtos_estoqueFindFirstArgs} args - Arguments to find a Tb_produtos_estoque
     * @example
     * // Get one Tb_produtos_estoque
     * const tb_produtos_estoque = await prisma.tb_produtos_estoque.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_produtos_estoqueFindFirstArgs>(args?: SelectSubset<T, tb_produtos_estoqueFindFirstArgs<ExtArgs>>): Prisma__tb_produtos_estoqueClient<$Result.GetResult<Prisma.$tb_produtos_estoquePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_produtos_estoque that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_produtos_estoqueFindFirstOrThrowArgs} args - Arguments to find a Tb_produtos_estoque
     * @example
     * // Get one Tb_produtos_estoque
     * const tb_produtos_estoque = await prisma.tb_produtos_estoque.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_produtos_estoqueFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_produtos_estoqueFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_produtos_estoqueClient<$Result.GetResult<Prisma.$tb_produtos_estoquePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_produtos_estoques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_produtos_estoqueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_produtos_estoques
     * const tb_produtos_estoques = await prisma.tb_produtos_estoque.findMany()
     * 
     * // Get first 10 Tb_produtos_estoques
     * const tb_produtos_estoques = await prisma.tb_produtos_estoque.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_produtos_estoqueWithIdOnly = await prisma.tb_produtos_estoque.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_produtos_estoqueFindManyArgs>(args?: SelectSubset<T, tb_produtos_estoqueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_produtos_estoquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_produtos_estoque.
     * @param {tb_produtos_estoqueCreateArgs} args - Arguments to create a Tb_produtos_estoque.
     * @example
     * // Create one Tb_produtos_estoque
     * const Tb_produtos_estoque = await prisma.tb_produtos_estoque.create({
     *   data: {
     *     // ... data to create a Tb_produtos_estoque
     *   }
     * })
     * 
     */
    create<T extends tb_produtos_estoqueCreateArgs>(args: SelectSubset<T, tb_produtos_estoqueCreateArgs<ExtArgs>>): Prisma__tb_produtos_estoqueClient<$Result.GetResult<Prisma.$tb_produtos_estoquePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_produtos_estoques.
     * @param {tb_produtos_estoqueCreateManyArgs} args - Arguments to create many Tb_produtos_estoques.
     * @example
     * // Create many Tb_produtos_estoques
     * const tb_produtos_estoque = await prisma.tb_produtos_estoque.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_produtos_estoqueCreateManyArgs>(args?: SelectSubset<T, tb_produtos_estoqueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tb_produtos_estoques and returns the data saved in the database.
     * @param {tb_produtos_estoqueCreateManyAndReturnArgs} args - Arguments to create many Tb_produtos_estoques.
     * @example
     * // Create many Tb_produtos_estoques
     * const tb_produtos_estoque = await prisma.tb_produtos_estoque.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tb_produtos_estoques and only return the `id`
     * const tb_produtos_estoqueWithIdOnly = await prisma.tb_produtos_estoque.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tb_produtos_estoqueCreateManyAndReturnArgs>(args?: SelectSubset<T, tb_produtos_estoqueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_produtos_estoquePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tb_produtos_estoque.
     * @param {tb_produtos_estoqueDeleteArgs} args - Arguments to delete one Tb_produtos_estoque.
     * @example
     * // Delete one Tb_produtos_estoque
     * const Tb_produtos_estoque = await prisma.tb_produtos_estoque.delete({
     *   where: {
     *     // ... filter to delete one Tb_produtos_estoque
     *   }
     * })
     * 
     */
    delete<T extends tb_produtos_estoqueDeleteArgs>(args: SelectSubset<T, tb_produtos_estoqueDeleteArgs<ExtArgs>>): Prisma__tb_produtos_estoqueClient<$Result.GetResult<Prisma.$tb_produtos_estoquePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_produtos_estoque.
     * @param {tb_produtos_estoqueUpdateArgs} args - Arguments to update one Tb_produtos_estoque.
     * @example
     * // Update one Tb_produtos_estoque
     * const tb_produtos_estoque = await prisma.tb_produtos_estoque.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_produtos_estoqueUpdateArgs>(args: SelectSubset<T, tb_produtos_estoqueUpdateArgs<ExtArgs>>): Prisma__tb_produtos_estoqueClient<$Result.GetResult<Prisma.$tb_produtos_estoquePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_produtos_estoques.
     * @param {tb_produtos_estoqueDeleteManyArgs} args - Arguments to filter Tb_produtos_estoques to delete.
     * @example
     * // Delete a few Tb_produtos_estoques
     * const { count } = await prisma.tb_produtos_estoque.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_produtos_estoqueDeleteManyArgs>(args?: SelectSubset<T, tb_produtos_estoqueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_produtos_estoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_produtos_estoqueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_produtos_estoques
     * const tb_produtos_estoque = await prisma.tb_produtos_estoque.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_produtos_estoqueUpdateManyArgs>(args: SelectSubset<T, tb_produtos_estoqueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_produtos_estoques and returns the data updated in the database.
     * @param {tb_produtos_estoqueUpdateManyAndReturnArgs} args - Arguments to update many Tb_produtos_estoques.
     * @example
     * // Update many Tb_produtos_estoques
     * const tb_produtos_estoque = await prisma.tb_produtos_estoque.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tb_produtos_estoques and only return the `id`
     * const tb_produtos_estoqueWithIdOnly = await prisma.tb_produtos_estoque.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends tb_produtos_estoqueUpdateManyAndReturnArgs>(args: SelectSubset<T, tb_produtos_estoqueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_produtos_estoquePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tb_produtos_estoque.
     * @param {tb_produtos_estoqueUpsertArgs} args - Arguments to update or create a Tb_produtos_estoque.
     * @example
     * // Update or create a Tb_produtos_estoque
     * const tb_produtos_estoque = await prisma.tb_produtos_estoque.upsert({
     *   create: {
     *     // ... data to create a Tb_produtos_estoque
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_produtos_estoque we want to update
     *   }
     * })
     */
    upsert<T extends tb_produtos_estoqueUpsertArgs>(args: SelectSubset<T, tb_produtos_estoqueUpsertArgs<ExtArgs>>): Prisma__tb_produtos_estoqueClient<$Result.GetResult<Prisma.$tb_produtos_estoquePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_produtos_estoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_produtos_estoqueCountArgs} args - Arguments to filter Tb_produtos_estoques to count.
     * @example
     * // Count the number of Tb_produtos_estoques
     * const count = await prisma.tb_produtos_estoque.count({
     *   where: {
     *     // ... the filter for the Tb_produtos_estoques we want to count
     *   }
     * })
    **/
    count<T extends tb_produtos_estoqueCountArgs>(
      args?: Subset<T, tb_produtos_estoqueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_produtos_estoqueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_produtos_estoque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_produtos_estoqueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_produtos_estoqueAggregateArgs>(args: Subset<T, Tb_produtos_estoqueAggregateArgs>): Prisma.PrismaPromise<GetTb_produtos_estoqueAggregateType<T>>

    /**
     * Group by Tb_produtos_estoque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_produtos_estoqueGroupByArgs} args - Group by arguments.
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
      T extends tb_produtos_estoqueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_produtos_estoqueGroupByArgs['orderBy'] }
        : { orderBy?: tb_produtos_estoqueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_produtos_estoqueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_produtos_estoqueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_produtos_estoque model
   */
  readonly fields: tb_produtos_estoqueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_produtos_estoque.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_produtos_estoqueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tb_movimentacoes_estoque<T extends tb_produtos_estoque$tb_movimentacoes_estoqueArgs<ExtArgs> = {}>(args?: Subset<T, tb_produtos_estoque$tb_movimentacoes_estoqueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_movimentacoes_estoquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tb_usuarios<T extends tb_usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tb_usuariosDefaultArgs<ExtArgs>>): Prisma__tb_usuariosClient<$Result.GetResult<Prisma.$tb_usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tb_produtos_estoque model
   */
  interface tb_produtos_estoqueFieldRefs {
    readonly id: FieldRef<"tb_produtos_estoque", 'Int'>
    readonly agricultor_id: FieldRef<"tb_produtos_estoque", 'Int'>
    readonly nome_produto: FieldRef<"tb_produtos_estoque", 'String'>
    readonly tipo_produto: FieldRef<"tb_produtos_estoque", 'String'>
    readonly unidade_medida: FieldRef<"tb_produtos_estoque", 'String'>
    readonly saldo_atual: FieldRef<"tb_produtos_estoque", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * tb_produtos_estoque findUnique
   */
  export type tb_produtos_estoqueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos_estoque
     */
    select?: tb_produtos_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_produtos_estoque
     */
    omit?: tb_produtos_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_produtos_estoqueInclude<ExtArgs> | null
    /**
     * Filter, which tb_produtos_estoque to fetch.
     */
    where: tb_produtos_estoqueWhereUniqueInput
  }

  /**
   * tb_produtos_estoque findUniqueOrThrow
   */
  export type tb_produtos_estoqueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos_estoque
     */
    select?: tb_produtos_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_produtos_estoque
     */
    omit?: tb_produtos_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_produtos_estoqueInclude<ExtArgs> | null
    /**
     * Filter, which tb_produtos_estoque to fetch.
     */
    where: tb_produtos_estoqueWhereUniqueInput
  }

  /**
   * tb_produtos_estoque findFirst
   */
  export type tb_produtos_estoqueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos_estoque
     */
    select?: tb_produtos_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_produtos_estoque
     */
    omit?: tb_produtos_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_produtos_estoqueInclude<ExtArgs> | null
    /**
     * Filter, which tb_produtos_estoque to fetch.
     */
    where?: tb_produtos_estoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_produtos_estoques to fetch.
     */
    orderBy?: tb_produtos_estoqueOrderByWithRelationInput | tb_produtos_estoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_produtos_estoques.
     */
    cursor?: tb_produtos_estoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_produtos_estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_produtos_estoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_produtos_estoques.
     */
    distinct?: Tb_produtos_estoqueScalarFieldEnum | Tb_produtos_estoqueScalarFieldEnum[]
  }

  /**
   * tb_produtos_estoque findFirstOrThrow
   */
  export type tb_produtos_estoqueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos_estoque
     */
    select?: tb_produtos_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_produtos_estoque
     */
    omit?: tb_produtos_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_produtos_estoqueInclude<ExtArgs> | null
    /**
     * Filter, which tb_produtos_estoque to fetch.
     */
    where?: tb_produtos_estoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_produtos_estoques to fetch.
     */
    orderBy?: tb_produtos_estoqueOrderByWithRelationInput | tb_produtos_estoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_produtos_estoques.
     */
    cursor?: tb_produtos_estoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_produtos_estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_produtos_estoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_produtos_estoques.
     */
    distinct?: Tb_produtos_estoqueScalarFieldEnum | Tb_produtos_estoqueScalarFieldEnum[]
  }

  /**
   * tb_produtos_estoque findMany
   */
  export type tb_produtos_estoqueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos_estoque
     */
    select?: tb_produtos_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_produtos_estoque
     */
    omit?: tb_produtos_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_produtos_estoqueInclude<ExtArgs> | null
    /**
     * Filter, which tb_produtos_estoques to fetch.
     */
    where?: tb_produtos_estoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_produtos_estoques to fetch.
     */
    orderBy?: tb_produtos_estoqueOrderByWithRelationInput | tb_produtos_estoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_produtos_estoques.
     */
    cursor?: tb_produtos_estoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_produtos_estoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_produtos_estoques.
     */
    skip?: number
    distinct?: Tb_produtos_estoqueScalarFieldEnum | Tb_produtos_estoqueScalarFieldEnum[]
  }

  /**
   * tb_produtos_estoque create
   */
  export type tb_produtos_estoqueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos_estoque
     */
    select?: tb_produtos_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_produtos_estoque
     */
    omit?: tb_produtos_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_produtos_estoqueInclude<ExtArgs> | null
    /**
     * The data needed to create a tb_produtos_estoque.
     */
    data: XOR<tb_produtos_estoqueCreateInput, tb_produtos_estoqueUncheckedCreateInput>
  }

  /**
   * tb_produtos_estoque createMany
   */
  export type tb_produtos_estoqueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_produtos_estoques.
     */
    data: tb_produtos_estoqueCreateManyInput | tb_produtos_estoqueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_produtos_estoque createManyAndReturn
   */
  export type tb_produtos_estoqueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos_estoque
     */
    select?: tb_produtos_estoqueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_produtos_estoque
     */
    omit?: tb_produtos_estoqueOmit<ExtArgs> | null
    /**
     * The data used to create many tb_produtos_estoques.
     */
    data: tb_produtos_estoqueCreateManyInput | tb_produtos_estoqueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_produtos_estoqueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tb_produtos_estoque update
   */
  export type tb_produtos_estoqueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos_estoque
     */
    select?: tb_produtos_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_produtos_estoque
     */
    omit?: tb_produtos_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_produtos_estoqueInclude<ExtArgs> | null
    /**
     * The data needed to update a tb_produtos_estoque.
     */
    data: XOR<tb_produtos_estoqueUpdateInput, tb_produtos_estoqueUncheckedUpdateInput>
    /**
     * Choose, which tb_produtos_estoque to update.
     */
    where: tb_produtos_estoqueWhereUniqueInput
  }

  /**
   * tb_produtos_estoque updateMany
   */
  export type tb_produtos_estoqueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_produtos_estoques.
     */
    data: XOR<tb_produtos_estoqueUpdateManyMutationInput, tb_produtos_estoqueUncheckedUpdateManyInput>
    /**
     * Filter which tb_produtos_estoques to update
     */
    where?: tb_produtos_estoqueWhereInput
    /**
     * Limit how many tb_produtos_estoques to update.
     */
    limit?: number
  }

  /**
   * tb_produtos_estoque updateManyAndReturn
   */
  export type tb_produtos_estoqueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos_estoque
     */
    select?: tb_produtos_estoqueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_produtos_estoque
     */
    omit?: tb_produtos_estoqueOmit<ExtArgs> | null
    /**
     * The data used to update tb_produtos_estoques.
     */
    data: XOR<tb_produtos_estoqueUpdateManyMutationInput, tb_produtos_estoqueUncheckedUpdateManyInput>
    /**
     * Filter which tb_produtos_estoques to update
     */
    where?: tb_produtos_estoqueWhereInput
    /**
     * Limit how many tb_produtos_estoques to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_produtos_estoqueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tb_produtos_estoque upsert
   */
  export type tb_produtos_estoqueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos_estoque
     */
    select?: tb_produtos_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_produtos_estoque
     */
    omit?: tb_produtos_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_produtos_estoqueInclude<ExtArgs> | null
    /**
     * The filter to search for the tb_produtos_estoque to update in case it exists.
     */
    where: tb_produtos_estoqueWhereUniqueInput
    /**
     * In case the tb_produtos_estoque found by the `where` argument doesn't exist, create a new tb_produtos_estoque with this data.
     */
    create: XOR<tb_produtos_estoqueCreateInput, tb_produtos_estoqueUncheckedCreateInput>
    /**
     * In case the tb_produtos_estoque was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_produtos_estoqueUpdateInput, tb_produtos_estoqueUncheckedUpdateInput>
  }

  /**
   * tb_produtos_estoque delete
   */
  export type tb_produtos_estoqueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos_estoque
     */
    select?: tb_produtos_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_produtos_estoque
     */
    omit?: tb_produtos_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_produtos_estoqueInclude<ExtArgs> | null
    /**
     * Filter which tb_produtos_estoque to delete.
     */
    where: tb_produtos_estoqueWhereUniqueInput
  }

  /**
   * tb_produtos_estoque deleteMany
   */
  export type tb_produtos_estoqueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_produtos_estoques to delete
     */
    where?: tb_produtos_estoqueWhereInput
    /**
     * Limit how many tb_produtos_estoques to delete.
     */
    limit?: number
  }

  /**
   * tb_produtos_estoque.tb_movimentacoes_estoque
   */
  export type tb_produtos_estoque$tb_movimentacoes_estoqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_movimentacoes_estoque
     */
    select?: tb_movimentacoes_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_movimentacoes_estoque
     */
    omit?: tb_movimentacoes_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_movimentacoes_estoqueInclude<ExtArgs> | null
    where?: tb_movimentacoes_estoqueWhereInput
    orderBy?: tb_movimentacoes_estoqueOrderByWithRelationInput | tb_movimentacoes_estoqueOrderByWithRelationInput[]
    cursor?: tb_movimentacoes_estoqueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_movimentacoes_estoqueScalarFieldEnum | Tb_movimentacoes_estoqueScalarFieldEnum[]
  }

  /**
   * tb_produtos_estoque without action
   */
  export type tb_produtos_estoqueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos_estoque
     */
    select?: tb_produtos_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_produtos_estoque
     */
    omit?: tb_produtos_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_produtos_estoqueInclude<ExtArgs> | null
  }


  /**
   * Model tb_safras
   */

  export type AggregateTb_safras = {
    _count: Tb_safrasCountAggregateOutputType | null
    _avg: Tb_safrasAvgAggregateOutputType | null
    _sum: Tb_safrasSumAggregateOutputType | null
    _min: Tb_safrasMinAggregateOutputType | null
    _max: Tb_safrasMaxAggregateOutputType | null
  }

  export type Tb_safrasAvgAggregateOutputType = {
    id: number | null
    agricultor_id: number | null
    area_plantada_ha: Decimal | null
    produtividade: Decimal | null
  }

  export type Tb_safrasSumAggregateOutputType = {
    id: number | null
    agricultor_id: number | null
    area_plantada_ha: Decimal | null
    produtividade: Decimal | null
  }

  export type Tb_safrasMinAggregateOutputType = {
    id: number | null
    agricultor_id: number | null
    cultura: string | null
    ano_safra: string | null
    area_plantada_ha: Decimal | null
    produtividade: Decimal | null
    unidade_medida: string | null
  }

  export type Tb_safrasMaxAggregateOutputType = {
    id: number | null
    agricultor_id: number | null
    cultura: string | null
    ano_safra: string | null
    area_plantada_ha: Decimal | null
    produtividade: Decimal | null
    unidade_medida: string | null
  }

  export type Tb_safrasCountAggregateOutputType = {
    id: number
    agricultor_id: number
    cultura: number
    ano_safra: number
    area_plantada_ha: number
    produtividade: number
    unidade_medida: number
    _all: number
  }


  export type Tb_safrasAvgAggregateInputType = {
    id?: true
    agricultor_id?: true
    area_plantada_ha?: true
    produtividade?: true
  }

  export type Tb_safrasSumAggregateInputType = {
    id?: true
    agricultor_id?: true
    area_plantada_ha?: true
    produtividade?: true
  }

  export type Tb_safrasMinAggregateInputType = {
    id?: true
    agricultor_id?: true
    cultura?: true
    ano_safra?: true
    area_plantada_ha?: true
    produtividade?: true
    unidade_medida?: true
  }

  export type Tb_safrasMaxAggregateInputType = {
    id?: true
    agricultor_id?: true
    cultura?: true
    ano_safra?: true
    area_plantada_ha?: true
    produtividade?: true
    unidade_medida?: true
  }

  export type Tb_safrasCountAggregateInputType = {
    id?: true
    agricultor_id?: true
    cultura?: true
    ano_safra?: true
    area_plantada_ha?: true
    produtividade?: true
    unidade_medida?: true
    _all?: true
  }

  export type Tb_safrasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_safras to aggregate.
     */
    where?: tb_safrasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_safras to fetch.
     */
    orderBy?: tb_safrasOrderByWithRelationInput | tb_safrasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_safrasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_safras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_safras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_safras
    **/
    _count?: true | Tb_safrasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_safrasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_safrasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_safrasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_safrasMaxAggregateInputType
  }

  export type GetTb_safrasAggregateType<T extends Tb_safrasAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_safras]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_safras[P]>
      : GetScalarType<T[P], AggregateTb_safras[P]>
  }




  export type tb_safrasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_safrasWhereInput
    orderBy?: tb_safrasOrderByWithAggregationInput | tb_safrasOrderByWithAggregationInput[]
    by: Tb_safrasScalarFieldEnum[] | Tb_safrasScalarFieldEnum
    having?: tb_safrasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_safrasCountAggregateInputType | true
    _avg?: Tb_safrasAvgAggregateInputType
    _sum?: Tb_safrasSumAggregateInputType
    _min?: Tb_safrasMinAggregateInputType
    _max?: Tb_safrasMaxAggregateInputType
  }

  export type Tb_safrasGroupByOutputType = {
    id: number
    agricultor_id: number
    cultura: string
    ano_safra: string | null
    area_plantada_ha: Decimal | null
    produtividade: Decimal | null
    unidade_medida: string | null
    _count: Tb_safrasCountAggregateOutputType | null
    _avg: Tb_safrasAvgAggregateOutputType | null
    _sum: Tb_safrasSumAggregateOutputType | null
    _min: Tb_safrasMinAggregateOutputType | null
    _max: Tb_safrasMaxAggregateOutputType | null
  }

  type GetTb_safrasGroupByPayload<T extends tb_safrasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_safrasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_safrasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_safrasGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_safrasGroupByOutputType[P]>
        }
      >
    >


  export type tb_safrasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agricultor_id?: boolean
    cultura?: boolean
    ano_safra?: boolean
    area_plantada_ha?: boolean
    produtividade?: boolean
    unidade_medida?: boolean
    tb_usuarios?: boolean | tb_usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_safras"]>

  export type tb_safrasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agricultor_id?: boolean
    cultura?: boolean
    ano_safra?: boolean
    area_plantada_ha?: boolean
    produtividade?: boolean
    unidade_medida?: boolean
    tb_usuarios?: boolean | tb_usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_safras"]>

  export type tb_safrasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agricultor_id?: boolean
    cultura?: boolean
    ano_safra?: boolean
    area_plantada_ha?: boolean
    produtividade?: boolean
    unidade_medida?: boolean
    tb_usuarios?: boolean | tb_usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_safras"]>

  export type tb_safrasSelectScalar = {
    id?: boolean
    agricultor_id?: boolean
    cultura?: boolean
    ano_safra?: boolean
    area_plantada_ha?: boolean
    produtividade?: boolean
    unidade_medida?: boolean
  }

  export type tb_safrasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agricultor_id" | "cultura" | "ano_safra" | "area_plantada_ha" | "produtividade" | "unidade_medida", ExtArgs["result"]["tb_safras"]>
  export type tb_safrasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_usuarios?: boolean | tb_usuariosDefaultArgs<ExtArgs>
  }
  export type tb_safrasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_usuarios?: boolean | tb_usuariosDefaultArgs<ExtArgs>
  }
  export type tb_safrasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_usuarios?: boolean | tb_usuariosDefaultArgs<ExtArgs>
  }

  export type $tb_safrasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_safras"
    objects: {
      tb_usuarios: Prisma.$tb_usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      agricultor_id: number
      cultura: string
      ano_safra: string | null
      area_plantada_ha: Prisma.Decimal | null
      produtividade: Prisma.Decimal | null
      unidade_medida: string | null
    }, ExtArgs["result"]["tb_safras"]>
    composites: {}
  }

  type tb_safrasGetPayload<S extends boolean | null | undefined | tb_safrasDefaultArgs> = $Result.GetResult<Prisma.$tb_safrasPayload, S>

  type tb_safrasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_safrasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_safrasCountAggregateInputType | true
    }

  export interface tb_safrasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_safras'], meta: { name: 'tb_safras' } }
    /**
     * Find zero or one Tb_safras that matches the filter.
     * @param {tb_safrasFindUniqueArgs} args - Arguments to find a Tb_safras
     * @example
     * // Get one Tb_safras
     * const tb_safras = await prisma.tb_safras.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_safrasFindUniqueArgs>(args: SelectSubset<T, tb_safrasFindUniqueArgs<ExtArgs>>): Prisma__tb_safrasClient<$Result.GetResult<Prisma.$tb_safrasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_safras that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_safrasFindUniqueOrThrowArgs} args - Arguments to find a Tb_safras
     * @example
     * // Get one Tb_safras
     * const tb_safras = await prisma.tb_safras.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_safrasFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_safrasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_safrasClient<$Result.GetResult<Prisma.$tb_safrasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_safras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_safrasFindFirstArgs} args - Arguments to find a Tb_safras
     * @example
     * // Get one Tb_safras
     * const tb_safras = await prisma.tb_safras.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_safrasFindFirstArgs>(args?: SelectSubset<T, tb_safrasFindFirstArgs<ExtArgs>>): Prisma__tb_safrasClient<$Result.GetResult<Prisma.$tb_safrasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_safras that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_safrasFindFirstOrThrowArgs} args - Arguments to find a Tb_safras
     * @example
     * // Get one Tb_safras
     * const tb_safras = await prisma.tb_safras.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_safrasFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_safrasFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_safrasClient<$Result.GetResult<Prisma.$tb_safrasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_safras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_safrasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_safras
     * const tb_safras = await prisma.tb_safras.findMany()
     * 
     * // Get first 10 Tb_safras
     * const tb_safras = await prisma.tb_safras.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_safrasWithIdOnly = await prisma.tb_safras.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_safrasFindManyArgs>(args?: SelectSubset<T, tb_safrasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_safrasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_safras.
     * @param {tb_safrasCreateArgs} args - Arguments to create a Tb_safras.
     * @example
     * // Create one Tb_safras
     * const Tb_safras = await prisma.tb_safras.create({
     *   data: {
     *     // ... data to create a Tb_safras
     *   }
     * })
     * 
     */
    create<T extends tb_safrasCreateArgs>(args: SelectSubset<T, tb_safrasCreateArgs<ExtArgs>>): Prisma__tb_safrasClient<$Result.GetResult<Prisma.$tb_safrasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_safras.
     * @param {tb_safrasCreateManyArgs} args - Arguments to create many Tb_safras.
     * @example
     * // Create many Tb_safras
     * const tb_safras = await prisma.tb_safras.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_safrasCreateManyArgs>(args?: SelectSubset<T, tb_safrasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tb_safras and returns the data saved in the database.
     * @param {tb_safrasCreateManyAndReturnArgs} args - Arguments to create many Tb_safras.
     * @example
     * // Create many Tb_safras
     * const tb_safras = await prisma.tb_safras.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tb_safras and only return the `id`
     * const tb_safrasWithIdOnly = await prisma.tb_safras.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tb_safrasCreateManyAndReturnArgs>(args?: SelectSubset<T, tb_safrasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_safrasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tb_safras.
     * @param {tb_safrasDeleteArgs} args - Arguments to delete one Tb_safras.
     * @example
     * // Delete one Tb_safras
     * const Tb_safras = await prisma.tb_safras.delete({
     *   where: {
     *     // ... filter to delete one Tb_safras
     *   }
     * })
     * 
     */
    delete<T extends tb_safrasDeleteArgs>(args: SelectSubset<T, tb_safrasDeleteArgs<ExtArgs>>): Prisma__tb_safrasClient<$Result.GetResult<Prisma.$tb_safrasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_safras.
     * @param {tb_safrasUpdateArgs} args - Arguments to update one Tb_safras.
     * @example
     * // Update one Tb_safras
     * const tb_safras = await prisma.tb_safras.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_safrasUpdateArgs>(args: SelectSubset<T, tb_safrasUpdateArgs<ExtArgs>>): Prisma__tb_safrasClient<$Result.GetResult<Prisma.$tb_safrasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_safras.
     * @param {tb_safrasDeleteManyArgs} args - Arguments to filter Tb_safras to delete.
     * @example
     * // Delete a few Tb_safras
     * const { count } = await prisma.tb_safras.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_safrasDeleteManyArgs>(args?: SelectSubset<T, tb_safrasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_safras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_safrasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_safras
     * const tb_safras = await prisma.tb_safras.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_safrasUpdateManyArgs>(args: SelectSubset<T, tb_safrasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_safras and returns the data updated in the database.
     * @param {tb_safrasUpdateManyAndReturnArgs} args - Arguments to update many Tb_safras.
     * @example
     * // Update many Tb_safras
     * const tb_safras = await prisma.tb_safras.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tb_safras and only return the `id`
     * const tb_safrasWithIdOnly = await prisma.tb_safras.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends tb_safrasUpdateManyAndReturnArgs>(args: SelectSubset<T, tb_safrasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_safrasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tb_safras.
     * @param {tb_safrasUpsertArgs} args - Arguments to update or create a Tb_safras.
     * @example
     * // Update or create a Tb_safras
     * const tb_safras = await prisma.tb_safras.upsert({
     *   create: {
     *     // ... data to create a Tb_safras
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_safras we want to update
     *   }
     * })
     */
    upsert<T extends tb_safrasUpsertArgs>(args: SelectSubset<T, tb_safrasUpsertArgs<ExtArgs>>): Prisma__tb_safrasClient<$Result.GetResult<Prisma.$tb_safrasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_safras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_safrasCountArgs} args - Arguments to filter Tb_safras to count.
     * @example
     * // Count the number of Tb_safras
     * const count = await prisma.tb_safras.count({
     *   where: {
     *     // ... the filter for the Tb_safras we want to count
     *   }
     * })
    **/
    count<T extends tb_safrasCountArgs>(
      args?: Subset<T, tb_safrasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_safrasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_safras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_safrasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_safrasAggregateArgs>(args: Subset<T, Tb_safrasAggregateArgs>): Prisma.PrismaPromise<GetTb_safrasAggregateType<T>>

    /**
     * Group by Tb_safras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_safrasGroupByArgs} args - Group by arguments.
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
      T extends tb_safrasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_safrasGroupByArgs['orderBy'] }
        : { orderBy?: tb_safrasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_safrasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_safrasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_safras model
   */
  readonly fields: tb_safrasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_safras.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_safrasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tb_usuarios<T extends tb_usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tb_usuariosDefaultArgs<ExtArgs>>): Prisma__tb_usuariosClient<$Result.GetResult<Prisma.$tb_usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tb_safras model
   */
  interface tb_safrasFieldRefs {
    readonly id: FieldRef<"tb_safras", 'Int'>
    readonly agricultor_id: FieldRef<"tb_safras", 'Int'>
    readonly cultura: FieldRef<"tb_safras", 'String'>
    readonly ano_safra: FieldRef<"tb_safras", 'String'>
    readonly area_plantada_ha: FieldRef<"tb_safras", 'Decimal'>
    readonly produtividade: FieldRef<"tb_safras", 'Decimal'>
    readonly unidade_medida: FieldRef<"tb_safras", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_safras findUnique
   */
  export type tb_safrasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_safras
     */
    select?: tb_safrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_safras
     */
    omit?: tb_safrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_safrasInclude<ExtArgs> | null
    /**
     * Filter, which tb_safras to fetch.
     */
    where: tb_safrasWhereUniqueInput
  }

  /**
   * tb_safras findUniqueOrThrow
   */
  export type tb_safrasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_safras
     */
    select?: tb_safrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_safras
     */
    omit?: tb_safrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_safrasInclude<ExtArgs> | null
    /**
     * Filter, which tb_safras to fetch.
     */
    where: tb_safrasWhereUniqueInput
  }

  /**
   * tb_safras findFirst
   */
  export type tb_safrasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_safras
     */
    select?: tb_safrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_safras
     */
    omit?: tb_safrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_safrasInclude<ExtArgs> | null
    /**
     * Filter, which tb_safras to fetch.
     */
    where?: tb_safrasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_safras to fetch.
     */
    orderBy?: tb_safrasOrderByWithRelationInput | tb_safrasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_safras.
     */
    cursor?: tb_safrasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_safras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_safras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_safras.
     */
    distinct?: Tb_safrasScalarFieldEnum | Tb_safrasScalarFieldEnum[]
  }

  /**
   * tb_safras findFirstOrThrow
   */
  export type tb_safrasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_safras
     */
    select?: tb_safrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_safras
     */
    omit?: tb_safrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_safrasInclude<ExtArgs> | null
    /**
     * Filter, which tb_safras to fetch.
     */
    where?: tb_safrasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_safras to fetch.
     */
    orderBy?: tb_safrasOrderByWithRelationInput | tb_safrasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_safras.
     */
    cursor?: tb_safrasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_safras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_safras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_safras.
     */
    distinct?: Tb_safrasScalarFieldEnum | Tb_safrasScalarFieldEnum[]
  }

  /**
   * tb_safras findMany
   */
  export type tb_safrasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_safras
     */
    select?: tb_safrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_safras
     */
    omit?: tb_safrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_safrasInclude<ExtArgs> | null
    /**
     * Filter, which tb_safras to fetch.
     */
    where?: tb_safrasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_safras to fetch.
     */
    orderBy?: tb_safrasOrderByWithRelationInput | tb_safrasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_safras.
     */
    cursor?: tb_safrasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_safras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_safras.
     */
    skip?: number
    distinct?: Tb_safrasScalarFieldEnum | Tb_safrasScalarFieldEnum[]
  }

  /**
   * tb_safras create
   */
  export type tb_safrasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_safras
     */
    select?: tb_safrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_safras
     */
    omit?: tb_safrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_safrasInclude<ExtArgs> | null
    /**
     * The data needed to create a tb_safras.
     */
    data: XOR<tb_safrasCreateInput, tb_safrasUncheckedCreateInput>
  }

  /**
   * tb_safras createMany
   */
  export type tb_safrasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_safras.
     */
    data: tb_safrasCreateManyInput | tb_safrasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_safras createManyAndReturn
   */
  export type tb_safrasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_safras
     */
    select?: tb_safrasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_safras
     */
    omit?: tb_safrasOmit<ExtArgs> | null
    /**
     * The data used to create many tb_safras.
     */
    data: tb_safrasCreateManyInput | tb_safrasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_safrasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tb_safras update
   */
  export type tb_safrasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_safras
     */
    select?: tb_safrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_safras
     */
    omit?: tb_safrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_safrasInclude<ExtArgs> | null
    /**
     * The data needed to update a tb_safras.
     */
    data: XOR<tb_safrasUpdateInput, tb_safrasUncheckedUpdateInput>
    /**
     * Choose, which tb_safras to update.
     */
    where: tb_safrasWhereUniqueInput
  }

  /**
   * tb_safras updateMany
   */
  export type tb_safrasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_safras.
     */
    data: XOR<tb_safrasUpdateManyMutationInput, tb_safrasUncheckedUpdateManyInput>
    /**
     * Filter which tb_safras to update
     */
    where?: tb_safrasWhereInput
    /**
     * Limit how many tb_safras to update.
     */
    limit?: number
  }

  /**
   * tb_safras updateManyAndReturn
   */
  export type tb_safrasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_safras
     */
    select?: tb_safrasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_safras
     */
    omit?: tb_safrasOmit<ExtArgs> | null
    /**
     * The data used to update tb_safras.
     */
    data: XOR<tb_safrasUpdateManyMutationInput, tb_safrasUncheckedUpdateManyInput>
    /**
     * Filter which tb_safras to update
     */
    where?: tb_safrasWhereInput
    /**
     * Limit how many tb_safras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_safrasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tb_safras upsert
   */
  export type tb_safrasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_safras
     */
    select?: tb_safrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_safras
     */
    omit?: tb_safrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_safrasInclude<ExtArgs> | null
    /**
     * The filter to search for the tb_safras to update in case it exists.
     */
    where: tb_safrasWhereUniqueInput
    /**
     * In case the tb_safras found by the `where` argument doesn't exist, create a new tb_safras with this data.
     */
    create: XOR<tb_safrasCreateInput, tb_safrasUncheckedCreateInput>
    /**
     * In case the tb_safras was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_safrasUpdateInput, tb_safrasUncheckedUpdateInput>
  }

  /**
   * tb_safras delete
   */
  export type tb_safrasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_safras
     */
    select?: tb_safrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_safras
     */
    omit?: tb_safrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_safrasInclude<ExtArgs> | null
    /**
     * Filter which tb_safras to delete.
     */
    where: tb_safrasWhereUniqueInput
  }

  /**
   * tb_safras deleteMany
   */
  export type tb_safrasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_safras to delete
     */
    where?: tb_safrasWhereInput
    /**
     * Limit how many tb_safras to delete.
     */
    limit?: number
  }

  /**
   * tb_safras without action
   */
  export type tb_safrasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_safras
     */
    select?: tb_safrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_safras
     */
    omit?: tb_safrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_safrasInclude<ExtArgs> | null
  }


  /**
   * Model tb_usuarios
   */

  export type AggregateTb_usuarios = {
    _count: Tb_usuariosCountAggregateOutputType | null
    _avg: Tb_usuariosAvgAggregateOutputType | null
    _sum: Tb_usuariosSumAggregateOutputType | null
    _min: Tb_usuariosMinAggregateOutputType | null
    _max: Tb_usuariosMaxAggregateOutputType | null
  }

  export type Tb_usuariosAvgAggregateOutputType = {
    id: number | null
    organizacao_id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type Tb_usuariosSumAggregateOutputType = {
    id: number | null
    organizacao_id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type Tb_usuariosMinAggregateOutputType = {
    id: number | null
    organizacao_id: number | null
    nome: string | null
    whatsapp_id: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    cidade: string | null
    estado: string | null
    data_cadastro: Date | null
    ultima_atividade: Date | null
    ativo: string | null
  }

  export type Tb_usuariosMaxAggregateOutputType = {
    id: number | null
    organizacao_id: number | null
    nome: string | null
    whatsapp_id: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    cidade: string | null
    estado: string | null
    data_cadastro: Date | null
    ultima_atividade: Date | null
    ativo: string | null
  }

  export type Tb_usuariosCountAggregateOutputType = {
    id: number
    organizacao_id: number
    nome: number
    whatsapp_id: number
    latitude: number
    longitude: number
    cidade: number
    estado: number
    data_cadastro: number
    ultima_atividade: number
    ativo: number
    _all: number
  }


  export type Tb_usuariosAvgAggregateInputType = {
    id?: true
    organizacao_id?: true
    latitude?: true
    longitude?: true
  }

  export type Tb_usuariosSumAggregateInputType = {
    id?: true
    organizacao_id?: true
    latitude?: true
    longitude?: true
  }

  export type Tb_usuariosMinAggregateInputType = {
    id?: true
    organizacao_id?: true
    nome?: true
    whatsapp_id?: true
    latitude?: true
    longitude?: true
    cidade?: true
    estado?: true
    data_cadastro?: true
    ultima_atividade?: true
    ativo?: true
  }

  export type Tb_usuariosMaxAggregateInputType = {
    id?: true
    organizacao_id?: true
    nome?: true
    whatsapp_id?: true
    latitude?: true
    longitude?: true
    cidade?: true
    estado?: true
    data_cadastro?: true
    ultima_atividade?: true
    ativo?: true
  }

  export type Tb_usuariosCountAggregateInputType = {
    id?: true
    organizacao_id?: true
    nome?: true
    whatsapp_id?: true
    latitude?: true
    longitude?: true
    cidade?: true
    estado?: true
    data_cadastro?: true
    ultima_atividade?: true
    ativo?: true
    _all?: true
  }

  export type Tb_usuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_usuarios to aggregate.
     */
    where?: tb_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_usuarios to fetch.
     */
    orderBy?: tb_usuariosOrderByWithRelationInput | tb_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_usuarios
    **/
    _count?: true | Tb_usuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_usuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_usuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_usuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_usuariosMaxAggregateInputType
  }

  export type GetTb_usuariosAggregateType<T extends Tb_usuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_usuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_usuarios[P]>
      : GetScalarType<T[P], AggregateTb_usuarios[P]>
  }




  export type tb_usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_usuariosWhereInput
    orderBy?: tb_usuariosOrderByWithAggregationInput | tb_usuariosOrderByWithAggregationInput[]
    by: Tb_usuariosScalarFieldEnum[] | Tb_usuariosScalarFieldEnum
    having?: tb_usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_usuariosCountAggregateInputType | true
    _avg?: Tb_usuariosAvgAggregateInputType
    _sum?: Tb_usuariosSumAggregateInputType
    _min?: Tb_usuariosMinAggregateInputType
    _max?: Tb_usuariosMaxAggregateInputType
  }

  export type Tb_usuariosGroupByOutputType = {
    id: number
    organizacao_id: number
    nome: string
    whatsapp_id: string
    latitude: Decimal | null
    longitude: Decimal | null
    cidade: string | null
    estado: string | null
    data_cadastro: Date | null
    ultima_atividade: Date | null
    ativo: string | null
    _count: Tb_usuariosCountAggregateOutputType | null
    _avg: Tb_usuariosAvgAggregateOutputType | null
    _sum: Tb_usuariosSumAggregateOutputType | null
    _min: Tb_usuariosMinAggregateOutputType | null
    _max: Tb_usuariosMaxAggregateOutputType | null
  }

  type GetTb_usuariosGroupByPayload<T extends tb_usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_usuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_usuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_usuariosGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_usuariosGroupByOutputType[P]>
        }
      >
    >


  export type tb_usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizacao_id?: boolean
    nome?: boolean
    whatsapp_id?: boolean
    latitude?: boolean
    longitude?: boolean
    cidade?: boolean
    estado?: boolean
    data_cadastro?: boolean
    ultima_atividade?: boolean
    ativo?: boolean
    tb_interacoes?: boolean | tb_usuarios$tb_interacoesArgs<ExtArgs>
    tb_produtos_estoque?: boolean | tb_usuarios$tb_produtos_estoqueArgs<ExtArgs>
    tb_safras?: boolean | tb_usuarios$tb_safrasArgs<ExtArgs>
    tb_organizacoes?: boolean | tb_organizacoesDefaultArgs<ExtArgs>
    _count?: boolean | Tb_usuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_usuarios"]>

  export type tb_usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizacao_id?: boolean
    nome?: boolean
    whatsapp_id?: boolean
    latitude?: boolean
    longitude?: boolean
    cidade?: boolean
    estado?: boolean
    data_cadastro?: boolean
    ultima_atividade?: boolean
    ativo?: boolean
    tb_organizacoes?: boolean | tb_organizacoesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_usuarios"]>

  export type tb_usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizacao_id?: boolean
    nome?: boolean
    whatsapp_id?: boolean
    latitude?: boolean
    longitude?: boolean
    cidade?: boolean
    estado?: boolean
    data_cadastro?: boolean
    ultima_atividade?: boolean
    ativo?: boolean
    tb_organizacoes?: boolean | tb_organizacoesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_usuarios"]>

  export type tb_usuariosSelectScalar = {
    id?: boolean
    organizacao_id?: boolean
    nome?: boolean
    whatsapp_id?: boolean
    latitude?: boolean
    longitude?: boolean
    cidade?: boolean
    estado?: boolean
    data_cadastro?: boolean
    ultima_atividade?: boolean
    ativo?: boolean
  }

  export type tb_usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizacao_id" | "nome" | "whatsapp_id" | "latitude" | "longitude" | "cidade" | "estado" | "data_cadastro" | "ultima_atividade" | "ativo", ExtArgs["result"]["tb_usuarios"]>
  export type tb_usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_interacoes?: boolean | tb_usuarios$tb_interacoesArgs<ExtArgs>
    tb_produtos_estoque?: boolean | tb_usuarios$tb_produtos_estoqueArgs<ExtArgs>
    tb_safras?: boolean | tb_usuarios$tb_safrasArgs<ExtArgs>
    tb_organizacoes?: boolean | tb_organizacoesDefaultArgs<ExtArgs>
    _count?: boolean | Tb_usuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tb_usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_organizacoes?: boolean | tb_organizacoesDefaultArgs<ExtArgs>
  }
  export type tb_usuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tb_organizacoes?: boolean | tb_organizacoesDefaultArgs<ExtArgs>
  }

  export type $tb_usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_usuarios"
    objects: {
      tb_interacoes: Prisma.$tb_interacoesPayload<ExtArgs>[]
      tb_produtos_estoque: Prisma.$tb_produtos_estoquePayload<ExtArgs>[]
      tb_safras: Prisma.$tb_safrasPayload<ExtArgs>[]
      tb_organizacoes: Prisma.$tb_organizacoesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      organizacao_id: number
      nome: string
      whatsapp_id: string
      latitude: Prisma.Decimal | null
      longitude: Prisma.Decimal | null
      cidade: string | null
      estado: string | null
      data_cadastro: Date | null
      ultima_atividade: Date | null
      ativo: string | null
    }, ExtArgs["result"]["tb_usuarios"]>
    composites: {}
  }

  type tb_usuariosGetPayload<S extends boolean | null | undefined | tb_usuariosDefaultArgs> = $Result.GetResult<Prisma.$tb_usuariosPayload, S>

  type tb_usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_usuariosCountAggregateInputType | true
    }

  export interface tb_usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_usuarios'], meta: { name: 'tb_usuarios' } }
    /**
     * Find zero or one Tb_usuarios that matches the filter.
     * @param {tb_usuariosFindUniqueArgs} args - Arguments to find a Tb_usuarios
     * @example
     * // Get one Tb_usuarios
     * const tb_usuarios = await prisma.tb_usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_usuariosFindUniqueArgs>(args: SelectSubset<T, tb_usuariosFindUniqueArgs<ExtArgs>>): Prisma__tb_usuariosClient<$Result.GetResult<Prisma.$tb_usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_usuariosFindUniqueOrThrowArgs} args - Arguments to find a Tb_usuarios
     * @example
     * // Get one Tb_usuarios
     * const tb_usuarios = await prisma.tb_usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_usuariosClient<$Result.GetResult<Prisma.$tb_usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_usuariosFindFirstArgs} args - Arguments to find a Tb_usuarios
     * @example
     * // Get one Tb_usuarios
     * const tb_usuarios = await prisma.tb_usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_usuariosFindFirstArgs>(args?: SelectSubset<T, tb_usuariosFindFirstArgs<ExtArgs>>): Prisma__tb_usuariosClient<$Result.GetResult<Prisma.$tb_usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_usuariosFindFirstOrThrowArgs} args - Arguments to find a Tb_usuarios
     * @example
     * // Get one Tb_usuarios
     * const tb_usuarios = await prisma.tb_usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_usuariosClient<$Result.GetResult<Prisma.$tb_usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_usuarios
     * const tb_usuarios = await prisma.tb_usuarios.findMany()
     * 
     * // Get first 10 Tb_usuarios
     * const tb_usuarios = await prisma.tb_usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_usuariosWithIdOnly = await prisma.tb_usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_usuariosFindManyArgs>(args?: SelectSubset<T, tb_usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_usuarios.
     * @param {tb_usuariosCreateArgs} args - Arguments to create a Tb_usuarios.
     * @example
     * // Create one Tb_usuarios
     * const Tb_usuarios = await prisma.tb_usuarios.create({
     *   data: {
     *     // ... data to create a Tb_usuarios
     *   }
     * })
     * 
     */
    create<T extends tb_usuariosCreateArgs>(args: SelectSubset<T, tb_usuariosCreateArgs<ExtArgs>>): Prisma__tb_usuariosClient<$Result.GetResult<Prisma.$tb_usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_usuarios.
     * @param {tb_usuariosCreateManyArgs} args - Arguments to create many Tb_usuarios.
     * @example
     * // Create many Tb_usuarios
     * const tb_usuarios = await prisma.tb_usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_usuariosCreateManyArgs>(args?: SelectSubset<T, tb_usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tb_usuarios and returns the data saved in the database.
     * @param {tb_usuariosCreateManyAndReturnArgs} args - Arguments to create many Tb_usuarios.
     * @example
     * // Create many Tb_usuarios
     * const tb_usuarios = await prisma.tb_usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tb_usuarios and only return the `id`
     * const tb_usuariosWithIdOnly = await prisma.tb_usuarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tb_usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, tb_usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tb_usuarios.
     * @param {tb_usuariosDeleteArgs} args - Arguments to delete one Tb_usuarios.
     * @example
     * // Delete one Tb_usuarios
     * const Tb_usuarios = await prisma.tb_usuarios.delete({
     *   where: {
     *     // ... filter to delete one Tb_usuarios
     *   }
     * })
     * 
     */
    delete<T extends tb_usuariosDeleteArgs>(args: SelectSubset<T, tb_usuariosDeleteArgs<ExtArgs>>): Prisma__tb_usuariosClient<$Result.GetResult<Prisma.$tb_usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_usuarios.
     * @param {tb_usuariosUpdateArgs} args - Arguments to update one Tb_usuarios.
     * @example
     * // Update one Tb_usuarios
     * const tb_usuarios = await prisma.tb_usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_usuariosUpdateArgs>(args: SelectSubset<T, tb_usuariosUpdateArgs<ExtArgs>>): Prisma__tb_usuariosClient<$Result.GetResult<Prisma.$tb_usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_usuarios.
     * @param {tb_usuariosDeleteManyArgs} args - Arguments to filter Tb_usuarios to delete.
     * @example
     * // Delete a few Tb_usuarios
     * const { count } = await prisma.tb_usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_usuariosDeleteManyArgs>(args?: SelectSubset<T, tb_usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_usuarios
     * const tb_usuarios = await prisma.tb_usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_usuariosUpdateManyArgs>(args: SelectSubset<T, tb_usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_usuarios and returns the data updated in the database.
     * @param {tb_usuariosUpdateManyAndReturnArgs} args - Arguments to update many Tb_usuarios.
     * @example
     * // Update many Tb_usuarios
     * const tb_usuarios = await prisma.tb_usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tb_usuarios and only return the `id`
     * const tb_usuariosWithIdOnly = await prisma.tb_usuarios.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends tb_usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, tb_usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tb_usuarios.
     * @param {tb_usuariosUpsertArgs} args - Arguments to update or create a Tb_usuarios.
     * @example
     * // Update or create a Tb_usuarios
     * const tb_usuarios = await prisma.tb_usuarios.upsert({
     *   create: {
     *     // ... data to create a Tb_usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_usuarios we want to update
     *   }
     * })
     */
    upsert<T extends tb_usuariosUpsertArgs>(args: SelectSubset<T, tb_usuariosUpsertArgs<ExtArgs>>): Prisma__tb_usuariosClient<$Result.GetResult<Prisma.$tb_usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_usuariosCountArgs} args - Arguments to filter Tb_usuarios to count.
     * @example
     * // Count the number of Tb_usuarios
     * const count = await prisma.tb_usuarios.count({
     *   where: {
     *     // ... the filter for the Tb_usuarios we want to count
     *   }
     * })
    **/
    count<T extends tb_usuariosCountArgs>(
      args?: Subset<T, tb_usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_usuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_usuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_usuariosAggregateArgs>(args: Subset<T, Tb_usuariosAggregateArgs>): Prisma.PrismaPromise<GetTb_usuariosAggregateType<T>>

    /**
     * Group by Tb_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_usuariosGroupByArgs} args - Group by arguments.
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
      T extends tb_usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_usuariosGroupByArgs['orderBy'] }
        : { orderBy?: tb_usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_usuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_usuarios model
   */
  readonly fields: tb_usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tb_interacoes<T extends tb_usuarios$tb_interacoesArgs<ExtArgs> = {}>(args?: Subset<T, tb_usuarios$tb_interacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_interacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tb_produtos_estoque<T extends tb_usuarios$tb_produtos_estoqueArgs<ExtArgs> = {}>(args?: Subset<T, tb_usuarios$tb_produtos_estoqueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_produtos_estoquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tb_safras<T extends tb_usuarios$tb_safrasArgs<ExtArgs> = {}>(args?: Subset<T, tb_usuarios$tb_safrasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_safrasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tb_organizacoes<T extends tb_organizacoesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tb_organizacoesDefaultArgs<ExtArgs>>): Prisma__tb_organizacoesClient<$Result.GetResult<Prisma.$tb_organizacoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tb_usuarios model
   */
  interface tb_usuariosFieldRefs {
    readonly id: FieldRef<"tb_usuarios", 'Int'>
    readonly organizacao_id: FieldRef<"tb_usuarios", 'Int'>
    readonly nome: FieldRef<"tb_usuarios", 'String'>
    readonly whatsapp_id: FieldRef<"tb_usuarios", 'String'>
    readonly latitude: FieldRef<"tb_usuarios", 'Decimal'>
    readonly longitude: FieldRef<"tb_usuarios", 'Decimal'>
    readonly cidade: FieldRef<"tb_usuarios", 'String'>
    readonly estado: FieldRef<"tb_usuarios", 'String'>
    readonly data_cadastro: FieldRef<"tb_usuarios", 'DateTime'>
    readonly ultima_atividade: FieldRef<"tb_usuarios", 'DateTime'>
    readonly ativo: FieldRef<"tb_usuarios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_usuarios findUnique
   */
  export type tb_usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuarios
     */
    select?: tb_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuarios
     */
    omit?: tb_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuariosInclude<ExtArgs> | null
    /**
     * Filter, which tb_usuarios to fetch.
     */
    where: tb_usuariosWhereUniqueInput
  }

  /**
   * tb_usuarios findUniqueOrThrow
   */
  export type tb_usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuarios
     */
    select?: tb_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuarios
     */
    omit?: tb_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuariosInclude<ExtArgs> | null
    /**
     * Filter, which tb_usuarios to fetch.
     */
    where: tb_usuariosWhereUniqueInput
  }

  /**
   * tb_usuarios findFirst
   */
  export type tb_usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuarios
     */
    select?: tb_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuarios
     */
    omit?: tb_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuariosInclude<ExtArgs> | null
    /**
     * Filter, which tb_usuarios to fetch.
     */
    where?: tb_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_usuarios to fetch.
     */
    orderBy?: tb_usuariosOrderByWithRelationInput | tb_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_usuarios.
     */
    cursor?: tb_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_usuarios.
     */
    distinct?: Tb_usuariosScalarFieldEnum | Tb_usuariosScalarFieldEnum[]
  }

  /**
   * tb_usuarios findFirstOrThrow
   */
  export type tb_usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuarios
     */
    select?: tb_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuarios
     */
    omit?: tb_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuariosInclude<ExtArgs> | null
    /**
     * Filter, which tb_usuarios to fetch.
     */
    where?: tb_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_usuarios to fetch.
     */
    orderBy?: tb_usuariosOrderByWithRelationInput | tb_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_usuarios.
     */
    cursor?: tb_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_usuarios.
     */
    distinct?: Tb_usuariosScalarFieldEnum | Tb_usuariosScalarFieldEnum[]
  }

  /**
   * tb_usuarios findMany
   */
  export type tb_usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuarios
     */
    select?: tb_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuarios
     */
    omit?: tb_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuariosInclude<ExtArgs> | null
    /**
     * Filter, which tb_usuarios to fetch.
     */
    where?: tb_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_usuarios to fetch.
     */
    orderBy?: tb_usuariosOrderByWithRelationInput | tb_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_usuarios.
     */
    cursor?: tb_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_usuarios.
     */
    skip?: number
    distinct?: Tb_usuariosScalarFieldEnum | Tb_usuariosScalarFieldEnum[]
  }

  /**
   * tb_usuarios create
   */
  export type tb_usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuarios
     */
    select?: tb_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuarios
     */
    omit?: tb_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a tb_usuarios.
     */
    data: XOR<tb_usuariosCreateInput, tb_usuariosUncheckedCreateInput>
  }

  /**
   * tb_usuarios createMany
   */
  export type tb_usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_usuarios.
     */
    data: tb_usuariosCreateManyInput | tb_usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_usuarios createManyAndReturn
   */
  export type tb_usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuarios
     */
    select?: tb_usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuarios
     */
    omit?: tb_usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many tb_usuarios.
     */
    data: tb_usuariosCreateManyInput | tb_usuariosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuariosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tb_usuarios update
   */
  export type tb_usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuarios
     */
    select?: tb_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuarios
     */
    omit?: tb_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a tb_usuarios.
     */
    data: XOR<tb_usuariosUpdateInput, tb_usuariosUncheckedUpdateInput>
    /**
     * Choose, which tb_usuarios to update.
     */
    where: tb_usuariosWhereUniqueInput
  }

  /**
   * tb_usuarios updateMany
   */
  export type tb_usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_usuarios.
     */
    data: XOR<tb_usuariosUpdateManyMutationInput, tb_usuariosUncheckedUpdateManyInput>
    /**
     * Filter which tb_usuarios to update
     */
    where?: tb_usuariosWhereInput
    /**
     * Limit how many tb_usuarios to update.
     */
    limit?: number
  }

  /**
   * tb_usuarios updateManyAndReturn
   */
  export type tb_usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuarios
     */
    select?: tb_usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuarios
     */
    omit?: tb_usuariosOmit<ExtArgs> | null
    /**
     * The data used to update tb_usuarios.
     */
    data: XOR<tb_usuariosUpdateManyMutationInput, tb_usuariosUncheckedUpdateManyInput>
    /**
     * Filter which tb_usuarios to update
     */
    where?: tb_usuariosWhereInput
    /**
     * Limit how many tb_usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuariosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tb_usuarios upsert
   */
  export type tb_usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuarios
     */
    select?: tb_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuarios
     */
    omit?: tb_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the tb_usuarios to update in case it exists.
     */
    where: tb_usuariosWhereUniqueInput
    /**
     * In case the tb_usuarios found by the `where` argument doesn't exist, create a new tb_usuarios with this data.
     */
    create: XOR<tb_usuariosCreateInput, tb_usuariosUncheckedCreateInput>
    /**
     * In case the tb_usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_usuariosUpdateInput, tb_usuariosUncheckedUpdateInput>
  }

  /**
   * tb_usuarios delete
   */
  export type tb_usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuarios
     */
    select?: tb_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuarios
     */
    omit?: tb_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuariosInclude<ExtArgs> | null
    /**
     * Filter which tb_usuarios to delete.
     */
    where: tb_usuariosWhereUniqueInput
  }

  /**
   * tb_usuarios deleteMany
   */
  export type tb_usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_usuarios to delete
     */
    where?: tb_usuariosWhereInput
    /**
     * Limit how many tb_usuarios to delete.
     */
    limit?: number
  }

  /**
   * tb_usuarios.tb_interacoes
   */
  export type tb_usuarios$tb_interacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_interacoes
     */
    select?: tb_interacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_interacoes
     */
    omit?: tb_interacoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_interacoesInclude<ExtArgs> | null
    where?: tb_interacoesWhereInput
    orderBy?: tb_interacoesOrderByWithRelationInput | tb_interacoesOrderByWithRelationInput[]
    cursor?: tb_interacoesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_interacoesScalarFieldEnum | Tb_interacoesScalarFieldEnum[]
  }

  /**
   * tb_usuarios.tb_produtos_estoque
   */
  export type tb_usuarios$tb_produtos_estoqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos_estoque
     */
    select?: tb_produtos_estoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_produtos_estoque
     */
    omit?: tb_produtos_estoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_produtos_estoqueInclude<ExtArgs> | null
    where?: tb_produtos_estoqueWhereInput
    orderBy?: tb_produtos_estoqueOrderByWithRelationInput | tb_produtos_estoqueOrderByWithRelationInput[]
    cursor?: tb_produtos_estoqueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_produtos_estoqueScalarFieldEnum | Tb_produtos_estoqueScalarFieldEnum[]
  }

  /**
   * tb_usuarios.tb_safras
   */
  export type tb_usuarios$tb_safrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_safras
     */
    select?: tb_safrasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_safras
     */
    omit?: tb_safrasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_safrasInclude<ExtArgs> | null
    where?: tb_safrasWhereInput
    orderBy?: tb_safrasOrderByWithRelationInput | tb_safrasOrderByWithRelationInput[]
    cursor?: tb_safrasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_safrasScalarFieldEnum | Tb_safrasScalarFieldEnum[]
  }

  /**
   * tb_usuarios without action
   */
  export type tb_usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuarios
     */
    select?: tb_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuarios
     */
    omit?: tb_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuariosInclude<ExtArgs> | null
  }


  /**
   * Model tb_versoes_schema
   */

  export type AggregateTb_versoes_schema = {
    _count: Tb_versoes_schemaCountAggregateOutputType | null
    _avg: Tb_versoes_schemaAvgAggregateOutputType | null
    _sum: Tb_versoes_schemaSumAggregateOutputType | null
    _min: Tb_versoes_schemaMinAggregateOutputType | null
    _max: Tb_versoes_schemaMaxAggregateOutputType | null
  }

  export type Tb_versoes_schemaAvgAggregateOutputType = {
    id: number | null
  }

  export type Tb_versoes_schemaSumAggregateOutputType = {
    id: number | null
  }

  export type Tb_versoes_schemaMinAggregateOutputType = {
    id: number | null
    data_hora: Date | null
    usuario: string | null
    tipo_operacao: string | null
    tabelas_afetadas: string | null
    descricao: string | null
  }

  export type Tb_versoes_schemaMaxAggregateOutputType = {
    id: number | null
    data_hora: Date | null
    usuario: string | null
    tipo_operacao: string | null
    tabelas_afetadas: string | null
    descricao: string | null
  }

  export type Tb_versoes_schemaCountAggregateOutputType = {
    id: number
    data_hora: number
    usuario: number
    tipo_operacao: number
    tabelas_afetadas: number
    descricao: number
    _all: number
  }


  export type Tb_versoes_schemaAvgAggregateInputType = {
    id?: true
  }

  export type Tb_versoes_schemaSumAggregateInputType = {
    id?: true
  }

  export type Tb_versoes_schemaMinAggregateInputType = {
    id?: true
    data_hora?: true
    usuario?: true
    tipo_operacao?: true
    tabelas_afetadas?: true
    descricao?: true
  }

  export type Tb_versoes_schemaMaxAggregateInputType = {
    id?: true
    data_hora?: true
    usuario?: true
    tipo_operacao?: true
    tabelas_afetadas?: true
    descricao?: true
  }

  export type Tb_versoes_schemaCountAggregateInputType = {
    id?: true
    data_hora?: true
    usuario?: true
    tipo_operacao?: true
    tabelas_afetadas?: true
    descricao?: true
    _all?: true
  }

  export type Tb_versoes_schemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_versoes_schema to aggregate.
     */
    where?: tb_versoes_schemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_versoes_schemas to fetch.
     */
    orderBy?: tb_versoes_schemaOrderByWithRelationInput | tb_versoes_schemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_versoes_schemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_versoes_schemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_versoes_schemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_versoes_schemas
    **/
    _count?: true | Tb_versoes_schemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_versoes_schemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_versoes_schemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_versoes_schemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_versoes_schemaMaxAggregateInputType
  }

  export type GetTb_versoes_schemaAggregateType<T extends Tb_versoes_schemaAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_versoes_schema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_versoes_schema[P]>
      : GetScalarType<T[P], AggregateTb_versoes_schema[P]>
  }




  export type tb_versoes_schemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_versoes_schemaWhereInput
    orderBy?: tb_versoes_schemaOrderByWithAggregationInput | tb_versoes_schemaOrderByWithAggregationInput[]
    by: Tb_versoes_schemaScalarFieldEnum[] | Tb_versoes_schemaScalarFieldEnum
    having?: tb_versoes_schemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_versoes_schemaCountAggregateInputType | true
    _avg?: Tb_versoes_schemaAvgAggregateInputType
    _sum?: Tb_versoes_schemaSumAggregateInputType
    _min?: Tb_versoes_schemaMinAggregateInputType
    _max?: Tb_versoes_schemaMaxAggregateInputType
  }

  export type Tb_versoes_schemaGroupByOutputType = {
    id: number
    data_hora: Date | null
    usuario: string
    tipo_operacao: string
    tabelas_afetadas: string
    descricao: string | null
    _count: Tb_versoes_schemaCountAggregateOutputType | null
    _avg: Tb_versoes_schemaAvgAggregateOutputType | null
    _sum: Tb_versoes_schemaSumAggregateOutputType | null
    _min: Tb_versoes_schemaMinAggregateOutputType | null
    _max: Tb_versoes_schemaMaxAggregateOutputType | null
  }

  type GetTb_versoes_schemaGroupByPayload<T extends tb_versoes_schemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_versoes_schemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_versoes_schemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_versoes_schemaGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_versoes_schemaGroupByOutputType[P]>
        }
      >
    >


  export type tb_versoes_schemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_hora?: boolean
    usuario?: boolean
    tipo_operacao?: boolean
    tabelas_afetadas?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["tb_versoes_schema"]>

  export type tb_versoes_schemaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_hora?: boolean
    usuario?: boolean
    tipo_operacao?: boolean
    tabelas_afetadas?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["tb_versoes_schema"]>

  export type tb_versoes_schemaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_hora?: boolean
    usuario?: boolean
    tipo_operacao?: boolean
    tabelas_afetadas?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["tb_versoes_schema"]>

  export type tb_versoes_schemaSelectScalar = {
    id?: boolean
    data_hora?: boolean
    usuario?: boolean
    tipo_operacao?: boolean
    tabelas_afetadas?: boolean
    descricao?: boolean
  }

  export type tb_versoes_schemaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data_hora" | "usuario" | "tipo_operacao" | "tabelas_afetadas" | "descricao", ExtArgs["result"]["tb_versoes_schema"]>

  export type $tb_versoes_schemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_versoes_schema"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data_hora: Date | null
      usuario: string
      tipo_operacao: string
      tabelas_afetadas: string
      descricao: string | null
    }, ExtArgs["result"]["tb_versoes_schema"]>
    composites: {}
  }

  type tb_versoes_schemaGetPayload<S extends boolean | null | undefined | tb_versoes_schemaDefaultArgs> = $Result.GetResult<Prisma.$tb_versoes_schemaPayload, S>

  type tb_versoes_schemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_versoes_schemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_versoes_schemaCountAggregateInputType | true
    }

  export interface tb_versoes_schemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_versoes_schema'], meta: { name: 'tb_versoes_schema' } }
    /**
     * Find zero or one Tb_versoes_schema that matches the filter.
     * @param {tb_versoes_schemaFindUniqueArgs} args - Arguments to find a Tb_versoes_schema
     * @example
     * // Get one Tb_versoes_schema
     * const tb_versoes_schema = await prisma.tb_versoes_schema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_versoes_schemaFindUniqueArgs>(args: SelectSubset<T, tb_versoes_schemaFindUniqueArgs<ExtArgs>>): Prisma__tb_versoes_schemaClient<$Result.GetResult<Prisma.$tb_versoes_schemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_versoes_schema that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_versoes_schemaFindUniqueOrThrowArgs} args - Arguments to find a Tb_versoes_schema
     * @example
     * // Get one Tb_versoes_schema
     * const tb_versoes_schema = await prisma.tb_versoes_schema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_versoes_schemaFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_versoes_schemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_versoes_schemaClient<$Result.GetResult<Prisma.$tb_versoes_schemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_versoes_schema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_versoes_schemaFindFirstArgs} args - Arguments to find a Tb_versoes_schema
     * @example
     * // Get one Tb_versoes_schema
     * const tb_versoes_schema = await prisma.tb_versoes_schema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_versoes_schemaFindFirstArgs>(args?: SelectSubset<T, tb_versoes_schemaFindFirstArgs<ExtArgs>>): Prisma__tb_versoes_schemaClient<$Result.GetResult<Prisma.$tb_versoes_schemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_versoes_schema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_versoes_schemaFindFirstOrThrowArgs} args - Arguments to find a Tb_versoes_schema
     * @example
     * // Get one Tb_versoes_schema
     * const tb_versoes_schema = await prisma.tb_versoes_schema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_versoes_schemaFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_versoes_schemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_versoes_schemaClient<$Result.GetResult<Prisma.$tb_versoes_schemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_versoes_schemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_versoes_schemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_versoes_schemas
     * const tb_versoes_schemas = await prisma.tb_versoes_schema.findMany()
     * 
     * // Get first 10 Tb_versoes_schemas
     * const tb_versoes_schemas = await prisma.tb_versoes_schema.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_versoes_schemaWithIdOnly = await prisma.tb_versoes_schema.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_versoes_schemaFindManyArgs>(args?: SelectSubset<T, tb_versoes_schemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_versoes_schemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_versoes_schema.
     * @param {tb_versoes_schemaCreateArgs} args - Arguments to create a Tb_versoes_schema.
     * @example
     * // Create one Tb_versoes_schema
     * const Tb_versoes_schema = await prisma.tb_versoes_schema.create({
     *   data: {
     *     // ... data to create a Tb_versoes_schema
     *   }
     * })
     * 
     */
    create<T extends tb_versoes_schemaCreateArgs>(args: SelectSubset<T, tb_versoes_schemaCreateArgs<ExtArgs>>): Prisma__tb_versoes_schemaClient<$Result.GetResult<Prisma.$tb_versoes_schemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_versoes_schemas.
     * @param {tb_versoes_schemaCreateManyArgs} args - Arguments to create many Tb_versoes_schemas.
     * @example
     * // Create many Tb_versoes_schemas
     * const tb_versoes_schema = await prisma.tb_versoes_schema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_versoes_schemaCreateManyArgs>(args?: SelectSubset<T, tb_versoes_schemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tb_versoes_schemas and returns the data saved in the database.
     * @param {tb_versoes_schemaCreateManyAndReturnArgs} args - Arguments to create many Tb_versoes_schemas.
     * @example
     * // Create many Tb_versoes_schemas
     * const tb_versoes_schema = await prisma.tb_versoes_schema.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tb_versoes_schemas and only return the `id`
     * const tb_versoes_schemaWithIdOnly = await prisma.tb_versoes_schema.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tb_versoes_schemaCreateManyAndReturnArgs>(args?: SelectSubset<T, tb_versoes_schemaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_versoes_schemaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tb_versoes_schema.
     * @param {tb_versoes_schemaDeleteArgs} args - Arguments to delete one Tb_versoes_schema.
     * @example
     * // Delete one Tb_versoes_schema
     * const Tb_versoes_schema = await prisma.tb_versoes_schema.delete({
     *   where: {
     *     // ... filter to delete one Tb_versoes_schema
     *   }
     * })
     * 
     */
    delete<T extends tb_versoes_schemaDeleteArgs>(args: SelectSubset<T, tb_versoes_schemaDeleteArgs<ExtArgs>>): Prisma__tb_versoes_schemaClient<$Result.GetResult<Prisma.$tb_versoes_schemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_versoes_schema.
     * @param {tb_versoes_schemaUpdateArgs} args - Arguments to update one Tb_versoes_schema.
     * @example
     * // Update one Tb_versoes_schema
     * const tb_versoes_schema = await prisma.tb_versoes_schema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_versoes_schemaUpdateArgs>(args: SelectSubset<T, tb_versoes_schemaUpdateArgs<ExtArgs>>): Prisma__tb_versoes_schemaClient<$Result.GetResult<Prisma.$tb_versoes_schemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_versoes_schemas.
     * @param {tb_versoes_schemaDeleteManyArgs} args - Arguments to filter Tb_versoes_schemas to delete.
     * @example
     * // Delete a few Tb_versoes_schemas
     * const { count } = await prisma.tb_versoes_schema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_versoes_schemaDeleteManyArgs>(args?: SelectSubset<T, tb_versoes_schemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_versoes_schemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_versoes_schemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_versoes_schemas
     * const tb_versoes_schema = await prisma.tb_versoes_schema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_versoes_schemaUpdateManyArgs>(args: SelectSubset<T, tb_versoes_schemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_versoes_schemas and returns the data updated in the database.
     * @param {tb_versoes_schemaUpdateManyAndReturnArgs} args - Arguments to update many Tb_versoes_schemas.
     * @example
     * // Update many Tb_versoes_schemas
     * const tb_versoes_schema = await prisma.tb_versoes_schema.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tb_versoes_schemas and only return the `id`
     * const tb_versoes_schemaWithIdOnly = await prisma.tb_versoes_schema.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends tb_versoes_schemaUpdateManyAndReturnArgs>(args: SelectSubset<T, tb_versoes_schemaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_versoes_schemaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tb_versoes_schema.
     * @param {tb_versoes_schemaUpsertArgs} args - Arguments to update or create a Tb_versoes_schema.
     * @example
     * // Update or create a Tb_versoes_schema
     * const tb_versoes_schema = await prisma.tb_versoes_schema.upsert({
     *   create: {
     *     // ... data to create a Tb_versoes_schema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_versoes_schema we want to update
     *   }
     * })
     */
    upsert<T extends tb_versoes_schemaUpsertArgs>(args: SelectSubset<T, tb_versoes_schemaUpsertArgs<ExtArgs>>): Prisma__tb_versoes_schemaClient<$Result.GetResult<Prisma.$tb_versoes_schemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_versoes_schemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_versoes_schemaCountArgs} args - Arguments to filter Tb_versoes_schemas to count.
     * @example
     * // Count the number of Tb_versoes_schemas
     * const count = await prisma.tb_versoes_schema.count({
     *   where: {
     *     // ... the filter for the Tb_versoes_schemas we want to count
     *   }
     * })
    **/
    count<T extends tb_versoes_schemaCountArgs>(
      args?: Subset<T, tb_versoes_schemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_versoes_schemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_versoes_schema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_versoes_schemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_versoes_schemaAggregateArgs>(args: Subset<T, Tb_versoes_schemaAggregateArgs>): Prisma.PrismaPromise<GetTb_versoes_schemaAggregateType<T>>

    /**
     * Group by Tb_versoes_schema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_versoes_schemaGroupByArgs} args - Group by arguments.
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
      T extends tb_versoes_schemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_versoes_schemaGroupByArgs['orderBy'] }
        : { orderBy?: tb_versoes_schemaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_versoes_schemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_versoes_schemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_versoes_schema model
   */
  readonly fields: tb_versoes_schemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_versoes_schema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_versoes_schemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tb_versoes_schema model
   */
  interface tb_versoes_schemaFieldRefs {
    readonly id: FieldRef<"tb_versoes_schema", 'Int'>
    readonly data_hora: FieldRef<"tb_versoes_schema", 'DateTime'>
    readonly usuario: FieldRef<"tb_versoes_schema", 'String'>
    readonly tipo_operacao: FieldRef<"tb_versoes_schema", 'String'>
    readonly tabelas_afetadas: FieldRef<"tb_versoes_schema", 'String'>
    readonly descricao: FieldRef<"tb_versoes_schema", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_versoes_schema findUnique
   */
  export type tb_versoes_schemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_versoes_schema
     */
    select?: tb_versoes_schemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_versoes_schema
     */
    omit?: tb_versoes_schemaOmit<ExtArgs> | null
    /**
     * Filter, which tb_versoes_schema to fetch.
     */
    where: tb_versoes_schemaWhereUniqueInput
  }

  /**
   * tb_versoes_schema findUniqueOrThrow
   */
  export type tb_versoes_schemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_versoes_schema
     */
    select?: tb_versoes_schemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_versoes_schema
     */
    omit?: tb_versoes_schemaOmit<ExtArgs> | null
    /**
     * Filter, which tb_versoes_schema to fetch.
     */
    where: tb_versoes_schemaWhereUniqueInput
  }

  /**
   * tb_versoes_schema findFirst
   */
  export type tb_versoes_schemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_versoes_schema
     */
    select?: tb_versoes_schemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_versoes_schema
     */
    omit?: tb_versoes_schemaOmit<ExtArgs> | null
    /**
     * Filter, which tb_versoes_schema to fetch.
     */
    where?: tb_versoes_schemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_versoes_schemas to fetch.
     */
    orderBy?: tb_versoes_schemaOrderByWithRelationInput | tb_versoes_schemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_versoes_schemas.
     */
    cursor?: tb_versoes_schemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_versoes_schemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_versoes_schemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_versoes_schemas.
     */
    distinct?: Tb_versoes_schemaScalarFieldEnum | Tb_versoes_schemaScalarFieldEnum[]
  }

  /**
   * tb_versoes_schema findFirstOrThrow
   */
  export type tb_versoes_schemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_versoes_schema
     */
    select?: tb_versoes_schemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_versoes_schema
     */
    omit?: tb_versoes_schemaOmit<ExtArgs> | null
    /**
     * Filter, which tb_versoes_schema to fetch.
     */
    where?: tb_versoes_schemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_versoes_schemas to fetch.
     */
    orderBy?: tb_versoes_schemaOrderByWithRelationInput | tb_versoes_schemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_versoes_schemas.
     */
    cursor?: tb_versoes_schemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_versoes_schemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_versoes_schemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_versoes_schemas.
     */
    distinct?: Tb_versoes_schemaScalarFieldEnum | Tb_versoes_schemaScalarFieldEnum[]
  }

  /**
   * tb_versoes_schema findMany
   */
  export type tb_versoes_schemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_versoes_schema
     */
    select?: tb_versoes_schemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_versoes_schema
     */
    omit?: tb_versoes_schemaOmit<ExtArgs> | null
    /**
     * Filter, which tb_versoes_schemas to fetch.
     */
    where?: tb_versoes_schemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_versoes_schemas to fetch.
     */
    orderBy?: tb_versoes_schemaOrderByWithRelationInput | tb_versoes_schemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_versoes_schemas.
     */
    cursor?: tb_versoes_schemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_versoes_schemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_versoes_schemas.
     */
    skip?: number
    distinct?: Tb_versoes_schemaScalarFieldEnum | Tb_versoes_schemaScalarFieldEnum[]
  }

  /**
   * tb_versoes_schema create
   */
  export type tb_versoes_schemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_versoes_schema
     */
    select?: tb_versoes_schemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_versoes_schema
     */
    omit?: tb_versoes_schemaOmit<ExtArgs> | null
    /**
     * The data needed to create a tb_versoes_schema.
     */
    data: XOR<tb_versoes_schemaCreateInput, tb_versoes_schemaUncheckedCreateInput>
  }

  /**
   * tb_versoes_schema createMany
   */
  export type tb_versoes_schemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_versoes_schemas.
     */
    data: tb_versoes_schemaCreateManyInput | tb_versoes_schemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_versoes_schema createManyAndReturn
   */
  export type tb_versoes_schemaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_versoes_schema
     */
    select?: tb_versoes_schemaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_versoes_schema
     */
    omit?: tb_versoes_schemaOmit<ExtArgs> | null
    /**
     * The data used to create many tb_versoes_schemas.
     */
    data: tb_versoes_schemaCreateManyInput | tb_versoes_schemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_versoes_schema update
   */
  export type tb_versoes_schemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_versoes_schema
     */
    select?: tb_versoes_schemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_versoes_schema
     */
    omit?: tb_versoes_schemaOmit<ExtArgs> | null
    /**
     * The data needed to update a tb_versoes_schema.
     */
    data: XOR<tb_versoes_schemaUpdateInput, tb_versoes_schemaUncheckedUpdateInput>
    /**
     * Choose, which tb_versoes_schema to update.
     */
    where: tb_versoes_schemaWhereUniqueInput
  }

  /**
   * tb_versoes_schema updateMany
   */
  export type tb_versoes_schemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_versoes_schemas.
     */
    data: XOR<tb_versoes_schemaUpdateManyMutationInput, tb_versoes_schemaUncheckedUpdateManyInput>
    /**
     * Filter which tb_versoes_schemas to update
     */
    where?: tb_versoes_schemaWhereInput
    /**
     * Limit how many tb_versoes_schemas to update.
     */
    limit?: number
  }

  /**
   * tb_versoes_schema updateManyAndReturn
   */
  export type tb_versoes_schemaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_versoes_schema
     */
    select?: tb_versoes_schemaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_versoes_schema
     */
    omit?: tb_versoes_schemaOmit<ExtArgs> | null
    /**
     * The data used to update tb_versoes_schemas.
     */
    data: XOR<tb_versoes_schemaUpdateManyMutationInput, tb_versoes_schemaUncheckedUpdateManyInput>
    /**
     * Filter which tb_versoes_schemas to update
     */
    where?: tb_versoes_schemaWhereInput
    /**
     * Limit how many tb_versoes_schemas to update.
     */
    limit?: number
  }

  /**
   * tb_versoes_schema upsert
   */
  export type tb_versoes_schemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_versoes_schema
     */
    select?: tb_versoes_schemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_versoes_schema
     */
    omit?: tb_versoes_schemaOmit<ExtArgs> | null
    /**
     * The filter to search for the tb_versoes_schema to update in case it exists.
     */
    where: tb_versoes_schemaWhereUniqueInput
    /**
     * In case the tb_versoes_schema found by the `where` argument doesn't exist, create a new tb_versoes_schema with this data.
     */
    create: XOR<tb_versoes_schemaCreateInput, tb_versoes_schemaUncheckedCreateInput>
    /**
     * In case the tb_versoes_schema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_versoes_schemaUpdateInput, tb_versoes_schemaUncheckedUpdateInput>
  }

  /**
   * tb_versoes_schema delete
   */
  export type tb_versoes_schemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_versoes_schema
     */
    select?: tb_versoes_schemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_versoes_schema
     */
    omit?: tb_versoes_schemaOmit<ExtArgs> | null
    /**
     * Filter which tb_versoes_schema to delete.
     */
    where: tb_versoes_schemaWhereUniqueInput
  }

  /**
   * tb_versoes_schema deleteMany
   */
  export type tb_versoes_schemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_versoes_schemas to delete
     */
    where?: tb_versoes_schemaWhereInput
    /**
     * Limit how many tb_versoes_schemas to delete.
     */
    limit?: number
  }

  /**
   * tb_versoes_schema without action
   */
  export type tb_versoes_schemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_versoes_schema
     */
    select?: tb_versoes_schemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_versoes_schema
     */
    omit?: tb_versoes_schemaOmit<ExtArgs> | null
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


  export const Tb_administradoresScalarFieldEnum: {
    id: 'id',
    organizacao_id: 'organizacao_id',
    nome: 'nome',
    email: 'email',
    senha_hash: 'senha_hash',
    cargo: 'cargo',
    ativo: 'ativo',
    data_cadastro: 'data_cadastro'
  };

  export type Tb_administradoresScalarFieldEnum = (typeof Tb_administradoresScalarFieldEnum)[keyof typeof Tb_administradoresScalarFieldEnum]


  export const Tb_conversation_contextsScalarFieldEnum: {
    whatsapp_id: 'whatsapp_id',
    context: 'context',
    last_updated: 'last_updated'
  };

  export type Tb_conversation_contextsScalarFieldEnum = (typeof Tb_conversation_contextsScalarFieldEnum)[keyof typeof Tb_conversation_contextsScalarFieldEnum]


  export const Tb_intencoesScalarFieldEnum: {
    id: 'id',
    nome_intencao: 'nome_intencao',
    descricao: 'descricao'
  };

  export type Tb_intencoesScalarFieldEnum = (typeof Tb_intencoesScalarFieldEnum)[keyof typeof Tb_intencoesScalarFieldEnum]


  export const Tb_interacoesScalarFieldEnum: {
    id: 'id',
    agricultor_id: 'agricultor_id',
    mensagem_usuario: 'mensagem_usuario',
    resposta_chatbot: 'resposta_chatbot',
    entidades: 'entidades',
    timestamp: 'timestamp'
  };

  export type Tb_interacoesScalarFieldEnum = (typeof Tb_interacoesScalarFieldEnum)[keyof typeof Tb_interacoesScalarFieldEnum]


  export const Tb_interacoes_intencoesScalarFieldEnum: {
    interacao_id: 'interacao_id',
    intencao_id: 'intencao_id'
  };

  export type Tb_interacoes_intencoesScalarFieldEnum = (typeof Tb_interacoes_intencoesScalarFieldEnum)[keyof typeof Tb_interacoes_intencoesScalarFieldEnum]


  export const Tb_movimentacoes_estoqueScalarFieldEnum: {
    id: 'id',
    produto_id: 'produto_id',
    tipo_movimentacao: 'tipo_movimentacao',
    quantidade: 'quantidade',
    data_movimentacao: 'data_movimentacao',
    observacao: 'observacao'
  };

  export type Tb_movimentacoes_estoqueScalarFieldEnum = (typeof Tb_movimentacoes_estoqueScalarFieldEnum)[keyof typeof Tb_movimentacoes_estoqueScalarFieldEnum]


  export const Tb_organizacoesScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cnpj: 'cnpj',
    data_criacao: 'data_criacao'
  };

  export type Tb_organizacoesScalarFieldEnum = (typeof Tb_organizacoesScalarFieldEnum)[keyof typeof Tb_organizacoesScalarFieldEnum]


  export const Tb_produtos_estoqueScalarFieldEnum: {
    id: 'id',
    agricultor_id: 'agricultor_id',
    nome_produto: 'nome_produto',
    tipo_produto: 'tipo_produto',
    unidade_medida: 'unidade_medida',
    saldo_atual: 'saldo_atual'
  };

  export type Tb_produtos_estoqueScalarFieldEnum = (typeof Tb_produtos_estoqueScalarFieldEnum)[keyof typeof Tb_produtos_estoqueScalarFieldEnum]


  export const Tb_safrasScalarFieldEnum: {
    id: 'id',
    agricultor_id: 'agricultor_id',
    cultura: 'cultura',
    ano_safra: 'ano_safra',
    area_plantada_ha: 'area_plantada_ha',
    produtividade: 'produtividade',
    unidade_medida: 'unidade_medida'
  };

  export type Tb_safrasScalarFieldEnum = (typeof Tb_safrasScalarFieldEnum)[keyof typeof Tb_safrasScalarFieldEnum]


  export const Tb_usuariosScalarFieldEnum: {
    id: 'id',
    organizacao_id: 'organizacao_id',
    nome: 'nome',
    whatsapp_id: 'whatsapp_id',
    latitude: 'latitude',
    longitude: 'longitude',
    cidade: 'cidade',
    estado: 'estado',
    data_cadastro: 'data_cadastro',
    ultima_atividade: 'ultima_atividade',
    ativo: 'ativo'
  };

  export type Tb_usuariosScalarFieldEnum = (typeof Tb_usuariosScalarFieldEnum)[keyof typeof Tb_usuariosScalarFieldEnum]


  export const Tb_versoes_schemaScalarFieldEnum: {
    id: 'id',
    data_hora: 'data_hora',
    usuario: 'usuario',
    tipo_operacao: 'tipo_operacao',
    tabelas_afetadas: 'tabelas_afetadas',
    descricao: 'descricao'
  };

  export type Tb_versoes_schemaScalarFieldEnum = (typeof Tb_versoes_schemaScalarFieldEnum)[keyof typeof Tb_versoes_schemaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type tb_administradoresWhereInput = {
    AND?: tb_administradoresWhereInput | tb_administradoresWhereInput[]
    OR?: tb_administradoresWhereInput[]
    NOT?: tb_administradoresWhereInput | tb_administradoresWhereInput[]
    id?: IntFilter<"tb_administradores"> | number
    organizacao_id?: IntFilter<"tb_administradores"> | number
    nome?: StringFilter<"tb_administradores"> | string
    email?: StringFilter<"tb_administradores"> | string
    senha_hash?: StringFilter<"tb_administradores"> | string
    cargo?: StringNullableFilter<"tb_administradores"> | string | null
    ativo?: StringNullableFilter<"tb_administradores"> | string | null
    data_cadastro?: DateTimeNullableFilter<"tb_administradores"> | Date | string | null
    tb_organizacoes?: XOR<Tb_organizacoesScalarRelationFilter, tb_organizacoesWhereInput>
  }

  export type tb_administradoresOrderByWithRelationInput = {
    id?: SortOrder
    organizacao_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    cargo?: SortOrderInput | SortOrder
    ativo?: SortOrderInput | SortOrder
    data_cadastro?: SortOrderInput | SortOrder
    tb_organizacoes?: tb_organizacoesOrderByWithRelationInput
  }

  export type tb_administradoresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: tb_administradoresWhereInput | tb_administradoresWhereInput[]
    OR?: tb_administradoresWhereInput[]
    NOT?: tb_administradoresWhereInput | tb_administradoresWhereInput[]
    organizacao_id?: IntFilter<"tb_administradores"> | number
    nome?: StringFilter<"tb_administradores"> | string
    senha_hash?: StringFilter<"tb_administradores"> | string
    cargo?: StringNullableFilter<"tb_administradores"> | string | null
    ativo?: StringNullableFilter<"tb_administradores"> | string | null
    data_cadastro?: DateTimeNullableFilter<"tb_administradores"> | Date | string | null
    tb_organizacoes?: XOR<Tb_organizacoesScalarRelationFilter, tb_organizacoesWhereInput>
  }, "id" | "email">

  export type tb_administradoresOrderByWithAggregationInput = {
    id?: SortOrder
    organizacao_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    cargo?: SortOrderInput | SortOrder
    ativo?: SortOrderInput | SortOrder
    data_cadastro?: SortOrderInput | SortOrder
    _count?: tb_administradoresCountOrderByAggregateInput
    _avg?: tb_administradoresAvgOrderByAggregateInput
    _max?: tb_administradoresMaxOrderByAggregateInput
    _min?: tb_administradoresMinOrderByAggregateInput
    _sum?: tb_administradoresSumOrderByAggregateInput
  }

  export type tb_administradoresScalarWhereWithAggregatesInput = {
    AND?: tb_administradoresScalarWhereWithAggregatesInput | tb_administradoresScalarWhereWithAggregatesInput[]
    OR?: tb_administradoresScalarWhereWithAggregatesInput[]
    NOT?: tb_administradoresScalarWhereWithAggregatesInput | tb_administradoresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_administradores"> | number
    organizacao_id?: IntWithAggregatesFilter<"tb_administradores"> | number
    nome?: StringWithAggregatesFilter<"tb_administradores"> | string
    email?: StringWithAggregatesFilter<"tb_administradores"> | string
    senha_hash?: StringWithAggregatesFilter<"tb_administradores"> | string
    cargo?: StringNullableWithAggregatesFilter<"tb_administradores"> | string | null
    ativo?: StringNullableWithAggregatesFilter<"tb_administradores"> | string | null
    data_cadastro?: DateTimeNullableWithAggregatesFilter<"tb_administradores"> | Date | string | null
  }

  export type tb_conversation_contextsWhereInput = {
    AND?: tb_conversation_contextsWhereInput | tb_conversation_contextsWhereInput[]
    OR?: tb_conversation_contextsWhereInput[]
    NOT?: tb_conversation_contextsWhereInput | tb_conversation_contextsWhereInput[]
    whatsapp_id?: StringFilter<"tb_conversation_contexts"> | string
    context?: JsonNullableFilter<"tb_conversation_contexts">
    last_updated?: DateTimeNullableFilter<"tb_conversation_contexts"> | Date | string | null
  }

  export type tb_conversation_contextsOrderByWithRelationInput = {
    whatsapp_id?: SortOrder
    context?: SortOrderInput | SortOrder
    last_updated?: SortOrderInput | SortOrder
  }

  export type tb_conversation_contextsWhereUniqueInput = Prisma.AtLeast<{
    whatsapp_id?: string
    AND?: tb_conversation_contextsWhereInput | tb_conversation_contextsWhereInput[]
    OR?: tb_conversation_contextsWhereInput[]
    NOT?: tb_conversation_contextsWhereInput | tb_conversation_contextsWhereInput[]
    context?: JsonNullableFilter<"tb_conversation_contexts">
    last_updated?: DateTimeNullableFilter<"tb_conversation_contexts"> | Date | string | null
  }, "whatsapp_id">

  export type tb_conversation_contextsOrderByWithAggregationInput = {
    whatsapp_id?: SortOrder
    context?: SortOrderInput | SortOrder
    last_updated?: SortOrderInput | SortOrder
    _count?: tb_conversation_contextsCountOrderByAggregateInput
    _max?: tb_conversation_contextsMaxOrderByAggregateInput
    _min?: tb_conversation_contextsMinOrderByAggregateInput
  }

  export type tb_conversation_contextsScalarWhereWithAggregatesInput = {
    AND?: tb_conversation_contextsScalarWhereWithAggregatesInput | tb_conversation_contextsScalarWhereWithAggregatesInput[]
    OR?: tb_conversation_contextsScalarWhereWithAggregatesInput[]
    NOT?: tb_conversation_contextsScalarWhereWithAggregatesInput | tb_conversation_contextsScalarWhereWithAggregatesInput[]
    whatsapp_id?: StringWithAggregatesFilter<"tb_conversation_contexts"> | string
    context?: JsonNullableWithAggregatesFilter<"tb_conversation_contexts">
    last_updated?: DateTimeNullableWithAggregatesFilter<"tb_conversation_contexts"> | Date | string | null
  }

  export type tb_intencoesWhereInput = {
    AND?: tb_intencoesWhereInput | tb_intencoesWhereInput[]
    OR?: tb_intencoesWhereInput[]
    NOT?: tb_intencoesWhereInput | tb_intencoesWhereInput[]
    id?: IntFilter<"tb_intencoes"> | number
    nome_intencao?: StringFilter<"tb_intencoes"> | string
    descricao?: StringNullableFilter<"tb_intencoes"> | string | null
    tb_interacoes_intencoes?: Tb_interacoes_intencoesListRelationFilter
  }

  export type tb_intencoesOrderByWithRelationInput = {
    id?: SortOrder
    nome_intencao?: SortOrder
    descricao?: SortOrderInput | SortOrder
    tb_interacoes_intencoes?: tb_interacoes_intencoesOrderByRelationAggregateInput
  }

  export type tb_intencoesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome_intencao?: string
    AND?: tb_intencoesWhereInput | tb_intencoesWhereInput[]
    OR?: tb_intencoesWhereInput[]
    NOT?: tb_intencoesWhereInput | tb_intencoesWhereInput[]
    descricao?: StringNullableFilter<"tb_intencoes"> | string | null
    tb_interacoes_intencoes?: Tb_interacoes_intencoesListRelationFilter
  }, "id" | "nome_intencao">

  export type tb_intencoesOrderByWithAggregationInput = {
    id?: SortOrder
    nome_intencao?: SortOrder
    descricao?: SortOrderInput | SortOrder
    _count?: tb_intencoesCountOrderByAggregateInput
    _avg?: tb_intencoesAvgOrderByAggregateInput
    _max?: tb_intencoesMaxOrderByAggregateInput
    _min?: tb_intencoesMinOrderByAggregateInput
    _sum?: tb_intencoesSumOrderByAggregateInput
  }

  export type tb_intencoesScalarWhereWithAggregatesInput = {
    AND?: tb_intencoesScalarWhereWithAggregatesInput | tb_intencoesScalarWhereWithAggregatesInput[]
    OR?: tb_intencoesScalarWhereWithAggregatesInput[]
    NOT?: tb_intencoesScalarWhereWithAggregatesInput | tb_intencoesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_intencoes"> | number
    nome_intencao?: StringWithAggregatesFilter<"tb_intencoes"> | string
    descricao?: StringNullableWithAggregatesFilter<"tb_intencoes"> | string | null
  }

  export type tb_interacoesWhereInput = {
    AND?: tb_interacoesWhereInput | tb_interacoesWhereInput[]
    OR?: tb_interacoesWhereInput[]
    NOT?: tb_interacoesWhereInput | tb_interacoesWhereInput[]
    id?: IntFilter<"tb_interacoes"> | number
    agricultor_id?: IntFilter<"tb_interacoes"> | number
    mensagem_usuario?: StringNullableFilter<"tb_interacoes"> | string | null
    resposta_chatbot?: StringNullableFilter<"tb_interacoes"> | string | null
    entidades?: JsonNullableFilter<"tb_interacoes">
    timestamp?: DateTimeNullableFilter<"tb_interacoes"> | Date | string | null
    tb_usuarios?: XOR<Tb_usuariosScalarRelationFilter, tb_usuariosWhereInput>
    tb_interacoes_intencoes?: Tb_interacoes_intencoesListRelationFilter
  }

  export type tb_interacoesOrderByWithRelationInput = {
    id?: SortOrder
    agricultor_id?: SortOrder
    mensagem_usuario?: SortOrderInput | SortOrder
    resposta_chatbot?: SortOrderInput | SortOrder
    entidades?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    tb_usuarios?: tb_usuariosOrderByWithRelationInput
    tb_interacoes_intencoes?: tb_interacoes_intencoesOrderByRelationAggregateInput
  }

  export type tb_interacoesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_interacoesWhereInput | tb_interacoesWhereInput[]
    OR?: tb_interacoesWhereInput[]
    NOT?: tb_interacoesWhereInput | tb_interacoesWhereInput[]
    agricultor_id?: IntFilter<"tb_interacoes"> | number
    mensagem_usuario?: StringNullableFilter<"tb_interacoes"> | string | null
    resposta_chatbot?: StringNullableFilter<"tb_interacoes"> | string | null
    entidades?: JsonNullableFilter<"tb_interacoes">
    timestamp?: DateTimeNullableFilter<"tb_interacoes"> | Date | string | null
    tb_usuarios?: XOR<Tb_usuariosScalarRelationFilter, tb_usuariosWhereInput>
    tb_interacoes_intencoes?: Tb_interacoes_intencoesListRelationFilter
  }, "id">

  export type tb_interacoesOrderByWithAggregationInput = {
    id?: SortOrder
    agricultor_id?: SortOrder
    mensagem_usuario?: SortOrderInput | SortOrder
    resposta_chatbot?: SortOrderInput | SortOrder
    entidades?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    _count?: tb_interacoesCountOrderByAggregateInput
    _avg?: tb_interacoesAvgOrderByAggregateInput
    _max?: tb_interacoesMaxOrderByAggregateInput
    _min?: tb_interacoesMinOrderByAggregateInput
    _sum?: tb_interacoesSumOrderByAggregateInput
  }

  export type tb_interacoesScalarWhereWithAggregatesInput = {
    AND?: tb_interacoesScalarWhereWithAggregatesInput | tb_interacoesScalarWhereWithAggregatesInput[]
    OR?: tb_interacoesScalarWhereWithAggregatesInput[]
    NOT?: tb_interacoesScalarWhereWithAggregatesInput | tb_interacoesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_interacoes"> | number
    agricultor_id?: IntWithAggregatesFilter<"tb_interacoes"> | number
    mensagem_usuario?: StringNullableWithAggregatesFilter<"tb_interacoes"> | string | null
    resposta_chatbot?: StringNullableWithAggregatesFilter<"tb_interacoes"> | string | null
    entidades?: JsonNullableWithAggregatesFilter<"tb_interacoes">
    timestamp?: DateTimeNullableWithAggregatesFilter<"tb_interacoes"> | Date | string | null
  }

  export type tb_interacoes_intencoesWhereInput = {
    AND?: tb_interacoes_intencoesWhereInput | tb_interacoes_intencoesWhereInput[]
    OR?: tb_interacoes_intencoesWhereInput[]
    NOT?: tb_interacoes_intencoesWhereInput | tb_interacoes_intencoesWhereInput[]
    interacao_id?: IntFilter<"tb_interacoes_intencoes"> | number
    intencao_id?: IntFilter<"tb_interacoes_intencoes"> | number
    tb_intencoes?: XOR<Tb_intencoesScalarRelationFilter, tb_intencoesWhereInput>
    tb_interacoes?: XOR<Tb_interacoesScalarRelationFilter, tb_interacoesWhereInput>
  }

  export type tb_interacoes_intencoesOrderByWithRelationInput = {
    interacao_id?: SortOrder
    intencao_id?: SortOrder
    tb_intencoes?: tb_intencoesOrderByWithRelationInput
    tb_interacoes?: tb_interacoesOrderByWithRelationInput
  }

  export type tb_interacoes_intencoesWhereUniqueInput = Prisma.AtLeast<{
    interacao_id_intencao_id?: tb_interacoes_intencoesInteracao_idIntencao_idCompoundUniqueInput
    AND?: tb_interacoes_intencoesWhereInput | tb_interacoes_intencoesWhereInput[]
    OR?: tb_interacoes_intencoesWhereInput[]
    NOT?: tb_interacoes_intencoesWhereInput | tb_interacoes_intencoesWhereInput[]
    interacao_id?: IntFilter<"tb_interacoes_intencoes"> | number
    intencao_id?: IntFilter<"tb_interacoes_intencoes"> | number
    tb_intencoes?: XOR<Tb_intencoesScalarRelationFilter, tb_intencoesWhereInput>
    tb_interacoes?: XOR<Tb_interacoesScalarRelationFilter, tb_interacoesWhereInput>
  }, "interacao_id_intencao_id">

  export type tb_interacoes_intencoesOrderByWithAggregationInput = {
    interacao_id?: SortOrder
    intencao_id?: SortOrder
    _count?: tb_interacoes_intencoesCountOrderByAggregateInput
    _avg?: tb_interacoes_intencoesAvgOrderByAggregateInput
    _max?: tb_interacoes_intencoesMaxOrderByAggregateInput
    _min?: tb_interacoes_intencoesMinOrderByAggregateInput
    _sum?: tb_interacoes_intencoesSumOrderByAggregateInput
  }

  export type tb_interacoes_intencoesScalarWhereWithAggregatesInput = {
    AND?: tb_interacoes_intencoesScalarWhereWithAggregatesInput | tb_interacoes_intencoesScalarWhereWithAggregatesInput[]
    OR?: tb_interacoes_intencoesScalarWhereWithAggregatesInput[]
    NOT?: tb_interacoes_intencoesScalarWhereWithAggregatesInput | tb_interacoes_intencoesScalarWhereWithAggregatesInput[]
    interacao_id?: IntWithAggregatesFilter<"tb_interacoes_intencoes"> | number
    intencao_id?: IntWithAggregatesFilter<"tb_interacoes_intencoes"> | number
  }

  export type tb_movimentacoes_estoqueWhereInput = {
    AND?: tb_movimentacoes_estoqueWhereInput | tb_movimentacoes_estoqueWhereInput[]
    OR?: tb_movimentacoes_estoqueWhereInput[]
    NOT?: tb_movimentacoes_estoqueWhereInput | tb_movimentacoes_estoqueWhereInput[]
    id?: IntFilter<"tb_movimentacoes_estoque"> | number
    produto_id?: IntFilter<"tb_movimentacoes_estoque"> | number
    tipo_movimentacao?: StringFilter<"tb_movimentacoes_estoque"> | string
    quantidade?: DecimalFilter<"tb_movimentacoes_estoque"> | Decimal | DecimalJsLike | number | string
    data_movimentacao?: DateTimeNullableFilter<"tb_movimentacoes_estoque"> | Date | string | null
    observacao?: StringNullableFilter<"tb_movimentacoes_estoque"> | string | null
    tb_produtos_estoque?: XOR<Tb_produtos_estoqueScalarRelationFilter, tb_produtos_estoqueWhereInput>
  }

  export type tb_movimentacoes_estoqueOrderByWithRelationInput = {
    id?: SortOrder
    produto_id?: SortOrder
    tipo_movimentacao?: SortOrder
    quantidade?: SortOrder
    data_movimentacao?: SortOrderInput | SortOrder
    observacao?: SortOrderInput | SortOrder
    tb_produtos_estoque?: tb_produtos_estoqueOrderByWithRelationInput
  }

  export type tb_movimentacoes_estoqueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_movimentacoes_estoqueWhereInput | tb_movimentacoes_estoqueWhereInput[]
    OR?: tb_movimentacoes_estoqueWhereInput[]
    NOT?: tb_movimentacoes_estoqueWhereInput | tb_movimentacoes_estoqueWhereInput[]
    produto_id?: IntFilter<"tb_movimentacoes_estoque"> | number
    tipo_movimentacao?: StringFilter<"tb_movimentacoes_estoque"> | string
    quantidade?: DecimalFilter<"tb_movimentacoes_estoque"> | Decimal | DecimalJsLike | number | string
    data_movimentacao?: DateTimeNullableFilter<"tb_movimentacoes_estoque"> | Date | string | null
    observacao?: StringNullableFilter<"tb_movimentacoes_estoque"> | string | null
    tb_produtos_estoque?: XOR<Tb_produtos_estoqueScalarRelationFilter, tb_produtos_estoqueWhereInput>
  }, "id">

  export type tb_movimentacoes_estoqueOrderByWithAggregationInput = {
    id?: SortOrder
    produto_id?: SortOrder
    tipo_movimentacao?: SortOrder
    quantidade?: SortOrder
    data_movimentacao?: SortOrderInput | SortOrder
    observacao?: SortOrderInput | SortOrder
    _count?: tb_movimentacoes_estoqueCountOrderByAggregateInput
    _avg?: tb_movimentacoes_estoqueAvgOrderByAggregateInput
    _max?: tb_movimentacoes_estoqueMaxOrderByAggregateInput
    _min?: tb_movimentacoes_estoqueMinOrderByAggregateInput
    _sum?: tb_movimentacoes_estoqueSumOrderByAggregateInput
  }

  export type tb_movimentacoes_estoqueScalarWhereWithAggregatesInput = {
    AND?: tb_movimentacoes_estoqueScalarWhereWithAggregatesInput | tb_movimentacoes_estoqueScalarWhereWithAggregatesInput[]
    OR?: tb_movimentacoes_estoqueScalarWhereWithAggregatesInput[]
    NOT?: tb_movimentacoes_estoqueScalarWhereWithAggregatesInput | tb_movimentacoes_estoqueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_movimentacoes_estoque"> | number
    produto_id?: IntWithAggregatesFilter<"tb_movimentacoes_estoque"> | number
    tipo_movimentacao?: StringWithAggregatesFilter<"tb_movimentacoes_estoque"> | string
    quantidade?: DecimalWithAggregatesFilter<"tb_movimentacoes_estoque"> | Decimal | DecimalJsLike | number | string
    data_movimentacao?: DateTimeNullableWithAggregatesFilter<"tb_movimentacoes_estoque"> | Date | string | null
    observacao?: StringNullableWithAggregatesFilter<"tb_movimentacoes_estoque"> | string | null
  }

  export type tb_organizacoesWhereInput = {
    AND?: tb_organizacoesWhereInput | tb_organizacoesWhereInput[]
    OR?: tb_organizacoesWhereInput[]
    NOT?: tb_organizacoesWhereInput | tb_organizacoesWhereInput[]
    id?: IntFilter<"tb_organizacoes"> | number
    nome?: StringFilter<"tb_organizacoes"> | string
    cnpj?: StringNullableFilter<"tb_organizacoes"> | string | null
    data_criacao?: DateTimeNullableFilter<"tb_organizacoes"> | Date | string | null
    tb_administradores?: Tb_administradoresListRelationFilter
    tb_usuarios?: Tb_usuariosListRelationFilter
  }

  export type tb_organizacoesOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrderInput | SortOrder
    data_criacao?: SortOrderInput | SortOrder
    tb_administradores?: tb_administradoresOrderByRelationAggregateInput
    tb_usuarios?: tb_usuariosOrderByRelationAggregateInput
  }

  export type tb_organizacoesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    cnpj?: string
    AND?: tb_organizacoesWhereInput | tb_organizacoesWhereInput[]
    OR?: tb_organizacoesWhereInput[]
    NOT?: tb_organizacoesWhereInput | tb_organizacoesWhereInput[]
    data_criacao?: DateTimeNullableFilter<"tb_organizacoes"> | Date | string | null
    tb_administradores?: Tb_administradoresListRelationFilter
    tb_usuarios?: Tb_usuariosListRelationFilter
  }, "id" | "nome" | "cnpj">

  export type tb_organizacoesOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrderInput | SortOrder
    data_criacao?: SortOrderInput | SortOrder
    _count?: tb_organizacoesCountOrderByAggregateInput
    _avg?: tb_organizacoesAvgOrderByAggregateInput
    _max?: tb_organizacoesMaxOrderByAggregateInput
    _min?: tb_organizacoesMinOrderByAggregateInput
    _sum?: tb_organizacoesSumOrderByAggregateInput
  }

  export type tb_organizacoesScalarWhereWithAggregatesInput = {
    AND?: tb_organizacoesScalarWhereWithAggregatesInput | tb_organizacoesScalarWhereWithAggregatesInput[]
    OR?: tb_organizacoesScalarWhereWithAggregatesInput[]
    NOT?: tb_organizacoesScalarWhereWithAggregatesInput | tb_organizacoesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_organizacoes"> | number
    nome?: StringWithAggregatesFilter<"tb_organizacoes"> | string
    cnpj?: StringNullableWithAggregatesFilter<"tb_organizacoes"> | string | null
    data_criacao?: DateTimeNullableWithAggregatesFilter<"tb_organizacoes"> | Date | string | null
  }

  export type tb_produtos_estoqueWhereInput = {
    AND?: tb_produtos_estoqueWhereInput | tb_produtos_estoqueWhereInput[]
    OR?: tb_produtos_estoqueWhereInput[]
    NOT?: tb_produtos_estoqueWhereInput | tb_produtos_estoqueWhereInput[]
    id?: IntFilter<"tb_produtos_estoque"> | number
    agricultor_id?: IntFilter<"tb_produtos_estoque"> | number
    nome_produto?: StringFilter<"tb_produtos_estoque"> | string
    tipo_produto?: StringFilter<"tb_produtos_estoque"> | string
    unidade_medida?: StringFilter<"tb_produtos_estoque"> | string
    saldo_atual?: DecimalFilter<"tb_produtos_estoque"> | Decimal | DecimalJsLike | number | string
    tb_movimentacoes_estoque?: Tb_movimentacoes_estoqueListRelationFilter
    tb_usuarios?: XOR<Tb_usuariosScalarRelationFilter, tb_usuariosWhereInput>
  }

  export type tb_produtos_estoqueOrderByWithRelationInput = {
    id?: SortOrder
    agricultor_id?: SortOrder
    nome_produto?: SortOrder
    tipo_produto?: SortOrder
    unidade_medida?: SortOrder
    saldo_atual?: SortOrder
    tb_movimentacoes_estoque?: tb_movimentacoes_estoqueOrderByRelationAggregateInput
    tb_usuarios?: tb_usuariosOrderByWithRelationInput
  }

  export type tb_produtos_estoqueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_produtos_estoqueWhereInput | tb_produtos_estoqueWhereInput[]
    OR?: tb_produtos_estoqueWhereInput[]
    NOT?: tb_produtos_estoqueWhereInput | tb_produtos_estoqueWhereInput[]
    agricultor_id?: IntFilter<"tb_produtos_estoque"> | number
    nome_produto?: StringFilter<"tb_produtos_estoque"> | string
    tipo_produto?: StringFilter<"tb_produtos_estoque"> | string
    unidade_medida?: StringFilter<"tb_produtos_estoque"> | string
    saldo_atual?: DecimalFilter<"tb_produtos_estoque"> | Decimal | DecimalJsLike | number | string
    tb_movimentacoes_estoque?: Tb_movimentacoes_estoqueListRelationFilter
    tb_usuarios?: XOR<Tb_usuariosScalarRelationFilter, tb_usuariosWhereInput>
  }, "id">

  export type tb_produtos_estoqueOrderByWithAggregationInput = {
    id?: SortOrder
    agricultor_id?: SortOrder
    nome_produto?: SortOrder
    tipo_produto?: SortOrder
    unidade_medida?: SortOrder
    saldo_atual?: SortOrder
    _count?: tb_produtos_estoqueCountOrderByAggregateInput
    _avg?: tb_produtos_estoqueAvgOrderByAggregateInput
    _max?: tb_produtos_estoqueMaxOrderByAggregateInput
    _min?: tb_produtos_estoqueMinOrderByAggregateInput
    _sum?: tb_produtos_estoqueSumOrderByAggregateInput
  }

  export type tb_produtos_estoqueScalarWhereWithAggregatesInput = {
    AND?: tb_produtos_estoqueScalarWhereWithAggregatesInput | tb_produtos_estoqueScalarWhereWithAggregatesInput[]
    OR?: tb_produtos_estoqueScalarWhereWithAggregatesInput[]
    NOT?: tb_produtos_estoqueScalarWhereWithAggregatesInput | tb_produtos_estoqueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_produtos_estoque"> | number
    agricultor_id?: IntWithAggregatesFilter<"tb_produtos_estoque"> | number
    nome_produto?: StringWithAggregatesFilter<"tb_produtos_estoque"> | string
    tipo_produto?: StringWithAggregatesFilter<"tb_produtos_estoque"> | string
    unidade_medida?: StringWithAggregatesFilter<"tb_produtos_estoque"> | string
    saldo_atual?: DecimalWithAggregatesFilter<"tb_produtos_estoque"> | Decimal | DecimalJsLike | number | string
  }

  export type tb_safrasWhereInput = {
    AND?: tb_safrasWhereInput | tb_safrasWhereInput[]
    OR?: tb_safrasWhereInput[]
    NOT?: tb_safrasWhereInput | tb_safrasWhereInput[]
    id?: IntFilter<"tb_safras"> | number
    agricultor_id?: IntFilter<"tb_safras"> | number
    cultura?: StringFilter<"tb_safras"> | string
    ano_safra?: StringNullableFilter<"tb_safras"> | string | null
    area_plantada_ha?: DecimalNullableFilter<"tb_safras"> | Decimal | DecimalJsLike | number | string | null
    produtividade?: DecimalNullableFilter<"tb_safras"> | Decimal | DecimalJsLike | number | string | null
    unidade_medida?: StringNullableFilter<"tb_safras"> | string | null
    tb_usuarios?: XOR<Tb_usuariosScalarRelationFilter, tb_usuariosWhereInput>
  }

  export type tb_safrasOrderByWithRelationInput = {
    id?: SortOrder
    agricultor_id?: SortOrder
    cultura?: SortOrder
    ano_safra?: SortOrderInput | SortOrder
    area_plantada_ha?: SortOrderInput | SortOrder
    produtividade?: SortOrderInput | SortOrder
    unidade_medida?: SortOrderInput | SortOrder
    tb_usuarios?: tb_usuariosOrderByWithRelationInput
  }

  export type tb_safrasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_safrasWhereInput | tb_safrasWhereInput[]
    OR?: tb_safrasWhereInput[]
    NOT?: tb_safrasWhereInput | tb_safrasWhereInput[]
    agricultor_id?: IntFilter<"tb_safras"> | number
    cultura?: StringFilter<"tb_safras"> | string
    ano_safra?: StringNullableFilter<"tb_safras"> | string | null
    area_plantada_ha?: DecimalNullableFilter<"tb_safras"> | Decimal | DecimalJsLike | number | string | null
    produtividade?: DecimalNullableFilter<"tb_safras"> | Decimal | DecimalJsLike | number | string | null
    unidade_medida?: StringNullableFilter<"tb_safras"> | string | null
    tb_usuarios?: XOR<Tb_usuariosScalarRelationFilter, tb_usuariosWhereInput>
  }, "id">

  export type tb_safrasOrderByWithAggregationInput = {
    id?: SortOrder
    agricultor_id?: SortOrder
    cultura?: SortOrder
    ano_safra?: SortOrderInput | SortOrder
    area_plantada_ha?: SortOrderInput | SortOrder
    produtividade?: SortOrderInput | SortOrder
    unidade_medida?: SortOrderInput | SortOrder
    _count?: tb_safrasCountOrderByAggregateInput
    _avg?: tb_safrasAvgOrderByAggregateInput
    _max?: tb_safrasMaxOrderByAggregateInput
    _min?: tb_safrasMinOrderByAggregateInput
    _sum?: tb_safrasSumOrderByAggregateInput
  }

  export type tb_safrasScalarWhereWithAggregatesInput = {
    AND?: tb_safrasScalarWhereWithAggregatesInput | tb_safrasScalarWhereWithAggregatesInput[]
    OR?: tb_safrasScalarWhereWithAggregatesInput[]
    NOT?: tb_safrasScalarWhereWithAggregatesInput | tb_safrasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_safras"> | number
    agricultor_id?: IntWithAggregatesFilter<"tb_safras"> | number
    cultura?: StringWithAggregatesFilter<"tb_safras"> | string
    ano_safra?: StringNullableWithAggregatesFilter<"tb_safras"> | string | null
    area_plantada_ha?: DecimalNullableWithAggregatesFilter<"tb_safras"> | Decimal | DecimalJsLike | number | string | null
    produtividade?: DecimalNullableWithAggregatesFilter<"tb_safras"> | Decimal | DecimalJsLike | number | string | null
    unidade_medida?: StringNullableWithAggregatesFilter<"tb_safras"> | string | null
  }

  export type tb_usuariosWhereInput = {
    AND?: tb_usuariosWhereInput | tb_usuariosWhereInput[]
    OR?: tb_usuariosWhereInput[]
    NOT?: tb_usuariosWhereInput | tb_usuariosWhereInput[]
    id?: IntFilter<"tb_usuarios"> | number
    organizacao_id?: IntFilter<"tb_usuarios"> | number
    nome?: StringFilter<"tb_usuarios"> | string
    whatsapp_id?: StringFilter<"tb_usuarios"> | string
    latitude?: DecimalNullableFilter<"tb_usuarios"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"tb_usuarios"> | Decimal | DecimalJsLike | number | string | null
    cidade?: StringNullableFilter<"tb_usuarios"> | string | null
    estado?: StringNullableFilter<"tb_usuarios"> | string | null
    data_cadastro?: DateTimeNullableFilter<"tb_usuarios"> | Date | string | null
    ultima_atividade?: DateTimeNullableFilter<"tb_usuarios"> | Date | string | null
    ativo?: StringNullableFilter<"tb_usuarios"> | string | null
    tb_interacoes?: Tb_interacoesListRelationFilter
    tb_produtos_estoque?: Tb_produtos_estoqueListRelationFilter
    tb_safras?: Tb_safrasListRelationFilter
    tb_organizacoes?: XOR<Tb_organizacoesScalarRelationFilter, tb_organizacoesWhereInput>
  }

  export type tb_usuariosOrderByWithRelationInput = {
    id?: SortOrder
    organizacao_id?: SortOrder
    nome?: SortOrder
    whatsapp_id?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    data_cadastro?: SortOrderInput | SortOrder
    ultima_atividade?: SortOrderInput | SortOrder
    ativo?: SortOrderInput | SortOrder
    tb_interacoes?: tb_interacoesOrderByRelationAggregateInput
    tb_produtos_estoque?: tb_produtos_estoqueOrderByRelationAggregateInput
    tb_safras?: tb_safrasOrderByRelationAggregateInput
    tb_organizacoes?: tb_organizacoesOrderByWithRelationInput
  }

  export type tb_usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    whatsapp_id?: string
    AND?: tb_usuariosWhereInput | tb_usuariosWhereInput[]
    OR?: tb_usuariosWhereInput[]
    NOT?: tb_usuariosWhereInput | tb_usuariosWhereInput[]
    organizacao_id?: IntFilter<"tb_usuarios"> | number
    nome?: StringFilter<"tb_usuarios"> | string
    latitude?: DecimalNullableFilter<"tb_usuarios"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"tb_usuarios"> | Decimal | DecimalJsLike | number | string | null
    cidade?: StringNullableFilter<"tb_usuarios"> | string | null
    estado?: StringNullableFilter<"tb_usuarios"> | string | null
    data_cadastro?: DateTimeNullableFilter<"tb_usuarios"> | Date | string | null
    ultima_atividade?: DateTimeNullableFilter<"tb_usuarios"> | Date | string | null
    ativo?: StringNullableFilter<"tb_usuarios"> | string | null
    tb_interacoes?: Tb_interacoesListRelationFilter
    tb_produtos_estoque?: Tb_produtos_estoqueListRelationFilter
    tb_safras?: Tb_safrasListRelationFilter
    tb_organizacoes?: XOR<Tb_organizacoesScalarRelationFilter, tb_organizacoesWhereInput>
  }, "id" | "whatsapp_id">

  export type tb_usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    organizacao_id?: SortOrder
    nome?: SortOrder
    whatsapp_id?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    data_cadastro?: SortOrderInput | SortOrder
    ultima_atividade?: SortOrderInput | SortOrder
    ativo?: SortOrderInput | SortOrder
    _count?: tb_usuariosCountOrderByAggregateInput
    _avg?: tb_usuariosAvgOrderByAggregateInput
    _max?: tb_usuariosMaxOrderByAggregateInput
    _min?: tb_usuariosMinOrderByAggregateInput
    _sum?: tb_usuariosSumOrderByAggregateInput
  }

  export type tb_usuariosScalarWhereWithAggregatesInput = {
    AND?: tb_usuariosScalarWhereWithAggregatesInput | tb_usuariosScalarWhereWithAggregatesInput[]
    OR?: tb_usuariosScalarWhereWithAggregatesInput[]
    NOT?: tb_usuariosScalarWhereWithAggregatesInput | tb_usuariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_usuarios"> | number
    organizacao_id?: IntWithAggregatesFilter<"tb_usuarios"> | number
    nome?: StringWithAggregatesFilter<"tb_usuarios"> | string
    whatsapp_id?: StringWithAggregatesFilter<"tb_usuarios"> | string
    latitude?: DecimalNullableWithAggregatesFilter<"tb_usuarios"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter<"tb_usuarios"> | Decimal | DecimalJsLike | number | string | null
    cidade?: StringNullableWithAggregatesFilter<"tb_usuarios"> | string | null
    estado?: StringNullableWithAggregatesFilter<"tb_usuarios"> | string | null
    data_cadastro?: DateTimeNullableWithAggregatesFilter<"tb_usuarios"> | Date | string | null
    ultima_atividade?: DateTimeNullableWithAggregatesFilter<"tb_usuarios"> | Date | string | null
    ativo?: StringNullableWithAggregatesFilter<"tb_usuarios"> | string | null
  }

  export type tb_versoes_schemaWhereInput = {
    AND?: tb_versoes_schemaWhereInput | tb_versoes_schemaWhereInput[]
    OR?: tb_versoes_schemaWhereInput[]
    NOT?: tb_versoes_schemaWhereInput | tb_versoes_schemaWhereInput[]
    id?: IntFilter<"tb_versoes_schema"> | number
    data_hora?: DateTimeNullableFilter<"tb_versoes_schema"> | Date | string | null
    usuario?: StringFilter<"tb_versoes_schema"> | string
    tipo_operacao?: StringFilter<"tb_versoes_schema"> | string
    tabelas_afetadas?: StringFilter<"tb_versoes_schema"> | string
    descricao?: StringNullableFilter<"tb_versoes_schema"> | string | null
  }

  export type tb_versoes_schemaOrderByWithRelationInput = {
    id?: SortOrder
    data_hora?: SortOrderInput | SortOrder
    usuario?: SortOrder
    tipo_operacao?: SortOrder
    tabelas_afetadas?: SortOrder
    descricao?: SortOrderInput | SortOrder
  }

  export type tb_versoes_schemaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_versoes_schemaWhereInput | tb_versoes_schemaWhereInput[]
    OR?: tb_versoes_schemaWhereInput[]
    NOT?: tb_versoes_schemaWhereInput | tb_versoes_schemaWhereInput[]
    data_hora?: DateTimeNullableFilter<"tb_versoes_schema"> | Date | string | null
    usuario?: StringFilter<"tb_versoes_schema"> | string
    tipo_operacao?: StringFilter<"tb_versoes_schema"> | string
    tabelas_afetadas?: StringFilter<"tb_versoes_schema"> | string
    descricao?: StringNullableFilter<"tb_versoes_schema"> | string | null
  }, "id">

  export type tb_versoes_schemaOrderByWithAggregationInput = {
    id?: SortOrder
    data_hora?: SortOrderInput | SortOrder
    usuario?: SortOrder
    tipo_operacao?: SortOrder
    tabelas_afetadas?: SortOrder
    descricao?: SortOrderInput | SortOrder
    _count?: tb_versoes_schemaCountOrderByAggregateInput
    _avg?: tb_versoes_schemaAvgOrderByAggregateInput
    _max?: tb_versoes_schemaMaxOrderByAggregateInput
    _min?: tb_versoes_schemaMinOrderByAggregateInput
    _sum?: tb_versoes_schemaSumOrderByAggregateInput
  }

  export type tb_versoes_schemaScalarWhereWithAggregatesInput = {
    AND?: tb_versoes_schemaScalarWhereWithAggregatesInput | tb_versoes_schemaScalarWhereWithAggregatesInput[]
    OR?: tb_versoes_schemaScalarWhereWithAggregatesInput[]
    NOT?: tb_versoes_schemaScalarWhereWithAggregatesInput | tb_versoes_schemaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_versoes_schema"> | number
    data_hora?: DateTimeNullableWithAggregatesFilter<"tb_versoes_schema"> | Date | string | null
    usuario?: StringWithAggregatesFilter<"tb_versoes_schema"> | string
    tipo_operacao?: StringWithAggregatesFilter<"tb_versoes_schema"> | string
    tabelas_afetadas?: StringWithAggregatesFilter<"tb_versoes_schema"> | string
    descricao?: StringNullableWithAggregatesFilter<"tb_versoes_schema"> | string | null
  }

  export type tb_administradoresCreateInput = {
    nome: string
    email: string
    senha_hash: string
    cargo?: string | null
    ativo?: string | null
    data_cadastro?: Date | string | null
    tb_organizacoes: tb_organizacoesCreateNestedOneWithoutTb_administradoresInput
  }

  export type tb_administradoresUncheckedCreateInput = {
    id?: number
    organizacao_id: number
    nome: string
    email: string
    senha_hash: string
    cargo?: string | null
    ativo?: string | null
    data_cadastro?: Date | string | null
  }

  export type tb_administradoresUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tb_organizacoes?: tb_organizacoesUpdateOneRequiredWithoutTb_administradoresNestedInput
  }

  export type tb_administradoresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizacao_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tb_administradoresCreateManyInput = {
    id?: number
    organizacao_id: number
    nome: string
    email: string
    senha_hash: string
    cargo?: string | null
    ativo?: string | null
    data_cadastro?: Date | string | null
  }

  export type tb_administradoresUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tb_administradoresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizacao_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tb_conversation_contextsCreateInput = {
    whatsapp_id: string
    context?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: Date | string | null
  }

  export type tb_conversation_contextsUncheckedCreateInput = {
    whatsapp_id: string
    context?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: Date | string | null
  }

  export type tb_conversation_contextsUpdateInput = {
    whatsapp_id?: StringFieldUpdateOperationsInput | string
    context?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tb_conversation_contextsUncheckedUpdateInput = {
    whatsapp_id?: StringFieldUpdateOperationsInput | string
    context?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tb_conversation_contextsCreateManyInput = {
    whatsapp_id: string
    context?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: Date | string | null
  }

  export type tb_conversation_contextsUpdateManyMutationInput = {
    whatsapp_id?: StringFieldUpdateOperationsInput | string
    context?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tb_conversation_contextsUncheckedUpdateManyInput = {
    whatsapp_id?: StringFieldUpdateOperationsInput | string
    context?: NullableJsonNullValueInput | InputJsonValue
    last_updated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tb_intencoesCreateInput = {
    nome_intencao: string
    descricao?: string | null
    tb_interacoes_intencoes?: tb_interacoes_intencoesCreateNestedManyWithoutTb_intencoesInput
  }

  export type tb_intencoesUncheckedCreateInput = {
    id?: number
    nome_intencao: string
    descricao?: string | null
    tb_interacoes_intencoes?: tb_interacoes_intencoesUncheckedCreateNestedManyWithoutTb_intencoesInput
  }

  export type tb_intencoesUpdateInput = {
    nome_intencao?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tb_interacoes_intencoes?: tb_interacoes_intencoesUpdateManyWithoutTb_intencoesNestedInput
  }

  export type tb_intencoesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_intencao?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    tb_interacoes_intencoes?: tb_interacoes_intencoesUncheckedUpdateManyWithoutTb_intencoesNestedInput
  }

  export type tb_intencoesCreateManyInput = {
    id?: number
    nome_intencao: string
    descricao?: string | null
  }

  export type tb_intencoesUpdateManyMutationInput = {
    nome_intencao?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_intencoesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_intencao?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_interacoesCreateInput = {
    mensagem_usuario?: string | null
    resposta_chatbot?: string | null
    entidades?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string | null
    tb_usuarios: tb_usuariosCreateNestedOneWithoutTb_interacoesInput
    tb_interacoes_intencoes?: tb_interacoes_intencoesCreateNestedManyWithoutTb_interacoesInput
  }

  export type tb_interacoesUncheckedCreateInput = {
    id?: number
    agricultor_id: number
    mensagem_usuario?: string | null
    resposta_chatbot?: string | null
    entidades?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string | null
    tb_interacoes_intencoes?: tb_interacoes_intencoesUncheckedCreateNestedManyWithoutTb_interacoesInput
  }

  export type tb_interacoesUpdateInput = {
    mensagem_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    resposta_chatbot?: NullableStringFieldUpdateOperationsInput | string | null
    entidades?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tb_usuarios?: tb_usuariosUpdateOneRequiredWithoutTb_interacoesNestedInput
    tb_interacoes_intencoes?: tb_interacoes_intencoesUpdateManyWithoutTb_interacoesNestedInput
  }

  export type tb_interacoesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    agricultor_id?: IntFieldUpdateOperationsInput | number
    mensagem_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    resposta_chatbot?: NullableStringFieldUpdateOperationsInput | string | null
    entidades?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tb_interacoes_intencoes?: tb_interacoes_intencoesUncheckedUpdateManyWithoutTb_interacoesNestedInput
  }

  export type tb_interacoesCreateManyInput = {
    id?: number
    agricultor_id: number
    mensagem_usuario?: string | null
    resposta_chatbot?: string | null
    entidades?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string | null
  }

  export type tb_interacoesUpdateManyMutationInput = {
    mensagem_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    resposta_chatbot?: NullableStringFieldUpdateOperationsInput | string | null
    entidades?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tb_interacoesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    agricultor_id?: IntFieldUpdateOperationsInput | number
    mensagem_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    resposta_chatbot?: NullableStringFieldUpdateOperationsInput | string | null
    entidades?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tb_interacoes_intencoesCreateInput = {
    tb_intencoes: tb_intencoesCreateNestedOneWithoutTb_interacoes_intencoesInput
    tb_interacoes: tb_interacoesCreateNestedOneWithoutTb_interacoes_intencoesInput
  }

  export type tb_interacoes_intencoesUncheckedCreateInput = {
    interacao_id: number
    intencao_id: number
  }

  export type tb_interacoes_intencoesUpdateInput = {
    tb_intencoes?: tb_intencoesUpdateOneRequiredWithoutTb_interacoes_intencoesNestedInput
    tb_interacoes?: tb_interacoesUpdateOneRequiredWithoutTb_interacoes_intencoesNestedInput
  }

  export type tb_interacoes_intencoesUncheckedUpdateInput = {
    interacao_id?: IntFieldUpdateOperationsInput | number
    intencao_id?: IntFieldUpdateOperationsInput | number
  }

  export type tb_interacoes_intencoesCreateManyInput = {
    interacao_id: number
    intencao_id: number
  }

  export type tb_interacoes_intencoesUpdateManyMutationInput = {

  }

  export type tb_interacoes_intencoesUncheckedUpdateManyInput = {
    interacao_id?: IntFieldUpdateOperationsInput | number
    intencao_id?: IntFieldUpdateOperationsInput | number
  }

  export type tb_movimentacoes_estoqueCreateInput = {
    tipo_movimentacao: string
    quantidade: Decimal | DecimalJsLike | number | string
    data_movimentacao?: Date | string | null
    observacao?: string | null
    tb_produtos_estoque: tb_produtos_estoqueCreateNestedOneWithoutTb_movimentacoes_estoqueInput
  }

  export type tb_movimentacoes_estoqueUncheckedCreateInput = {
    id?: number
    produto_id: number
    tipo_movimentacao: string
    quantidade: Decimal | DecimalJsLike | number | string
    data_movimentacao?: Date | string | null
    observacao?: string | null
  }

  export type tb_movimentacoes_estoqueUpdateInput = {
    tipo_movimentacao?: StringFieldUpdateOperationsInput | string
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_movimentacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    tb_produtos_estoque?: tb_produtos_estoqueUpdateOneRequiredWithoutTb_movimentacoes_estoqueNestedInput
  }

  export type tb_movimentacoes_estoqueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    tipo_movimentacao?: StringFieldUpdateOperationsInput | string
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_movimentacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_movimentacoes_estoqueCreateManyInput = {
    id?: number
    produto_id: number
    tipo_movimentacao: string
    quantidade: Decimal | DecimalJsLike | number | string
    data_movimentacao?: Date | string | null
    observacao?: string | null
  }

  export type tb_movimentacoes_estoqueUpdateManyMutationInput = {
    tipo_movimentacao?: StringFieldUpdateOperationsInput | string
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_movimentacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_movimentacoes_estoqueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    produto_id?: IntFieldUpdateOperationsInput | number
    tipo_movimentacao?: StringFieldUpdateOperationsInput | string
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_movimentacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_organizacoesCreateInput = {
    nome: string
    cnpj?: string | null
    data_criacao?: Date | string | null
    tb_administradores?: tb_administradoresCreateNestedManyWithoutTb_organizacoesInput
    tb_usuarios?: tb_usuariosCreateNestedManyWithoutTb_organizacoesInput
  }

  export type tb_organizacoesUncheckedCreateInput = {
    id?: number
    nome: string
    cnpj?: string | null
    data_criacao?: Date | string | null
    tb_administradores?: tb_administradoresUncheckedCreateNestedManyWithoutTb_organizacoesInput
    tb_usuarios?: tb_usuariosUncheckedCreateNestedManyWithoutTb_organizacoesInput
  }

  export type tb_organizacoesUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tb_administradores?: tb_administradoresUpdateManyWithoutTb_organizacoesNestedInput
    tb_usuarios?: tb_usuariosUpdateManyWithoutTb_organizacoesNestedInput
  }

  export type tb_organizacoesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tb_administradores?: tb_administradoresUncheckedUpdateManyWithoutTb_organizacoesNestedInput
    tb_usuarios?: tb_usuariosUncheckedUpdateManyWithoutTb_organizacoesNestedInput
  }

  export type tb_organizacoesCreateManyInput = {
    id?: number
    nome: string
    cnpj?: string | null
    data_criacao?: Date | string | null
  }

  export type tb_organizacoesUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tb_organizacoesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tb_produtos_estoqueCreateInput = {
    nome_produto: string
    tipo_produto: string
    unidade_medida: string
    saldo_atual: Decimal | DecimalJsLike | number | string
    tb_movimentacoes_estoque?: tb_movimentacoes_estoqueCreateNestedManyWithoutTb_produtos_estoqueInput
    tb_usuarios: tb_usuariosCreateNestedOneWithoutTb_produtos_estoqueInput
  }

  export type tb_produtos_estoqueUncheckedCreateInput = {
    id?: number
    agricultor_id: number
    nome_produto: string
    tipo_produto: string
    unidade_medida: string
    saldo_atual: Decimal | DecimalJsLike | number | string
    tb_movimentacoes_estoque?: tb_movimentacoes_estoqueUncheckedCreateNestedManyWithoutTb_produtos_estoqueInput
  }

  export type tb_produtos_estoqueUpdateInput = {
    nome_produto?: StringFieldUpdateOperationsInput | string
    tipo_produto?: StringFieldUpdateOperationsInput | string
    unidade_medida?: StringFieldUpdateOperationsInput | string
    saldo_atual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tb_movimentacoes_estoque?: tb_movimentacoes_estoqueUpdateManyWithoutTb_produtos_estoqueNestedInput
    tb_usuarios?: tb_usuariosUpdateOneRequiredWithoutTb_produtos_estoqueNestedInput
  }

  export type tb_produtos_estoqueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    agricultor_id?: IntFieldUpdateOperationsInput | number
    nome_produto?: StringFieldUpdateOperationsInput | string
    tipo_produto?: StringFieldUpdateOperationsInput | string
    unidade_medida?: StringFieldUpdateOperationsInput | string
    saldo_atual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tb_movimentacoes_estoque?: tb_movimentacoes_estoqueUncheckedUpdateManyWithoutTb_produtos_estoqueNestedInput
  }

  export type tb_produtos_estoqueCreateManyInput = {
    id?: number
    agricultor_id: number
    nome_produto: string
    tipo_produto: string
    unidade_medida: string
    saldo_atual: Decimal | DecimalJsLike | number | string
  }

  export type tb_produtos_estoqueUpdateManyMutationInput = {
    nome_produto?: StringFieldUpdateOperationsInput | string
    tipo_produto?: StringFieldUpdateOperationsInput | string
    unidade_medida?: StringFieldUpdateOperationsInput | string
    saldo_atual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type tb_produtos_estoqueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    agricultor_id?: IntFieldUpdateOperationsInput | number
    nome_produto?: StringFieldUpdateOperationsInput | string
    tipo_produto?: StringFieldUpdateOperationsInput | string
    unidade_medida?: StringFieldUpdateOperationsInput | string
    saldo_atual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type tb_safrasCreateInput = {
    cultura: string
    ano_safra?: string | null
    area_plantada_ha?: Decimal | DecimalJsLike | number | string | null
    produtividade?: Decimal | DecimalJsLike | number | string | null
    unidade_medida?: string | null
    tb_usuarios: tb_usuariosCreateNestedOneWithoutTb_safrasInput
  }

  export type tb_safrasUncheckedCreateInput = {
    id?: number
    agricultor_id: number
    cultura: string
    ano_safra?: string | null
    area_plantada_ha?: Decimal | DecimalJsLike | number | string | null
    produtividade?: Decimal | DecimalJsLike | number | string | null
    unidade_medida?: string | null
  }

  export type tb_safrasUpdateInput = {
    cultura?: StringFieldUpdateOperationsInput | string
    ano_safra?: NullableStringFieldUpdateOperationsInput | string | null
    area_plantada_ha?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    produtividade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
    tb_usuarios?: tb_usuariosUpdateOneRequiredWithoutTb_safrasNestedInput
  }

  export type tb_safrasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    agricultor_id?: IntFieldUpdateOperationsInput | number
    cultura?: StringFieldUpdateOperationsInput | string
    ano_safra?: NullableStringFieldUpdateOperationsInput | string | null
    area_plantada_ha?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    produtividade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_safrasCreateManyInput = {
    id?: number
    agricultor_id: number
    cultura: string
    ano_safra?: string | null
    area_plantada_ha?: Decimal | DecimalJsLike | number | string | null
    produtividade?: Decimal | DecimalJsLike | number | string | null
    unidade_medida?: string | null
  }

  export type tb_safrasUpdateManyMutationInput = {
    cultura?: StringFieldUpdateOperationsInput | string
    ano_safra?: NullableStringFieldUpdateOperationsInput | string | null
    area_plantada_ha?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    produtividade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_safrasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    agricultor_id?: IntFieldUpdateOperationsInput | number
    cultura?: StringFieldUpdateOperationsInput | string
    ano_safra?: NullableStringFieldUpdateOperationsInput | string | null
    area_plantada_ha?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    produtividade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_usuariosCreateInput = {
    nome: string
    whatsapp_id: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    cidade?: string | null
    estado?: string | null
    data_cadastro?: Date | string | null
    ultima_atividade?: Date | string | null
    ativo?: string | null
    tb_interacoes?: tb_interacoesCreateNestedManyWithoutTb_usuariosInput
    tb_produtos_estoque?: tb_produtos_estoqueCreateNestedManyWithoutTb_usuariosInput
    tb_safras?: tb_safrasCreateNestedManyWithoutTb_usuariosInput
    tb_organizacoes: tb_organizacoesCreateNestedOneWithoutTb_usuariosInput
  }

  export type tb_usuariosUncheckedCreateInput = {
    id?: number
    organizacao_id: number
    nome: string
    whatsapp_id: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    cidade?: string | null
    estado?: string | null
    data_cadastro?: Date | string | null
    ultima_atividade?: Date | string | null
    ativo?: string | null
    tb_interacoes?: tb_interacoesUncheckedCreateNestedManyWithoutTb_usuariosInput
    tb_produtos_estoque?: tb_produtos_estoqueUncheckedCreateNestedManyWithoutTb_usuariosInput
    tb_safras?: tb_safrasUncheckedCreateNestedManyWithoutTb_usuariosInput
  }

  export type tb_usuariosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    whatsapp_id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_atividade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: NullableStringFieldUpdateOperationsInput | string | null
    tb_interacoes?: tb_interacoesUpdateManyWithoutTb_usuariosNestedInput
    tb_produtos_estoque?: tb_produtos_estoqueUpdateManyWithoutTb_usuariosNestedInput
    tb_safras?: tb_safrasUpdateManyWithoutTb_usuariosNestedInput
    tb_organizacoes?: tb_organizacoesUpdateOneRequiredWithoutTb_usuariosNestedInput
  }

  export type tb_usuariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizacao_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    whatsapp_id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_atividade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: NullableStringFieldUpdateOperationsInput | string | null
    tb_interacoes?: tb_interacoesUncheckedUpdateManyWithoutTb_usuariosNestedInput
    tb_produtos_estoque?: tb_produtos_estoqueUncheckedUpdateManyWithoutTb_usuariosNestedInput
    tb_safras?: tb_safrasUncheckedUpdateManyWithoutTb_usuariosNestedInput
  }

  export type tb_usuariosCreateManyInput = {
    id?: number
    organizacao_id: number
    nome: string
    whatsapp_id: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    cidade?: string | null
    estado?: string | null
    data_cadastro?: Date | string | null
    ultima_atividade?: Date | string | null
    ativo?: string | null
  }

  export type tb_usuariosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    whatsapp_id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_atividade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_usuariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizacao_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    whatsapp_id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_atividade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_versoes_schemaCreateInput = {
    data_hora?: Date | string | null
    usuario: string
    tipo_operacao: string
    tabelas_afetadas: string
    descricao?: string | null
  }

  export type tb_versoes_schemaUncheckedCreateInput = {
    id?: number
    data_hora?: Date | string | null
    usuario: string
    tipo_operacao: string
    tabelas_afetadas: string
    descricao?: string | null
  }

  export type tb_versoes_schemaUpdateInput = {
    data_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    tipo_operacao?: StringFieldUpdateOperationsInput | string
    tabelas_afetadas?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_versoes_schemaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    tipo_operacao?: StringFieldUpdateOperationsInput | string
    tabelas_afetadas?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_versoes_schemaCreateManyInput = {
    id?: number
    data_hora?: Date | string | null
    usuario: string
    tipo_operacao: string
    tabelas_afetadas: string
    descricao?: string | null
  }

  export type tb_versoes_schemaUpdateManyMutationInput = {
    data_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    tipo_operacao?: StringFieldUpdateOperationsInput | string
    tabelas_afetadas?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_versoes_schemaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: StringFieldUpdateOperationsInput | string
    tipo_operacao?: StringFieldUpdateOperationsInput | string
    tabelas_afetadas?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Tb_organizacoesScalarRelationFilter = {
    is?: tb_organizacoesWhereInput
    isNot?: tb_organizacoesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type tb_administradoresCountOrderByAggregateInput = {
    id?: SortOrder
    organizacao_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    cargo?: SortOrder
    ativo?: SortOrder
    data_cadastro?: SortOrder
  }

  export type tb_administradoresAvgOrderByAggregateInput = {
    id?: SortOrder
    organizacao_id?: SortOrder
  }

  export type tb_administradoresMaxOrderByAggregateInput = {
    id?: SortOrder
    organizacao_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    cargo?: SortOrder
    ativo?: SortOrder
    data_cadastro?: SortOrder
  }

  export type tb_administradoresMinOrderByAggregateInput = {
    id?: SortOrder
    organizacao_id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    cargo?: SortOrder
    ativo?: SortOrder
    data_cadastro?: SortOrder
  }

  export type tb_administradoresSumOrderByAggregateInput = {
    id?: SortOrder
    organizacao_id?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type tb_conversation_contextsCountOrderByAggregateInput = {
    whatsapp_id?: SortOrder
    context?: SortOrder
    last_updated?: SortOrder
  }

  export type tb_conversation_contextsMaxOrderByAggregateInput = {
    whatsapp_id?: SortOrder
    last_updated?: SortOrder
  }

  export type tb_conversation_contextsMinOrderByAggregateInput = {
    whatsapp_id?: SortOrder
    last_updated?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type Tb_interacoes_intencoesListRelationFilter = {
    every?: tb_interacoes_intencoesWhereInput
    some?: tb_interacoes_intencoesWhereInput
    none?: tb_interacoes_intencoesWhereInput
  }

  export type tb_interacoes_intencoesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tb_intencoesCountOrderByAggregateInput = {
    id?: SortOrder
    nome_intencao?: SortOrder
    descricao?: SortOrder
  }

  export type tb_intencoesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tb_intencoesMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_intencao?: SortOrder
    descricao?: SortOrder
  }

  export type tb_intencoesMinOrderByAggregateInput = {
    id?: SortOrder
    nome_intencao?: SortOrder
    descricao?: SortOrder
  }

  export type tb_intencoesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Tb_usuariosScalarRelationFilter = {
    is?: tb_usuariosWhereInput
    isNot?: tb_usuariosWhereInput
  }

  export type tb_interacoesCountOrderByAggregateInput = {
    id?: SortOrder
    agricultor_id?: SortOrder
    mensagem_usuario?: SortOrder
    resposta_chatbot?: SortOrder
    entidades?: SortOrder
    timestamp?: SortOrder
  }

  export type tb_interacoesAvgOrderByAggregateInput = {
    id?: SortOrder
    agricultor_id?: SortOrder
  }

  export type tb_interacoesMaxOrderByAggregateInput = {
    id?: SortOrder
    agricultor_id?: SortOrder
    mensagem_usuario?: SortOrder
    resposta_chatbot?: SortOrder
    timestamp?: SortOrder
  }

  export type tb_interacoesMinOrderByAggregateInput = {
    id?: SortOrder
    agricultor_id?: SortOrder
    mensagem_usuario?: SortOrder
    resposta_chatbot?: SortOrder
    timestamp?: SortOrder
  }

  export type tb_interacoesSumOrderByAggregateInput = {
    id?: SortOrder
    agricultor_id?: SortOrder
  }

  export type Tb_intencoesScalarRelationFilter = {
    is?: tb_intencoesWhereInput
    isNot?: tb_intencoesWhereInput
  }

  export type Tb_interacoesScalarRelationFilter = {
    is?: tb_interacoesWhereInput
    isNot?: tb_interacoesWhereInput
  }

  export type tb_interacoes_intencoesInteracao_idIntencao_idCompoundUniqueInput = {
    interacao_id: number
    intencao_id: number
  }

  export type tb_interacoes_intencoesCountOrderByAggregateInput = {
    interacao_id?: SortOrder
    intencao_id?: SortOrder
  }

  export type tb_interacoes_intencoesAvgOrderByAggregateInput = {
    interacao_id?: SortOrder
    intencao_id?: SortOrder
  }

  export type tb_interacoes_intencoesMaxOrderByAggregateInput = {
    interacao_id?: SortOrder
    intencao_id?: SortOrder
  }

  export type tb_interacoes_intencoesMinOrderByAggregateInput = {
    interacao_id?: SortOrder
    intencao_id?: SortOrder
  }

  export type tb_interacoes_intencoesSumOrderByAggregateInput = {
    interacao_id?: SortOrder
    intencao_id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Tb_produtos_estoqueScalarRelationFilter = {
    is?: tb_produtos_estoqueWhereInput
    isNot?: tb_produtos_estoqueWhereInput
  }

  export type tb_movimentacoes_estoqueCountOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
    tipo_movimentacao?: SortOrder
    quantidade?: SortOrder
    data_movimentacao?: SortOrder
    observacao?: SortOrder
  }

  export type tb_movimentacoes_estoqueAvgOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
    quantidade?: SortOrder
  }

  export type tb_movimentacoes_estoqueMaxOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
    tipo_movimentacao?: SortOrder
    quantidade?: SortOrder
    data_movimentacao?: SortOrder
    observacao?: SortOrder
  }

  export type tb_movimentacoes_estoqueMinOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
    tipo_movimentacao?: SortOrder
    quantidade?: SortOrder
    data_movimentacao?: SortOrder
    observacao?: SortOrder
  }

  export type tb_movimentacoes_estoqueSumOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
    quantidade?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type Tb_administradoresListRelationFilter = {
    every?: tb_administradoresWhereInput
    some?: tb_administradoresWhereInput
    none?: tb_administradoresWhereInput
  }

  export type Tb_usuariosListRelationFilter = {
    every?: tb_usuariosWhereInput
    some?: tb_usuariosWhereInput
    none?: tb_usuariosWhereInput
  }

  export type tb_administradoresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tb_usuariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tb_organizacoesCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    data_criacao?: SortOrder
  }

  export type tb_organizacoesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tb_organizacoesMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    data_criacao?: SortOrder
  }

  export type tb_organizacoesMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cnpj?: SortOrder
    data_criacao?: SortOrder
  }

  export type tb_organizacoesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Tb_movimentacoes_estoqueListRelationFilter = {
    every?: tb_movimentacoes_estoqueWhereInput
    some?: tb_movimentacoes_estoqueWhereInput
    none?: tb_movimentacoes_estoqueWhereInput
  }

  export type tb_movimentacoes_estoqueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tb_produtos_estoqueCountOrderByAggregateInput = {
    id?: SortOrder
    agricultor_id?: SortOrder
    nome_produto?: SortOrder
    tipo_produto?: SortOrder
    unidade_medida?: SortOrder
    saldo_atual?: SortOrder
  }

  export type tb_produtos_estoqueAvgOrderByAggregateInput = {
    id?: SortOrder
    agricultor_id?: SortOrder
    saldo_atual?: SortOrder
  }

  export type tb_produtos_estoqueMaxOrderByAggregateInput = {
    id?: SortOrder
    agricultor_id?: SortOrder
    nome_produto?: SortOrder
    tipo_produto?: SortOrder
    unidade_medida?: SortOrder
    saldo_atual?: SortOrder
  }

  export type tb_produtos_estoqueMinOrderByAggregateInput = {
    id?: SortOrder
    agricultor_id?: SortOrder
    nome_produto?: SortOrder
    tipo_produto?: SortOrder
    unidade_medida?: SortOrder
    saldo_atual?: SortOrder
  }

  export type tb_produtos_estoqueSumOrderByAggregateInput = {
    id?: SortOrder
    agricultor_id?: SortOrder
    saldo_atual?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type tb_safrasCountOrderByAggregateInput = {
    id?: SortOrder
    agricultor_id?: SortOrder
    cultura?: SortOrder
    ano_safra?: SortOrder
    area_plantada_ha?: SortOrder
    produtividade?: SortOrder
    unidade_medida?: SortOrder
  }

  export type tb_safrasAvgOrderByAggregateInput = {
    id?: SortOrder
    agricultor_id?: SortOrder
    area_plantada_ha?: SortOrder
    produtividade?: SortOrder
  }

  export type tb_safrasMaxOrderByAggregateInput = {
    id?: SortOrder
    agricultor_id?: SortOrder
    cultura?: SortOrder
    ano_safra?: SortOrder
    area_plantada_ha?: SortOrder
    produtividade?: SortOrder
    unidade_medida?: SortOrder
  }

  export type tb_safrasMinOrderByAggregateInput = {
    id?: SortOrder
    agricultor_id?: SortOrder
    cultura?: SortOrder
    ano_safra?: SortOrder
    area_plantada_ha?: SortOrder
    produtividade?: SortOrder
    unidade_medida?: SortOrder
  }

  export type tb_safrasSumOrderByAggregateInput = {
    id?: SortOrder
    agricultor_id?: SortOrder
    area_plantada_ha?: SortOrder
    produtividade?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type Tb_interacoesListRelationFilter = {
    every?: tb_interacoesWhereInput
    some?: tb_interacoesWhereInput
    none?: tb_interacoesWhereInput
  }

  export type Tb_produtos_estoqueListRelationFilter = {
    every?: tb_produtos_estoqueWhereInput
    some?: tb_produtos_estoqueWhereInput
    none?: tb_produtos_estoqueWhereInput
  }

  export type Tb_safrasListRelationFilter = {
    every?: tb_safrasWhereInput
    some?: tb_safrasWhereInput
    none?: tb_safrasWhereInput
  }

  export type tb_interacoesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tb_produtos_estoqueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tb_safrasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tb_usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    organizacao_id?: SortOrder
    nome?: SortOrder
    whatsapp_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    data_cadastro?: SortOrder
    ultima_atividade?: SortOrder
    ativo?: SortOrder
  }

  export type tb_usuariosAvgOrderByAggregateInput = {
    id?: SortOrder
    organizacao_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type tb_usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    organizacao_id?: SortOrder
    nome?: SortOrder
    whatsapp_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    data_cadastro?: SortOrder
    ultima_atividade?: SortOrder
    ativo?: SortOrder
  }

  export type tb_usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    organizacao_id?: SortOrder
    nome?: SortOrder
    whatsapp_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    data_cadastro?: SortOrder
    ultima_atividade?: SortOrder
    ativo?: SortOrder
  }

  export type tb_usuariosSumOrderByAggregateInput = {
    id?: SortOrder
    organizacao_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type tb_versoes_schemaCountOrderByAggregateInput = {
    id?: SortOrder
    data_hora?: SortOrder
    usuario?: SortOrder
    tipo_operacao?: SortOrder
    tabelas_afetadas?: SortOrder
    descricao?: SortOrder
  }

  export type tb_versoes_schemaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tb_versoes_schemaMaxOrderByAggregateInput = {
    id?: SortOrder
    data_hora?: SortOrder
    usuario?: SortOrder
    tipo_operacao?: SortOrder
    tabelas_afetadas?: SortOrder
    descricao?: SortOrder
  }

  export type tb_versoes_schemaMinOrderByAggregateInput = {
    id?: SortOrder
    data_hora?: SortOrder
    usuario?: SortOrder
    tipo_operacao?: SortOrder
    tabelas_afetadas?: SortOrder
    descricao?: SortOrder
  }

  export type tb_versoes_schemaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tb_organizacoesCreateNestedOneWithoutTb_administradoresInput = {
    create?: XOR<tb_organizacoesCreateWithoutTb_administradoresInput, tb_organizacoesUncheckedCreateWithoutTb_administradoresInput>
    connectOrCreate?: tb_organizacoesCreateOrConnectWithoutTb_administradoresInput
    connect?: tb_organizacoesWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type tb_organizacoesUpdateOneRequiredWithoutTb_administradoresNestedInput = {
    create?: XOR<tb_organizacoesCreateWithoutTb_administradoresInput, tb_organizacoesUncheckedCreateWithoutTb_administradoresInput>
    connectOrCreate?: tb_organizacoesCreateOrConnectWithoutTb_administradoresInput
    upsert?: tb_organizacoesUpsertWithoutTb_administradoresInput
    connect?: tb_organizacoesWhereUniqueInput
    update?: XOR<XOR<tb_organizacoesUpdateToOneWithWhereWithoutTb_administradoresInput, tb_organizacoesUpdateWithoutTb_administradoresInput>, tb_organizacoesUncheckedUpdateWithoutTb_administradoresInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tb_interacoes_intencoesCreateNestedManyWithoutTb_intencoesInput = {
    create?: XOR<tb_interacoes_intencoesCreateWithoutTb_intencoesInput, tb_interacoes_intencoesUncheckedCreateWithoutTb_intencoesInput> | tb_interacoes_intencoesCreateWithoutTb_intencoesInput[] | tb_interacoes_intencoesUncheckedCreateWithoutTb_intencoesInput[]
    connectOrCreate?: tb_interacoes_intencoesCreateOrConnectWithoutTb_intencoesInput | tb_interacoes_intencoesCreateOrConnectWithoutTb_intencoesInput[]
    createMany?: tb_interacoes_intencoesCreateManyTb_intencoesInputEnvelope
    connect?: tb_interacoes_intencoesWhereUniqueInput | tb_interacoes_intencoesWhereUniqueInput[]
  }

  export type tb_interacoes_intencoesUncheckedCreateNestedManyWithoutTb_intencoesInput = {
    create?: XOR<tb_interacoes_intencoesCreateWithoutTb_intencoesInput, tb_interacoes_intencoesUncheckedCreateWithoutTb_intencoesInput> | tb_interacoes_intencoesCreateWithoutTb_intencoesInput[] | tb_interacoes_intencoesUncheckedCreateWithoutTb_intencoesInput[]
    connectOrCreate?: tb_interacoes_intencoesCreateOrConnectWithoutTb_intencoesInput | tb_interacoes_intencoesCreateOrConnectWithoutTb_intencoesInput[]
    createMany?: tb_interacoes_intencoesCreateManyTb_intencoesInputEnvelope
    connect?: tb_interacoes_intencoesWhereUniqueInput | tb_interacoes_intencoesWhereUniqueInput[]
  }

  export type tb_interacoes_intencoesUpdateManyWithoutTb_intencoesNestedInput = {
    create?: XOR<tb_interacoes_intencoesCreateWithoutTb_intencoesInput, tb_interacoes_intencoesUncheckedCreateWithoutTb_intencoesInput> | tb_interacoes_intencoesCreateWithoutTb_intencoesInput[] | tb_interacoes_intencoesUncheckedCreateWithoutTb_intencoesInput[]
    connectOrCreate?: tb_interacoes_intencoesCreateOrConnectWithoutTb_intencoesInput | tb_interacoes_intencoesCreateOrConnectWithoutTb_intencoesInput[]
    upsert?: tb_interacoes_intencoesUpsertWithWhereUniqueWithoutTb_intencoesInput | tb_interacoes_intencoesUpsertWithWhereUniqueWithoutTb_intencoesInput[]
    createMany?: tb_interacoes_intencoesCreateManyTb_intencoesInputEnvelope
    set?: tb_interacoes_intencoesWhereUniqueInput | tb_interacoes_intencoesWhereUniqueInput[]
    disconnect?: tb_interacoes_intencoesWhereUniqueInput | tb_interacoes_intencoesWhereUniqueInput[]
    delete?: tb_interacoes_intencoesWhereUniqueInput | tb_interacoes_intencoesWhereUniqueInput[]
    connect?: tb_interacoes_intencoesWhereUniqueInput | tb_interacoes_intencoesWhereUniqueInput[]
    update?: tb_interacoes_intencoesUpdateWithWhereUniqueWithoutTb_intencoesInput | tb_interacoes_intencoesUpdateWithWhereUniqueWithoutTb_intencoesInput[]
    updateMany?: tb_interacoes_intencoesUpdateManyWithWhereWithoutTb_intencoesInput | tb_interacoes_intencoesUpdateManyWithWhereWithoutTb_intencoesInput[]
    deleteMany?: tb_interacoes_intencoesScalarWhereInput | tb_interacoes_intencoesScalarWhereInput[]
  }

  export type tb_interacoes_intencoesUncheckedUpdateManyWithoutTb_intencoesNestedInput = {
    create?: XOR<tb_interacoes_intencoesCreateWithoutTb_intencoesInput, tb_interacoes_intencoesUncheckedCreateWithoutTb_intencoesInput> | tb_interacoes_intencoesCreateWithoutTb_intencoesInput[] | tb_interacoes_intencoesUncheckedCreateWithoutTb_intencoesInput[]
    connectOrCreate?: tb_interacoes_intencoesCreateOrConnectWithoutTb_intencoesInput | tb_interacoes_intencoesCreateOrConnectWithoutTb_intencoesInput[]
    upsert?: tb_interacoes_intencoesUpsertWithWhereUniqueWithoutTb_intencoesInput | tb_interacoes_intencoesUpsertWithWhereUniqueWithoutTb_intencoesInput[]
    createMany?: tb_interacoes_intencoesCreateManyTb_intencoesInputEnvelope
    set?: tb_interacoes_intencoesWhereUniqueInput | tb_interacoes_intencoesWhereUniqueInput[]
    disconnect?: tb_interacoes_intencoesWhereUniqueInput | tb_interacoes_intencoesWhereUniqueInput[]
    delete?: tb_interacoes_intencoesWhereUniqueInput | tb_interacoes_intencoesWhereUniqueInput[]
    connect?: tb_interacoes_intencoesWhereUniqueInput | tb_interacoes_intencoesWhereUniqueInput[]
    update?: tb_interacoes_intencoesUpdateWithWhereUniqueWithoutTb_intencoesInput | tb_interacoes_intencoesUpdateWithWhereUniqueWithoutTb_intencoesInput[]
    updateMany?: tb_interacoes_intencoesUpdateManyWithWhereWithoutTb_intencoesInput | tb_interacoes_intencoesUpdateManyWithWhereWithoutTb_intencoesInput[]
    deleteMany?: tb_interacoes_intencoesScalarWhereInput | tb_interacoes_intencoesScalarWhereInput[]
  }

  export type tb_usuariosCreateNestedOneWithoutTb_interacoesInput = {
    create?: XOR<tb_usuariosCreateWithoutTb_interacoesInput, tb_usuariosUncheckedCreateWithoutTb_interacoesInput>
    connectOrCreate?: tb_usuariosCreateOrConnectWithoutTb_interacoesInput
    connect?: tb_usuariosWhereUniqueInput
  }

  export type tb_interacoes_intencoesCreateNestedManyWithoutTb_interacoesInput = {
    create?: XOR<tb_interacoes_intencoesCreateWithoutTb_interacoesInput, tb_interacoes_intencoesUncheckedCreateWithoutTb_interacoesInput> | tb_interacoes_intencoesCreateWithoutTb_interacoesInput[] | tb_interacoes_intencoesUncheckedCreateWithoutTb_interacoesInput[]
    connectOrCreate?: tb_interacoes_intencoesCreateOrConnectWithoutTb_interacoesInput | tb_interacoes_intencoesCreateOrConnectWithoutTb_interacoesInput[]
    createMany?: tb_interacoes_intencoesCreateManyTb_interacoesInputEnvelope
    connect?: tb_interacoes_intencoesWhereUniqueInput | tb_interacoes_intencoesWhereUniqueInput[]
  }

  export type tb_interacoes_intencoesUncheckedCreateNestedManyWithoutTb_interacoesInput = {
    create?: XOR<tb_interacoes_intencoesCreateWithoutTb_interacoesInput, tb_interacoes_intencoesUncheckedCreateWithoutTb_interacoesInput> | tb_interacoes_intencoesCreateWithoutTb_interacoesInput[] | tb_interacoes_intencoesUncheckedCreateWithoutTb_interacoesInput[]
    connectOrCreate?: tb_interacoes_intencoesCreateOrConnectWithoutTb_interacoesInput | tb_interacoes_intencoesCreateOrConnectWithoutTb_interacoesInput[]
    createMany?: tb_interacoes_intencoesCreateManyTb_interacoesInputEnvelope
    connect?: tb_interacoes_intencoesWhereUniqueInput | tb_interacoes_intencoesWhereUniqueInput[]
  }

  export type tb_usuariosUpdateOneRequiredWithoutTb_interacoesNestedInput = {
    create?: XOR<tb_usuariosCreateWithoutTb_interacoesInput, tb_usuariosUncheckedCreateWithoutTb_interacoesInput>
    connectOrCreate?: tb_usuariosCreateOrConnectWithoutTb_interacoesInput
    upsert?: tb_usuariosUpsertWithoutTb_interacoesInput
    connect?: tb_usuariosWhereUniqueInput
    update?: XOR<XOR<tb_usuariosUpdateToOneWithWhereWithoutTb_interacoesInput, tb_usuariosUpdateWithoutTb_interacoesInput>, tb_usuariosUncheckedUpdateWithoutTb_interacoesInput>
  }

  export type tb_interacoes_intencoesUpdateManyWithoutTb_interacoesNestedInput = {
    create?: XOR<tb_interacoes_intencoesCreateWithoutTb_interacoesInput, tb_interacoes_intencoesUncheckedCreateWithoutTb_interacoesInput> | tb_interacoes_intencoesCreateWithoutTb_interacoesInput[] | tb_interacoes_intencoesUncheckedCreateWithoutTb_interacoesInput[]
    connectOrCreate?: tb_interacoes_intencoesCreateOrConnectWithoutTb_interacoesInput | tb_interacoes_intencoesCreateOrConnectWithoutTb_interacoesInput[]
    upsert?: tb_interacoes_intencoesUpsertWithWhereUniqueWithoutTb_interacoesInput | tb_interacoes_intencoesUpsertWithWhereUniqueWithoutTb_interacoesInput[]
    createMany?: tb_interacoes_intencoesCreateManyTb_interacoesInputEnvelope
    set?: tb_interacoes_intencoesWhereUniqueInput | tb_interacoes_intencoesWhereUniqueInput[]
    disconnect?: tb_interacoes_intencoesWhereUniqueInput | tb_interacoes_intencoesWhereUniqueInput[]
    delete?: tb_interacoes_intencoesWhereUniqueInput | tb_interacoes_intencoesWhereUniqueInput[]
    connect?: tb_interacoes_intencoesWhereUniqueInput | tb_interacoes_intencoesWhereUniqueInput[]
    update?: tb_interacoes_intencoesUpdateWithWhereUniqueWithoutTb_interacoesInput | tb_interacoes_intencoesUpdateWithWhereUniqueWithoutTb_interacoesInput[]
    updateMany?: tb_interacoes_intencoesUpdateManyWithWhereWithoutTb_interacoesInput | tb_interacoes_intencoesUpdateManyWithWhereWithoutTb_interacoesInput[]
    deleteMany?: tb_interacoes_intencoesScalarWhereInput | tb_interacoes_intencoesScalarWhereInput[]
  }

  export type tb_interacoes_intencoesUncheckedUpdateManyWithoutTb_interacoesNestedInput = {
    create?: XOR<tb_interacoes_intencoesCreateWithoutTb_interacoesInput, tb_interacoes_intencoesUncheckedCreateWithoutTb_interacoesInput> | tb_interacoes_intencoesCreateWithoutTb_interacoesInput[] | tb_interacoes_intencoesUncheckedCreateWithoutTb_interacoesInput[]
    connectOrCreate?: tb_interacoes_intencoesCreateOrConnectWithoutTb_interacoesInput | tb_interacoes_intencoesCreateOrConnectWithoutTb_interacoesInput[]
    upsert?: tb_interacoes_intencoesUpsertWithWhereUniqueWithoutTb_interacoesInput | tb_interacoes_intencoesUpsertWithWhereUniqueWithoutTb_interacoesInput[]
    createMany?: tb_interacoes_intencoesCreateManyTb_interacoesInputEnvelope
    set?: tb_interacoes_intencoesWhereUniqueInput | tb_interacoes_intencoesWhereUniqueInput[]
    disconnect?: tb_interacoes_intencoesWhereUniqueInput | tb_interacoes_intencoesWhereUniqueInput[]
    delete?: tb_interacoes_intencoesWhereUniqueInput | tb_interacoes_intencoesWhereUniqueInput[]
    connect?: tb_interacoes_intencoesWhereUniqueInput | tb_interacoes_intencoesWhereUniqueInput[]
    update?: tb_interacoes_intencoesUpdateWithWhereUniqueWithoutTb_interacoesInput | tb_interacoes_intencoesUpdateWithWhereUniqueWithoutTb_interacoesInput[]
    updateMany?: tb_interacoes_intencoesUpdateManyWithWhereWithoutTb_interacoesInput | tb_interacoes_intencoesUpdateManyWithWhereWithoutTb_interacoesInput[]
    deleteMany?: tb_interacoes_intencoesScalarWhereInput | tb_interacoes_intencoesScalarWhereInput[]
  }

  export type tb_intencoesCreateNestedOneWithoutTb_interacoes_intencoesInput = {
    create?: XOR<tb_intencoesCreateWithoutTb_interacoes_intencoesInput, tb_intencoesUncheckedCreateWithoutTb_interacoes_intencoesInput>
    connectOrCreate?: tb_intencoesCreateOrConnectWithoutTb_interacoes_intencoesInput
    connect?: tb_intencoesWhereUniqueInput
  }

  export type tb_interacoesCreateNestedOneWithoutTb_interacoes_intencoesInput = {
    create?: XOR<tb_interacoesCreateWithoutTb_interacoes_intencoesInput, tb_interacoesUncheckedCreateWithoutTb_interacoes_intencoesInput>
    connectOrCreate?: tb_interacoesCreateOrConnectWithoutTb_interacoes_intencoesInput
    connect?: tb_interacoesWhereUniqueInput
  }

  export type tb_intencoesUpdateOneRequiredWithoutTb_interacoes_intencoesNestedInput = {
    create?: XOR<tb_intencoesCreateWithoutTb_interacoes_intencoesInput, tb_intencoesUncheckedCreateWithoutTb_interacoes_intencoesInput>
    connectOrCreate?: tb_intencoesCreateOrConnectWithoutTb_interacoes_intencoesInput
    upsert?: tb_intencoesUpsertWithoutTb_interacoes_intencoesInput
    connect?: tb_intencoesWhereUniqueInput
    update?: XOR<XOR<tb_intencoesUpdateToOneWithWhereWithoutTb_interacoes_intencoesInput, tb_intencoesUpdateWithoutTb_interacoes_intencoesInput>, tb_intencoesUncheckedUpdateWithoutTb_interacoes_intencoesInput>
  }

  export type tb_interacoesUpdateOneRequiredWithoutTb_interacoes_intencoesNestedInput = {
    create?: XOR<tb_interacoesCreateWithoutTb_interacoes_intencoesInput, tb_interacoesUncheckedCreateWithoutTb_interacoes_intencoesInput>
    connectOrCreate?: tb_interacoesCreateOrConnectWithoutTb_interacoes_intencoesInput
    upsert?: tb_interacoesUpsertWithoutTb_interacoes_intencoesInput
    connect?: tb_interacoesWhereUniqueInput
    update?: XOR<XOR<tb_interacoesUpdateToOneWithWhereWithoutTb_interacoes_intencoesInput, tb_interacoesUpdateWithoutTb_interacoes_intencoesInput>, tb_interacoesUncheckedUpdateWithoutTb_interacoes_intencoesInput>
  }

  export type tb_produtos_estoqueCreateNestedOneWithoutTb_movimentacoes_estoqueInput = {
    create?: XOR<tb_produtos_estoqueCreateWithoutTb_movimentacoes_estoqueInput, tb_produtos_estoqueUncheckedCreateWithoutTb_movimentacoes_estoqueInput>
    connectOrCreate?: tb_produtos_estoqueCreateOrConnectWithoutTb_movimentacoes_estoqueInput
    connect?: tb_produtos_estoqueWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type tb_produtos_estoqueUpdateOneRequiredWithoutTb_movimentacoes_estoqueNestedInput = {
    create?: XOR<tb_produtos_estoqueCreateWithoutTb_movimentacoes_estoqueInput, tb_produtos_estoqueUncheckedCreateWithoutTb_movimentacoes_estoqueInput>
    connectOrCreate?: tb_produtos_estoqueCreateOrConnectWithoutTb_movimentacoes_estoqueInput
    upsert?: tb_produtos_estoqueUpsertWithoutTb_movimentacoes_estoqueInput
    connect?: tb_produtos_estoqueWhereUniqueInput
    update?: XOR<XOR<tb_produtos_estoqueUpdateToOneWithWhereWithoutTb_movimentacoes_estoqueInput, tb_produtos_estoqueUpdateWithoutTb_movimentacoes_estoqueInput>, tb_produtos_estoqueUncheckedUpdateWithoutTb_movimentacoes_estoqueInput>
  }

  export type tb_administradoresCreateNestedManyWithoutTb_organizacoesInput = {
    create?: XOR<tb_administradoresCreateWithoutTb_organizacoesInput, tb_administradoresUncheckedCreateWithoutTb_organizacoesInput> | tb_administradoresCreateWithoutTb_organizacoesInput[] | tb_administradoresUncheckedCreateWithoutTb_organizacoesInput[]
    connectOrCreate?: tb_administradoresCreateOrConnectWithoutTb_organizacoesInput | tb_administradoresCreateOrConnectWithoutTb_organizacoesInput[]
    createMany?: tb_administradoresCreateManyTb_organizacoesInputEnvelope
    connect?: tb_administradoresWhereUniqueInput | tb_administradoresWhereUniqueInput[]
  }

  export type tb_usuariosCreateNestedManyWithoutTb_organizacoesInput = {
    create?: XOR<tb_usuariosCreateWithoutTb_organizacoesInput, tb_usuariosUncheckedCreateWithoutTb_organizacoesInput> | tb_usuariosCreateWithoutTb_organizacoesInput[] | tb_usuariosUncheckedCreateWithoutTb_organizacoesInput[]
    connectOrCreate?: tb_usuariosCreateOrConnectWithoutTb_organizacoesInput | tb_usuariosCreateOrConnectWithoutTb_organizacoesInput[]
    createMany?: tb_usuariosCreateManyTb_organizacoesInputEnvelope
    connect?: tb_usuariosWhereUniqueInput | tb_usuariosWhereUniqueInput[]
  }

  export type tb_administradoresUncheckedCreateNestedManyWithoutTb_organizacoesInput = {
    create?: XOR<tb_administradoresCreateWithoutTb_organizacoesInput, tb_administradoresUncheckedCreateWithoutTb_organizacoesInput> | tb_administradoresCreateWithoutTb_organizacoesInput[] | tb_administradoresUncheckedCreateWithoutTb_organizacoesInput[]
    connectOrCreate?: tb_administradoresCreateOrConnectWithoutTb_organizacoesInput | tb_administradoresCreateOrConnectWithoutTb_organizacoesInput[]
    createMany?: tb_administradoresCreateManyTb_organizacoesInputEnvelope
    connect?: tb_administradoresWhereUniqueInput | tb_administradoresWhereUniqueInput[]
  }

  export type tb_usuariosUncheckedCreateNestedManyWithoutTb_organizacoesInput = {
    create?: XOR<tb_usuariosCreateWithoutTb_organizacoesInput, tb_usuariosUncheckedCreateWithoutTb_organizacoesInput> | tb_usuariosCreateWithoutTb_organizacoesInput[] | tb_usuariosUncheckedCreateWithoutTb_organizacoesInput[]
    connectOrCreate?: tb_usuariosCreateOrConnectWithoutTb_organizacoesInput | tb_usuariosCreateOrConnectWithoutTb_organizacoesInput[]
    createMany?: tb_usuariosCreateManyTb_organizacoesInputEnvelope
    connect?: tb_usuariosWhereUniqueInput | tb_usuariosWhereUniqueInput[]
  }

  export type tb_administradoresUpdateManyWithoutTb_organizacoesNestedInput = {
    create?: XOR<tb_administradoresCreateWithoutTb_organizacoesInput, tb_administradoresUncheckedCreateWithoutTb_organizacoesInput> | tb_administradoresCreateWithoutTb_organizacoesInput[] | tb_administradoresUncheckedCreateWithoutTb_organizacoesInput[]
    connectOrCreate?: tb_administradoresCreateOrConnectWithoutTb_organizacoesInput | tb_administradoresCreateOrConnectWithoutTb_organizacoesInput[]
    upsert?: tb_administradoresUpsertWithWhereUniqueWithoutTb_organizacoesInput | tb_administradoresUpsertWithWhereUniqueWithoutTb_organizacoesInput[]
    createMany?: tb_administradoresCreateManyTb_organizacoesInputEnvelope
    set?: tb_administradoresWhereUniqueInput | tb_administradoresWhereUniqueInput[]
    disconnect?: tb_administradoresWhereUniqueInput | tb_administradoresWhereUniqueInput[]
    delete?: tb_administradoresWhereUniqueInput | tb_administradoresWhereUniqueInput[]
    connect?: tb_administradoresWhereUniqueInput | tb_administradoresWhereUniqueInput[]
    update?: tb_administradoresUpdateWithWhereUniqueWithoutTb_organizacoesInput | tb_administradoresUpdateWithWhereUniqueWithoutTb_organizacoesInput[]
    updateMany?: tb_administradoresUpdateManyWithWhereWithoutTb_organizacoesInput | tb_administradoresUpdateManyWithWhereWithoutTb_organizacoesInput[]
    deleteMany?: tb_administradoresScalarWhereInput | tb_administradoresScalarWhereInput[]
  }

  export type tb_usuariosUpdateManyWithoutTb_organizacoesNestedInput = {
    create?: XOR<tb_usuariosCreateWithoutTb_organizacoesInput, tb_usuariosUncheckedCreateWithoutTb_organizacoesInput> | tb_usuariosCreateWithoutTb_organizacoesInput[] | tb_usuariosUncheckedCreateWithoutTb_organizacoesInput[]
    connectOrCreate?: tb_usuariosCreateOrConnectWithoutTb_organizacoesInput | tb_usuariosCreateOrConnectWithoutTb_organizacoesInput[]
    upsert?: tb_usuariosUpsertWithWhereUniqueWithoutTb_organizacoesInput | tb_usuariosUpsertWithWhereUniqueWithoutTb_organizacoesInput[]
    createMany?: tb_usuariosCreateManyTb_organizacoesInputEnvelope
    set?: tb_usuariosWhereUniqueInput | tb_usuariosWhereUniqueInput[]
    disconnect?: tb_usuariosWhereUniqueInput | tb_usuariosWhereUniqueInput[]
    delete?: tb_usuariosWhereUniqueInput | tb_usuariosWhereUniqueInput[]
    connect?: tb_usuariosWhereUniqueInput | tb_usuariosWhereUniqueInput[]
    update?: tb_usuariosUpdateWithWhereUniqueWithoutTb_organizacoesInput | tb_usuariosUpdateWithWhereUniqueWithoutTb_organizacoesInput[]
    updateMany?: tb_usuariosUpdateManyWithWhereWithoutTb_organizacoesInput | tb_usuariosUpdateManyWithWhereWithoutTb_organizacoesInput[]
    deleteMany?: tb_usuariosScalarWhereInput | tb_usuariosScalarWhereInput[]
  }

  export type tb_administradoresUncheckedUpdateManyWithoutTb_organizacoesNestedInput = {
    create?: XOR<tb_administradoresCreateWithoutTb_organizacoesInput, tb_administradoresUncheckedCreateWithoutTb_organizacoesInput> | tb_administradoresCreateWithoutTb_organizacoesInput[] | tb_administradoresUncheckedCreateWithoutTb_organizacoesInput[]
    connectOrCreate?: tb_administradoresCreateOrConnectWithoutTb_organizacoesInput | tb_administradoresCreateOrConnectWithoutTb_organizacoesInput[]
    upsert?: tb_administradoresUpsertWithWhereUniqueWithoutTb_organizacoesInput | tb_administradoresUpsertWithWhereUniqueWithoutTb_organizacoesInput[]
    createMany?: tb_administradoresCreateManyTb_organizacoesInputEnvelope
    set?: tb_administradoresWhereUniqueInput | tb_administradoresWhereUniqueInput[]
    disconnect?: tb_administradoresWhereUniqueInput | tb_administradoresWhereUniqueInput[]
    delete?: tb_administradoresWhereUniqueInput | tb_administradoresWhereUniqueInput[]
    connect?: tb_administradoresWhereUniqueInput | tb_administradoresWhereUniqueInput[]
    update?: tb_administradoresUpdateWithWhereUniqueWithoutTb_organizacoesInput | tb_administradoresUpdateWithWhereUniqueWithoutTb_organizacoesInput[]
    updateMany?: tb_administradoresUpdateManyWithWhereWithoutTb_organizacoesInput | tb_administradoresUpdateManyWithWhereWithoutTb_organizacoesInput[]
    deleteMany?: tb_administradoresScalarWhereInput | tb_administradoresScalarWhereInput[]
  }

  export type tb_usuariosUncheckedUpdateManyWithoutTb_organizacoesNestedInput = {
    create?: XOR<tb_usuariosCreateWithoutTb_organizacoesInput, tb_usuariosUncheckedCreateWithoutTb_organizacoesInput> | tb_usuariosCreateWithoutTb_organizacoesInput[] | tb_usuariosUncheckedCreateWithoutTb_organizacoesInput[]
    connectOrCreate?: tb_usuariosCreateOrConnectWithoutTb_organizacoesInput | tb_usuariosCreateOrConnectWithoutTb_organizacoesInput[]
    upsert?: tb_usuariosUpsertWithWhereUniqueWithoutTb_organizacoesInput | tb_usuariosUpsertWithWhereUniqueWithoutTb_organizacoesInput[]
    createMany?: tb_usuariosCreateManyTb_organizacoesInputEnvelope
    set?: tb_usuariosWhereUniqueInput | tb_usuariosWhereUniqueInput[]
    disconnect?: tb_usuariosWhereUniqueInput | tb_usuariosWhereUniqueInput[]
    delete?: tb_usuariosWhereUniqueInput | tb_usuariosWhereUniqueInput[]
    connect?: tb_usuariosWhereUniqueInput | tb_usuariosWhereUniqueInput[]
    update?: tb_usuariosUpdateWithWhereUniqueWithoutTb_organizacoesInput | tb_usuariosUpdateWithWhereUniqueWithoutTb_organizacoesInput[]
    updateMany?: tb_usuariosUpdateManyWithWhereWithoutTb_organizacoesInput | tb_usuariosUpdateManyWithWhereWithoutTb_organizacoesInput[]
    deleteMany?: tb_usuariosScalarWhereInput | tb_usuariosScalarWhereInput[]
  }

  export type tb_movimentacoes_estoqueCreateNestedManyWithoutTb_produtos_estoqueInput = {
    create?: XOR<tb_movimentacoes_estoqueCreateWithoutTb_produtos_estoqueInput, tb_movimentacoes_estoqueUncheckedCreateWithoutTb_produtos_estoqueInput> | tb_movimentacoes_estoqueCreateWithoutTb_produtos_estoqueInput[] | tb_movimentacoes_estoqueUncheckedCreateWithoutTb_produtos_estoqueInput[]
    connectOrCreate?: tb_movimentacoes_estoqueCreateOrConnectWithoutTb_produtos_estoqueInput | tb_movimentacoes_estoqueCreateOrConnectWithoutTb_produtos_estoqueInput[]
    createMany?: tb_movimentacoes_estoqueCreateManyTb_produtos_estoqueInputEnvelope
    connect?: tb_movimentacoes_estoqueWhereUniqueInput | tb_movimentacoes_estoqueWhereUniqueInput[]
  }

  export type tb_usuariosCreateNestedOneWithoutTb_produtos_estoqueInput = {
    create?: XOR<tb_usuariosCreateWithoutTb_produtos_estoqueInput, tb_usuariosUncheckedCreateWithoutTb_produtos_estoqueInput>
    connectOrCreate?: tb_usuariosCreateOrConnectWithoutTb_produtos_estoqueInput
    connect?: tb_usuariosWhereUniqueInput
  }

  export type tb_movimentacoes_estoqueUncheckedCreateNestedManyWithoutTb_produtos_estoqueInput = {
    create?: XOR<tb_movimentacoes_estoqueCreateWithoutTb_produtos_estoqueInput, tb_movimentacoes_estoqueUncheckedCreateWithoutTb_produtos_estoqueInput> | tb_movimentacoes_estoqueCreateWithoutTb_produtos_estoqueInput[] | tb_movimentacoes_estoqueUncheckedCreateWithoutTb_produtos_estoqueInput[]
    connectOrCreate?: tb_movimentacoes_estoqueCreateOrConnectWithoutTb_produtos_estoqueInput | tb_movimentacoes_estoqueCreateOrConnectWithoutTb_produtos_estoqueInput[]
    createMany?: tb_movimentacoes_estoqueCreateManyTb_produtos_estoqueInputEnvelope
    connect?: tb_movimentacoes_estoqueWhereUniqueInput | tb_movimentacoes_estoqueWhereUniqueInput[]
  }

  export type tb_movimentacoes_estoqueUpdateManyWithoutTb_produtos_estoqueNestedInput = {
    create?: XOR<tb_movimentacoes_estoqueCreateWithoutTb_produtos_estoqueInput, tb_movimentacoes_estoqueUncheckedCreateWithoutTb_produtos_estoqueInput> | tb_movimentacoes_estoqueCreateWithoutTb_produtos_estoqueInput[] | tb_movimentacoes_estoqueUncheckedCreateWithoutTb_produtos_estoqueInput[]
    connectOrCreate?: tb_movimentacoes_estoqueCreateOrConnectWithoutTb_produtos_estoqueInput | tb_movimentacoes_estoqueCreateOrConnectWithoutTb_produtos_estoqueInput[]
    upsert?: tb_movimentacoes_estoqueUpsertWithWhereUniqueWithoutTb_produtos_estoqueInput | tb_movimentacoes_estoqueUpsertWithWhereUniqueWithoutTb_produtos_estoqueInput[]
    createMany?: tb_movimentacoes_estoqueCreateManyTb_produtos_estoqueInputEnvelope
    set?: tb_movimentacoes_estoqueWhereUniqueInput | tb_movimentacoes_estoqueWhereUniqueInput[]
    disconnect?: tb_movimentacoes_estoqueWhereUniqueInput | tb_movimentacoes_estoqueWhereUniqueInput[]
    delete?: tb_movimentacoes_estoqueWhereUniqueInput | tb_movimentacoes_estoqueWhereUniqueInput[]
    connect?: tb_movimentacoes_estoqueWhereUniqueInput | tb_movimentacoes_estoqueWhereUniqueInput[]
    update?: tb_movimentacoes_estoqueUpdateWithWhereUniqueWithoutTb_produtos_estoqueInput | tb_movimentacoes_estoqueUpdateWithWhereUniqueWithoutTb_produtos_estoqueInput[]
    updateMany?: tb_movimentacoes_estoqueUpdateManyWithWhereWithoutTb_produtos_estoqueInput | tb_movimentacoes_estoqueUpdateManyWithWhereWithoutTb_produtos_estoqueInput[]
    deleteMany?: tb_movimentacoes_estoqueScalarWhereInput | tb_movimentacoes_estoqueScalarWhereInput[]
  }

  export type tb_usuariosUpdateOneRequiredWithoutTb_produtos_estoqueNestedInput = {
    create?: XOR<tb_usuariosCreateWithoutTb_produtos_estoqueInput, tb_usuariosUncheckedCreateWithoutTb_produtos_estoqueInput>
    connectOrCreate?: tb_usuariosCreateOrConnectWithoutTb_produtos_estoqueInput
    upsert?: tb_usuariosUpsertWithoutTb_produtos_estoqueInput
    connect?: tb_usuariosWhereUniqueInput
    update?: XOR<XOR<tb_usuariosUpdateToOneWithWhereWithoutTb_produtos_estoqueInput, tb_usuariosUpdateWithoutTb_produtos_estoqueInput>, tb_usuariosUncheckedUpdateWithoutTb_produtos_estoqueInput>
  }

  export type tb_movimentacoes_estoqueUncheckedUpdateManyWithoutTb_produtos_estoqueNestedInput = {
    create?: XOR<tb_movimentacoes_estoqueCreateWithoutTb_produtos_estoqueInput, tb_movimentacoes_estoqueUncheckedCreateWithoutTb_produtos_estoqueInput> | tb_movimentacoes_estoqueCreateWithoutTb_produtos_estoqueInput[] | tb_movimentacoes_estoqueUncheckedCreateWithoutTb_produtos_estoqueInput[]
    connectOrCreate?: tb_movimentacoes_estoqueCreateOrConnectWithoutTb_produtos_estoqueInput | tb_movimentacoes_estoqueCreateOrConnectWithoutTb_produtos_estoqueInput[]
    upsert?: tb_movimentacoes_estoqueUpsertWithWhereUniqueWithoutTb_produtos_estoqueInput | tb_movimentacoes_estoqueUpsertWithWhereUniqueWithoutTb_produtos_estoqueInput[]
    createMany?: tb_movimentacoes_estoqueCreateManyTb_produtos_estoqueInputEnvelope
    set?: tb_movimentacoes_estoqueWhereUniqueInput | tb_movimentacoes_estoqueWhereUniqueInput[]
    disconnect?: tb_movimentacoes_estoqueWhereUniqueInput | tb_movimentacoes_estoqueWhereUniqueInput[]
    delete?: tb_movimentacoes_estoqueWhereUniqueInput | tb_movimentacoes_estoqueWhereUniqueInput[]
    connect?: tb_movimentacoes_estoqueWhereUniqueInput | tb_movimentacoes_estoqueWhereUniqueInput[]
    update?: tb_movimentacoes_estoqueUpdateWithWhereUniqueWithoutTb_produtos_estoqueInput | tb_movimentacoes_estoqueUpdateWithWhereUniqueWithoutTb_produtos_estoqueInput[]
    updateMany?: tb_movimentacoes_estoqueUpdateManyWithWhereWithoutTb_produtos_estoqueInput | tb_movimentacoes_estoqueUpdateManyWithWhereWithoutTb_produtos_estoqueInput[]
    deleteMany?: tb_movimentacoes_estoqueScalarWhereInput | tb_movimentacoes_estoqueScalarWhereInput[]
  }

  export type tb_usuariosCreateNestedOneWithoutTb_safrasInput = {
    create?: XOR<tb_usuariosCreateWithoutTb_safrasInput, tb_usuariosUncheckedCreateWithoutTb_safrasInput>
    connectOrCreate?: tb_usuariosCreateOrConnectWithoutTb_safrasInput
    connect?: tb_usuariosWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type tb_usuariosUpdateOneRequiredWithoutTb_safrasNestedInput = {
    create?: XOR<tb_usuariosCreateWithoutTb_safrasInput, tb_usuariosUncheckedCreateWithoutTb_safrasInput>
    connectOrCreate?: tb_usuariosCreateOrConnectWithoutTb_safrasInput
    upsert?: tb_usuariosUpsertWithoutTb_safrasInput
    connect?: tb_usuariosWhereUniqueInput
    update?: XOR<XOR<tb_usuariosUpdateToOneWithWhereWithoutTb_safrasInput, tb_usuariosUpdateWithoutTb_safrasInput>, tb_usuariosUncheckedUpdateWithoutTb_safrasInput>
  }

  export type tb_interacoesCreateNestedManyWithoutTb_usuariosInput = {
    create?: XOR<tb_interacoesCreateWithoutTb_usuariosInput, tb_interacoesUncheckedCreateWithoutTb_usuariosInput> | tb_interacoesCreateWithoutTb_usuariosInput[] | tb_interacoesUncheckedCreateWithoutTb_usuariosInput[]
    connectOrCreate?: tb_interacoesCreateOrConnectWithoutTb_usuariosInput | tb_interacoesCreateOrConnectWithoutTb_usuariosInput[]
    createMany?: tb_interacoesCreateManyTb_usuariosInputEnvelope
    connect?: tb_interacoesWhereUniqueInput | tb_interacoesWhereUniqueInput[]
  }

  export type tb_produtos_estoqueCreateNestedManyWithoutTb_usuariosInput = {
    create?: XOR<tb_produtos_estoqueCreateWithoutTb_usuariosInput, tb_produtos_estoqueUncheckedCreateWithoutTb_usuariosInput> | tb_produtos_estoqueCreateWithoutTb_usuariosInput[] | tb_produtos_estoqueUncheckedCreateWithoutTb_usuariosInput[]
    connectOrCreate?: tb_produtos_estoqueCreateOrConnectWithoutTb_usuariosInput | tb_produtos_estoqueCreateOrConnectWithoutTb_usuariosInput[]
    createMany?: tb_produtos_estoqueCreateManyTb_usuariosInputEnvelope
    connect?: tb_produtos_estoqueWhereUniqueInput | tb_produtos_estoqueWhereUniqueInput[]
  }

  export type tb_safrasCreateNestedManyWithoutTb_usuariosInput = {
    create?: XOR<tb_safrasCreateWithoutTb_usuariosInput, tb_safrasUncheckedCreateWithoutTb_usuariosInput> | tb_safrasCreateWithoutTb_usuariosInput[] | tb_safrasUncheckedCreateWithoutTb_usuariosInput[]
    connectOrCreate?: tb_safrasCreateOrConnectWithoutTb_usuariosInput | tb_safrasCreateOrConnectWithoutTb_usuariosInput[]
    createMany?: tb_safrasCreateManyTb_usuariosInputEnvelope
    connect?: tb_safrasWhereUniqueInput | tb_safrasWhereUniqueInput[]
  }

  export type tb_organizacoesCreateNestedOneWithoutTb_usuariosInput = {
    create?: XOR<tb_organizacoesCreateWithoutTb_usuariosInput, tb_organizacoesUncheckedCreateWithoutTb_usuariosInput>
    connectOrCreate?: tb_organizacoesCreateOrConnectWithoutTb_usuariosInput
    connect?: tb_organizacoesWhereUniqueInput
  }

  export type tb_interacoesUncheckedCreateNestedManyWithoutTb_usuariosInput = {
    create?: XOR<tb_interacoesCreateWithoutTb_usuariosInput, tb_interacoesUncheckedCreateWithoutTb_usuariosInput> | tb_interacoesCreateWithoutTb_usuariosInput[] | tb_interacoesUncheckedCreateWithoutTb_usuariosInput[]
    connectOrCreate?: tb_interacoesCreateOrConnectWithoutTb_usuariosInput | tb_interacoesCreateOrConnectWithoutTb_usuariosInput[]
    createMany?: tb_interacoesCreateManyTb_usuariosInputEnvelope
    connect?: tb_interacoesWhereUniqueInput | tb_interacoesWhereUniqueInput[]
  }

  export type tb_produtos_estoqueUncheckedCreateNestedManyWithoutTb_usuariosInput = {
    create?: XOR<tb_produtos_estoqueCreateWithoutTb_usuariosInput, tb_produtos_estoqueUncheckedCreateWithoutTb_usuariosInput> | tb_produtos_estoqueCreateWithoutTb_usuariosInput[] | tb_produtos_estoqueUncheckedCreateWithoutTb_usuariosInput[]
    connectOrCreate?: tb_produtos_estoqueCreateOrConnectWithoutTb_usuariosInput | tb_produtos_estoqueCreateOrConnectWithoutTb_usuariosInput[]
    createMany?: tb_produtos_estoqueCreateManyTb_usuariosInputEnvelope
    connect?: tb_produtos_estoqueWhereUniqueInput | tb_produtos_estoqueWhereUniqueInput[]
  }

  export type tb_safrasUncheckedCreateNestedManyWithoutTb_usuariosInput = {
    create?: XOR<tb_safrasCreateWithoutTb_usuariosInput, tb_safrasUncheckedCreateWithoutTb_usuariosInput> | tb_safrasCreateWithoutTb_usuariosInput[] | tb_safrasUncheckedCreateWithoutTb_usuariosInput[]
    connectOrCreate?: tb_safrasCreateOrConnectWithoutTb_usuariosInput | tb_safrasCreateOrConnectWithoutTb_usuariosInput[]
    createMany?: tb_safrasCreateManyTb_usuariosInputEnvelope
    connect?: tb_safrasWhereUniqueInput | tb_safrasWhereUniqueInput[]
  }

  export type tb_interacoesUpdateManyWithoutTb_usuariosNestedInput = {
    create?: XOR<tb_interacoesCreateWithoutTb_usuariosInput, tb_interacoesUncheckedCreateWithoutTb_usuariosInput> | tb_interacoesCreateWithoutTb_usuariosInput[] | tb_interacoesUncheckedCreateWithoutTb_usuariosInput[]
    connectOrCreate?: tb_interacoesCreateOrConnectWithoutTb_usuariosInput | tb_interacoesCreateOrConnectWithoutTb_usuariosInput[]
    upsert?: tb_interacoesUpsertWithWhereUniqueWithoutTb_usuariosInput | tb_interacoesUpsertWithWhereUniqueWithoutTb_usuariosInput[]
    createMany?: tb_interacoesCreateManyTb_usuariosInputEnvelope
    set?: tb_interacoesWhereUniqueInput | tb_interacoesWhereUniqueInput[]
    disconnect?: tb_interacoesWhereUniqueInput | tb_interacoesWhereUniqueInput[]
    delete?: tb_interacoesWhereUniqueInput | tb_interacoesWhereUniqueInput[]
    connect?: tb_interacoesWhereUniqueInput | tb_interacoesWhereUniqueInput[]
    update?: tb_interacoesUpdateWithWhereUniqueWithoutTb_usuariosInput | tb_interacoesUpdateWithWhereUniqueWithoutTb_usuariosInput[]
    updateMany?: tb_interacoesUpdateManyWithWhereWithoutTb_usuariosInput | tb_interacoesUpdateManyWithWhereWithoutTb_usuariosInput[]
    deleteMany?: tb_interacoesScalarWhereInput | tb_interacoesScalarWhereInput[]
  }

  export type tb_produtos_estoqueUpdateManyWithoutTb_usuariosNestedInput = {
    create?: XOR<tb_produtos_estoqueCreateWithoutTb_usuariosInput, tb_produtos_estoqueUncheckedCreateWithoutTb_usuariosInput> | tb_produtos_estoqueCreateWithoutTb_usuariosInput[] | tb_produtos_estoqueUncheckedCreateWithoutTb_usuariosInput[]
    connectOrCreate?: tb_produtos_estoqueCreateOrConnectWithoutTb_usuariosInput | tb_produtos_estoqueCreateOrConnectWithoutTb_usuariosInput[]
    upsert?: tb_produtos_estoqueUpsertWithWhereUniqueWithoutTb_usuariosInput | tb_produtos_estoqueUpsertWithWhereUniqueWithoutTb_usuariosInput[]
    createMany?: tb_produtos_estoqueCreateManyTb_usuariosInputEnvelope
    set?: tb_produtos_estoqueWhereUniqueInput | tb_produtos_estoqueWhereUniqueInput[]
    disconnect?: tb_produtos_estoqueWhereUniqueInput | tb_produtos_estoqueWhereUniqueInput[]
    delete?: tb_produtos_estoqueWhereUniqueInput | tb_produtos_estoqueWhereUniqueInput[]
    connect?: tb_produtos_estoqueWhereUniqueInput | tb_produtos_estoqueWhereUniqueInput[]
    update?: tb_produtos_estoqueUpdateWithWhereUniqueWithoutTb_usuariosInput | tb_produtos_estoqueUpdateWithWhereUniqueWithoutTb_usuariosInput[]
    updateMany?: tb_produtos_estoqueUpdateManyWithWhereWithoutTb_usuariosInput | tb_produtos_estoqueUpdateManyWithWhereWithoutTb_usuariosInput[]
    deleteMany?: tb_produtos_estoqueScalarWhereInput | tb_produtos_estoqueScalarWhereInput[]
  }

  export type tb_safrasUpdateManyWithoutTb_usuariosNestedInput = {
    create?: XOR<tb_safrasCreateWithoutTb_usuariosInput, tb_safrasUncheckedCreateWithoutTb_usuariosInput> | tb_safrasCreateWithoutTb_usuariosInput[] | tb_safrasUncheckedCreateWithoutTb_usuariosInput[]
    connectOrCreate?: tb_safrasCreateOrConnectWithoutTb_usuariosInput | tb_safrasCreateOrConnectWithoutTb_usuariosInput[]
    upsert?: tb_safrasUpsertWithWhereUniqueWithoutTb_usuariosInput | tb_safrasUpsertWithWhereUniqueWithoutTb_usuariosInput[]
    createMany?: tb_safrasCreateManyTb_usuariosInputEnvelope
    set?: tb_safrasWhereUniqueInput | tb_safrasWhereUniqueInput[]
    disconnect?: tb_safrasWhereUniqueInput | tb_safrasWhereUniqueInput[]
    delete?: tb_safrasWhereUniqueInput | tb_safrasWhereUniqueInput[]
    connect?: tb_safrasWhereUniqueInput | tb_safrasWhereUniqueInput[]
    update?: tb_safrasUpdateWithWhereUniqueWithoutTb_usuariosInput | tb_safrasUpdateWithWhereUniqueWithoutTb_usuariosInput[]
    updateMany?: tb_safrasUpdateManyWithWhereWithoutTb_usuariosInput | tb_safrasUpdateManyWithWhereWithoutTb_usuariosInput[]
    deleteMany?: tb_safrasScalarWhereInput | tb_safrasScalarWhereInput[]
  }

  export type tb_organizacoesUpdateOneRequiredWithoutTb_usuariosNestedInput = {
    create?: XOR<tb_organizacoesCreateWithoutTb_usuariosInput, tb_organizacoesUncheckedCreateWithoutTb_usuariosInput>
    connectOrCreate?: tb_organizacoesCreateOrConnectWithoutTb_usuariosInput
    upsert?: tb_organizacoesUpsertWithoutTb_usuariosInput
    connect?: tb_organizacoesWhereUniqueInput
    update?: XOR<XOR<tb_organizacoesUpdateToOneWithWhereWithoutTb_usuariosInput, tb_organizacoesUpdateWithoutTb_usuariosInput>, tb_organizacoesUncheckedUpdateWithoutTb_usuariosInput>
  }

  export type tb_interacoesUncheckedUpdateManyWithoutTb_usuariosNestedInput = {
    create?: XOR<tb_interacoesCreateWithoutTb_usuariosInput, tb_interacoesUncheckedCreateWithoutTb_usuariosInput> | tb_interacoesCreateWithoutTb_usuariosInput[] | tb_interacoesUncheckedCreateWithoutTb_usuariosInput[]
    connectOrCreate?: tb_interacoesCreateOrConnectWithoutTb_usuariosInput | tb_interacoesCreateOrConnectWithoutTb_usuariosInput[]
    upsert?: tb_interacoesUpsertWithWhereUniqueWithoutTb_usuariosInput | tb_interacoesUpsertWithWhereUniqueWithoutTb_usuariosInput[]
    createMany?: tb_interacoesCreateManyTb_usuariosInputEnvelope
    set?: tb_interacoesWhereUniqueInput | tb_interacoesWhereUniqueInput[]
    disconnect?: tb_interacoesWhereUniqueInput | tb_interacoesWhereUniqueInput[]
    delete?: tb_interacoesWhereUniqueInput | tb_interacoesWhereUniqueInput[]
    connect?: tb_interacoesWhereUniqueInput | tb_interacoesWhereUniqueInput[]
    update?: tb_interacoesUpdateWithWhereUniqueWithoutTb_usuariosInput | tb_interacoesUpdateWithWhereUniqueWithoutTb_usuariosInput[]
    updateMany?: tb_interacoesUpdateManyWithWhereWithoutTb_usuariosInput | tb_interacoesUpdateManyWithWhereWithoutTb_usuariosInput[]
    deleteMany?: tb_interacoesScalarWhereInput | tb_interacoesScalarWhereInput[]
  }

  export type tb_produtos_estoqueUncheckedUpdateManyWithoutTb_usuariosNestedInput = {
    create?: XOR<tb_produtos_estoqueCreateWithoutTb_usuariosInput, tb_produtos_estoqueUncheckedCreateWithoutTb_usuariosInput> | tb_produtos_estoqueCreateWithoutTb_usuariosInput[] | tb_produtos_estoqueUncheckedCreateWithoutTb_usuariosInput[]
    connectOrCreate?: tb_produtos_estoqueCreateOrConnectWithoutTb_usuariosInput | tb_produtos_estoqueCreateOrConnectWithoutTb_usuariosInput[]
    upsert?: tb_produtos_estoqueUpsertWithWhereUniqueWithoutTb_usuariosInput | tb_produtos_estoqueUpsertWithWhereUniqueWithoutTb_usuariosInput[]
    createMany?: tb_produtos_estoqueCreateManyTb_usuariosInputEnvelope
    set?: tb_produtos_estoqueWhereUniqueInput | tb_produtos_estoqueWhereUniqueInput[]
    disconnect?: tb_produtos_estoqueWhereUniqueInput | tb_produtos_estoqueWhereUniqueInput[]
    delete?: tb_produtos_estoqueWhereUniqueInput | tb_produtos_estoqueWhereUniqueInput[]
    connect?: tb_produtos_estoqueWhereUniqueInput | tb_produtos_estoqueWhereUniqueInput[]
    update?: tb_produtos_estoqueUpdateWithWhereUniqueWithoutTb_usuariosInput | tb_produtos_estoqueUpdateWithWhereUniqueWithoutTb_usuariosInput[]
    updateMany?: tb_produtos_estoqueUpdateManyWithWhereWithoutTb_usuariosInput | tb_produtos_estoqueUpdateManyWithWhereWithoutTb_usuariosInput[]
    deleteMany?: tb_produtos_estoqueScalarWhereInput | tb_produtos_estoqueScalarWhereInput[]
  }

  export type tb_safrasUncheckedUpdateManyWithoutTb_usuariosNestedInput = {
    create?: XOR<tb_safrasCreateWithoutTb_usuariosInput, tb_safrasUncheckedCreateWithoutTb_usuariosInput> | tb_safrasCreateWithoutTb_usuariosInput[] | tb_safrasUncheckedCreateWithoutTb_usuariosInput[]
    connectOrCreate?: tb_safrasCreateOrConnectWithoutTb_usuariosInput | tb_safrasCreateOrConnectWithoutTb_usuariosInput[]
    upsert?: tb_safrasUpsertWithWhereUniqueWithoutTb_usuariosInput | tb_safrasUpsertWithWhereUniqueWithoutTb_usuariosInput[]
    createMany?: tb_safrasCreateManyTb_usuariosInputEnvelope
    set?: tb_safrasWhereUniqueInput | tb_safrasWhereUniqueInput[]
    disconnect?: tb_safrasWhereUniqueInput | tb_safrasWhereUniqueInput[]
    delete?: tb_safrasWhereUniqueInput | tb_safrasWhereUniqueInput[]
    connect?: tb_safrasWhereUniqueInput | tb_safrasWhereUniqueInput[]
    update?: tb_safrasUpdateWithWhereUniqueWithoutTb_usuariosInput | tb_safrasUpdateWithWhereUniqueWithoutTb_usuariosInput[]
    updateMany?: tb_safrasUpdateManyWithWhereWithoutTb_usuariosInput | tb_safrasUpdateManyWithWhereWithoutTb_usuariosInput[]
    deleteMany?: tb_safrasScalarWhereInput | tb_safrasScalarWhereInput[]
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type tb_organizacoesCreateWithoutTb_administradoresInput = {
    nome: string
    cnpj?: string | null
    data_criacao?: Date | string | null
    tb_usuarios?: tb_usuariosCreateNestedManyWithoutTb_organizacoesInput
  }

  export type tb_organizacoesUncheckedCreateWithoutTb_administradoresInput = {
    id?: number
    nome: string
    cnpj?: string | null
    data_criacao?: Date | string | null
    tb_usuarios?: tb_usuariosUncheckedCreateNestedManyWithoutTb_organizacoesInput
  }

  export type tb_organizacoesCreateOrConnectWithoutTb_administradoresInput = {
    where: tb_organizacoesWhereUniqueInput
    create: XOR<tb_organizacoesCreateWithoutTb_administradoresInput, tb_organizacoesUncheckedCreateWithoutTb_administradoresInput>
  }

  export type tb_organizacoesUpsertWithoutTb_administradoresInput = {
    update: XOR<tb_organizacoesUpdateWithoutTb_administradoresInput, tb_organizacoesUncheckedUpdateWithoutTb_administradoresInput>
    create: XOR<tb_organizacoesCreateWithoutTb_administradoresInput, tb_organizacoesUncheckedCreateWithoutTb_administradoresInput>
    where?: tb_organizacoesWhereInput
  }

  export type tb_organizacoesUpdateToOneWithWhereWithoutTb_administradoresInput = {
    where?: tb_organizacoesWhereInput
    data: XOR<tb_organizacoesUpdateWithoutTb_administradoresInput, tb_organizacoesUncheckedUpdateWithoutTb_administradoresInput>
  }

  export type tb_organizacoesUpdateWithoutTb_administradoresInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tb_usuarios?: tb_usuariosUpdateManyWithoutTb_organizacoesNestedInput
  }

  export type tb_organizacoesUncheckedUpdateWithoutTb_administradoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tb_usuarios?: tb_usuariosUncheckedUpdateManyWithoutTb_organizacoesNestedInput
  }

  export type tb_interacoes_intencoesCreateWithoutTb_intencoesInput = {
    tb_interacoes: tb_interacoesCreateNestedOneWithoutTb_interacoes_intencoesInput
  }

  export type tb_interacoes_intencoesUncheckedCreateWithoutTb_intencoesInput = {
    interacao_id: number
  }

  export type tb_interacoes_intencoesCreateOrConnectWithoutTb_intencoesInput = {
    where: tb_interacoes_intencoesWhereUniqueInput
    create: XOR<tb_interacoes_intencoesCreateWithoutTb_intencoesInput, tb_interacoes_intencoesUncheckedCreateWithoutTb_intencoesInput>
  }

  export type tb_interacoes_intencoesCreateManyTb_intencoesInputEnvelope = {
    data: tb_interacoes_intencoesCreateManyTb_intencoesInput | tb_interacoes_intencoesCreateManyTb_intencoesInput[]
    skipDuplicates?: boolean
  }

  export type tb_interacoes_intencoesUpsertWithWhereUniqueWithoutTb_intencoesInput = {
    where: tb_interacoes_intencoesWhereUniqueInput
    update: XOR<tb_interacoes_intencoesUpdateWithoutTb_intencoesInput, tb_interacoes_intencoesUncheckedUpdateWithoutTb_intencoesInput>
    create: XOR<tb_interacoes_intencoesCreateWithoutTb_intencoesInput, tb_interacoes_intencoesUncheckedCreateWithoutTb_intencoesInput>
  }

  export type tb_interacoes_intencoesUpdateWithWhereUniqueWithoutTb_intencoesInput = {
    where: tb_interacoes_intencoesWhereUniqueInput
    data: XOR<tb_interacoes_intencoesUpdateWithoutTb_intencoesInput, tb_interacoes_intencoesUncheckedUpdateWithoutTb_intencoesInput>
  }

  export type tb_interacoes_intencoesUpdateManyWithWhereWithoutTb_intencoesInput = {
    where: tb_interacoes_intencoesScalarWhereInput
    data: XOR<tb_interacoes_intencoesUpdateManyMutationInput, tb_interacoes_intencoesUncheckedUpdateManyWithoutTb_intencoesInput>
  }

  export type tb_interacoes_intencoesScalarWhereInput = {
    AND?: tb_interacoes_intencoesScalarWhereInput | tb_interacoes_intencoesScalarWhereInput[]
    OR?: tb_interacoes_intencoesScalarWhereInput[]
    NOT?: tb_interacoes_intencoesScalarWhereInput | tb_interacoes_intencoesScalarWhereInput[]
    interacao_id?: IntFilter<"tb_interacoes_intencoes"> | number
    intencao_id?: IntFilter<"tb_interacoes_intencoes"> | number
  }

  export type tb_usuariosCreateWithoutTb_interacoesInput = {
    nome: string
    whatsapp_id: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    cidade?: string | null
    estado?: string | null
    data_cadastro?: Date | string | null
    ultima_atividade?: Date | string | null
    ativo?: string | null
    tb_produtos_estoque?: tb_produtos_estoqueCreateNestedManyWithoutTb_usuariosInput
    tb_safras?: tb_safrasCreateNestedManyWithoutTb_usuariosInput
    tb_organizacoes: tb_organizacoesCreateNestedOneWithoutTb_usuariosInput
  }

  export type tb_usuariosUncheckedCreateWithoutTb_interacoesInput = {
    id?: number
    organizacao_id: number
    nome: string
    whatsapp_id: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    cidade?: string | null
    estado?: string | null
    data_cadastro?: Date | string | null
    ultima_atividade?: Date | string | null
    ativo?: string | null
    tb_produtos_estoque?: tb_produtos_estoqueUncheckedCreateNestedManyWithoutTb_usuariosInput
    tb_safras?: tb_safrasUncheckedCreateNestedManyWithoutTb_usuariosInput
  }

  export type tb_usuariosCreateOrConnectWithoutTb_interacoesInput = {
    where: tb_usuariosWhereUniqueInput
    create: XOR<tb_usuariosCreateWithoutTb_interacoesInput, tb_usuariosUncheckedCreateWithoutTb_interacoesInput>
  }

  export type tb_interacoes_intencoesCreateWithoutTb_interacoesInput = {
    tb_intencoes: tb_intencoesCreateNestedOneWithoutTb_interacoes_intencoesInput
  }

  export type tb_interacoes_intencoesUncheckedCreateWithoutTb_interacoesInput = {
    intencao_id: number
  }

  export type tb_interacoes_intencoesCreateOrConnectWithoutTb_interacoesInput = {
    where: tb_interacoes_intencoesWhereUniqueInput
    create: XOR<tb_interacoes_intencoesCreateWithoutTb_interacoesInput, tb_interacoes_intencoesUncheckedCreateWithoutTb_interacoesInput>
  }

  export type tb_interacoes_intencoesCreateManyTb_interacoesInputEnvelope = {
    data: tb_interacoes_intencoesCreateManyTb_interacoesInput | tb_interacoes_intencoesCreateManyTb_interacoesInput[]
    skipDuplicates?: boolean
  }

  export type tb_usuariosUpsertWithoutTb_interacoesInput = {
    update: XOR<tb_usuariosUpdateWithoutTb_interacoesInput, tb_usuariosUncheckedUpdateWithoutTb_interacoesInput>
    create: XOR<tb_usuariosCreateWithoutTb_interacoesInput, tb_usuariosUncheckedCreateWithoutTb_interacoesInput>
    where?: tb_usuariosWhereInput
  }

  export type tb_usuariosUpdateToOneWithWhereWithoutTb_interacoesInput = {
    where?: tb_usuariosWhereInput
    data: XOR<tb_usuariosUpdateWithoutTb_interacoesInput, tb_usuariosUncheckedUpdateWithoutTb_interacoesInput>
  }

  export type tb_usuariosUpdateWithoutTb_interacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    whatsapp_id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_atividade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: NullableStringFieldUpdateOperationsInput | string | null
    tb_produtos_estoque?: tb_produtos_estoqueUpdateManyWithoutTb_usuariosNestedInput
    tb_safras?: tb_safrasUpdateManyWithoutTb_usuariosNestedInput
    tb_organizacoes?: tb_organizacoesUpdateOneRequiredWithoutTb_usuariosNestedInput
  }

  export type tb_usuariosUncheckedUpdateWithoutTb_interacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizacao_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    whatsapp_id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_atividade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: NullableStringFieldUpdateOperationsInput | string | null
    tb_produtos_estoque?: tb_produtos_estoqueUncheckedUpdateManyWithoutTb_usuariosNestedInput
    tb_safras?: tb_safrasUncheckedUpdateManyWithoutTb_usuariosNestedInput
  }

  export type tb_interacoes_intencoesUpsertWithWhereUniqueWithoutTb_interacoesInput = {
    where: tb_interacoes_intencoesWhereUniqueInput
    update: XOR<tb_interacoes_intencoesUpdateWithoutTb_interacoesInput, tb_interacoes_intencoesUncheckedUpdateWithoutTb_interacoesInput>
    create: XOR<tb_interacoes_intencoesCreateWithoutTb_interacoesInput, tb_interacoes_intencoesUncheckedCreateWithoutTb_interacoesInput>
  }

  export type tb_interacoes_intencoesUpdateWithWhereUniqueWithoutTb_interacoesInput = {
    where: tb_interacoes_intencoesWhereUniqueInput
    data: XOR<tb_interacoes_intencoesUpdateWithoutTb_interacoesInput, tb_interacoes_intencoesUncheckedUpdateWithoutTb_interacoesInput>
  }

  export type tb_interacoes_intencoesUpdateManyWithWhereWithoutTb_interacoesInput = {
    where: tb_interacoes_intencoesScalarWhereInput
    data: XOR<tb_interacoes_intencoesUpdateManyMutationInput, tb_interacoes_intencoesUncheckedUpdateManyWithoutTb_interacoesInput>
  }

  export type tb_intencoesCreateWithoutTb_interacoes_intencoesInput = {
    nome_intencao: string
    descricao?: string | null
  }

  export type tb_intencoesUncheckedCreateWithoutTb_interacoes_intencoesInput = {
    id?: number
    nome_intencao: string
    descricao?: string | null
  }

  export type tb_intencoesCreateOrConnectWithoutTb_interacoes_intencoesInput = {
    where: tb_intencoesWhereUniqueInput
    create: XOR<tb_intencoesCreateWithoutTb_interacoes_intencoesInput, tb_intencoesUncheckedCreateWithoutTb_interacoes_intencoesInput>
  }

  export type tb_interacoesCreateWithoutTb_interacoes_intencoesInput = {
    mensagem_usuario?: string | null
    resposta_chatbot?: string | null
    entidades?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string | null
    tb_usuarios: tb_usuariosCreateNestedOneWithoutTb_interacoesInput
  }

  export type tb_interacoesUncheckedCreateWithoutTb_interacoes_intencoesInput = {
    id?: number
    agricultor_id: number
    mensagem_usuario?: string | null
    resposta_chatbot?: string | null
    entidades?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string | null
  }

  export type tb_interacoesCreateOrConnectWithoutTb_interacoes_intencoesInput = {
    where: tb_interacoesWhereUniqueInput
    create: XOR<tb_interacoesCreateWithoutTb_interacoes_intencoesInput, tb_interacoesUncheckedCreateWithoutTb_interacoes_intencoesInput>
  }

  export type tb_intencoesUpsertWithoutTb_interacoes_intencoesInput = {
    update: XOR<tb_intencoesUpdateWithoutTb_interacoes_intencoesInput, tb_intencoesUncheckedUpdateWithoutTb_interacoes_intencoesInput>
    create: XOR<tb_intencoesCreateWithoutTb_interacoes_intencoesInput, tb_intencoesUncheckedCreateWithoutTb_interacoes_intencoesInput>
    where?: tb_intencoesWhereInput
  }

  export type tb_intencoesUpdateToOneWithWhereWithoutTb_interacoes_intencoesInput = {
    where?: tb_intencoesWhereInput
    data: XOR<tb_intencoesUpdateWithoutTb_interacoes_intencoesInput, tb_intencoesUncheckedUpdateWithoutTb_interacoes_intencoesInput>
  }

  export type tb_intencoesUpdateWithoutTb_interacoes_intencoesInput = {
    nome_intencao?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_intencoesUncheckedUpdateWithoutTb_interacoes_intencoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_intencao?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_interacoesUpsertWithoutTb_interacoes_intencoesInput = {
    update: XOR<tb_interacoesUpdateWithoutTb_interacoes_intencoesInput, tb_interacoesUncheckedUpdateWithoutTb_interacoes_intencoesInput>
    create: XOR<tb_interacoesCreateWithoutTb_interacoes_intencoesInput, tb_interacoesUncheckedCreateWithoutTb_interacoes_intencoesInput>
    where?: tb_interacoesWhereInput
  }

  export type tb_interacoesUpdateToOneWithWhereWithoutTb_interacoes_intencoesInput = {
    where?: tb_interacoesWhereInput
    data: XOR<tb_interacoesUpdateWithoutTb_interacoes_intencoesInput, tb_interacoesUncheckedUpdateWithoutTb_interacoes_intencoesInput>
  }

  export type tb_interacoesUpdateWithoutTb_interacoes_intencoesInput = {
    mensagem_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    resposta_chatbot?: NullableStringFieldUpdateOperationsInput | string | null
    entidades?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tb_usuarios?: tb_usuariosUpdateOneRequiredWithoutTb_interacoesNestedInput
  }

  export type tb_interacoesUncheckedUpdateWithoutTb_interacoes_intencoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    agricultor_id?: IntFieldUpdateOperationsInput | number
    mensagem_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    resposta_chatbot?: NullableStringFieldUpdateOperationsInput | string | null
    entidades?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tb_produtos_estoqueCreateWithoutTb_movimentacoes_estoqueInput = {
    nome_produto: string
    tipo_produto: string
    unidade_medida: string
    saldo_atual: Decimal | DecimalJsLike | number | string
    tb_usuarios: tb_usuariosCreateNestedOneWithoutTb_produtos_estoqueInput
  }

  export type tb_produtos_estoqueUncheckedCreateWithoutTb_movimentacoes_estoqueInput = {
    id?: number
    agricultor_id: number
    nome_produto: string
    tipo_produto: string
    unidade_medida: string
    saldo_atual: Decimal | DecimalJsLike | number | string
  }

  export type tb_produtos_estoqueCreateOrConnectWithoutTb_movimentacoes_estoqueInput = {
    where: tb_produtos_estoqueWhereUniqueInput
    create: XOR<tb_produtos_estoqueCreateWithoutTb_movimentacoes_estoqueInput, tb_produtos_estoqueUncheckedCreateWithoutTb_movimentacoes_estoqueInput>
  }

  export type tb_produtos_estoqueUpsertWithoutTb_movimentacoes_estoqueInput = {
    update: XOR<tb_produtos_estoqueUpdateWithoutTb_movimentacoes_estoqueInput, tb_produtos_estoqueUncheckedUpdateWithoutTb_movimentacoes_estoqueInput>
    create: XOR<tb_produtos_estoqueCreateWithoutTb_movimentacoes_estoqueInput, tb_produtos_estoqueUncheckedCreateWithoutTb_movimentacoes_estoqueInput>
    where?: tb_produtos_estoqueWhereInput
  }

  export type tb_produtos_estoqueUpdateToOneWithWhereWithoutTb_movimentacoes_estoqueInput = {
    where?: tb_produtos_estoqueWhereInput
    data: XOR<tb_produtos_estoqueUpdateWithoutTb_movimentacoes_estoqueInput, tb_produtos_estoqueUncheckedUpdateWithoutTb_movimentacoes_estoqueInput>
  }

  export type tb_produtos_estoqueUpdateWithoutTb_movimentacoes_estoqueInput = {
    nome_produto?: StringFieldUpdateOperationsInput | string
    tipo_produto?: StringFieldUpdateOperationsInput | string
    unidade_medida?: StringFieldUpdateOperationsInput | string
    saldo_atual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tb_usuarios?: tb_usuariosUpdateOneRequiredWithoutTb_produtos_estoqueNestedInput
  }

  export type tb_produtos_estoqueUncheckedUpdateWithoutTb_movimentacoes_estoqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    agricultor_id?: IntFieldUpdateOperationsInput | number
    nome_produto?: StringFieldUpdateOperationsInput | string
    tipo_produto?: StringFieldUpdateOperationsInput | string
    unidade_medida?: StringFieldUpdateOperationsInput | string
    saldo_atual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type tb_administradoresCreateWithoutTb_organizacoesInput = {
    nome: string
    email: string
    senha_hash: string
    cargo?: string | null
    ativo?: string | null
    data_cadastro?: Date | string | null
  }

  export type tb_administradoresUncheckedCreateWithoutTb_organizacoesInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    cargo?: string | null
    ativo?: string | null
    data_cadastro?: Date | string | null
  }

  export type tb_administradoresCreateOrConnectWithoutTb_organizacoesInput = {
    where: tb_administradoresWhereUniqueInput
    create: XOR<tb_administradoresCreateWithoutTb_organizacoesInput, tb_administradoresUncheckedCreateWithoutTb_organizacoesInput>
  }

  export type tb_administradoresCreateManyTb_organizacoesInputEnvelope = {
    data: tb_administradoresCreateManyTb_organizacoesInput | tb_administradoresCreateManyTb_organizacoesInput[]
    skipDuplicates?: boolean
  }

  export type tb_usuariosCreateWithoutTb_organizacoesInput = {
    nome: string
    whatsapp_id: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    cidade?: string | null
    estado?: string | null
    data_cadastro?: Date | string | null
    ultima_atividade?: Date | string | null
    ativo?: string | null
    tb_interacoes?: tb_interacoesCreateNestedManyWithoutTb_usuariosInput
    tb_produtos_estoque?: tb_produtos_estoqueCreateNestedManyWithoutTb_usuariosInput
    tb_safras?: tb_safrasCreateNestedManyWithoutTb_usuariosInput
  }

  export type tb_usuariosUncheckedCreateWithoutTb_organizacoesInput = {
    id?: number
    nome: string
    whatsapp_id: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    cidade?: string | null
    estado?: string | null
    data_cadastro?: Date | string | null
    ultima_atividade?: Date | string | null
    ativo?: string | null
    tb_interacoes?: tb_interacoesUncheckedCreateNestedManyWithoutTb_usuariosInput
    tb_produtos_estoque?: tb_produtos_estoqueUncheckedCreateNestedManyWithoutTb_usuariosInput
    tb_safras?: tb_safrasUncheckedCreateNestedManyWithoutTb_usuariosInput
  }

  export type tb_usuariosCreateOrConnectWithoutTb_organizacoesInput = {
    where: tb_usuariosWhereUniqueInput
    create: XOR<tb_usuariosCreateWithoutTb_organizacoesInput, tb_usuariosUncheckedCreateWithoutTb_organizacoesInput>
  }

  export type tb_usuariosCreateManyTb_organizacoesInputEnvelope = {
    data: tb_usuariosCreateManyTb_organizacoesInput | tb_usuariosCreateManyTb_organizacoesInput[]
    skipDuplicates?: boolean
  }

  export type tb_administradoresUpsertWithWhereUniqueWithoutTb_organizacoesInput = {
    where: tb_administradoresWhereUniqueInput
    update: XOR<tb_administradoresUpdateWithoutTb_organizacoesInput, tb_administradoresUncheckedUpdateWithoutTb_organizacoesInput>
    create: XOR<tb_administradoresCreateWithoutTb_organizacoesInput, tb_administradoresUncheckedCreateWithoutTb_organizacoesInput>
  }

  export type tb_administradoresUpdateWithWhereUniqueWithoutTb_organizacoesInput = {
    where: tb_administradoresWhereUniqueInput
    data: XOR<tb_administradoresUpdateWithoutTb_organizacoesInput, tb_administradoresUncheckedUpdateWithoutTb_organizacoesInput>
  }

  export type tb_administradoresUpdateManyWithWhereWithoutTb_organizacoesInput = {
    where: tb_administradoresScalarWhereInput
    data: XOR<tb_administradoresUpdateManyMutationInput, tb_administradoresUncheckedUpdateManyWithoutTb_organizacoesInput>
  }

  export type tb_administradoresScalarWhereInput = {
    AND?: tb_administradoresScalarWhereInput | tb_administradoresScalarWhereInput[]
    OR?: tb_administradoresScalarWhereInput[]
    NOT?: tb_administradoresScalarWhereInput | tb_administradoresScalarWhereInput[]
    id?: IntFilter<"tb_administradores"> | number
    organizacao_id?: IntFilter<"tb_administradores"> | number
    nome?: StringFilter<"tb_administradores"> | string
    email?: StringFilter<"tb_administradores"> | string
    senha_hash?: StringFilter<"tb_administradores"> | string
    cargo?: StringNullableFilter<"tb_administradores"> | string | null
    ativo?: StringNullableFilter<"tb_administradores"> | string | null
    data_cadastro?: DateTimeNullableFilter<"tb_administradores"> | Date | string | null
  }

  export type tb_usuariosUpsertWithWhereUniqueWithoutTb_organizacoesInput = {
    where: tb_usuariosWhereUniqueInput
    update: XOR<tb_usuariosUpdateWithoutTb_organizacoesInput, tb_usuariosUncheckedUpdateWithoutTb_organizacoesInput>
    create: XOR<tb_usuariosCreateWithoutTb_organizacoesInput, tb_usuariosUncheckedCreateWithoutTb_organizacoesInput>
  }

  export type tb_usuariosUpdateWithWhereUniqueWithoutTb_organizacoesInput = {
    where: tb_usuariosWhereUniqueInput
    data: XOR<tb_usuariosUpdateWithoutTb_organizacoesInput, tb_usuariosUncheckedUpdateWithoutTb_organizacoesInput>
  }

  export type tb_usuariosUpdateManyWithWhereWithoutTb_organizacoesInput = {
    where: tb_usuariosScalarWhereInput
    data: XOR<tb_usuariosUpdateManyMutationInput, tb_usuariosUncheckedUpdateManyWithoutTb_organizacoesInput>
  }

  export type tb_usuariosScalarWhereInput = {
    AND?: tb_usuariosScalarWhereInput | tb_usuariosScalarWhereInput[]
    OR?: tb_usuariosScalarWhereInput[]
    NOT?: tb_usuariosScalarWhereInput | tb_usuariosScalarWhereInput[]
    id?: IntFilter<"tb_usuarios"> | number
    organizacao_id?: IntFilter<"tb_usuarios"> | number
    nome?: StringFilter<"tb_usuarios"> | string
    whatsapp_id?: StringFilter<"tb_usuarios"> | string
    latitude?: DecimalNullableFilter<"tb_usuarios"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"tb_usuarios"> | Decimal | DecimalJsLike | number | string | null
    cidade?: StringNullableFilter<"tb_usuarios"> | string | null
    estado?: StringNullableFilter<"tb_usuarios"> | string | null
    data_cadastro?: DateTimeNullableFilter<"tb_usuarios"> | Date | string | null
    ultima_atividade?: DateTimeNullableFilter<"tb_usuarios"> | Date | string | null
    ativo?: StringNullableFilter<"tb_usuarios"> | string | null
  }

  export type tb_movimentacoes_estoqueCreateWithoutTb_produtos_estoqueInput = {
    tipo_movimentacao: string
    quantidade: Decimal | DecimalJsLike | number | string
    data_movimentacao?: Date | string | null
    observacao?: string | null
  }

  export type tb_movimentacoes_estoqueUncheckedCreateWithoutTb_produtos_estoqueInput = {
    id?: number
    tipo_movimentacao: string
    quantidade: Decimal | DecimalJsLike | number | string
    data_movimentacao?: Date | string | null
    observacao?: string | null
  }

  export type tb_movimentacoes_estoqueCreateOrConnectWithoutTb_produtos_estoqueInput = {
    where: tb_movimentacoes_estoqueWhereUniqueInput
    create: XOR<tb_movimentacoes_estoqueCreateWithoutTb_produtos_estoqueInput, tb_movimentacoes_estoqueUncheckedCreateWithoutTb_produtos_estoqueInput>
  }

  export type tb_movimentacoes_estoqueCreateManyTb_produtos_estoqueInputEnvelope = {
    data: tb_movimentacoes_estoqueCreateManyTb_produtos_estoqueInput | tb_movimentacoes_estoqueCreateManyTb_produtos_estoqueInput[]
    skipDuplicates?: boolean
  }

  export type tb_usuariosCreateWithoutTb_produtos_estoqueInput = {
    nome: string
    whatsapp_id: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    cidade?: string | null
    estado?: string | null
    data_cadastro?: Date | string | null
    ultima_atividade?: Date | string | null
    ativo?: string | null
    tb_interacoes?: tb_interacoesCreateNestedManyWithoutTb_usuariosInput
    tb_safras?: tb_safrasCreateNestedManyWithoutTb_usuariosInput
    tb_organizacoes: tb_organizacoesCreateNestedOneWithoutTb_usuariosInput
  }

  export type tb_usuariosUncheckedCreateWithoutTb_produtos_estoqueInput = {
    id?: number
    organizacao_id: number
    nome: string
    whatsapp_id: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    cidade?: string | null
    estado?: string | null
    data_cadastro?: Date | string | null
    ultima_atividade?: Date | string | null
    ativo?: string | null
    tb_interacoes?: tb_interacoesUncheckedCreateNestedManyWithoutTb_usuariosInput
    tb_safras?: tb_safrasUncheckedCreateNestedManyWithoutTb_usuariosInput
  }

  export type tb_usuariosCreateOrConnectWithoutTb_produtos_estoqueInput = {
    where: tb_usuariosWhereUniqueInput
    create: XOR<tb_usuariosCreateWithoutTb_produtos_estoqueInput, tb_usuariosUncheckedCreateWithoutTb_produtos_estoqueInput>
  }

  export type tb_movimentacoes_estoqueUpsertWithWhereUniqueWithoutTb_produtos_estoqueInput = {
    where: tb_movimentacoes_estoqueWhereUniqueInput
    update: XOR<tb_movimentacoes_estoqueUpdateWithoutTb_produtos_estoqueInput, tb_movimentacoes_estoqueUncheckedUpdateWithoutTb_produtos_estoqueInput>
    create: XOR<tb_movimentacoes_estoqueCreateWithoutTb_produtos_estoqueInput, tb_movimentacoes_estoqueUncheckedCreateWithoutTb_produtos_estoqueInput>
  }

  export type tb_movimentacoes_estoqueUpdateWithWhereUniqueWithoutTb_produtos_estoqueInput = {
    where: tb_movimentacoes_estoqueWhereUniqueInput
    data: XOR<tb_movimentacoes_estoqueUpdateWithoutTb_produtos_estoqueInput, tb_movimentacoes_estoqueUncheckedUpdateWithoutTb_produtos_estoqueInput>
  }

  export type tb_movimentacoes_estoqueUpdateManyWithWhereWithoutTb_produtos_estoqueInput = {
    where: tb_movimentacoes_estoqueScalarWhereInput
    data: XOR<tb_movimentacoes_estoqueUpdateManyMutationInput, tb_movimentacoes_estoqueUncheckedUpdateManyWithoutTb_produtos_estoqueInput>
  }

  export type tb_movimentacoes_estoqueScalarWhereInput = {
    AND?: tb_movimentacoes_estoqueScalarWhereInput | tb_movimentacoes_estoqueScalarWhereInput[]
    OR?: tb_movimentacoes_estoqueScalarWhereInput[]
    NOT?: tb_movimentacoes_estoqueScalarWhereInput | tb_movimentacoes_estoqueScalarWhereInput[]
    id?: IntFilter<"tb_movimentacoes_estoque"> | number
    produto_id?: IntFilter<"tb_movimentacoes_estoque"> | number
    tipo_movimentacao?: StringFilter<"tb_movimentacoes_estoque"> | string
    quantidade?: DecimalFilter<"tb_movimentacoes_estoque"> | Decimal | DecimalJsLike | number | string
    data_movimentacao?: DateTimeNullableFilter<"tb_movimentacoes_estoque"> | Date | string | null
    observacao?: StringNullableFilter<"tb_movimentacoes_estoque"> | string | null
  }

  export type tb_usuariosUpsertWithoutTb_produtos_estoqueInput = {
    update: XOR<tb_usuariosUpdateWithoutTb_produtos_estoqueInput, tb_usuariosUncheckedUpdateWithoutTb_produtos_estoqueInput>
    create: XOR<tb_usuariosCreateWithoutTb_produtos_estoqueInput, tb_usuariosUncheckedCreateWithoutTb_produtos_estoqueInput>
    where?: tb_usuariosWhereInput
  }

  export type tb_usuariosUpdateToOneWithWhereWithoutTb_produtos_estoqueInput = {
    where?: tb_usuariosWhereInput
    data: XOR<tb_usuariosUpdateWithoutTb_produtos_estoqueInput, tb_usuariosUncheckedUpdateWithoutTb_produtos_estoqueInput>
  }

  export type tb_usuariosUpdateWithoutTb_produtos_estoqueInput = {
    nome?: StringFieldUpdateOperationsInput | string
    whatsapp_id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_atividade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: NullableStringFieldUpdateOperationsInput | string | null
    tb_interacoes?: tb_interacoesUpdateManyWithoutTb_usuariosNestedInput
    tb_safras?: tb_safrasUpdateManyWithoutTb_usuariosNestedInput
    tb_organizacoes?: tb_organizacoesUpdateOneRequiredWithoutTb_usuariosNestedInput
  }

  export type tb_usuariosUncheckedUpdateWithoutTb_produtos_estoqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizacao_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    whatsapp_id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_atividade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: NullableStringFieldUpdateOperationsInput | string | null
    tb_interacoes?: tb_interacoesUncheckedUpdateManyWithoutTb_usuariosNestedInput
    tb_safras?: tb_safrasUncheckedUpdateManyWithoutTb_usuariosNestedInput
  }

  export type tb_usuariosCreateWithoutTb_safrasInput = {
    nome: string
    whatsapp_id: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    cidade?: string | null
    estado?: string | null
    data_cadastro?: Date | string | null
    ultima_atividade?: Date | string | null
    ativo?: string | null
    tb_interacoes?: tb_interacoesCreateNestedManyWithoutTb_usuariosInput
    tb_produtos_estoque?: tb_produtos_estoqueCreateNestedManyWithoutTb_usuariosInput
    tb_organizacoes: tb_organizacoesCreateNestedOneWithoutTb_usuariosInput
  }

  export type tb_usuariosUncheckedCreateWithoutTb_safrasInput = {
    id?: number
    organizacao_id: number
    nome: string
    whatsapp_id: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    cidade?: string | null
    estado?: string | null
    data_cadastro?: Date | string | null
    ultima_atividade?: Date | string | null
    ativo?: string | null
    tb_interacoes?: tb_interacoesUncheckedCreateNestedManyWithoutTb_usuariosInput
    tb_produtos_estoque?: tb_produtos_estoqueUncheckedCreateNestedManyWithoutTb_usuariosInput
  }

  export type tb_usuariosCreateOrConnectWithoutTb_safrasInput = {
    where: tb_usuariosWhereUniqueInput
    create: XOR<tb_usuariosCreateWithoutTb_safrasInput, tb_usuariosUncheckedCreateWithoutTb_safrasInput>
  }

  export type tb_usuariosUpsertWithoutTb_safrasInput = {
    update: XOR<tb_usuariosUpdateWithoutTb_safrasInput, tb_usuariosUncheckedUpdateWithoutTb_safrasInput>
    create: XOR<tb_usuariosCreateWithoutTb_safrasInput, tb_usuariosUncheckedCreateWithoutTb_safrasInput>
    where?: tb_usuariosWhereInput
  }

  export type tb_usuariosUpdateToOneWithWhereWithoutTb_safrasInput = {
    where?: tb_usuariosWhereInput
    data: XOR<tb_usuariosUpdateWithoutTb_safrasInput, tb_usuariosUncheckedUpdateWithoutTb_safrasInput>
  }

  export type tb_usuariosUpdateWithoutTb_safrasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    whatsapp_id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_atividade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: NullableStringFieldUpdateOperationsInput | string | null
    tb_interacoes?: tb_interacoesUpdateManyWithoutTb_usuariosNestedInput
    tb_produtos_estoque?: tb_produtos_estoqueUpdateManyWithoutTb_usuariosNestedInput
    tb_organizacoes?: tb_organizacoesUpdateOneRequiredWithoutTb_usuariosNestedInput
  }

  export type tb_usuariosUncheckedUpdateWithoutTb_safrasInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizacao_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    whatsapp_id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_atividade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: NullableStringFieldUpdateOperationsInput | string | null
    tb_interacoes?: tb_interacoesUncheckedUpdateManyWithoutTb_usuariosNestedInput
    tb_produtos_estoque?: tb_produtos_estoqueUncheckedUpdateManyWithoutTb_usuariosNestedInput
  }

  export type tb_interacoesCreateWithoutTb_usuariosInput = {
    mensagem_usuario?: string | null
    resposta_chatbot?: string | null
    entidades?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string | null
    tb_interacoes_intencoes?: tb_interacoes_intencoesCreateNestedManyWithoutTb_interacoesInput
  }

  export type tb_interacoesUncheckedCreateWithoutTb_usuariosInput = {
    id?: number
    mensagem_usuario?: string | null
    resposta_chatbot?: string | null
    entidades?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string | null
    tb_interacoes_intencoes?: tb_interacoes_intencoesUncheckedCreateNestedManyWithoutTb_interacoesInput
  }

  export type tb_interacoesCreateOrConnectWithoutTb_usuariosInput = {
    where: tb_interacoesWhereUniqueInput
    create: XOR<tb_interacoesCreateWithoutTb_usuariosInput, tb_interacoesUncheckedCreateWithoutTb_usuariosInput>
  }

  export type tb_interacoesCreateManyTb_usuariosInputEnvelope = {
    data: tb_interacoesCreateManyTb_usuariosInput | tb_interacoesCreateManyTb_usuariosInput[]
    skipDuplicates?: boolean
  }

  export type tb_produtos_estoqueCreateWithoutTb_usuariosInput = {
    nome_produto: string
    tipo_produto: string
    unidade_medida: string
    saldo_atual: Decimal | DecimalJsLike | number | string
    tb_movimentacoes_estoque?: tb_movimentacoes_estoqueCreateNestedManyWithoutTb_produtos_estoqueInput
  }

  export type tb_produtos_estoqueUncheckedCreateWithoutTb_usuariosInput = {
    id?: number
    nome_produto: string
    tipo_produto: string
    unidade_medida: string
    saldo_atual: Decimal | DecimalJsLike | number | string
    tb_movimentacoes_estoque?: tb_movimentacoes_estoqueUncheckedCreateNestedManyWithoutTb_produtos_estoqueInput
  }

  export type tb_produtos_estoqueCreateOrConnectWithoutTb_usuariosInput = {
    where: tb_produtos_estoqueWhereUniqueInput
    create: XOR<tb_produtos_estoqueCreateWithoutTb_usuariosInput, tb_produtos_estoqueUncheckedCreateWithoutTb_usuariosInput>
  }

  export type tb_produtos_estoqueCreateManyTb_usuariosInputEnvelope = {
    data: tb_produtos_estoqueCreateManyTb_usuariosInput | tb_produtos_estoqueCreateManyTb_usuariosInput[]
    skipDuplicates?: boolean
  }

  export type tb_safrasCreateWithoutTb_usuariosInput = {
    cultura: string
    ano_safra?: string | null
    area_plantada_ha?: Decimal | DecimalJsLike | number | string | null
    produtividade?: Decimal | DecimalJsLike | number | string | null
    unidade_medida?: string | null
  }

  export type tb_safrasUncheckedCreateWithoutTb_usuariosInput = {
    id?: number
    cultura: string
    ano_safra?: string | null
    area_plantada_ha?: Decimal | DecimalJsLike | number | string | null
    produtividade?: Decimal | DecimalJsLike | number | string | null
    unidade_medida?: string | null
  }

  export type tb_safrasCreateOrConnectWithoutTb_usuariosInput = {
    where: tb_safrasWhereUniqueInput
    create: XOR<tb_safrasCreateWithoutTb_usuariosInput, tb_safrasUncheckedCreateWithoutTb_usuariosInput>
  }

  export type tb_safrasCreateManyTb_usuariosInputEnvelope = {
    data: tb_safrasCreateManyTb_usuariosInput | tb_safrasCreateManyTb_usuariosInput[]
    skipDuplicates?: boolean
  }

  export type tb_organizacoesCreateWithoutTb_usuariosInput = {
    nome: string
    cnpj?: string | null
    data_criacao?: Date | string | null
    tb_administradores?: tb_administradoresCreateNestedManyWithoutTb_organizacoesInput
  }

  export type tb_organizacoesUncheckedCreateWithoutTb_usuariosInput = {
    id?: number
    nome: string
    cnpj?: string | null
    data_criacao?: Date | string | null
    tb_administradores?: tb_administradoresUncheckedCreateNestedManyWithoutTb_organizacoesInput
  }

  export type tb_organizacoesCreateOrConnectWithoutTb_usuariosInput = {
    where: tb_organizacoesWhereUniqueInput
    create: XOR<tb_organizacoesCreateWithoutTb_usuariosInput, tb_organizacoesUncheckedCreateWithoutTb_usuariosInput>
  }

  export type tb_interacoesUpsertWithWhereUniqueWithoutTb_usuariosInput = {
    where: tb_interacoesWhereUniqueInput
    update: XOR<tb_interacoesUpdateWithoutTb_usuariosInput, tb_interacoesUncheckedUpdateWithoutTb_usuariosInput>
    create: XOR<tb_interacoesCreateWithoutTb_usuariosInput, tb_interacoesUncheckedCreateWithoutTb_usuariosInput>
  }

  export type tb_interacoesUpdateWithWhereUniqueWithoutTb_usuariosInput = {
    where: tb_interacoesWhereUniqueInput
    data: XOR<tb_interacoesUpdateWithoutTb_usuariosInput, tb_interacoesUncheckedUpdateWithoutTb_usuariosInput>
  }

  export type tb_interacoesUpdateManyWithWhereWithoutTb_usuariosInput = {
    where: tb_interacoesScalarWhereInput
    data: XOR<tb_interacoesUpdateManyMutationInput, tb_interacoesUncheckedUpdateManyWithoutTb_usuariosInput>
  }

  export type tb_interacoesScalarWhereInput = {
    AND?: tb_interacoesScalarWhereInput | tb_interacoesScalarWhereInput[]
    OR?: tb_interacoesScalarWhereInput[]
    NOT?: tb_interacoesScalarWhereInput | tb_interacoesScalarWhereInput[]
    id?: IntFilter<"tb_interacoes"> | number
    agricultor_id?: IntFilter<"tb_interacoes"> | number
    mensagem_usuario?: StringNullableFilter<"tb_interacoes"> | string | null
    resposta_chatbot?: StringNullableFilter<"tb_interacoes"> | string | null
    entidades?: JsonNullableFilter<"tb_interacoes">
    timestamp?: DateTimeNullableFilter<"tb_interacoes"> | Date | string | null
  }

  export type tb_produtos_estoqueUpsertWithWhereUniqueWithoutTb_usuariosInput = {
    where: tb_produtos_estoqueWhereUniqueInput
    update: XOR<tb_produtos_estoqueUpdateWithoutTb_usuariosInput, tb_produtos_estoqueUncheckedUpdateWithoutTb_usuariosInput>
    create: XOR<tb_produtos_estoqueCreateWithoutTb_usuariosInput, tb_produtos_estoqueUncheckedCreateWithoutTb_usuariosInput>
  }

  export type tb_produtos_estoqueUpdateWithWhereUniqueWithoutTb_usuariosInput = {
    where: tb_produtos_estoqueWhereUniqueInput
    data: XOR<tb_produtos_estoqueUpdateWithoutTb_usuariosInput, tb_produtos_estoqueUncheckedUpdateWithoutTb_usuariosInput>
  }

  export type tb_produtos_estoqueUpdateManyWithWhereWithoutTb_usuariosInput = {
    where: tb_produtos_estoqueScalarWhereInput
    data: XOR<tb_produtos_estoqueUpdateManyMutationInput, tb_produtos_estoqueUncheckedUpdateManyWithoutTb_usuariosInput>
  }

  export type tb_produtos_estoqueScalarWhereInput = {
    AND?: tb_produtos_estoqueScalarWhereInput | tb_produtos_estoqueScalarWhereInput[]
    OR?: tb_produtos_estoqueScalarWhereInput[]
    NOT?: tb_produtos_estoqueScalarWhereInput | tb_produtos_estoqueScalarWhereInput[]
    id?: IntFilter<"tb_produtos_estoque"> | number
    agricultor_id?: IntFilter<"tb_produtos_estoque"> | number
    nome_produto?: StringFilter<"tb_produtos_estoque"> | string
    tipo_produto?: StringFilter<"tb_produtos_estoque"> | string
    unidade_medida?: StringFilter<"tb_produtos_estoque"> | string
    saldo_atual?: DecimalFilter<"tb_produtos_estoque"> | Decimal | DecimalJsLike | number | string
  }

  export type tb_safrasUpsertWithWhereUniqueWithoutTb_usuariosInput = {
    where: tb_safrasWhereUniqueInput
    update: XOR<tb_safrasUpdateWithoutTb_usuariosInput, tb_safrasUncheckedUpdateWithoutTb_usuariosInput>
    create: XOR<tb_safrasCreateWithoutTb_usuariosInput, tb_safrasUncheckedCreateWithoutTb_usuariosInput>
  }

  export type tb_safrasUpdateWithWhereUniqueWithoutTb_usuariosInput = {
    where: tb_safrasWhereUniqueInput
    data: XOR<tb_safrasUpdateWithoutTb_usuariosInput, tb_safrasUncheckedUpdateWithoutTb_usuariosInput>
  }

  export type tb_safrasUpdateManyWithWhereWithoutTb_usuariosInput = {
    where: tb_safrasScalarWhereInput
    data: XOR<tb_safrasUpdateManyMutationInput, tb_safrasUncheckedUpdateManyWithoutTb_usuariosInput>
  }

  export type tb_safrasScalarWhereInput = {
    AND?: tb_safrasScalarWhereInput | tb_safrasScalarWhereInput[]
    OR?: tb_safrasScalarWhereInput[]
    NOT?: tb_safrasScalarWhereInput | tb_safrasScalarWhereInput[]
    id?: IntFilter<"tb_safras"> | number
    agricultor_id?: IntFilter<"tb_safras"> | number
    cultura?: StringFilter<"tb_safras"> | string
    ano_safra?: StringNullableFilter<"tb_safras"> | string | null
    area_plantada_ha?: DecimalNullableFilter<"tb_safras"> | Decimal | DecimalJsLike | number | string | null
    produtividade?: DecimalNullableFilter<"tb_safras"> | Decimal | DecimalJsLike | number | string | null
    unidade_medida?: StringNullableFilter<"tb_safras"> | string | null
  }

  export type tb_organizacoesUpsertWithoutTb_usuariosInput = {
    update: XOR<tb_organizacoesUpdateWithoutTb_usuariosInput, tb_organizacoesUncheckedUpdateWithoutTb_usuariosInput>
    create: XOR<tb_organizacoesCreateWithoutTb_usuariosInput, tb_organizacoesUncheckedCreateWithoutTb_usuariosInput>
    where?: tb_organizacoesWhereInput
  }

  export type tb_organizacoesUpdateToOneWithWhereWithoutTb_usuariosInput = {
    where?: tb_organizacoesWhereInput
    data: XOR<tb_organizacoesUpdateWithoutTb_usuariosInput, tb_organizacoesUncheckedUpdateWithoutTb_usuariosInput>
  }

  export type tb_organizacoesUpdateWithoutTb_usuariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tb_administradores?: tb_administradoresUpdateManyWithoutTb_organizacoesNestedInput
  }

  export type tb_organizacoesUncheckedUpdateWithoutTb_usuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    data_criacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tb_administradores?: tb_administradoresUncheckedUpdateManyWithoutTb_organizacoesNestedInput
  }

  export type tb_interacoes_intencoesCreateManyTb_intencoesInput = {
    interacao_id: number
  }

  export type tb_interacoes_intencoesUpdateWithoutTb_intencoesInput = {
    tb_interacoes?: tb_interacoesUpdateOneRequiredWithoutTb_interacoes_intencoesNestedInput
  }

  export type tb_interacoes_intencoesUncheckedUpdateWithoutTb_intencoesInput = {
    interacao_id?: IntFieldUpdateOperationsInput | number
  }

  export type tb_interacoes_intencoesUncheckedUpdateManyWithoutTb_intencoesInput = {
    interacao_id?: IntFieldUpdateOperationsInput | number
  }

  export type tb_interacoes_intencoesCreateManyTb_interacoesInput = {
    intencao_id: number
  }

  export type tb_interacoes_intencoesUpdateWithoutTb_interacoesInput = {
    tb_intencoes?: tb_intencoesUpdateOneRequiredWithoutTb_interacoes_intencoesNestedInput
  }

  export type tb_interacoes_intencoesUncheckedUpdateWithoutTb_interacoesInput = {
    intencao_id?: IntFieldUpdateOperationsInput | number
  }

  export type tb_interacoes_intencoesUncheckedUpdateManyWithoutTb_interacoesInput = {
    intencao_id?: IntFieldUpdateOperationsInput | number
  }

  export type tb_administradoresCreateManyTb_organizacoesInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    cargo?: string | null
    ativo?: string | null
    data_cadastro?: Date | string | null
  }

  export type tb_usuariosCreateManyTb_organizacoesInput = {
    id?: number
    nome: string
    whatsapp_id: string
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    cidade?: string | null
    estado?: string | null
    data_cadastro?: Date | string | null
    ultima_atividade?: Date | string | null
    ativo?: string | null
  }

  export type tb_administradoresUpdateWithoutTb_organizacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tb_administradoresUncheckedUpdateWithoutTb_organizacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tb_administradoresUncheckedUpdateManyWithoutTb_organizacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tb_usuariosUpdateWithoutTb_organizacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    whatsapp_id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_atividade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: NullableStringFieldUpdateOperationsInput | string | null
    tb_interacoes?: tb_interacoesUpdateManyWithoutTb_usuariosNestedInput
    tb_produtos_estoque?: tb_produtos_estoqueUpdateManyWithoutTb_usuariosNestedInput
    tb_safras?: tb_safrasUpdateManyWithoutTb_usuariosNestedInput
  }

  export type tb_usuariosUncheckedUpdateWithoutTb_organizacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    whatsapp_id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_atividade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: NullableStringFieldUpdateOperationsInput | string | null
    tb_interacoes?: tb_interacoesUncheckedUpdateManyWithoutTb_usuariosNestedInput
    tb_produtos_estoque?: tb_produtos_estoqueUncheckedUpdateManyWithoutTb_usuariosNestedInput
    tb_safras?: tb_safrasUncheckedUpdateManyWithoutTb_usuariosNestedInput
  }

  export type tb_usuariosUncheckedUpdateManyWithoutTb_organizacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    whatsapp_id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    data_cadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultima_atividade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ativo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_movimentacoes_estoqueCreateManyTb_produtos_estoqueInput = {
    id?: number
    tipo_movimentacao: string
    quantidade: Decimal | DecimalJsLike | number | string
    data_movimentacao?: Date | string | null
    observacao?: string | null
  }

  export type tb_movimentacoes_estoqueUpdateWithoutTb_produtos_estoqueInput = {
    tipo_movimentacao?: StringFieldUpdateOperationsInput | string
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_movimentacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_movimentacoes_estoqueUncheckedUpdateWithoutTb_produtos_estoqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo_movimentacao?: StringFieldUpdateOperationsInput | string
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_movimentacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_movimentacoes_estoqueUncheckedUpdateManyWithoutTb_produtos_estoqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo_movimentacao?: StringFieldUpdateOperationsInput | string
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_movimentacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_interacoesCreateManyTb_usuariosInput = {
    id?: number
    mensagem_usuario?: string | null
    resposta_chatbot?: string | null
    entidades?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: Date | string | null
  }

  export type tb_produtos_estoqueCreateManyTb_usuariosInput = {
    id?: number
    nome_produto: string
    tipo_produto: string
    unidade_medida: string
    saldo_atual: Decimal | DecimalJsLike | number | string
  }

  export type tb_safrasCreateManyTb_usuariosInput = {
    id?: number
    cultura: string
    ano_safra?: string | null
    area_plantada_ha?: Decimal | DecimalJsLike | number | string | null
    produtividade?: Decimal | DecimalJsLike | number | string | null
    unidade_medida?: string | null
  }

  export type tb_interacoesUpdateWithoutTb_usuariosInput = {
    mensagem_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    resposta_chatbot?: NullableStringFieldUpdateOperationsInput | string | null
    entidades?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tb_interacoes_intencoes?: tb_interacoes_intencoesUpdateManyWithoutTb_interacoesNestedInput
  }

  export type tb_interacoesUncheckedUpdateWithoutTb_usuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    mensagem_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    resposta_chatbot?: NullableStringFieldUpdateOperationsInput | string | null
    entidades?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tb_interacoes_intencoes?: tb_interacoes_intencoesUncheckedUpdateManyWithoutTb_interacoesNestedInput
  }

  export type tb_interacoesUncheckedUpdateManyWithoutTb_usuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    mensagem_usuario?: NullableStringFieldUpdateOperationsInput | string | null
    resposta_chatbot?: NullableStringFieldUpdateOperationsInput | string | null
    entidades?: NullableJsonNullValueInput | InputJsonValue
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tb_produtos_estoqueUpdateWithoutTb_usuariosInput = {
    nome_produto?: StringFieldUpdateOperationsInput | string
    tipo_produto?: StringFieldUpdateOperationsInput | string
    unidade_medida?: StringFieldUpdateOperationsInput | string
    saldo_atual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tb_movimentacoes_estoque?: tb_movimentacoes_estoqueUpdateManyWithoutTb_produtos_estoqueNestedInput
  }

  export type tb_produtos_estoqueUncheckedUpdateWithoutTb_usuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_produto?: StringFieldUpdateOperationsInput | string
    tipo_produto?: StringFieldUpdateOperationsInput | string
    unidade_medida?: StringFieldUpdateOperationsInput | string
    saldo_atual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tb_movimentacoes_estoque?: tb_movimentacoes_estoqueUncheckedUpdateManyWithoutTb_produtos_estoqueNestedInput
  }

  export type tb_produtos_estoqueUncheckedUpdateManyWithoutTb_usuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_produto?: StringFieldUpdateOperationsInput | string
    tipo_produto?: StringFieldUpdateOperationsInput | string
    unidade_medida?: StringFieldUpdateOperationsInput | string
    saldo_atual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type tb_safrasUpdateWithoutTb_usuariosInput = {
    cultura?: StringFieldUpdateOperationsInput | string
    ano_safra?: NullableStringFieldUpdateOperationsInput | string | null
    area_plantada_ha?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    produtividade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_safrasUncheckedUpdateWithoutTb_usuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cultura?: StringFieldUpdateOperationsInput | string
    ano_safra?: NullableStringFieldUpdateOperationsInput | string | null
    area_plantada_ha?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    produtividade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_safrasUncheckedUpdateManyWithoutTb_usuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cultura?: StringFieldUpdateOperationsInput | string
    ano_safra?: NullableStringFieldUpdateOperationsInput | string | null
    area_plantada_ha?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    produtividade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unidade_medida?: NullableStringFieldUpdateOperationsInput | string | null
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