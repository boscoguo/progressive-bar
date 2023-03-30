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
  });
});
