1. Find out how many tasks are in the task table
   SELECT COUNT(*) FROM task
2. Find out how many tasks in the task table do not have a valid due date
select * from task where due_date is null;
3. Find all the tasks that are marked as done
select * from task where status_id = 3;
4. Find all the tasks that are not marked as done
select * from task where status_id = 2 or status_id = 1 ;
5. Get all the tasks, sorted with the most recently created first
select * from task order by created asc ;
6. Get the single most recently created task
select * from task order by created asc limit 1;
7. Get the title and due date of all tasks where the title or description contains database
select title , due_date from task where title like '%database%' or descriptions like '%database%';
8. Get the title and status (as text) of all tasks
select title as text , status_id as text from task;
9. Get the name of each status, along with a count of how many tasks have that status
select name, count(status_id) as status_count from status join task on task.status_id = status.id group by name
10. Get the names of all statuses, sorted by the status with most tasks first
select name, count(status_id) as status_count from status join task on task.status_id = status.id group by name order by status_count desc;
