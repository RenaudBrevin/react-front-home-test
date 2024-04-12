import {
  butter,
  chocolate,
  cream,
  egg,
  flour,
  redFruits,
  sugar,
  salad,
  cucumber,
  feta,
} from "../Ingredients/IngredientData";

import { StepType as StepType } from "./StepType";

export const stepsPavlova: StepType[] = [
  {
    description: "Préparer la meringue française.",
    ingredients: [
      { ingredient: sugar, quantity: 100 },
      { ingredient: egg, quantity: 3 },
    ],
    order: 1,
  },
  {
    description: "Préparer la chantilly.",
    ingredients: [
      { ingredient: sugar, quantity: 50, unit: "g" },
      { ingredient: cream, quantity: 20, unit: "cl" },
    ],

    order: 2,
  },
  {
    description: "Recouvrir la meringue de chantilly.",
    order: 3,
  },
  {
    description: "Disposer les fruits rouges sur le dessus.",
    order: 4,
    ingredients: [{ ingredient: redFruits, quantity: 100, unit: "g" }],
  },
];

export const stepsFondantChocolat: StepType[] = [
  {
    description: "Faire fondre le chocolat avec le beurre au bain-marie.",
    order: 1,
    ingredients: [
      { ingredient: chocolate, quantity: 200, unit: "g" },
      { ingredient: butter, quantity: 150, unit: "g" },
    ],
  },
  {
    description:
      "Pendant ce temps,séparer les jaunes des blancs d'oeufs. Monter ces derniers en neige ferme.",
    order: 2,
    ingredients: [{ ingredient: egg, quantity: 3 }],
  },
  {
    description: "Ajouter les jaunes d'oeufs au mélange beurre chocolat.",
    order: 3,
  },
  {
    description: "Incorporer le sucre et la farine puis les blancs d'oeufs.",
    order: 4,
    ingredients: [
      { ingredient: flour, quantity: 50, unit: "g" },
      { ingredient: sugar, quantity: 100, unit: "g" },
    ],
  },
  {
    description:
      "Verser la préparation dans un moule beurré et fariné. Enfourner 15mn à 180°.",
    order: 5,
  },
];

export const stepsTarteAuxPoires: StepType[] = [
  {
    description: "Préparer la pâte sablée.",
    order: 1,
    ingredients: [
      { ingredient: butter, quantity: 200, unit: "g" },
      { ingredient: flour, quantity: 150, unit: "g" },
      { ingredient: egg, quantity: 1 },
    ],
  },
  {
    description:
      "Pour la garniture, travailler le beurre et le sucre au batteur électrique.",
    order: 3,
    ingredients: [
      { ingredient: butter, quantity: 100, unit: "g" },
      { ingredient: sugar, quantity: 100, unit: "g" },
    ],
  },
  {
    description:
      "Incorporer les oeufs puis ajouter les amandes moulues et la farine",
    order: 4,
  },
  {
    description:
      "Verser la préparation sur le fond de la pâte. Disposer les poires. Enfourner 50 mn à 180°",
    order: 5,
  },
];

export const stepsCookies: StepType[] = [
  {
    description: "Préchauffer le four à 180°C.",
    order: 1,
  },
  {
    description: "Mélanger le beurre fondu avec le sucre.",
    order: 2,
    ingredients: [
      { ingredient: butter, quantity: 250, unit: "g" },
      { ingredient: sugar, quantity: 200, unit: "g" },
    ],
  },
  {
    description: "Ajouter les oeufs.",
    order: 2,
    ingredients: [{ ingredient: egg, quantity: 2 }],
  },
  {
    description: "Ajouter la farine et la levure.",
    order: 4,
    ingredients: [
      { ingredient: flour, quantity: 500, unit: "g" },
    ],
  },
  {
    description: "Ajouter les pépites de chocolat.",
    order: 5,
    ingredients: [{ ingredient: chocolate, quantity: 250, unit: "g" }],
  },
  {
    description: "Faire des petites boules de pâte sur une plaque.",
    order: 6,
  },
  {
    description: "Enfourner 10 minutes.",
    order: 7,
  },
];


export const stepsWaldorfSalad: StepType[] = [
  {
    description: "Couper la salade en morceaux.",
    order: 1,
    ingredients: [{ ingredient: salad, quantity: 1 }],
  },
  {
    description: "Couper le concombre en rondelles.",
    order: 2,
    ingredients: [{ ingredient: cucumber, quantity: 1 }],
  },
  {
    description: "Emietter la feta.",
    order: 3,
    ingredients: [{ ingredient: feta, quantity: 150, unit: "g" }],
  },
  {
    description: "Mélanger le tout.",
    order: 4,
  },
];