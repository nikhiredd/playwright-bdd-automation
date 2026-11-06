
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Browsers') {
            steps {
                sh 'npx playwright install chromium'
            }
        }

        stage('Run BDD Tests') {
            steps {
                sh 'npx bddgen'
                sh 'npx playwright test'
            }
        }
    }
}
