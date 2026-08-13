terraform {
  required_version = ">= 1.7.0"

  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
}

provider "docker" {}

resource "docker_image" "whitelabelstorefront_backend" {
  name = "whitelabelstorefront-backend:node24"
  build {
    context    = "${path.module}/.."
    dockerfile = "infra/Dockerfile"
  }
}

resource "docker_container" "whitelabelstorefront_backend" {
  name  = "whitelabelstorefront-backend"
  image = docker_image.whitelabelstorefront_backend.image_id
  ports {
    internal = 3000
    external = 3000
  }
}
