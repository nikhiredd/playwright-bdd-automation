
pipeline {
    agent any
    
    environment {
    PATH = "/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:${env.PATH}"
}

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'node -v'
                sh 'npm -v'
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
