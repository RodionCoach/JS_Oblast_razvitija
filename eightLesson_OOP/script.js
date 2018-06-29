function inherit1(){
//functional
		function Animal(name, kg) {

	 		this.name = name;
	 		this.weight = kg;

	 		this.howManyEat = function() {

	 			console.log(`${this.name} eat ${this.weight} kg`);
	 		};
	 	};

		function Cat(name, kg) {

	  		Animal.apply(this, arguments);
			
			this.catName = function() {

				console.log(`Cat's name is ${this.name}`);
			};

		};

		function Dog(name, kg) {

	  		Animal.apply(this, arguments);
			
			this.dogName = function() {

				console.log(`Dog's name is ${this.name}`);
			};
		};

	let cat = new Cat('Pussyer', 5);
	let dog = new Dog('Pes', 10);
	console.log('----------------------\n')
	cat.howManyEat();
	cat.catName();
	dog.howManyEat();
	dog.dogName();

};

//-----------------------------------------------------------------------------------------------------

function inherit2(){
//prototype

	function Animal(name, kg) {

		this.howManyEat = function() {

			console.log(`${this.name} eat ${this.weight} kg`);
		};
	}

	function Cat(name, kg) {

		this.name = name;
		this.weight = kg;
		this.catName = function() {

			console.log(`Cat's name is ${this.name}`);
		};	
	}

	function Dog(name, kg) {

		this.name = name;
		this.weight = kg;
		this.dogName = function() {

			console.log(`Dog's name is ${this.name}`);
		};	
	}

	/*Animal.prototype.howManyEat = function() {

		console.log(`${this.name} eat ${this.weight} kg`);
	};*/

	Cat.prototype = Object.create(new Animal());
	Dog.prototype = Object.create(new Animal());


	let cat = new Cat('Pussyer', 5);
	let dog = new Dog('Pes', 10);
	console.log('----------------------\n')
	cat.howManyEat();
	cat.catName();
	dog.howManyEat();
	dog.dogName();

};

//-----------------------------------------------------------------------------------------------------

function inherit3(){
//class ES6

	class Animal{

		constructor(name, kg){

			this.name = name;
			this.weight = kg;
		}

		howManyEat() {

			console.log(`${this.name} eat ${this.weight} kg`);
		}
	}

	class Cat extends Animal {

		constructor(name, kg){
			super(name, kg);
		}

		// super.howManyEat();

		get catName() {

			console.log(`Cat's name is ${this.name}`);
			return this.name
		}

		set catName(name){

			this.name = name;
			console.log(`New cat's name is ${this.name}`);
		}
	}

	class Dog extends Animal {

		constructor(name, kg){
			super(name, kg);
		}

		// super.howManyEat();

		get dogName() {

			console.log(`Dog's name is ${this.name}`);
			return this.name
		}

		set dogName(name){

			this.name = name;
			console.log(`New dog's name is ${this.name}`);
		}

	}

	let cat = new Cat('Pussyer', 5);
	let dog = new Dog('Pes', 10);
	console.log('----------------------\n')
	cat.howManyEat();
	cat.catName;
	dog.howManyEat();
	dog.dogName;

	cat.catName = "Barsik";
	dog.dogName = "Valet";
};

inherit1();
inherit2();
inherit3();