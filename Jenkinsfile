pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/saud4567/jenkins-node-project.git'
            }
        }

        stage('Test') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t jenkins-node-project:latest .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker rm -f jenkins-node-app || true'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker run -d --name jenkins-node-app -p 3000:3000 jenkins-node-project:latest'
            }
        }

    }
}
