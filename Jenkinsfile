pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                git branch: 'master',
                credentialsId: 'GITHUB_CREDENTIALS',
                url: 'https://github.com/shekhra400/FinalAppFE.git'

               println(env.GIT_BRANCH)
                println(env.BRANCH_NAME)
            }
        }
        stage('feature-branch-stuff') {
            when {
                branch 'feature/*'
            }
            steps {
                echo 'run this stage - only if the branch name started with feature/'
            }
        }
        stage('master-branch-stuff') {
            when {
                branch 'master'
            }
            steps {
                echo 'run this stage - only if the branch name started with master'
            }
        }
        stage('expression-branch') {
            when {
                expression {
                    return env.BRANCH_NAME == 'master';
                }
            }
            steps {
                echo 'run this stage - when branch is not equal to master'
            }
        }
    }
}
