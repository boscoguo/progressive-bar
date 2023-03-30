describe("progressive bar spec", () => {
  it("can work well respectively", () => {
    const user = cy;
    user
      .visit("/")
      .get("select")
      .select("progressTwo");
    user.findByTestId("plus-ten").click();
    user.get(":nth-child(3) > .progress-bar-label").should("have.text", "10%");
    user
      .get(".progress-bar-group > :nth-child(3)")
      .should("have.css", "background-color", "rgb(230, 230, 230)");
    user.get("select").select("progressOne");
    user.get(".progress-bar-group__btns > :nth-child(2)").click();
    user.get(":nth-child(2) > .progress-bar-label").should("have.text", "0%");
    user.get(".progress-bar-group__btns > :nth-child(3)").click();
    user.get(":nth-child(2) > .progress-bar-label").should("have.text", "0%");
    user
      .get('[data-testid="progress-bar-div-0"]')
      .should("have.css", "background-color", "rgb(173, 216, 230)");
    user.get(".progress-bar-group__btns > :nth-child(4)").click();
    user.get(":nth-child(2) > .progress-bar-label").should("have.text", "10%");
    user
      .get('[data-testid="progress-bar-div-0"]')
      .should("have.css", "background-color", "rgb(173, 216, 230)");
    user.get(".progress-bar-group__btns > :nth-child(5)").click();
    user.get(":nth-child(2) > .progress-bar-label").should("have.text", "35%");
    user
      .get('[data-testid="progress-bar-div-0"]')
      .should("have.css", "background-color", "rgb(173, 216, 230)");
    for (let i = 0; i < 5; i++) {
      user.get(".progress-bar-group__btns > :nth-child(5)").click();
    }
    user.get(":nth-child(2) > .progress-bar-label").should("have.text", "160%");
    user
      .get('[data-testid="progress-bar-div-0"]')
      .should("have.css", "background-color", "rgb(255, 0, 0)");
    user.get("select").select("progressThree");
    user.get(".progress-bar-group__btns > :nth-child(4)").click();
    for (let i = 0; i < 3; i++) {
      user.get(".progress-bar-group__btns > :nth-child(5)").click();
    }
    user.get(".progress-bar-group__btns > :nth-child(3)").click();
    user.get(".progress-bar-group__btns > :nth-child(2)").click();
    user.get(":nth-child(4) > .progress-bar-label").should("have.text", "50%");
    user
      .get('[data-testid="progress-bar-div-2"]')
      .should("have.css", "background-color", "rgb(173, 216, 230)");
  });
});
