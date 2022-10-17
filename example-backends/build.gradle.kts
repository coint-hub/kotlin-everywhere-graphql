val ktorVersion: String by rootProject.extra
val logbackVersion: String by rootProject.extra

apply(plugin = "java-library")
apply(plugin = "kotlin")

// WHAT ? 서브 프로젝트에서 정상 동작하지 않는 것 같다.
val implementation by configurations


dependencies {
    implementation("ch.qos.logback:logback-classic:$logbackVersion")

    implementation("io.ktor:ktor-server-core:${ktorVersion}")
    implementation("io.ktor:ktor-server-netty:${ktorVersion}")
}
