export const newItemRules = {
  fields: {
    title: null,
    text: null,
    selectedDay: '',
  },
  title: {
    required: true,
    min: 5,
    max: 30,
  },
  text: {
    required: true,
    min: 20,
    max: 500,
  },
  selectedDay: {
    futureDay: 1000 * 60 * 60 * 24,
  },
};
