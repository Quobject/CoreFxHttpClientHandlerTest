using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Linq;

namespace CoreFxHttpClientHandlerTest
{
    public class Program
    {
        private static void Main(string[] args)
        {            
        }

        public static async Task<bool> Run()
        {
            var ignoreTls = true;

            using (var httpClientHandler = new HttpClientHandler())
            {
                if (ignoreTls)
                {
                    httpClientHandler.ServerCertificateCustomValidationCallback = (message, cert, chain, errors) => { return true; };
                }

                using (var client = new HttpClient(httpClientHandler))
                {
                    //using (HttpResponseMessage response = await client.GetAsync("https://hub.quobject.io/get"))
                    //{
                    //    Console.WriteLine(response.StatusCode);
                    //    var responseContent = await response.Content.ReadAsStringAsync();
                    //    Console.WriteLine(responseContent);
                    //}

                    //var toBytes = Encoding.UTF8.GetBytes("{ \"id\": \"4\" }");
                    var toBytes = Encoding.UTF8.GetBytes("");
                    //byte[] toBytes = new byte[0x0]();
                    using (var httpContent = new StringContent("{ \"id\": \"4\" }", Encoding.UTF8, "application/json"))
                    //using (var httpContent = new ByteArrayContent(toBytes))
                    {
                        httpContent.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/json");
                        var request = new HttpRequestMessage(HttpMethod.Post, "http://hub.quobject.io/api/users")
                        {
                            Content = httpContent
                        };
                        httpContent.Headers.Add("Cookie", "a:e");

                        using (HttpResponseMessage response = await client.SendAsync(request))
                        {
                            var contentType = response.Content.Headers.GetValues("Content-Type").Aggregate("", (acc, x) => acc + x).Trim();


                           


                            Console.WriteLine(response.StatusCode);

                            var responseContent = await response.Content.ReadAsStringAsync();
                            Console.WriteLine(responseContent);
                        }
                    }
                }
            }

            return true;
        }
    }
}