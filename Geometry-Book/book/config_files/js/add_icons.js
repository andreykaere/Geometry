function setIconSize(iconId, size) {
	let element = document.querySelector("#" + iconId + " svg");

	element.style.height = size.toString() + "px";
	element.style.width  = size.toString() + "px";
}

function getLineHeight(titleId) {
	//console.log(id);
	let parent = document.getElementById(titleId);
	let titleTag = parent.children[0].tagName;
	let parentStyle = window.getComputedStyle(parent.querySelector("#" + titleId + " > " + titleTag + "> div"));
	return parseFloat(parentStyle['height']);
}


function getHeaderId(iconId) {
    let reg = /(.*?)_/;//let reg = /(.*)_.*_/
	return iconId.match(reg)[1];
}

function setIconStyle(iconId) {
	//console.log(iconId);
	// if elements is not wihtin this page
	try { 
		let size = getLineHeight(getHeaderId(iconId)); 
	    size = size * 0.8;

	    setIconSize(iconId, size);
	} 
	catch(e) {}//console.log(e)}
	
}




function bindEdit() {
    $(".edit").click(
        function(e){
            alert(this.id);
	});
}


function showCommentWindow(commentId) {
	//$("#commentWindow").css("display", "block");
	//$("#commentWindow").css("color", "red");
	//event.preventDefault();
	$('#comment-background').addClass('is-visible');
 
	$('#comment-background').on('click', function(event){
		if( $(event.target).is('#comment-cancel-button .button') || 
			$(event.target).is('#comment-background')) {
    
			event.preventDefault();
			$(this).removeClass('is-visible');
		}

	});

	// Close popup when clicking the esc keyboard button
	// $(document).keyup(function(event){
    	// if(event.which=='27'){
	// 		event.preventDefault();
	// 		$('#comment-background').removeClass('is-visible');
	//     }
    // }); 

	$("#comment-submit-button").click(function(){
		location.reload();
		$("#comment-window form")[0].reset();
	});
    

}


function hideCommentWindow() {


}


function alertDoneMessage() {
    
}


function bindComment() {
    $(".comment").click(function(e){
        // alert(this.id);
        showCommentWindow(this.id);
	});

}

function showIcons() {
	$(".comment").css("display", 'inline-block');
	$(".edit").css("display", 'inline-block');
	$("h1 .comment").css("display", 'none');
	$("h1 .edit").css("display", 'none');
}

function main() {
    
	let iconsIds = ['Поворот-вектора_rotate_vector_comment', 'Факт-2_fact2_comment', 'Доказательство-9_print_comment', 'Подсказка-17_print_edit', 'Предстоящие_print_comment', 'Выход-в-пространство_stereometrising_comment', 'Теория_theory_edit', 'Задача-4_problem4_edit', 'Факт-9_fact9_comment', 'Достаточность_fact12_edit', 'Примечание-2_print_comment', 'Известные-факты_inversion_edit', 'Подсказка-5_print_comment', 'Площадь_area_edit', 'Вокруг-ортоцентра_orthocenter_comment', 'Факты_facts_comment', 'Рисунок-15_print_comment', 'Методы_methods_edit', 'Доказательства-свойств-2_print_edit', 'Свойства_orthocenter_edit', 'Рисунок-16_print_edit', 'Рисунок-12_print_comment', 'Методы_index_comment', 'При-решении-задач_homothetic_edit', 'Рисунок-6_print_comment', 'Подсказка-1_print_comment', 'При-решении-задач_homothetic_comment', 'Известные-факты_print_comment', 'Преобразования-плоскости_transformations_edit', 'Факт-1_fact1_comment', 'Рисунок-5_print_edit', 'Доказательство-2_print_edit', 'Предстоящие_news_comment', 'Симедиана_symmedian_edit', 'Предисловие_foreword_comment', 'События_print_edit', 'Коники_conics_edit', 'Рисунок-8_print_edit', 'Свойства_homothetic_comment', 'Подсказка-7_print_comment', 'Рисунок-9_print_comment', 'Рисунок-9_print_edit', 'Задачи_foreword_comment', 'Подсказка-7_print_edit', 'Доказательство-11_print_comment', 'Использование-гомотетии_homothetic_edit', 'Подсказка-5_print_edit', 'Факт-7_fact7_edit', 'Факт-12_fact12_edit', 'Рисунок-14_print_edit', 'Свойства_print_edit', 'Задачи_print_edit', 'Известные-факты_inversion_comment', 'Подсказка-8_print_comment', 'Новости_news_comment', 'Свойства-2_print_edit', 'Доказательство-10_print_comment', 'Подсказка-12_print_comment', 'Как-читать-эту-книгу_index_edit', 'Факт-4_fact4_edit', 'Предисловие_index_edit', 'Как-читать-эту-книгу_index_comment', 'Упражнения_print_comment', 'Предисловие_foreword_edit', 'Решение-задач-с-помощью-инверсии_print_comment', 'Рисунок-11_print_edit', 'При-доказательстве-фактов_print_edit', 'Методы_print_edit', 'Дополнение_foreword_comment', 'Точка-Микеля_miquel_point_edit', 'Свойства_orthocenter_comment', 'Факт-8_fact8_edit', 'Достаточность_fact3_comment', 'Как-читать-эту-книгу_print_edit', 'Факты_foreword_edit', 'Доказательство-1_print_edit', 'Задача-3_problem3_edit', 'Обновления_print_edit', 'Свойства-1_print_comment', 'Теория_foreword_comment', 'Факты_print_edit', 'Теория_index_comment', 'Факт-13_fact13_comment', 'Подсказка-8_print_edit', 'Подсказка-6_print_comment', 'Подсказка-2_print_comment', 'Дополнение_foreword_edit', 'Примечание_fact9_edit', 'Недавно-прошедшие_news_edit', 'При-доказательстве-фактов_print_comment', 'Изогональное-сопряжение_isogonal_edit', 'Площадь_area_comment', 'Факт-10_fact10_edit', 'Подсказка-16_print_comment', 'Необходимость_fact12_comment', 'Доказательства-свойств-1_print_edit', 'Доказательство-1_print_comment', 'Для-кого-эта-книга_index_comment', 'Доказательство-12_print_comment', 'Подсказка-6_print_edit', 'Свойства-2_print_comment', 'Замечательные-свойства-коник_angle_prop_conics_edit', 'Факт-1_fact1_edit', 'Поворот-вектора_rotate_vector_edit', 'Свойства_print_comment', 'Теория_print_edit', 'Решение-4_print_comment', 'Задачи_foreword_edit', 'Подсказка-15_print_edit', 'Задачи_index_edit', 'Теория_theory_comment', 'Подсказка-12_print_edit', 'При-решении-задач_print_edit', 'Что-я-могу-тут-найти_index_edit', 'Гомотетия_homothetic_edit', 'Задачи_index_comment', 'Достаточность-1_print_edit', 'Рисунок-13_print_edit', 'Решение-3_print_comment', 'Доказательство-12_print_edit', 'Обновления_print_comment', 'Задача-1_problem1_comment', 'Решение-задач-с-помощью-инверсии_print_edit', 'Свойства_inversion_edit', 'Преобразования-плоскости_transformations_comment', 'Теория_print_comment', 'Необходимость_print_comment', 'Необходимость_print_edit', 'Доказательство-8_print_comment', 'Доказательство-8_print_edit', 'Обновления_news_edit', 'Подсказка-9_print_comment', 'Предстоящие_news_edit', 'Примечание_print_comment', 'Факт-4_fact4_comment', 'Выход-в-пространство_stereometrising_edit', 'Предисловие_print_edit', 'Примечание-1_print_edit', 'Подсказка-14_print_edit', 'Свойства_inversion_comment', 'Решение-1_print_comment', 'Необходимость_fact3_edit', 'Задача-5_problem5_comment', 'Методы_index_edit', 'Предисловие_index_comment', 'Факт-6_fact6_edit', 'Подсказка-3_print_edit', 'Доказательство-7_print_comment', 'Предстоящие_print_edit', 'Рисунок-17_print_comment', 'Инверсия_inversion_edit', 'Примечание_print_edit', 'Задача-2_problem2_comment', 'Факт-6_fact6_comment', 'Доказательства-свойств-1_print_comment', 'Задачи_problems_comment', 'Теория_index_edit', 'Касание_touching_comment', 'Задача-5_problem5_edit', 'Факт-11_fact11_comment', 'document-not-found-404_404_comment', 'Как-читать-эту-книгу_print_comment', 'Решение-2_print_edit', 'Подсказка-4_print_comment', 'document-not-found-404_404_edit', 'Предисловие_print_comment', 'Факты_foreword_comment', 'Рисунок-1_print_comment', 'Проективные-преобразования_projective_comment', 'Доказательства-свойств-2_print_comment', 'Факты_index_comment', 'Факт-3_fact3_comment', 'Что-я-могу-тут-найти_foreword_comment', 'Доказательство-4_print_comment', 'Что-я-могу-тут-найти_print_comment', 'Новости_news_edit', 'Достаточность_fact3_edit', 'Инверсия_inversion_comment', 'Факт-12_fact12_comment', 'Проективные-преобразования_projective_edit', 'Доказательство-4_print_edit', 'Что-я-могу-тут-найти_print_edit', 'Рисунок-6_print_edit', 'Свойства_homothetic_edit', 'Факт-7_fact7_comment', 'Факт-5_fact5_comment', 'Рисунок-1_print_edit', 'При-доказательстве-фактов_homothetic_edit', 'Как-читать-эту-книгу_foreword_edit', 'Для-кого-эта-книга_foreword_edit', 'Рисунок-2_print_edit', 'Доказательство-2_print_comment', 'Рисунок-8_print_comment', 'Задача-1_problem1_edit', 'Гомотетия_homothetic_comment', 'Замечательные-свойства-коник_angle_prop_conics_comment', 'Подсказка-16_print_edit', 'Рисунок-10_print_edit', 'Факты_index_edit', 'Рисунок-7_print_edit', 'Подсказка-13_print_edit', 'При-доказательстве-фактов_homothetic_comment', 'Использование-гомотетии_print_comment', 'Факт-5_fact5_edit', 'Что-я-могу-тут-найти_foreword_edit', 'Рисунок-12_print_edit', 'Факты_print_comment', 'Обновления_news_comment', 'Подсказка-10_print_comment', 'Теория_foreword_edit', 'Примечание_problem1_comment', 'Рисунок-10_print_comment', 'Подсказка-1_print_edit', 'Для-кого-эта-книга_print_edit', 'Подсказка-2_print_edit', 'Доказательство-6_print_edit', 'Достаточность_print_comment', 'Решение-4_print_edit', 'Подсказка-9_print_edit', 'Примечание-1_print_comment', 'Рисунок-4_print_edit', 'События_news_comment', 'Недавно-прошедшие_news_comment', 'Необходимость-1_print_edit', 'Задачи_problems_edit', 'Радикальная-ось_radical_line_comment', 'Доказательство-5_print_comment', 'Решение-2_print_comment', 'Дополнение_index_comment', 'Доказательство-9_print_edit', 'Для-кого-эта-книга_foreword_comment', 'Упражнения_print_edit', 'Подсказка-10_print_edit', 'Примечание_problem1_edit', 'Коники_conics_comment', 'Доказательство-7_print_edit', 'Факт-11_fact11_edit', 'Необходимость_fact12_edit', 'Необходимость-1_print_comment', 'Дополнение_index_edit', 'При-решении-задач_print_comment', 'Касание_touching_edit', 'Доказательство-6_print_comment', 'Рисунок-17_print_edit', 'Использование-гомотетии_print_edit', 'Рисунок-7_print_comment', 'Подсказка-11_print_edit', 'События_news_edit', 'Педальные-треугольники_pedal_comment', 'Для-кого-эта-книга_index_edit', 'Для-кого-эта-книга_print_comment', 'Подсказка-14_print_comment', 'Достаточность-1_print_comment', 'Задача-2_problem2_edit', 'Доказательство-5_print_edit', 'Решение-3_print_edit', 'Радикальная-ось_radical_line_edit', 'Подсказка-17_print_comment', 'Рисунок-11_print_comment', 'Дополнение_print_comment', 'Вокруг-ортоцентра_orthocenter_edit', 'Факт-9_fact9_edit', 'Факты_facts_edit', 'Методы_methods_comment', 'Решение-задач-с-помощью-инверсии_inversion_comment', 'Факт-8_fact8_comment', 'Рисунок-4_print_comment', 'Как-читать-эту-книгу_foreword_comment', 'Примечание_fact4_comment', 'Достаточность_print_edit', 'Что-я-могу-тут-найти_index_comment', 'Факт-10_fact10_comment', 'Достаточность_fact12_comment', 'Методы_foreword_edit', 'Факт-2_fact2_edit', 'Дополнение_print_edit', 'Подсказка-4_print_edit', 'Педальные-треугольники_pedal_edit', 'Использование-гомотетии_homothetic_comment', 'Рисунок-2_print_comment', 'Рисунок-3_print_comment', 'Точка-Микеля_miquel_point_comment', 'Рисунок-3_print_edit', 'События_print_comment', 'Известные-факты_print_edit', 'Примечание-2_print_edit', 'Доказательство-3_print_edit', 'Рисунок-5_print_comment', 'Упражнения_orthocenter_edit', 'Рисунок-14_print_comment', 'Примечание_fact4_edit', 'Рисунок-15_print_edit', 'Упражнения_orthocenter_comment', 'Доказательство-11_print_edit', 'Необходимость_fact3_comment', 'Факт-3_fact3_edit', 'Задачи_print_comment', 'Задача-3_problem3_comment', 'Симедиана_symmedian_comment', 'Подсказка-15_print_comment', 'Задача-4_problem4_comment', 'Изогональное-сопряжение_isogonal_comment', 'Доказательство-3_print_comment', 'Рисунок-13_print_comment', 'Недавно-прошедшие_print_edit', 'Факт-13_fact13_edit', 'Свойства-1_print_edit', 'Подсказка-11_print_comment', 'Методы_foreword_comment', 'Рисунок-16_print_comment', 'Доказательство-10_print_edit', 'Решение-1_print_edit', 'Подсказка-3_print_comment', 'Подсказка-13_print_comment', 'Примечание_fact9_comment', 'Методы_print_comment', 'Решение-задач-с-помощью-инверсии_inversion_edit', 'Недавно-прошедшие_print_comment'];

    
    showIcons();

	for (i in iconsIds) {
        let iconId = iconsIds[i];

	    setIconStyle(iconId);
    }

	bindEdit();
	bindComment();

}


main();
