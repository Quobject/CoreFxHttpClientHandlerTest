using CoreFxHttpClientHandlerTest;
using System;
using Xunit;

namespace XUnitTestProject1
{
    public class UnitTest1
    {
        [Fact]
        public async void Test1()
        {
            Assert.True(await Program.Run());
        }
    }
}
