
  const state = {
    chapEvents: null,
    pondEvents: null,
  }
  const mutations = {
    GET_CHAP_SKATES(state) {
      state.isLoading = true;
      const url =
        "https://apps.daysmartrecreation.com/dash/jsonapi/api/v1/teams?cache[save]=false&page[size]=10&sort=start_date&include=registrationInfo%2Cfacility%2Cleague.season.priorities.memberships%2CskillLevel%2CprogramType%2Csport%2Cleague.houseProduct.locations%2Cproduct.locations%2Cevents%2CregistrableEvents&filter[league_id]=2289&filter[visible_online]=true&company=chaparralice";
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const events = data.data.map((event) => {
            return {
              url: `https://member.daysmartrecreation.com/#/online/chaparralice/login?next=/online/chaparralice/group/register/${event.id}`,
              name: event.attributes.name,
              startDate: event.attributes.start_date,
              eventLength: event.attributes.event_length,
              description: event.attributes.description,
            };
          });
          state.chapEvents = events;
          console.log(state.chapEvents);
        })
        .finally(() => (state.isLoading = false));
    },
    GET_POND_SKATES(state) {
      state.isLoadings = true;

      // friday = 5
      const today = new Date();
      const currentDay = today.getDay();
      const daysTillFriday =
        5 - currentDay > 0 ? 5 - currentDay : 5 - currentDay + 7;

      Date.prototype.addDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      };
      const fridays = [];
      let friday = today.addDays(daysTillFriday);
      // push first friday
      fridays.push(friday);
      // push next number fridays
      for (let i = 1; i <= 1; i++) {
        fridays.push(friday.addDays(7 * i));
      }
      const dateToUrl = (date) => {
        const dateString = date.toString().split(" ");
        const mapDate = (month) => {
          switch (month) {
            case "Nov":
              return "november";
            case "Dec":
              return "december";
            case "Jan":
              return "january";
            case "Feb":
              return "february";
            case "Mar":
              return "march";
            case "Apr":
              return "april";
            case "May":
              return "may";
            case "Jun":
              return "june";
            case "Jul":
              return "july";
            case "Aug":
              return "august";
            default:
              return month;
          }
        };
        const finalDate = `${mapDate(dateString[1])}-${dateString[2]}th`;
        return finalDate;
      };
      const events = fridays.map((day) => {
        return {
          url: `https://the-pond-hockey-club.myshopify.com/products/${dateToUrl(
            day
          )}-lunchtime-adult-5v5-shinny-12-30-1-45`,
          date: day,
        };
      });
      state.pondEvents = events;
    },
  }

  const actions = {

    getChapSkates({ commit }) {
      commit("GET_CHAP_SKATES");
    },
    getPondSkates({ commit }) {
      commit("GET_POND_SKATES");
    },
  }

  export default {
    state,
    actions,
    mutations,
  }