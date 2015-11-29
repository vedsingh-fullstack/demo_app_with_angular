var app = angular.module('myApp',[])

app.controller('articles_controller',function($scope){
	
	$scope.articles = [
		{'title':'first article',
		  'publish_date':'12-10-2015'

		},
		{'title':'second article',
		  'publish_date':'12-10-2015'
		  
		},
		{'title':'third article',
		  'publish_date':'12-10-2015'
		  
		},
		{'title':'fourth article',
		  'publish_date':'12-10-2015'
		  
		}
	];

        $scope.addArticle=function(){
            $scope.articles.push(
            {
            'title': $scope.newArticle,
            'publish_date':$scope.publish_date
            }
            );
        }
})