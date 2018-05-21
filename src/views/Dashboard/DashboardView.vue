<template>
  <div>
    <div class="c-toolbar u-justify-center u-mb-small">
        <div class="col-12 col-lg-10 col-xl-8">
            <div class="row">
                <div class="col-6 col-md-3 c-toolbar__state">
                    <h4 class="c-toolbar__state-number">354</h4>
                    <span class="c-toolbar__state-title">Customers</span>
                </div>
                <div class="col-6 col-md-3 c-toolbar__state">
                    <h4 class="c-toolbar__state-number">54%</h4>
                    <span class="c-toolbar__state-title">Target Achieved</span>
                </div>
                <div class="col-6 col-md-3 c-toolbar__state">
                    <h4 class="c-toolbar__state-number">13%</h4>
                    <span class="c-toolbar__state-title">New Sales</span>
                </div>
                <div class="col-6 col-md-3 c-toolbar__state">
                    <h4 class="c-toolbar__state-number">21</h4>
                    <span class="c-toolbar__state-title">New Customers</span>
                </div>
            </div><!-- // .row -->
        </div><!-- // -->
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
            <div class="c-card c-card--responsive u-mb-medium">
                <div class="c-card__header c-card__header--transparent o-line">
                    <h5 class="c-card__title">Invoicing</h5>
                    <a class="c-card__meta" href="#">View all invoices</a>
                </div>

                <table class="c-table u-border-zero">
                    <tbody>
                        <tr class="c-table__row u-border-top-zero">
                            <td class="c-table__cell u-text-mute">00450</td>
                            <td class="c-table__cell">Design Works</td>
                            <td class="c-table__cell u-text-mute">Carlson Limited</td>
                            <td class="c-table__cell u-text-right">
                                <span class="c-badge c-badge--small c-badge--danger">Delayed</span>
                            </td>
                            <td class="c-table__cell">$2,580</td>
                        </tr>

                        <tr class="c-table__row">
                            <td class="c-table__cell u-text-mute">00569</td>
                            <td class="c-table__cell">New Illustrations</td>
                            <td class="c-table__cell u-text-mute">Twitter</td>
                            <td class="c-table__cell">
                                <span class="c-badge c-badge--small c-badge--warning">Pending Invoice</span>
                            </td>
                            <td class="c-table__cell">$2,580</td>
                        </tr>

                        <tr class="c-table__row">
                            <td class="c-table__cell u-text-mute">01875</td>
                            <td class="c-table__cell">UX Study</td>
                            <td class="c-table__cell u-text-mute">Re-Research</td>
                            <td class="c-table__cell u-text-right">
                                <span class="c-badge c-badge--small c-badge--success">Paid Today</span>
                            </td>
                            <td class="c-table__cell">$2,580</td>
                        </tr>

                        <tr class="c-table__row">
                            <td class="c-table__cell u-text-mute">00369</td>
                            <td class="c-table__cell">Landing Page</td>
                            <td class="c-table__cell u-text-mute">Travelsimo</td>
                            <td class="c-table__cell u-text-right">
                                <span class="c-badge c-badge--small c-badge--secondary">Paid Today</span>
                            </td>
                            <td class="c-table__cell">$2,580</td>
                        </tr>

                        <tr class="c-table__row">
                            <td class="c-table__cell u-text-mute">00689</td>
                            <td class="c-table__cell">iOS App Design</td>
                            <td class="c-table__cell u-text-mute">Silingo</td>
                            <td class="c-table__cell u-text-right">
                                <span class="c-badge c-badge--small c-badge--secondary">Paid Today</span>
                            </td>
                            <td class="c-table__cell">$2,580</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="col-md-6">
            <div class="c-card u-mb-medium">
                <div class="c-card__header c-card__header--transparent o-line">
                    <h5 class="c-card__title">Tasks</h5>
                    <a class="c-card__meta" href="#">View all all tasks</a>
                </div>

                <div class="c-todo u-border-top-zero">
                    <input class="c-todo__input" id="todo1" type="checkbox" name="exampe-list">
                    <label class="c-todo__label" for="todo1">
                        Create new prototype for the landing page
                    </label>

                    <span class="c-badge c-badge--danger c-badge--small">Due Today</span>
                </div><!-- // .c-todo -->

                <div class="c-todo">
                    <input class="c-todo__input" id="todo2" type="checkbox" name="exampe-list">
                    <label class="c-todo__label" for="todo2">
                        Add new Google Analytics code to all main files
                    </label>

                    <span class="c-badge c-badge--secondary c-badge--small">Due in 2 Days</span>
                </div><!-- // .c-todo -->

                <div class="c-todo">
                    <input class="c-todo__input" id="todo3" type="checkbox" name="exampe-list">
                    <label class="c-todo__label" for="todo3">
                        Finish Dashboard UI Kit update
                    </label>

                    <span class="c-badge c-badge--secondary c-badge--small">Due in 3 Days</span>
                </div><!-- // .c-todo -->

                <div class="c-todo is-completed">
                    <input class="c-todo__input" id="todo4" type="checkbox" name="exampe-list" checked="">
                    <label class="c-todo__label" for="todo4">
                        Update parallax scroll on team page
                    </label>

                    <span class="c-badge c-badge--secondary c-badge--small">Due in 5 Days</span>
                </div><!-- // .c-todo -->

                <div class="c-todo is-completed">
                    <input class="c-todo__input" id="todo5" type="checkbox" name="exampe-list" checked="">
                    <label class="c-todo__label" for="todo5">
                        Update parallax scroll on team page
                    </label>

                    <span class="c-badge c-badge--secondary c-badge--small">Due in 1 Week</span>
                </div><!-- // .c-todo -->
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard'
}
</script>
