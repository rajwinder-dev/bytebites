import { pgTable, foreignKey, bigint, timestamp, unique, text, real, boolean, integer, jsonb, doublePrecision, primaryKey, pgPolicy } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const requiredIngredients = pgTable("requiredIngredients", {
	id: bigint({ mode: "number" }).primaryKey().generatedByDefaultAsIdentity({ name: "RequirededIngredint_id_seq", startWith: 1, increment: 1, minValue: 1,  }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	userId: bigint({ mode: "number" }),
	uniqueIngredientId: bigint({ mode: "number" }),
	recipeId: bigint({ mode: "number" }),
	requiredDate: timestamp({ withTimezone: true, mode: 'string' }),
}, (table) => [
	foreignKey({
			columns: [table.recipeId],
			foreignColumns: [bitebytesRecipes.id],
			name: "RequirededIngredint_recipeId_fkey"
		}),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [bitebytesUser.id],
			name: "RequirededIngredint_userId_fkey"
		}),
	foreignKey({
			columns: [table.uniqueIngredientId],
			foreignColumns: [extendedIngredients.uniqueId],
			name: "requiredIngredients_uniqueIngredientId_fkey"
		}),
]);

export const savedRecipes = pgTable("savedRecipes", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }).primaryKey().generatedByDefaultAsIdentity({ name: "savedRecipes_id_seq", startWith: 1, increment: 1, minValue: 1,  }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	userId: bigint({ mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	quantity: bigint({ mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	recipeId: bigint({ mode: "number" }).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.recipeId],
			foreignColumns: [bitebytesRecipes.id],
			name: "savedRecipes_recipeId_fkey"
		}),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [bitebytesUser.id],
			name: "savedRecipes_userId_fkey"
		}),
	unique("unique_userid_recipeid").on(table.userId, table.recipeId),
]);

export const bitebytesRecipes = pgTable("bitebytesRecipes", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }).primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	image: text(),
	title: text(),
	readyInMinutes: real(),
	servings: real(),
	sourceUrl: text(),
	vegetarian: boolean(),
	vegan: boolean(),
	glutenFree: boolean(),
	dairyFree: boolean(),
	veryHealthy: boolean(),
	cheap: boolean(),
	veryPopular: boolean(),
	sustainable: boolean(),
	lowFodmap: boolean(),
	weightWatcherSmartPoints: integer(),
	gaps: text(),
	preparationMinutes: text(),
	cookingMinutes: text(),
	aggregateLikes: integer(),
	healthScore: real(),
	creditsText: text(),
	license: text(),
	sourceName: text(),
	pricePerServing: text(),
	extendedIngredients: jsonb().array(),
	summary: text(),
	cuisines: jsonb().array(),
	dishTypes: jsonb().array(),
	diets: jsonb().array(),
	occasions: jsonb().array(),
	winePairing: jsonb(),
	instructions: text(),
	analyzedInstructions: jsonb().array(),
	originalId: text(),
	spoonacularScore: doublePrecision(),
	spoonacularSourceUrl: text(),
	imageType: text(),
	language: text(),
}, (table) => [
	unique("bitebytesRecipes_title_key").on(table.title),
]);

export const extendedIngredients = pgTable("extendedIngredients", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }).notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	recipeId: bigint({ mode: "number" }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	aisle: text(),
	image: text(),
	consistency: text(),
	name: text(),
	nameClean: text(),
	original: text(),
	originalName: text(),
	amount: doublePrecision(),
	unit: text(),
	meta: text().array(),
	measures: jsonb(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	uniqueId: bigint({ mode: "number" }).primaryKey().generatedByDefaultAsIdentity({ name: "extendedIngredients_uniqueId_seq", startWith: 1, increment: 1, minValue: 1,  }),
}, (table) => [
	foreignKey({
			columns: [table.recipeId],
			foreignColumns: [bitebytesRecipes.id],
			name: "extendedIngredients_recipeId_fkey"
		}),
	unique("extendedIngredients_uniqueId_key").on(table.uniqueId),
]);

export const likedRecipes = pgTable("likedRecipes", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }).primaryKey().generatedByDefaultAsIdentity({ name: "likedRecipes_id_seq", startWith: 1, increment: 1, minValue: 1,  }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	userId: bigint({ mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	recipeId: bigint({ mode: "number" }).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.recipeId],
			foreignColumns: [bitebytesRecipes.id],
			name: "likedRecipes_recipeId_fkey"
		}),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [bitebytesUser.id],
			name: "likedRecipes_userId_fkey"
		}),
	unique("unique_userid_recipeid2").on(table.userId, table.recipeId),
]);

export const mealPlanning = pgTable("mealPlanning", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }).primaryKey().generatedByDefaultAsIdentity({ name: "MealPlanning_id_seq", startWith: 1, increment: 1, minValue: 1,  }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	title: text(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	recipeId: bigint({ mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	userId: bigint({ mode: "number" }),
	mealType: text().notNull(),
	date: timestamp({ withTimezone: true, mode: 'string' }),
}, (table) => [
	foreignKey({
			columns: [table.recipeId],
			foreignColumns: [bitebytesRecipes.id],
			name: "MealPlanning_recipeId_fkey"
		}),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [bitebytesUser.id],
			name: "MealPlanning_userId_fkey"
		}),
]);

export const userIngredientList = pgTable("userIngredientList", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }).primaryKey().generatedByDefaultAsIdentity({ name: "customIngredients_id_seq", startWith: 1, increment: 1, minValue: 1,  }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	userId: bigint({ mode: "number" }),
	name: text(),
	amount: doublePrecision(),
	unit: text(),
	image: text(),
	isPurchased: boolean().default(false),
	consistency: text(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [bitebytesUser.id],
			name: "customIngredients_userId_fkey"
		}),
]);

export const countries = pgTable("countries", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }).notNull(),
	countryCode: text().notNull(),
	countryName: text(),
}, (table) => [
	primaryKey({ columns: [table.id, table.countryCode], name: "countries_pkey"}),
	pgPolicy("Enable read access for all users", { as: "permissive", for: "select", to: ["public"], using: sql`true` }),
]);

export const bitebytesUser = pgTable("bitebytesUser", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }).generatedByDefaultAsIdentity({ name: "bitebytesuser_id_seq", startWith: 1, increment: 1, minValue: 1,  cache: 1 }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	email: text().notNull(),
	password: text(),
	username: text(),
	image: text().default('/user.png'),
  userPoints: bigint({ mode: "number" }).default(0),
}, (table) => [
	primaryKey({ columns: [table.id, table.email], name: "bitebytesUser_pkey"}),
	unique("bitebytesUser_id_key").on(table.id),
]);
