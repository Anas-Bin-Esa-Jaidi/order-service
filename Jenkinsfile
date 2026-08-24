pipeline {
    agent any

    environment {
        DOCKERHUB = credentials('dockerhub-credentials')
        IMAGE_NAME = "mydockerhubuser/order-service"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Anas-Bin-Esa-Jaidi/order-service.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${IMAGE_NAME}:dev ."
            }
        }

        stage('Push to Docker Hub') {
            steps {
                sh "echo ${DOCKERHUB_PSW} | docker login -u ${DOCKERHUB_USR} --password-stdin"
                sh "docker push ${IMAGE_NAME}:dev"
            }
        }

        stage('Deploy to Production (Practice)') {
            steps {
                sh "docker pull ${IMAGE_NAME}:dev"
                sh "docker run -d -p 3000:3000 --name user-service ${IMAGE_NAME}:dev"
            }
        }
    }
}
