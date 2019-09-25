pipeline {
    agent any

    checkout scm

    stages {
        stage('Debug') {
            steps {
                sh './echoingmore.sh'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}