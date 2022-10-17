val ktorVersion by extra("2.1.2")
val logbackVersion by extra("1.4.4")

plugins {
    kotlin("jvm") version ("1.7.20") apply false
}

subprojects {
    repositories {
        mavenCentral()
    }
}