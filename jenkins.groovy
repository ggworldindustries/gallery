pipeline {
    agent any

    triggers {
        githubPush()
    }

    stages {
        stage('Setup') {
            steps {
                script {
                   
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deploy') {
            steps {
                sh 'node server'
            }
        }
    }
}