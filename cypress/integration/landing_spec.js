describe("Landing page", () => {
  it("should have hero identity text", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Hero Identity");
  });
});
