export interface JokeAPIRequest {
  error: boolean;
  setup: string;
  delivery: string;
}

export const JOKE_DEFAULTS = {
  error: false,
  setup: "",
  delivery: ""
};