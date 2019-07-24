<template>
  <div>
    {{text}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        instance: null,
        text: "Hello World",
        buData :[
          {
            "bu_id":5,
            "bu_name":"Soulusi ZH Marketing BU",
            "team_id":6,
            "team_name":"Soulusi ZH Marketing",
            "team_lead":"Colby",
            "avatar":"https:/upbox.ajt.my/template/img/team/2.png",
            "cost":"RM 4,263.24",
            "revenue":"RM 11,761.40",
            "hourly":"RM 21.30",
            "profit":"RM 7,498.16",
            "hourly_number":21.3016
          },
          {
            "bu_id":7,
            "bu_name":"Job Ad BU",
            "team_id":11,
            "team_name":"No. 1 Team - Client Success",
            "team_lead":"Dandy",
            "avatar":"https:/upbox.ajt.my/template/img/team/1.png",
            "cost":"RM 4,571.93",
            "revenue":"RM 19,083.10",
            "hourly":"RM 20.61",
            "profit":"RM 14,511.20",
            "hourly_number":20.6125
          },
          {
            "bu_id":8,
            "bu_name":"Sonar BU",
            "team_id":14,
            "team_name":"The Unstoppable",
            "team_lead":"Charmaine",
            "avatar":"https:/upbox.ajt.my/template/img/team/2.png",
            "cost":"RM 4,344.73",
            "revenue":"RM 14,394.00",
            "hourly":"RM 19.03",
            "profit":"RM 10,049.20",
            "hourly_number":19.0327
          },
          {
            "bu_id":7,
            "bu_name":"Job Ad BU",
            "team_id":19,
            "team_name":"Chimera",
            "team_lead":"Bryan",
            "avatar":"https:/upbox.ajt.my/template/img/team/2.png",
            "cost":"RM 3,720.09",
            "revenue":"RM 20,130.70",
            "hourly":"RM 18.65",
            "profit":"RM 16,410.60",
            "hourly_number":18.6484
          },
          {
            "bu_id":6,
            "bu_name":"Soulusi Product BU",
            "team_id":7,
            "team_name":"Soulusi Product Team",
            "team_lead":"Faiz",
            "avatar":"https:/upbox.ajt.my/template/img/team/2.png",
            "cost":"RM 4,198.45",
            "revenue":"RM 16,001.70",
            "hourly":"RM 16.77",
            "profit":"RM 11,803.20",
            "hourly_number":16.7659
          },
          {
            "bu_id":4,
            "bu_name":"Soulusi MY Marketing BU",
            "team_id":5,
            "team_name":"Soulusi MY Marketing",
            "team_lead":"Aiman",
            "avatar":"https:/upbox.ajt.my/template/img/team/2.png",
            "cost":"RM 7,976.07",
            "revenue":"RM 19,038.80",
            "hourly":"RM 15.71",
            "profit":"RM 11,062.70",
            "hourly_number":15.7141
          },
          {
            "bu_id":10,
            "bu_name":"MK Marketing BU",
            "team_id":17,
            "team_name":"MK Marketing Team",
            "team_lead":"Iqah",
            "avatar":"https:/upbox.ajt.my/template/img/team/10.png",
            "cost":"RM 3,002.34",
            "revenue":"RM 8,381.64",
            "hourly":"RM 15.28",
            "profit":"RM 5,379.31",
            "hourly_number":15.2821
          },
          {
            "bu_id":7,
            "bu_name":"Job Ad BU",
            "team_id":10,
            "team_name":"The Rising Stars",
            "team_lead":"Fauziah",
            "avatar":"https:/upbox.ajt.my/template/img/team/7.png",
            "cost":"RM 6,855.85",
            "revenue":"RM 25,656.10",
            "hourly":"RM 15.26",
            "profit":"RM 18,800.30",
            "hourly_number":15.26
          },
          {
            "bu_id":17,
            "bu_name":"Creative BU",
            "team_id":26,
            "team_name":"Creative Team",
            "team_lead":"Rifka",
            "avatar":"https:/upbox.ajt.my/template/img/team/1.png",
            "cost":"RM 2,785.36",
            "revenue":"RM 10,495.60",
            "hourly":"RM 14.60",
            "profit":"RM 7,710.23",
            "hourly_number":14.6027
          },
          {
            "bu_id":9,
            "bu_name":"RB Marketing BU",
            "team_id":16,
            "team_name":"RB Marketing Team",
            "team_lead":"Chia",
            "avatar":"https:/upbox.ajt.my/template/img/team/3.png",
            "cost":"RM 4,640.37",
            "revenue":"RM 14,616.80",
            "hourly":"RM 14.17",
            "profit":"RM 9,976.44",
            "hourly_number":14.1711
          },
          {
            "bu_id":11,
            "bu_name":"AJT Marketing BU",
            "team_id":18,
            "team_name":"AJT Marketing Team",
            "team_lead":"Sharul",
            "avatar":"https:/upbox.ajt.my/template/img/team/7.png",
            "cost":"RM 2,336.06",
            "revenue":"RM 9,370.00",
            "hourly":"RM 13.32",
            "profit":"RM 7,033.94",
            "hourly_number":13.3219
          },
          {
            "bu_id":15,
            "bu_name":"Operations BU",
            "team_id":24,
            "team_name":"Operations Team",
            "team_lead":"Alena",
            "avatar":"https:/upbox.ajt.my/template/img/team/2.png",
            "cost":"RM 3,267.07",
            "revenue":"RM 11,965.00",
            "hourly":"RM 12.36",
            "profit":"RM 8,697.93",
            "hourly_number":12.355
          },
          {
            "bu_id":7,
            "bu_name":"Job Ad BU",
            "team_id":9,
            "team_name":"Fire Starter",
            "team_lead":"Ashraf",
            "avatar":"https:/upbox.ajt.my/template/img/team/11.png",
            "cost":"RM 3,157.39",
            "revenue":"RM 9,640.99",
            "hourly":"RM 9.21",
            "profit":"RM 6,483.59",
            "hourly_number":9.20965
          },
          {
            "bu_id":16,
            "bu_name":"Video MY BU",
            "team_id":25,
            "team_name":"Video MY Team",
            "team_lead":"Hakimi",
            "avatar":"https:/upbox.ajt.my/template/img/team/8.png",
            "cost":"RM 7,589.11",
            "revenue":"RM 15,349.20",
            "hourly":"RM 7.35",
            "profit":"RM 7,760.09",
            "hourly_number":7.34857
          },
          {
            "bu_id":7,
            "bu_name":"Job Ad BU",
            "team_id":20,
            "team_name":"Capitalism Crew",
            "team_lead":"Alex",
            "avatar":"https:/upbox.ajt.my/template/img/team/4.png",
            "cost":"RM 3,420.07",
            "revenue":"RM 7,825.20",
            "hourly":"RM 6.26",
            "profit":"RM 4,405.13",
            "hourly_number":6.25729
          },
          {
            "bu_id":13,
            "bu_name":"MK/RB Product BU",
            "team_id":22,
            "team_name":"MK/RB Product Team",
            "team_lead":"Afin",
            "avatar":"https:/upbox.ajt.my/template/img/team/2.png",
            "cost":"RM 34,823.80",
            "revenue":"RM 49,945.80",
            "hourly":"RM 6.14",
            "profit":"RM 15,122.00",
            "hourly_number":6.13716
          },
          {
            "bu_id":19,
            "bu_name":"HR ID BU",
            "team_id":28,
            "team_name":"HR ID Team",
            "team_lead":"Sarah Dewi",
            "avatar":"https:/upbox.ajt.my/template/img/team/2.png",
            "cost":"RM 1,875.15",
            "revenue":"RM 4,000.00",
            "hourly":"RM 6.04",
            "profit":"RM 2,124.85",
            "hourly_number":6.03651
          },
          {
            "bu_id":20,
            "bu_name":"MK ID BU",
            "team_id":29,
            "team_name":"MK ID Team",
            "team_lead":"Nanda",
            "avatar":"https:/upbox.ajt.my/template/img/team/2.png",
            "cost":"RM 4,547.40",
            "revenue":"RM 9,599.66",
            "hourly":"RM 5.74",
            "profit":"RM 5,052.26",
            "hourly_number":5.7412
          },
          {
            "bu_id":12,
            "bu_name":"SEO/SEM Marketing BU",
            "team_id":21,
            "team_name":"SEO/SEM Marketing Team",
            "team_lead":"Willis",
            "avatar":"https:/upbox.ajt.my/template/img/team/6.png",
            "cost":"RM 11,192.10",
            "revenue":"RM 14,159.30",
            "hourly":"RM 4.21",
            "profit":"RM 2,967.22",
            "hourly_number":4.2148
          },
          {
            "bu_id":14,
            "bu_name":"AJT Product BU",
            "team_id":23,
            "team_name":"AJT Product Team",
            "team_lead":"Bernie",
            "avatar":"https:/upbox.ajt.my/template/img/team/2.png",
            "cost":"RM 12,645.10",
            "revenue":"RM 12,987.40",
            "hourly":"RM 0.28",
            "profit":"RM 342.33",
            "hourly_number":0.277865
          },
          {
            "bu_id":8,
            "bu_name":"Sonar BU",
            "team_id":15,
            "team_name":"Thanos & Family",
            "team_lead":"Louis",
            "avatar":"https:/upbox.ajt.my/template/img/team/8.png",
            "cost":"RM 7,867.94",
            "revenue":"RM 7,873.85",
            "hourly":"RM 0.01",
            "profit":"RM 5.91",
            "hourly_number":0.0112009
          },
          {
            "bu_id":18,
            "bu_name":"HR MY BU",
            "team_id":27,
            "team_name":"HR MY Team",
            "team_lead":"Li Peng",
            "avatar":"https:/upbox.ajt.my/template/img/team/2.png",
            "cost":"RM 3,142.03",
            "revenue":"RM 2,000.00",
            "hourly":"RM -1.62",
            "profit":"RM -1,142.03",
            "hourly_number":-1.62221
          }
        ]
      };
    },
    mounted() {
    },
    methods: {
    },
  };
</script>


