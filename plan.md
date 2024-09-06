<ul>input<ul>
    - pre tax income
    - expenses
    - intrast rates
    - invesments and roi
    - tax implactioins
    - assets
    - retairment savings

<ul>servacies<ul>
    - store past data
    - add ai based financel recomundations
    - graph data
    - minimaize tax recomundations
    - add a biling servace for informed spending and tracking

**services arciacture**

    web        ?app -- ?local memory for sensative data

      \        /
        server

          |       \
  catch  --        \
          |         \
     
     database  ---  servecies
                |
               catch

front web - react
server - node + express
database - ?sql
cach - ?raddis
servecies - ?
? app - ?flutter
communaction - ?‘RabbitMQ or Kafka.’
deploy - docker + kubbernatis