/* Requires the Docker Pipeline plugin */
node('docker') {
    checkout scm
    stage('Build') {
        docker.image('node:6.3').inside {
            echo 'You did it!'
        }
    }
}