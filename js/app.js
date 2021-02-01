const tasks = [
    {
        _id: '5d2ca9e2e03d40b326596aa7',
        completed: true,
        body:
            'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
        title: 'Eu ea incididunt sunt consectetur fugiat non.',
    },
    {
        _id: '5d2ca9e29c8a94095c1288e0',
        completed: false,
        body:
            'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
        title:
            'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
    },
    {
        _id: '5d2ca9e2e03d40b3232496aa7',
        completed: true,
        body:
            'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
        title: 'Eu ea incididunt sunt consectetur fugiat non.',
    },
    {
        _id: '5d2ca9e29c8a94095564788e0',
        completed: false,
        body:
            'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
        title:
            'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
    },
];

(function (arrOfTasks) {
        const objOfTasks = arrOfTasks.reduce((acc, task) => {
            acc[task._id] = task;
            return acc;
        },{});
        const listContainer = document.querySelector('.tasks-list-section .list-group');

        renderAllTasks(arrOfTasks);

        function renderAllTasks(taskList){
                if (!taskList){
                    console.error('Добавьте список задач!');
                    return;
                }
                const fragment = document.createDocumentFragment();
                Object.values(taskList).forEach( task => {
                    const li = listItemTemplate(task);
                    fragment.appendChild(li);
                });
                listContainer.appendChild(fragment);

        }

        function listItemTemplate({_id, title, body}){
            const li = document.createElement('li');
            li.classList.add('list-group-item', 'd-flex', 'align-items-center', 'flex-wrap', 'mt-2');

            const span = document.createElement('span');
            span.style.fontWeight = 'bold';
            span.textContent = title;

            const btnDelete = document.createElement('button');
            btnDelete.classList.add('btn', 'btn-danger', 'ml-auto', 'delete-btn');
            btnDelete.textContent = 'Delete'

            const p = document.createElement('p');
            p.classList.add('mt-2', 'w-100');
            p.textContent = body;

            li.appendChild(span);
            li.appendChild(btnDelete);
            li.appendChild(p);

            return li;
        }



})(tasks);
