/// <reference types="cypress" />
describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/progressive-bar")
      .get("select")
      .select("progressTwo");
    cy.get(".progress-bar-group__btns > :nth-child(4)").click();
    cy.get(":nth-child(3) > .progress-bar-label").should("have.text", "10%");
    cy.get(".progress-bar-group > :nth-child(3)").should(
      "have.css",
      "background-color",
      "rgb(230, 230, 230)"
    );
  });
});
