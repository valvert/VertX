require ("vertx")
vertx.createHttpClient().getNow(8080, "localhost", "", response -> {
  response.bodyHandler(System.out::println);
});