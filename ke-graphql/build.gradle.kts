apply(plugin = "java-library")
apply(plugin = "kotlin")

// WHAT ? 서브 프로젝트에서 정상 동작하지 않는 것 같다.
val implementation by configurations
val testImplementation by configurations

dependencies {
    testImplementation(kotlin("test"))
}
