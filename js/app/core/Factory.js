export class Factory {
  constructor({ lexicon }) {
    this.lexicon = lexicon;
  }

  generate(recipe) {
    return {
      recipe,
      generatedAt: new Date().toISOString(),
      metadata: {
        components: recipe?.blocks?.length || 0,
        modules: recipe?.code?.length || 0
      }
    };
  }
}
