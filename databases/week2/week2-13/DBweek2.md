
Part 1: Working with tasks:

1. Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
Change the title of a task

insert into task 
( title, description, created, updated, due_date, status_id) 
values
 ('Wash clothes', 'Title says it all.', now(),  DATE_ADD(now(), INTERVAL 4 hour) , null, 2);

 2. Change the title of a task
      UPDATE task 
       set title = 'go to shop'
       WHERE id = 50;
3. Change a task due date
       UPDATE task 
       set due_date = '2020-06-01 16:00:00'
       WHERE id = 50;
4. Change a task status
       UPDATE task 
       set status_id= 1
       WHERE id = 50;
5. Mark a task as complete
       UPDATE task 
       set status_id= 3
       WHERE id = 50;
6. Delete a task
       DELETE FROM task 
       WHERE id = 50;

Part 2: School database
1. Create a new database containing the following tables:
        - Class: with the columns: id, name, begins (date), ends (date)
        - Student: with the columns: id, name, email, phone, class_id (foreign key)

     CREATE DATABASE school ;
     use school;
     CREATE TABLE `class` (
       `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
       `name` varchar(255) NOT NULL,
       `begins` datetime(6) NOT NULL,
       `ends` datetime(6) NULL
     ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4      COLLATE=utf8mb4_unicode_ci;
     CREATE TABLE `student` (
       `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
       `name` varchar(255) NOT NULL,
       `email` varchar(255) NOT NULL,
       `phone` varchar(255) NULL,
       `class_id` int(10) unsigned NOT NULL ,
         CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES      `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE  
     ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4      COLLATE=utf8mb4_unicode_ci;
2. If you are done with the above tasks, you can continue with these advanced tasks:
      -Create an index on the name column of the student table.
      -Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished

   * CREATE INDEX ind_name ON student (name(255));
   *   ALTER TABLE `class` ADD
       (statuse enum ('not-started', 'ongoing', 'finished'))


Part 3: More queries
1. Get all the tasks assigned to users whose email ends in @spotify.com
    SELECT task.id , task.title,user.email,user.id
    FROM task
    inner join user_task on task_id = task.id
    inner join `user` on user.id = user_task.user_id
    where email like '%@spotify.com'
    order by task.id;

2. Get all the tasks for 'Donald Duck' with status 'Not started'
     select task.id , task.title , user.name ,status.name
     from task
     join status on status.id  = task.status_id
     join user_task on task_id = task.id
     join user on user.id = user_task.user_id
     WHERE user.name = 'Donald Duck' AND status.name = 'Not started'

3. Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
      select task.id , task.title , user.name ,task.created
      from task
      join user_task on task_id = task.id
      join user on user.id = user_task.user_id
      WHERE user.name = 'Maryrose Meadows' AND month(task.created) = 9;

4. Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)


Part 4: Creating a database