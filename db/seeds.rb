# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Task.create([
              { title: 'Call references', subtitle: 'Job: ABC123 - UX Designer', priority: :high,
                due_date: Date.today },
              { title: 'Conduct police check & send emails', subtitle: 'Application: 12803849 - Calliope Maddison',
                priority: :medium, due_date: 1.day.from_now },
              { title: 'Ask candidates about driver licenses and blue card',
                subtitle: 'Job: ABC321 - Aboriginal Family Partnership Worker', priority: :low, due_date: 2.days.from_now }
            ])
