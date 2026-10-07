module "repo" {
  source = "github.com/kad-products/platform//open-tofu/modules/github-repo?ref=v1.9.0"

  repo_name        = var.repo_name
  repo_description = "Design System for KAD's products"
  is_product       = true
  required_checks = [
    "plan-github-setup / plan-open-tofu",
    "run-tests / run-tests",
    "create-release-dry-run / create-release-dry-run",
    "lint-code / lint-code",
    "lint-commits / lint-commits",
  ]
}
