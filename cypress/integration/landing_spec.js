describe("Landing page", () => {
  it("should have hero identity text", () => {
    cy.visit("https://www.zachfoltz.com/");
    cy.contains("Hero Identity");
  });
});
