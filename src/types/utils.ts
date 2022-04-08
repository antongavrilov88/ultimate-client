/**
 * Hash
 */
export type Hash<Type = any> = { [key: string]: Type };

/**
 * nullable
 */
export type Nullable<Type = any> = Type | null;

export interface WithID {
  id: number;
}
