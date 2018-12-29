<template>
  <div class="bg-account-pages">
    <!-- Register -->
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12">

                        <div class="wrapper-page">
                            <div class="account-pages">
                                <div class="account-box">

                                    <!-- Logo box-->
                                    <div class="account-logo-box">
                                        <h2 class="text-uppercase text-center">
                                            <a href="index.html" class="text-success">
                                                <span><img src="assets/images/logo_dark.png" alt="" height="28"></span>
                                            </a>
                                        </h2>
                                    </div>

                                    <div class="account-content">
                                        <form class="form-horizontal" action="#">
                                            <div class="form-group mb-3">
                                                <label for="username" class="font-weight-medium">Full Name</label>
                                                <input class="form-control" type="text" id="username" required="" placeholder="Michael Zenaty">
                                            </div>

                                            <div class="form-group mb-3">
                                                <label for="emailaddress" class="font-weight-medium">Email address</label>
                                                <input class="form-control" type="email" id="emailaddress" required="" placeholder="john@deo.com">
                                            </div>

                                            <div class="form-group mb-3">
                                                <label for="password" class="font-weight-medium">Password</label>
                                                <input class="form-control" type="password" required="" id="password" placeholder="Enter your password">
                                            </div>

                                            <div class="form-group mb-3">
                                                <div class="checkbox checkbox-info">
                                                    <input id="remember" type="checkbox" checked>
                                                    <label for="remember">
                                                        I accept <a href="#" class="text-muted">Terms and Conditions</a>
                                                    </label>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <button class="btn btn-block btn-success waves-effect waves-light" type="submit">Free Sign Up</button>
                                            </div>
                                        </form> <!-- end form -->

                                        <div class="row mt-3">
                                            <div class="col-12 text-center">
                                                <p class="text-muted">Already have an account? <a href="page-register.html" class="text-dark ml-1"><b>Sign In</b></a></p>
                                            </div>
                                        </div>

                                    </div> <!-- end account-content -->

                                </div> <!-- end account-box -->
                            </div>
                            <!-- end account-page-->
                        </div>
                        <!-- end wrapper-page -->

                    </div> <!-- end col -->
                </div> <!-- end row -->
            </div> <!-- end container -->
        </section>
        <!-- END HOME -->
  </div>
</template>

<script>

</script>


<style scoped>


</style>
