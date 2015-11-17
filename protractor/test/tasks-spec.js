/* Test script for the Tasks List app */
describe('the tasks app', function() {
	var taskTitleInp = element(by.model('newTask.title'));
	var addTaskBtn = element(by.buttonText('Add Task'));
	var tasksList = element.all(by.repeater('task in tasks'));
	var requiredMsg = $('.title-required-error');

	function addTask(title) {
		taskTitleInp.sendKeys(title);
		addTaskBtn.click();
	}

	function addMultipleTasks(num) {
		var idx;
		for (idx = 0; idx < num; ++idx) {
			addTask('Task' + idx);
		}
	}

	beforeEach(function() {
		browser.get('http://localhost:8000');
	});

	it('must have the proper page title', function() {
		expect(browser.getTitle()).toEqual('My Tasks');
	});

	it('must add a task', function() {
		var title = 'Learn Protractor';
		addTask(title);
		expect(tasksList.count()).toEqual(1);
		expect(tasksList.get(0).getText()).toEqual(title);
	});

	it('must add a task hitting enter', function() {
		var title = 'Learn Protractor';
		taskTitleInp.sendKeys(title);
		taskTitleInp.sendKeys(protractor.Key.ENTER);
		expect(tasksList.count()).toEqual(1);
		expect(tasksList.get(0).getText()).toEqual(title);
	});

	it('must clear the title after adding', function() {
		addTask('box should get cleared');
		expect(taskTitleInp.getAttribute('value')).toEqual('');
	});

	it ('must add multiple tasks', function() {
		addMultipleTasks(100);
		expect(tasksList.count()).toEqual(100);
	});

	it('must show required validation error', function() {
		expect(requiredMsg.isPresent()).toEqual(false);
		taskTitleInp.sendKeys('abc');
		taskTitleInp.clear();
		expect(requiredMsg.isPresent()).toEqual(true);
		taskTitleInp.sendKeys('abc');
		expect(requiredMsg.isPresent()).toEqual(false);
	});

	it('must disable add task button with blank title', function() {
		expect(addT)
	});
});